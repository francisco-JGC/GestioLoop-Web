import { updateStatusBranch } from "@/infrastructure/api/hooks/branchesHook"
import { Branch } from "@/infrastructure/api/types/branch"
import { SystemAlert } from "@/shared/components/systemAlert"
import useBranchesStore from "@/shared/store/branchesStore"
import { HttpStatusCode } from "axios"
import { Ban, Store } from "lucide-react"
import { useTranslation } from "react-i18next"
import { toast } from "sonner"

interface IProps {
  branch: Branch
  className: string
}

export const UpdateStatusBranch = ({ branch, className }: IProps) => {
  const { t } = useTranslation()
  const { updateBranch } = useBranchesStore()

  const onConfirm = async () => {
    toast.loading(t('general.loading-toast'))

    const response = await updateStatusBranch(branch.id)
    toast.dismiss()

    if (response.statusCode === HttpStatusCode.Ok) {
      toast.success(t('general.request-success'))
      updateBranch({ ...branch, status: !branch.status })
    } else {
      toast.error(t('general.request-error'), {
        description: t('general.' + toast.message)
      })
    }
  }

  return (
    <SystemAlert
      title={branch.status ? t('branches.disable-branch-title') : t('branches.enable-branch-title')}
      description={branch.status ? t('branches.disable-branch-description') : t('branches.enable-branch-description')}
      onConfirm={onConfirm}
    >
      <div className={`${className && className}`}>
        {
          branch.status ?
            <>
              <Ban />
              {t('branches.disable-branch')}
            </>
            :
            <>
              <Store />
              {t('branches.enable-branch')}
            </>
        }
      </div>
    </SystemAlert>
  )
}