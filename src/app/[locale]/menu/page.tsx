import { getTranslations } from 'next-intl/server';

import { PageTitle } from '@/components/layout/PageTitle';
import { Button } from '@/components/action/Button';
import { Menu } from '@/features/menu/menu/Menu';
import { getMenuCategories } from '@/server/lib/menu/categories/getCategories';

export default async function MenuPage() {
  const t = await getTranslations('pages.menu');

  const categoriesFromBackend = await getMenuCategories();

  return (
    <>
      <PageTitle title={t('title')} />
      <div className="mt-4 md:mt-8">
        <Button variant="primary">+ {t('addItem')}</Button>

        <div className="mt-4 md:mt-8">
          <Menu initialData={categoriesFromBackend} />
        </div>
      </div>
    </>
  );
}
