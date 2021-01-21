import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import router from '/@/router/index.js'
import store from '/@/store/index.js'
import '/@/assets/scss/common.scss'
import request from '/@/untils/request.js'

const app = createApp(App)
app.config.globalProperties.$axios = request
app.use(Antd);
app.use(router)
app.use(store)
app.mount('#app')





