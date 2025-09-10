'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MenuItem } from '@/features/menu/menu/Menu.types';
import { updateItem } from '@/server/lib/menu/item/updateItem';
import type { FormData } from '@/features/menu/menu/menuItem/edit/EditMenuForm';

type Props = {
  item: MenuItem;
  callback: () => void;
};

export const useEditMenuItem = ({ item, callback }: Props) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FormData) => {
      const dataToUpdate = {
        ...item,
        name: data.name.trim(),
        description: data.description.trim(),
        price: Number(data.price),
      };

      const res = await updateItem(dataToUpdate);

      if (!res.ok) throw new Error('Failed to save');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['menu', 'categories'] });

      callback();
    },
  });
};
