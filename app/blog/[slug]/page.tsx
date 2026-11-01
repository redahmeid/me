import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import headshot from "@/assets/reda-hmeid-headshot.jpg";
import { site } from "@/content/site";
import { CATEGORIES, getAdjacentPosts, getAllPosts, getPost } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { Arrow, Container } from "@/components/ui";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
      authors: [site.name],
      tags: post.tags,
    },
  };
}

// Every published post is prerendered via generateStaticParams, so navigation to
// real posts is instant anyway. Letting this route block means an unknown slug
// hits notFound() before streaming starts and returns a proper 404 status.
export const instant = false;

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { newer, older } = getAdjacentPosts(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    url: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Person", name: site.name, url: site.url },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <header className="border-b border-line">
        <Container className="pb-12 pt-10 sm:pb-16 sm:pt-14">
          <Link href="/blog" className="group inline-flex min-h-11 items-center gap-1.5 text-sm text-ink-muted hover:text-ink">
            <Arrow className="rotate-180 transition-transform group-hover:-translate-x-0.5" /> All writing
          </Link>
          <div className="mx-auto mt-6 max-w-[42rem]">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-muted">
              {CATEGORIES[post.category]} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
            </p>
            <h1 className="mt-4 font-serif text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3.4rem]">
              {post.title}
            </h1>
            {post.summary ? <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">{post.summary}</p> : null}
          </div>
        </Container>
      </header>

      <Container className="py-12 sm:py-16">
        <div className="prose mx-auto max-w-[42rem]" dangerouslySetInnerHTML={{ __html: post.html }} />

        <footer className="mx-auto mt-16 max-w-[42rem]">
          {post.tags.length ? (
            <ul className="flex flex-wrap gap-2" aria-label="Tags">
              {post.tags.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-muted">
                  {t}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-10 flex items-center gap-4 rounded-xl border border-line bg-paper-raised p-5">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-paper-sunken">
              <Image src={headshot} alt="" fill sizes="56px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-ink">{site.name}</p>
              <p className="text-sm leading-relaxed text-ink-muted">
                {site.roles[0].title} at {site.roles[0].org}. Founder of{" "}
                <Link href="/teammate" className="text-accent hover:underline">
                  TeamMate
                </Link>
                .
              </p>
            </div>
          </div>

          <nav aria-label="More posts" className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {older ? (
              <Link href={`/blog/${older.slug}`} className="group bg-paper p-5 transition-colors hover:bg-paper-raised">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">Older</span>
                <span className="mt-2 block font-serif text-lg leading-snug text-ink group-hover:text-accent">{older.title}</span>
              </Link>
            ) : (
              <span className="hidden bg-paper sm:block" />
            )}
            {newer ? (
              <Link href={`/blog/${newer.slug}`} className="group bg-paper p-5 text-right transition-colors hover:bg-paper-raised">
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">Newer</span>
                <span className="mt-2 block font-serif text-lg leading-snug text-ink group-hover:text-accent">{newer.title}</span>
              </Link>
            ) : (
              <span className="hidden bg-paper sm:block" />
            )}
          </nav>
        </footer>
      </Container>
    </article>
  );
}
