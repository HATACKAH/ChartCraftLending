export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'ru',
        name: 'Russian'
      }
    ],
    defaultLocale: 'en',
    vueI18n: '~/i18n.config.ts'
  }
})