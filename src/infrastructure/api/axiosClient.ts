import useAuthStore from '@/shared/store/authStore'
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'

export const apiGL: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_GESTIOLOOOP_URL as string,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

apiGL.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean
    }

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes('/auth/refresh-token')
    ) {
      originalRequest._retry = true

      try {
        await useAuthStore.getState().refreshToken()
        return apiGL(originalRequest)
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)
