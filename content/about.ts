// The About page: professional and personal bios, interests and bookshelf.
// Paragraphs are plain strings; keep them short.

export const about = {
  intro:
    "I've spent more than two decades in technology, moving from writing software to designing systems to leading the functions that build them. Strategy, architecture and engineering leadership are the day job; grassroots football is the rest of my life, and TeamMate is where the two meet.",

  professional: [
    "I started building software in 1999, beginning with Java, and grew into architecture and solution design. As a freelance technical architect and digital consultant I worked with clients including British Airways, IBM and Deutsche Bank, and later led solutions as Head of Solutions at HMRC Digital.",
    "Today I'm Head of Technology Strategy & AI in the SDLC at Equal Experts. I work with organisations on technology strategy that can respond to change rather than resist it, and on how AI is reshaping the way software is designed, built, tested and run.",
    "I care about the craft as much as the strategy: evolvable architecture, APIs that never break their consumers, and teams that set ambitious goals and measure what matters.",
    "Alongside that, I founded TeamMate, a platform for grassroots football clubs. It keeps me close to shipping real software to real users every week.",
  ],

  personal: [
    "I studied Pharmacology at university. About the only lesson that stuck was that the best medicine is usually no medicine. Software won out, and I've never stopped learning since, these days mostly through audiobooks.",
    "Football has been a passion for as long as I can remember. Now it's more watching, reading, talking about it and coaching than playing, plus the occasional over-ambitious spreadsheet that tries to predict the Premier League from expected goals.",
    "I'm a dad, my sporting hero is Muhammad Ali, and I've always had a contrarian streak. I bought an Android phone in 2009 when my friends were all buying iPhones, and I go for the green in one when my playing partners lay up.",
  ],

  // The four corners of the logo, in the order they appear: top left, top right, bottom left, bottom right.
  fourCorners: {
    intro: "My logo frames my initials with four corners, one for each part of my life.",
    corners: {
      strategy: "Setting technology direction that responds to change.",
      tech: "Building software since 1999, and still building.",
      family: "The people who matter most.",
      football: "Watching it, coaching it, and building TeamMate for it.",
    },
  },

  interests: [
    { label: "Grassroots football", detail: "Coaching, and building tools for the people who run it" },
    { label: "Football analytics", detail: "Expected goals, expected points and too many spreadsheets" },
    { label: "Learning", detail: "History, science, sport and leadership, usually on audiobook" },
    { label: "Golf", detail: "Always going for the green" },
  ],

  // Books mentioned across my writing. `note` is a one-line take.
  bookshelf: [
    {
      title: "Accelerate",
      author: "Forsgren, Humble & Kim",
      note: "The book I reference and quote more than any other.",
      href: "https://uk.bookshop.org/a/5330/9781942788331",
    },
    {
      title: "Range",
      author: "David Epstein",
      note: "Changed how I approach learning: breadth over 10,000 hours.",
      href: "https://uk.bookshop.org/a/5330/9781509843527",
    },
    {
      title: "Legacy",
      author: "James Kerr",
      note: "The All Blacks, and lessons on being a good ancestor.",
      href: "https://uk.bookshop.org/books/legacy-9781472103536/9781472103536?aid=5330",
    },
    {
      title: "Measure What Matters",
      author: "John Doerr",
      note: "OKRs as ambitious realism, not managed expectations.",
      href: "https://uk.bookshop.org/a/5330/9780241348482",
    },
    {
      title: "REST in Practice",
      author: "Webber, Parastatidis & Robinson",
      note: "Ostensibly about REST; really about good architecture.",
      href: "https://uk.bookshop.org/a/5330/9780596805821",
    },
    {
      title: "Building Evolutionary Architectures",
      author: "Ford, Parsons & Kua",
      note: "Fitness functions and architecture that can change.",
      href: "https://uk.bookshop.org/a/5330/9781491986363",
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      note: "Loss aversion, and why underpromising backfires.",
      href: "https://uk.bookshop.org/a/5330/9780141033570",
    },
    {
      title: "Inverting the Pyramid",
      author: "Jonathan Wilson",
      note: "The history of football tactics, and of bad statistics.",
      href: null,
    },
  ],
} as const;
