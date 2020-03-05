'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "05298be5bf8a616632c4901f7e432769",
"/CNAME": "09aae38d47199e2d57dc18631ea927d3",
"/main.dart.js.deps": "e2ba54ec7b5b150b34c71e6c6d200e66",
"/main.dart.js": "c290cc7b50f61c05b33006afab30c571",
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
"/.git/config": "03695d935df58819d712a8f26aabfb73",
"/.git/objects/57/5610e7ec440a6275e73488d7aa3247aa22c9bf": "fcf11f94d67ae22eb4950c04a995690e",
"/.git/objects/56/88f92e8e7c62a9b3fe08cd8d1496754e4b4d10": "00458907445f5cdbbb0fc8e72cc7068a",
"/.git/objects/94/18f436ed8f3c542836c1c9871f9bb598f60f2c": "a6e560d9a0f1675f0a7ff2328a483eec",
"/.git/objects/b5/47bab7781777ff073b013ed3aaea1807e4034a": "ed36ad12a47e687df45c88c7a9230fdb",
"/.git/objects/b2/f95c76db918c7e1860167500c8bcc8841a8111": "c69ec34a3f598e3ad9b38ddde95e1d9e",
"/.git/objects/pack/pack-5eb2c2bdd6538711e2da58b10d04963ab3559ba1.idx": "dba9ec11da0529c8960a03cad5ad2975",
"/.git/objects/pack/pack-5eb2c2bdd6538711e2da58b10d04963ab3559ba1.pack": "31a7ee9d1ed9c60be7344cb8da92eb2d",
"/.git/objects/7d/3844b2c631353932fed44b4a78798396e1960f": "fc60917bb46a0733e8443a39bb9a0078",
"/.git/objects/7d/0d431c0cea94873da29583e3db0c8aec413bba": "c4c902ab5d952fc0859eb535674e1779",
"/.git/objects/98/8c1d6d30145eac020c1333ec3229a8cea274b5": "26316c31b6794de9bacaa6360d5cf239",
"/.git/objects/37/144ad4fa6848f40c3cdb39e2c49dce98af980f": "6dfd41cd6ff5ea4bbfc885d9ca0e8980",
"/.git/objects/06/e4b0b664feb3ebe56c77bbea7b936af6f8c848": "1cc37b3d88b77474daae8d6c35556772",
"/.git/objects/b1/3f852bb711ad82013962df1fe20bcb0c0ca67a": "648ee0c63b645718d5187b4d13f489a0",
"/.git/objects/b6/26b4c6d3b9a04cd3975c24e1549462bc9a4866": "6e93d291c9347b65c59e378cf856c02c",
"/.git/objects/79/25046dbeb3d0fa4342cb8503d8668ae285ce45": "92549608a5c32325872562dcc9866e88",
"/.git/objects/24/f563c29364dfdfce46c160ed3c086d6a2da76b": "b913d0b69c03b29544f19f30d381dd3b",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/logs/HEAD": "6c50e4d70d96ca67c13844072d742c47",
"/.git/logs/refs/heads/master": "6c50e4d70d96ca67c13844072d742c47",
"/.git/logs/refs/remotes/origin/HEAD": "e33811f71f7fcac749b47f6bfb107519",
"/.git/logs/refs/remotes/origin/master": "ae843e8a3db492b312994a75ca8aad39",
"/.git/refs/heads/master": "25ef63424936672a13544dfbaa059457",
"/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"/.git/refs/remotes/origin/master": "25ef63424936672a13544dfbaa059457",
"/.git/index": "772849199f23d94cdc1dc0e819e125f5",
"/.git/packed-refs": "f9913d4c18a739dffee49ec8bf1681f2",
"/.git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"/.git/FETCH_HEAD": "db0e0e1b2cc64a9ad6b84406110cabb5",
"/.git/sourcetreeconfig": "c864d2945be18a70a1e00334369fdda3",
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
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets/fonts/FiraCode-Medium.ttf": "e613bf534959b8c52533e77ea0cee44e",
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
