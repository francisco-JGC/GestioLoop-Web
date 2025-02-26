import { HeaderDashboardPage } from "@/pages/layouts/headerDasboardPage"
import { DashboardLayout } from "../../layouts/dashboardLayout"
import { useTranslation } from "react-i18next"

export const UsersManagementPage = () => {
  const { t } = useTranslation()

  return (
    <DashboardLayout>
      <div>
        <HeaderDashboardPage title={t('um.title-page')} description={t('um.description-page')} />
      </div>
    </DashboardLayout>
  )
}