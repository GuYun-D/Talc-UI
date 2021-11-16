import { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding<number[]>) {
    let mark = el.querySelector('.mark') as HTMLSpanElement
    mark.style.width = binding.value[1] - (binding.value[0] * binding.value[1]) / 10 + 'px'
    mark.style.height = binding.value[1] + 'px'
  },
}