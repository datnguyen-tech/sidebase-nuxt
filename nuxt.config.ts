// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // typescript: {
  //   shim: false
  // },
  modules: ['@nuxtjs/tailwindcss'],

  ssr: true,

  devtools: {
    enabled: true
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL
    }
  },
  plugins: ['~/plugins/api.ts']
})
