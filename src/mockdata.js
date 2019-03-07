import Mock from 'mockjs'
const data = Mock.mock({
  // 随机生成一个10-50个元素的数组
  'foods|1-5': [{
    'name': '@ctitle(2,5)', // 2-5个汉字
    'img': '@image("150x100",#b7ef7c,image)',
    'brief': '@csentence(50,150)', // 多个汉字
    'price|0-20.0-2': 1, // 随机生成0-20的数字，小数点后1-2位
    'num': '@integer(1, 100)', // 1-100随机数
    'minusFlag': '@boolean',
    'time': '@time("HH:mm:ss")',
    'date': '@date("yyyy-MM-dd")',
    'date-time': '@datetime("yyyy-MM-dd HH:mm:ss")',
    'now': '@now("second")',
    'peisongfei|0-100.0-2': 1,
    'limit|0-50': 1
  }],
  'sales|1-5': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'name': '@ctitle(2,10)',
    'img': '@image("600x600",#b7ef7c)',
    'brief': '@csentence(1,50)',
    'price|0-100.0-2': 1,
    'num': 0,
    'minusFlag': '@boolean',
    'time': '@time',
    'peisongfei|0-100.0-2': 1,
    'limit|0-100': 1
  }]
})

export default {
  data
}
