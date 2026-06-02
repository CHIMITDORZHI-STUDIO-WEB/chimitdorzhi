# Кросспостинг блога → Telegraph + VC.ru

Автоматически берёт опубликованные статьи из `blog-data.js`, конвертирует и
постит на площадки. Учёт ведётся в `crosspost-state.json` (повторно не постит).

## Как работает автоматика

GitHub Action `.github/workflows/crosspost.yml` запускается каждый день в 11:30 МСК
и публикует следующие N статей (по умолчанию 5), затем коммитит обновлённый state.

- **Telegraph** — работает всегда. Токен в секрете `TELEGRAPH_TOKEN`.
- **VC.ru** — включается, только если задан секрет `VC_TOKEN`. Иначе пропускается.

Запустить вручную: вкладка **Actions → Crosspost (Telegraph + VC) → Run workflow**
(можно выбрать platform / batch / order).

## Ручной запуск локально

```bash
# Только Telegraph (в этой среде нужен прокси-флаг):
NODE_USE_ENV_PROXY=1 node tools/crosspost.js --platform telegraph --batch 5

# С VC:
VC_TOKEN=xxxx NODE_USE_ENV_PROXY=1 node tools/crosspost.js --platform all --batch 5

# Сухой прогон (ничего не постит):
node tools/crosspost.js --platform all --batch 2 --dry
```

Опции: `--platform telegraph|vc|all`, `--batch N`, `--order old|new`, `--dry`.

## Как получить VC_TOKEN (X-Device-Token)

1. Войдите в аккаунт на https://vc.ru в браузере (Chrome).
2. F12 → вкладка **Network (Сеть)**.
3. Обновите страницу, кликните любой запрос к `api.vc.ru`.
4. В разделе **Request Headers** найдите `X-Device-Token: ...` — скопируйте значение.
   (Альтернатива: вкладка **Application → Local Storage → vc.ru**, ключ с токеном.)
5. Добавьте в секреты репозитория:
   `gh secret set VC_TOKEN --repo CHIMITDORZHI-STUDIO-WEB/chimitdorzhi`
6. (Необязательно) `VC_SUBSITE_ID` — id вашего блога. Если не задать, берётся
   автоматически из `/subsite/me`.

> Токен привязан к сессии и может протухать — если VC перестанет постить,
> обновите секрет `VC_TOKEN` тем же способом.
