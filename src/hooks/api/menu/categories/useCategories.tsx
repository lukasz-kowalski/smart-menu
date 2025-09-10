'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchCategories } from '@/server/lib/menu/categories/fetchCategories';
import { Category } from '@/features/menu/menu/Menu.types';

export const useCategories = (initialData: Category[]) => {
  return useQuery<Category[]>({
    queryKey: ['menu', 'categories'],
    queryFn: fetchCategories,
    initialData,
  });
};
