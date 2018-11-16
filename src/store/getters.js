/*
包含多个基于state 的 getter计算属性的对象
 */
import state from "./state";

export  default {
  totalCount (state){
    return state.cartFoods.reduce((preTotal,food) => preTotal + food.count, 0); // 初始值为0，
  },
  totalPrice (state){
    return state.cartFoods.reduce((preTotal,food) => preTotal + food.count*food.price, 0); // 初始值为0，
  },
  positiveSize () {
    return state.ratings.reduce((preTotal,rating) => preTotal + (rating.rateType===0?1:0),0)
  }
}
