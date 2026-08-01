import type { Metadata } from "next";
import Link from "next/link";
import {
  Wallet,
  ArrowDownToLine,
  ArrowUpRight,
  Bell,
  Smartphone,
  Wifi,
  Zap,
  Tv,
  Gift,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

const quickServices = [
  { label: "Airtime", href: "/services/airtime", icon: Smartphone },
  { label: "Data", href: "/services/data", icon: Wifi },
  { label: "Electricity", href: "/services/electricity", icon: Zap },
  { label: "Cable TV", href: "/services/cable-tv", icon: Tv },
  { label: "Gift Cards", href: "/services/gift-cards", icon: Gift },
];

const transactions = [
  { id: "TXN-88213", label: "MTN Data — 5GB", amount: -2500, status: "Delivered", date: "Today, 9:41 AM" },
  { id: "TXN-88190", label: "IKEDC Electricity Token", amount: -8000, status: "Delivered", date: "Today, 8:02 AM" },
  { id: "TXN-88144", label: "Wallet funding — Bank Transfer", amount: 20000, status: "Successful", date: "Yesterday, 6:14 PM" },
  { id: "TXN-88090", label: "GOtv Max Renewal", amount: -6300, status: "Processing", date: "Yesterday, 11:20 AM" },
  { id: "TXN-88052", label: "Airtel Airtime", amount: -1000, status: "Delivered", date: "2 days ago" },
];

function statusColor(status: string) {
  if (status === "Processing") return "text-amber-brand";
  if (status === "Failed") return "text-red-600";
  return "text-emerald-brand";
}

export default function DashboardPage() {
  return (
    <div className="container-page py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Welcome back,</p>
          <h1 className="font-display text-2xl font-bold text-ink">Ada Okoro</h1>
        </div>
        <button className="relative rounded-full border border-slate-200 p-2.5">
          <Bell className="h-5 w-5 text-slate-500" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-amber-brand" />
        </button>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl bg-ink p-8 text-white">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-white/70">
              <Wallet className="h-4 w-4" /> Wallet balance
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">Tier 2 verified</span>
          </div>
          <p className="mt-4 font-display text-4xl font-bold">₦48,250.00</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="btn-primary !bg-white !text-ink hover:!bg-slate-100">
              <ArrowDownToLine className="h-4 w-4" /> Fund wallet
            </button>
            <button className="btn-ghost">
              <ArrowUpRight className="h-4 w-4" /> Transfer
            </button>
          </div>
        </div>

        <div className="card-surface p-6">
          <p className="flex items-center gap-2 text-sm font-semibold text-ink">
            <TrendingUp className="h-4 w-4 text-emerald-brand" /> This month
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Total spent</span>
              <span className="font-semibold text-ink">₦64,300</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Cashback earned</span>
              <span className="font-semibold text-emerald-brand">₦1,180</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Referral earnings</span>
              <span className="font-semibold text-ink">₦0</span>
            </div>
          </div>
          <Link href="/affiliate" className="btn-secondary mt-5 w-full text-sm">
            Start earning referrals
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold text-ink">Quick services</h2>
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
          {quickServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="card-surface flex flex-col items-center gap-2 py-5 text-center hover:-translate-y-0.5 transition"
            >
              <s.icon className="h-5 w-5 text-sky-deep" />
              <span className="text-xs font-medium text-slate-600">{s.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink">Recent transactions</h2>
          <button className="text-sm font-medium text-sky-deep">View all</button>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-5 py-3 font-medium">Transaction</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 text-right font-medium">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td className="px-5 py-3.5">
                    <p className="font-medium text-ink">{t.label}</p>
                    <p className="text-xs text-slate-400">{t.id}</p>
                  </td>
                  <td className="px-5 py-3.5 text-slate-500">{t.date}</td>
                  <td className={`px-5 py-3.5 font-medium ${statusColor(t.status)}`}>{t.status}</td>
                  <td
                    className={`px-5 py-3.5 text-right font-semibold ${
                      t.amount < 0 ? "text-ink" : "text-emerald-brand"
                    }`}
                  >
                    {t.amount < 0 ? "-" : "+"}₦{Math.abs(t.amount).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
