import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import TranslationES from './locales/es/translations.json'
import TranslationEN from './locales/en/translations.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: TranslationEN,
    },
    es: {
      translation: TranslationES,
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
