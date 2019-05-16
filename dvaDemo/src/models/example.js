import {query,getMatch,getorderNumber} from "@/services/example"

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
  state: {
    moneys:399.00,
    flag:false,
    caloffflag:false,
    imglist:[{
        title:'身份证正面',
        img:require('../assets/id-a.png'),
        id:0,
        src:''
    },{
        title:'身份证反面',
        img:require('../assets/id-b.png'),
        id:1,
        src:''
    },{
        title:'驾驶证正页',
        img:require('../assets/licence-a.png'),
        id:2,
        src:''
    },{
        title:'驾驶证副页',
        img:require('../assets/licence-b.png'),
        id:3,
        src:''
    },{
        title:'白底半身照',
        img:require('../assets/photo.png'),
        id:4,
        src:''
    }],
    imgnewlist:[{
        title:'身份证正面',
        img:require('../assets/id-a.png'),
        id:0,
        src:''
    },{
        title:'身份证反面',
        img:require('../assets/id-b.png'),
        id:1,
        src:''
    },{
        title:'白底半身照',
        img:require('../assets/photo.png'),
        id:2,
        src:''
    }]
  },
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
    },
    //获取订单号
    *getOrder({ payload }, { call, put }) {
      let data = yield call(getorderNumber, payload)
      console.log(data,'真正的订单号。。。。。。')
      yield put({ type: 'order', payload:data })
    }
  },
//同步改变，这里是唯一改变state的地方
  reducers: {
    upload(state, action){//加载上传照片的弹出框
      return { ...state,flag:true,img:action.img,title:action.title,index:action.index,lengths:action.lengths};
    },
    cancel(state,action){//取消上传照片的弹出框
      return { ...state,flag:false};
    },
    showtype(state,action){//签发城市没有选中---》显示弹框
      return { ...state,caloffflag:true};
    },
    caloff(state,action){ //点击弹框中的 --->好====》，弹框不显示
      return { ...state, caloffflag:false};
    },
    city(state,action){  //获取所有城市
      return { ...state, ...action.payload };
    },
    filterCitys(state,action){//获取选择城市的id
      return { ...state, ...action.payload,province_id:action.province_id,city_id:action.city_id };
    },
    types(state,action){//获取选择城市的类型
      return { ...state, ...action.payload,order_type:action.order_type };
    },
    citys(state, action) {   //筛选城市
      return { ...state, ...action.payload };
    },
    order(state,action){  //获取订单号
      return { ...state, ...action.payload };
    },
    setmoney(state,action){ // 根据不同地址设置金额
      return { ...state,moneys:action.moneys};
    },
    setimg(state,action){
      let newimglist=[...state.imglist]
      let imgnewlists=[...state.imgnewlist]
      action.lengths * 1 === 5 ? newimglist[action.index].src=action.url : imgnewlists[action.index].src=action.url
      return { ...state,imglist:newimglist,imgnewlist:imgnewlists,flag:false};
    }
  },
};