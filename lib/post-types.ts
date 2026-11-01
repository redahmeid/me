// Shared by server and client components; keep free of Node imports.

export const CATEGORIES = {
  technology: "Technology",
  football: "Football",
} as const;

export type Category = keyof typeof CATEGORIES;

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: Category;
  summary: string;
  tags: string[];
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };
