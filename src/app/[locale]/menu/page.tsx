import { useTranslations } from 'next-intl';

import { PageTitle } from '@/components/layout/PageTitle';

export default function MenuPage() {
  const t = useTranslations('pages.menu');

  return <PageTitle title={t('title')} />;
}
