import { createApp } from 'vue'
// Bootstrap's CSS first so our brand tokens/overrides in main.css (colors,
// .btn, .container, etc. — see main.css) load after and win the cascade.
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { initAnalytics } from './utils/analytics'
import { vReveal } from './directives/reveal'

initAnalytics()

createApp(App)
  .use(router)
  .directive('reveal', vReveal)
  .mount('#app')
