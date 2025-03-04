/* eslint-disable react-hooks/exhaustive-deps */
import useServicesStore from "@/shared/store/servicesStore"
import { TFunction } from "i18next"
import { useEffect } from "react"
import { ServicesItem } from "./services-item"

interface IProps {
  t: TFunction
}

export const ServicesList = ({ t }: IProps) => {
  const { services, loadServices, isLoading } = useServicesStore()

  useEffect(() => {
    loadServices()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-10">
      {isLoading ? (
        <p>Cargando servicios...</p>
      ) : (
        services.map((service) => (
          <ServicesItem key={service.id} service={service} t={t} />
        ))
      )}
    </div>
  )
}