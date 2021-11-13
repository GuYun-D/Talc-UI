export function getStyle(el: Element, prop: string) {
  return parseInt(window.getComputedStyle(el, null)[prop])
}