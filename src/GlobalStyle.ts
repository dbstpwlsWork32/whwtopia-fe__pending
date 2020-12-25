import { injectGlobal } from '@emotion/css'
import { parse as fontParse } from '@/lib/style/font'
import colorParse from '@/lib/style/palette'
import aniParse from '@/lib/style/animation'

export default injectGlobal`
  :root {
    ${fontParse.setCssVar()}
    ${colorParse.setCssVar()}
    ${aniParse.setCssVar()}

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
  .c_bg-primary {
    background: var(--bg-primary)
  }
  .c_ft-primary {
    color: var(--ft-cl-primary);
  }
  .c_ft-sub {
    color: var(--ft-cl-sub);
  }

  /* default styles */
  .s_radius-4 {
    border-radius: 4px;
  }
  .s_radius-10 {
    border-radius: 10px;
  }

  /* custom elements */
  button[is="ce-button"] {
    position: relative;
    overflow: hidden;
    .js_ripple {
      transform: scale(.4);
      border-radius: 50%;
      position: absolute;
      background: currentcolor;
      animation: default-ripple var(${aniParse.getCssVar('medium')}) alternate;
      opacity: .6;
    }
  }

  @keyframes default-ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`