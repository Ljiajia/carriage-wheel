import request from '../utils/request';
import JSBridge from "../utils/api"
export function query() {
  return request('https://chezhu.eclicks.cn/ExchangeJiaZhao/cityList');
}
export async function getMatch(params){
  let data=await request.get('https://chezhu.eclicks.cn/ExchangeJiaZhao/getCostList',{
    params:{
      ...params
    }
  })
  return data
}
//拍照
export function uploadFile(type,ck){
  JSBridge.invoke('device','chooseImage',{
    type:type,
    chooseCallbackName:ck
  })
}
//身份证正面
export function takeCertificateCallBackName(ck){
  JSBridge.invoke('device','takeCertificatePicture',{
    type:2,
    isFront:1,
    takeCertificateCallBackName:ck
  })
}