import type { Metadata } from "next";
import { ShieldCheck, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "SkyNet is Nigeria's trusted digital payment and VTU platform.",
};

const values = [
  { icon: Zap, title: "Speed", body: "Most deliveries complete in seconds, not minutes." },
  { icon: ShieldCheck, title: "Security", body: "Bank-level encryption and continuous fraud monitoring on every transaction." },
  { icon: Users, title: "Access", body: "Affordable pricing for everyday users, and real income for resellers and affiliates." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-ink py-20 text-white">
        <div className="container-page max-w-2xl">
          <span className="eyebrow rounded-full bg-white/10 px-3 py-1 text-sky-light">About SkyNet</span>
          <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Your trusted digital payment &amp; VTU platform
          </h1>
          <p className="mt-4 text-white/70">
            SkyNet is a Nigerian telecommunications and digital payment platform offering
            affordable mobile data, airtime recharge, utility bill payments, TV subscriptions,
            education payments, internet subscriptions, betting wallet funding, government
            payments, reseller services, affiliate programs, APIs, and business solutions.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="card-surface p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-deep/10 text-sky-deep">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">{v.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
