import { animation } from './common/config.json'
import { Parse } from './common/Parse'

const parse = new Parse<typeof animation>(animation, '--ani')


export default parse