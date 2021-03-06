// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
export default [
  {
    path: '/trade',
    name:'trade',
    component: Trade,
    meta:{show:true}
  },
  {
    path: '/shopcart',
    name:'shopcart',
    component: ShopCart,
    meta:{show:true}
  },
  {
    path: '/addcartsuccess',
    name:'addcartsuccess',
    component: AddCartSuccess,
    meta:{show:true}
  },
  {
    path:"/detail/:skuid",
    component:Detail,
    meta:{show:true}
  },
  {
    path:"/home",
    component:Home,
    meta:{show:true}
  },
  {
    path:"/search/:keyword?",
    name:"search",
    component:Search,
    meta:{show:true}
  },
  {
    path:"/login",
    component:Login,
    meta:{show:false}
  },
  {
    path:"/register",
    component:Register,
    meta:{show:false}
  },
  // 重定向，在项目跑起来的时候，访问/,立马让他定向到首页
  {
    path:'*',
    redirect:'/home'
  }
]