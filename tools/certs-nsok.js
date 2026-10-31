// Сертификаты Национальной системы оценки ИТ-компетенций (НСОК), оператор Минцифры России.
// Единый источник: блок «Квалификация» на /about/, строка доверия на /cases/,
// значки по стеку в кейсах, JSON-LD hasCredential и факты в llms.txt.
// Все сертификаты по теории; срок действия указан на самом сертификате.
// Файлы: assets/certs/nsok/<id>.webp (просмотр) и <id>.pdf (оригинал).
// Просроченные сертификаты active() отбрасывает сам, вручную ничего убирать не нужно.

const ISSUER = 'Национальная система оценки ИТ-компетенций';
const ISSUER_IN = 'Национальной системе оценки ИТ-компетенций';
const OPERATOR = 'Минцифры России';
const OPERATOR_FULL = 'Министерство цифрового развития, связи и массовых коммуникаций Российской Федерации';

const GROUPS = [
  { k: 'dev', ru: 'Разработка', en: 'Development', es: 'Desarrollo', icon: 'ph-code' },
  { k: 'infra', ru: 'Инфраструктура и данные', en: 'Infrastructure and data', es: 'Infraestructura y datos', icon: 'ph-hard-drives' },
  { k: 'qa', ru: 'Качество и тестирование', en: 'Quality and testing', es: 'Calidad y pruebas', icon: 'ph-check-circle' },
  { k: 'ai', ru: 'Данные и ИИ', en: 'Data and AI', es: 'Datos e IA', icon: 'ph-brain' },
];

// level: 'adv' продвинутый, 'mid' средний. until: последний день действия (ГГГГ-ММ-ДД).
const CERTS = [
  { id: 'javascript', name: 'JavaScript', group: 'dev', level: 'adv', until: '2027-01-26' },
  { id: 'html', name: 'HTML', group: 'dev', level: 'adv', until: '2027-01-26' },
  { id: 'css', name: 'CSS', group: 'dev', level: 'adv', until: '2027-01-26' },
  { id: 'api', name: 'API', group: 'dev', level: 'adv', until: '2027-01-25' },
  { id: 'oop', name: 'ООП', group: 'dev', level: 'adv', until: '2027-01-26' },
  { id: 'algorithms', name: 'Алгоритмы и структуры данных', group: 'dev', level: 'adv', until: '2027-01-26' },
  { id: 'docker', name: 'Docker', group: 'infra', level: 'adv', until: '2027-01-26' },
  { id: 'linux', name: 'Linux', group: 'infra', level: 'adv', until: '2027-01-26' },
  { id: 'git', name: 'Git', group: 'infra', level: 'adv', until: '2027-01-26' },
  { id: 'postgresql', name: 'PostgreSQL', group: 'infra', level: 'adv', until: '2027-01-26' },
  { id: 'functional-testing', name: 'Функциональное тестирование', group: 'qa', level: 'adv', until: '2027-01-26' },
  { id: 'regression-testing', name: 'Регрессионное тестирование', group: 'qa', level: 'adv', until: '2027-01-26' },
  { id: 'machine-learning', name: 'Машинное обучение', group: 'ai', level: 'adv', until: '2027-01-25' },
  { id: 'math-statistics', name: 'Математическая статистика', group: 'ai', level: 'mid', until: '2027-01-26' },
];

const LEVEL = { adv: 'продвинутый уровень', mid: 'средний уровень' };

// Слова из поля stack карточки кейса → сертификат. Регистр не важен.
const STACK_MAP = [
  [/docker|compose|контейнер/i, 'docker'],
  [/linux|ubuntu|debian|nginx|systemd/i, 'linux'],
  [/postgres/i, 'postgresql'],
  [/\bgit\b|github|gitlab/i, 'git'],
  [/javascript|\bjs\b|node|react|preact|vue|svelte|typescript|pwa|mini ?app|мини-прилож/i, 'javascript'],
  [/\bhtml\b/i, 'html'],
  [/\bcss\b|tailwind/i, 'css'],
  [/\bapi\b|rest|fastapi|fastify|express|odata|http-сервис|webhook|вебхук|mcp/i, 'api'],
  [/machine learning|\bml\b|машинн|openai|deepseek|gpt|gigachat|yandexgpt|llm|нейросет|\bai\b|whisper|ocr/i, 'machine-learning'],
  [/автотест|pytest|e2e|тестирован/i, 'functional-testing'],
];

const today = () => new Date().toISOString().slice(0, 10);
function active(date) { const d = date || today(); return CERTS.filter(c => c.until >= d); }
function latestUntil(list) { return (list || active()).map(c => c.until).sort().pop(); }
function fmtDate(iso) { const [y, m, d] = iso.split('-'); return `${d}.${m}.${y}`; }

function forStack(stack, max) {
  const have = new Set(active().map(c => c.id));
  const out = [];
  for (const s of stack || []) {
    for (const [re, id] of STACK_MAP) {
      if (re.test(String(s)) && have.has(id) && !out.includes(id)) out.push(id);
    }
  }
  return out.slice(0, max || 4).map(id => CERTS.find(c => c.id === id));
}

module.exports = { ISSUER, ISSUER_IN, OPERATOR, OPERATOR_FULL, GROUPS, CERTS, LEVEL, active, latestUntil, fmtDate, forStack };
