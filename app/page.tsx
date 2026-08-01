import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Wallet,
  Smartphone,
  Zap,
  Tv,
  Dices,
  GraduationCap,
  Landmark,
  Star,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import StatCounter from "@/components/StatCounter";
import { services, heroStats, testimonials, faqs } from "@/lib/data";

const heroPills = [
  { label: "Airtime", icon: Smartphone },
  { label: "Data", icon: Wallet },
  { label: "Electricity", icon: Zap },
  { label: "Cable TV", icon: Tv },
  { label: "Betting", icon: Dices },
  { label: "Education", icon: GraduationCap },
  { label: "Government", icon: Landmark },
];

const steps = [
  {
    n: "01",
    title: "Create your wallet",
    body: "Sign up in under a minute and verify your account to activate your SkyNet wallet.",
  },
  {
    n: "02",
    title: "Fund it your way",
    body: "Top up by bank transfer, virtual account, card, USSD or QR — whatever's fastest for you.",
  },
  {
    n: "03",
    title: "Pay and get confirmation instantly",
    body: "Buy airtime, data, or settle a bill. Most deliveries land in seconds, with a receipt saved to your history.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(77,163,255,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.18),transparent_40%)]" />
        <div className="container-page relative grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="eyebrow w-fit rounded-full bg-white/10 px-3 py-1 text-sky-light">
              Trusted by 250,000+ Nigerians
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              Fast, secure &amp; affordable digital payments in Nigeria
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
              Recharge airtime, buy cheap data, pay bills, subscribe to TV, fund betting wallets,
              make education payments, and earn through reseller and affiliate programs — all
              from one wallet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services/data" className="btn-primary">
                Buy Data <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services/airtime" className="btn-ghost">
                Recharge Airtime
              </Link>
              <Link href="/register" className="btn-ghost">
                Create Account
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {heroPills.map((p) => (
                <span
                  key={p.label}
                  className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10"
                >
                  <p.icon className="h-3.5 w-3.5 text-sky-light" />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Signature: signal-pulse wallet mockup */}
          <div className="relative flex items-center justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
              <span className="signal-ring inset-0" style={{ animationDelay: "0s" }} />
              <span className="signal-ring inset-0" style={{ animationDelay: "0.9s" }} />
              <span className="signal-ring inset-0" style={{ animationDelay: "1.8s" }} />
              <div className="card-surface relative z-10 w-64 bg-white/95 p-6 sm:w-72">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Wallet balance
                  </span>
                  <Wallet className="h-4 w-4 text-sky-deep" />
                </div>
                <p className="mt-2 font-display text-3xl font-bold text-ink">₦48,250.00</p>
                <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">MTN Data 5GB</span>
                    <span className="font-semibold text-emerald-brand">Delivered</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">IKEDC token</span>
                    <span className="font-semibold text-emerald-brand">Delivered</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">GOtv renewal</span>
                    <span className="font-semibold text-amber-brand">Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
            {heroStats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Everything in one wallet</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Every payment you make regularly, in one place
          </h2>
          <p className="mt-3 text-slate-500">
            From airtime to government fees, SkyNet covers the payments Nigerians make every day.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Three steps from sign-up to your first payment
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="relative rounded-2xl border border-slate-200 p-7">
                <span className="font-display text-4xl font-bold text-slate-100">{step.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / security */}
      <section className="container-page py-20">
        <div className="card-surface grid gap-8 p-8 lg:grid-cols-[1fr_1.4fr] lg:p-12">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
              Built on bank-level security
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Every transaction is protected end to end, so you can move money with confidence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {[
              "AES-256 encryption",
              "Mandatory transaction PIN",
              "OTP & two-factor login",
              "BVN & NIN verification",
              "Real-time fraud monitoring",
              "Full audit trail",
            ].map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm text-slate-600">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-brand" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseller / Affiliate CTA */}
      <section className="container-page pb-20">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="card-surface flex flex-col justify-between p-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">Become a reseller</h3>
              <p className="mt-2 text-sm text-slate-500">
                Get wholesale pricing, API access and a dashboard built for running a VTU business.
              </p>
            </div>
            <Link href="/reseller" className="btn-secondary mt-6 w-fit">
              Explore reseller program <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="card-surface flex flex-col justify-between bg-sky-deep p-8 text-white">
            <div>
              <h3 className="font-display text-xl font-semibold">Join the affiliate program</h3>
              <p className="mt-2 text-sm text-white/80">
                Share your referral link and earn commission every time someone you refer transacts.
              </p>
            </div>
            <Link href="/affiliate" className="btn-ghost mt-6 w-fit border-white/40">
              See affiliate earnings <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What people say</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Trusted by everyday users and resellers alike
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card-surface p-6">
                <div className="flex gap-0.5 text-amber-brand">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink">Common questions</h2>
            <p className="mt-3 text-sm text-slate-500">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <Link href="/faq" className="btn-secondary mt-5 w-fit">
              Visit help center
            </Link>
          </div>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {faqs.slice(0, 4).map((f) => (
              <div key={f.question} className="p-5">
                <p className="font-medium text-ink">{f.question}</p>
                <p className="mt-1.5 text-sm text-slate-500">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-page pb-24">
        <div className="rounded-3xl bg-ink px-8 py-14 text-center sm:px-16">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to pay smarter?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/70">
            Create your free SkyNet wallet in under a minute and get your first payment delivered instantly.
          </p>
          <Link href="/register" className="btn-primary mt-7 inline-flex">
            Create your free account <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
