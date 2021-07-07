const Mock = require('mockjs')

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock(
    {
      id: '@increment',
      'name|1': ['素土夯实', '100厚C15砼垫层', '500*500*300（300*300*500）C30素砼', '4@12锚筋', '50*50*5镀锌钢管横梁，30*30*3镀锌方管纵梁；50*50*5镀锌方管横向支撑', '0.6mm压型彩钢板', '300*500玻璃钢雨水篦子', '破除砼厚度0.2m；破除2:8灰土垫层0.3m', '电缆头制作、安装', '电缆防火隔板', '母线桥安装', '管内穿线', '配线', '焊、压接线端子'],
      'unit|1': ['m', 'm^2', '个', '组', '套', 'm^3'],
      'type|1': ['土建', '安装'],
      quantity: '@float(0, 1000, 2, 2)',
      laborCost: '@float(0, 10000, 2, 2)',
      machineryCost: '@float(0, 10000, 2, 2)',
      materialCost: '@float(0, 10000, 2, 2)',
      administrationCost: '@integer(0,100)',
      ruleFee: '@integer(0,100)',
      profit: '@integer(0,100)',
      risk: '@integer(0,100)',
      tax: '@integer(0,100)',
      createAt: +Mock.Random.date('T'),
      updateAt: +Mock.Random.date('T')
    }
  ))
}

module.exports = [
  {
    url: '/vue-element-admin/item/list',
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
    url: '/vue-element-admin/item/detail',
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
    url: '/vue-element-admin/item/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/item/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

