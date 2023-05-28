import axios from 'axios'

import { DOMAIN_SERVER_API } from '../config'
// import { handleRefreshToken } from './jwt'

const axiosInstance = axios.create({
  baseURL: DOMAIN_SERVER_API,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
})

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(
      (error.response && error.response.data) || 'Có lỗi xảy ra!'
    )
  }
)

export const _postApi = (url, data, headers = {}) =>
  axiosInstance.post(url, data, headers).then((response) => response.data)