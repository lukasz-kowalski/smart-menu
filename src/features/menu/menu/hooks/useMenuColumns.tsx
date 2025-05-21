import { useTranslations } from 'next-intl';

import { MenuItem } from '@/features/menu/menu/Menu.types';
import { ColumnType } from '@/components/data/Table/Table.types';
import { formatCurrency } from '@/lib/numbers';
import { Badge } from '@/components/info/Badge';

type Output = {
  columns: ColumnType<MenuItem>[];
};

export const useMenuColumns = (): Output => {
  const t = useTranslations('pages.menu.table.header');

  const columns: ColumnType<MenuItem>[] = [
    { key: 'name', header: t('name') },
    { key: 'description', header: t('description') },
    { key: 'price', header: t('price'), render: (row) => formatCurrency(row.price, row.currency) },
    {
      key: 'status',
      header: t('status'),
      render: (row) => (
        <Badge variant={row.status === 'available' ? 'success' : 'danger'} size="sm">
          {row.status}
        </Badge>
      ),
    },
    { key: 'actions', header: t('actions'), render: (row) => <button>Edit {row.name}</button> },
  ];

  return { columns };
};
