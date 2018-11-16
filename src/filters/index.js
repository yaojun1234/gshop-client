import  Vue from 'vue'
//import moment from 'moment'  // 通过打包分析，这个库太大了，而用到里面的功能太少，所以要找到替代方法
import format from 'date-fns/format'


// 自定义过滤器
Vue.filter('date-format', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
 // return moment(value).format(formatStr)
  return  format(value,formatStr)
})
