import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '@services/api/base'

export const getPostsByTag = async (tag: string) => {
  const config: AxiosRequestConfig = {
    url: `/tag/${tag}`,
    method: 'GET'
  }

  const request = await apiRequest(config)

  return request
}
