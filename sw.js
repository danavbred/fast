self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('fast-store').then((cache) => cache.addAll([
            '/fast/',
            '/fast/index.html',
            '/fast/icon-192.png',
            '/fast/icon-512.png'
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});