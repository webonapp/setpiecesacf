const APP_VERSION = "192";
const CACHE_NAME = `acf-set-pieces-v${APP_VERSION}`;

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./assets/campo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("message", event => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith("acf-set-pieces-v") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request, { cache: "no-store" });

    if (response && response.ok) {
      cache.put(request, response.clone());
    }

    return response;
  } catch (_) {
    return (
      await cache.match(request)
    ) || (
      await cache.match("./index.html")
    );
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const networkPromise = fetch(request, { cache: "no-store" })
    .then(response => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  return cached || (await networkPromise) || new Response("", {
    status: 504,
    statusText: "Offline"
  });
}

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const requestURL = new URL(event.request.url);
  const isSameOrigin = requestURL.origin === self.location.origin;
  if (!isSameOrigin) return;

  const isNavigation =
    event.request.mode === "navigate" ||
    requestURL.pathname.endsWith("/") ||
    requestURL.pathname.endsWith("/index.html");

  if (isNavigation) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  event.respondWith(staleWhileRevalidate(event.request));
});
