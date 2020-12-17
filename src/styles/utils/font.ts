import { font as FONT_JSON } from './common/config.json'
import { Parse } from './common/Parse'

const rem = (px: number): string => px / parseInt(FONT_JSON.root) + 'rem'

const parse = new Parse<typeof FONT_JSON>(FONT_JSON, '--ft')

export {
  rem as default,
  rem,
  parse
}