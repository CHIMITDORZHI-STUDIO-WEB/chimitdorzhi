module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-buildings',
    title: 'Корпоративный сайт компании из ОАЭ: два языка и анимация без шаблонности',
    metaTitle: 'Кейс: двуязычный сайт компании из ОАЭ',
    metaDescription: 'Статический сайт на двух языках для компании из свободной зоны ОАЭ: антиква, GSAP-силуэт из 92 столбиков, WCAG AA у 180 элементов, LCP 1,25 с на 4G.',
    excerpt: 'Официальный сайт компании из свободной зоны ОАЭ на двух языках. Задача — не выглядеть сделанным ИИ и хорошо работать на телефоне. Антиква, палитра из логотипа, GSAP-силуэт небоскрёбов, SEO и GEO, замеренные контраст и скорость.',
    tags: ['кейс', 'корпоративный сайт', 'ОАЭ', 'GEO'],
    cta: 'site',
    relatedSlugs: ['gsap-animaciya-lendingov-2026', 'llms-txt-standart-2026', 'geo-chek-list-30-punktov-2026'],
  },
  flagship: {
    name: 'Двуязычный сайт компании из ОАЭ',
    slug: 'korporativnyy-sayt-kompanii-oae-keys-2026',
    type: 'site', done: true, intl: true,
    task: 'Компания из свободной зоны ОАЭ. Нужен официальный сайт на двух языках, который не выглядит сделанным ИИ и хорошо работает на телефоне.',
    solution: 'Статический сайт со сборкой скриптом build.py и формой заявок. Редизайн с антиквой, палитрой из логотипа и GSAP-анимацией: силуэт небоскрёбов из 92 столбиков и отдельная хореография для мобильных. SEO и GEO: schema.org, FAQ, llms.txt, hreflang, свои шрифты; английская версия стала основной, старый адрес /en/ отдаёт 301.',
    result: 'Контраст WCAG AA у всех 180 текстовых элементов, axe без нарушений, нет горизонтального скролла начиная с ширины 280px. LCP 0,25 с на десктопе и 1,25 с на медленном 4G, сертификат Let\'s Encrypt. В проде с 15.09.2026.',
    stack: ['статический сайт', 'Python (build.py)', 'GSAP', 'schema.org', 'Let\'s Encrypt'],
    en: {
      task: 'A company from a UAE free zone. It needed an official bilingual website that does not look AI-made and works well on a phone.',
      solution: 'A static site built by a build.py script, with an enquiry form. A redesign with a serif typeface, a palette taken from the logo and GSAP animation: a skyline of 92 bars and a separate choreography for mobile. SEO and GEO: schema.org, FAQ, llms.txt, hreflang, self-hosted fonts; the English version became the main one, and the old /en/ address returns a 301.',
      result: 'WCAG AA contrast on all 180 text elements, zero axe violations, no horizontal scroll from 280px wide. LCP 0.25 s on desktop and 1.25 s on slow 4G, Let\'s Encrypt certificate. Live since 15.09.2026.',
    },
    es: {
      task: 'Una empresa de una zona franca de los EAU. Necesitaba una web oficial bilingüe que no pareciera hecha por IA y funcionara bien en el móvil.',
      solution: 'Una web estática generada con el script build.py y con formulario de solicitudes. Rediseño con tipografía serif, paleta tomada del logotipo y animación GSAP: un perfil de rascacielos de 92 barras y una coreografía propia para móvil. SEO y GEO: schema.org, FAQ, llms.txt, hreflang, fuentes propias; la versión en inglés pasó a ser la principal y la antigua dirección /en/ devuelve un 301.',
      result: 'Contraste WCAG AA en los 180 elementos de texto, axe sin infracciones, sin scroll horizontal desde 280px de ancho. LCP de 0,25 s en escritorio y 1,25 s en 4G lento, certificado Let\'s Encrypt. En producción desde el 15.09.2026.',
    },
  },
};
