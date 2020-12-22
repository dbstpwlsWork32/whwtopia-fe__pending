class Anchor extends HTMLAnchorElement {
  constructor() {
    super()
    this.addEventListener('click', this.handleClick)
  }

  handleClick(e: Event) {
    e.preventDefault()

    const { pathname } = new URL(this.href)

    const routerEvent = new CustomEvent('routeChange', {
      bubbles: true,
      detail: {
        pathname
      }
    })

    this.dispatchEvent(routerEvent)
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick)
  }
}

customElements.define('ce-router-link', Anchor, { extends: 'a' })