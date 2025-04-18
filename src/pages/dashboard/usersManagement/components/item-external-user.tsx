import { TableCell, TableRow } from "@/components/ui/table"
import { ExternalUser } from "@/infrastructure/api/types/user"
import { Actions } from "./actions"
import { RenderAvatar } from "@/shared/components/renderAvatar"
import { formatUserRole } from "@/shared/utils/formatters"
import { TFunction } from "i18next"

interface IProps {
  user: ExternalUser
  t: TFunction
}

export const ItemExternalUser = ({ user, t }: IProps) => {
  return (
    <TableRow key={user.id} className="p-10">
      <TableCell>
        <RenderAvatar
          image_url={user.image_url}
          chart={user.real_name.charAt(0)}
          size={10}
        />
      </TableCell>
      <TableCell>{user.real_name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.phone_number}</TableCell>
      <TableCell>{user.branch?.name || "N/A"}</TableCell>
      <TableCell>{formatUserRole(user.user_role)}</TableCell>
      <TableCell>
        <Actions t={t} />
      </TableCell>
    </TableRow>
  )
}