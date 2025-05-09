'use client';

import { ColumnDef } from '@tanstack/react-table';

import { MenuItem } from '@/features/menu/menuTable/MenuTable.types';
import { formatCurrency } from '@/lib/numbers';
import { Badge } from '@/components/info/Badge';

export const columns: ColumnDef<MenuItem>[] = [
  {
    accessorKey: 'name',
    header: 'name',
  },
  {
    accessorKey: 'description',
    header: 'description',
  },
  {
    accessorKey: 'price',
    header: 'price',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'));
      const currency = row.original.currency;
      const formatted = formatCurrency(amount, currency);

      return formatted;
    },
  },
  {
    accessorKey: 'status',
    header: 'status',
    cell: ({ row }) => {
      return (
        <Badge variant={row.getValue('status') === 'available' ? 'success' : 'danger'} size="sm">
          {row.original.status}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    header: 'actions',
    cell: ({ row }) => {
      return <button>Edit {row.original.name}</button>;
    },
  },
];
