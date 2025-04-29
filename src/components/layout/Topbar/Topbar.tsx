'use client';

import { User2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useMediaQuery } from 'usehooks-ts';

import { Link } from '@/i18n/navigation';

const Topbar = () => {
  const t = useTranslations('Topbar');
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (!isDesktop) {
    return null;
  }

  return (
    <nav className="p-4 flex justify-end">
      <Link href="/company-config" aria-label={t('profile')}>
        <User2 className="h-6 w-6" />
      </Link>
    </nav>
  );
};

export default Topbar;
