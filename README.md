# SkyNet — Web Frontend (Phase 1)

Next.js 14 (App Router) + TypeScript + Tailwind CSS frontend for SkyNet, a Nigerian
digital payment / VTU platform. This is **Phase 1 of a multi-phase build** —
the public-facing website and authenticated frontend UI. The NestJS API,
PostgreSQL/Prisma schema, admin dashboard, and live payment/KYC integrations
are separate phases (see "What's not built yet" below).

## What's actually built and working

- Full site navigation across **38 routes**: home, services overview + 11
  individual service pages (airtime, data, electricity, cable TV, education,
  internet, betting, government, gift cards, bulk SMS, recharge card
  printing), pricing, reseller, affiliate, developers/API, blog (+ 4 sample
  posts), FAQ (searchable accordion), contact, about, login, register, user
  dashboard, privacy/terms/refund/cookie policy pages, and a custom 404.
- Responsive navbar with a services mega-menu and mobile menu.
- SEO: per-page metadata, Open Graph tags, dynamic `sitemap.xml` and
  `robots.txt`.
- Brand design system: the color palette, typography (Inter/Manrope/Poppins)
  and glassmorphism/soft-gradient aesthetic from the brief, plus a signature
  "signal pulse" motif on the hero tying into the "instant top-up" concept.
- `npm run build` passes cleanly (0 type errors, 0 lint errors) — verified in
  this sandbox with a temporary font stub (see note below).

## What's mocked / not yet wired to a real backend

This phase does **not** include a backend, so the following are realistic UI
built against sample data, ready to be pointed at real endpoints:

- **Login / Register / Contact forms** call `apiFetch()` (see `lib/api.ts`)
  against `NEXT_PUBLIC_API_URL` + `/auth/login`, `/auth/register`,
  `/support/contact`. Point that env var at your NestJS API once it exists —
  no frontend code changes needed beyond the URL.
- **Wallet balance, transaction history, stats, testimonials, blog posts,
  pricing copy** in `app/dashboard/page.tsx` and `lib/data.ts` are sample
  data, not live data.
- **Admin dashboard, reseller/affiliate operational dashboards, real KYC
  (BVN/NIN) verification, live payment gateway integration (Paystack /
  Flutterwave / Monnify), wallet ledger, and the API platform's actual
  endpoints** are not built in this phase — they require a real backend,
  real provider credentials, and (for KYC) regulatory-grade handling that
  shouldn't be faked. Building these is the natural next phase.

## Sandbox limitation (documented, not hidden)

This build environment's network egress does not reach
`fonts.googleapis.com`, so `next/font/google` (used for Inter/Manrope/Poppins
in `app/layout.tsx`) cannot fetch fonts **inside this sandbox**. This is a
sandbox-only restriction — Vercel, Render, Railway and Google Cloud build
servers all have normal internet access, so `next build` / `next dev` will
fetch these fonts correctly on any real deployment. To verify the rest of
the app, this was confirmed separately with a temporary font-free layout,
which builds clean across all 38 routes.

## Getting started

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_API_URL once your API exists
npm run dev
```

## Deployment

Deploys as-is to Vercel, Render, Railway, or any Node host that supports
Next.js 14. No special build configuration is required beyond setting
`NEXT_PUBLIC_API_URL` in the target environment.

## Suggested next phases

1. **API (NestJS + PostgreSQL/Prisma)** — auth, wallet ledger, airtime/data/
   bills purchase logic, reseller/affiliate commission tracking, webhook
   handling for Paystack/Flutterwave/Monnify.
2. **Admin dashboard** — separate Next.js app for managing users, wallets,
   pricing, resellers, affiliates, support tickets, and audit logs.
3. **KYC integration** — BVN/NIN verification via a licensed provider,
   which needs real compliance sign-off, not a mock.
