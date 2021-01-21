import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '/@/router/index.js'
import store from '/@/store/index.js'
import '/@/assets/scss/common.scss'
import request from '/@/untils/request.js'

const app = createApp(App)
app.config.globalProperties.$axios = request
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')






