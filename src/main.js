// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import  store from './store'

import './mock/mockServer'  // 加载mockServer即可

import loading from './common/imgs/loading.gif'
import './filters'


// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
Vue.config.productionTip = false

Vue.use(VueLazyload, {  //  内部自定义一个指令 lazy
  preLoad: 1.3,
  error: 'dist/error.png',
  loading,
  attempt: 1
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>',
  render: h => h(App),
  router, // 使用上vue-router
  store  // 使用上vuex
})
