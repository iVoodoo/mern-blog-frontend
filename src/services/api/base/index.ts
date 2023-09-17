import axios, { AxiosRequestConfig } from 'axios'

const baseUrl = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  headers: {
    // 'Content-Type': 'multipart/form-data'
  }
})

baseUrl.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers.Authorization = window.localStorage.getItem('token')
  return config
})

export const apiRequest = async (config: AxiosRequestConfig) => {
  try {
    const response = await baseUrl(config)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
