import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"

export const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-20 gap-8 px-4">
      <div className="w-full text-center flex flex-col gap-4 md:w-[75%] lg:w-[50%]">
        <span className="font-semibold text-lg">{t('home_page.home.subtitle')}</span>
        <h1 className="font-bold text-4xl md:text-5xl">{t('home_page.home.title')}</h1>
        <p className="text-base md:text-lg">{t('home_page.home.description')}</p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-[450px] md:flex-row md:justify-center">
        <Input
          className="rounded-full p-4 w-full shadow-none"
          placeholder={t('home_page.home.input-placeholder')}
        />
        <Button className="p-4 rounded-full flex items-center justify-center">
          {t('home_page.home.action-button')}
          <i className='bx bx-right-arrow-alt text-xl'></i>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:flex md:gap-8">
        {
          [...Array(4).keys()].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <i className='bx bxs-badge-check text-green-500 text-xl'></i>
              <span className="text-sm md:text-base">{t(`home_page.home.item${i + 1}`)}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
