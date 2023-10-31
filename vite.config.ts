import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  root: './',
  build: {
      outDir: 'dist',
  },
  publicDir: 'public',
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
