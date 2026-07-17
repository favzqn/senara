'use strict';

const CACHE_NAME = 'senara-v2.0.1';

const PRECACHE = [
  '/',
  '/collection/',
  '/tv/',
  '/about/',
  '/faq/',
  '/story/',
  '/contact/',
  '/donate/',
  '/safety/',
  '/privacy/',
  '/terms/',
  '/accessibility/',
  '/for-organizations/',
  '/offline/',
  '/style/home.css',
  '/style/tailwind.min.css',
  '/style/collection.css',
  '/style/story-cards.css',
  '/style/story.css',
  '/style/tv.css',
  '/style/about.css',
  '/style/performance.css',
  '/style/dark-mode.css',
  '/style/pages.css',
  '/style/safety.css',
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

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin !== location.origin) return;
  if (request.method !== 'GET') return;

  // HTML/navigation: network-first so a new deploy's HTML (and its fresh
  // hashed asset URLs) always wins. Cache-first here served stale HTML that
  // pointed at old JS bundles, resurfacing already-fixed bugs.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        return response;
      }).catch(() => caches.match(request).then(cached => cached || caches.match('/offline/')))
    );
    return;
  }

  // Hashed assets, CSS, images: cache-first (content-addressed, immutable).
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        return response;
      }).catch(() => new Response('Offline', { status: 503 }));
    })
  );
});
