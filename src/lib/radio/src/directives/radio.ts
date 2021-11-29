import { DirectiveBinding, VNode, RendererNode } from 'vue'
import { IElementCollectionObj } from '../type'

const elementCollectionObj: IElementCollectionObj = {}

function getElement(el: RendererNode) {
  let oLabel = el.querySelector('label')
  let oSpans = oLabel.getElementsByTagName('span')
  elementCollectionObj.oLabel = oLabel
  elementCollectionObj.oSpans = oSpans
}

export default {
  updated(el: HTMLDivElement, binding: DirectiveBinding<boolean>, VNode: VNode) {
    let radioState = binding.value
    getElement(VNode.el);

    if (radioState) {
      elementCollectionObj.oSpans[0].style.backgroundColor = "#00cb51"
    } else {
      elementCollectionObj.oSpans[0].style.backgroundColor = ""
    }
  },
}