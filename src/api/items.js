import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/item/list',
    method: 'get',
    params: query
  })
}

export function fetchItem(id) {
  return request({
    url: '/vue-element-admin/item/detail',
    method: 'get',
    params: { id }
  })
}

export function createItem(data) {
  return request({
    url: '/vue-element-admin/item/create',
    method: 'post',
    data
  })
}

export function updateItem(data) {
  return request({
    url: '/vue-element-admin/item/update',
    method: 'post',
    data
  })
}
