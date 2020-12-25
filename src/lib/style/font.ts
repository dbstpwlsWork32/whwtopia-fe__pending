import { font as FONT_JSON } from './common/config.json'
import { Parse } from './common/Parse'

const rem = (px: number, root = FONT_JSON.root): string => px / parseInt(root) + 'rem'

const parse = new Parse<typeof FONT_JSON>(FONT_JSON, '--ft')

export {
  rem as default,
  rem,
  parse
}