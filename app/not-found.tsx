import Link from "next/link";
import { Radio } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-16 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-deep/10 text-sky-deep">
        <Radio className="h-8 w-8" />
      </span>
      <p className="mt-6 font-display text-5xl font-bold text-ink">404</p>
      <h1 className="mt-2 font-display text-xl font-semibold text-ink">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-slate-500">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link href="/" className="btn-primary mt-7">
        Back to home
      </Link>
    </div>
  );
}
