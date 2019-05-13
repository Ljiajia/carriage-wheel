import {query,getMatch} from "@/services/example"

// function convertKey (arr, key) {
//   let newArr = [];
//   arr.forEach((item, index) => {
//     let newObj = {};
//     for (var i = 0; i < key.length; i++) {
//       newObj[key[i]] = item[Object.keys(item)[i]]
//     }
//     newArr.push(newObj); 
//     if(item.list){
//      return convertKey(item.list, ['value', 'label','children'])
//     }else{
//       return
//     }
//   })
//   return newArr;
// }

function changeData(arr){
  arr.forEach((item) => {
        item['value'] = item['id']
        delete item['id']
        item['label'] = item['name']
        delete item['name']
        item['children'] = item['list']
        delete item['list']
        if (item.children) {
          changeData(item.children)
        }else{
          return
        }
    })
  return arr
}
export default {
  namespace: 'example',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
//异步改变
  effects: {
    //获取所有城市
    *citys({ payload }, { call, put }) {  // eslint-disable-line
      let data=yield call(query)
      if(data.code===0){
        let datas=changeData(data.data)
        yield put({ type: 'city',payload:[datas]});
      }
    },
    //筛选城市
    *citylist({ payload }, { call, put }) {
      let data = yield call(getMatch, payload)
      let datas=changeData(data.data)
      yield put({ type: 'citys', payload: { cityNew: datas } })
    }
  },
//同步改变，这里是唯一改变state的地方
  reducers: {
    city(state,action){
      return { ...state, ...action.payload };
    },
    citys(state, action) {
      return { ...state, ...action.payload };
    }
  },
};