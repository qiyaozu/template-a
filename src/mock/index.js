// 示例代码
// http://mockjs.com/examples.html

// mock方法介绍
// https://github.com/nuysoft/Mock/wiki/Mock.setup()

require('./home')
require('./capital')
require('./invite')
require('./capitalRecord')
require('./node')

// 在这里可以做一些通用的配置
const Mock = require('mockjs')
// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
    timeout: 200
})
