import { html } from 'lit-html'

import Router from '@/lib/router'

const router = new Router(
  {
    root: '/home',
    routes: [
      {
        path: '/page',
        view: () => import('@/views/404')
      }
    ],
    fallback: () => import('@/views/404')
  },
  '#home-router'
)

export default html`
  <div>home &&</div>
  <nav is="ce-router" @routeChange=${router.routeLinkClick.bind(router)}>
    <a is="ce-router-link" href="/home/page">page</a>
  </nav>

  <div id="home-router" style="background: red">
    adsasd
  </div>
`