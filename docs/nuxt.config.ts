import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: [
    '@nuxt-themes/docus',
    'nuxt-seo-kit',
  ],

  modules: [
    'nuxt-windicss',
    '@nuxtjs/fontaine',
    resolve('./app/module'),
  ],

  runtimeConfig: {
    indexable: true,
    public: {
      titleSeparator: '·',
      siteUrl: 'https://unlighthouse.dev/',
      siteName: 'Unlighthouse',
      siteDescription: 'Like Google Lighthouse, but it scans every single page.',
      language: 'en',
      trailingSlash: false,
    }
  },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
      ],
      script: [
        {
          'src': 'https://cdn.usefathom.com/script.js',
          'data-spa': 'auto',
          'data-site': 'WPEZVIVE',
          'defer': true,
        },
      ],
    },
  },

  fontMetrics: {
    fonts: ['Inter'],
  },

  content: {
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light',
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },
})
