import { apiGL } from '../../../core/config/axiosClient'
import { Services } from '../types/services'

export const getServices = async (): Promise<Services[]> => {
  const response = await apiGL.get('/services')
  return response.data
}
