import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import Loading from '../plugins/loading'
import Toast from '../plugins/toast'
import { DEV_BASE_URL, PROD_BASE_URL, YUFA_BASE_URL } from '../settings'

Vue.use(Loading)
Vue.use(Toast)

let COMMONURL
if (process.env.NODE_ENV === 'development') {
    COMMONURL = DEV_BASE_URL
} else if (process.env.NODE_ENV === 'yufa') {
    COMMONURL = YUFA_BASE_URL
} else if (process.env.NODE_ENV === 'mock') {
    COMMONURL = '/1/'
} else {
    COMMONURL = PROD_BASE_URL
}

axios.interceptors.request.use((config) => {
    Vue.$loading.show('加载中...')
    return config
}, (error) => {
    Vue.$loading.hide()
    Vue.$toast.show({
        text: '请求数据失败'
    })
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
    Vue.$loading.hide()
    return response
}, (error) => {
    Vue.$loading.hide()
    Vue.$toast.show({
        text: '数据获取失败'
    })
    return Promise.reject(error)
})

const api = axios.create({
    baseURL: COMMONURL,
    timeout: 10000,
    header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
})

api.post = async function (url, data, reqAuthorization) {
    const tempData = qs.stringify(data)
    const res = await axios.post(COMMONURL + url, tempData, reqAuthorization)
    if (res.data.status === 'TOKEN_ERROR') {
        sessionStorage.setItem('token', '')
        return
    }
    return res.data
}

api.get = async function (url, reqAuthorization, formData) {
    if (formData) {
        url += '?'
        for (const param in formData) {
            if ({}.hasOwnProperty.call(formData, param)) {
                url += `${param}=${formData[param]}&`
            }
        }
        url = url.slice(0, -1)
    }
    const data = await axios.get(COMMONURL + url, reqAuthorization)
    return data.data
}

api.put = async function (url, data, reqAuthorization) {
    const tempData = qs.stringify(data)
    const res = await axios.put(COMMONURL + url, tempData, reqAuthorization)
    return res.data
}

export default api
