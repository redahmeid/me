import Image from "next/image";
import Link from "next/link";
import portrait from "@/assets/reda-hmeid.jpg";
import { site } from "@/content/site";
import { ButtonLink, Container } from "./ui";

/**
 * Home hero. On phones the photo sits on top and the text below it.
 * From `lg` up the photo fills the section and the text sits in the empty
 * blue-grey space on the right of the photo, over a darkening gradient.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-night text-night-ink">
      <div className="relative h-[min(62svh,540px)] sm:h-[min(70svh,620px)] lg:absolute lg:inset-0 lg:-z-10 lg:h-auto">
        <Image
          src={portrait}
          alt="Portrait of Reda Hmeid"
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[0%_12%] sm:object-[10%_15%] lg:object-[22%_18%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-night from-0% via-night/40 via-25% to-transparent to-50% lg:bg-linear-to-r lg:from-transparent lg:from-38% lg:via-night/60 lg:via-60% lg:to-night/92 lg:to-100%"
        />
      </div>

      <Container className="relative -mt-20 pb-14 sm:-mt-24 lg:mt-0 lg:flex lg:min-h-[min(84vh,780px)] lg:items-center lg:py-24">
        <div className="lg:ml-[54%] lg:max-w-[31rem]">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-night-ink/75">{site.hero.eyebrow}</p>
          <h1 className="mt-4 font-serif text-[3.4rem] font-normal leading-[0.95] tracking-[-0.025em] sm:text-7xl lg:text-[5.2rem]">
            {site.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-night-ink/90 sm:text-xl">{site.hero.lead}</p>

          <ul className="mt-7 grid gap-2.5 border-l border-white/25 pl-4 text-[0.95rem] text-night-ink/85">
            {site.roles.map((r) => (
              <li key={r.org}>
                {r.title},{" "}
                {r.href.startsWith("/") ? (
                  <Link href={r.href} className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                    {r.org}
                  </Link>
                ) : (
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                    {r.org}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="light">
              Get in touch
            </ButtonLink>
            <ButtonLink href="/blog" variant="ghost-light">
              Read my writing
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
