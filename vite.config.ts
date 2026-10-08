import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import {defineConfig} from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/main.tsx'],
    },
  },
})
