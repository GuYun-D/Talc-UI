import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import First from './components/First.vue'

import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      component: First
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')


