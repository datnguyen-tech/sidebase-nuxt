// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // typescript: {
  //   shim: false
  // },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore', 'storeToRefs']
  },
  ssr: false,

  devtools: {
    enabled: true
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL
    }
  },

  plugins: ['/d:/nuxt/sidebase-nuxt/plugins/api.ts']
})
