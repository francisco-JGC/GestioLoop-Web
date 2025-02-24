import { Branch } from "@/infrastructure/api/types/branch"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon, Settings, StoreIcon } from "lucide-react"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface IProps {
  branch: Branch
}

export const BranchItem = ({ branch }: IProps) => {
  const { t } = useTranslation()

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="w-full max-w-md"
    >
      <Card className="h-[220px] shadow-md rounded-xl">
        <CardHeader className="flex flex-col items-center">
          <StoreIcon className="w-8 h-8 text-primary" />
          <CardTitle className="text-lg font-semibold text-center">
            {branch.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground h-full space-y-2 flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4 text-gray-500" />
            <span>{branch.address}</span>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-gray-500" />
              <span>{t('general.created')}: {new Date(branch.created_at).toLocaleDateString()}</span>
            </div>
            <motion.div
              whileHover={{ rotate: 90, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Popover>
                <PopoverTrigger>
                  <Settings className="w-6 h-6 cursor-pointer text-gray-600" />
                </PopoverTrigger>
                <PopoverContent></PopoverContent>
              </Popover>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}