self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/tomorrow.html',
        '/seven_days.html',
        '/style/main.css',
        '/script/app.js',
        '/script/app2.js',
        '/script/app3.js',
        '/images/w48.png',
        '/images/w72.png',
        '/images/w96.png',
        '/images/w144.png',
        '/images/w168.png',
        '/images/w192.png',
        '/images/w512.png',
        '/manifest.webmanifest'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        let responseClone = response.clone();
        caches.open('v1').then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      });
    }).catch(() => {
      return caches.match('/images/w512.png');
    })
  );
});