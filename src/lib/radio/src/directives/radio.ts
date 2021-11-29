import { DirectiveBinding, VNode, RendererNode } from 'vue'
import { IElementCollectionObj } from '../type'

const elementCollectionObj: IElementCollectionObj = {}

/**
 * 获取需要操作的元素
 * @param el 当前要操作的元素
 */
function getElement(el: RendererNode) {
  let oLabel = el.querySelector('label')
  let oSpans = oLabel.getElementsByTagName('span')
  elementCollectionObj.oLabel = oLabel
  elementCollectionObj.oSpans = oSpans
}

/**
 * 修改当前radio的状态
 * @param binding 指令的binding
 * @param currentEl 当前要操作的元素
 */
function changeRadioState(binding: DirectiveBinding<boolean>, currentEl: RendererNode) {
  getElement(currentEl)
  if (binding.value) {
    elementCollectionObj.oSpans[0].style.backgroundColor = binding.arg
  } else {
    elementCollectionObj.oSpans[0].style.backgroundColor = ""
  }
}

export default {
  mounted(el: HTMLDivElement, binding: DirectiveBinding<boolean>, VNode: VNode) {
    changeRadioState(binding, VNode.el)
  },
  updated(el: HTMLDivElement, binding: DirectiveBinding<boolean>, VNode: VNode) {
    changeRadioState(binding, VNode.el)
  },
}