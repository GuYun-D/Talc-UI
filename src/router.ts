import { createWebHashHistory, createRouter } from 'vue-router'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tabs from './components/TabsDemo.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const mdPath = path => h(Markdown, {path: path, key: path})

import { h } from 'vue'
import Markdown from './components/markdown.vue'

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
          redirect: '/doc/introduce' 
        }, {
          path: 'introduce',
          component: mdPath('../markdown/introduce.md')
        }, {
          path: 'get-start',
          component: mdPath('../markdown/GetStarted.md')
        }, {
          path: 'install',
          component: mdPath('../markdown/install.md')
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

