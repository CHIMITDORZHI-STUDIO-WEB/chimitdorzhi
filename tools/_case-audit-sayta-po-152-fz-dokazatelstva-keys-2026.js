module.exports = {
  meta: {
    heroIcon: 'ph-fill ph-shield-check',
    title: 'Аудит сайта по закону о персональных данных: с доказательствами',
    metaTitle: 'Кейс: аудит сайта по 152-ФЗ с доказательствами',
    metaDescription: 'Аудит сайта учреждения культуры: аналитика до согласия, 12 cookie за 4 секунды, отказ не работает. Отчёт на 13 страниц со скриншотами и журналом запросов.',
    excerpt: 'Проверил не документы, а поведение сайта учреждения культуры. Метрика с Вебвизором и отраслевой счётчик ставили 12 cookie за 4 секунды до согласия и не реагировали на отказ. Ещё шесть нарушений, отчёт на 13 страниц с доказательствами.',
    tags: ['кейс', '152-ФЗ', 'аудит сайта', 'cookie'],
    cta: 'site',
    relatedSlugs: ['audit-landing-152fz-direkt-keys-2026', 'mify-o-152-fz-2026', 'politika-obrabotki-pd-obrazec-2026'],
  },
  flagship: {
    name: 'Аудит сайта по закону о персональных данных',
    slug: 'audit-sayta-po-152-fz-dokazatelstva-keys-2026',
    type: 'audit', done: true, delivered: true,
    task: 'Проверить сайт учреждения культуры на соответствие закону о персональных данных. Формально на сайте было всё: политика, баннер про cookie, кнопка отказа — вопрос был в том, как он ведёт себя на самом деле.',
    solution: 'Чистый профиль браузера, запись сетевых запросов и cookie до и после согласия, отдельная проверка отказа, сверка политики с фактическим поведением сайта. Каждая находка подтверждена скриншотом и журналом сетевых запросов.',
    result: 'Сдан отчёт на 13 страниц. Два критичных нарушения: Метрика с Вебвизором и отраслевой счётчик запускаются до согласия — 12 cookie через 4 секунды после входа, а отказ ничего не меняет. Ещё шесть, включая избыточный перечень данных и передачу IP-адресов через Cloudflare (США). Не проверены реестр операторов РКН и отправка формы; итоговая оценка рисков — за юристом.',
    stack: ['чистый профиль браузера', 'журнал сетевых запросов', 'скриншоты', 'отчёт PDF'],
    en: {
      task: 'To check a cultural institution website against Russian personal data law. On paper everything was there — a privacy policy, a cookie banner, a reject button; the question was how the site actually behaves.',
      solution: 'A clean browser profile, recording network requests and cookies before and after consent, a separate test of the reject option, and a comparison of the policy with what the site really does. Every finding is backed by a screenshot and the network request log.',
      result: 'Delivered as a 13-page report. Two critical violations: Yandex Metrica with session replay and an industry counter start before consent — 12 cookies within 4 seconds of arrival — and rejecting cookies changes nothing. Six more, including an excessive list of collected data and visitor IP addresses passing through Cloudflare (USA). Not checked: the regulator register of data operators and form submission; the final risk assessment is for a lawyer.',
    },
    es: {
      task: 'Revisar la web de una institución cultural conforme a la ley rusa de datos personales. Sobre el papel estaba todo: política de privacidad, banner de cookies, botón de rechazo; la cuestión era cómo se comporta la web en realidad.',
      solution: 'Perfil de navegador limpio, registro de peticiones de red y cookies antes y después del consentimiento, prueba aparte del rechazo y cotejo de la política con el comportamiento real del sitio. Cada hallazgo está respaldado por una captura de pantalla y el registro de red.',
      result: 'Entregado como informe de 13 páginas. Dos infracciones críticas: Yandex Metrica con grabación de sesiones y un contador sectorial arrancan antes del consentimiento — 12 cookies a los 4 segundos de entrar — y rechazar las cookies no cambia nada. Seis más, entre ellas una lista excesiva de datos recogidos y el paso de las IP de los visitantes por Cloudflare (EE. UU.). Sin comprobar: el registro de operadores del regulador y el envío del formulario; la valoración final de riesgos corresponde a un abogado.',
    },
  },
};
