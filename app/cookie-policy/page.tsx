import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <div className="container-page max-w-3xl py-16">
      <h1 className="font-display text-3xl font-bold text-ink">Cookie Policy</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: July 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">1. What cookies we use</h2>
          <p className="mt-2">
            SkyNet uses essential cookies to keep you signed in and to remember your preferences,
            and analytics cookies to understand how the platform is used so we can improve it.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">2. Managing cookies</h2>
          <p className="mt-2">
            You can control or disable non-essential cookies through your browser settings.
            Disabling essential cookies may prevent you from staying signed in.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">3. Third-party analytics</h2>
          <p className="mt-2">
            We may use third-party analytics tools to understand usage patterns in aggregate.
            These providers do not receive your wallet or transaction data.
          </p>
        </section>
      </div>
    </div>
  );
}
