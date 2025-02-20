import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@hooks': '/src/hooks/',
      '@components': '/src/components/',
      '@stylesheets': '/src/stylesheets/',
      "@pages": '/src/app/pages/',
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
