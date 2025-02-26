import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ExternalUser } from '@/infrastructure/api/types/user'

interface ExternalUserState {
  users: ExternalUser[]
  page: number
  hasMore: boolean
  setUsers: (users: ExternalUser[], page: number, hasMore: boolean) => void
  setUser: (user: ExternalUser) => void
  updateUser: (user: Partial<ExternalUser> & { id: string }) => void
  clearUsers: () => void
}

const externalUserStore = create<ExternalUserState>()(
  persist(
    (set) => ({
      users: [],
      page: 1,
      hasMore: true,

      setUsers: (newUsers, page, hasMore) => {
        set((state) => ({
          users: [
            ...state.users.filter(
              (existingUser) =>
                !newUsers.some((newUser) => newUser.id === existingUser.id)
            ),
            ...newUsers,
          ],
          page,
          hasMore,
        }))
      },

      setUser: (user) => {
        set((state) => {
          const existingUser = state.users.find((u) => u.id === user.id)
          if (
            existingUser &&
            JSON.stringify(existingUser) === JSON.stringify(user)
          ) {
            return state
          }
          return {
            users: existingUser
              ? state.users.map((u) => (u.id === user.id ? user : u))
              : [...state.users, user],
          }
        })
      },

      updateUser: (user) => {
        set((state) => ({
          users: state.users.map((u) =>
            u.id === user.id ? { ...u, ...user } : u
          ),
        }))
      },

      clearUsers: () => {
        set({ users: [], page: 1, hasMore: true })
      },
    }),
    { name: 'external-users-storage' }
  )
)

export default externalUserStore
