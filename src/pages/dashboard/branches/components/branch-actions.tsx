import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Branch } from "@/infrastructure/api/types/branch"
import { Pencil, Sparkles, Trash2, UsersRound } from "lucide-react"
import { useTranslation } from "react-i18next"
import { UpdateBranchForm } from "./update-branch-form"
import { UpdateStatusBranch } from "./update-status-branch"

interface IProps {
  branch: Branch
}

export const BranchActions = ({ branch }: IProps) => {
  const { t } = useTranslation()

  return (
    <DropdownMenuContent
      className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
      align="end"
      sideOffset={4}
    >
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Sparkles />
          {t('general.hire-service')}
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>

        <DropdownMenuItem>
          <UsersRound />
          {t('general.manage-users')}
        </DropdownMenuItem>

        <Dialog>
          <DialogTrigger className="w-full">
            <div className=
              "hover:bg-gray-100 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
              <Pencil />
              {t('general.update')}
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t('general.update-branch')}</DialogTitle>
              <DialogDescription>
                {t('general.update-branch-description')}
              </DialogDescription>
            </DialogHeader>
            <UpdateBranchForm branch={branch} />
          </DialogContent>
        </Dialog>

        <UpdateStatusBranch
          branch={branch}
          className="hover:bg-gray-100 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
        />
        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-red-500 ">
          <Trash2 className="text-red-500" />
          {t('general.delete')}
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent >
  )
}