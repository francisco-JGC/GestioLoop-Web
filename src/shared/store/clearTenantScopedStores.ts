import useBranchesStore from '@/shared/store/branchesStore'
import useExternalUserStore from '@/shared/store/externalUserStore'
import useServicesStore from '@/shared/store/servicesStore'

export function clearTenantScopedStores() {
  useBranchesStore.getState().reset()
  useExternalUserStore.getState().clearUsers()
  useServicesStore.getState().setServices([])
}
