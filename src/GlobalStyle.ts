import { injectGlobal } from '@emotion/css'
import { parse as fontParse } from './lib/style/font'
import colorParse from './lib/style/palette'

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
    line-height: 1.4em;
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

  /* default styles */
  .s__radius-4 {
    border-radius: 4px;
  }
  .s__radius-10 {
    border-radius: 10px;
  }
`