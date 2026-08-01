"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { ShieldCheck } from "lucide-react";
import { apiFetch } from "@/lib/api";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    try {
      const res = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          identifier: form.get("identifier"),
          password: form.get("password"),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Could not sign you in. Check your details and try again.");
      }
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-page flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
      <div className="card-surface w-full max-w-md p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-deep/10 text-sky-deep">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink">Welcome back</h1>
        <p className="mt-1 text-sm text-slate-500">Sign in to access your SkyNet wallet.</p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div>
            <label htmlFor="identifier" className="text-sm font-medium text-ink">
              Email or phone number
            </label>
            <input
              id="identifier"
              name="identifier"
              required
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-deep"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-ink">
                Password
              </label>
              <Link href="/contact" className="text-xs font-medium text-sky-deep">
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-deep"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          New to SkyNet?{" "}
          <Link href="/register" className="font-semibold text-sky-deep">
            Create a free account
          </Link>
        </p>
      </div>
    </div>
  );
}
