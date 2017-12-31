const Mock = require('mockjs')


//Number => 'name|min-max': number
let mockNumber = Mock.mock({
  "number|1-100": 1
})
console.log(mockNumber)

//Object => 'name|count': object /'name|min-max': object
let mockObejct = Mock.mock({
  "object|2": {
    "310000": "上海市",
    "320000": "江苏省",
    "330000": "浙江省",
    "340000": "安徽省"
  }
})
console.log(mockObejct)

