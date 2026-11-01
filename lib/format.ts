const long = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const short = new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" });

/** "23 February 2021" */
export function formatDate(isoDate: string): string {
  return long.format(new Date(`${isoDate}T00:00:00Z`));
}

/** "Feb 2021" */
export function formatMonth(isoDate: string): string {
  return short.format(new Date(`${isoDate}T00:00:00Z`));
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}
