import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Port 5173 keeps things consistent across environments.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
})
