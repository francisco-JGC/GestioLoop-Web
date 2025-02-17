import 'boxicons/css/boxicons.min.css';
import { useTranslation } from "react-i18next";
import { Button } from '@/components/ui/button';

export const Page404 = () => {
  const { t } = useTranslation()

  return (
    <section>
      <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div className="w-full ">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <p className="text-sm font-medium text-blue-500">{t('page_404.title')}</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800">{t('page_404.subject')}</h1>
            <p className="mt-4 text-gray-500">{t('page_404.description')}</p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <Button
                variant="secondary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>{t('page_404.buttons.back')}</span>
              </Button>

              <Button
              >
                <span>{t('page_404.buttons.take_me_home')}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}