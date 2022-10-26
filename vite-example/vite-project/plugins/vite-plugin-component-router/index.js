
import {transformCode} from './utils/transformCode'
export default (options) => {
  return {
    name: 'vite-plugin-component-router-extend',
    enforce: 'pre',
    async transform(code, id) {
      if (!/\.vue$/.test(id)) {
        return null
      }
      transformCode.call(this, code, id)
      return code
    },
  }
}