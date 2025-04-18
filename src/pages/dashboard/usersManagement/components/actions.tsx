import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { softDeleteExternalUser } from "@/infrastructure/api/hooks/externalUsersHook"
import { ExternalUser } from "@/infrastructure/api/types/user"
import { SystemAlert } from "@/shared/components/systemAlert"
import useExternalUserStore from "@/shared/store/externalUserStore"
import { HttpStatusCode } from "axios"
import { TFunction } from "i18next"
import { Key, MoreHorizontal, Pencil, Trash, UserCheck, UserMinus } from "lucide-react"
import { toast } from "sonner"

interface IProps {
  t: TFunction
  user: ExternalUser
}

export const Actions = ({ t, user }: IProps) => {
  const { deleteUser } = useExternalUserStore()

  const handleSoftDeleteUser = async () => {
    const response = await softDeleteExternalUser(user.id)

    if (response.statusCode === HttpStatusCode.Ok) {
      toast.success(t('general.request-success'))
      deleteUser(user.id)
      return
    }

    toast.error(t('general.unexpected-error'), {
      description: t('general.unexpected-error-description')
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t('general.actions')}</DropdownMenuLabel>
        <DropdownMenuItem><Pencil /> {t('um.actions.update')}</DropdownMenuItem>
        <DropdownMenuItem><Key /> {t('um.actions.change-password')}</DropdownMenuItem>
        <DropdownMenuItem><UserCheck /> {t('um.actions.change-role')}</DropdownMenuItem>
        <DropdownMenuItem><UserMinus /> {t('um.actions.disable-account')}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={(e) => {
          e.preventDefault()
        }}>
          <SystemAlert title={t('um.actions.delete-title')} description={t('um.actions.delete-description')} onConfirm={handleSoftDeleteUser}>
            <div className="flex items-center gap-2">
              <Trash className="text-red-400" />
              {t('um.actions.delete')}
            </div>
          </SystemAlert>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}