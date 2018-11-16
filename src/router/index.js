/*
路由器对象模块
 */
import  Vue from 'vue'
import  VueRouter from 'vue-router'

// import  MSite from '../pages/MSite/MSite'
// import  Order from '../pages/Order/Order'
// import  Profile from '../pages/Profile/Profile'
// import  Search from '../pages/Search/Search'

// 路由懒加载，变化是在打包时会生成多个js文件，需要时才会去加载
const MSite = () => import('../pages/MSite/MSite')
const Order = () => import('../pages/Order/Order')
const Profile = () => import('../pages/Profile/Profile')
const Search = () => import('../pages/Search/Search')


import  Login from '../pages/Login/Login'
import  Shop from  '../pages/Shop/Shop'
import  ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import  ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import  ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes:[{
      path: '/msite',
      component: MSite,  //  返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在请求对应的路由路径时才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
]})
