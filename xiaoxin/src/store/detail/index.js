import { reqGoodsInFo,reqAddOrUpdateShopCart } from "@/api";
// 封装游客身份模块uuid ，生成随机字符串，不能再变
import {getUUID} from '@/utils/uuid_token'
const state = {
  goodInfo:{},
  // 游客的临时身份
  uuid_token:getUUID()
};
const mutations = {
  GETGOODSINFO(state,goodInfo){
    state.goodInfo = goodInfo
  }
};
const actions = {
  // 获取产品信息的action
  async getGoodsInfo({commit},skuId){
    let result = await reqGoodsInFo(skuId)
    if(result.code == 200){
      commit('GETGOODSINFO',result.data)
    }
  },
  // 将产品添加到购物车中
  async addOrUpdateShopCart({commit},{skuId,skuNum}){
    let result = await reqAddOrUpdateShopCart(skuId,skuNum)
    console.log(result);
    if(result.code == 200){
      return "ok"
    }else{
      return Promise.reject(new Error('fail'))
    }
  }
};
const getters = {
  categoryView(state){
    return state.goodInfo.categoryView || {}
  },
  skuInfo(state){
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList(state){
    return state.goodInfo.spuSaleAttrList || []
  }
};
export default {
  state,
  actions,
  mutations,
  getters
};
