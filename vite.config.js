import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: command === 'serve' ? '/' : '/hosting-service-website/',
  }

  if (command !== 'serve') {
    config.base = '/react-vite-gh-pages/'
  }

  return config
})
