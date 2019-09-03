const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    'public/**/*.html',
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.tsx'
  ],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || []
        }
      },
      extensions: ['html', 'vue', 'jsx', 'tsx']
    }
  ],
  whitelistPatterns: [/(theme)[A-Za-z0-9-_:/]+/g],
  whitelistPatternsChildren: [/infsFrame$/, /editorsFilter$/]
})
export default {
  plugins: [{ src: '~/plugins/vuex-persist', ssr: false }],
  mode: 'spa',
  head: {
    title: 'Чат-боты для бизнеса и диалоговые интерфейсы - Nanosemantics.ai',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'blue' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/fonts.css',
    '~/assets/css/global.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-vuex-localstorage'
  ],

  markdownit: {
    linkify: true,
    breaks: true,
    injected: true,
    use: ['markdown-it-attrs', 'markdown-it-div']
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    },
    includeNodeModules: true
  },
  env: {
    STRAPI_URL: 'http://localhost:1337'
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer')
      ]
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // if (ctx.isDev) {
      //   config.devtool = 'eval-source-map'
      // }
    }
  }
}
