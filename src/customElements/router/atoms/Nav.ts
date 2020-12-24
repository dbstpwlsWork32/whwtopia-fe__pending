class Nav extends HTMLElement {
  protected viewer: RouterViewer

  constructor(viewer: RouterViewer) {
    super()
    this.viewer = viewer
    this.addEventListener('routeChange', this.handleRouterChange as EventListener)
  }

  handleRouterChange(e: EventRouteChange) {
    e.stopPropagation()
    this.viewer.viewChange()
  }

  disconnectedCallback() {
    this.removeEventListener('routeChange', this.handleRouterChange as EventListener)
  }
}

customElements.define('ce-router', Nav, {extends: 'nav'})