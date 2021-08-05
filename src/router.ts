import { createWebHashHistory, createRouter } from 'vue-router'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tabs from './components/TabsDemo.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocSet from './components/DocDemo.vue'
import Introduce from './views/Introduce.vue'
import GetStart from './views/GetStart.vue'
import Install from './views/Install.vue'

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
          path: '',
          component: DocSet
        }, {
          path: 'introduce',
          component: Introduce
        }, {
          path: 'get-start',
          component: GetStart
        }, {
          path: 'install',
          component: Install
        },
        {
          path: 'switch',
          component: Switch
        }, {
          path: 'button',
          component: Button
        }, {
          path: 'dialog',
          component: Dialog
        }, {
          path: 'tabs',
          component: Tabs
        }
      ]
    }
  ]
})

