import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './core/routes/appRouter'
import MainLayout from './shared/components/mainLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainLayout>
      <RouterProvider router={AppRouter} />
    </MainLayout>
  </StrictMode>,
)
