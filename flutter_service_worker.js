'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "05298be5bf8a616632c4901f7e432769",
"/CNAME": "09aae38d47199e2d57dc18631ea927d3",
"/main.dart.js.deps": "e2ba54ec7b5b150b34c71e6c6d200e66",
"/main.dart.js": "0fd5ddd59ff3ab431eaf3cbc0eda8ac4",
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
"/.git/objects/93/18d848cffffa5b4874682638492f53e717835a": "79c59ef3ebe74190c43591769e5bad48",
"/.git/objects/94/18f436ed8f3c542836c1c9871f9bb598f60f2c": "a6e560d9a0f1675f0a7ff2328a483eec",
"/.git/objects/5a/116bb324714d857406ce3c12e192f70d1724a3": "6d66c2abf8af268385d0e61db800dd7b",
"/.git/objects/02/ded95f6080ee13aa4d89c8fa325a7b4af084e8": "280ad0fa64436adae47f48ef934e8547",
"/.git/objects/b5/47bab7781777ff073b013ed3aaea1807e4034a": "ed36ad12a47e687df45c88c7a9230fdb",
"/.git/objects/b2/f95c76db918c7e1860167500c8bcc8841a8111": "c69ec34a3f598e3ad9b38ddde95e1d9e",
"/.git/objects/eb/21f596d0f62a2cbf085779440ebcaaaca3d8ab": "80b1d69894376c1abd51621700e55dc6",
"/.git/objects/ee/e84fb40fa51ab66f49a4d3290aece08d5680e3": "4fe760ff368cf5fe14d67e4fac94754e",
"/.git/objects/e3/ab20f13e6d710611a836bb184003c3317bb648": "6cb3419ac83f5b6afa46d90555fe4b19",
"/.git/objects/fe/d1670a8dedb12040d00565ad39d1afb16378d3": "5402b6b3bc7290b52b742b33ec94fc76",
"/.git/objects/fb/36b9d9c6345f9c902d9d88dc15b5c10d7853ea": "7f644f18b8883d72145967f1802f8545",
"/.git/objects/18/9a6eff50519a873d30b25bc126049954cd87ae": "d8a7fa08e506f3eb3aeb696f29994425",
"/.git/objects/pack/pack-5eb2c2bdd6538711e2da58b10d04963ab3559ba1.idx": "dba9ec11da0529c8960a03cad5ad2975",
"/.git/objects/pack/pack-5eb2c2bdd6538711e2da58b10d04963ab3559ba1.pack": "31a7ee9d1ed9c60be7344cb8da92eb2d",
"/.git/objects/11/11f360d1014f6312f1f566c6af22b4aa88c149": "49fe91b05a3a52a1b213922d63369115",
"/.git/objects/7d/3844b2c631353932fed44b4a78798396e1960f": "fc60917bb46a0733e8443a39bb9a0078",
"/.git/objects/7d/0d431c0cea94873da29583e3db0c8aec413bba": "c4c902ab5d952fc0859eb535674e1779",
"/.git/objects/7d/30ad76e9f9ac45d6b1819fef7a6ec182ae39c0": "fef6c706e6124e8df399aa397cf0a832",
"/.git/objects/89/a6a28295be2f7bbd9663d6d03aa378074367eb": "3f8252f3387049f950c6329ea6222f8d",
"/.git/objects/1a/775b221db3153d0ea5ee5be4c3664f78ed3ee7": "345a07231886a0f9ec41692429b3dc11",
"/.git/objects/96/2988c43d55cb77bbdc31bad48327df53bc012e": "1296746724a209f0c40a15cb343d1d9c",
"/.git/objects/96/e8b0311bf9491e013ec89f4f51cd3a681bab25": "cedd32e722b199d21dc564d25f7b0f93",
"/.git/objects/54/67566371667f408da2cd3ed7dcd08fa41cfe17": "6df7639aa72b0d114d996c3a4aa9732f",
"/.git/objects/98/8c1d6d30145eac020c1333ec3229a8cea274b5": "26316c31b6794de9bacaa6360d5cf239",
"/.git/objects/98/e8c35d651e4cd5d1f8713ff8feab4ce2adbb82": "120afc4d5560f69335c9a4a3ba4c9c28",
"/.git/objects/53/6eab1940d2479ac0c624c074f85a1adb66956a": "4d6880eb4692ef2ab97fb1b4fe24969c",
"/.git/objects/30/ff4968554fd8eb495b4b92b106c25003aeb838": "59a1b5b8233b31e068e137306d681128",
"/.git/objects/5e/6339f8bd2c20e5dfb0c8b0c0de781b08e8c6b3": "d630cf1172e8e8ac66a5c095f44ba553",
"/.git/objects/37/144ad4fa6848f40c3cdb39e2c49dce98af980f": "6dfd41cd6ff5ea4bbfc885d9ca0e8980",
"/.git/objects/06/e4b0b664feb3ebe56c77bbea7b936af6f8c848": "1cc37b3d88b77474daae8d6c35556772",
"/.git/objects/0f/6d3a25f7f570842c0301220bf239eca3b25f58": "487647ef770c5d1aea2036c08908a1ba",
"/.git/objects/b1/3f852bb711ad82013962df1fe20bcb0c0ca67a": "648ee0c63b645718d5187b4d13f489a0",
"/.git/objects/b6/26b4c6d3b9a04cd3975c24e1549462bc9a4866": "6e93d291c9347b65c59e378cf856c02c",
"/.git/objects/db/b2b4f483b0e3cfd220ba6a7e0cacdd08099b48": "0de7004e00e0eb750bff49c1eaf6dbb1",
"/.git/objects/a6/464df9555b4c4bd17da5b083a715a91c83f040": "9814035babeac2e1c6438b7d485b48f1",
"/.git/objects/a1/ac17ec1919089d830a95a0450725694108ff8d": "33db4fb47bb5b0ec49bb070ac5f49602",
"/.git/objects/f7/b82259d65154389c2378aed2d9412fba3b7be1": "103fa06b87408c28868a1be2fa69fc42",
"/.git/objects/cb/38788487e99be304e530a224abc526a9ad4b81": "5a2bea5abacc084e1f60cf49a818b863",
"/.git/objects/e0/836b015811978197a7b9fb23466579fd3665fc": "f31e9f56d6b277a53c07243b1ff2c0fc",
"/.git/objects/79/25046dbeb3d0fa4342cb8503d8668ae285ce45": "92549608a5c32325872562dcc9866e88",
"/.git/objects/24/f563c29364dfdfce46c160ed3c086d6a2da76b": "b913d0b69c03b29544f19f30d381dd3b",
"/.git/objects/2b/2483bb081a60d78fd3c129566b778943e37478": "2d2d3c0c02661a2b7f978080b0920e9f",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/logs/HEAD": "b83d1b391cc5dd6bbc51ad2cc65d7c28",
"/.git/logs/refs/heads/master": "b83d1b391cc5dd6bbc51ad2cc65d7c28",
"/.git/logs/refs/remotes/origin/HEAD": "e33811f71f7fcac749b47f6bfb107519",
"/.git/logs/refs/remotes/origin/master": "940e0d3c07a709686e486d2a19e8747a",
"/.git/refs/heads/master": "3996fd6393a87ac9adf7337a77f93f5c",
"/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"/.git/refs/remotes/origin/master": "3996fd6393a87ac9adf7337a77f93f5c",
"/.git/index": "f88895d7df576f1572132c7d2d354426",
"/.git/packed-refs": "f9913d4c18a739dffee49ec8bf1681f2",
"/.git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"/.git/FETCH_HEAD": "9d993a8d5c8172cd91a2224e25d062d0",
"/.git/sourcetreeconfig": "91225ccfe2d6fe0eefa60754f07d14a1",
"/assets/LICENSE": "141f8713eb71d7b56de74072addc43ba",
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
        return fetch(event.request);
      })
  );
});
