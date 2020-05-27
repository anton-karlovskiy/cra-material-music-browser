
if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files. */
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION'
        })
      )
    );

    // ray test touch <
    // workbox.routing.registerRoute(
    //   /\.(?:png|gif|jpg|jpeg)$/,
    //   workbox.strategies.cacheFirst({
    //     cacheName: 'images',
    //     plugins: [
    //       new workbox.expiration.Plugin({
    //         maxEntries: 60,
    //         maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
    //       })
    //     ]
    //   })
    // );
    // ray test touch >
  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
