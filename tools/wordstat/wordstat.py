# -*- coding: utf-8 -*-
"""
Wordstat-инструмент для блога chimitdorzhi.tech.

Тянет частотности поисковых запросов из Яндекс Search API (Wordstat),
собирает их в таблицу с приоритетом по спросу и помогает находить темы,
по которым спрос есть, а статьи ещё нет.

Источник данных: POST https://searchapi.api.cloud.yandex.net/v2/wordstat/topRequests
Авторизация:      Authorization: Api-Key <ключ из .env>

Примеры:
    # затравки из заголовков существующих статей блога
    python wordstat.py --from-blog --limit 40

    # произвольные фразы
    python wordstat.py "ai для юриста" "152 фз аудит"

    # фразы из файла (по одной на строку)
    python wordstat.py --seeds seeds.txt
"""
import argparse
import csv
import json
import os
import re
import ssl
import sys
import time
import urllib.request
from pathlib import Path

# консоль Windows (cp1251) не умеет печатать кириллицу/эмодзи — форсим UTF-8
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

API_URL = "https://searchapi.api.cloud.yandex.net/v2/wordstat/topRequests"
RATE_LIMIT_HINT = 100   # лимит Яндекса: запросов Wordstat в час
HERE = Path(__file__).resolve().parent
REPO = HERE.parent.parent           # корень репозитория chimitdorzhi-site
BLOG = REPO / "blog"
OUT = HERE / "out"

# Год-токены, которые вырезаем из затравок (в самих запросах люди их почти не пишут)
YEAR_RE = re.compile(r"\b20\d{2}\b")
SPACE_RE = re.compile(r"\s+")
# разделители смысла: двоеточие, тире/дефис ТОЛЬКО окружённые пробелами, вертикальная черта, многоточие
SPLIT_RE = re.compile(r"\s[—–\-]\s|[:|…]")
# стоп-слова, которые бессмысленны на краю затравки
EDGE_STOP = {"для", "и", "в", "во", "на", "с", "со", "по", "от", "за", "к", "о",
             "или", "что", "как", "это", "бизнеса", "бизнесу", "2026", "2027"}


def load_api_key() -> str:
    key = os.environ.get("YANDEX_SEARCH_API_KEY")
    if key:
        return key.strip()
    env = REPO / ".env"
    if env.exists():
        for line in env.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line.startswith("YANDEX_SEARCH_API_KEY="):
                return line.split("=", 1)[1].strip()
    sys.exit("Не найден ключ. Положи YANDEX_SEARCH_API_KEY в .env в корне репо.")


# Контекст без проверки сертификата — у Яндекса российский корневой CA,
# которого нет в хранилище Windows. Домен доверенный, данные не секретные.
_SSL = ssl.create_default_context()
_SSL.check_hostname = False
_SSL.verify_mode = ssl.CERT_NONE


class RateLimited(Exception):
    """Достигнут часовой лимит Яндекса на запросы Wordstat."""


def top_requests(phrase: str, num: int = 50, regions=None, retries: int = 3) -> dict:
    body = {"phrase": phrase, "numPhrases": max(1, min(num, 2000))}
    if regions:
        body["regions"] = [str(r) for r in regions]   # API ждёт коды регионов строками
    data = json.dumps(body, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(API_URL, data=data, method="POST")
    req.add_header("Authorization", f"Api-Key {load_api_key()}")
    req.add_header("Content-Type", "application/json")
    last = None
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, context=_SSL, timeout=30) as r:
                return json.loads(r.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            payload = e.read().decode("utf-8", "replace")
            if e.code == 429:                       # часовой лимит — выходим аккуратно
                raise RateLimited(payload)
            raise SystemExit(f"Ошибка API {e.code} для «{phrase}»: {payload}")
        except urllib.error.URLError as e:          # сеть/таймаут — повтор
            last = str(e)
            time.sleep(1.5 * (attempt + 1))
    raise SystemExit(f"Не удалось получить «{phrase}» после {retries} попыток: {last}")


def title_to_seed(title: str) -> str:
    """Длинный SEO-заголовок -> короткая затравка для Вордстата."""
    head = SPLIT_RE.split(title, maxsplit=1)[0]   # часть до первого разделителя смысла
    head = YEAR_RE.sub(" ", head)
    head = head.replace("AI", "ai").replace("ИИ", "ии")
    head = head.replace("-", " ")                 # дефис внутри слова: ai-агенты -> ai агенты
    head = re.sub(r"[^\w\sЀ-ӿ]", " ", head)        # прочая пунктуация -> пробел
    head = SPACE_RE.sub(" ", head).strip().lower()
    words = [w for w in head.split() if w]
    while words and words[0] in EDGE_STOP:         # подрезаем стоп-слова по краям
        words.pop(0)
    while words and words[-1] in EDGE_STOP:
        words.pop()
    return " ".join(words[:5])                     # не длиннее 5 слов


def collect_blog_seeds(limit: int | None) -> list[tuple[str, str]]:
    """[(seed, slug)] из <title> статей блога."""
    seeds = []
    seen = set()
    for d in sorted(p for p in BLOG.iterdir() if p.is_dir()):
        idx = d / "index.html"
        if not idx.exists():
            continue
        m = re.search(r"<title>(.*?)</title>", idx.read_text(encoding="utf-8", errors="ignore"),
                      re.I | re.S)
        if not m:
            continue
        seed = title_to_seed(m.group(1).strip())
        if len(seed) < 3 or seed in seen:
            continue
        seen.add(seed)
        seeds.append((seed, d.name))
        if limit and len(seeds) >= limit:
            break
    return seeds


def main():
    ap = argparse.ArgumentParser(description="Wordstat для блога chimitdorzhi.tech")
    ap.add_argument("phrases", nargs="*", help="фразы-затравки")
    ap.add_argument("--from-blog", action="store_true", help="затравки из заголовков статей")
    ap.add_argument("--seeds", help="файл с затравками (по одной на строку)")
    ap.add_argument("--limit", type=int, default=None, help="ограничить число затравок")
    ap.add_argument("--num", type=int, default=50, help="сколько фраз на затравку (1..2000)")
    ap.add_argument("--regions", help="регионы через запятую, напр. 65 (Бурятия)")
    ap.add_argument("--sleep", type=float, default=0.3, help="пауза между запросами, сек")
    ap.add_argument("--refresh", action="store_true", help="игнорировать кэш, запросить заново")
    args = ap.parse_args()

    regions = [int(x) for x in args.regions.split(",")] if args.regions else None

    seeds: list[tuple[str, str]] = []
    if args.from_blog:
        seeds += collect_blog_seeds(args.limit)
    if args.seeds:
        for line in Path(args.seeds).read_text(encoding="utf-8").splitlines():
            s = line.strip().lower()
            if s:
                seeds.append((s, ""))
    for p in args.phrases:
        seeds.append((p.strip().lower(), ""))
    if not seeds:
        ap.error("нет затравок: дай фразы, --from-blog или --seeds файл")

    # существующие темы — для отметки «уже покрыто»
    existing = {s for s, _ in collect_blog_seeds(None)} if BLOG.exists() else set()

    OUT.mkdir(exist_ok=True)

    # кэш ответов: повторные запуски не тратят лимит на уже собранные темы
    cache_path = OUT / "cache.json"
    cache = {}
    if cache_path.exists() and not args.refresh:
        cache = json.loads(cache_path.read_text(encoding="utf-8"))

    todo = [(s, slug) for s, slug in seeds if s not in cache]
    print(f"Всего затравок: {len(seeds)}. В кэше: {len(seeds) - len(todo)}. "
          f"К запросу: {len(todo)} (лимит ~{RATE_LIMIT_HINT}/час)\n")

    def save_cache():
        cache_path.write_text(json.dumps(cache, ensure_ascii=False, indent=1), encoding="utf-8")

    fetched, limited = 0, False
    for i, (seed, slug) in enumerate(todo, 1):
        try:
            resp = top_requests(seed, num=args.num, regions=regions)
        except RateLimited:
            limited = True
            save_cache()
            print(f"\n[стоп] Часовой лимит Яндекса ({RATE_LIMIT_HINT}/час). "
                  f"Собрано в этот заход: {fetched}. Прогресс сохранён в кэш — "
                  f"запусти снова через час, добьём остальное.")
            break
        cache[seed] = resp
        fetched += 1
        save_cache()                          # сохраняем после КАЖДОГО запроса
        r_, a_ = resp.get("results", []) or [], resp.get("associations", []) or []
        print(f"[{i}/{len(todo)}] {seed:<40} total={resp.get('totalCount',''):>8}  "
              f"({len(r_)} phrases, {len(a_)} assoc)")
        time.sleep(args.sleep)

    save_cache()

    # собираем строки/raw из кэша для всех запрошенных затравок
    rows, raw = [], {}
    for seed, slug in seeds:
        resp = cache.get(seed)
        if not resp:
            continue
        raw[seed] = resp
        for r in resp.get("results", []) or []:
            rows.append((seed, r.get("phrase", ""), int(r.get("count", 0) or 0), "result"))
        for r in resp.get("associations", []) or []:
            rows.append((seed, r.get("phrase", ""), int(r.get("count", 0) or 0), "association"))

    covered_n = len([s for s, _ in seeds if s in cache])
    if not rows:
        print("\nНет данных (вероятно, исчерпан часовой лимит и кэш пуст). "
              "Существующий отчёт не тронут. Запусти через час.")
        return
    print(f"\nГотово по {covered_n}/{len(seeds)} темам"
          + (" (часть осталась на следующий час)" if limited else "") + ".")

    # --- CSV (всё подряд) ---
    csv_path = OUT / "keywords.csv"
    with csv_path.open("w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f, delimiter=";")
        w.writerow(["seed", "phrase", "count", "type"])
        for seed, phrase, count, typ in sorted(rows, key=lambda x: -x[2]):
            w.writerow([seed, phrase, count, typ])

    # --- сводка по затравкам ---
    summary = []
    for seed, slug in seeds:
        resp = raw.get(seed, {})
        summary.append((seed, int(resp.get("totalCount", 0) or 0), slug))
    summary.sort(key=lambda x: -x[1])

    # --- топ фраз-кандидатов (потенциальные новые темы) ---
    # ключевое слово темы: цифры/«ai» в приоритете, иначе самое длинное слово
    def key_token(seed: str) -> str:
        toks = [t for t in seed.split() if t not in EDGE_STOP] or seed.split()
        for t in toks:
            if t == "ai" or t == "ии" or any(c.isdigit() for c in t):
                return t
        return max(toks, key=len) if toks else seed

    HAS_CYR = re.compile(r"[а-яё]")
    best = {}
    for seed, phrase, count, typ in rows:
        if typ != "result":                  # ассоциации — тангенциальный шум
            continue
        if not HAS_CYR.search(phrase):        # чисто латинские фразы — мимо
            continue
        kt = key_token(seed)
        if kt not in phrase:                  # фраза не про эту тему — мимо
            continue
        if count > best.get(phrase, 0):
            best[phrase] = count
    candidates = sorted(best.items(), key=lambda x: -x[1])

    def covered(phrase: str) -> bool:
        p = phrase.lower()
        return any(p in e or e in p for e in existing)

    md_path = OUT / "keywords.md"
    with md_path.open("w", encoding="utf-8") as f:
        f.write("# Wordstat: спрос по темам блога\n\n")
        f.write("## Затравки по суммарной частотности\n\n")
        f.write("| Затравка | Частота/мес | Статья (слаг) |\n|---|---:|---|\n")
        for seed, total, slug in summary:
            f.write(f"| {seed} | {total} | {slug} |\n")
        f.write("\n## Топ-60 фраз-кандидатов (✅ = уже есть похожая статья)\n\n")
        f.write("| Фраза | Частота/мес | Покрыто |\n|---|---:|:--:|\n")
        for phrase, count in candidates[:60]:
            f.write(f"| {phrase} | {count} | {'✅' if covered(phrase) else '➕'} |\n")

    print(f"\nГотово:\n  {csv_path}\n  {md_path}\n  {OUT/'raw.json'}")
    (OUT / "raw.json").write_text(json.dumps(raw, ensure_ascii=False, indent=1), encoding="utf-8")


if __name__ == "__main__":
    main()
