const axios = require('axios')

const url = 'http://rap.taobao.org/mockjsdata/24297/index/hotLists'

axios.post(url,{
  pageNum: 1,
  pageSize: 10
}).then(res => {
  console.log(res.data.lists)
})

