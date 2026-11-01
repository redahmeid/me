// The Work page: expertise, experience, principles and published writing.
// `period` is optional on roles; leave it as "" to hide it.

export const work = {
  intro:
    "I help organisations set technology strategy that survives contact with reality, adopt AI across the software lifecycle, and build engineering functions that deliver quickly, safely and predictably.",

  expertise: [
    {
      title: "Technology strategy",
      body: "Strategy as a living hypothesis rather than a five-year edict. Clear direction, the signals that show when it's wrong, and the rhythm to adapt.",
    },
    {
      title: "AI in the SDLC",
      body: "Bringing AI into how software is designed, built, tested and run, judged by delivery outcomes rather than demos.",
    },
    {
      title: "Architecture & APIs",
      body: "Evolutionary architecture, and APIs designed up front so they're easy to consume and never break the people using them.",
    },
    {
      title: "Engineering leadership",
      body: "Teams with ambitious, measurable goals and the autonomy to reach them. Architects and tech leads as equals.",
    },
    {
      title: "Building products",
      body: "Founder-level product engineering: TeamMate ships to clubs, coaches and parents across iOS, Android and the web.",
    },
  ],

  experience: [
    {
      org: "Equal Experts",
      role: "Head of Technology Strategy & AI in the SDLC",
      period: "Present",
      summary:
        "Global lead for technology strategy and for AI across the software development lifecycle, working with clients and Equal Experts' network of consultants.",
      href: "https://www.equalexperts.com",
    },
    {
      org: "TeamMate",
      role: "Founder",
      period: "2023 – present",
      summary:
        "Building the grassroots football platform: registrations, payments, fixtures, coaching and match day in one app for clubs, coaches and parents.",
      href: "/teammate",
    },
    {
      org: "HMRC Digital",
      role: "Head of Solutions",
      period: "",
      summary: "Led solution design for digital services at HM Revenue & Customs.",
      href: null,
    },
    {
      org: "Freelance",
      role: "Technical architect & digital consultant",
      period: "",
      summary:
        "Architecture and digital delivery for clients including British Airways, IBM and Deutsche Bank.",
      href: null,
    },
    {
      org: "Software engineering",
      role: "Where it started",
      period: "1999",
      summary: "Started out building software in Java, and never really stopped.",
      href: null,
    },
  ],

  // Short versions of ideas from my writing. Each links to the full post.
  principles: [
    {
      title: "Strategy is a hypothesis",
      body: "A strategy will be wrong. The failure is not noticing until it's too late. Build in the observations that tell you, and loop faster than the change around you.",
      slug: "responding-to-change",
    },
    {
      title: "Architects are technology pilots",
      body: "Plan the route, react to the weather, see turbulence coming and change course, and still land at the destination safely.",
      slug: "technology-pilots",
    },
    {
      title: "Never break your consumers",
      body: "An API succeeds by being easy to consume. Do the hard design work up front, so nobody downstream has to change.",
      slug: "just-say-no-to-versioning",
    },
    {
      title: "Stretch for the amazing",
      body: "Underpromising is a lie that looks like success. Set ambitious goals, commit to them, and measure what matters.",
      slug: "fallacy-of-truisms-under-promise-and-over-deliver",
    },
  ],

  publications: [
    {
      title: "What does “being digital” actually mean?",
      outlet: "InfoQ",
      date: "January 2017",
      summary:
        "Being digital isn't putting offline services online or adopting new tools. It means redesigning around the customer, and it depends on people and mindset more than technology.",
      href: "https://www.infoq.com/articles/meaning-being-digital/",
    },
  ],
} as const;
