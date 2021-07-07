const Mock = require('mockjs')

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock(
    {
      id: '@increment',
      'name|1': ['商铺处新增铁艺围挡高2m（具体做法详见招标图纸)', '上商铺处新增铁艺围挡高3m（具体做法详见招标图纸）', '铁艺大门', '焊接法兰阀门', '电气配线', '一般路灯', '门禁电源底盒', '塑料管UPVC、PVC、PP-C、PP-R、PE管等', '铺装破除及恢复：宽度0.5m', '砼路面破除及恢复：宽度0.3m', '排水沟', '双篦雨水口', '绿化破除及恢复：宽度0.5m', '砖砌围墙'],
      'type|1': ['土建', '安装'],
      remark: '@csentence(60,90)',
      projectID: '@integer(0,100)',
      createAt: +Mock.Random.date('T'),
      updateAt: +Mock.Random.date('T')
    }
  ))
}

module.exports = [
  {
    url: '/vue-element-admin/job/list',
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
    url: '/vue-element-admin/job/detail',
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
    url: '/vue-element-admin/job/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/job/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

