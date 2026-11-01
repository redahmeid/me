// The TeamMate page. Facts come from teammate.football and the app's release notes.
// Update `stats` and `recentlyShipped` as TeamMate grows.

export const teammate = {
  tagline: "The grassroots football platform",
  summary:
    "TeamMate brings registrations, payments, fixtures, coaching, match day, stats and communication into one app for grassroots football clubs, from U6s to adult teams.",
  myRole:
    "Grassroots football runs on spreadsheets, WhatsApp groups, bank-transfer references and paper team sheets. TeamMate replaces them. I founded it and lead its product and engineering.",

  links: {
    website: "https://www.teammate.football",
    appStore: "https://apps.apple.com/gb/app/coach-teammate/id6473653336",
    googlePlay: "https://play.google.com/store/apps/details?id=com.redahmeid.soccer",
    support: "https://teammate-football.freshdesk.com/support/home",
  },

  stats: [
    { value: "500+", label: "clubs and teams" },
    { value: "6,000+", label: "players" },
    { value: "10,000+", label: "matches tracked" },
  ],

  before: ["Spreadsheets", "WhatsApp groups", "Bank-transfer references", "PDF forms", "Paper team sheets"],
  after: "One connected platform across every team in the club.",

  audiences: [
    {
      name: "Coaches",
      line: "You coach. TeamMate handles the rest.",
      features: [
        "Training and fixture planning with invites, RSVPs and attendance",
        "Line-ups that plan every substitution and each player's minutes",
        "Live match tracking, player ratings and Player of the Match",
        "AI-generated training plans and match reports",
        "Teamsheets for the referee or league: FA Full-Time, GotSport, PDF, Excel or CSV",
      ],
    },
    {
      name: "Clubs & treasurers",
      line: "Collect every club payment, all season long.",
      features: [
        "Season subscriptions, camps, tournaments and event fees",
        "Instalments, sibling and multi-team discounts, early-bird pricing and refunds",
        "A treasurer dashboard for income, scheduled payments and outstanding balances",
        "Club-wide leaderboards and a public club site",
        "Payments processed securely by Stripe",
      ],
    },
    {
      name: "Parents & players",
      line: "Everything about your child's team, in one place.",
      features: [
        "Register, pay and manage several children from one account",
        "Reply to invites from the team home screen",
        "See when your child is due on and off in the planned line-up",
        "A team wall with goals, assists, photos and match clips",
        "Watch matches live when the coach streams them",
      ],
    },
  ],

  caseStudy: {
    club: "Slough Town FC",
    detail:
      "Moved to TeamMate from Player360, and now runs 40+ teams, 600+ players and 700+ registrations for 2026/27 on it, across every age group from U6 to seniors.",
  },

  recentlyShipped: [
    { version: "3.11", title: "Bookings", body: "Camps, club sessions and match-day tickets get a home in the app, with or without a team." },
    { version: "3.10", title: "Live match video", body: "Stream a match with the score, scorers and line-up over the picture, and share clips to the team wall." },
    { version: "3.9", title: "Line-up timelines", body: "Every substitution spelled out, with a countdown to the next change and minutes for every player." },
    { version: "3.6", title: "Teamsheets", body: "Download a teamsheet in the layout the referee or league needs, as PDF, Excel or CSV." },
  ],

  stack: ["Flutter (iOS & Android)", "Next.js on Vercel", "Firebase", "Stripe Connect", "Mux video", "Claude AI"],
} as const;
