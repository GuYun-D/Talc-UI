import { App } from 'vue'

export default {
  install: (app: App, options) => {
    app.config.globalProperties.$toast = key => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }
  }
}