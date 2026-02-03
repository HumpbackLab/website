import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "座头鲸工作室",
  description: "HumpbackLab",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '产品介绍', link: '/products' },
      { text: '用户手册', link: '/manuals' }
    ],
    sidebar: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HumpbackLab/website' }
    ]
  }
})
