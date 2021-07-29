import { createWebHashHistory, createRouter } from 'vue-router'
import Switch from './components/Switch.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: 'switch',
          component: Switch
        }
      ]
    }
  ]
})

