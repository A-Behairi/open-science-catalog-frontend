const webpack = require('webpack') // eslint-disable-line
const fs = require('fs') // eslint-disable-line

const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0
const routerBase = process.env.ROUTER_BASE || '/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    fallback: true
  },

  router: {
    base: routerBase
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | ESA Open Science Catalog',
    title: 'ESA Open Science Catalog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'ESA Open Science Catalog' },
      { hid: 'description', name: 'description', content: 'The European Space Agency portal features the latest news in space exploration, human spaceflight, launchers, telecommunications, navigation, monitoring and space science. ' },
      { property: 'og:description', content: 'The European Space Agency portal features the latest news in space exploration, human spaceflight, launchers, telecommunications, navigation, monitoring and space science.' },
      { name: 'keywords', content: 'European Space Agency, Moon, Mars, sun, space exploration, probes, missions, satellites, launchers, international space station, ISS, telecommunications, earth observation, navigation, astronauts, solar system, universe, remote sensing, space news, ESA, environment, monitoring, astronomy, Ariane, rocket, Galileo, comet, education, Venus ' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${routerBase}favicon.ico` }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/global.scss',
    './static/css/materialdesignicons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/with-base',
    '~/plugins/slugify',
    '~/plugins/text-to-hex',
    '~/plugins/type-color',
    '~/plugins/axios',
    '~/plugins/markdown',
    '~/plugins/extractSlug',
    { src: '~plugins/ol', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: false
    },
    options: {
      customProperties: true
    },
    theme: {
      themes: {
        light: {
          primary: '#003247',
          secondary: '#335E6F',
          background: '#0F2733',
          applications: '#00B19D'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          ROUTER_BASE: `"${routerBase}"`,
          PACKAGE_VERSION: `"${version}"`
        }
      })
    ]
  },

  auth: {
    strategies: {
      oidc: {
        scheme: 'openIDConnect',
        clientId: '2af21e66-bd47-4894-b91e-2f3d6c07d99e',
        endpoints: {
          configuration: 'https://auth.develop.eoepca.org/.well-known/openid-configuration'
        },
        responseType: 'token id_token',
        idToken: {
          property: 'id_token',
          maxAge: 1800
        },
        scope: 'profile email',
        acrValues: ['passport_social']
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/oauth-callback',
      home: '/'
    },
    fullPathRedirect: true
  }
}
