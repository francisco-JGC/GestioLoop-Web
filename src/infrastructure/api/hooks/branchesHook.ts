import { apiGL } from '../axiosClient'
import { HttpResponse } from '../types/httpResponse'

export const getBranches = async (): Promise<HttpResponse> => {
  const response = await apiGL.get('/branch/branches')
  return response.data
}
