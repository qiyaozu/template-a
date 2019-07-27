const Mock = require('mockjs')
const Random = Mock.Random

Mock.mock('/1/user', 'get', {
    code: 0,
    data: {
        fullName: '@CNAME', // 随机生成中文人名
        userId: 1000234234001,
        username: 'zhangsan',
        permission: 2, // 用户权限
        date: Random.date('yyyy-MM-dd')
    },
    msg: 'success'
})
