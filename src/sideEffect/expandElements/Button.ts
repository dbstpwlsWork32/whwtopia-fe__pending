class Button extends HTMLButtonElement {
  private ce_maked = 0

  constructor() {
    super()
    this.addEventListener('click', this.ce_rippleEffect)
  }

  get ce_rippleDom() {
    const div = document.createElement('div')
    return div
  }
  ce_rippleEffect() {
    if (this.ce_maked > 4) return false
    this.ce_maked++

    this.appendChild(this.ce_rippleDom)
  }
}

customElements.define('ce-button', Button, { extends: 'button' })