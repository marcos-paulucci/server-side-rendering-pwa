var CACHE_STATIC_NAME = 'static-files';
var CACHE_DYNAMIC_NAME = 'dynamic-files';
var STATIC_FILES = ['/', '/bundle.min.css', '/bundle.js'];
var DYNAMIC_FILES_EXTENSIONS = ['.js', '.css', '.jpg', '.png', '.svg', '.ttf', '.woff', '.woff2'];

// TO CACHE DYNAMIC EVENTUALLy
var DYNAMIC_URLS = ['/users', '/admins'];

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function(cache) {
      console.log('[Service Worker] Precaching App Shell');
      cache.addAll(STATIC_FILES);
    })
  );
});

function isInArray(string, array) {
  var cachePath;
  if (string.indexOf(self.origin) === 0) {
    // request targets domain where we serve the page from (i.e. NOT a CDN)
    console.log('matched ', string);
    cachePath = string.substring(self.origin.length); // take the part of the URL after the domain (e.g. after localhost:8080)
  } else {
    cachePath = string; // store the full request (for CDNs)
  }
  return array.indexOf(cachePath) > -1;
}

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(res) {
        return caches.open(CACHE_DYNAMIC_NAME).then(function(cache) {
          var ext = event.request.url.substring(event.request.url.lastIndexOf('.'));
          if (DYNAMIC_FILES_EXTENSIONS.indexOf(ext) > -1) {
            cache.put(event.request.url, res.clone());
          }
          return res;
        });
      })
      .catch(function(err) {
        return caches.match(event.request);
      })
  );
});
