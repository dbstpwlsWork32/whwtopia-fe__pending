import { render } from 'lit-html'
import type { TemplateResult } from "lit-html"

class RouterView extends HTMLElement {
  constructor() {
    super()
  }

  viewChange(com: TemplateResult) {
    render(com, this)
  }
}

customElements.define('ce-router-view', RouterView)