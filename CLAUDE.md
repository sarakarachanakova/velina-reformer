# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Presentation website for Velina Reformer, a Reformer Pilates studio in Strumica, North Macedonia (`velinareformer.mk`). Stage one is a public content site with **no booking, no payments, no user accounts**.

All visible copy, instructor bios, and gallery captions are **placeholder content** (see `[Placeholder]` markers) awaiting the client's real branding/photography/copy.

```
velina-reformer/
├── frontend/   # Vue 3 + Vite public website — content lives directly in the frontend (src/content/)
└── backend/    # Laravel 13 API (MySQL, Sanctum-ready) — DORMANT, not called by the frontend, see below
```

## Commands

### Frontend (`frontend/`) — this is where you'll spend most of your time
```bash
npm install
npm run dev        # http://localhost:5173
npm run build
npm run preview
```
No test runner or linter is configured in the frontend yet.

### Backend (`backend/`) — dormant, only relevant if reviving it (see Architecture below)
```bash
composer install
cp .env.example .env && php artisan key:generate
php artisan migrate --seed        # requires local MySQL db `velina_reformer`
php artisan serve                 # http://localhost:8000
php artisan test                  # or: composer test  (runs config:clear then artisan test)
./vendor/bin/pint                 # code style fix (Pint config = default Laravel preset)
./vendor/bin/pint --test          # check only, no changes
php artisan route:list
```
Run a single test: `php artisan test --filter=TestName` or point at a file: `php artisan test tests/Feature/ExampleTest.php`.

## Architecture

**Content lives in the frontend, not a database.** Originally this project had the Vue frontend fetch `Page`/`Instructor`/`GalleryImage` records from the Laravel API below, on the theory that a future admin panel could edit content without a frontend rebuild. In practice, with no admin UI built yet, that meant editing a sentence of copy required hand-editing a database row or a PHP seeder — not practical during active content iteration. So content was moved into the frontend directly:

- `frontend/src/content/pages.js` — Home/About/Reformer-Pilates/Contact copy, keyed by route slug
- `frontend/src/content/instructors.js` — instructor roster (name, role, bio, photo)
- `frontend/src/content/gallery.js` — gallery images; add a photo to `frontend/public/gallery/` and a matching entry here

Views (`frontend/src/views/*View.vue`) import these directly as plain JS — no HTTP call, no loading state, no fallback logic needed.

**The Laravel backend (`backend/`) is dormant, not deleted.** It still has the full `Page`/`Instructor`/`GalleryImage` models, migrations, seeders, and a Sanctum-ready public+admin API (`backend/routes/api.php`) matching the shape of the frontend content above — kept in case a real admin panel gets built later, at which point it'd make sense to wire the frontend back up to it. Until then, don't assume the frontend talks to it: it's currently just sitting there unused.

```
Admin Panel (hypothetical future)      Vue Frontend (public site) — what actually runs today
    ↓                                       ↑
Laravel API  ──  MySQL                 frontend/src/content/*.js (static)
(dormant, not called by the frontend)
```

If you do revive the backend integration, note:
- `GalleryImage` model's table is named `gallery` (`protected $table = 'gallery'`), not `gallery_images` — per the original project brief.
- Models use PHP 8 attributes (`#[Fillable]`, `#[Hidden]`) instead of the classic `protected $fillable` property — a newer Laravel 13.x convention, not a mistake.
- `app/Console/Commands/SyncGalleryImages.php` (`php artisan gallery:sync`) scans `frontend/public/gallery/*.{jpg,jpeg,png,webp,avif}` and upserts rows keyed by `sort_order`, deriving `title` from the filename via `Str::headline()` — this is exactly the kind of manual-sync friction that motivated moving content into the frontend instead.

### Frontend
- Vue 3 (`<script setup>`), Vue Router 5. No global state library, no HTTP client — views read static content modules directly.
- Routing (`frontend/src/router/index.js`) sets a `meta.title` per route in Macedonian, applied via a global `afterEach` hook — there's no i18n layer, copy is hardcoded Macedonian/English per view/content file.
- Views wrap their content in `DefaultLayout.vue` (Navbar + `<slot>` + Footer) individually rather than at the router level — `App.vue` is just a bare `<router-view />`.
- Design tokens (colors, spacing, fonts) live as CSS custom properties in `frontend/src/assets/main.css`, sampled from the client's logo. Google Fonts (`Cormorant Garamond`, `Poppins`) are loaded via `<link>` tags in `index.html`, not npm/self-hosted.
