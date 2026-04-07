import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/ikhsan-portfolio",
  plugins: [react()],
  server: {
    allowedHosts: ["compatriotic-actually-tandra.ngrok-free.dev"]
  }
})
