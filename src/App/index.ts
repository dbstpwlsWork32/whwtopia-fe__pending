import { html, render } from 'lit-html'

import header from './Header'

const root = html`
<div id="app">
  ${header()}
  <main>
    <nav is="ce-router">
      <a is="ce-router-link" href="./example/asdasd/asdasd">asdadsasd</a>
    </nav>

    <router-view></router-view>
  </main>
  <footer>
  </footer>
</div>
`

render(root, document.body)