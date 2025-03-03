import { DashboardLayout } from "@/pages/layouts/dashboardLayout"
import { HeaderDashboardPage } from "@/pages/layouts/headerDasboardPage"
import { useTranslation } from "react-i18next"

export const ServicesPage = () => {
  const { t } = useTranslation()

  return (
    <DashboardLayout>
      <div>
        <HeaderDashboardPage
          title={t('services.title-page')}
          description={t('services.description-page')}
        />
      </div>
    </DashboardLayout>
  )
}