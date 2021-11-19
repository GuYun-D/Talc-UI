export default {
  mounted(el: HTMLElement) {
    const oSelectInput = el.querySelector('.t-selec-input'),
      oSelectmenu = el.querySelector('.t-select-menu') as HTMLDivElement
    const oInput = oSelectInput.querySelector('input'),
      oPlaceHolder = oSelectInput.querySelector('label'),
      oIcon = oSelectInput.querySelector('span')

    /**
     * 使用原生dom控制menu组件的显示与隐藏，这样它的关闭早于vue，
     * 在点击menu-item的时候，就直接关闭了
     */
    oInput.addEventListener('focus', function () {
      oPlaceHolder.style.display = 'none'
      oIcon.className = 'talc ta-31sousuo'
      setTimeout(() => {
        oSelectmenu.style.display = 'block'
      }, 200);
    }, false)

    oInput.addEventListener('blur', function () {
      oIcon.className = 'talc ta-xiajiantou'
      setTimeout(() => {
        oSelectmenu.style.display = 'none'

        if (this.value.length === 0) {
          oPlaceHolder.style.display = 'block'
        }
      }, 200);
    }, false)
  },
}