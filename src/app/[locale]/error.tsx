'use client';

import { useTranslations } from 'next-intl';

interface Props {
  error: Error;
}

export default function FilterError({ error }: Props) {
  const t = useTranslations('errors');

  // TODO: Implement proper error logging (e.g. Sentry)
  console.log('Global Error:', error);

  return (
    <div id="global-error">
      <h2>{t('globalError')}</h2>
    </div>
  );
}
