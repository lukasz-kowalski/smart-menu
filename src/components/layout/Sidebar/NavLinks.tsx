'use client';

import clsx from 'clsx';

import { Link, usePathname } from '@/i18n/navigation';

import { NavItem } from '@/components/layout/Sidebar/NavLinks.types';

interface Props {
  navItems: NavItem[];
  closeMenu?: () => void;
}

const NavLinks = ({ navItems, closeMenu }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 mt-6">
      {navItems.map(({ label, href, icon }) => {
        const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            onClick={closeMenu}
            className={clsx(
              'flex items-center gap-2 p-2 rounded hover:bg-slate-800 transition-colors',
              isActive ? 'bg-slate-800 text-white font-semibold' : 'hover:bg-slate-800',
            )}
          >
            {icon}
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
