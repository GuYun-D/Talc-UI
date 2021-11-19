export default {
  mounted(el: HTMLElement) {
    const oSelectInput = el.querySelector('.t-selec-input')
    const oInput = oSelectInput.querySelector('input'),
      oPlaceHolder = oSelectInput.querySelector('label'),
      oIcon = oSelectInput.querySelector('span')

    oInput.addEventListener('focus', function () {
      oPlaceHolder.style.display = 'none'
      oIcon.className = 'talc ta-31sousuo'
    }, false)

    oInput.addEventListener('blur', function () {
      oPlaceHolder.style.display = 'block'
      oIcon.className = 'talc ta-xiajiantou'
    }, false)
  },
}