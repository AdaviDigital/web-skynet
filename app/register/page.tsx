"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { UserPlus } from "lucide-react";
import { apiFetch } from "@/lib/api";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const password = form.get("password");
    const confirm = form.get("confirmPassword");
    if (password !== confirm) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
    try {
      const res = await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          fullName: form.get("fullName"),
          email: form.get("email"),
          phone: form.get("phone"),
          password,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "We couldn't create your account. Please try again.");
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="container-page flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
        <div className="card-surface w-full max-w-md p-8 text-center">
          <h1 className="font-display text-2xl font-bold text-ink">Check your inbox</h1>
          <p className="mt-2 text-sm text-slate-500">
            We&apos;ve sent a verification link to your email. Verify your account, then sign in
            to fund your wallet.
          </p>
          <Link href="/login" className="btn-primary mt-6 inline-flex">
            Go to sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
      <div className="card-surface w-full max-w-md p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-deep/10 text-sky-deep">
          <UserPlus className="h-5 w-5" />
        </span>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink">Create your account</h1>
        <p className="mt-1 text-sm text-slate-500">It takes less than a minute.</p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div>
            <label htmlFor="fullName" className="text-sm font-medium text-ink">
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              required
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-deep"
              placeholder="Ada Okoro"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-deep"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-ink">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                required
                className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-deep"
                placeholder="080XXXXXXXX"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-ink">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-deep"
              placeholder="At least 8 characters"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-ink">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-deep"
              placeholder="Re-enter your password"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <p className="text-xs leading-relaxed text-slate-400">
            By creating an account, you agree to SkyNet&apos;s{" "}
            <Link href="/terms" className="underline">Terms of Service</Link> and{" "}
            <Link href="/privacy" className="underline">Privacy Policy</Link>.
          </p>
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-sky-deep">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
