import { HeaderDashboardPage } from "@/pages/layouts/headerDasboardPage";
import useBranchesStore from "@/shared/store/branchesStore";
import { Briefcase, CheckCircle, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export const BranchesHeader = () => {
  const { branches } = useBranchesStore();
  const { t } = useTranslation()
  const totalBranches = branches.length;

  return (
    <HeaderDashboardPage title={t('branches.title-page')} description={t('branches.description-page')}>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-gray-100">
          <Briefcase size={28} className="text-emerald-500 mb-2" />
          <p className="text-2xl font-bold text-gray-800">{totalBranches}</p>
          <p className="text-sm text-gray-500">{t('branches.total-branches')}</p>
        </div>

        <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-gray-100">
          <CheckCircle size={28} className="text-blue-500 mb-2" />
          <p className="text-2xl font-bold text-gray-800">{totalBranches}</p>
          <p className="text-sm text-gray-500">{t('branches.active-branches')}</p>
        </div>

        <div className="flex flex-col items-center justify-center p-5 rounded-xl bg-gray-100">
          <XCircle size={28} className="text-red-400 mb-2" />
          <p className="text-2xl font-bold text-gray-800">{totalBranches}</p>
          <p className="text-sm text-gray-500">{t('branches.inactive-branches')}</p>
        </div>
      </div>
    </HeaderDashboardPage>
  );
};
