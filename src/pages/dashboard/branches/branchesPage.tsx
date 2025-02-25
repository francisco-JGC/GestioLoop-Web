import { DashboardLayout } from "../../layouts/dashboardLayout"
import { BranchesLists } from "./components/branches-lists"

export const BranchesPage = () => {
  return (
    <DashboardLayout>
      <div>

        <BranchesLists />
      </div>
    </DashboardLayout>
  )
}