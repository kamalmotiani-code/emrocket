// Minimal service worker so phones treat EMRocket as an installable app.
// It does not cache anything: EMRocket always needs a connection to save check-ins.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
