import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/work/list',
    method: 'get',
    params: query
  })
}

export default function fetchWork(id) {
  return request({
    url: '/vue-element-admin/work/detail',
    method: 'get',
    params: { id }
  })
}

export function createWork(data) {
  return request({
    url: '/vue-element-admin/work/create',
    method: 'post',
    data
  })
}

export function updateWork(data) {
  return request({
    url: '/vue-element-admin/work/update',
    method: 'post',
    data
  })
}
