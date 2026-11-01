// Site-wide details: name, headline, roles, links and navigation.
// Edit this file to change what appears in the header, footer, hero and metadata.

export const site = {
  name: "Reda Hmeid",
  // Used for canonical URLs, the sitemap and RSS. Change when the domain is set up in Vercel.
  url: "https://www.hmeid.com",
  description:
    "Reda Hmeid: technology strategist, engineering leader and founder of TeamMate. Head of Technology Strategy & AI in the SDLC at Equal Experts.",
  locale: "en_GB",

  hero: {
    eyebrow: "Technology strategy · Engineering leadership · AI",
    lead: "I lead technology and engineering functions to make change that brings value to users, customers and organisations.",
  },

  roles: [
    {
      title: "Head of Technology Strategy & AI in the SDLC",
      org: "Equal Experts",
      href: "https://www.equalexperts.com",
    },
    {
      title: "Founder",
      org: "TeamMate",
      href: "/teammate",
    },
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/redahmeid",
    x: "https://x.com/redahmeid",
  },

  nav: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/teammate", label: "TeamMate" },
    { href: "/blog", label: "Writing" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
