import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./ui";
import { LinkedInIcon, RssIcon, XIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-night text-night-muted">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl text-night-ink">{site.name}</p>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed">
            {site.roles.map((r) => `${r.title}, ${r.org}`).join(". ")}.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-night-muted/80">Pages</p>
          <ul className="mt-4 grid gap-2 text-[0.95rem]">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-night-ink/90 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-night-muted/80">Elsewhere</p>
          <ul className="mt-4 grid gap-2 text-[0.95rem]">
            <li>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-night-ink/90 hover:text-white">
                <LinkedInIcon className="h-4 w-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={site.social.x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-night-ink/90 hover:text-white">
                <XIcon className="h-4 w-4" /> X
              </a>
            </li>
            <li>
              <a href="/feed.xml" className="inline-flex items-center gap-2 text-night-ink/90 hover:text-white">
                <RssIcon className="h-4 w-4" /> RSS feed
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-night-line py-6 text-sm">
        <p>© {site.name}</p>
      </Container>
    </footer>
  );
}
