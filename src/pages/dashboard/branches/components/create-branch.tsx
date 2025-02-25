import { CreateBranchButton } from "./create-branch-button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CreateBranchForm } from "./create-branch-form"
import { useTranslation } from "react-i18next"

export const CreateBranch = () => {
  const { t } = useTranslation()

  return (
    <Dialog>
      <DialogTrigger>
        <CreateBranchButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('general.create-branch')}</DialogTitle>
          <DialogDescription>
            {t('general.create-branch-description')}
          </DialogDescription>
        </DialogHeader>
        <CreateBranchForm />
      </DialogContent>
    </Dialog>
  )
}