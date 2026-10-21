// Форма заявки для /ceny/ и /predlozheniya/: имя, контакт, задача, согласие на обработку данных.
// Заявка уходит POST-запросом на приёмник (site-lead/lead_server.py на сервере SPACE, вне этого репо),
// он пересылает её владельцу сайта в Telegram и/или на почту. Сайт статический, поэтому без приёмника форма
// не работает: при ошибке скрипт предлагает ту же заявку отправить в Telegram вручную.

// LEAD_URL можно подменить переменной окружения для локальной проверки.
const LEAD_URL = process.env.LEAD_URL || 'https://chimitdorzhi.space/api/site-lead';
const ASSET_V = 1;

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Подключение стилей и скрипта: в <head> и перед </body> соответственно.
const leadFormHead = () => `<link rel="stylesheet" href="/assets/lead-form.css?v=${ASSET_V}">\n`;
const leadFormScript = () => `<script src="/assets/lead-form.js?v=${ASSET_V}" defer></script>`;

/**
 * @param {object} o
 * @param {string} o.source   откуда заявка, попадает в уведомление («Цены», «Предложение: …»)
 * @param {string} [o.title]  заголовок блока
 * @param {string} [o.sub]    подзаголовок
 * @param {string} [o.task]   текст, которым заранее заполнено поле «Задача»
 * @param {string} [o.tgText] запасной текст для Telegram, если отправка не удалась
 * @param {string} [o.alt]    HTML с прямыми контактами под подзаголовком
 */
function leadForm(o) {
  const title = o.title || 'Оставьте заявку';
  const sub = o.sub || 'Заявка сразу придёт мне. Свяжусь с вами по указанному контакту, уточню задачу и назову срок и цену.';
  return `<section class="lead" id="zayavka" aria-labelledby="leadH">
  <div class="lead-intro">
    <h2 id="leadH">${esc(title)}</h2>
    <p>${esc(sub)}</p>
    ${o.alt ? `<div class="lead-alt"><span>Или напишите напрямую:</span>${o.alt}</div>` : ''}
  </div>
  <form class="lead-form" action="${LEAD_URL}" method="post" novalidate data-source="${esc(o.source)}" data-tg="${esc(o.tgText || '')}">
    <div class="lead-row">
      <div class="lead-field">
        <label class="lead-label" for="leadName">Как к вам обращаться</label>
        <input id="leadName" name="name" type="text" autocomplete="name" maxlength="120" required aria-describedby="leadNameErr">
        <span class="lead-err" id="leadNameErr" hidden>Напишите имя</span>
      </div>
      <div class="lead-field">
        <label class="lead-label" for="leadContact">Телефон, Telegram или email</label>
        <input id="leadContact" name="contact" type="text" autocomplete="tel" inputmode="text" maxlength="160" required aria-describedby="leadContactHint leadContactErr" placeholder="+7 900 000-00-00 или @username">
        <span class="lead-hint" id="leadContactHint">Сюда я отвечу</span>
        <span class="lead-err" id="leadContactErr" hidden>Оставьте контакт, иначе я не смогу ответить</span>
      </div>
    </div>
    <div class="lead-field">
      <label class="lead-label" for="leadMsg">Задача <span class="lead-opt">(необязательно)</span></label>
      <textarea id="leadMsg" name="message" rows="4" maxlength="2000" placeholder="Коротко: что нужно сделать и к какому сроку">${esc(o.task || '')}</textarea>
    </div>
    <div class="lead-hp" aria-hidden="true"><input name="website" type="text" tabindex="-1" autocomplete="off" aria-hidden="true"></div>
    <label class="lead-consent">
      <input name="consent" type="checkbox" required aria-describedby="leadConsentErr">
      <span>Согласен на обработку персональных данных по <a href="/privacy_policy.html" target="_blank" rel="noopener">политике конфиденциальности</a></span>
    </label>
    <span class="lead-err" id="leadConsentErr" hidden>Без согласия я не могу принять заявку</span>
    <div class="lead-actions">
      <button type="submit" class="btn btn-accent lead-submit"><i class="ph ph-telegram-logo" aria-hidden="true"></i><span>Отправить заявку</span></button>
    </div>
    <div class="lead-status" role="status" aria-live="polite"></div>
  </form>
</section>`;
}

module.exports = { leadForm, leadFormHead, leadFormScript, LEAD_URL };
