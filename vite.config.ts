import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

  plugins: [react(), tailwindcss()],
  base: '/consulting-services/'
})
