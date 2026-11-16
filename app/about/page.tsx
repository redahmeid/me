import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import portrait from "@/assets/reda-hmeid.jpg";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { ArrowLink, ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { LogoMark } from "@/components/logo";
import { CORNERS } from "@/components/logo-shapes";

export const metadata: Metadata = {
  title: "About",
  description: "About Reda Hmeid: professional background, life outside work, and the books that shaped his thinking.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-line">
        <Container className="grid gap-10 pb-12 pt-14 sm:pb-16 sm:pt-20 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div>
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-4 font-serif text-[2.6rem] font-normal leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl">
              Technologist, founder and lifelong football fan.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">{about.intro}</p>
          </div>
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl bg-paper-sunken lg:justify-self-end">
            <Image
              src={portrait}
              alt="Reda Hmeid"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 24rem, 100vw"
              className="object-cover object-[4%_20%]"
            />
          </div>
        </Container>
      </header>

      <Section label="Four corners" title={about.fourCorners.intro}>
        <div className="grid items-center gap-10 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
          <LogoMark title="RH logo with four corners" className="h-44 w-44 text-ink sm:h-52 sm:w-52" />
          <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {CORNERS.map((c) => (
              <li key={c.key} className="bg-paper p-5">
                <p className="flex items-center gap-2 font-medium text-ink">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-sm" style={{ background: `var(--corner-${c.key})` }} />
                  {c.label}
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">{c.position}</span>
                </p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">{about.fourCorners.corners[c.key]}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section label="Professionally">
        <div className="max-w-2xl space-y-5 font-serif text-[1.2rem] leading-[1.75] text-ink-soft">
          {about.professional.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <ArrowLink href="/work">Experience and expertise</ArrowLink>
          <ArrowLink href={site.social.linkedin}>LinkedIn</ArrowLink>
        </div>
      </Section>

      <Section label="Personally">
        <div className="max-w-2xl space-y-5 font-serif text-[1.2rem] leading-[1.75] text-ink-soft">
          {about.personal.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {about.interests.map((i) => (
            <li key={i.label} className="bg-paper p-5">
              <p className="font-medium text-ink">{i.label}</p>
              <p className="mt-1 text-[0.95rem] text-ink-muted">{i.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Bookshelf" title="Books I keep recommending">
        <ul className="border-t border-line">
          {about.bookshelf.map((b) => {
            const inner = (
              <>
                <span className="font-serif text-xl text-ink transition-colors group-hover:text-accent">{b.title}</span>
                <span className="text-[0.95rem] text-ink-muted">{b.author}</span>
                <span className="text-[0.97rem] leading-relaxed text-ink-soft sm:col-start-2 sm:row-start-1 sm:row-span-2">
                  {b.note}
                </span>
              </>
            );
            return (
              <li key={b.title} className="border-b border-line">
                {b.href ? (
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-1 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-x-8"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="grid gap-1 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-x-8">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-sm text-ink-muted">
          More in{" "}
          <Link href="/blog/learning-never-stops" className="text-accent underline underline-offset-4">
            Learning never stops
          </Link>
          . Book links go to Bookshop.org, which supports independent bookshops.
        </p>
      </Section>

      <section>
        <Container className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-serif text-3xl leading-snug text-ink">Want to talk strategy, AI or football?</p>
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </Container>
      </section>
    </>
  );
}
