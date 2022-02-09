import { reqCategoryList,reqGetBannerList,reqFloorList } from "@/api"
// home 模块的小仓库
const state = {
  // state中的默认初始值别瞎写，服务器返回对象，根据接口初始化
  categoryList:[],
  bannerList:[],
  floorList:[]
}
const mutations = {
  CATEGORELIST(state,categoryList){
    state.categoryList = categoryList
  },
  GETBANNERLIST(state,bannerList){
    state.bannerList = bannerList
  },
  GETFLOORLIST(state,floorList){
    state.floorList = floorList
  }
}
const actions = {
  // 通过API里面的接口函数调用，向服务器发请求，向服务器发请求，获取服务器数据
  async categoryList({commit}){
    let result = await reqCategoryList()
    if(result.code == 200){
      commit('CATEGORELIST',result.data)
    }
  },
  // 获取首页轮播图的数据
  async getBannerList({commit}){
    let result = await reqGetBannerList()
    if(result.code == 200){
      commit('GETBANNERLIST',result.data)
    }
  },
  async getFloorList({commit}){
    let result = await reqFloorList()
    if(result.code == 200){
      commit('GETFLOORLIST',result.data)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}