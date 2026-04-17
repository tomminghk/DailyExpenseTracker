// sw.js
self.addEventListener('fetch', function(event) {
    // Simply fetch the requested resource, and if it fails (offline), return a basic response.
    event.respondWith(
        fetch(event.request).catch(function() {
            return new Response('Offline mode');
        })
    );
});
