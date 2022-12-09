export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'amidy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/notifications-ssr', ssr: true },
    { src: '~/plugins/notifications-client', ssr: false },
    '~/plugins/Multiselect.js'
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/i18n',

  ],

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en-US.js'
      },
      {
        code: 'fr',
        name: 'Français',
        file: 'fr-FR.js'
      }
    ],
    strategy: 'prefix_and_default',
    parsePages: false,   // Disable babel parsing
    defaultLocale: 'fr',
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'my_custom_cookie_name'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  axios: {
    credentials: true,
    baseURL: 'http://localhost:8000',
  },
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
      },
    },
  },
  router: {
    middleware: ['auth']
  }
}
