interface EventRouteChange extends Event {
  pathname: string
}

class Nav extends HTMLElement {
  constructor() {
    super()
    this.addEventListener('routeChange', this.handleRouterChange as EventListener)
  }

  handleRouterChange(e: EventRouteChange ) {
    e.stopPropagation()
  }

  disconnectedCallback() {
    this.removeEventListener('routeChange', this.handleRouterChange as EventListener)
  }
}

customElements.define('ce-router', Nav, {extends: 'nav'})