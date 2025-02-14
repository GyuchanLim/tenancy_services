import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@hooks': '/src/hooks/',
    },
  },
  server: {
    cors: {
      // the origin you will be accessing via browser
      origin: 'localhost:3000',
    },
  },
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: './index.html',
    },
  },
})
