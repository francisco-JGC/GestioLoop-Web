import { create } from 'zustand'
import { Branch } from '@/infrastructure/api/types/branch'

interface BranchState {
  branches: Branch[]
  selectedBranch: Branch | null
  reset: () => void
  setBranches: (branches: Branch[]) => void
  setSelectedBranch: (branchId: string) => void
  updateBranch: (branch: Branch) => void
}

const useBranchesStore = create<BranchState>()((set) => ({
  branches: [],
  selectedBranch: null,
  reset: () => set({ branches: [], selectedBranch: null }),
  setBranches: (branches) =>
    set({ branches, selectedBranch: branches[0] ?? null }),
  setSelectedBranch: (branchId) =>
    set((state) => ({
      selectedBranch:
        state.branches.find((branch) => branch.id === branchId) ||
        state.selectedBranch,
    })),
  updateBranch: (updatedBranch) =>
    set((state) => ({
      branches: state.branches.map((branch) =>
        branch.id === updatedBranch.id ? updatedBranch : branch,
      ),
    })),
}))

export default useBranchesStore
