import Link from "next/link";
import { CATEGORIES, type PostMeta } from "@/lib/post-types";
import { formatMonth } from "@/lib/format";

/** Editorial index of posts: date, title + summary, category. */
export function PostList({ posts, showSummary = true }: { posts: PostMeta[]; showSummary?: boolean }) {
  return (
    <ul className="border-t border-line">
      {posts.map((post) => (
        <li key={post.slug} className="border-b border-line">
          <Link
            href={`/blog/${post.slug}`}
            className="group grid gap-2 py-6 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:gap-8 sm:py-7"
          >
            <time dateTime={post.date} className="pt-1 font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">
              {formatMonth(post.date)}
            </time>
            <div className="min-w-0">
              <h3 className="font-serif text-[1.45rem] leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-accent">
                {post.title}
              </h3>
              {showSummary && post.summary ? (
                <p className="mt-2 line-clamp-2 max-w-2xl text-[0.98rem] leading-relaxed text-ink-muted">{post.summary}</p>
              ) : null}
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted sm:pt-1.5 sm:text-right">
              {CATEGORIES[post.category]} · {post.readingMinutes} min
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
