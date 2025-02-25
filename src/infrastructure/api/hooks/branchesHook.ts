import { apiGL } from '../../../core/config/axiosClient'
import { Branch } from '../types/branch'
import { HttpResponse } from '../types/httpResponse'

export const getBranches = async (): Promise<Branch[] | null> => {
  const response = await apiGL.get('/branch/branches')
  return response.data
}

export const configureBranch = async (
  branch: Branch
): Promise<HttpResponse> => {
  const response = await apiGL.post('/branch/configure-branch', branch)
  return response.data
}
