import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Website",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HumpbackLab/website' }
    ]
  }
})
