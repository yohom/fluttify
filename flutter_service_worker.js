'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "05298be5bf8a616632c4901f7e432769",
"/main.dart.js": "11cb6705dada9b84ad2b4b30c1597b3e",
"/icons/favicon-16x16.png": "2055d2e0fd38487f8afd4b63eddfbb4f",
"/icons/favicon.ico": "26934d4c82da5639840b44df08b0d7c5",
"/icons/apple-icon.png": "46fc5c38650688382ffe3dea0791ab79",
"/icons/apple-icon-144x144.png": "21ec03e11041454b14f3509c53fdbf83",
"/icons/android-icon-192x192.png": "ea376e2556e69735de51b3ed76836e65",
"/icons/apple-icon-precomposed.png": "46fc5c38650688382ffe3dea0791ab79",
"/icons/apple-icon-114x114.png": "4c3a441890068a5245e4282e0c45593b",
"/icons/ms-icon-310x310.png": "083d85970c94e0d945cd0c1ad17981f1",
"/icons/ms-icon-144x144.png": "21ec03e11041454b14f3509c53fdbf83",
"/icons/apple-icon-57x57.png": "3b213664121ad939695613e48375cb3e",
"/icons/apple-icon-152x152.png": "1f39e7625bddd61c70a31a901c770a4a",
"/icons/ms-icon-150x150.png": "38a72cb17c22e5af877b254893d4d1eb",
"/icons/android-icon-72x72.png": "a9f2e57f0f6767fdab71f815c68063e7",
"/icons/android-icon-96x96.png": "b33472e7c8d542479fddff7909342d40",
"/icons/android-icon-36x36.png": "d8a83a809573a0e97c91816a2862c2c6",
"/icons/apple-icon-180x180.png": "0833ba7129a39192225e39f42d225ac1",
"/icons/favicon-96x96.png": "b33472e7c8d542479fddff7909342d40",
"/icons/manifest.json": "70640bffba6b79e3fce45c5bf6646770",
"/icons/android-icon-48x48.png": "777ebd34ab41b047311b360d9414fe89",
"/icons/apple-icon-76x76.png": "2a833272be0e53068be65a397f14c5f9",
"/icons/apple-icon-60x60.png": "cb53e91fa5c1e6618acaf1ec78221fe9",
"/icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"/icons/android-icon-144x144.png": "21ec03e11041454b14f3509c53fdbf83",
"/icons/apple-icon-72x72.png": "a9f2e57f0f6767fdab71f815c68063e7",
"/icons/apple-icon-120x120.png": "51aa2aed28857051d0951df01da64f6d",
"/icons/favicon-32x32.png": "582de94cda89a555a398002b34587d9c",
"/icons/ms-icon-70x70.png": "72908a0cb4643ae0c2aefbd716aeac3c",
"/assets/LICENSE": "24c80cdf6d5e00934efcfe09773a414f",
"/assets/images/fluttify_all.png": "752bf28fce6bdc4dbd566aad5451f347",
"/assets/images/fluttify_logo_landscape.png": "6ce2cd9339fb2e1126e4efbb3dbc0c9c",
"/assets/images/fluttify_logo_medium_dark.png": "5ab9afc998d271525dc5cccea0593c92",
"/assets/images/github_white.png": "472739dfb5857b1f659f4c4c6b4568d0",
"/assets/images/fluttify_logo_medium_light.png": "eafb136cc5756859c1c0ca0dda2178c6",
"/assets/images/repo.png": "f7cb16421c66dedc3af2c3f65ebfa0ca",
"/assets/images/github_black.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"/assets/images/feedback.png": "df3392b96bc4309a6e221fbad81231e5",
"/assets/images/fluttify_logo.png": "7dd5e17949e2ea5e2ee7a587ec4f3ecf",
"/assets/images/fork.png": "053065d11d2d1165deca6f1b6740557b",
"/assets/AssetManifest.json": "68c634feb5689c2369e1197a663a5b63",
"/assets/FontManifest.json": "78d2566320265c2a7336b1cdec21b1ba",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets/fonts/Candara.ttf": "78889258c3f3b53c0a19ce73967bc437",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
