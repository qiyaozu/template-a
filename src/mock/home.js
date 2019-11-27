const Mock = require('mockjs')

// home
Mock.mock('/1/home', 'get', {
    status: 'SUCCESS',
    error_message: ''
})
