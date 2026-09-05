# chimitdorzhi

Сайт chimitdorzhi.tech: блог, услуги, предложения. Статика, собирается скриптами из `tools/`.

## Сборка

```bash
node tools/build-blog.js      # генерирует страницы блога, хаб, sitemap, фиды
node tools/check-articles.js  # линтер статей: мета, дубликаты slug, обязательные поля
```

Порядок важен: `build-blog.js` запускается последним в цепочке сборки sitemap.

## SEO-проверки готовых страниц

```bash
node tools/seo-checks/run.js                      # 30 последних изменённых статей
node tools/seo-checks/run.js --all                # все (~1 с на страницу)
node tools/seo-checks/run.js <slug> [<slug> ...]  # конкретные статьи
node tools/seo-checks/run.js --limit=100
```

Проверяет две вещи:

- **микроразметку** (JSON-LD: Article, FAQPage) — ошибки здесь блокирующие, код выхода 1;
- **качество текста** — общий балл, признаки машинного текста, доля воды. Не блокирует, а показывает, что стоит перечитать глазами.

Ориентиры по блогу на сентябрь 2026: средний балл 83/100, признаки ИИ-текста и вода — 0. Флаг «repetitive» около 31 есть у всех страниц одинаково, это шаблонные блоки (меню, футер, CTA) в подсчёте, а не проблема текста.

Скрипты `validate-schema.py` и `content-quality.py` взяты из [claude-seo](https://github.com/AgriciDaniel/claude-seo) (MIT, лицензия сохранена в `tools/seo-checks/LICENSE-claude-seo`). Остальная часть того проекта завязана на Google Search Console и кластеризацию по выдаче Google — для сайта на яндексовом трафике неприменима, поэтому не переносилась.

Требуется Python 3 с `beautifulsoup4`, `requests`, `lxml`.
