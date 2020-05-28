
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

    workbox.precaching.cleanupOutdatedCaches();

    const CACHE_VERSION = 1;

    // Shorthand identifier mapped to specific versioned cache.
    const CACHES_NAMES = {
      IMAGES: `images-${CACHE_VERSION}`,
      APPLE_RSS_FEED: `apple-rss-feed-${CACHE_VERSION}`
    };

    const expirationPlugin = new workbox.expiration.ExpirationPlugin({
      maxEntries: 50,
      maxAgeSeconds: 60 * 60 // 1 hour
    });

    // See https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests#force_caching_of_opaque_responses
    const cacheOpaqueResponsesPlugin = new workbox.cacheableResponse.CacheableResponsePlugin({
      statuses: [0, 200]
    });

    const imagesStrategy = new workbox.strategies.CacheFirst({
      cacheName: CACHES_NAMES.IMAGES,
      plugins: [expirationPlugin, cacheOpaqueResponsesPlugin]
    });

    const appleRssFeedStrategy = new workbox.strategies.StaleWhileRevalidate({
      cacheName: CACHES_NAMES.APPLE_RSS_FEED,
      plugins: [expirationPlugin]
    });

    workbox.routing.registerRoute(
      /.*(?:rss.itunes.apple)\.com.*$/,
      appleRssFeedStrategy
    );

    workbox.routing.registerRoute(
      // See https://developers.google.com/web/tools/workbox/guides/route-requests#matching_a_route_with_a_regular_expression
      /.+\.(?:png|gif|jpg|jpeg|svg)$/,
      imagesStrategy
    );
  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
