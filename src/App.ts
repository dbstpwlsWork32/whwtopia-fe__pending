import { css } from '@emotion/css'
import { html, render } from 'lit-html'

import makeIcon from '@/lib/getIcon'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '@images/logo.png'
import logo2x from '@images/logo@2x.png'

const header = () => {
  const style = css`
    padding: 0 20px;
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;

    .search-box {
      display: flex;
      align-items: center;
      flex-grow: 1;
      max-width: 486px;
      height: 32px;
      margin: 0 10px;
      font-weight: 700;
      overflow: hidden;
      background-color: #DCD9F8;
      color: #4E41DB;
      input {
        padding: 0 10px;
      }
      button {
        width: 80px;
        align-self: stretch;
        text-align: center;
        color: #fff;
        background: #8F75D9;
      }
    }

    .profile {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid #fff;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  `

  return html`
  <header class="${style} c_bg-primary">
    <h1 class="logo">
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
    <div class="search-box s_radius-4">
      <input class="search" type="text" placeholder="Search" />
      <button class="button" is="ce-button">
        ${makeIcon(faSearch)}
      </button>
    </div>
    <div class="profile">
    </div>
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