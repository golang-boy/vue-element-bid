import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/project/list',
    method: 'get',
    params: query
  })
}

export function fetchProject(id) {
  return request({
    url: '/vue-element-admin/project/detail',
    method: 'get',
    params: { id }
  })
}

export function createProject(data) {
  return request({
    url: '/vue-element-admin/project/create',
    method: 'post',
    data
  })
}

export function updateProject(data) {
  return request({
    url: '/vue-element-admin/project/update',
    method: 'post',
    data
  })
}
