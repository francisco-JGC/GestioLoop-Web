import { Input } from "@/components/ui/input"
import { Button } from "@heroui/button"
import { Search, Plus } from "lucide-react"
import useExternalUserStore from "@/shared/store/externalUserStore"
import { TFunction } from "i18next"

interface IProps {
  t: TFunction
}

export const HeaderList = ({ t }: IProps) => {
  const { total_users } = useExternalUserStore()

  return (
    <div className="flex items-center justify-between">
      <div>
        <span className="text-lg font-semibold text-gray-800">
          {t('um.all-users')}: <span className="text-gray-500">{total_users}</span>
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center">
          <Search className="absolute ml-4 w-5 h-5 text-gray-400" />
          <Input className="rounded-full shadow-none px-12" placeholder={t('um.search-placeholder-user')} />
        </div>
        <div>
          <Button variant="shadow" className="bg-primary text-white rounded-full">
            <Plus className="w-5 h-5" />
            {t('um.create-user')}
          </Button>
        </div>
      </div>
    </div>
  )
}