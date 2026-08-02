"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { apiFetch } from "@/lib/api";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setLoading(false);
      setSuccess(false);
      setMessage("Invalid verification link.");
      return;
    }

    verifyEmail(token);
  }, [searchParams]);

  async function verifyEmail(token: string) {
    try {
      const res = await apiFetch(
        `/auth/verify-email?token=${encodeURIComponent(token)}`,
        {
          method: "GET",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Email verification failed.");
      }

      setSuccess(true);
      setMessage(
        data.message || "Your email has been verified successfully."
      );
    } catch (error) {
      setSuccess(false);
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to verify your email."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-page flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
      <div className="card-surface w-full max-w-md p-8 text-center">

        {loading ? (
          <>
            <Loader2 className="mx-auto h-14 w-14 animate-spin text-sky-deep" />
            <h1 className="mt-6 font-display text-2xl font-bold text-ink">
              Verifying Email
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              Please wait while we verify your email address...
            </p>
          </>
        ) : success ? (
          <>
            <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-600" />

            <h1 className="mt-6 font-display text-2xl font-bold text-ink">
              Email Verified 🎉
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              {message}
            </p>

            <Link
              href="/login"
              className="btn-primary mt-8 inline-flex"
            >
              Continue to Sign In
            </Link>
          </>
        ) : (
          <>
            <XCircle className="mx-auto h-16 w-16 text-red-600" />

            <h1 className="mt-6 font-display text-2xl font-bold text-ink">
              Verification Failed
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              {message}
            </p>

            <div className="mt-8 flex justify-center gap-3">
              <Link
                href="/register"
                className="btn-secondary"
              >
                Register Again
              </Link>

              <Link
                href="/login"
                className="btn-primary"
              >
                Sign In
              </Link>
            </div>
          </>
        )}

      </div>
    </div>
  );
}