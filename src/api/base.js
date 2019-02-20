import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import Loading from '../plugins/loading'
import Toast from '../plugins/toast'
// TODO 需要换线上的接口
import { DEV_BASE_URL, YUFA_BASE_URL, PROD_BASE_URL } from '../settings'

Vue.use(Loading)
Vue.use(Toast)

let COMMONURL
switch (process.env.NODE_ENV) {
  case 'development':
    COMMONURL = DEV_BASE_URL
    break
  case 'yufa':
    COMMONURL = YUFA_BASE_URL
    break
  default:
    COMMONURL = PROD_BASE_URL
}

axios.interceptors.request.use(function (config) {
  Vue.$loading.show('加载中...')
  return config
}, function (error) {
  Vue.$loading.hide()
  Vue.$toast.show({
    text: '请求数据失败'
  })
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  Vue.$loading.hide()
  return response
}, function (error) {
  Vue.$loading.hide()
  Vue.$toast.show({
    text: '数据获取失败'
  })
  return Promise.reject(error)
})

let api = axios.create({
  baseURL: COMMONURL,
  timeout: 10000,
  header: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

api.post = async function (url, data) {
  let _data = qs.stringify(data)
  let res = await axios.post(COMMONURL + url, _data)
  return res.data
}

api.get = async function (url, params) {
  if (params) {
    let str = ''
    for (let key in params) {
      str += `${key}=${params[key]}&`
    }
    url += '?' + str.slice(0, -1)
  }
  let data = await axios.get(COMMONURL + url)
  return data.data
}

api.put = function (url, data, reqAuthorization) {
  let _data = qs.stringify(data)
  return axios.put(COMMONURL + url, _data, reqAuthorization)
}

export default api
