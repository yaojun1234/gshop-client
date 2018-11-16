/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import  data from './data'


// 返回goods 的接口
Mock.mock('/goods',{code:0, data: data.goods})
// 返回ratings 的接口
Mock.mock('/ratings',{code:0, data: data.ratings})
// 返回info 的接口
Mock.mock('/info',{code:0, data: data.info})

// export default  xxxx  // 这里不需要向外暴露任何数据，只需要保证执行即可
