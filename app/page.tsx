import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { teammate } from "@/content/teammate";
import { getAllPosts } from "@/lib/posts";
import { Hero } from "@/components/hero";
import { PostList } from "@/components/post-list";
import { Principles } from "@/components/principles";
import { TeamMateWordmark } from "@/components/teammate-wordmark";
import { Arrow, ArrowLink, ButtonLink, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const now = [
  {
    kicker: "Equal Experts",
    title: "Technology strategy & AI in the SDLC",
    body: "Helping organisations set technology strategy that adapts, and bring AI into how they design, build and run software.",
    href: "/work",
    cta: "My work",
  },
  {
    kicker: "TeamMate",
    title: "The grassroots football platform",
    body: `The club and team management app I founded, now used by ${teammate.stats[0].value} ${teammate.stats[0].label}.`,
    href: "/teammate",
    cta: "About TeamMate",
  },
  {
    kicker: "Writing",
    title: "Strategy, architecture and football",
    body: "Notes on technology leadership, API design and decision-making, plus the occasional attempt to predict the Premier League.",
    href: "/blog",
    cta: "Read the blog",
  },
];

export default function HomePage() {
  const latest = getAllPosts().slice(0, 3);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    jobTitle: site.roles[0].title,
    worksFor: { "@type": "Organization", name: site.roles[0].org, url: site.roles[0].href },
    founder: { "@type": "Organization", name: "TeamMate", url: teammate.links.website },
    sameAs: [site.social.linkedin, site.social.x],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />

      <Section label="Now" title="What I’m working on">
        <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {now.map((item) => (
            <li key={item.kicker} className="bg-paper">
              <Link href={item.href} className="group flex h-full flex-col p-6 transition-colors hover:bg-paper-raised">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">{item.kicker}</span>
                <span className="mt-3 font-serif text-[1.4rem] leading-snug text-ink">{item.title}</span>
                <span className="mt-3 flex-1 text-[0.97rem] leading-relaxed text-ink-soft">{item.body}</span>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {item.cta} <Arrow className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="How I think" title="Ideas I keep coming back to">
        <Principles />
      </Section>

      <section className="bg-tm-navy text-white">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
          <div>
            <TeamMateWordmark tone="light" />
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.015em] sm:text-5xl">{teammate.tagline}.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{teammate.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/teammate" variant="light">
                About TeamMate
              </ButtonLink>
              <ButtonLink href={teammate.links.website} variant="ghost-light">
                teammate.football
              </ButtonLink>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-4 border-t border-white/15 pt-8 lg:grid-cols-1 lg:gap-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            {teammate.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-white/70 sm:text-base">{s.label}</dt>
                <dd className="font-serif text-3xl text-white sm:text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Section label="Writing" title="Latest posts">
        <PostList posts={latest} />
        <div className="mt-8">
          <ArrowLink href="/blog">All writing</ArrowLink>
        </div>
      </Section>

      <section>
        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <h2 className="font-serif text-5xl leading-[1.02] tracking-[-0.02em] text-ink sm:text-7xl">
              Let&rsquo;s talk.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Technology strategy, AI in software delivery, TeamMate, or football. If it&rsquo;s on this site, I&rsquo;m happy to talk about it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <ButtonLink href={site.social.linkedin} variant="secondary">
                Connect on LinkedIn
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
