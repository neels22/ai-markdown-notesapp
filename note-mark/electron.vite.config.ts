import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@shared': resolve('src/shared'),
        '@/lib': resolve('src/lib')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    assetsInclude: 'src/renderer/src/assets/**/*',
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@/hooks': resolve('src/renderer/src/hooks'),
        '@/assets': resolve('src/renderer/src/assets'),
        '@/store': resolve('src/renderer/src/store'),
        '@/components': resolve('src/renderer/src/components'),
        '@/pages': resolve('src/renderer/src/pages'),
        '@/utils': resolve('src/renderer/src/utils'),
        '@/types': resolve('src/renderer/src/types'),
        '@/mocks': resolve('src/renderer/src/mocks'),
        '@/shared': resolve('src/shared')
      }
    },
    plugins: [react()]
  }
})
