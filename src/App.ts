import { css } from '@emotion/css'
import { html, render } from 'lit-html'

import logo from '@images/logo.png'
import logo2x from '@images/logo@2x.png'

const header = () => {
  const style = css`
    background-color: #4E41DB;
    padding: 0 20px;
    display: flex;
    height: 60px;
    align-items: center;
  `

  return html`
  <header class=${style}>
    <h1>
      <a href="/">
        <img
          src=${logo}
          srcset="
            ${logo} 1x,
            ${logo2x} 2x
          "
          alt="wellcome to whw"
        />
      </a>
    </h1>
  </header>
  `
}

const root = html`
<div id="app">
  ${header()}
  <main>
  </main>
  <footer>
  </footer>
</div>
`

render(root, document.body)