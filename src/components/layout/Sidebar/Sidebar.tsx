"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, UtensilsCrossed, Warehouse, Bell, Home } from "lucide-react";
import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "usehooks-ts";

import NavLinks from "@/components/layout/Sidebar/NavLinks";
import { NavItem } from "@/components/layout/Sidebar/NavLinks.types";

const Sidebar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const t = useTranslations();

  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  const navItems: NavItem[] = [
    {
      label: t("Sidebar.dashboard"),
      href: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      label: t("Sidebar.menu"),
      href: "/menu",
      icon: <UtensilsCrossed className="h-5 w-5" />,
    },
    {
      label: t("Sidebar.inventory"),
      href: "/inventory",
      icon: <Warehouse className="h-5 w-5" />,
    },
    {
      label: t("Sidebar.alerts"),
      href: "/alerts",
      icon: <Bell className="h-5 w-5" />,
    },
  ];

  if (isDesktop) {
    return (
      <aside className="fixed inset-y-0 left-0 flex w-64 flex-col border-r bg-slate-900 text-slate-100 shadow-sm z-30">
        <div className="h-16 flex items-center justify-center px-4 border-b border-slate-700">
          <span className="text-xl font-bold tracking-tight">
            {t("App.appName")}
          </span>
        </div>
        <NavLinks navItems={navItems} />
      </aside>
    );
  }

  return (
    <div className="p-4 border-b flex items-center justify-between">
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
            {t("App.appName")}
          </SheetTitle>
          <NavLinks navItems={navItems} closeMenu={closeMenu} />
        </SheetContent>
      </Sheet>
      <span className="font-semibold text-lg">{t("App.appName")}</span>
    </div>
  );
};

export default Sidebar;
