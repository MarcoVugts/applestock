# Apple Stock: Onchain vs. Nasdaq

A single-page Next.js site showcasing a Dune chart that compares Apple's
tokenized stock price trading 24/7 onchain on Base against the traditional
Nasdaq price (15-minute delayed) — useful for watching pre-market and
after-hours moves, e.g. around an Apple event.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub and import the repo in Vercel. Framework Preset must be set
to **Next.js** (not "Other") and Root Directory to the repo root — otherwise
Vercel expects a static `public/` output directory and the build fails.
