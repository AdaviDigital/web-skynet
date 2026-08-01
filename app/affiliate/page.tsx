import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Link2, BarChart3, Wallet, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description: "Earn commission by referring new users to SkyNet with your unique referral link.",
};

const steps = [
  { icon: Link2, title: "Get your referral link", body: "Every account gets a unique, trackable referral link the moment you sign up." },
  { icon: Megaphone, title: "Share it", body: "Post it on social media, WhatsApp groups, or your own blog and community." },
  { icon: BarChart3, title: "Track referrals", body: "See sign-ups, active users and commission accrue in real time on your dashboard." },
  { icon: Wallet, title: "Get paid", body: "Request a withdrawal to your bank account once you hit the minimum payout." },
];

export default function AffiliatePage() {
  return (
    <div>
      <section className="bg-ink py-20 text-white">
        <div className="container-page">
          <span className="eyebrow rounded-full bg-white/10 px-3 py-1 text-sky-light">Affiliate program</span>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Earn commission for every person you bring to SkyNet
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            No cap on referrals, no cost to join. Just share your link and earn a commission
            every time someone you referred transacts.
          </p>
          <Link href="/register" className="btn-primary mt-7 inline-flex">
            Join affiliate program <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-slate-200 p-6">
              <span className="font-display text-3xl font-bold text-slate-100">0{i + 1}</span>
              <span className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-deep/10 text-sky-deep">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="card-surface p-6 text-center">
            <p className="font-display text-3xl font-bold text-ink">Real-time</p>
            <p className="mt-1 text-sm text-slate-500">Referral analytics dashboard</p>
          </div>
          <div className="card-surface p-6 text-center">
            <p className="font-display text-3xl font-bold text-ink">Fast</p>
            <p className="mt-1 text-sm text-slate-500">Withdrawal request processing</p>
          </div>
          <div className="card-surface p-6 text-center">
            <p className="font-display text-3xl font-bold text-ink">Ready-made</p>
            <p className="mt-1 text-sm text-slate-500">Marketing materials provided</p>
          </div>
        </div>
      </section>
    </div>
  );
}
