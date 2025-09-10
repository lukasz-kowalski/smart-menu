'use client';

import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DialogFooter } from '@/components/ui/dialog';
import { MenuItem } from '@/features/menu/menu/Menu.types';
import { useEditMenuItem } from '@/hooks/api/menu/item/useEditMenuItem';

type Props = {
  item: MenuItem;
  closeModal: () => void;
};

export type FormData = {
  name: string;
  description: string;
  price: number;
};

export const EditMenuForm = ({ item, closeModal }: Props) => {
  const t = useTranslations('pages.menu.edit');
  const { mutate } = useEditMenuItem({ item, callback: closeModal });

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: item.name,
      description: item.description,
      price: item.price,
    },
  });

  const onSubmit = async (data: FormData) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name">{t('name')}</Label>
          <Input id="name" {...register('name')} />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="description">{t('description')}</Label>
          <Input id="description" {...register('description')} />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="price">{t('price')}</Label>
          <Input id="price" {...register('price')} />
        </div>
      </div>

      <DialogFooter className="mt-4">
        <Button type="button" variant="outline" onClick={closeModal}>
          {t('cancel')}
        </Button>
        <Button type="submit">{t('save')}</Button>
      </DialogFooter>
    </form>
  );
};
