interface FeatureGroup {
  title: string
  items: string[]
}

interface ServiceFeatures {
  [key: string]: FeatureGroup[]
}

export const serviceFeatures: ServiceFeatures = {
  'Inventory Management': [
    {
      title: 'services.Inventory Management.feature_1.title',
      items: [
        'services.Inventory Management.feature_1.items.1',
        'services.Inventory Management.feature_1.items.2',
        'services.Inventory Management.feature_1.items.3',
        'services.Inventory Management.feature_1.items.4',
        'services.Inventory Management.feature_1.items.5',
        'services.Inventory Management.feature_1.items.6',
      ],
    },
    {
      title: 'services.Inventory Management.feature_2.title',
      items: [
        'services.Inventory Management.feature_2.items.1',
        'services.Inventory Management.feature_2.items.2',
        'services.Inventory Management.feature_2.items.3',
        'services.Inventory Management.feature_2.items.4',
        'services.Inventory Management.feature_2.items.5',
        'services.Inventory Management.feature_2.items.6',
      ],
    },
    {
      title: 'services.Inventory Management.feature_3.title',
      items: [
        'services.Inventory Management.feature_3.items.1',
        'services.Inventory Management.feature_3.items.2',
        'services.Inventory Management.feature_3.items.3',
        'services.Inventory Management.feature_3.items.4',
        'services.Inventory Management.feature_3.items.5',
      ],
    },
    {
      title: 'services.Inventory Management.feature_4.title',
      items: [
        'services.Inventory Management.feature_4.items.1',
        'services.Inventory Management.feature_4.items.2',
        'services.Inventory Management.feature_4.items.3',
        'services.Inventory Management.feature_4.items.4',
        'services.Inventory Management.feature_4.items.5',
      ],
    },
    {
      title: 'services.Inventory Management.feature_5.title',
      items: [
        'services.Inventory Management.feature_5.items.1',
        'services.Inventory Management.feature_5.items.2',
        'services.Inventory Management.feature_5.items.3',
      ],
    },
  ],

  'Online Reservation Service': [
    {
      title: 'services.Online Reservation Service.feature_1.title',
      items: [
        'services.Online Reservation Service.feature_1.items.1',
        'services.Online Reservation Service.feature_1.items.2',
      ],
    },
    {
      title: 'services.Online Reservation Service.feature_2.title',
      items: [
        'services.Online Reservation Service.feature_2.items.1',
        'services.Online Reservation Service.feature_2.items.2',
      ],
    },
    {
      title: 'services.Online Reservation Service.feature_3.title',
      items: [
        'services.Online Reservation Service.feature_3.items.1',
        'services.Online Reservation Service.feature_3.items.2',
      ],
    },
  ],

  'WhatsApp Bot Service': [
    {
      title: 'services.WhatsApp Bot Service.feature_1.title',
      items: [
        'services.WhatsApp Bot Service.feature_1.items.1',
        'services.WhatsApp Bot Service.feature_1.items.2',
        'services.WhatsApp Bot Service.feature_1.items.3',
      ],
    },
    {
      title: 'services.WhatsApp Bot Service.feature_2.title',
      items: [
        'services.WhatsApp Bot Service.feature_2.items.1',
        'services.WhatsApp Bot Service.feature_2.items.2',
      ],
    },
    {
      title: 'services.WhatsApp Bot Service.feature_3.title',
      items: [
        'services.WhatsApp Bot Service.feature_3.items.1',
        'services.WhatsApp Bot Service.feature_3.items.2',
      ],
    },
  ],

  'Basic Invoice Generator': [
    {
      title: 'services.Basic Invoice Generator.feature_1.title',
      items: [
        'services.Basic Invoice Generator.feature_1.items.1',
        'services.Basic Invoice Generator.feature_1.items.2',
        'services.Basic Invoice Generator.feature_1.items.3',
        'services.Basic Invoice Generator.feature_1.items.4',
      ],
    },
    {
      title: 'services.Basic Invoice Generator.feature_2.title',
      items: [
        'services.Basic Invoice Generator.feature_2.items.1',
        'services.Basic Invoice Generator.feature_2.items.2',
      ],
    },
    {
      title: 'services.Basic Invoice Generator.feature_3.title',
      items: [
        'services.Basic Invoice Generator.feature_3.items.1',
        'services.Basic Invoice Generator.feature_3.items.2',
      ],
    },
    {
      title: 'services.Basic Invoice Generator.feature_4.title',
      items: ['services.Basic Invoice Generator.feature_4.items.1'],
    },
  ],
}
