import request from '../utils/request';
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