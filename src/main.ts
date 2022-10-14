import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from '@/App.vue'
import router from '@/router'
import uiVue3 from '@/index'
import '@/style.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from 'element-plus/dist/locale/zh-cn.js'

createApp(App)
.use(ElementPlus,{locale: zhCn,size:'small'})
.use(router)
.use(uiVue3)
.mount('#app')
