import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  plugins: [preact()],
  server: {
    open: true,
    port: 3000
  },
  root: 'src',
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
