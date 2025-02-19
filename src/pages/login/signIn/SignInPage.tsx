/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import { Image } from '@unpic/react'
import { Link, useNavigate } from "react-router-dom"
import { HeaderLogin } from "@/shared/components/headerLogin"
import useAuthStore from "@/shared/store/authStore"
import { SubmitHandler, useForm } from 'react-hook-form'
import { useEffect } from "react"
import { toast } from 'sonner'
import { Loader2 } from "lucide-react";
import type { Signin } from "@/infrastructure/api/types/login.types"

export const SigninPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { login, isLoading, error, isAuthenticated } = useAuthStore()
  const { handleSubmit, register } = useForm<Signin>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      session_field: '',
      password: ''
    }
  })


  const onSubmit: SubmitHandler<Signin> = async (data) => {
    await login(data.session_field, data.password)
  };

  useEffect(() => {
    if (error) {
      toast.error(t('alert_message.login.error-login.title'), {
        description: t(`alert_message.login.error-login.${error}`)
      })
    }
  }, [login, error])

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated])

  return (
    <div>
      <HeaderLogin show_button="register" />

      <div className="flex w-full mt-30 justify-center items-center p-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <div className="w-full flex flex-col gap-6 max-w-[400px]">
            <div>
              <span className="text-2xl font-semibold">{t('login.title')}</span>
            </div>
            <form className="flex flex-col gap-6" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder={t('login.placeholder-email')}
                type="email"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                {...register('session_field')}
              />
              <Input
                placeholder={t('login.placeholder-password')}
                type="password"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                {...register('password')}
              />
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <Link to={"#"} className="text-lg">
                  {t('login.forgot-password')}
                </Link>
                <Button className="rounded-full p-5 w-full md:w-auto" disabled={isLoading}>
                  {isLoading && <Loader2 className="animate-spin" />}
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