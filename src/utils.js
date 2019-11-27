export function secondFormat(second) {
    if (!second) return '00:00:00'
    let minute = Math.floor(second / 60) % 60 || '0'
    let hour = Math.floor(second / 60 / 60) % 60 || '0'
    let s = second % 60
    s = s > 10 ? s : `0${s}`
    minute = minute > 10 ? minute : `0${minute}`
    hour = hour > 10 ? hour : `0${hour}`
    return `${hour}:${minute}:${s}`
}

/**
 * 获取url中的参数
 * @param  {[str]} key 需要获取的key
 * @return {[str]} value 返回key对应的值
 */
export function getUrlParamsByKey(key) {
    if (location.search.indexOf('?') === -1) {
        return ''
    }
    // 取出hash问号后面的部分
    const search = location.search.slice(location.search.indexOf('?') + 1)
    const paramsArr = search.split('&')
    let result = ''
    paramsArr.forEach((item) => {
        if (item.indexOf(key) !== -1) {
            const tempArr = item.split('=')
            result = tempArr[1]
        }
    })
    return result
}
