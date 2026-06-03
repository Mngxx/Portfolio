import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Portfolio/',
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})
