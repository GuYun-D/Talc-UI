import { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding<any[]>) {
    let mark = el.querySelector('.mark') as HTMLElement
    let pre: number = 10 - binding.value[0]
    mark.style.width = pre / 10 * binding.value[1] + 'px'
    mark.style.height = binding.value[1] + 'px'
    el.style.marginRight = (- pre / 10 * binding.value[1]) / 2 + 'px'
  },
}