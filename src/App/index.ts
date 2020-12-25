import { html, render } from 'lit-html'
import type { TemplateResult } from 'lit-html'

import routerGetHelper from '@/lib/router'

import header from './Header'

const getByRouter = routerGetHelper({
  routes: {
    '/': {
      view: () => import('@/views/Home')
    }
  },
  fallback: () => import('@/views/404')
})

const routeChange = async (e: EventRouteChange) => {
  const view = await getByRouter(e.detail.path)
  _render(view)
}

const _render = (routeTemplate: TemplateResult) => {
  const template = html`
    ${header()}
    <main>
      <nav is="ce-router" @routeChange=${routeChange}>
        <a is="ce-router-link" href="/example/asdasd/asdasd">ex</a>
      </nav>

      ${routeTemplate}
    </main>
    <footer>
    </footer>
  `

  render(template, document.body)
}

import home from '@/views/Home'

_render(home)