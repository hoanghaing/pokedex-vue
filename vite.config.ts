import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      src: "/src",
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    force: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/styles/variables.scss";`, // Import global SCSS variables
      },
    },
  },
})

