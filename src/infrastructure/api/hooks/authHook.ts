import { apiGL } from '../axiosClient'
import { HttpResponse } from '../types/httpResponse'

export const login = async (
  session_field: string,
  password: string
): Promise<HttpResponse> => {
  const response = await apiGL.post('/auth/login', { session_field, password })
  return response.data
}

export const refreshToken = async (): Promise<HttpResponse> => {
  const response = await apiGL.post('/auth/refresh-token')
  return response.data
}

export const checkSession = async (): Promise<HttpResponse> => {
  const response = await apiGL.post('/auth/check-session')
  return response.data
}

export const logout = async (): Promise<void> => {
  await apiGL.post('/auth/logout')
}
