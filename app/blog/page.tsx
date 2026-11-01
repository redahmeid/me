import type { Metadata } from "next";
import { CATEGORIES, getAllPosts } from "@/lib/posts";
import { BlogIndex } from "@/components/blog-index";
import { RssIcon } from "@/components/icons";
import { Container, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Writing",
  description: "Reda Hmeid on technology strategy, architecture, API design, leadership and football.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes on technology, leadership and football."
        lead="Strategy, architecture and how teams make decisions, plus football, which I think about almost as much."
      />
      <Container className="py-12 sm:py-16">
        <BlogIndex posts={posts} categories={CATEGORIES} />
        <p className="mt-10">
          <a href="/feed.xml" className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink">
            <RssIcon className="h-4 w-4" /> Subscribe via RSS
          </a>
        </p>
      </Container>
    </>
  );
}
