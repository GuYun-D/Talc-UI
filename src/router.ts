import { createWebHashHistory, createRouter } from 'vue-router'
import Switch from './components/SwitchDemo.vue'
import Button from './components/buttonDemo/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tabs from './components/TabsDemo.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import introduce from "../src/markdown/introduce.md"
import install from "../src/markdown/install.md"
import getStarted from "../src/markdown/GetStarted.md"

const mdPath = string => h(Markdown, {content: string, key: string})

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
          component: mdPath(introduce)
        }, {
          path: 'get-start',
          component: mdPath(getStarted)
        }, {
          path: 'install',
          component: mdPath(install)
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

