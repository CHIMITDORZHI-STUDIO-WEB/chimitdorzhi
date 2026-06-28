// Экспорт статей блога в Markdown-зеркало для GitHub (gh-articles/).
// Цель: присутствие контента на github.com (узнаваемость, sameAs, обратные ссылки).
// Сырые .md закрыты от индексации на домене через robots (Disallow: /gh-articles/),
// чтобы не создавать дублей с HTML-страницами /blog/<slug>/.
const fs = require('fs');
const path = require('path');
const ALL = require('./blog-data.js');

const SITE = 'https://chimitdorzhi.tech';
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'gh-articles');

const CATEGORY_LABELS = {
  expert: 'Экспертное', legal: 'Право и 152-ФЗ', 'ai-dev': 'AI для разработчиков',
  'ai-life': 'AI для жизни и работы', ai: 'Искусственный интеллект', development: 'Разработка',
  security: 'Безопасность', geo: 'GEO и AI-поиск', marketing: 'Маркетинг', sales: 'Продажи',
  finance: 'Финансы', industries: 'Отрасли', 'biznes-krugozor': 'Бизнес-кругозор',
  opensource: 'Open-source и свой сервер', media: 'Медиа', esports: 'Киберспорт',
  mlm: 'Сетевой бизнес', mwrlife: 'MWR Life', career: 'Карьера',
};

function htmlToMd(html) {
  let s = String(html);
  s = s.replace(/<div class="blog-tldr">/g, '> ').replace(/<\/div>/g, '\n');
  s = s.replace(/<h3[^>]*>/g, '\n### ').replace(/<\/h3>/g, '\n');
  s = s.replace(/<h2[^>]*>/g, '\n## ').replace(/<\/h2>/g, '\n');
  s = s.replace(/<li[^>]*>/g, '\n- ').replace(/<\/li>/g, '');
  s = s.replace(/<\/?ul[^>]*>/g, '\n');
  s = s.replace(/<p[^>]*>/g, '\n').replace(/<\/p>/g, '\n');
  s = s.replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)');
  s = s.replace(/<\/?strong>/g, '**').replace(/<\/?em>/g, '*');
  s = s.replace(/<[^>]+>/g, '');
  s = s.replace(/&amp;/g, '&').replace(/&laquo;/g, '«').replace(/&raquo;/g, '»')
       .replace(/&mdash;/g, '—').replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  s = s.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  return s;
}

const published = ALL.filter(a => a && a.published === true && a.slug && a.contentHtml);

fs.mkdirSync(OUT, { recursive: true });
// чистим старые .md (кроме README), чтобы не копились удалённые статьи
for (const f of fs.readdirSync(OUT)) {
  if (f.endsWith('.md') && f !== 'README.md') fs.unlinkSync(path.join(OUT, f));
}

for (const a of published) {
  const url = `${SITE}/blog/${a.slug}/`;
  const desc = a.metaDescription || a.excerpt || '';
  const fm = [
    '---',
    `title: ${JSON.stringify(a.title)}`,
    `description: ${JSON.stringify(desc)}`,
    `date: ${a.datePublished || ''}`,
    `category: ${a.category || ''}`,
    `canonical: ${url}`,
    '---',
  ].join('\n');
  const body = htmlToMd(a.contentHtml);
  const md = `${fm}\n\n# ${a.title}\n\n${body}\n\n---\n\n**Оригинал статьи:** ${url}\n\n© Чимитдоржи Дарижапов · [chimitdorzhi.tech](${SITE}/)\n`;
  fs.writeFileSync(path.join(OUT, `${a.slug}.md`), md, 'utf8');
}

// README — индекс по категориям
const byCat = {};
for (const a of published) (byCat[a.category] = byCat[a.category] || []).push(a);
const cats = Object.keys(byCat).sort((x, y) => (CATEGORY_LABELS[x] || x).localeCompare(CATEGORY_LABELS[y] || y));
let readme = `# Блог Чимитдоржи Дарижапова — зеркало статей\n\n` +
  `> Markdown-зеркало экспертного блога [chimitdorzhi.tech](${SITE}/) — IT, AI/ML, кибербезопасность и 152-ФЗ для бизнеса в России. Автор: **Чимитдоржи Дарижапов** (Chimitdorzhi Darizhapov).\n\n` +
  `Всего статей: **${published.length}**. Оригиналы и удобное чтение — на сайте: ${SITE}/blog/\n\n`;
for (const c of cats) {
  readme += `## ${CATEGORY_LABELS[c] || c}\n\n`;
  for (const a of byCat[c].sort((x, y) => String(y.datePublished).localeCompare(String(x.datePublished)))) {
    readme += `- [${a.title}](./${a.slug}.md) · [читать на сайте](${SITE}/blog/${a.slug}/)\n`;
  }
  readme += '\n';
}
readme += `---\n\n© Чимитдоржи Дарижапов · [chimitdorzhi.tech](${SITE}/) · Telegram [@chimitdorzhi](https://t.me/chimitdorzhi)\n`;
fs.writeFileSync(path.join(OUT, 'README.md'), readme, 'utf8');

console.log(`Экспортировано в gh-articles/: ${published.length} статей + README (${cats.length} категорий)`);
