import getRippleDom from '@coms/ripple'

class Button extends HTMLButtonElement {
  constructor() {
    super()
    this.addEventListener('click', this.ce_rippleEffect)
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.ce_rippleEffect)
  }

  ce_rippleEffect(e: MouseEvent) {
    this.appendChild(getRippleDom(e))
  }
}

customElements.define('ce-button', Button, { extends: 'button' })