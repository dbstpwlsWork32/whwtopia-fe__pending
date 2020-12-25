import { resolution } from './common/config.json'
import { css } from '@emotion/css'

const media = {
  untilTablet: (value: any) => css`@media (max-width: ${resolution.tablet}px) { ${value} }`,
  untilMobile: (value: any) => css`@media (max-width: ${resolution.mobile}px) { ${value} }`
}

export default media