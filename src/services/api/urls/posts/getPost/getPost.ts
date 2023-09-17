import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '@services/api/base'

export const getPost = async (id: string) => {
  const config: AxiosRequestConfig = {
    url: `/posts/${id}`,
    method: 'GET'
  }

  const request = await apiRequest(config)

  return request
}
