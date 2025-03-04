import { ServiceAdapter } from "@/infrastructure/adapters/services.adapter";
import { Services } from "@/infrastructure/api/types/services";
import { TFunction } from "i18next";
import { BoxIcon, CalendarIcon, MessageCircleIcon, FileTextIcon, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { formatPriceToUSD } from "@/shared/utils/formatters";
import { Button } from "@heroui/button";
import { Link } from "react-router-dom";

interface IProps {
  service: Services;
  t: TFunction;
}

export const GetIconByServiceName = (key: string) => {
  const iconStyle = "w-6 h-6 text-white";

  const icons: Record<string, JSX.Element> = {
    "Inventory Management": (
      <BoxIcon className={`${iconStyle} `} />
    ),
    "Online Reservation Service": (
      <CalendarIcon className={`${iconStyle} `} />
    ),
    "WhatsApp Bot Service": (
      <MessageCircleIcon className={`${iconStyle} `} />
    ),
    "Basic Invoice Generator": (
      <FileTextIcon className={`${iconStyle} `} />
    ),
  };

  return icons[key] || null;
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export const ServicesItem = ({ service, t }: IProps) => {
  if (!service?.name) return null;

  const adapter = new ServiceAdapter(service, t);
  const serviceData = adapter.getTranslatedData();

  return (
    <motion.div
      className="shadow-lg rounded-lg w-full bg-white border border-gray-100 max-w-[350px] h-[456px] flex flex-col justify-between"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="flex flex-col gap-4">
        <header className=" rounded-t-lg text-center bg-linear-to-r from-primary to-primary-solid p-6">
          <div className="text-[16px] flex items-center justify-center gap-3">
            {GetIconByServiceName(serviceData.name)}
            <h3 className="text-white">{serviceData.name}</h3>
          </div>
        </header>

        <div className="w-full text-center flex items-end justify-center gap-1">
          <p className="text-2xl font-bold text-gray-900 mt-3">{formatPriceToUSD(serviceData.price)}</p>
          <span>/m</span>
        </div>

        <div className="border-t border-b py-6 px-6">
          {
            serviceData.features?.length > 0 && (
              serviceData.features.map((featureGroup, index) => (
                <motion.div
                  key={index}
                  className="mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h4 className="text-gray-500 font-medium flex items-center"><ChevronRight className="w-4 mr-1" />{featureGroup.title}</h4>
                </motion.div>
              ))
            )}
        </div>
      </div>
      <div className="py-4 px-6 flex justify-between items-center">
        <Button variant="shadow" className="rounded-full w-2/4 p-6 bg-amber-400 text-white">
          Hire service
        </Button>

        <Link to={''} className="text-gray-400">View details</Link>
      </div>
    </motion.div>
  );
};