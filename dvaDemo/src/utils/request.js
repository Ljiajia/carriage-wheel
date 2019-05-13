import axios from 'axios'

// create an axios instance
const service = axios.create({
  // baseURL: 'http://169.254.12.55:7001', // api 的 base_url
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // if (res.code === 1) {
    return res
    // }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default service
