import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "@svgr/rollup";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),svgr()],
  server: {
    proxy: {
      '/api/twitter': {
        target: 'https://api.twitter.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/twitter/, ''),
        secure: true,
      },
    },
  }
})
