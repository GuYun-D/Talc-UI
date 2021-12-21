import TToast from "./TToast.vue";
import { createApp, h, App } from "vue"
import { IOpenToastOptions } from "./type"

let currentToast: App<Element>;

export default function openToast(options: IOpenToastOptions) {
  if (currentToast) {
    currentToast.unmount(null)
    const myToastOwnDivs = document.body.getElementsByClassName("myToastOwnDiv") || null
    for (let i = 0; i < myToastOwnDivs.length; i++) {
      myToastOwnDivs[i].remove()
    }
  }
  currentToast = _createToast(options)
}

function _createToast(options: IOpenToastOptions) {
  const div = document.createElement("div")
  div.setAttribute("class", "myToastOwnDiv")
  const { defaultText, props } = options
  const toast = createApp({
    render() {
      return h(
        TToast, props, {
        default: () => {
          return h('span', null, defaultText)
        }
      })
    },
  })
  toast.mount(div)
  document.body.appendChild(div)

  return toast
}