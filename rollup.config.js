import typescript from 'rollup-plugin-typescript2';
import url from '@rollup/plugin-url';
import pkg from './package.json';

// UMD build
export default {
  input: 'src/index.ts',
  output: {
    name: pkg.displayName,
    file: pkg.browser,
    format: 'umd'
  },
  plugins: [
    typescript(),
    url({ include: ['src/**/*.css', 'src/**/*.html'] })
  ]
};