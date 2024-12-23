import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  modules: ['@nuxtjs/google-fonts','@pinia/nuxt'],
  googleFonts: {
    families: {
      Rubik: true,
    },
  },
})
