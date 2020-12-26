const filesToCache = [
	"/",
	"AnyToMP4.js",
	"AnyToMP4.json",
	"AnyToMP4.png",
	"AnyToMP4FavIcon_16x16.png",
	"AnyToMP4FavIcon_192x192.png",
	"AnyToMP4FavIcon_512x512.png",
	"AnyToMP4Share.png"
];

const staticCacheName = "AnyToMP4-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});