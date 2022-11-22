/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { readdirSync } from 'fs'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  base: './',
  publicDir: false,
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: readdirSync('./src/module').map(folder => resolve(__dirname, `src/module/${folder}/index.html`)),
      output: { dir: './dist/views' },
    },
  },
})
