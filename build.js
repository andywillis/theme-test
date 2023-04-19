import * as esbuild from 'esbuild';
import postcss from 'esbuild-postcss';
import cssModulesPlugin from 'esbuild-css-modules-plugin';

await esbuild.build({
  entryPoints: ['src-htm/main_static.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [
    postcss(),
    cssModulesPlugin({
      inject: false,
      v2: true, // experimental. v2 can bundle images in css, note if set `v2` to true, other options except `inject` will be ignored. and v2 only works with `bundle: true`.
    })
  ]});
