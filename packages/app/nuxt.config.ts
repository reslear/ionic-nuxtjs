import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/ionic'],
  ssr: false,
  vite: {
    plugins: [
      // @ts-ignore
      tailwindcss()
    ],
  },
  css: [
    '~/assets/css/style.css',
    '~/assets/css/ionic.css'
  ],
  ionic: {
    css: {
      utilities: true,
    }
  },
  eslint: {
    config: {
      standalone: false
    }
  }
})
