"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { apiFetch } from "@/lib/api";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    try {
      const res = await apiFetch("/support/contact", {
        method: "POST",
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">We&apos;re here to help</h1>
        <p className="mt-3 text-slate-500">Reach out any way that works for you.</p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <div className="card-surface flex items-start gap-3 p-5">
            <Phone className="mt-0.5 h-5 w-5 text-sky-deep" />
            <div>
              <p className="text-sm font-semibold text-ink">Phone</p>
              <a href="tel:+2348062177435" className="text-sm text-slate-500">+234 806 217 7435</a>
            </div>
          </div>
          <div className="card-surface flex items-start gap-3 p-5">
            <MessageCircle className="mt-0.5 h-5 w-5 text-emerald-brand" />
            <div>
              <p className="text-sm font-semibold text-ink">WhatsApp</p>
              <a href="https://wa.me/2348062177435" className="text-sm text-slate-500">+234 806 217 7435</a>
            </div>
          </div>
          <div className="card-surface flex items-start gap-3 p-5">
            <Mail className="mt-0.5 h-5 w-5 text-sky-deep" />
            <div>
              <p className="text-sm font-semibold text-ink">Email</p>
              <a href="mailto:skynetconnect8@gmail.com" className="text-sm text-slate-500">skynetconnect8@gmail.com</a>
            </div>
          </div>
          <div className="card-surface flex items-start gap-3 p-5">
            <MapPin className="mt-0.5 h-5 w-5 text-sky-deep" />
            <div>
              <p className="text-sm font-semibold text-ink">Office</p>
              <p className="text-sm text-slate-500">Ikorodu, Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card-surface space-y-4 p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-ink">Full name</label>
              <input id="name" name="name" required className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-deep" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink">Email</label>
              <input id="email" name="email" type="email" required className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-deep" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-ink">Message</label>
            <textarea id="message" name="message" required rows={5} className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-deep" />
          </div>
          {status === "sent" && <p className="text-sm text-emerald-brand">Message sent — we&apos;ll get back to you shortly.</p>}
          {status === "error" && <p className="text-sm text-red-600">Couldn&apos;t send your message. Try WhatsApp or email instead.</p>}
          <button type="submit" disabled={status === "loading"} className="btn-primary w-full disabled:opacity-60">
            {status === "loading" ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
}
