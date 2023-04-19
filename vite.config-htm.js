import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import postcssNesting from 'postcss-nesting';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  root: 'src',
  plugins: [
    preact(),
    viteCompression()
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
    sourcemap: false
  }
});
