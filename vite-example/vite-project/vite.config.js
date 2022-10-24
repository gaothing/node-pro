import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginHtmlInfoInject  from 'vite-plugin-html-info-inject'

export default defineConfig({
  plugins: [vue(),vitePluginHtmlInfoInject({title:'你好，我是title',script:'https://baidu.ccom',css:[{src:'https://ss.cc'}],keywords:'好久不见 ',description:'好久不见'})]
})
