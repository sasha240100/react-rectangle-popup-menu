import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';


export default {
  input: './src/index.js',
  moduleName: 'ReactRectanglePopupMenu',
  sourcemap: true,

  // output: {
  //   file: './build/rrpm.js',
  //   format: 'umd',
  //   name: 'ReactRectanglePopupMenu',
  //   sourcemap: true
  // },

  targets: [
    {
      dest: './build/rrpm.js',
      format: 'umd'
    },
    {
      dest: 'build/rrpm.module.js',
      format: 'es'
    }
  ],

  plugins: [
    postcss({
      modules: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    resolve(),
    commonjs()
  ],

  external: ['react', 'react-dom'],

  globals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};
