import type { Metadata } from "next";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundPolicyPage() {
  return (
    <div className="container-page max-w-3xl py-16">
      <h1 className="font-display text-3xl font-bold text-ink">Refund Policy</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: July 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">1. Failed transactions</h2>
          <p className="mt-2">
            If a transaction fails after your wallet has been debited, the amount is automatically
            reversed to your wallet, typically within a few minutes.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">2. Wrong recipient details</h2>
          <p className="mt-2">
            SkyNet cannot reverse a successfully delivered transaction sent to an incorrect phone
            number, meter number or account ID entered by you. Always double-check details before
            confirming.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">3. Disputed transactions</h2>
          <p className="mt-2">
            If you believe a transaction was unauthorized or delivered incorrectly on our end,
            contact support within 7 days with your transaction ID for investigation.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">4. Wallet funding refunds</h2>
          <p className="mt-2">
            Funds added to your wallet by mistake can be requested for reversal, subject to
            verification and any processing fees charged by the payment channel used.
          </p>
        </section>
      </div>
    </div>
  );
}
