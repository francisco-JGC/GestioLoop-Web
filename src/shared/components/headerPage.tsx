import { Button } from "@/components/ui/button"
import { PAGE_LINKS } from "@/core/routes/pageLinks"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, NavLink } from "react-router-dom"

export const HeaderPage = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHidden, setIsHidden] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY])

  return (
    <header className={`flex justify-between items-center py-4 px-6 md:px-12 w-full bg-white fixed top-0 left-0 z-50 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="text-xl font-bold">
        <NavLink to="/" onClick={closeMenu}>
          GestioLoop.
        </NavLink>
      </div>

      <button
        className="text-2xl md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
      </button>

      <nav
        className={`fixed top-0 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out transform 
    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
    md:hidden overflow-y-auto`}
      >
        <button
          className="absolute top-4 right-4 text-3xl text-gray-600 md:hidden"
          onClick={closeMenu}
        >
          <i className='bx bx-x'></i>
        </button>

        <ul className="flex flex-col items-center gap-8 p-6 mt-20">
          {
            PAGE_LINKS.map((item, index) => (
              <li
                className="relative cursor-pointer font-semibold text-lg hover:text-blue-600 transition-colors duration-200"
                key={index}
                onClick={closeMenu}
              >
                <NavLink to={`#${item.path}`}>
                  <span>{t(item.label)}</span>
                </NavLink>
              </li>
            ))
          }
        </ul>

        <div className="flex flex-col items-center gap-4 p-6">
          <Link to={'/sign-in'} onClick={closeMenu}>
            <Button className="rounded-full">
              {t('home_page.header.login')}
            </Button>
          </Link>
          <Link to={'/register'} onClick={closeMenu}>
            <Button variant={'secondary'} className="rounded-full">
              {t('home_page.header.register')}
            </Button>
          </Link>
        </div>
      </nav>


      <nav className="hidden md:flex md:items-center md:gap-8">
        <ul className="flex items-center gap-8">
          {
            PAGE_LINKS.map((item, index) => (
              <li
                className="relative cursor-pointer font-semibold text-lg hover:text-primary transition-colors duration-200"
                key={index}
              >
                <NavLink to={`#${item.path}`}>
                  <span>{t(item.label)}</span>
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>

      <div className="hidden md:flex md:items-center md:gap-4">
        <Link to={'/sign-in'}>
          <Button className="rounded-full">
            {t('home_page.header.login')}
          </Button>
        </Link>
        <Link to={'/register'}>
          <Button variant={'secondary'} className="rounded-full">
            {t('home_page.header.register')}
          </Button>
        </Link>
      </div>
    </header>
  )
}