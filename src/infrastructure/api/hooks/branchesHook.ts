import { apiGL } from '../../../core/config/axiosClient'
import { Branch } from '../types/branch'

export const getBranches = async (): Promise<Branch[] | null> => {
  const response = await apiGL.get('/branch/branches')
  return response.data
}
