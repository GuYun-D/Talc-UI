import { DirectiveBinding } from 'vue'
import { IElementCollectionObj } from '../type'

const elementCollectionObj: IElementCollectionObj = {}

function getElement(el: HTMLDivElement) {
  let oLabel = el.querySelector('label')
  let oSpans = oLabel.getElementsByTagName('span')
  elementCollectionObj.oLabel = oLabel
  elementCollectionObj.oSpans = oSpans
}

export default {
  mounted(el: HTMLDivElement) {
    getElement(el)
  },

  updated(el: HTMLDivElement, binding: DirectiveBinding<boolean>) {
    let radioState = binding.value
    if (radioState) {
      elementCollectionObj.oSpans[0].style.backgroundColor = "#00cb51"      
    }else {
      elementCollectionObj.oSpans[0].style.backgroundColor = ""      
    }
  },
}