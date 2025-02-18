import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

interface IProps {
  show_button: 'login' | 'register'
}

export const HeaderLogin = ({ show_button }: IProps) => {
  const { t } = useTranslation()

  return (
    <header className='flex justify-between items-center py-4 px-6 md:px-12 w-full bg-white fixed top-0 left-0 z-50 transition-transform duration-300'>
      <div className="text-xl font-bold">
        <NavLink to="/">
          GestioLoop.
        </NavLink>
      </div>

      <div className="hidden md:flex md:items-center md:gap-4">
        {
          show_button === 'login' ? (
            <NavLink to={'/sign-in'}>
              <Button className="rounded-full" variant={'secondary'}>
                {t('home_page.header.login')}
              </Button>
            </NavLink>
          ) : (
            <NavLink to={'/register'}>
              <Button className="rounded-full" variant={'secondary'}>
                {t('home_page.header.register')}
              </Button>
            </NavLink>
          )
        }
      </div>
    </header>
  )
}