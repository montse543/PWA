const STATIC_CACHE  = "static";

const APP_SHELL =[
    "/",
    "index.html",
    "IMG/128i.png",
    "IMG/KGL.png",
    "IMG/KNGS.png",
    "IMG/barba.png",
    "IMG/HC.png",
    "IMG/facial2.png",
    "CSS/style.css",
    "Catalago.pdf"
];

self.addEventListener("install", (e) => {
    console.log("entrando a instalar");
    const cacheStatic = caches
                        .open(STATIC_CACHE)
                        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e)=>{
    console.log("fectch!", e.request);

    e.respondWith(
        caches
                .match(e.request)
                .then(res => res || fetch(e.request))
                .catch(console.log)
    );
});