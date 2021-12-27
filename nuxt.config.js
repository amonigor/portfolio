import pt from './locales/pt';
import en from './locales/en';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'amonigor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'author', name: 'author', content: 'Igor Amon' },
      { hid: 'description', name: 'description', content: 'Igor Amon - Desenvolvedor Full Stack' },
      { name: 'keys', content: 'fullstack developer, desenvolvedor fullstack, backend developer, desenvolvedor backend, frontend developer, desenvolvedor frontend, php, laravel, vuejs, vue, js, web, site, website' },

      // OpenGraph
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'og:url', content: 'https://amonigor.dev/' },
      { name: 'og:title', content: 'Igor Amon - Desenvolvedor Full Stack' },
      { name: 'og:site_name', content: 'amonigor' },
      { name: 'og:description', content: 'Olá! Me chamo Igor Amon e atuo como Desenvolvedor Full Stack, com experiência na área de desenvolvimento web.' },
      { name: 'og:image', content: 'https://amonigor.dev/big-logo.png' },
      { name: 'og:image:type', content: 'image/png' },
      { name: 'og:image:width', content: '1000' },
      { name: 'og:image:height', content: '1000' },
      { name: 'og:type', content: 'website' },

      // Twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:url', content: 'https://amonigor.dev/' },
      { name: 'twitter:title', content: 'Igor Amon - Desenvolvedor Full Stack' },
      { name: 'twitter:description', content: 'Olá! Me chamo Igor Amon e atuo como Desenvolvedor Full Stack, com experiência na área de desenvolvimento web.' },
      { name: 'twitter:image', content: 'https://amonigor.dev/big-logo.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/animations.css',
    '@/assets/scss/colors.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/animations.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n'
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  i18n: {
    locales: [
      {
        code: 'pt',
        iso: 'pt-BR'
      },
      {
        code: 'en',
        iso: 'en-US'
      }
    ],
    defaultLocale: 'pt',
    vueI18n: {
      fallbackLocale: 'pt',
      messages: { pt, en }
    },
    baseUrl: 'https://amonigor.dev',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      }
    }
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },

  googleFonts: {
    families: {
      Poppins: true,
      'Patua+One': true
    },
    display: 'swap',
    subsets: 'latin',
    prefetch: true,
    preload: true,
    preconnect: true,
    useStyleSheet: true,
  }
}
