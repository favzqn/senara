'use strict';

const CACHE_NAME = 'senara-v1.0.5';

const PRECACHE = [
  '/',
  '/index.html',
  '/collection.html',
  '/tv.html',
  '/about.html',
  '/faq.html',
  '/story.html',
  '/contact.html',
  '/donate.html',
  '/safety.html',
  '/privacy.html',
  '/terms.html',
  '/accessibility.html',
  '/for-organizations.html',
  '/js/config.js',
  '/js/constants.js',
  '/js/shared-utils.js',
  '/js/i18n-simple.js',
  '/js/navbar.js',
  '/js/footer.js',
  '/js/locales.js',
  '/js/locales/id.js',
  '/js/locales/en.js',
  '/js/performance-utils.js',
  '/js/vn-demo.js',
  '/data/stories.js',
  '/data/categories.js',
  '/data/tv-channels.js',
  '/style/home.css',
  '/style/tailwind.min.css',
  '/style/collection.css',
  '/style/story-cards.css',
  '/style/story.css',
  '/style/tv.css',
  '/style/performance.css',
  '/style/dark-mode.css',
  '/manifest.json',
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first for same-origin assets; network-first for everything else.
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin !== location.origin) return;
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        return response;
      });
    })
  );
});
