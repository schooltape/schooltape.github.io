import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Schooltape",
  titleTemplate: ':title - Schooltape',
  description: "A free an open source web extension for Schoolbox!",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'google-site-verification', content: 'MNXkcoht-xquAu3YMkI1_1YINAJUCcKrgZ6xL5N5pfY' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-HZBYCLKHJJ' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-HZBYCLKHJJ');`
    ]
  ],
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Install', link: '/installation' }
    ],

    search: {
      provider: 'local',
    },

    sidebar: [
      {
        text: 'Get Started',
        items: [
          {
            text: 'Installation',
            collapsed: true,
            link: '/',
            base: '/installation',
            items: [
              { text: 'Chrome', link: '/chrome' },
              { text: 'Firefox', link: '/firefox' },
              { text: 'Edge', link: '/edge' },
              { text: 'Safari', link: '/safari' }
            ]
          },
          { text: 'Contributing', link: '/contributing' },
          { text: 'Compare', link: '/compare' }
        ]
      },
      {
        text: 'Ecosystem',
        base: '/ecosystem',
        items: [
          { text: 'Plugins', link: '/plugins' },
          { text: 'Snippets', link: '/snippets' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/rZxtGJ98BE' },
      // TODO: schooltape/schooltape
      { icon: 'github', link: 'https://github.com/42willow/schooltape' },
    ]
  }
})