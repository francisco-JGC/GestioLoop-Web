import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../../pages/home/HomePage'
import { Page404 } from '../../pages/error404/404'
import { SigninPage } from '@/pages/login/signIn/SignInPage'
import { RegisterPage } from '@/pages/login/register/RegisterPage'
import { DashboardPage } from '@/pages/dashboard/dashboardPage'
import { BranchesPage } from '@/pages/dashboard/branches/branchesPage'
import AuthGuard from '@/pages/dashboard/auth-guard'
import { UsersManagementPage } from '@/pages/dashboard/usersManagement/usersManagementPage'
import { ServicesPage } from '@/pages/dashboard/services/servicesPage'

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
    element: <AuthGuard />,
    children: [
      {
        path: '',
        element: <DashboardPage />
      },
      {
        path: 'branches',
        element: <BranchesPage />
      },
      {
        path: 'users-management',
        element: <UsersManagementPage />
      },
      {
        path: 'services',
        element: <ServicesPage />
      }
    ]
  },
  {
    path: '*',
    element: <Page404 />
  }
])

export default AppRouter
