// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
// 使用插件
Vue.use(VueRouter);

import store from "@/store";

let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
let router = new VueRouter({
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  },
});
//全局守卫：前置守卫
router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  if (token) {
    if (to.path == "/login") {
      next("/");
    } else {
      if (name) {
        next();
      } else {
        try {
          //没有用户信息，派发action让仓库存储用户信息再跳转
          await store.dispatch("getUserInfo");
          next();
        } catch (error){
          await store.dispatch('userLogout')
          next('/login')
        }
      }
    }
  } else {
    next();
  }
});
export default router;
