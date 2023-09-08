import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '@services/api/base'

export const authRegister = async (email: string, fullName: string, password: string, avatarUrl?: string) => {
  const config: AxiosRequestConfig = {
    url: '/auth/register',
    method: 'POST',
    data: {
      email,
      fullName,
      avatarUrl,
      password
    }
  }

  const request = await apiRequest(config)

  return request
}
