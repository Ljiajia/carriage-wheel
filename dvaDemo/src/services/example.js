import request from '../utils/request';
import JSBridge from "../utils/api"
//获取所有城市
export function query() {
  return request('https://chezhu.eclicks.cn/ExchangeJiaZhao/cityList');
}
//获取补签城市
export async function getMatch(params){
  let data=await request.get('https://chezhu.eclicks.cn/ExchangeJiaZhao/getCostList',{
    params:{
      ...params
    }
  })
  return data
}
//获取订单号
export async function getorderNumber(params){
  let data=await request.get('https://payproxy.eclicks.cn/Order/Create',{
    params:{
      ...params
    }
  })
  return data
}


//登录
export function doLogins(ck){
  JSBridge.invoke('app','login',{
    loginCallBackName:ck
  })
}
//拍照
export function uploadFile(type,ck){
  JSBridge.invoke('device','chooseImage',{
    type:type,
    chooseCallbackName:ck
  })
}
//分享
export function share(to,ck){
  JSBridge.invoke('ui','shareMessage',{
    to,
    shareCallBackName:ck
  })
}
//身份证正面  
export function  cardFront(type,isFront,ck){
  JSBridge.invoke('device','takeCertificatePicture',{
    type:type,
    isFront:isFront,
    takeCertificateCallBackName:ck
  })
}
//身份证反面  
export function cardReverse(ck){
  JSBridge.invoke('device','takeCertificatePicture',{
    type:2,
    isFront:0,
    takeCertificateCallBackName:ck
  })
}

//驾驶证正面  type2   isFront-->1正   0---》驾驶证反面
export function driveFront(ck){
  JSBridge.invoke('device','takeCertificatePicture',{
    type:1,
    isFront:1,
    takeCertificateCallBackName:ck
  })
}

//驾驶证反面  
export function drivereverse(ck){
  JSBridge.invoke('device','takeCertificatePicture',{
    type:1,
    isFront:0,
    takeCertificateCallBackName:ck
  })
}
//调用支付  
export function pay(channels,ck){
  console.log('支付渠道')
  JSBridge.invoke('app','pay',{
    price:'398.00',
    orderNum:'6533881111465636865',//订单号
    channels,//支付渠道
    callbackUrl:'https://www.baidu.com/',
    payCallback:ck
  })
}
// chelunJSBridge://device/takeCertificatePicture?type=2&isFront=1&takeCertificateCallBackName=1//身份证正面

//chelunJSBridge://device/chooseImage?type=2&chooseCallbackName=6   //身份证正面相册

// chelunJSBridge://device/takeCertificatePicture?type=2&isFront=0&takeCertificateCallBackName=3//身份证反面

//chelunJSBridge://device/chooseImage?type=2&chooseCallbackName=8   //身份证反面相册

//chelunJSBridge://device/takeCertificatePicture?type=1&isFront=1&takeCertificateCallBackName=4//驾驶证正面

//chelunJSBridge://device/chooseImage?type=2&chooseCallbackName=5   //驾驶证相册

//chelunJSBridge://device/takeCertificatePicture?type=1&isFront=0&takeCertificateCallBackName=9  //驾驶证反面拍照

//chelunJSBridge://device/chooseImage?type=2&chooseCallbackName=10  //驾驶证反面相册

//chelunJSBridge://device/chooseImage?type=1&chooseCallbackName=11  1寸照片  拍照

//chelunJSBridge://device/chooseImage?type=2&chooseCallbackName=12   照片相册