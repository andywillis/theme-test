import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  root: 'src2',
  plugins: [
    preact()
  ],
  server: {
    open: true,
    port: 3000
  },
  resolve: {
    alias: {
      react: 'preact/compat'
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ]
    }
  },
  build: {
    target: 'esnext',
    emptyOutDir: true,
    outDir: '../build',
    sourcemap: true
  }
});
