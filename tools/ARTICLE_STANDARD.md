# Стандарт статьи блога

Любая новая статья в `blog-data.js` должна соответствовать этим требованиям.
Проверка: `node tools/check-articles.js` (✗ ошибки блокируют, ⚠ — рекомендации).
Линтер также запускается при каждой сборке `build-blog.js`.

## Что генерится АВТОМАТИЧЕСКИ (трогать не нужно)

`build-blog.js` сам добавляет к каждой статье:
- schema **BlogPosting** (author=Person `#person`, publisher=Organization `#organization`, `isPartOf`=WebSite)
- **FAQPage** (из секции `<h2 id="faq">`), **BreadcrumbList**
- **Speakable** (читает `.blog-lead` и `.blog-tldr`)
- **about** — авто-связка с терминами `/slovar/` по заголовку/тегам
- OG-обложку `cover.png` 1200×630, мета-теги, canonical, hreflang
- внутренние ссылки на услуги (`autolinkServices`), оглавление, прогресс-бар чтения

То есть достаточно написать корректный объект статьи — техническая SEO/GEO-обвязка приложится сама.

## Обязательные требования (иначе ✗ ошибка)

| Требование | Правило |
|---|---|
| Объём | **≥ 2800 слов** в `contentHtml` |
| Поля | `slug, title, category, metaTitle, metaDescription, excerpt, datePublished, heroIcon, contentHtml` |
| Категория | одна из: `legal, ai-dev, ai-life, marketing, sales, media, industries, esports, development, security, finance, mlm, mwrlife` |
| TL;DR | блок `<div class="blog-tldr">` в начале (3–6 пунктов) |
| FAQ | секция `<h2 id="faq">` c **≥2** вопросами в формате `<p><strong>Вопрос?</strong> Ответ.</p>` |
| Услуги | заполнен `servicesOffer` (карточка «услуги по теме») |
| CTA | заполнен `ctaInternal` (`{url, label}`) |
| Оглавление | `toc` ≥ 3 пунктов `{id, text}` (id совпадают с `id` у `<h2>`) |
| Теги | `tags` ≥ 3 |
| **Эмодзи** | **ЗАПРЕЩЕНЫ** 😀🚀✅ — только Phosphor-иконки `<i class="ph ph-...">` |
| Дата | `datePublished` строго `YYYY-MM-DD` |
| **Маркировка** | если упоминается **Instagram/Facebook** — обязательно рядом «принадлежит Meta — признана экстремистской и запрещена в РФ» |

## Рекомендации (⚠ предупреждение)

- `metaTitle` ≤ 100 симв, `metaDescription` 60–350 симв
- `relatedSlugs` — 3 существующих слага
- первый абзац после H1 — `excerpt` (лид), он же идёт в Speakable
- экспертный тон от первого лица, конкретные цифры/цены, без воды

## Структура `contentHtml`

```
<div class="blog-tldr">
  <h3>Коротко (TL;DR)</h3>
  <ul><li>…</li><li>…</li><li>…</li></ul>
</div>
<h2 id="...">Раздел 1</h2>
<p>…</p>
<!-- callouts: <div class="blog-callout blog-callout-info"><i class="ph-fill ph-info"></i> …</div> -->
<!-- таблицы: <table class="blog-table">…</table> -->
<h2 id="faq">Частые вопросы</h2>
<p><strong>Вопрос 1?</strong> Ответ.</p>
<p><strong>Вопрос 2?</strong> Ответ.</p>
```

## Шаблон объекта статьи

```js
{
  slug: 'moy-novyy-slug-2026',
  category: 'legal',
  published: true,
  title: 'Заголовок статьи',
  metaTitle: 'SEO-заголовок (коммерческий, ≤100 симв)',
  metaDescription: 'Описание для выдачи, 60–350 симв.',
  metaKeywords: 'ключевые, слова, через, запятую',
  excerpt: 'Лид-абзац: суть статьи в 1–2 предложениях (идёт в Speakable).',
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  readingMinutes: 14,
  heroIcon: 'ph-shield-check',
  tags: ['тег1', 'тег2', 'тег3'],
  toc: [
    { id: 'razdel-1', text: 'Раздел 1' },
    { id: 'razdel-2', text: 'Раздел 2' },
    { id: 'faq', text: 'Частые вопросы' },
  ],
  relatedSlugs: ['slug-a', 'slug-b', 'slug-c'],
  ctaInternal: { url: '/services/web-development/', label: 'Обсудить проект' },
  servicesOffer: {
    eyebrow: 'Услуги по теме',
    title: 'Чем могу помочь',
    items: [ /* … */ ],
  },
  contentHtml: myArticleContent, // require('./blog-content-xxx.js'), ≥2800 слов
}
```

> Контент длинных статей выносится в отдельный файл `tools/blog-content-<имя>.js`
> и подключается через `require` в начале `blog-data.js`.
