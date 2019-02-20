/**
 * 将时间戳转换成 05:30:06 类型时间字符串
 * @param  {[type]} timeStamp [description] 时间戳单位秒
 * @return {[type]}           [description] 时间字符串
 */
export function formatDateString (timeStamp) {
  timeStamp = Math.floor(timeStamp / 1000)
  let hours = Math.floor(timeStamp % (24 * 3600) / 3600)
  let minutes = Math.floor(timeStamp % (60 * 60) / 60)
  let seconds = timeStamp % 60
  return `${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`
}

export function checkPlatform () {
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isAndroid) {
    return 'android'
  }
  if (isiOS) {
    return 'ios'
  }
}

/**
 * 将时间戳转换成 ?天:?时:?分:?秒 类型时间字符串
 * @param  {[type]} timeStamp [description] 时间戳单位秒
 * @return {[type]}           [description] 时间字符串
 */
export function formatDateString1 (timeStamp) {
  let days = Math.floor(timeStamp / (24 * 3600))
  let hours = Math.floor(timeStamp % (24 * 3600) / 3600)
  let minutes = Math.floor(timeStamp % (60 * 60) / 60)
  let seconds = timeStamp % 60
  return `${days}天：${hours < 10 ? '0' + hours : hours}时：${minutes >= 10 ? minutes : '0' + minutes}分：${seconds >= 10 ? seconds : '0' + seconds}秒`
}

/**
* url的传参获取
* @param  {[str]} key 需要获取的key
* @return {[str]} value 返回key对应的值
*/
export function getUrlParamsVal (url, key) {
  if (url.indexOf('?') === -1) {
    return ''
  }
  // 取出href问号后面的部分
  let searchIndex = url.indexOf('?') + 1
  let search = url.slice(searchIndex)
  let paramsArr = search.split('&')
  let result = ''
  paramsArr.forEach(item => {
    if (item.indexOf(key) !== -1) {
      let _arr = item.split('=')
      result = _arr[1]
    }
  })
  return result
}
