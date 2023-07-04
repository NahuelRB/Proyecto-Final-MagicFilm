import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    // Ajusta el límite de memoria asignado a Node.js (en megabytes)
    // El valor predeterminado es 4096 (4 GB)
    // Puedes ajustar este valor según tus necesidades
    memoryLimit: 8192, // 8 GB
  },
  define: {
    global: 'window',
  },
})
