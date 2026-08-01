import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-surface group animate-rise flex flex-col gap-4 p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(11,95,255,0.25)]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-deep/10 text-sky-deep">
          <service.icon className="h-5 w-5" />
        </span>
        <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-sky-deep" />
      </div>
      <div>
        <h3 className="font-display text-base font-semibold text-ink">{service.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">{service.tagline}</p>
      </div>
    </Link>
  );
}
