import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '@services/api/base'

export const postPosts = async (title: string, text: string, tags?: string[], imageUrl?: string) => {
  const config: AxiosRequestConfig = {
    url: `/posts/`,
    method: 'POST',
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
