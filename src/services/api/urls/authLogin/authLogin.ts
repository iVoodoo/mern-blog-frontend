import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '@services/api/base'

export const authLogin = async (email: string, password: string) => {
  const config: AxiosRequestConfig = {
    url: 'auth/login',
    method: 'POST',
    data: {
      email,
      password
    }
  }

  const request = await apiRequest(config)

  return request
}
