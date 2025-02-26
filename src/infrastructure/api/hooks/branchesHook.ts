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

export const updateBranch = async (branch: Branch): Promise<HttpResponse> => {
  const response = await apiGL.put('/branch/update-branch', branch)
  return response.data
}

export const updateStatusBranch = async (id: string): Promise<HttpResponse> => {
  const response = await apiGL.patch(`/branch/${id}/status`)
  return response.data
}
