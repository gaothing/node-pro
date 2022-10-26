import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VirtualPlugin from './plugins/virtual'
import vitePluginHtmlInfoInject from 'vite-plugin-html-info-inject';
import vitePluginCompsRouter from './plugins/vite-plugin-component-router'


export default defineConfig({
  plugins: [
    vue(),
    VirtualPlugin(),
    vitePluginCompsRouter(),
    vitePluginHtmlInfoInject({ title: '你好，我是title', script: 'https://baidu.ccom', css: [{ src: 'https://ss.cc' }], keywords: '好久不见 ', description: '好久不见', vconsole: false })]
})
