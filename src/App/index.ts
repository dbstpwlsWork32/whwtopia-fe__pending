import { html, render } from 'lit-html'
// import type { NodePart } from 'lit-html'

import createRouter from '@/lib/router'

import header from './Header'
import home from '@/views/Home'

const router = createRouter(
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
    <nav is="ce-router" @routeChange=${router()}>
      <a is="ce-router-link" href="/example/asdasd/asdasd">ex</a>
    </nav>

    <div id="app-router">
    </div>
  </main>
  <footer>
  </footer>
`
render(template, document.body)