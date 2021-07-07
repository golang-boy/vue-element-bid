import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/job/list',
    method: 'get',
    params: query
  })
}

export function fetchJob(id) {
  return request({
    url: '/vue-element-admin/job/detail',
    method: 'get',
    params: { id }
  })
}

export function createJob(data) {
  return request({
    url: '/vue-element-admin/job/create',
    method: 'post',
    data
  })
}

export function updateJob(data) {
  return request({
    url: '/vue-element-admin/job/update',
    method: 'post',
    data
  })
}
