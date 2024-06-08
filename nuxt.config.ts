// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 3001
  },

  runtimeConfig: {
    public: {
      APPMODE:process.env.APP_MODE,
      GOOGLECLIENTID:process.env.GOOGLE_CLIENT_ID,
      HTTPURL:process.env.HTTPURL,
      HTTPSURL:process.env.HTTPSURL,
      LOCALURL:process.env.LOCALURL

    },
  },
  ui: {
    safelistColors: ['customPrimary','customGray'],
    global: true,
  },
  colorMode: {
    preference: 'light'
  },
  css:['~/assets/css/main.css'],
  modules: ["@nuxt/ui",'@nuxtjs/color-mode','@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
    autoImports:['defineStore']
  },
  typescript: {
    strict: false
  },
})