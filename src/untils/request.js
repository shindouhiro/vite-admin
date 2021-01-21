
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data
    // 从 localstorage 获取 token
    // const token = storage.get(ACCESS_TOKEN)
    const token = 'token'
    if (error.response.status === 403) {
      ELMessage.error({
        message: data.message,
      })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      ELMessage.error({
        message: 'Authorization verification failed'
      })
      if (token) {
        // store.dispatch('Logout').then(() => {
        //   setTimeout(() => {
        //     window.location.reload()
        //   }, 1500)
        // })
      }
    }
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  // const token = storage.get(ACCESS_TOKEN)
  const token = 'token'
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['Access-Token'] = token 
  }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)


export default request
