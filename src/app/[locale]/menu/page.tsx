import { useTranslations } from 'next-intl';

import { PageTitle } from '@/components/layout/PageTitle';
import { Button } from '@/components/ui/button';
import MenuTable from '@/features/menu/menuTable/MenuTable';
import { columns } from '@/features/menu/menuTable/columns';
import { MenuItem } from '@/features/menu/menuTable/MenuTable.types';

const data: MenuItem[] = [
  {
    id: '1',
    name: 'Pizza Margherita',
    description: 'Classic pizza with tomato sauce and mozzarella cheese',
    price: 10.99,
    currency: 'PLN',
    status: 'available',
  },
  {
    id: '2',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with Caesar dressing and croutons',
    price: 8.99,
    currency: 'EUR',
    status: 'available',
  },
  {
    id: '3',
    name: 'Spaghetti Carbonara',
    description: 'Pasta with creamy sauce, pancetta, and parmesan cheese',
    price: 12.99,
    currency: 'USD',
    status: 'unavailable',
  },
];

export default function MenuPage() {
  const t = useTranslations('pages.menu');

  return (
    <>
      <PageTitle title={t('title')} />
      <div className="mt-4 md:mt-8">
        <Button variant="action">+ {t('addItem')}</Button>

        <div className="mt-4 md:mt-8">
          <MenuTable<MenuItem, unknown> columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
