import { parse, compileScript } from '@vue/compiler-sfc';
import MagicString from 'magic-string'
export const transformCode = (code, id) => {
  const str = new MagicString(code);
  const { descriptor } = parse(code)
  if (!descriptor.script && descriptor.scriptSetup) {
    const result = compileScript(descriptor, { id })
    const name = result.attrs.name
    const lang = result.attrs.lang
    // console.log(code)
    // console.log('--------------')
    console.log(result)
    console.log('==============')
  }

}