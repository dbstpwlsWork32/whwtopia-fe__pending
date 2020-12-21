import { palette as PALETTE_JSON } from './common/config.json'
import { Parse } from './common/Parse'

const parse = new Parse<typeof PALETTE_JSON>(PALETTE_JSON, '--cl')

export {
  parse as default,
  parse
}