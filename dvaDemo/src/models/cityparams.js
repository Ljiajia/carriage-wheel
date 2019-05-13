import {getMatch} from "@/services/example"
export default {
  namespace: 'cityparams',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
//异步改变
  effects: {
    *citylist({ payload }, { call, put }) {
        let data = yield call(getMatch, payload)
        yield put({ type: 'citys', payload: { cityNew: data.data } })
      }
  },
//同步改变，这里是唯一改变state的地方
  reducers: {
    citys(state, action) {
        return { ...state, ...action.payload };
      }
  },
};
