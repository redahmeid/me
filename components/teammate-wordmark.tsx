import Image from "next/image";

/** TeamMate icon + wordmark in its brand colours. `tone="light"` for dark backgrounds. */
export function TeamMateWordmark({ tone = "dark", size = "md" }: { tone?: "dark" | "light"; size?: "md" | "lg" }) {
  const icon = size === "lg" ? 34 : 24;
  const tile = size === "lg" ? "h-12 w-12 rounded-xl" : "h-9 w-9 rounded-lg";
  return (
    <span className="inline-flex items-center gap-3">
      {/* White tile keeps the navy half of the icon visible on any background */}
      <span className={`grid shrink-0 place-items-center bg-white shadow-sm ring-1 ring-black/5 ${tile}`}>
        <Image src="/teammate/icon.svg" alt="" width={icon} height={icon} unoptimized />
      </span>
      <span
        className={`font-sans font-bold tracking-[-0.02em] ${size === "lg" ? "text-4xl" : "text-2xl"} ${
          tone === "light" ? "text-white" : "text-tm-navy dark:text-white"
        }`}
      >
        Team<span className="text-tm-orange">Mate</span>
      </span>
    </span>
  );
}
