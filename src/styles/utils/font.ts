import { font as FONT_KEY } from './config.json'

const rem = (px: number): string => px/FONT_KEY.root + 'rem'

const parse = {
  getCss (key: keyof typeof FONT_KEY) {
    return `--ft-${key}`
  },
  toCss (key: keyof typeof FONT_KEY) {
    return `--ft-${key}: ${rem(FONT_KEY[key])};`
  },
  toKey (key: string) {
    return key.replace('--ft-', '')
  }
} as const

export {
  rem,
  FONT_KEY,
  parse
}