const CACHE_NAMES = ["version-1"]
const urlToCache = ["index.html" , "offline.html"]


self.addEventListener('install', (event) => {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAMES)
        .then((cache) => {
          console.log('Opened cache');
          return cache.addAll(urlToCache);
        })
    );
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then(() => {
          // Cache hit - return response
        //   if (response) {
        //     return response;
        //   }
          return fetch(event.request)
          .catch(() => caches.match("offline.html"))
        }
      )
    );
  });


  self.addEventListener('activate', (event) => {

    // let cacheAllowlist = [];
  
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (CACHE_NAMES.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });