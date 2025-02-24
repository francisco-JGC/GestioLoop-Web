import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  login,
  refreshToken,
  logout,
  checkSession,
} from '@/infrastructure/api/hooks/authHook'
import { HttpStatusCode } from 'axios'

export interface User {
  id: string
  email: string
  username: string
  user_role: string
  user_type: string
  tenantId: string | null
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  login: (session_field: string, password: string) => Promise<void>
  refreshToken: () => Promise<void>
  logout: () => Promise<void>
  checkSession: () => Promise<void>
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (session_field, password) => {
        set({ isLoading: true, error: null })

        try {
          const response = await login(session_field, password)

          if (response.statusCode === HttpStatusCode.Ok) {
            set({
              isAuthenticated: true,
              user: response.data,
              error: null,
            })
          } else {
            set({ error: 'Login failed' })
          }
        } catch (error) {
          console.error('Login error:', error)
          set({ error: 'Login failed' })
        } finally {
          set({ isLoading: false })
        }
      },

      refreshToken: async () => {
        set({ error: null })

        try {
          const response = await refreshToken()

          if (response.statusCode !== HttpStatusCode.Ok) {
            set({ isAuthenticated: false, user: null })
          }
        } catch (error) {
          console.error('Token refresh error:', error)
          set({ error: 'Failed to refresh token' })
        }
      },

      logout: async () => {
        set({ error: null })

        try {
          await logout()
          set({ user: null, isAuthenticated: false, error: null })
        } catch (error) {
          console.error('Logout error:', error)
          set({ error: 'Logout failed' })
        }
      },

      checkSession: async () => {
        set({ error: null })

        try {
          const response = await checkSession()

          if (response.statusCode !== HttpStatusCode.Ok) {
            set({ isAuthenticated: false, user: null })
            throw new Error('Session check failed')
          } else {
            set({
              user: response?.data?.user,
              isAuthenticated: true,
              error: null,
            })
          }
        } catch (error) {
          console.error('Session check error:', error)
          set({
            user: null,
            isAuthenticated: false,
            error: 'Session check failed',
          })
        }
      },
    }),
    {
      name: 'auth-store',
    }
  )
)

export default useAuthStore
