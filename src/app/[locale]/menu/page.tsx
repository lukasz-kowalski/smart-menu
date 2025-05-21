import { useTranslations } from 'next-intl';

import { PageTitle } from '@/components/layout/PageTitle';
import { Button } from '@/components/action/Button';
import { Menu } from '@/features/menu/menu/Menu';
import { Category, MenuItem } from '@/features/menu/menu/Menu.types';

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

const categories: Category[] = [
  {
    id: '1',
    name: 'Pizza',
    order: 1,
    items: data,
  },
  {
    id: '2',
    name: 'Main Dishes',
    order: 2,
    items: data,
  },
];

export default function MenuPage() {
  const t = useTranslations('pages.menu');

  return (
    <>
      <PageTitle title={t('title')} />
      <div className="mt-4 md:mt-8">
        <Button variant="primary">+ {t('addItem')}</Button>

        <div className="mt-4 md:mt-8">
          <Menu menu={categories} />
        </div>
      </div>
    </>
  );
}
