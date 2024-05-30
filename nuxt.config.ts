// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 3001
  },

  runtimeConfig: {
    public: {
      GOOGLECLIENTID:process.env.GOOGLE_CLIENT_ID
    },
  },

  css:['~/assets/css/main.css'],
  modules: ["@nuxt/ui",'@nuxtjs/color-mode'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})