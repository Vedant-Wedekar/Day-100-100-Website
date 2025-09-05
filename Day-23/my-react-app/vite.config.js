import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
        tailwindcss(),
         function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
         textShadow: '100px 180px 240px rgba(0, 0, 0, 50%)',

        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
})
