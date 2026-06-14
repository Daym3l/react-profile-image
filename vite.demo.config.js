import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Build the sample app as a static demo site for GitHub Pages.
// Served at https://daym3l.github.io/react-profile-image/
export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, 'sample'),
  base: '/react-profile-image/',
  build: {
    outDir: resolve(__dirname, 'demo-dist'),
    emptyOutDir: true,
  },
})
