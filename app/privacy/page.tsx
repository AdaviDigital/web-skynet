import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="container-page max-w-3xl py-16">
      <h1 className="font-display text-3xl font-bold text-ink">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: July 2026</p>

      <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">1. Information we collect</h2>
          <p className="mt-2">
            We collect information you provide directly, such as your name, email, phone number,
            and identity verification details (including BVN and NIN where required by
            regulation), as well as transaction data generated when you use SkyNet.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">2. How we use your information</h2>
          <p className="mt-2">
            We use your information to process transactions, verify your identity, prevent fraud,
            provide customer support, and comply with applicable financial regulations in Nigeria.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">3. Data sharing</h2>
          <p className="mt-2">
            We share data only with payment processors, telecom and biller partners necessary to
            complete your transactions, and regulators where legally required. We do not sell your
            personal data.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">4. Data security</h2>
          <p className="mt-2">
            We apply encryption in transit and at rest, mandatory transaction PINs, and continuous
            monitoring to protect your account and funds.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-ink">5. Your rights</h2>
          <p className="mt-2">
            You may request access to, correction of, or deletion of your personal data, subject to
            our regulatory record-keeping obligations, by contacting support.
          </p>
        </section>
      </div>
    </div>
  );
}
