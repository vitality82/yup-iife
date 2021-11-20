import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/yup-iife.js',
        format: 'iife',
        name: 'yup',
      },
      {
        file: 'dist/yup-iife.min.js',
        format: 'iife',
        name: 'yup',
        plugins: [terser()],
      }
    ],
    plugins: [
        commonjs(),
        resolve()
    ]
};