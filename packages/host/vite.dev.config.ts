import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  preview:{
    port: 80
  },
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        app_catalog: "http://localhost:81/assets/remoteEntry.js"
      },
      shared: [
        "react"
      ]
    })
  ],
  build: {
    target: "esnext",
  }
})
