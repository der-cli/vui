import basicConfig, { name, file } from './rollup.config'
export default {
  ...basicConfig,
  output: {
    name,
    file: file('esm'),
    format: 'es',
    banner: '/* eslint-disable */',
    footer: '/* </> with ♥ by yesmore */'
  }
}