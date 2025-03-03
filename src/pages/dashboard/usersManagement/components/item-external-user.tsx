import { TableCell, TableRow } from "@/components/ui/table"
import { ExternalUser } from "@/infrastructure/api/types/user"
import { Actions } from "./actions"
import { RenderAvatar } from "@/shared/components/renderAvatar"

interface IProps {
  user: ExternalUser
}

export const ItemExternalUser = ({ user }: IProps) => {
  return (
    <TableRow key={user.id} className="p-10">
      <TableCell>
        <RenderAvatar
          image_url={user.image_url}
          chart={user.real_name.charAt(0)}
        />
      </TableCell>
      <TableCell>{user.real_name}</TableCell>
      {/* <TableCell>{user.username}</TableCell> */}
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.phone_number}</TableCell>
      <TableCell>{user.branch?.name || "N/A"}</TableCell>
      <TableCell>{user.user_role}</TableCell>
      <TableCell>
        <Actions />
      </TableCell>
    </TableRow>
  )
}