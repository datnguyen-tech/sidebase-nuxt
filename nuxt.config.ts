// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // typescript: {
  //   shim: false
  // },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  devtools: {
    enabled: true
  }
})
