export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mist',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'mist' },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-TileImage', content: '/img/mstile-144x144.png' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Mist is a blockchain-based NFT Action RPG game on our Mist NFT Game Framework. Collect NFTs, battle epic monsters, and explore multiple immersive environments.',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '@/assets/img/favicon-196x196.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        type: 'image/x-icon',
        href: '@/assets/img/apple-touch-icon-57x57.png',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://pro.fontawesome.com/releases/v5.15.1/css/all.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Lora&display=swap',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
      },
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'https://code.jquery.com/jquery-3.5.1.min.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/slideout/1.0.1/slideout.min.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src: 'https://cdn.boomcdn.com/libs/wow-js/1.3.0/wow.min.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src:
          'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js',
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css',
    '@/assets/css/hamburgers.css',
    '@/assets/css/animate.css',
    '@/assets/css/staking.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  ssr: false,
}
