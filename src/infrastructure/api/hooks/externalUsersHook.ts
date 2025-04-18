import { apiGL } from '../../../core/config/axiosClient'
import { HttpResponse } from '../types/httpResponse'
import { ExternalUser } from '../types/user'

export const getPaginatedUsers = async (
  page: number,
  limit: number = 10
): Promise<HttpResponse> => {
  const response = await apiGL.get('/external-users/', {
    params: {
      page,
      limit,
    },
  })
  return response.data
}

export const createExternalUser = async (
  user: ExternalUser
): Promise<HttpResponse> => {
  const response = await apiGL.post('/external-users/create', user)
  return response.data
}

export const softDeleteExternalUser = async (
  id: string
): Promise<HttpResponse> => {
  const response = await apiGL.post('/external-users/soft-delete-user', {
    userId: id,
  })

  return response.data
}
