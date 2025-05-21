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
      <body className="antialiased bg-slate-50 min-h-screen">
        <NextIntlClientProvider locale={locale}>
          <div className="min-h-screen max-w-screen-xl mx-auto">
            <div className="md:flex gap-8">
              <Sidebar />
              <div className="flex-1 md:max-w-[calc(100%-16rem)]">
                <Topbar />
                <main className="p-2 md:p-0 md:pr-4">{children}</main>
              </div>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
