import {fetchUser} from "@/services/example"
export default {
  namespace: 'dialogs',
  state: {
      flag:false
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
//异步改变
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      let data=yield call(fetchUser)
      yield put({ type: 'save',payload:{data:data.data} });
    },
  },
//同步改变，这里是唯一改变state的地方
  reducers: {
    upload(state, action){
        return { ...state, ...action.payload ,flag:true};
    },
    cancel(state,action){
      return { ...state, ...action.payload ,flag:false};
    }
  },

};