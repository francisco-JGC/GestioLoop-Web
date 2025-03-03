import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createExternalUser } from "@/infrastructure/api/hooks/externalUsersHook"
import { ExternalUser } from "@/infrastructure/api/types/user"
import useExternalUserStore from "@/shared/store/externalUserStore"
import { Button } from "@heroui/button"
import { HttpStatusCode } from "axios"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { toast } from "sonner"

export const CreateUserForm = () => {
  const { setUser } = useExternalUserStore()
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation()
  const { register, handleSubmit, reset } = useForm<ExternalUser>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      real_name: '',
      username: '',
      phone_number: '',
      email: '',
      password: '',
    }
  })

  const onSubmit: SubmitHandler<ExternalUser> = async (data) => {
    const response = await createExternalUser(data)

    if (response.statusCode === HttpStatusCode.Ok) {
      setIsLoading(true)
      toast.success(t('general.request-success'))

      setUser(response.data)
      reset()
    } else {
      toast.error(t('general.request-error'), {
        description: t('general.' + response.message)
      })
    }

    setIsLoading(false)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="real_name" className="text-right">
            {t('general.real_name')}
          </Label>
          <Input
            id="real_name"
            placeholder="John Doe"
            type="text"
            required
            className="col-span-3 rounded-full shadow-none"
            {...register('real_name')}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            {t('general.username')}
          </Label>
          <Input
            id="username"
            placeholder="john30"
            type="text"
            required
            className="col-span-3 rounded-full shadow-none"
            {...register('username')}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            {t('general.email')}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="johndoe@gmail.com"
            required
            className="col-span-3 rounded-full shadow-none"
            {...register('email')}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="phone_number" className="text-right">
            {t('general.phone_number')}
          </Label>
          <Input
            id="phone_number"
            type="text"
            placeholder="+505 1234 5678"
            required
            className="col-span-3 rounded-full shadow-none"
            {...register('phone_number')}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password_hash" className="text-right">
            {t('general.password')}
          </Label>
          <Input
            id="password_hash"
            type="text"
            placeholder="********"
            required
            className="col-span-3 rounded-full shadow-none"
            {...register('password')}
          />
        </div>

        <div className="mt-6 text-end">
          <Button
            type="submit"
            color="primary"
            variant="shadow"
            className="rounded-full"
            isLoading={isLoading}
          >
            {t('um.create-user')}
          </Button>
        </div>
      </form>
    </div>
  )
}