const CACHE_NAME = "news-card-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./card1.html",
  "./card2.html",
  "./output.html",
  "./output2.html",
  "./style.css",
  "./img/demo.png",
  "./img/demo2.jpg",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
