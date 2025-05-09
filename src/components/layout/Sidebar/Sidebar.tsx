'use client';

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, UtensilsCrossed, Warehouse, Bell, Home, User2 } from 'lucide-react';
import { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import NavLinks from '@/components/layout/Sidebar/NavLinks';
import { NavItem } from '@/components/layout/Sidebar/NavLinks.types';

const Sidebar = () => {
  const t = useTranslations();

  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  const navItems: NavItem[] = [
    {
      label: t('components.Sidebar.dashboard'),
      href: '/',
      icon: <Home className="h-5 w-5" />,
    },
    {
      label: t('components.Sidebar.menu'),
      href: '/menu',
      icon: <UtensilsCrossed className="h-5 w-5" />,
    },
    {
      label: t('components.Sidebar.inventory'),
      href: '/inventory',
      icon: <Warehouse className="h-5 w-5" />,
    },
    {
      label: t('components.Sidebar.alerts'),
      href: '/alerts',
      icon: <Bell className="h-5 w-5" />,
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="min-h-screen hidden md:block md:flex md:w-64 md:flex-col md:border-r md:bg-slate-900 md:text-slate-100 md:shadow-sm z-30">
        <div className="h-16 flex items-center justify-center px-4 border-b border-slate-700">
          <span className="text-xl font-bold tracking-tight">{t('App.appName')}</span>
        </div>
        <NavLinks navItems={navItems} />
      </aside>

      {/* Mobile Topbar */}
      <div className="md:hidden p-4 border-b flex items-center justify-between">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md hover:bg-muted">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-64 bg-slate-900 text-slate-100"
            aria-description="Sidebar menu"
            aria-describedby={undefined}
          >
            <SheetTitle className="text-xl font-bold tracking-tight mt-4 mb-2 pl-2 text-slate-100">
              {t('App.appName')}
            </SheetTitle>
            <NavLinks navItems={navItems} closeMenu={closeMenu} />
          </SheetContent>
        </Sheet>
        <Link href="/company-config" aria-label={t('components.Topbar.profile')}>
          <User2 className="h-6 w-6" />
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
