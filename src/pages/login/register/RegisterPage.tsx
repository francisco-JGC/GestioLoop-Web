import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import { Image } from '@unpic/react'
import { HeaderLogin } from "@/shared/components/headerLogin"

export const RegisterPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <HeaderLogin show_button="login" />

      <div className="flex w-full h-screen justify-center items-center max-w-[1300px]">
        <div className="flex items-center justify-center gap-10 w-full">
          <div className="w-full flex flex-col gap-10 max-w-[400px]">
            <div>
              <span className="text-lg">{t('signin_page.title')}</span>
            </div>
            <form className="flex flex-col gap-6"
              autoComplete="off"
            >
              <Input
                placeholder={t('signin_page.placeholder-username')}
                type="text"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                name="username"
              />
              <Input
                placeholder={t('signin_page.placeholder-email')}
                type="email"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                name="email"
              />
              <Input
                placeholder={t('signin_page.placeholder-password')}
                type="password"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                name="password"
              />
              <Input
                placeholder={t('signin_page.placeholder-phone_number')}
                type="text"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                name="phone_number"
              />
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-400">{t('signin_page.comment')}</span>
                <Button className="rounded-full p-6">
                  {t('signin_page.register')}
                </Button>
              </div>
            </form>
          </div>
          <div className="w-full max-w-[400px]">
            <Image src="" width={400} height={400} className="w-[400px] h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  )
}