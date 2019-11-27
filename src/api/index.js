import { getUrlParamsByKey } from '@/utils'
import api from './base'

class ApiController {
    constructor(ops) {
        this.ops = ops
        // 在页面强制刷新的时候，会使用这个 TODO
        this.reqAuthorization = {
            headers: {
                Authorization: process.env.NODE_ENV === 'development' ? '123456' : getUrlParamsByKey('token')
            }
        }
    }

    /**
     *
     * @return {[Object]}            返回请求响应
     */
    async home() {
        const res = await api.get('index', this.reqAuthorization)
        return res
    }

    /**
    *
    * @return {[Object]}            返回请求响应
    */
    async open(postData) {
        const res = await api.post('test-post', postData, this.reqAuthorization)
        return res
    }
}

export default new ApiController()
