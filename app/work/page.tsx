import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { work } from "@/content/work";
import { Principles } from "@/components/principles";
import { ArrowLink, ButtonLink, Container, ExternalArrow, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Reda Hmeid's professional background: technology strategy, AI in the software development lifecycle, architecture and engineering leadership.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader eyebrow="Work" title="Technology strategy that responds to change." lead={work.intro} />

      <Section label="Focus" title="What I help with">
        <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {work.expertise.map((e, i) => (
            <li key={e.title} className={`bg-paper p-6 sm:p-8 ${i === work.expertise.length - 1 ? "sm:col-span-2" : ""}`}>
              <h3 className="font-serif text-2xl text-ink">{e.title}</h3>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{e.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Experience" title="Where I’ve done it">
        <ol className="relative border-l border-line-strong">
          {work.experience.map((role) => (
            <li key={role.org} className="relative pb-10 pl-7 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border-2 border-paper bg-accent" />
              {role.period ? (
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">{role.period}</p>
              ) : null}
              <h3 className="mt-1.5 font-serif text-2xl leading-snug text-ink">
                {role.href ? (
                  role.href.startsWith("/") ? (
                    <Link href={role.href} className="hover:text-accent">
                      {role.org}
                    </Link>
                  ) : (
                    <a href={role.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                      {role.org}
                      <ExternalArrow className="text-ink-muted" />
                    </a>
                  )
                ) : (
                  role.org
                )}
              </h3>
              <p className="mt-0.5 font-medium text-ink-soft">{role.role}</p>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink-muted">{role.summary}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <ArrowLink href={site.social.linkedin}>Full history on LinkedIn</ArrowLink>
        </div>
      </Section>

      <Section label="Principles" title="How I work">
        <Principles />
      </Section>

      <Section label="Published" title="Writing elsewhere">
        <ul className="border-t border-line">
          {work.publications.map((p) => (
            <li key={p.href} className="border-b border-line">
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="group grid gap-2 py-6 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
                <p className="pt-1 font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">
                  {p.outlet} · {p.date}
                </p>
                <div>
                  <h3 className="inline-flex items-start gap-1.5 font-serif text-[1.45rem] leading-snug text-ink transition-colors group-hover:text-accent">
                    {p.title}
                    <ExternalArrow className="mt-2 shrink-0 text-ink-muted" />
                  </h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-ink-muted">{p.summary}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ArrowLink href="/blog">Everything on this site</ArrowLink>
        </div>
      </Section>

      <section>
        <Container className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-serif text-3xl leading-snug text-ink">Working on something similar?</p>
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </Container>
      </section>
    </>
  );
}
