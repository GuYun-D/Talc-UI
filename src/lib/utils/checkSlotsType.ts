import { Component, RendererNode, VNode, RendererElement } from 'vue'

/**
 * 校验插槽的类型
 * @param slots 插槽数组
 * @param type 要校验的类型
 * @param parentComponentName 父组件名称
 */
export function checkSlotType(slots: VNode<RendererNode, RendererElement, {
  [key: string]: any
}>[], type: Component, parentComponentName: string) {
  let anticipantComponentName = type.name

  for (let i = 0; i < slots.length; i++) {
    if (slots[i].type !== type) {
      let result = _getUnexpectedElementorComponentName(slots[i])
      throw new TypeError(
        `The internal slot type of component ${parentComponentName} should be ${anticipantComponentName}, but you passed in ${result}`)
    }
  }
}


/**
 * 获取校验失败的元素或者组件的名字
 * @param unexpectedElement 校验失败的元素或者组件
 * @returns 校验错误的信息
 */
function _getUnexpectedElementorComponentName(unexpectedElement: any) {
  let errorMessage = ""
  let unexpectedElementType = unexpectedElement.type
  if (typeof unexpectedElementType === "symbol") {
    errorMessage = "Illegal content"
  } else {
    errorMessage = unexpectedElementType.name
      ? unexpectedElementType.name + "组件"
      : errorMessage = unexpectedElementType + "元素"
  }

  return errorMessage
}
