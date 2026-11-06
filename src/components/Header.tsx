"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(231,235,230,0.82)] backdrop-blur-md">
      <div className="section-shell flex items-center justify-between gap-4 py-3.5">
        <Link href="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <p className="display text-[1.35rem] text-ink sm:text-[1.55rem]">
            {site.name}
          </p>
          <p className="truncate text-[0.7rem] tracking-[0.14em] text-muted uppercase">
            {site.title}
          </p>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm transition ${
                  active
                    ? "bg-accent text-on-accent"
                    : "text-ink-soft hover:bg-[rgba(37,86,74,0.08)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-4 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-4 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-4 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[rgba(244,247,244,0.98)] lg:hidden">
          <nav className="section-shell flex flex-col gap-1 py-3">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-3 py-3 text-base ${
                    active
                      ? "bg-accent text-on-accent"
                      : "text-ink-soft hover:bg-[rgba(37,86,74,0.08)]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
