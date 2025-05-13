'use client';

import { Menu, UtensilsCrossed, Warehouse, Bell, Home, User2, SquareX } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';
import NavLinks from '@/components/layout/Sidebar/NavLinks';
import { NavItem } from '@/components/layout/Sidebar/NavLinks.types';
import { Button } from '@/components/action/Button';

const Sidebar = () => {
  const t = useTranslations();

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => setIsOpen(false);

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
      <aside
        className="min-h-screen hidden md:flex md:w-64 md:flex-col md:border-r md:bg-slate-900 md:text-slate-100 md:shadow-sm z-30"
        data-testid="desktop-sidebar"
      >
        <div className="h-16 flex items-center justify-center px-4 border-b border-slate-700">
          <span className="text-xl font-bold tracking-tight">{t('App.appName')}</span>
        </div>
        <NavLinks navItems={navItems} />
      </aside>

      {/* Mobile Topbar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between p-2">
          <Button
            onClick={openMenu}
            variant="outline"
            size="xs"
            className="border-0 outline-none"
            data-testid="mobile-sidebar-trigger"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link href="/company-config" aria-label={t('components.Topbar.profile')}>
            <User2 className="h-6 w-6" />
          </Link>
        </div>

        <div
          className={cn(
            'fixed inset-0 bg-black opacity-50 z-40 transition-opacity',
            !isOpen && 'hidden',
          )}
          onClick={closeMenu}
        />

        <aside
          role="dialog"
          className={cn(
            'min-h-screen fixed top-0 left-0 h-full w-64 bg-slate-900 text-slate-100 shadow-lg z-50 transform transition-transform duration-300',
            isOpen ? 'translate-x-0' : '-translate-x-full',
          )}
          data-testid="mobile-sidebar"
          aria-hidden={!isOpen}
        >
          <div className="p-4 w-64">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">{t('App.appName')}</h2>
              <Button
                onClick={closeMenu}
                variant="outline"
                size="xs"
                className="border-0 outline-none focus:ring-0 focus:outline-none focus:ring-transparent focus:ring-offset-0"
                data-testid="mobile-sidebar-close-button"
              >
                <SquareX className="h-6 w-6 text-white" />
              </Button>
            </div>
            <NavLinks navItems={navItems} closeMenu={closeMenu} />
          </div>
        </aside>
      </div>
      {/* <div className="md:hidden p-4 border-b flex items-center justify-between">
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
      </div> */}
    </>
  );
};

export default Sidebar;
