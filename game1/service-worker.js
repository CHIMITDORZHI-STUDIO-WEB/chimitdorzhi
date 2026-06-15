/* ============================================================================
 * service-worker.js — офлайн-кэш оболочки и данных (PWA-минимум).
 * При обновлении файлов поднимите версию CACHE, чтобы кэш пересобрался.
 * ==========================================================================*/
const CACHE = 'tolkovatel-v2';
const ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/data.js',
  './js/storage.js',
  './js/engine.js',
  './js/app.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request).then((res) => {
        // кладём в кэш свежие same-origin ответы
        if (res && res.ok && e.request.url.startsWith(self.location.origin)) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
