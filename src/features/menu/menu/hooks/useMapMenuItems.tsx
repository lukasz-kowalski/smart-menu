import { useCallback } from 'react';
import { useTranslations } from 'next-intl';

import { MenuItem } from '@/features/menu/menu/Menu.types';
import { DataStackItemType } from '@/components/data/DataStack/DataStack.types';
import { formatCurrency } from '@/lib/numbers';
import { Badge } from '@/components/info/Badge';

type Output = {
  mapMenuItems: (menuItems: MenuItem[]) => DataStackItemType[];
};

export const useMapMenuItems = (): Output => {
  const t = useTranslations('pages.menu.table.header');

  const mapMenuItems = useCallback(
    (menuItems: MenuItem[]): DataStackItemType[] => {
      return menuItems.map((item) => {
        return {
          item: [
            {
              label: t('name'),
              value: item.name,
            },
            {
              label: t('description'),
              value: item.description,
            },
            {
              label: t('price'),
              value: formatCurrency(item.price, item.currency),
            },
            {
              label: t('status'),
              value: (
                <Badge variant={item.status === 'available' ? 'success' : 'danger'} size="sm">
                  {item.status}
                </Badge>
              ),
            },
            {
              label: t('actions'),
              value: <button>Edit {item.name}</button>,
            },
          ],
        };
      });
    },
    [t],
  );

  return {
    mapMenuItems,
  };
};
