import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-4 font-serif text-5xl text-ink sm:text-6xl">Page not found.</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
        That page doesn&rsquo;t exist, or it moved when this site did. Try the writing index or head back home.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/blog" variant="secondary">
          Writing
        </ButtonLink>
      </div>
    </Container>
  );
}
