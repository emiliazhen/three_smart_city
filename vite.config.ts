import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/three_smart_city/',
  plugins: [vue(), glsl()],
  assetsInclude: ['src/assets/model/*.glb'],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@import "@/assets/styles/variable.less";',
      },
    },
  },
})
