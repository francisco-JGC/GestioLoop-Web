import useAuthStore from '@/shared/store/authStore'
import useBranchesStore from '@/shared/store/branchesStore'
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from 'axios'
import { toast } from 'sonner'
import i18n from '@/shared/utils/translations/i18n'

export const apiGL: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_GESTIOLOOOP_URL as string,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

apiGL.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const selectedBranch = useBranchesStore.getState().selectedBranch

  if (selectedBranch) {
    config.headers['X-Branch-ID'] = selectedBranch.id
  }

  return config
})

apiGL.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean
    }

    if (error.response?.status === HttpStatusCode.Forbidden) {
      toast.error(i18n.t('general.forbidden'), {
        description: i18n.t('general.forbidden-description'),
      })
    }

    if (
      error.response?.status === HttpStatusCode.Unauthorized &&
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
