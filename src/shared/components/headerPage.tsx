import { Button } from "@/components/ui/button"
import { PAGE_LINKS } from "@/core/routes/pageLinks"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

export const HeaderPage = () => {
  const { t } = useTranslation()

  return (
    <header className="flex justify-between items-center gap-8 py-6 px-15">
      <div>
        <h3 className="font-bold text-xl">GestioLoop.</h3>
      </div>
      <nav>
        <ul className="flex items-center gap-8">
          {
            PAGE_LINKS.map((item, index) => (
              <li className="relative cursor-pointer py-2 px-4 font-semibold" key={index}>
                <NavLink
                  to={`#${item.path}`}
                >
                  <span>{t(item.label)}</span>
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <Button>
          {t('home_page.header.login')}
        </Button>
        <Button variant={'secondary'}>
          {t('home_page.header.register')}
        </Button>
      </div>
    </header>
  )
}