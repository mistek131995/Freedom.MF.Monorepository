import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  preview:{
    port: 82
  },
  plugins: [
    react(),
    federation({
      name: "profile",
      filename: "remoteEntry.js",
      exposes: {

      },
      shared: [
        "react"
      ]
    })
  ],
  build: {
    target: "esnext"
  }
})
