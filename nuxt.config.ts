export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  app: {
    head: {
      title: 'ChartCraft - Transform Your Data Into Stunning Charts',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Create publication-ready charts from raw data instantly. AI-powered chart recommendations, effortless customization, and export-ready visualizations.' },
        { name: 'theme-color', content: '#667eea' },
        { name: 'msapplication-TileColor', content: '#667eea' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English'
      }
    ],
    defaultLocale: 'en',
    vueI18n: '~/i18n.config.ts'
  }
})