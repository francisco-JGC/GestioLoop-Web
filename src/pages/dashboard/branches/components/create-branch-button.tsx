import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { StoreIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CreateBranchButton = () => {
  const { t } = useTranslation()

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="w-md cursor-pointer"
    >
      <Card className="h-[220px] shadow-xl rounded-xl bg-gray-800">
        <CardHeader className="flex flex-col items-center p-4">
          <StoreIcon className="w-8 h-8 text-white" />
          <CardTitle className="text-lg font-semibold text-white text-center">
            {t('general.create-branch')}
          </CardTitle>
        </CardHeader>
        <div className="flex justify-center items-center flex-grow">
          <span className="text-white text-sm">{t('general.click-to-create-a-new-branch')}</span>
        </div>
      </Card>
    </motion.div>
  );
};
