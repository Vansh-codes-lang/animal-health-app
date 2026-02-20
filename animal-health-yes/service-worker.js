self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("animal-health-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "animals.html",
        "alerts.html",
        "settings.html",
        "css/style.css",
        "js/script.js"
      ]);
    })
  );
});