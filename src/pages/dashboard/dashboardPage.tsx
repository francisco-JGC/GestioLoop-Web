import { DashboardLayout } from "../layouts/dashboardLayout"

const breadcrumb = [{
  label: 'Dashboard',
  path: '/dashboard'
}]

export const DashboardPage = () => {
  return (
    <DashboardLayout breadcrumbList={breadcrumb}>
      <div>
        <h1>Dashboard page</h1>
      </div>
    </DashboardLayout>
  )
}