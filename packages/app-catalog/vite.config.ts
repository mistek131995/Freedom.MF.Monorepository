import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "catalog-components",
      filename: "remoteEntry.js",
      exposes: {
        "./AppCatalogIndex" : "./src/pages/index/ui/Index.tsx"
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
