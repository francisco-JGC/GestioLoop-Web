import { TFunction } from 'i18next'
import { Services } from '../api/types/services'
import { serviceFeatures } from './servicesFeature'

export class ServiceAdapter {
  private service: Services
  private t: TFunction

  constructor(service: Services, t: TFunction) {
    this.service = service
    this.t = t
  }

  getTranslatedData() {
    const tkey = `services.${this.service.name}`

    if (!serviceFeatures[this.service.name]) {
      console.warn(`No features found for service: ${this.service.name}`)
    }

    const features =
      serviceFeatures[this.service.name]?.map((featureGroup) => ({
        title: this.t(featureGroup.title),
        items: featureGroup.items.map((item: string) => this.t(item)),
      })) || []

    return {
      name: this.t(`${tkey}.name`),
      description: this.t(`${tkey}.description`),
      price: this.service.price,
      is_active: this.service.is_active,
      features,
    }
  }
}
