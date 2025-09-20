// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Add any modules Vite warns about here
      external: ['react/jsx-runtime']
    }
  },
  resolve: {
    alias: {
      // Helps Vercel/Node resolve react runtime correctly
      'react/jsx-runtime': 'react/jsx-runtime.js'
    }
  }
})
