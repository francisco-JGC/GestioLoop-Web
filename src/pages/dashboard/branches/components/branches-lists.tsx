import useBranchesStore from "@/shared/store/branchesStore"
import { BranchItem } from "./branch-item"
import { CreateBranch } from "./create-branch"


export const BranchesLists = () => {
  const { branches } = useBranchesStore()

  return (
    <div className="w-full flex flex-wrap gap-6">
      <CreateBranch />
      {branches?.map((branch) => (
        <BranchItem branch={branch} key={branch.id} />
      ))}
    </div>
  )
}