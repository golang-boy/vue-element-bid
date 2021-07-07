const Mock = require('mockjs')

const List = []
const count = 100


for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    'name|1': ['白灰', 'C15素砼', 'C10素砼', 'C25素砼', 'C20素砼', 'PE管', '闸阀', '闸阀', 'PVC双壁波纹管'],
    'type|1': ['土建材料', '安装材料'],
    'specs|1': ['DN50', 'DN100', 'DN65', 'DN200', 'DN20', 'YJV22-4*95', '3*25', 'BV-3*2.5', 'RVV-4*1.0', 'HYM1-250L/330 200A/3P-200L', '10W暖白光', '86底盒'],
    'unit|1': ['m', 'm^2', '个', '组', '套'],
    upet: '@float(0, 10000, 2, 2)',
    upit: '@float(0, 10000, 2, 2)',
    'brand|1': ['永高', '正泰'],
    remark: '@csentence(15,30)'
  }))
}

module.exports = [
  {
    url: '/vue-element-admin/material/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-element-admin/material/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const material of List) {
        if (material.id === +id) {
          return {
            code: 20000,
            data: material
          }
        }
      }
    }
  },

  {
    url: '/vue-element-admin/material/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/material/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

