import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, serviceBySlug } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = serviceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceBySlug(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(77,163,255,0.25),transparent_45%)]" />
        <div className="container-page relative py-16 sm:py-20">
          <span className="eyebrow rounded-full bg-white/10 px-3 py-1 text-sky-light">
            Services / {service.shortName}
          </span>
          <div className="mt-5 flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sky-light">
              <service.icon className="h-7 w-7" />
            </span>
            <div>
              <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">{service.name}</h1>
              <p className="mt-2 max-w-xl text-white/70">{service.tagline}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="btn-primary">
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="btn-ghost">
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">About this service</h2>
          <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>

          <h3 className="mt-8 font-display text-lg font-semibold text-ink">Key features</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-brand" />
                {f}
              </li>
            ))}
          </ul>

          {service.providers && (
            <>
              <h3 className="mt-8 font-display text-lg font-semibold text-ink">Supported providers</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.providers.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="card-surface h-fit p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Quick action</p>
          <h3 className="mt-2 font-display text-lg font-semibold text-ink">Try {service.shortName} now</h3>
          <p className="mt-1 text-sm text-slate-500">Sign in to your wallet to complete this transaction.</p>
          <Link href="/login" className="btn-primary mt-5 w-full">
            Sign in to continue
          </Link>
          <Link href="/register" className="btn-secondary mt-2.5 w-full">
            Create a free account
          </Link>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="container-page">
          <h2 className="font-display text-xl font-bold text-ink">Explore other services</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {others.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card-surface p-5 hover:-translate-y-1 transition">
                <s.icon className="h-5 w-5 text-sky-deep" />
                <p className="mt-3 font-semibold text-ink">{s.name}</p>
                <p className="mt-1 text-sm text-slate-500">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
