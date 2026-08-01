import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Developers & API",
  description: "Integrate SkyNet's wallet, airtime, data, bills and payment services directly into your app with our REST API.",
};

const endpoints = [
  { method: "POST", path: "/v1/auth/token", desc: "Exchange your API key for a short-lived access token" },
  { method: "GET", path: "/v1/wallet/balance", desc: "Retrieve current wallet balance" },
  { method: "POST", path: "/v1/airtime/purchase", desc: "Buy airtime on any supported network" },
  { method: "POST", path: "/v1/data/purchase", desc: "Buy a data bundle on any supported network" },
  { method: "POST", path: "/v1/bills/pay", desc: "Pay electricity, cable TV or other bills" },
  { method: "GET", path: "/v1/transactions", desc: "List and filter your transaction history" },
  { method: "POST", path: "/v1/webhooks", desc: "Register a webhook URL for real-time transaction events" },
];

const sample = `curl -X POST https://api.skynetng.com/v1/airtime/purchase \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "network": "mtn",
    "phone": "080XXXXXXXX",
    "amount": 1000
  }'`;

export default function DevelopersPage() {
  return (
    <div>
      <section className="bg-ink py-20 text-white">
        <div className="container-page">
          <span className="eyebrow rounded-full bg-white/10 px-3 py-1 text-sky-light">API platform</span>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Build on top of SkyNet
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Programmatic access to wallet, airtime, data, bills and webhook events — everything
            you need to embed SkyNet into your own product.
          </p>
          <Link href="/register" className="btn-primary mt-7 inline-flex">
            Get your API key <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-bold text-ink">Core endpoints</h2>
          <div className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {endpoints.map((e) => (
              <div key={e.path} className="flex items-start gap-3 p-4">
                <span className="mt-0.5 rounded-md bg-sky-deep/10 px-2 py-1 text-xs font-bold text-sky-deep">
                  {e.method}
                </span>
                <div>
                  <p className="font-mono text-sm text-ink">{e.path}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Example request</h2>
          <div className="mt-5 overflow-hidden rounded-2xl bg-ink">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-white/60">
              <Terminal className="h-4 w-4" />
              <span className="text-xs">Terminal</span>
            </div>
            <pre className="overflow-x-auto p-5 text-xs leading-relaxed text-slate-200">
              <code>{sample}</code>
            </pre>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Authentication uses short-lived bearer tokens exchanged for your API key, plus
            HMAC-signed webhooks so you can verify every event server-side.
          </p>
        </div>
      </section>
    </div>
  );
}
