import { injectGlobal } from '@emotion/css'
import { parse as fontParse } from '../utils/font'
import colorParse from '../utils/palette'

export default injectGlobal`
  :root {
    ${fontParse.setCssVar()}
    ${colorParse.setCssVar()}

    --bg-base: var(${colorParse.getCssVar('white-1')}, #E5E5E5);
    --bg-primary: var(${colorParse.getCssVar('primary-1')}, #4E41DB);

    --ft-cl-base: var(${colorParse.getCssVar('black')}, #000);
    --ft-cl-primary: var(${colorParse.getCssVar('primary')}, #7776FF);
    --ft-cl-sub: var(${colorParse.getCssVar('white-2')}, #999);
  }

  html {
    font-size: var(${fontParse.getCssVar('root')}, 20px);
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: var(${fontParse.getCssVar('base')}, 14px);
    font-weight: 400;
    color: var(--ft-base-cl);
    background: var(--bg-base);
  }

  /* color modules */
  .c__bg-primary {
    background: var(--bg-primary)
  }
  .c__ft-primary {
    color: var(--ft-cl-primary);
  }
  .c__ft-sub {
    color: var(--ft-cl-sub);
  }
`