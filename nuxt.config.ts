import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  spaLoadingTemplate: false,
  // extends: ['github:YubiRepo/D-ERP-UI', { auth: process.env.GITHUB_TOKEN }],
  app: {
    head: {
      title: 'Test Ogya FE'
    }
  },
  css: [
    '~/assets/css/main.css',
    'sweetalert2/dist/sweetalert2.min.css',
    '@sweetalert2/theme-dark'
  ],
  ssr: false,
  sourcemap: false,
  build: {
    transpile: [
      'vuetify',
      '@vuepic/vue-datepicker',
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      API: process.env.API_URL || 'http://103.191.63.132',
      BASE_URL_IMAGE:
        process.env.BASE_URL || 'http://103.191.63.132/erp/d-erp/d-erp-backend'
    }
  },
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({ autoImport: true }))
      })
    },
  ],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },
  imports: {
    dirs: [
      './stores',
      './composables/**'
    ]
  },
  plugins: ['~/plugins/vuesweatalert.ts'],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  fonts: {
    families: [
      {
        name: 'Roboto',
        global: true,
        provider: 'google',
        fallbacks: ['Arial']
      }
      // {
      //   name: 'Inter',
      //   global: true,
      //   provider: 'google',
      //   fallbacks: ['Roboto', 'Arial']
      // },
      // { name: 'Public Sans', provider: 'google' }
      // { name: 'MyCustom', src: '/custom-font.woff2' },
      // { name: 'CustomGlobal', global: true, src: '/font-global.woff2' },
      // { name: 'Oswald', fallbacks: ['Times New Roman'] },
    ],
    defaults: {
      weights: [400, 500, 700],
      styles: ['normal'],
      fallbacks: {
        monospace: ['Tahoma']
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3001,
  },
})
