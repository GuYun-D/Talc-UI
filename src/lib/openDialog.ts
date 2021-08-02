import Dialog from "./Dialog.vue"
import { createApp, h } from "vue"

export const openDialog = (options) => {
  const { title, content, confirm, cancel } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    // @ts-ignore
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    render() {
      /**
       * 组件
       * 传递参数
       * 传插槽
       */
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            console.log(newVisible);
            if (newVisible === false) {
              close()
            }
          }
          ,
          confirm, cancel
        }, {
        title,
        content
      }
      )
    }
  })

  app.mount(div)
}

