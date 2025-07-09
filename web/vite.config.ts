import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Loads Vite's app environment variables (`VITE_*`) into process.env
  // Keep in mind, `mode` is dependent on vite command args
  const viteEnv = loadEnv(mode, process.cwd())
  process.env = { ...process.env, ...viteEnv }

  return {
    plugins: [react()],
  }
})
