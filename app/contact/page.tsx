import type { Metadata } from "next";
import { site } from "@/content/site";
import { teammate } from "@/content/teammate";
import { LinkedInIcon, XIcon } from "@/components/icons";
import { Container, ExternalArrow, PageHeader } from "@/components/ui";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Reda Hmeid about technology strategy, AI in software delivery, TeamMate or football.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        lead="Technology strategy, AI in software delivery, speaking, TeamMate or football: send a message and I'll reply by email."
      />
      <Container className="grid gap-14 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-20">
        <div className="relative">
          <ContactForm />
        </div>

        <aside className="space-y-10">
          <div>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted">Elsewhere</p>
            <ul className="mt-4 grid gap-3">
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-line p-4 transition-colors hover:border-ink hover:bg-paper-raised"
                >
                  <LinkedInIcon className="h-5 w-5 text-accent" />
                  <span className="flex-1">
                    <span className="block font-medium text-ink">LinkedIn</span>
                    <span className="block text-sm text-ink-muted">The quickest way to reach me</span>
                  </span>
                  <ExternalArrow className="text-ink-muted" />
                </a>
              </li>
              <li>
                <a
                  href={site.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-line p-4 transition-colors hover:border-ink hover:bg-paper-raised"
                >
                  <XIcon className="h-5 w-5 text-accent" />
                  <span className="flex-1">
                    <span className="block font-medium text-ink">X</span>
                    <span className="block text-sm text-ink-muted">@redahmeid</span>
                  </span>
                  <ExternalArrow className="text-ink-muted" />
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-paper-sunken p-5">
            <p className="font-medium text-ink">Need help with the TeamMate app?</p>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">
              For account, payment or app questions, the{" "}
              <a href={teammate.links.support} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
                TeamMate help centre
              </a>{" "}
              is the fastest route.
            </p>
          </div>
        </aside>
      </Container>
    </>
  );
}
