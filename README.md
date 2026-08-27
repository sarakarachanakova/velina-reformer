# Velina Reformer

Presentation website for Velina Reformer, a Reformer Pilates studio in North Macedonia (`velinareformer.mk`).

This is stage one: a classic public presentation site (no booking, no payments, no user accounts).

```text
velina-reformer/
├── frontend/   # Vue 3 + Vite public website — all content lives here
└── backend/    # Laravel API (MySQL, Sanctum-ready) — currently unused by the site, kept for a future admin panel
```

All content currently visible on the site (copy, instructor bios, gallery images, contact details) is **placeholder data**, clearly marked with `[Placeholder]`. It lives directly in the frontend (`frontend/src/content/`) and is meant to be replaced once the client provides the real logo, brand colors, photography, and copy.

## Prerequisites

- Node.js + npm

That's it for running the site day-to-day. PHP/Composer/MySQL are only needed if you're working on the dormant backend (see [Backend](#backend-dormant) below).

## First-time setup

```bash
cd frontend
npm install
npm run dev
```

Site is now running at `http://localhost:5173`.

## Editing content

There's no database and no admin UI — content is plain JS you edit directly and see on refresh:

- `frontend/src/content/pages.js` — Home/About/Reformer-Pilates/Contact copy
- `frontend/src/content/instructors.js` — instructor name/role/bio/photo
- `frontend/src/content/gallery.js` — gallery images (drop new photos in `frontend/public/gallery/` and add a matching entry here)

## Project structure

```text
frontend/src/
├── assets/       # design tokens (main.css) — placeholder brand palette
├── components/   # Navbar, Footer, HeroSection, InstructorCard, GalleryGrid, ...
├── content/      # all page copy, instructor, and gallery data (see above)
├── layouts/       DefaultLayout.vue (Navbar + Footer wrapper)
├── router/       # route definitions
└── views/        # HomeView, AboutView, ReformerPilatesView, InstructorsView, GalleryView, ContactView
```

## Backend (dormant)

`backend/` is a Laravel API (Page/Instructor/GalleryImage models, matching migrations/seeders, Sanctum-ready auth) that originally served the content above over HTTP, so a future non-technical admin panel could edit it without a frontend rebuild. The frontend no longer calls it — editing content by hand in the database wasn't practical before that admin UI exists — so it's kept around unused rather than deleted, in case that admin panel gets built later. See `backend/README.md` for how to run it if you pick that up again.

## Notes

- No online booking or payments — intentionally out of scope for V1.
- Visual design is a technical foundation only; final branding (logo, colors) and content will be applied once supplied by the client.
- Never commit `.env` files — see `.gitignore` in both `frontend/` and `backend/`.
