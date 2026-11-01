import Link from "next/link";
import { Suspense } from "react";
import { site } from "@/content/site";
import { Container } from "./ui";
import { NavLinks, NavLinksStatic } from "./nav-links";

export function SiteHeader() {
  return (
    <header className="relative z-40 border-b sm:sticky sm:top-0 border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <Container className="flex flex-col py-2 sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2.5 self-start font-serif text-[1.35rem] tracking-[-0.01em] text-ink sm:self-auto"
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-full bg-ink font-sans text-[0.62rem] font-semibold tracking-wide text-paper"
          >
            RH
          </span>
          {site.name}
        </Link>
        <nav aria-label="Main" className="sm:py-2">
          <Suspense fallback={<NavLinksStatic />}>
            <NavLinks />
          </Suspense>
        </nav>
      </Container>
    </header>
  );
}
