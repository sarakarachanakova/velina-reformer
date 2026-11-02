// Umami analytics helper — thin wrapper around Umami Cloud's tracker script.
// Dashboard: https://cloud.umami.is (cookieless, so no consent banner needed).
//
// The Website ID isn't a secret: it ships in every visitor's page source
// either way, so it's hardcoded here rather than passed in through an env var.
// `data-domains` makes the tracker ignore every host except the live site, so
// local dev (`npm run dev`) and `npm run preview` never send data.
//
// Usage:
//   - initAnalytics() once, before the app mounts (see main.js).
//   - Page views need no code: Umami's script reports the initial load and
//     hooks history.pushState, so it already sees Vue Router navigations.
//   - The named trackXClick() helpers below for custom events. Prefer adding
//     a new named helper over calling trackEvent directly from a component,
//     so event names and params stay consistent in one place.

const UMAMI_WEBSITE_ID = '88e9bd96-0819-45ed-8b95-fee56391a764'
const TRACKED_DOMAINS = 'velinareformer.mk,www.velinareformer.mk'

let initialized = false

/** Loads Umami's tracker script. Safe to call multiple times — only runs once. */
export function initAnalytics() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://cloud.umami.is/script.js'
  script.dataset.websiteId = UMAMI_WEBSITE_ID
  script.dataset.domains = TRACKED_DOMAINS
  document.head.appendChild(script)
}

/**
 * Generic custom-event helper. A no-op until the tracker has loaded (or when
 * an ad blocker stops it loading at all), so it's always safe to call.
 */
export function trackEvent(name, params = {}) {
  window.umami?.track(name, params)
}

// Named helpers for the specific interactions the studio wants tracked.
// `location` identifies where on the site the click happened (e.g. "footer",
// "contact_page") so the events stay distinguishable in Umami's Events report.
export const trackPhoneClick = (location) => trackEvent('phone_click', { link_location: location })
export const trackInstagramClick = (location) => trackEvent('instagram_click', { link_location: location })
export const trackMapsClick = (location) => trackEvent('maps_click', { link_location: location })
export const trackContactClick = (location) => trackEvent('contact_click', { link_location: location })
export const trackGalleryOpen = (image) =>
  trackEvent('gallery_open', { image_id: image?.id, image_title: image?.title || image?.alt_text })
