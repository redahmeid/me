import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { renderMarkdown } from "./markdown";
import { CATEGORIES, type Category, type Post, type PostMeta } from "./post-types";

// Blog posts are Markdown files in content/blog. The filename is the URL slug.
// Reads are synchronous so pages prerender at build time.

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export { CATEGORIES };
export type { Category, Post, PostMeta };

function toIsoDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

function readPost(slug: string): (PostMeta & { content: string; draft: boolean }) | null {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const words = content.split(/\s+/).filter(Boolean).length;
  const category: Category = data.category in CATEGORIES ? data.category : "technology";

  return {
    slug,
    title: String(data.title ?? slug),
    date: toIsoDate(data.date),
    category,
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingMinutes: Math.max(1, Math.round(words / 230)),
    draft: data.draft === true,
    content,
  };
}

const showDrafts = process.env.NODE_ENV === "development";

function toMeta(p: PostMeta): PostMeta {
  const { slug, title, date, category, summary, tags, readingMinutes } = p;
  return { slug, title, date, category, summary, tags, readingMinutes };
}

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => readPost(f.replace(/\.md$/, "")))
    .filter((p): p is NonNullable<typeof p> => p !== null && (showDrafts || !p.draft))
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(toMeta);
}

export function getPost(slug: string): Post | null {
  const post = readPost(slug);
  if (!post || (post.draft && !showDrafts)) return null;
  return { ...toMeta(post), html: renderMarkdown(post.content) };
}

export function getAdjacentPosts(slug: string) {
  const posts = getAllPosts();
  const i = posts.findIndex((p) => p.slug === slug);
  return {
    newer: i > 0 ? posts[i - 1] : null,
    older: i >= 0 && i < posts.length - 1 ? posts[i + 1] : null,
  };
}
