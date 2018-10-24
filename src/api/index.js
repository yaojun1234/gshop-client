/*
 包含n 个接口请求的函数的模块
 函数的返回值：promise对象
 */

import  ajax from './ajax'

// 1、根据经纬度获取位置详情<br/>
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 2、获取食品分类列表<br/>
export  const  reqFoodTypes = () => ajax('/index_category')
// 3、根据经纬度获取商铺列表<br/>
export  const  reqShopList = (longitude,latitude) => ajax('/shops',{longitude,latitude})
// 4、根据经纬度和关键字搜索商铺列表<br/>
export  const  reqQueryShopList = (geohash,keyword) => ajax('/search_shops',{geohash,keyword})
// 5、获取一次性验证码<br/>
export  const  reqValidateCode = () => ajax('/captcha')
// 6、用户名密码登陆<br/>
export  const  reqLogin = ({name, pwd, captcha}) => ajax('/login_pwd','POST',{name, pwd, captcha})
// 7、发送短信验证码<br/>
export  const  reqSMS_Code = (phone) => ajax('/sendcode',phone)
// 8、手机号验证码登陆<br/>
export  const  reqPhoneValidateLogin = (phone,code) => ajax('/login_sms',{phone,code})
// 9、根据会话获取用户信息<br/>
export  const  reqGetUser = () => ajax('/userinfo')
// 10、用户登出<br/>
export  const  reqLogon = () => ajax('/logout')




