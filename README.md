# nikhilshinde.dev

Portfolio website for **Nikhil Shinde** — AI Product Builder and Founder of Classgrid AI.

Built with React + Vite.

## Pages
- Home
- About (summary, experience, skills, education)
- Projects
- Resume (view + download)
- Contact (Formspree + email + LinkedIn)

## Design system
- Fonts: Sora (headings), DM Sans (body)
- Light/dark mode with a toggle that remembers the choice
- 12px corners, thin borders, black-and-white buttons
- Framer Motion soft fade-in only

## Setup

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and fill in:

| Variable | Purpose |
| --- | --- |
| `VITE_FORMSPREE_ID` | Formspree form ID for the contact form |
| `MONGODB_URI` | MongoDB connection string (server-side only) |
| `MONGODB_DB` | MongoDB database name (default `guestbook`) |

> Never commit `.env`. The MongoDB URI is used only in the serverless API
> (`api/guestbook.js`) and is never exposed to the browser.

## Build

```bash
npm run build
```

## Deploy

The guestbook API lives in `api/guestbook.js` (a Vercel serverless function).
Set `MONGODB_URI` and `MONGODB_DB` as environment variables in your hosting
provider. The front end calls `/api/guestbook` for reads and writes.