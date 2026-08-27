// Google Analytics 4 (GA4) helper — thin wrapper around Google's gtag.js.
//
// The Measurement ID comes from an env var (VITE_GA_MEASUREMENT_ID, see
// .env.example) rather than being hardcoded here, so it can differ per
// environment and never lives in source control. If it isn't set, GA is
// never loaded and every exported function below is a harmless no-op — so
// this module is always safe to import, including in local dev.
//
// Usage:
//   - initAnalytics() once, before the app mounts (see main.js).
//   - trackPageView() is wired into the router's afterEach (see router/index.js)
//     to report SPA navigations, since gtag's own automatic page_view (which
//     only fires once, on script load) can't see Vue Router transitions.
//   - trackEvent() / the named trackXClick() helpers below for custom events.
//     Prefer adding a new named helper over calling trackEvent directly from
//     a component, so event names and params stay consistent in one place.

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

let initialized = false

function gtag(...args) {
  window.dataLayer?.push(args)
}

/**
 * Loads the Google tag (gtag.js) and configures GA4. Call once, before the
 * first route renders. Safe to call multiple times — only runs once.
 *
 * `send_page_view: false` because this is a single-page app: without it,
 * gtag would send one page_view for the initial script load, and then
 * trackPageView() would send another for the same route on the router's
 * first afterEach — a duplicate. Disabling the automatic one and always
 * sending page_view ourselves, on every route change including the first,
 * keeps it to exactly one per navigation.
 */
export function initAnalytics() {
  if (initialized || !GA_MEASUREMENT_ID || typeof window === 'undefined') return
  initialized = true

  window.dataLayer = window.dataLayer || []
  window.gtag = gtag

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })
}

/** Sends a page_view for the given route. Called from the router's afterEach. */
export function trackPageView(path, title) {
  if (!GA_MEASUREMENT_ID) return
  gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  })
}

/** Generic custom-event helper for anything not covered by a named helper below. */
export function trackEvent(name, params = {}) {
  if (!GA_MEASUREMENT_ID) return
  gtag('event', name, params)
}

// Named helpers for the specific interactions the studio wants tracked.
// `location` identifies where on the site the click happened (e.g. "footer",
// "contact_page") so the events stay distinguishable in GA4 reports.
export const trackPhoneClick = (location) => trackEvent('phone_click', { link_location: location })
export const trackInstagramClick = (location) => trackEvent('instagram_click', { link_location: location })
export const trackMapsClick = (location) => trackEvent('maps_click', { link_location: location })
export const trackContactClick = (location) => trackEvent('contact_click', { link_location: location })
export const trackGalleryOpen = (image) =>
  trackEvent('gallery_open', { image_id: image?.id, image_title: image?.title || image?.alt_text })
