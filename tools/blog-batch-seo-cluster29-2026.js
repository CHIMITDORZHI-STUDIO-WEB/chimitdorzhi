// SEO-кластер 29: ИИ-разбор первички в таблицу.
const C = (s) => require('./blog-content-' + s + '.js');
const D = '2026-09-10';
const S = 'https://chimitdorzhi.tech';

const SVC_BIZ = { title: 'Что я делаю для бизнеса', services: [
  { icon: 'ph-fill ph-robot', label: 'Боты в Telegram, MAX, VK' },
  { icon: 'ph-fill ph-gear', label: 'Автоматизация процессов и CRM' },
  { icon: 'ph-fill ph-chart-bar', label: 'Аналитика и дашборды' },
  { icon: 'ph-fill ph-globe', label: 'Сайты и лендинги под ключ' },
]};

const OSS = { url: `${S}/predlozheniya/open-source-pod-klyuch/`, label: 'Развернуть open-source под ключ' };

const FAQ_VYV = [{ id: 'faq', text: 'Частые вопросы' }, { id: 'vyvody', text: 'Коротко о главном' }];
const E = (o) => Object.assign({ published: true, datePublished: D, dateModified: D, readingMinutes: 4, servicesOffer: SVC_BIZ, ctaInternal: OSS }, o, { contentHtml: C(o.slug) });

module.exports = [

  E({ slug: 'ii-razbiraet-cheki-v-tablicu-2026', category: 'opensource', heroIcon: 'ph-fill ph-receipt',
    title: 'ИИ разбирает чеки в таблицу: что это заменяет, а что нет',
    metaTitle: 'ИИ разбирает чеки в таблицу: что заменяет, а что нет',
    metaDescription: 'Модель читает чеки, счета и выписки и раскладывает их по вашим категориям. Разбираю, почему это не бухгалтерия и зачем здесь локальная модель.',
    excerpt: 'Самая скучная часть учёта — не расчёт налога, а ввод данных с чеков и счетов. Разбираю класс инструментов, которые делают это моделью, почему называть их бухгалтерией неверно и почему возможность работать на локальной модели здесь важнее обычного.',
    tags: ['учёт', 'OCR', 'локальный ИИ', 'open source'],
    toc: [
      { id: 'chto-delaet', text: 'Что делает инструмент' },
      { id: 'ne-buhgalteriya', text: 'Это не бухгалтерия, и это правильно' },
      { id: 'lokalno', text: 'Почему возможность локальной модели здесь важнее обычного' },
      { id: 'komu', text: 'Кому это окупится' },
      { id: 'ogranicheniya', text: 'Что учесть до внедрения' },
      ...FAQ_VYV,
    ],
    relatedSlugs: ['akaunting-uchet-scheta-2026', 'paperless-ngx-arhiv-dokumentov-2026', 'ai-buhgalter-avtomatizaciya-rutiny-2026', 'novye-ocr-modeli-2026-dokumenty-bez-oblaka'] }),

];
