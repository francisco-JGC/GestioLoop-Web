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

      <div className="flex w-full mt-30 justify-center items-center p-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <div className="w-full flex flex-col gap-6 max-w-[400px]">
            <div>
              <span className="text-2xl font-semibold">{t('login.title')}</span>
            </div>
            <form className="flex flex-col gap-6" autoComplete="off">
              <Input
                placeholder={t('login.placeholder-username')}
                type="text"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                name="username"
              />
              <Input
                placeholder={t('login.placeholder-email')}
                type="email"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                name="email"
              />
              <Input
                placeholder={t('login.placeholder-password')}
                type="password"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                name="password"
              />
              <Input
                placeholder={t('login.placeholder-phone_number')}
                type="text"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                name="phone_number"
              />
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-lg text-gray-400">{t('login.comment')}</span>
                <Button className="rounded-full p-5 w-full md:w-auto">
                  {t('login.register')}
                </Button>
              </div>
            </form>
          </div>
          <div className="w-full max-w-[400px] hidden md:block">
            <Image src="" width={400} height={400} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}