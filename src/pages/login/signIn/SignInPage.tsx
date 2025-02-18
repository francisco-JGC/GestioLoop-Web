import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import { Image } from '@unpic/react'
import { Link } from "react-router-dom"
import { HeaderLogin } from "@/shared/components/headerLogin"

export const SigninPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <HeaderLogin show_button="register" />

      <div className="flex w-full min-h-screen justify-center items-center max-w-[1300px] p-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <div className="w-full flex flex-col gap-6 max-w-[400px]">
            <div>
              <span className="text-2xl font-semibold">{t('login.title')}</span>
            </div>
            <form className="flex flex-col gap-6" autoComplete="off">
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
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <Link to={"#"} className="text-lg">
                  {t('login.forgot-password')}
                </Link>
                <Button className="rounded-full p-5 w-full md:w-auto">
                  {t('login.signin')}
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