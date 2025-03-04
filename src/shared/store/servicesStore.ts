import { getServices } from '@/infrastructure/api/hooks/servicesHook'
import { Services } from '@/infrastructure/api/types/services'
import { create } from 'zustand'

interface ServicesState {
  services: Services[]
  setServices: (services: Services[]) => void
  isLoading: boolean
  loadServices: () => Promise<void>
}

const useServicesStore = create<ServicesState>((set) => ({
  services: [],
  isLoading: false,
  setServices: (services) => set({ services }),
  loadServices: async () => {
    set({ isLoading: true })

    try {
      const response = await getServices()
      console.log({ response })
      set({ services: response })
    } catch (error) {
      console.error('Error loading services:', error)
    } finally {
      set({ isLoading: false })
    }
  },
}))

export default useServicesStore
