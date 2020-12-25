export default (e: MouseEvent) => {
  const { clientWidth, clientHeight, offsetTop, offsetLeft } = (e.currentTarget as HTMLElement)
  const diameter = Math.max(clientWidth, clientHeight)

  const rippleDom = document.createElement('div')
  rippleDom.classList.add('js_ripple')
  rippleDom.style.width = rippleDom.style.height = `${diameter}px`

  rippleDom.style.top = `${(e.pageY - offsetTop - diameter / 2)}px`
  rippleDom.style.left = `${(e.pageX - offsetLeft - diameter / 2)}px`

  const rippleEvent = (dom: any) => {
    const currentTarget = dom.currentTarget as Element
    currentTarget.remove()
    currentTarget.removeEventListener('animationend', rippleEvent)
  }

  rippleDom.addEventListener('animationend', rippleEvent)

  return rippleDom
}
