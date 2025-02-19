/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand'
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

const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('userGL') || 'null'),
  isAuthenticated: !!localStorage.getItem('userGL'),
  isLoading: false,
  error: null,

  login: async (session_field, password) => {
    set({ isLoading: true, error: null })

    try {
      const response = await login(session_field, password)

      if (response.statusCode === HttpStatusCode.Ok) {
        localStorage.setItem('userGL', JSON.stringify(response.data))
        set({ isAuthenticated: true, user: response.data, error: null })
      } else {
        set({
          error: 'Login failed',
        })
      }
    } catch (e) {
      set({
        error: 'Login failed',
      })
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
    } catch (e) {
      set({ error: 'Failed to refresh token' })
    }
  },

  logout: async () => {
    set({ error: null })

    try {
      await logout()
      localStorage.removeItem('userGL')
      set({ user: null, isAuthenticated: false, error: null })
    } catch (error) {
      set({ error: 'bad request' })
      throw error
    }
  },

  checkSession: async () => {
    set({ error: null })

    try {
      const user = JSON.parse(localStorage.getItem('userGL') || 'null')
      if (!user) {
        set({ isAuthenticated: false, user: null })
        return
      }

      const response = await checkSession()

      if (response.statusCode !== HttpStatusCode.Ok) {
        set({ isAuthenticated: false, user: null })
        throw new Error('Session check failed')
      } else {
        set({ user: response?.data?.user, isAuthenticated: true, error: null })
      }
    } catch (e) {
      set({ user: null, isAuthenticated: false, error: 'Session check failed' })
      throw e
    }
  },
}))

export default useAuthStore
