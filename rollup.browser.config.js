import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';
import pkg from './package.json';

// UMD build (for browsers)
export default {
  input: 'src/demo/index.ts', // drops out demo script for browsers
  output: {
    name: 'ne_cust_elems',
    file: pkg.browser,
    format: 'umd'
  },
  plugins: [
    resolve(), // find external modules
    commonjs(), // convert external modules to ES modules
    copy({ targets: [{ src: 'src/demo/*.html', dest: 'dist' }] }),
    typescript(),
    terser({ include: '*.umd.min.js' }),
    url({ include: ['src/**/*.css', 'src/**/*.html'] })
  ]
};