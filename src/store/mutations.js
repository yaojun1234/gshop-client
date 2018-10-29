/*
直接更新state的多个方法的对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHPOS
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
  }
}
