import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../../pages/home/HomePage'
import { Page404 } from '../../pages/error404/404'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <Page404 />
  }
])

export default AppRouter
