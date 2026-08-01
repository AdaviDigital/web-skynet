import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips on digital payments, telecommunications, fintech and affiliate marketing from the SkyNet team.",
};

export default function BlogPage() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Blog</span>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          Money-saving tips and fintech insights
        </h1>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card-surface p-6 hover:-translate-y-1 transition">
            <span className="eyebrow">{post.category}</span>
            <h2 className="mt-2 font-display text-lg font-semibold text-ink">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{post.excerpt}</p>
            <p className="mt-4 text-xs text-slate-400">
              {new Date(post.date).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
