import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { pricingTiers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for retail, reseller and affiliate use on SkyNet.",
};

export default function PricingPage() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Pricing</span>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          Transparent pricing, for every kind of user
        </h1>
        <p className="mt-3 text-slate-500">
          No hidden charges. Resellers get wholesale rates, affiliates earn on every referral.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={
              tier.highlighted
                ? "relative flex flex-col rounded-2xl bg-ink p-8 text-white shadow-xl"
                : "card-surface flex flex-col p-8"
            }
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-8 rounded-full bg-emerald-brand px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            )}
            <h3 className={`font-display text-xl font-semibold ${tier.highlighted ? "text-white" : "text-ink"}`}>
              {tier.name}
            </h3>
            <p className={`mt-1 text-sm ${tier.highlighted ? "text-white/70" : "text-slate-500"}`}>
              {tier.description}
            </p>
            <p className={`mt-5 font-display text-2xl font-bold ${tier.highlighted ? "text-white" : "text-ink"}`}>
              {tier.price}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tier.highlighted ? "text-emerald-brand" : "text-emerald-brand"}`} />
                  <span className={tier.highlighted ? "text-white/85" : "text-slate-600"}>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href={tier.href}
              className={tier.highlighted ? "btn-primary mt-8 !bg-white !text-ink hover:!bg-slate-100" : "btn-secondary mt-8"}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">
        Service fees vary slightly by network and biller due to third-party processing costs. Exact
        rates are shown before you confirm any transaction — never after.
      </div>
    </div>
  );
}
