import { Branch } from "@/infrastructure/api/types/branch"
import useBranchesStore from "@/shared/store/branchesStore"
import { SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { Button } from "@heroui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { updateBranch } from "@/infrastructure/api/hooks/branchesHook";
import { HttpStatusCode } from "axios";
import { toast } from "sonner";
import { useState } from "react";

interface IProps {
  branch: Branch
}

export const UpdateBranchForm = ({ branch }: IProps) => {
  const { updateBranch: updateBranchStore } = useBranchesStore();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false)
  const { handleSubmit, register } = useForm<Branch>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      id: branch.id,
      name: branch.name,
      address: branch.address
    }
  });

  const onSubmit: SubmitHandler<Branch> = async (data) => {
    const response = await updateBranch(data)

    if (response.statusCode === HttpStatusCode.Ok) {
      setIsLoading(true)
      toast.success(t('general.request-success'))
      updateBranchStore(response.data)
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
          <Label htmlFor="name" className="text-right">
            {t('general.name')}
          </Label>
          <Input
            id="name"
            type="text"
            required
            className="col-span-3 rounded-full shadow-none"
            {...register('name')}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="address" className="text-right">
            {t('general.address')}
          </Label>
          <Input
            id="address"
            type="text"
            required
            className="col-span-3 rounded-full shadow-none"
            {...register('address')}
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
            {t('general.update')}
          </Button>
        </div>
      </form >
    </div >
  );
};
