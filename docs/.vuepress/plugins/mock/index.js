import Mock from 'mockjs'
// Mock响应模板
Mock.mock(RegExp('http://test.data' + '.*'), {
  code: 200,
  msg: 'ok',
  data: {
    'records|1-5': [
      {
        // 随机生成1到3个数组元素
        name: '@cname', // 中文名称
        'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
        birthday: '@date("yyyy-MM-dd")', // 日期
        address: '@city(true)',
        desc: {
          'height|160-180': 160,
        },
      },
    ],
    total: 2,
    pageNo: 1,
    pageSize: 20,
  },
})
