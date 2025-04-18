import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { TFunction } from "i18next"
import { Key, MoreHorizontal, Pencil, Trash, UserCheck, UserMinus } from "lucide-react"

interface IProps {
  t: TFunction
}

export const Actions = ({ t }: IProps) => {
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
        <DropdownMenuItem>
          <Trash className="text-red-400" />
          {t('um.actions.delete')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}