import { useLocation } from 'react-router-dom'

export interface IBreadcrumb {
  label: string
  path: string
}

export const useBreadcrumbs = (): IBreadcrumb[] => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return [
    ...pathnames.map((_, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`
      return { label: pathnames[index], path }
    }),
  ]
}
