"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { SERVICES } from "@/lib/services";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navClass = (href) =>
    `font-ui text-[13px] font-medium tracking-wide transition-colors ${
      pathname === href ? "text-ink" : "text-ink/55 hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-bone/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/nuscript-logo.svg" alt="NuScript" className="h-6 w-auto md:h-7" />
          <span className="hidden font-ui text-[10px] uppercase tracking-[0.2em] text-sage sm:inline">
            Clinical Documentation
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 font-ui text-[13px] font-medium tracking-wide text-ink/55 transition-colors hover:text-ink">
              Services <ChevronDown className="h-3 w-3" strokeWidth={1.5} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-3">
                <ul className="w-64 rounded-lg border border-ink/10 bg-bone p-2 shadow-[0_12px_40px_-12px_rgba(13,27,30,0.2)]">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${s.slug}`}
                        className="group block rounded-md px-3 py-2.5 transition-colors hover:bg-plasma/10"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="font-ui text-[11px] tracking-wider text-sage">{s.no}</span>
                        <span className="block font-ui text-sm font-medium text-ink">{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/about" className={navClass("/about")}>
            About
          </Link>
          <Link href="/contact" className={navClass("/contact")}>
            Contact
          </Link>
          <a
            href="https://app.audryl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-5 py-2 font-ui text-[13px] font-medium text-bone transition-colors hover:bg-plasma hover:text-ink"
          >
            Login
          </a>
        </nav>

        <button
          className="flex h-9 w-9 items-center justify-center text-ink md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink/10 bg-bone px-6 py-4 md:hidden">
          <ul className="space-y-1">
            <li className="pt-1">
              <span className="font-ui text-[11px] uppercase tracking-wider text-sage">Services</span>
            </li>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 pl-3 font-ui text-sm text-ink/75"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2 font-ui text-sm text-ink">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2 font-ui text-sm text-ink">
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <a
                href="https://app.audryl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-ink px-5 py-2 font-ui text-sm font-medium text-bone"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
