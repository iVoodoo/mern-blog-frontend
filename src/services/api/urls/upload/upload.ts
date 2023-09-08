import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '@services/api/base'

export const upload = async (formData: FormData) => {
  const config: AxiosRequestConfig = {
    url: 'upload',
    method: 'POST',
    data: formData
  }

  const request = await apiRequest(config)

  return request
}
