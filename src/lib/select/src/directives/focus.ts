export default {
  mounted(el: HTMLElement) {
    const oSelectInput = el.querySelector('.t-selec-input'),
      oSelectmenu = el.querySelector('.t-select-menu') as HTMLDivElement
    const oInput = oSelectInput.querySelector('input'),
      oPlaceHolder = oSelectInput.querySelector('label'),
      oIcon = oSelectInput.querySelector('span')

    oInput.addEventListener('focus', function () {
      oPlaceHolder.style.display = 'none'
      oIcon.className = 'talc ta-31sousuo'
      oSelectmenu.style.display = 'block'
    }, false)

    oInput.addEventListener('blur', function () {
      oPlaceHolder.style.display = 'block'
      oIcon.className = 'talc ta-xiajiantou'
      oSelectmenu.style.display = 'none'
    }, false)
  },
}