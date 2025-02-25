import { DashboardLayout } from "../../layouts/dashboardLayout"
import { BranchesHeader } from "./components/branch-header"
import { BranchesLists } from "./components/branches-lists"

export const BranchesPage = () => {
  return (
    <DashboardLayout>
      <div>
        <BranchesHeader />
        <BranchesLists />
      </div>
    </DashboardLayout>
  )
}