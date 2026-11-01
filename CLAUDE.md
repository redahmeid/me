@AGENTS.md

# Reda Hmeid personal site

Personal and professional website for Reda Hmeid, deployed on Vercel. There is no CMS: all
content lives in this repo and changes are made by asking Claude. Keep it that way. Edit the
content files below rather than hard-coding text into pages.

## Where things live

| To change…                                   | Edit                                   |
| -------------------------------------------- | -------------------------------------- |
| Name, hero line, current roles, social links, nav | `content/site.ts`                  |
| About page (professional + personal bio, interests, bookshelf) | `content/about.ts`   |
| Work page (expertise, experience, principles, publications) | `content/work.ts`       |
| TeamMate page and home-page band (stats, features, releases) | `content/teammate.ts`  |
| Blog posts                                   | `content/blog/<slug>.md`               |
| Blog images                                  | `public/blog/<slug>/…`                 |
| Main photo                                   | `assets/reda-hmeid.jpg`                |
| Small square headshot (post author box)      | `assets/reda-hmeid-headshot.jpg`       |
| Colours, fonts, article typography           | `app/globals.css`                      |
| Old-URL redirects                            | `next.config.ts`                       |

Pages are in `app/` (`page.tsx` = home, `about/`, `work/`, `teammate/`, `blog/`, `contact/`).
Shared UI is in `components/`.

## Adding a blog post

Create `content/blog/<slug>.md`. The filename becomes the URL (`/blog/<slug>`).

```md
---
title: "Post title"
date: 2026-11-01
category: technology # or: football
summary: "One or two sentences. Used on the index, in RSS and for link previews."
tags: ["strategy", "ai"]
draft: true # optional: drafts show in `npm run dev` only, never in production
---

Body in Markdown. GitHub-flavoured Markdown works (tables, lists, links).
![Describe the image](/blog/<slug>/diagram.png)
```

Categories are defined in `lib/post-types.ts`. Add one there if a new topic is needed.

## Replacing the photo

Overwrite `assets/reda-hmeid.jpg`. The home hero, About page and share image use it. The hero
crop is set by `object-[x%_y%]` classes in `components/hero.tsx`; check phone and desktop widths
after changing the photo. Regenerate the headshot with:

```bash
sips -c 780 780 --cropOffset 70 0 assets/reda-hmeid.jpg --out assets/reda-hmeid-headshot.jpg && sips -Z 480 assets/reda-hmeid-headshot.jpg
```

(adjust the crop offset so the face is centred).

## Writing style

- UK English (organisation, programme), first person, plain and direct.
- Only state facts Reda has confirmed or that come from his own writing. Don't invent roles,
  dates, clients or numbers. If something is unknown, leave it out (e.g. `period: ""`).

## Contact form

`app/contact/actions.ts` sends mail through Resend's HTTP API. It needs these Vercel env vars:
`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and optionally `CONTACT_FROM_EMAIL` (a sender on a
domain verified in Resend). Without them the form shows a "message me on LinkedIn" fallback.
Never put the destination email address in the code.

## Next.js 16 gotchas in this repo

- `cacheComponents` is on. Content is read with synchronous `fs` calls (`lib/posts.ts`) so
  pages prerender as static HTML. Don't switch to `fs/promises` inside components.
- Don't call `Date.now()` / `new Date()` with no arguments during render: it breaks prerendering.
- Files with `"use server"` may only export async functions (shared types/constants go in
  `app/contact/shared.ts`).
- Client components must not import `lib/posts.ts` (it uses `fs`); import from
  `lib/post-types.ts` instead.

## Checking changes

```bash
npm run lint && npm run build
```

Preview locally with `npm run dev` (or the `site` config in `.claude/launch.json`, port 3123).
Check both light and dark mode and a ~375px-wide phone viewport for visual changes.
