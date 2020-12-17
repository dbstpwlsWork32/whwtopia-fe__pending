import { injectGlobal } from '@emotion/css'
import { parse as fontParse } from '../utils/font'
import colorParse from '../utils/palette'

export default injectGlobal`
  :root {
    ${fontParse.setCssVar()}
    ${colorParse.setCssVar()}
  }

  html {
    font-size: var(${fontParse.getCssVar('root')}, 20px);
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: var(${fontParse.getCssVar('base')}, 14px);
    font-weight: 400;
    background: #E5E5E5;
  }
`