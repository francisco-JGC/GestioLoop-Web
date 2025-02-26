/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import externalUserStore from "@/shared/store/externalUserStore"
import { getPaginatedUsers } from "@/infrastructure/api/hooks/externalUsersHook"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HeaderList } from "./header-list"
import { ItemExternalUser } from "./item-external-user"
import { TFunction } from "i18next"

interface IProps {
  t: TFunction
}

export const ListExternalUsers = ({ t }: IProps) => {
  const { users, page, hasMore, setUsers } = externalUserStore()
  const { ref, inView } = useInView()
  const [isFetching, setIsFetching] = useState(false)
  const firstLoad = useRef(true)

  useEffect(() => {
    if (firstLoad.current && users.length === 0) {
      firstLoad.current = false
      fetchUsers()
    }
  }, [])

  useEffect(() => {
    if (!firstLoad.current && inView && hasMore && !isFetching) {
      fetchUsers()
    }
  }, [inView, hasMore])

  const fetchUsers = async () => {
    if (isFetching) return

    setIsFetching(true)
    try {
      const response = await getPaginatedUsers(page, 10)
      const { external_users, current_page, total_pages } = response.data

      setUsers([...users, ...external_users], current_page + 1, current_page < total_pages)
    } catch (error) {
      console.error("Error fetching users:", error)
    } finally {
      setIsFetching(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <HeaderList />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>{t('general.username')}</TableHead>
            <TableHead>{t('general.email')}</TableHead>
            <TableHead>{t('general.phone_number')}</TableHead>
            <TableHead>{t('general.branch')}</TableHead>
            <TableHead>{t('general.branch')}</TableHead>
            <TableHead>{t('general.actions')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <ItemExternalUser user={user} key={user.id} />
          ))}
          {hasMore && <div ref={ref} style={{ textAlign: "center", padding: "10px" }}>{t('general.loading-toast')}</div>}
        </TableBody>
      </Table>
    </div>
  )
}
