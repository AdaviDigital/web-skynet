import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="container-page max-w-3xl py-16">
      <h1 className="font-display text-3xl font-bold text-ink">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: July 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">1. Acceptance of terms</h2>
          <p className="mt-2">By creating a SkyNet account, you agree to be bound by these Terms of Service and our Privacy Policy.</p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">2. Account eligibility</h2>
          <p className="mt-2">You must be at least 18 years old and able to enter into a legally binding contract in Nigeria to use SkyNet.</p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">3. Wallet and transactions</h2>
          <p className="mt-2">
            Funds in your SkyNet wallet may only be used to pay for services offered on the
            platform, unless a withdrawal or transfer feature is explicitly enabled for your
            account.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">4. Prohibited use</h2>
          <p className="mt-2">You may not use SkyNet for fraud, money laundering, or any unlawful purpose. Accounts found in violation will be suspended.</p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">5. Reseller & affiliate terms</h2>
          <p className="mt-2">Reseller and affiliate participation is subject to separate program terms provided upon approval, including commission structures and payout schedules.</p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">6. Limitation of liability</h2>
          <p className="mt-2">SkyNet is not liable for delays or failures caused by third-party networks, billers or payment processors beyond our reasonable control.</p>
        </section>
      </div>
    </div>
  );
}
