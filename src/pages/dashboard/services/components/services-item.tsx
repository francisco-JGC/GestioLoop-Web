import { ServiceAdapter } from "@/infrastructure/adapters/services.adapter";
import { Services } from "@/infrastructure/api/types/services";
import { TFunction } from "i18next";
import { BoxIcon, CalendarIcon, MessageCircleIcon, FileTextIcon } from "lucide-react";


interface IProps {
  service: Services;
  t: TFunction;
}

export const GetIconByServiceName = (key: string) => {
  const iconStyle = "w-6 h-6";

  const icons: Record<string, JSX.Element> = {
    "Inventory Management": (
      <BoxIcon className={`${iconStyle} text-blue-500`} />
    ),
    "Online Reservation Service": (
      <CalendarIcon className={`${iconStyle} text-yellow-600`} />
    ),
    "WhatsApp Bot Service": (
      <MessageCircleIcon className={`${iconStyle} text-emerald-500`} />
    ),
    "Basic Invoice Generator": (
      <FileTextIcon className={`${iconStyle} text-gray-600`} />
    ),
  };

  return icons[key] || null;
};


export const ServicesItem = ({ service, t }: IProps) => {
  if (!service?.name) return null;

  const adapter = new ServiceAdapter(service, t);
  const serviceData = adapter.getTranslatedData();

  return (
    <div className="shadow p-4 rounded-md w-full">
      <header className="text-center">
        <div className="font-semibold text-[16px] flex items-center justify-center gap-3">
          {GetIconByServiceName(service.name)}
          <h3>{serviceData.name}</h3>
        </div>
        <p className="text-gray-600 mt-2">{serviceData.description}</p>
        <p className="text-lg font-bold text-gray-800 mt-2">${serviceData.price}</p>
        <span className={`text-sm font-medium ${serviceData.is_active ? 'text-green-500' : 'text-red-500'}`}>
          {serviceData.is_active ? t("active") : t("inactive")}
        </span>
      </header>

      {serviceData.features?.length > 0 && (
        <div className="mt-4">
          {serviceData.features.map((featureGroup, index) => (
            <div key={index}>
              <h4 className="font-semibold text-gray-800">{featureGroup.title}</h4>
              <ul className="list-disc list-inside text-gray-600">
                {featureGroup.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};