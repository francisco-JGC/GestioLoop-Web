import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './core/config/appRouter'
import MainLayout from './shared/components/mainLayout'
import { I18nextProvider } from 'react-i18next'
import i18n from './shared/utils/translations/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <MainLayout>
        <RouterProvider router={AppRouter} />
      </MainLayout>
    </I18nextProvider>
  </StrictMode>,
)
