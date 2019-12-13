import request from '@/api/axios'

export function getUserList (reqData) {
  return request({
    url: process.env.API_BASE_URL + '/user/getUserList',
    method: 'post',
    data: reqData
  })
}
