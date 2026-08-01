"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Radio } from "lucide-react";
import { services } from "@/lib/data";

const primaryLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Reseller", href: "/reseller" },
  { label: "Affiliate", href: "/affiliate" },
  { label: "Developers", href: "/developers" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-sky-deep text-white">
            <Radio className="h-4 w-4" />
          </span>
          SkyNet
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full grid w-[560px] grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-slate-50"
                  >
                    <s.icon className="mt-0.5 h-4 w-4 shrink-0 text-sky-deep" />
                    <span>
                      <span className="block text-sm font-semibold text-ink">{s.name}</span>
                      <span className="block text-xs text-slate-500">{s.tagline}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/login" className="rounded-full px-4 py-2 text-sm font-semibold text-ink hover:bg-slate-100">
            Login
          </Link>
          <Link href="/register" className="btn-primary !px-5 !py-2.5 text-sm">
            Create account
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">Services</p>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-lg px-2 py-2 text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <div className="my-2 border-t border-slate-200" />
            {primaryLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-2 text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link href="/login" className="btn-secondary flex-1 !py-2.5 text-sm">
                Login
              </Link>
              <Link href="/register" className="btn-primary flex-1 !py-2.5 text-sm">
                Create account
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
