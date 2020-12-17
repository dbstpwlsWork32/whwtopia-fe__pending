import { injectGlobal } from '@emotion/css'
import { FONT_KEY, parse } from '../utils/font'

export default injectGlobal`
  html {
    font-size: ${FONT_KEY.root}px;
  }
  :root {
    ${parse.toCss('base')}
    ${parse.toCss('small-1')}
    ${parse.toCss('title-1')}
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: var(${parse.getCss('base')}, 14px);
    font-weight: 400;
    background: #E5E5E5;
  }
`