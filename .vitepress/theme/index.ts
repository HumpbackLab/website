import DefaultTheme from 'vitepress/theme'
import ProductCarousel from './components/ProductCarousel.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProductCarousel', ProductCarousel)
  }
}
