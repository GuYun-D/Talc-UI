import { DirectiveBinding } from 'vue'

const sizes = {
  big: {
    height: 26
  },
  normal: {
    height: 22
  },
  small: {
    height: 18
  }
}

const getElement = (el: Element, size: string) => {
  let oSwitchBtn: HTMLButtonElement = el.querySelector('#t-switch-btn')
  let oSpan = oSwitchBtn.querySelector('span')
  let currentHeight = sizes[size].height
  let spanSize = currentHeight - 4

  return {
    oSwitchBtn,
    oSpan,
    currentHeight,
    spanSize
  }
}

export default {
  mounted(el: HTMLDivElement, binding: DirectiveBinding<string>) {
    let { oSwitchBtn, oSpan, currentHeight, spanSize } = getElement(el, binding.value)

    oSwitchBtn.style.height = currentHeight + 'px'
    oSwitchBtn.style.width = currentHeight * 2 + 'px'
    oSwitchBtn.style.borderRadius = currentHeight / 2 + 'px'

    oSpan.style.height = spanSize + 'px'
    oSpan.style.width = spanSize + 'px'
    oSpan.style.borderRadius = spanSize / 2 + 'px'
  },

  updated(el: HTMLDivElement, binding: DirectiveBinding<string>) {
    let { oSwitchBtn, oSpan, currentHeight, spanSize } = getElement(el, binding.value)



    if (oSwitchBtn.getAttribute('class').includes('t-checked')) {
      oSpan.style.left = currentHeight * 2 - spanSize - 2 + 'px'
    } else {
      oSpan.style.left = '2px'
    }
  },
}