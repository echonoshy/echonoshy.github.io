import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { initEasterEggs } from './utils/easter-egg'

const app = createApp(App)
app.use(router)
app.mount('#app')

initEasterEggs()

console.log(
  '%c> hello, world.',
  'color: #c4956a; font-family: monospace; font-size: 14px;'
)
