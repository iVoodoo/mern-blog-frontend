import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '@services/api/base'

export const authMe = async () => {
  const config: AxiosRequestConfig = {
    url: 'auth/me',
    method: 'GET'
  }

  const request = await apiRequest(config)

  return request
}
