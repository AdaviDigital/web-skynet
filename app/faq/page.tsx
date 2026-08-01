"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filtered = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container-page max-w-3xl py-16">
      <div className="text-center">
        <span className="eyebrow">Help center</span>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          Frequently asked questions
        </h1>
      </div>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search FAQs…"
        className="mt-8 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-sky-deep"
      />

      <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
        {filtered.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={f.question}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-medium text-ink">{f.question}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <p className="px-5 pb-4 text-sm text-slate-500">{f.answer}</p>}
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="px-5 py-8 text-center text-sm text-slate-400">No results for &ldquo;{query}&rdquo;.</p>
        )}
      </div>
    </div>
  );
}
