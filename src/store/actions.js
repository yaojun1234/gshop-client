/*
通过mutation 间接 更新statue的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHPOS
} from './mutation-types'
import {
  reqAddress,
  reqFoodTypes,
  reqShopList,
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
  }

}
