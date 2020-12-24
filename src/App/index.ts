import { html, render } from 'lit-html'

import header from './Header'

const router: RouterStructure = {
  '/': {
    view: () => import('@/views/Home')
  }
}

const abc = (e: EventRouteChange) => {
}

const root = html`
  ${header()}
  <main>
    <nav is="ce-router" @routeChange=${abc}>
      <a is="ce-router-link" href="./example/asdasd/asdasd">ex</a>
    </nav>

    <router-view></router-view>
  </main>
  <footer>
  </footer>
`

render(root, document.body)