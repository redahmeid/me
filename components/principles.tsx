import Link from "next/link";
import { work } from "@/content/work";
import { Arrow } from "./ui";

/** Four ideas from my writing, each linking to its post. */
export function Principles() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
      {work.principles.map((p, i) => (
        <li key={p.slug} className="bg-paper">
          <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col p-6 transition-colors hover:bg-paper-raised sm:p-8">
            <span className="font-mono text-xs text-ink-muted">0{i + 1}</span>
            <h3 className="mt-4 font-serif text-2xl leading-snug tracking-[-0.01em] text-ink">{p.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.body}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
              Read the post <Arrow className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
