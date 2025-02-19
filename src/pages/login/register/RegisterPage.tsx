import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import { Image } from '@unpic/react'
import { HeaderLogin } from "@/shared/components/headerLogin"
import { SubmitHandler, useForm } from "react-hook-form"
import type { Register } from "@/infrastructure/api/types/login.types"
import { registerUser } from "@/infrastructure/api/hooks/authHook"
import { toast } from "sonner"
import { HttpStatusCode } from "axios"
import { useNavigate } from "react-router-dom"

export const RegisterPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { handleSubmit, register } = useForm<Register>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      username: '',
      phone_number: ''
    }
  })

  const onSubmit: SubmitHandler<Register> = async (data) => {
    toast.loading(t(''))
    const response = await registerUser(data)

    toast.dismiss()

    if (response.statusCode === HttpStatusCode.Ok) {
      toast.success(t(''))
      navigate('/sign-in')
    } else {
      toast.error(t(''))
    }
  }

  return (
    <div>
      <HeaderLogin show_button="login" />

      <div className="flex w-full mt-30 justify-center items-center p-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <div className="w-full flex flex-col gap-6 max-w-[400px]">
            <div>
              <span className="text-2xl font-semibold">{t('login.title')}</span>
            </div>
            <form className="flex flex-col gap-6" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder={t('login.placeholder-username')}
                type="text"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                {...register('username')}
              />
              <Input
                placeholder={t('login.placeholder-email')}
                type="email"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                {...register('email')}
              />
              <Input
                placeholder={t('login.placeholder-password')}
                type="password"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                {...register('password')}
              />
              <Input
                placeholder={t('login.placeholder-phone_number')}
                type="text"
                required
                className="rounded-full p-6 shadow-none"
                autoComplete="off"
                {...register('phone_number')}
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