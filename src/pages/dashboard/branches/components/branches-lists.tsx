import useBranchesStore from "@/shared/store/branchesStore"
import { BranchItem } from "./branch-item"

export const BranchesLists = () => {
  const { branches } = useBranchesStore()

  return (
    <div className="w-full flex flex-wrap gap-6">
      {branches?.map((branch) => (
        <BranchItem branch={branch} key={branch.id} />
      ))}
    </div>
  )
}