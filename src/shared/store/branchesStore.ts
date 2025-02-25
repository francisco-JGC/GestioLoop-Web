import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Branch } from '@/infrastructure/api/types/branch'

interface BranchState {
  branches: Branch[]
  selectedBranch: Branch | null
  setBranches: (branches: Branch[]) => void
  setSelectedBranch: (branchId: string) => void
  updateBranch: (branch: Branch) => void
}

const useBranchesStore = create<BranchState>()(
  persist(
    (set) => ({
      branches: [],
      selectedBranch: null,
      setBranches: (branches) => set({ branches, selectedBranch: branches[0] }),
      setSelectedBranch: (branchId) =>
        set((state) => ({
          selectedBranch:
            state.branches.find((branch) => branch.id === branchId) ||
            state.selectedBranch,
        })),
      updateBranch: (updatedBranch) =>
        set((state) => ({
          branches: state.branches.map((branch) =>
            branch.id === updatedBranch.id ? updatedBranch : branch
          ),
        })),
    }),
    {
      name: 'branch-storage',
    }
  )
)

export default useBranchesStore
