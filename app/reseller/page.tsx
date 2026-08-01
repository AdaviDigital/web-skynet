import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Code2, LineChart, Users, Wallet, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Reseller Program",
  description: "Get wholesale pricing, API access and dashboard tools to run your own VTU business on SkyNet.",
};

const perks = [
  { icon: Wallet, title: "Wholesale pricing", body: "Buy airtime, data and bills at reseller rates on every transaction." },
  { icon: Code2, title: "API & webhooks", body: "Integrate SkyNet directly into your own app, website or POS system." },
  { icon: Layers, title: "White-label option", body: "Run your own branded top-up platform on top of SkyNet's infrastructure." },
  { icon: LineChart, title: "Commission tracking", body: "See margins, volume and payouts broken down in real time." },
  { icon: Users, title: "Team management", body: "Add staff accounts with permission levels for larger operations." },
  { icon: ShieldCheck, title: "Transaction reports", body: "Export detailed statements for reconciliation and tax purposes." },
];

export default function ResellerPage() {
  return (
    <div>
      <section className="bg-ink py-20 text-white">
        <div className="container-page">
          <span className="eyebrow rounded-full bg-white/10 px-3 py-1 text-sky-light">Reseller program</span>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Turn everyday top-ups into a real business
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Get wholesale pricing across airtime, data, bills and gift cards, plus the dashboard
            and API tools to run it at scale.
          </p>
          <Link href="/register" className="btn-primary mt-7 inline-flex">
            Apply for reseller access <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="card-surface p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-deep/10 text-sky-deep">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">{p.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-ink">How reseller pricing works</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
            Once approved, your account is upgraded to reseller rates automatically. Fund your
            wallet, and every airtime, data or bill purchase is billed at the wholesale rate
            shown in your dashboard — no separate contracts, no minimum volume.
          </p>
          <Link href="/register" className="btn-primary mt-6 inline-flex">
            Get started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
