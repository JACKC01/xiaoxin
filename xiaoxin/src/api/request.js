// 对于axios进行二次封装
import axios from "axios"
// 引入进度条
import nprogress from "nprogress"
// 在当前模块引入store
import store from '@/store'
//引入进度条样式
import "nprogress/nprogress.css"
// start:进度条开始 done:进度条结束

//1:利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
  //配置对象
  // 基础路径，发请求的时候，路径当中会出现api
  baseURL:'/api',
  timeout:5000,
})
// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在发请求之前做一些事件
requests.interceptors.request.use((config)=>{
  if(store.state.detail.uuid_token){
    // 请求头添加一个字段
    config.headers.userTempId = store.state.detail.uuid_token
  }
  //需要携带token带给服务器
  if(store.state.user.token){
    config.headers.token = store.state.user.token
  }
  //config:配置对象，对象里面有一个属性很重要，header请求头
  nprogress.start()
  return config
})
// 相应拦截器
requests.interceptors.response.use(res=>{
  //成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
  nprogress.done()
  return res.data
},(error)=>{
  // 响应失败的回调函数
  return Promise.reject(new Error('faile'))
})
export default requests;