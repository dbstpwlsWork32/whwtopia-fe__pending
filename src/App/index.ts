import { html, render } from 'lit-html'
// import type { NodePart } from 'lit-html'

import Router from '@/lib/router'

import header from './Header'
import home from '@/views/Home'

const router = new Router(
  {
    routes: [
      {
        path: '/',
        view: () => home,
        exact: true
      }
    ],
    fallback: () => import('@/views/404')
  },
  '#app-router'
)

const template = html`
  ${header()}
  <main>
    <nav is="ce-router" @routeChange=${router.routeLinkClick.bind(router)}>
      <a is="ce-router-link" href="/example/asdasd/asdasd">ex</a>
      <a is="ce-router-link" href="/">home</a>
    </nav>

    <div id="app-router"></div>
  </main>
  <footer>
  </footer>
`
render(template, document.body)