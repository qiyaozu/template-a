
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
    let res = await api.post('send-mobile-code/new-user', postData, this.reqAuthorization)
    return res
  }

  /**
   * 下载统计
   * @return {[Object]}            返回请求响应
   */
  async downCount (way) {
    let res = await api.get('download-statistics?way=' + way)
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

  /**
   * 获取排行列表
   * @return {[Object]}            返回请求响应
   */
  async getActivityRank (pageIndex) {
    let res = await api.get('corps-rank?pn=' + pageIndex)
    return res
  }

  /**
   * 获取战队详情
   * @return {[Object]}            返回请求响应
   */
  async getTeamDetail (mobile) {
    let res = await api.get('corps-detail?mobile=' + mobile)
    return res
  }

  /**
   * 组建战队
   * @param  {[Object]} postData 请求数据 { }
   * @return {[Object]}            返回请求响应
   */
  async buildTeam (postData = {}) {
    let res = await api.post('initiate-corps', postData)
    return res
  }

  /**
   * 获取空投排行列表
   * @return {[Object]}            返回请求响应
   */
  async getKongtouRank (pageIndex) {
    let res = await api.get('snapshot-rank?pn=' + pageIndex)
    return res
  }

  /**
   * 注册
   * @param  {[Object]} postData 请求数据 { mobile: '', code: ''... }
   * @return {[Object]}            返回请求响应
   */
  async regist (postData = {}) {
    let res = await api.post('activity-sign-up', postData)
    return res
  }
}

export default new ApiController()
