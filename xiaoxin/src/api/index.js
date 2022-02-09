//当前这个模块：API进行统一管理
import requests from "./request";
import mockRequests from "./mockAjax";
// 三级联动接口
//  /api/product/getBaseCategoryList get 无参数

// 发请求:axios发请求返回结果Promise对象
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });

export const reqGetBannerList = () => mockRequests.get("/banner");

export const reqFloorList = () => mockRequests.get("/floor");

// 搜索模块数据 请求方式：post 参数：需要带参数
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });

// 获取产品详情信息
export const reqGoodsInFo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });

// 将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });

// 获取购物车列表数据接口
export const reqCartList = () =>
  requests({ url: "/cart/cartList", method: "get" });

// 删除购物产品的接口
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "DELETE" });

// 修改商品选中的状态
export const reqUpdateCheckedById = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "GET" });

// 获取验证码
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "GET" });

// 注册
export const reqUserRegister = (data) =>
  requests({ url: "/user/passport/register", data, method: "POST" });

//登录
export const reqUserLogin = (data) =>
  requests({ url: "/user/passport/login", data, method: "POST" });

// 获取用户信息
export const reqUserInfo = () =>
  requests({ url: "/user/passport/auth/getUserInfo", method: "get" });

// 退出登录
export const reqLogout = () =>
  requests({ url: "/user/passport/logout", method: "GET" });

//获取用户地址信息
export const reqAddressInfo = () =>
  requests({
    url: "/user/userAddress/auth/findUserAddressList",
    method: "GET",
  });

//获取商品清单
export const reqOrderInfo = () =>requests({url:'/order/auth/trade',method:'GET'})
