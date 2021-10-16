import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import Markdown from './components/markdown.vue'
import './lib/iconfont/font/iconfont'
import { registerTalc } from './utils/registerTalc'

import 'github-markdown-css'
// 引入全局样式
import './index.scss'
// 引入库的css
import './lib/talc.scss'


const app = createApp(App)
app.use(router)
app.mount('#app')
registerTalc(app)

app.component("Markdown", Markdown)

