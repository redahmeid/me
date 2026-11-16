import { LOGO_COLORS, logoInner } from "./logo-shapes";

export { LOGO_COLORS };

/**
 * The four-corners logo. Letters use the current text colour; the corner colours come from
 * --corner-* tokens in globals.css (they switch for dark mode). Use tone="dark" on bands that
 * are dark in both themes, like the footer.
 * detail="simple" drops the small corner symbols for sizes under ~48px.
 */
export function LogoMark({
  className = "",
  detail = "full",
  tone,
  title,
}: {
  className?: string;
  detail?: "full" | "simple";
  tone?: "dark";
  title?: string;
}) {
  const colors =
    tone === "dark"
      ? { ink: "currentColor", ...LOGO_COLORS.dark }
      : {
          ink: "currentColor",
          strategy: "var(--corner-strategy)",
          tech: "var(--corner-tech)",
          family: "var(--corner-family)",
          football: "var(--corner-football)",
        };
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      // Static markup from our own shape definitions
      dangerouslySetInnerHTML={{ __html: logoInner(colors, detail) }}
    />
  );
}
