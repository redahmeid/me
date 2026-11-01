import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

type HastNode = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

// Open external links in a new tab and lazy-load images.
function rehypeLinksAndImages() {
  return (tree: HastNode) => {
    const walk = (node: HastNode) => {
      if (node.type === "element") {
        const props = (node.properties ??= {});
        if (node.tagName === "a" && typeof props.href === "string" && /^https?:\/\//.test(props.href)) {
          props.target = "_blank";
          props.rel = ["noopener", "noreferrer"];
        }
        if (node.tagName === "img") {
          props.loading = "lazy";
          props.decoding = "async";
        }
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeLinksAndImages)
  .use(rehypeStringify);

// Synchronous on purpose: lets blog pages prerender as static HTML.
export function renderMarkdown(markdown: string): string {
  return String(processor.processSync(markdown));
}
