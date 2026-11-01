# hmeid.com

Personal site for Reda Hmeid: about, work, TeamMate, writing and contact.
Built with Next.js 16, Tailwind CSS 4 and Markdown posts. Content is edited in the repo
(see [CLAUDE.md](CLAUDE.md) for where everything lives).

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project**, import the repo. The defaults (Next.js, `npm run build`) are correct.
3. Add environment variables for the contact form (Project → Settings → Environment Variables):
   - `RESEND_API_KEY`: from [resend.com](https://resend.com) (free tier is plenty)
   - `CONTACT_TO_EMAIL`: where messages should arrive
   - `CONTACT_FROM_EMAIL` (optional): e.g. `Website <hello@hmeid.com>` once the domain is verified in Resend.
     Without it, Resend's test sender is used, which can only deliver to the email you signed up to Resend with.
4. Add your domain under Project → Settings → Domains, and update `url` in `content/site.ts` if it isn't `https://www.hmeid.com`.

Old hmeid.com (Squarespace) URLs such as `/football-blog/...` and `/contact-me` redirect to their new homes.
