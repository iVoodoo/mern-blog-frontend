import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '@services/api/base'

export const deletePost = async (id: string) => {
  const config: AxiosRequestConfig = {
    url: `/posts/${id}`,
    method: 'DELETE'
  }

  const request = await apiRequest(config)

  return request
}
