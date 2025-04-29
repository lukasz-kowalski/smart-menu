'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

import { NavItem } from '@/components/layout/Sidebar/NavLinks.types';

interface Props {
  navItems: NavItem[];
  closeMenu?: () => void;
}

const NavLinks = ({ navItems, closeMenu }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 mt-6">
      {navItems.map(({ label, href, icon }) => (
        <Link
          key={href}
          href={href}
          onClick={closeMenu}
          className={cn(
            'flex items-center gap-2 p-2 rounded hover:bg-slate-800 transition-colors',
            pathname.startsWith(href)
              ? 'bg-slate-800 text-white font-semibold'
              : 'hover:bg-slate-800',
          )}
        >
          {icon}
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
