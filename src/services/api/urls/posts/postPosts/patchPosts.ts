import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '@services/api/base'

export const patchPosts = async (id: string, title: string, text: string, tags?: string[], imageUrl?: string) => {
  const config: AxiosRequestConfig = {
    url: `/posts/${id}`,
    method: 'PATCH',
    data: {
      title,
      text,
      imageUrl,
      tags
    }
  }

  const request = await apiRequest(config)

  return request
}
