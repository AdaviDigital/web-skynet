import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="container-page max-w-3xl py-16">
      <span className="eyebrow">{post.category}</span>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{post.title}</h1>
      <p className="mt-3 text-sm text-slate-400">
        {new Date(post.date).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <p className="mt-8 text-lg leading-relaxed text-slate-600">{post.excerpt}</p>
      <p className="mt-4 leading-relaxed text-slate-500">
        This article is a placeholder outline for the SkyNet content team to expand with the
        full write-up, data, and screenshots once editorial content is ready.
      </p>
      <Link href="/blog" className="btn-secondary mt-10 w-fit">
        Back to blog
      </Link>
    </article>
  );
}
