/*
直接更新state的多个方法的对象
*/
import Vue from  'vue'
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
}
from './mutation-types'

export  default {
  [RECEIVE_ADDRESS] (state, {address}){
    state.address = address
  },
  [RECEIVE_CATEGORY] (state, {categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHPOS] (state, {shops}){
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state,){
    state.userInfo = {}
  },

  [RECEIVE_INFO](state,{info}){
    state.info = info
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state,{goods}){
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){ // 第一次增加
      // food.count = 1  // 如果是直接这样添加属性，是没有值绑定效果的，所以界面上的值是没有变化的
      //  需要使用vue的set方法添加，的属性才有绑定效果
      /**
       * set方法的参数
       * food: 对象
       * "count": 属性名
       * 1： 属性值
       */
      Vue.set(food, "count", 1) //  让新增的属性也有数据绑定
      // 将food添加到carFoots中去
      state.cartFoods.push(food)
    }else{
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){ // （大于0表示未true,小于0 表示为false）只有有值才去减
      food.count--
      if(food.count===0){
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1);
      }
    }

  },

  [CLEAR_CART](state){
     // 清除food中的count
     state.cartFoods.forEach(food => food.count = 0)
     // 移除购物车中所有购物项
     state.cartFoods = []

    //这里不能直接删除对象
   // state.cartFoods.splice(0,state.cartFoods.length)
  },

  [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
    state.searchShops = searchShops
  }

}
