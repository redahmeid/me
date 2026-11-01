import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { isExternal } from "@/lib/format";

export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`} {...props} />;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted ${className}`}>{children}</p>
  );
}

/** Large page title block used at the top of inner pages. */
export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <header className="border-b border-line">
      <Container className="pb-12 pt-14 sm:pb-16 sm:pt-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-4xl font-serif text-[2.6rem] font-normal leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl">
          {title}
        </h1>
        {lead ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">{lead}</p> : null}
      </Container>
    </header>
  );
}

/** Two-column section: label on the left, content on the right (stacks on mobile). */
export function Section({
  label,
  title,
  children,
  className = "",
  id,
}: {
  label: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`border-b border-line ${className}`}>
      <Container className="grid gap-8 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.6fr)] lg:gap-16">
        <div>
          <Eyebrow className="lg:sticky lg:top-24">{label}</Eyebrow>
        </div>
        <div className="min-w-0">
          {title ? (
            <h2 className="mb-8 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-[-0.015em] text-ink sm:text-4xl">
              {title}
            </h2>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={`h-[0.9em] w-[0.9em] ${className}`} fill="none">
      <path d="M3 8h9.5M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={`h-[0.85em] w-[0.85em] ${className}`} fill="none">
      <path d="M5 11 11 5M6 4.5h5.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Text link with an arrow. Handles internal and external hrefs. */
export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const external = isExternal(href);
  const cls = `group inline-flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-accent-strong ${className}`;
  const icon = external ? (
    <ExternalArrow className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  ) : (
    <Arrow className="transition-transform group-hover:translate-x-0.5" />
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {icon}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {icon}
    </Link>
  );
}

type ButtonVariant = "primary" | "secondary" | "light" | "ghost-light";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink text-paper hover:bg-accent-strong",
  secondary: "border border-line-strong text-ink hover:border-ink hover:bg-paper-raised",
  light: "bg-night-ink text-night hover:bg-white",
  "ghost-light": "border border-white/30 text-night-ink hover:border-white/70 hover:bg-white/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const cls = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-[0.95rem] font-medium transition-colors ${buttonStyles[variant]} ${className}`;
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
