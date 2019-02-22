
import api from './base'

class ApiController {
  constructor (ops) {
    this.ops = ops
    // 在页面强制刷新的时候，会使用这个
    this.reqAuthorization = { headers: { 'Authorization': sessionStorage.getItem('token') } }
  }

  /**
   * 获取验证码
   * @param  {[Object]} postData 请求数据 { account: '', password: '' }
   * @return {[Object]}            返回请求响应
   */
  async getcode (postData = {}) {
    let res = await api.post('send-mobile-code', postData, this.reqAuthorization)
    return res
  }

  /**
   * 活动配置
   * @return {[Object]}            返回请求响应
   */
  async activityConf (params) {
    let res = await api.get('activity-conf', params)
    return res
  }
}

export default new ApiController()
