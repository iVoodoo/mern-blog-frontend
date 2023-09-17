import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '@services/api/base'

export const getPopularTags = async () => {
  const config: AxiosRequestConfig = {
    url: '/tags',
    method: 'GET'
  }

  const request = await apiRequest(config)

  return request
}
