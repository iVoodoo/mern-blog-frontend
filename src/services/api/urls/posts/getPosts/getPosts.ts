import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '@services/api/base'

export const getPosts = async () => {
  const config: AxiosRequestConfig = {
    url: '/posts',
    method: 'GET'
  }

  const request = await apiRequest(config)

  return request
}
