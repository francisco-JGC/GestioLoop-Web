import { apiGL } from '../../../core/config/axiosClient'
import { HttpResponse } from '../types/httpResponse'
import { Services } from '../types/services'

export const getServices = async (): Promise<Services[]> => {
  const response = await apiGL.get('/services')
  return response.data
}

export const hireServiceById = async (
  serviceId: string
): Promise<HttpResponse> => {
  const response = await apiGL.post('/services/hire', {
    serviceId,
  })

  return response.data
}
