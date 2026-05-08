const CACHE_NAME = 'planet-sights-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.json',
  './stars.png',
  './manifest.json',
  './images/mercury.png',
  './images/venus.png',
  './images/earth.png',
  './images/mars.png',
  './images/jupiter.png',
  './images/saturn.png',
  './images/uranus.png',
  './images/neptune.png',
  './images/sun.png',
  './images/moon.png',
  './images/blackhole.png'
];

// Install: cache all the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
