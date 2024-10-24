import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'deyran——我的博客'
        return args
      })
    plugins: [vue()]
  }
})
