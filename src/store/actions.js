/*
通过mutation 间接 更新statue的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHPOS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodTypes,
  reqShopList,
  reqGetUser,
  reqLogon,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods,
  reqQueryShopList
} from '../api'

export default {
  // 异步获取地址
  async getAddress({commit,state}){
    // 1、 发送异步ajax请求(这里是参数是有顺序的,先纬度后经度)
    const geohash = state.latitude + ',' + state.longitude
    const  result =  await reqAddress(geohash)
    // 2、 提交一个mutation
    if(result.code===0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  // 异步获取食品分类列表
  async getCategory({commit}){
    // 1、 发送异步ajax请求
    const  result =  await reqFoodTypes()
    // 2、 提交一个mutation
    if(result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORY,{categorys})
    }
  },
  // 异步获取商家列表
  async getShops({commit,state}){
    // 1、 发送异步ajax请求
    const {latitude, longitude } = state
    const  result =  await reqShopList(longitude,latitude)

    // 2、 提交一个mutation
    if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHPOS,{shops})
    }
  },

  // 同步记录用户信息
  recordUser ({commit},userInfo){
    console.log(userInfo);
    commit(RECEIVE_USER_INFO,{userInfo})
  },

  //  异步记录获取用户信息
  async getUserInfo({commit}){
    const result = await reqGetUser();
    if(result.code==0){
      const  userInfo = result.data;
      commit(RECEIVE_USER_INFO,{userInfo});
    }
  },

  //异步登出
  async logout ({commit}){
    const result = await reqLogon();
    if(result.code===0){
      commit(RESET_USER_INFO);
    }
  },

  // 异步获取商家信息
  async getShopInfo ({commit}){
    const result = await reqShopInfo();
    if(result.code===0){
      const info = result.data
      commit(RECEIVE_INFO,{info});
    }
  },
  // 异步获取商家评价列表
  async getShopRatings ({commit}, callback){
    const result = await reqShopRatings()
    if(result.code===0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings});
      // 数据更新了，通知一下组件
      callback && callback()
    }
  },

  // 异步获取商家商品列表
  async getShopGoods ({commit}, callback){
    const result = await reqShopGoods();
    if(result.code===0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods});
      // 数据更新了，通知一下组件
      callback && callback()
    }
  },

  // 同步更新food中的值
  updateFoodCount({commit}, {isAdd, food}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else {
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },

  // 清除购物车
  clearCart ({commit}) {
    commit(CLEAR_CART)
  },

  // 异步获取搜索的商品列表
  async searchShop ({state,commit}, keyword){
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqQueryShopList(geohash,keyword);
    if(result.code===0){
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS,{searchShops});
    }
  },

}
