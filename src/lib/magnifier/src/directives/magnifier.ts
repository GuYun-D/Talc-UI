import { getStyle } from '../utils/tools'

enum magnifierClassName {
  normal="mag-wrap",
  show=" show"
}

export default {
  mounted(el: HTMLElement) {
    let oImgWrap = el,
      oMagWrap = oImgWrap.querySelector('.mag-wrap') as HTMLElement,
      oMagImg = oMagWrap.querySelector('.mag-img') as HTMLElement,
      imgWidth = getStyle(oImgWrap, 'width'),
      imgHeight = getStyle(oImgWrap, 'height'),
      magWidth = getStyle(oMagWrap, 'width'),
      magHeight = getStyle(oMagWrap, 'height'),
      imgX = oImgWrap.offsetLeft,
      imgY = oImgWrap.offsetTop


    const init = () => {
      bindEvent()
    }

    function bindEvent() {
      oImgWrap.addEventListener('mouseover', function (e) {
        oMagWrap.className += magnifierClassName.show
        showMag(getXY(e).x, getXY(e).y)
        document.addEventListener('mousemove', handleMouseMove, false)
      }, false)

      oImgWrap.addEventListener('mouseout', handleMouseOut, false)
    }

    function handleMouseMove(e: MouseEvent) {
      const { x, y, mouseX, mouseY } = getXY(e)
      showMag(x, y, mouseX, mouseY)
    }

    function handleMouseOut() {
      oMagWrap.className = magnifierClassName.normal
      document.removeEventListener('mousemove', handleMouseMove, false)
    }

    function showMag(x: number, y: number, mouseX?: number, mouseY?: number) {
      oMagWrap.style.left = x + 'px'
      oMagWrap.style.top = y + 'px'
      oMagImg.style.left = -x + 'px'
      oMagImg.style.top = -y + 'px'

      if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
        oMagWrap.className = magnifierClassName.normal
        document.removeEventListener('mousemove', handleMouseMove, false)
      }
    }

    function getXY(e: MouseEvent) {
      return {
        x: e.pageX - imgX - magWidth / 2,
        y: e.pageY - imgY - magHeight / 2,
        mouseX: e.pageX - imgX,
        mouseY: e.pageY - imgY
      }
    }

    init()
  },
}