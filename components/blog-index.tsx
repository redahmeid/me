"use client";

import { useState } from "react";
import type { Category, PostMeta } from "@/lib/post-types";
import { PostList } from "./post-list";

type Filter = "all" | Category;

export function BlogIndex({ posts, categories }: { posts: PostMeta[]; categories: Record<Category, string> }) {
  const [filter, setFilter] = useState<Filter>("all");
  const options: { value: Filter; label: string; count: number }[] = [
    { value: "all", label: "All", count: posts.length },
    ...(Object.keys(categories) as Category[]).map((c) => ({
      value: c,
      label: categories[c],
      count: posts.filter((p) => p.category === c).length,
    })),
  ];
  const visible = filter === "all" ? posts : posts.filter((p) => p.category === filter);

  return (
    <div>
      <div role="group" aria-label="Filter posts by topic" className="mb-8 flex flex-wrap gap-2">
        {options.map((o) => {
          const active = filter === o.value;
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(o.value)}
              className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm transition-colors ${
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-line-strong text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              {o.label}
              <span className={`font-mono text-xs ${active ? "text-paper/70" : "text-ink-muted"}`}>{o.count}</span>
            </button>
          );
        })}
      </div>
      <PostList posts={visible} />
    </div>
  );
}
