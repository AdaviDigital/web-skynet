import Link from "next/link";
import { Radio } from "lucide-react";
import { services } from "@/lib/data";

const socials = [
  { label: "FB", href: "https://facebook.com" },
  { label: "X", href: "https://x.com" },
  { label: "IG", href: "https://instagram.com" },
  { label: "in", href: "https://linkedin.com" },
];

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Affiliate", href: "/affiliate" },
      { label: "Reseller", href: "/reseller" },
      { label: "API / Developers", href: "/developers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/faq" },
      { label: "Contact us", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-ink text-slate-300">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-deep text-white">
              <Radio className="h-4 w-4" />
            </span>
            SkyNet
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Your trusted digital payment &amp; VTU platform — airtime, data, bills, education
            payments and more, delivered instantly and securely across Nigeria.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`SkyNet on ${s.label}`}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-slate-300 hover:bg-white/20 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-400">
            <p>Ikorodu, Lagos, Nigeria</p>
            <p className="mt-1">
              <a href="tel:+2348062177435" className="hover:text-white">+234 806 217 7435</a>
            </p>
            <p className="mt-1">
              <a href="mailto:skynetconnect8@gmail.com" className="hover:text-white">skynetconnect8@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Top services</p>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm hover:text-white">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} SkyNet. All rights reserved.</p>
          <p>Built for speed, security and scale.</p>
        </div>
      </div>
    </footer>
  );
}
