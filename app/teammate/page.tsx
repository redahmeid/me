import type { Metadata } from "next";
import { teammate } from "@/content/teammate";
import { AppleIcon, PlayIcon } from "@/components/icons";
import { TeamMateWordmark } from "@/components/teammate-wordmark";
import { ArrowLink, ButtonLink, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "TeamMate",
  description:
    "TeamMate is the grassroots football platform founded by Reda Hmeid: registrations, payments, fixtures, coaching and match day in one app.",
  alternates: { canonical: "/teammate" },
};

function StoreButton({ href, icon, small, label }: { href: string; icon: React.ReactNode; small: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-white/25 px-4 py-2 text-left text-white transition-colors hover:border-white/60 hover:bg-white/5"
    >
      {icon}
      <span className="leading-tight">
        <span className="block text-[0.7rem] text-white/70">{small}</span>
        <span className="block font-medium">{label}</span>
      </span>
    </a>
  );
}

export default function TeamMatePage() {
  return (
    <>
      <header className="relative isolate overflow-hidden bg-tm-navy text-white">
        {/* Halfway line and centre circle, echoing the TeamMate logo */}
        <svg
          aria-hidden="true"
          viewBox="0 0 600 600"
          className="pointer-events-none absolute -right-48 top-1/2 -z-10 hidden h-[40rem] w-[40rem] -translate-y-1/2 text-white/[0.07] md:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="300" cy="300" r="220" />
          <circle cx="300" cy="300" r="6" fill="currentColor" />
          <path d="M-400 300H1000" />
        </svg>
        <Container className="pb-14 pt-14 sm:pb-20 sm:pt-20">
          <TeamMateWordmark tone="light" size="lg" />
          <h1 className="mt-8 max-w-3xl font-serif text-[2.6rem] font-normal leading-[1.05] tracking-[-0.02em] sm:text-6xl">
            {teammate.tagline}.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">{teammate.summary}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={teammate.links.website} variant="light">
              Visit teammate.football
            </ButtonLink>
            <StoreButton href={teammate.links.appStore} icon={<AppleIcon className="h-6 w-6" />} small="Download on the" label="App Store" />
            <StoreButton href={teammate.links.googlePlay} icon={<PlayIcon className="h-5 w-5" />} small="Get it on" label="Google Play" />
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-white/15 pt-8 sm:gap-8">
            {teammate.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-white/70 sm:text-base">{s.label}</dt>
                <dd className="font-serif text-3xl sm:text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <Section label="My role" title="Replacing the admin chaos">
        <p className="mb-8 max-w-2xl font-serif text-[1.2rem] leading-[1.75] text-ink-soft">{teammate.myRole}</p>
        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
          <div className="bg-paper p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">Before TeamMate</p>
            <ul className="mt-4 space-y-2 text-ink-muted">
              {teammate.before.map((b) => (
                <li key={b} className="line-through decoration-ink-muted/50">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-paper-raised p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-tm-orange">With TeamMate</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-ink">{teammate.after}</p>
          </div>
        </div>
      </Section>

      <Section label="Who it's for" title="Built for everyone at the club">
        <div className="grid gap-6 lg:grid-cols-3">
          {teammate.audiences.map((a) => (
            <article key={a.name} className="flex flex-col rounded-xl border border-line bg-paper-raised p-6">
              <h3 className="font-serif text-2xl text-ink">{a.name}</h3>
              <p className="mt-2 text-ink-muted">{a.line}</p>
              <ul className="mt-5 space-y-3 border-t border-line pt-5 text-[0.95rem] leading-relaxed text-ink-soft">
                {a.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-tm-orange" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section label="In use">
        <figure className="rounded-xl bg-tm-navy p-8 text-white sm:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-tm-orange">Case study</p>
          <p className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">{teammate.caseStudy.club}</p>
          <figcaption className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{teammate.caseStudy.detail}</figcaption>
        </figure>
      </Section>

      <Section label="Recently shipped" title="Shipping almost every week">
        <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {teammate.recentlyShipped.map((r) => (
            <li key={r.version} className="bg-paper p-6">
              <p className="font-mono text-xs text-ink-muted">v{r.version}</p>
              <h3 className="mt-2 font-serif text-xl text-ink">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{r.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Under the hood" title="Native apps, a web platform and AI where it helps">
        <ul className="flex flex-wrap gap-2">
          {teammate.stack.map((t) => (
            <li key={t} className="rounded-full border border-line-strong px-4 py-2 font-mono text-[0.8rem] text-ink-soft">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <ArrowLink href={teammate.links.website}>teammate.football</ArrowLink>
          <ArrowLink href={teammate.links.support}>TeamMate help centre</ArrowLink>
          <ArrowLink href="/contact">Talk to me about TeamMate</ArrowLink>
        </div>
      </Section>
    </>
  );
}
