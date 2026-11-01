"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

function isActive(pathname: string | null, href: string) {
  return pathname === href || (pathname?.startsWith(`${href}/`) ?? false);
}

export function NavLinksStatic() {
  return <NavList pathname={null} />;
}

export function NavLinks() {
  return <NavList pathname={usePathname()} />;
}

function NavList({ pathname }: { pathname: string | null }) {
  return (
    <ul className="-mx-1.5 flex items-center sm:-mx-2 sm:gap-x-2">
      {site.nav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`relative inline-flex min-h-11 items-center px-1.5 text-[0.92rem] sm:px-2 transition-colors ${
                active ? "text-ink" : "text-ink-muted hover:text-ink"
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-1.5 bottom-2 sm:inset-x-2 h-px bg-ink transition-opacity ${active ? "opacity-100" : "opacity-0"}`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
