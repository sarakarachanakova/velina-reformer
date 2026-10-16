// v-reveal — scroll-triggered fade/slide-in animation.
//
// Usage:
//   <div v-reveal>...</div>
//   <div v-reveal="{ delay: 120 }">...</div>   (ms, for staggering lists)
//
// Adds the `.reveal` class (see main.css for the transition) on mount,
// then uses an IntersectionObserver to add `.is-visible` the first time
// the element scrolls into view. Runs once per element — it doesn't
// re-hide on scroll-out, so the page doesn't flicker if a user scrolls
// up and down past the same section.

export const vReveal = {
  mounted(el, binding) {
    el.classList.add('reveal')

    const delay = typeof binding.value === 'number' ? binding.value : binding.value?.delay
    if (delay) {
      el.style.transitionDelay = `${delay}ms`
    }

    // No IntersectionObserver support (very old browsers) — just show it.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    el._revealObserver = observer
  },

  unmounted(el) {
    el._revealObserver?.disconnect()
  },
}
