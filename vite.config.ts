// vite.config.ts
import { defineConfig } from 'vitest/config' // ✅ IMPORTA DESDE vitest/config
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // o .js, si usás JS
  },
})
