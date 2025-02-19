import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../../pages/home/HomePage'
import { Page404 } from '../../pages/error404/404'
import { SigninPage } from '@/pages/login/signIn/SignInPage'
import { RegisterPage } from '@/pages/login/register/RegisterPage'
import { DashboardPage } from '@/pages/dashboard/dashboardPage'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'sign-in',
    element: <SigninPage />
  },
  {
    path: 'register',
    element: <RegisterPage />
  },
  {
    path: 'dashboard',
    element: <DashboardPage />
  },
  {
    path: '*',
    element: <Page404 />
  }
])

export default AppRouter
