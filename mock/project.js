const Mock = require('mockjs')

const List = []
const count = 10

for (let i = 0; i < count; i++) {
  List.push(Mock.mock(
    {
      id: '@increment',
      'name|1': ['西安珠江新城二期提升改造工程', '西安珠江新城三期提升改造工程', '西安珠江新城四期提升改造工程', '西安珠江新城五期提升改造工程'],
      code: '@integer(0,100)',
      createAt: +Mock.Random.date('T'),
      updateAt: +Mock.Random.date('T')
    }
  ))
}

module.exports = [
  {
    url: '/vue-element-admin/project/list',
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
    url: '/vue-element-admin/project/detail',
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
    url: '/vue-element-admin/project/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/project/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

