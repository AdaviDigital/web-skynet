import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore every payment service on SkyNet — airtime, data, bills, education, betting, government fees and more.",
};

export default function ServicesPage() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">All services</span>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          One wallet for every payment you make
        </h1>
        <p className="mt-3 text-slate-500">
          Tap into any service below to see supported providers, features and pricing.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <ServiceCard key={s.slug} service={s} index={i} />
        ))}
      </div>
    </div>
  );
}
