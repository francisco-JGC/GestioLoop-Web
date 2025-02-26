import { apiGL } from '../../../core/config/axiosClient'
import { HttpResponse } from '../types/httpResponse'

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
