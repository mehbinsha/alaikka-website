<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# Alaikka Travel Mate Website

This project is the official website for Alaikka Travel Mate, a tourist bus and travel package agency based in Malappuram / Tirur, Kerala.

## Project Goal

Build a premium, minimal, creative and cinematic travel website that feels like a strong modern travel brand, not a generic local travel website.

The website should focus on:

- Tourist bus services
- Tour packages
- Custom trips
- Fleet options
- Travel gallery
- Quick WhatsApp enquiries
- Contact and booking

## Design Direction

Use:

- Dark / near-black backgrounds
- White or warm-white typography
- Alaikka red as a small accent color
- Large cinematic bus and destination photos
- Strong typography
- Lots of whitespace
- Minimal UI
- Smooth, subtle animations
- Clean responsive layouts

Avoid:

- Excessive gradients
- Too many icons
- Too much text
- Bright multi-color designs
- Generic blue travel-agency styling
- Over-designed cards
- Excessive animations

## Homepage Structure

Preferred homepage flow:

1. Navbar
2. Cinematic Hero
3. Short Brand Introduction
4. Featured Tour Packages
5. Fleet Section
6. Why Alaikka
7. Travel Gallery
8. Customer Reviews
9. Final Booking CTA
10. Footer

## Fleet

The agency offers multiple seating capacities such as:

- 49 seat
- 34 seat
- 26 seat
- 17 seat
- 14 seat

The fleet section should feel premium and visual.

Prefer an interactive fleet selector rather than many repetitive vehicle cards.

## Conversion

The website should make it extremely easy to contact the agency.

Important actions:

- Explore Packages
- View Fleet
- WhatsApp
- Call
- Plan a Trip
- Request a Quote

On mobile, WhatsApp/contact actions should remain easy to access.

## Coding Rules

- Use Next.js
- Use TypeScript
- Use Tailwind CSS
- Keep components reusable
- Keep files organized
- Avoid putting the entire homepage inside one massive component
- Create separate components for major sections
- Keep mobile responsiveness as a priority
- Keep accessibility in mind
- Do not replace working code unnecessarily
- Make changes incrementally
- Preserve the existing design system once established

## Important

Do not invent real business claims such as years of experience, ratings, number of customers, prices, package details, or safety records unless they are explicitly provided.

Use placeholder data when real business information has not yet been supplied.