const Mock = require('mockjs')

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock(
    {
      id: '@increment',
      'name|1': ['3-6组团商业给水提升', '五组团室外雨水排水管改造', '二期排水沟（六组团排水管）'],
      code: '@integer(0,100)',
      'type|1': ['土建', '安装'],
      createAt: +Mock.Random.date('T'),
      updateAt: +Mock.Random.date('T')
    }
  ))
}

module.exports = [
  {
    url: '/vue-element-admin/work/list',
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
    url: '/vue-element-admin/work/detail',
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
    url: '/vue-element-admin/work/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/work/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

