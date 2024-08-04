import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "developer-console",
      filename: "remoteEntry.js",
      exposes: {

      },
      shared: [
        "react"
      ]
    })
  ],
  build: {
    target: "esnext",
    outDir: '/var/www/html'
  }
})
