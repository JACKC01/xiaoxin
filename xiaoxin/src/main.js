import Vue from 'vue'
import App from './App.vue'

// 全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
// 引入路由
import router from '@/router'
Vue.config.productionTip = false

// 引入仓库
import store from './store'

// 引入MockServe.js ---- mock数据
import '@/mock/mockServe'

// 引入swiper样式
import "swiper/css/swiper.css"


new Vue({
  render: h => h(App),
  beforeCreate(){
      Vue.prototype.$bus = this
  },
  //注册路由
  router,
  // 注册仓库：组件实例的身上会多一个属性$store
  store
}).$mount('#app')
