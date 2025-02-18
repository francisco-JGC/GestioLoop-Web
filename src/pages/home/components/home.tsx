import { useTranslation } from "react-i18next"

export const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="relative w-full flex justify-center mt-20">
      <div className="w-[50%] text-center flex flex-col gap-4">
        <span className="font-semibold">{t('home_page.home.subtitle')}</span>
        <h1 className="font-bold text-5xl">{t('home_page.home.title')}</h1>
        <p className="">{t('home_page.home.description')}</p>
      </div>

    </div>
  )
}