import type { Metadata } from 'next';
import { NextIntlClientProvider, Locale, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { getMessages } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';

import '../globals.css';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return {
    title: messages?.App?.appName ?? 'Smart Menu',
    description: messages?.Meta?.description ?? 'Smart Menu - A smart menu for your restaurant',
  };
}

export default async function LocaleLayout({ children, params }: PropsWithChildren<Props>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="antialiased bg-slate-50">
        <NextIntlClientProvider locale={locale}>
          <Topbar />
          <div className="mx-auto max-w-7xl px-4 py-2">
            <Sidebar />
            <main className="flex-1 md:ml-32 p-4">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
