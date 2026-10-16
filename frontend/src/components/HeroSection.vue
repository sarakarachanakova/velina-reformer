<script setup>
defineProps({
  headline: { type: String, required: true },
  subtext: { type: String, default: '' },
  ctaLabel: { type: String, default: '' },
  ctaTo: { type: String, default: '/contact' },
  // Files in `public` are served from the site root, so this maps to
  // frontend/public/naslovna.jpg in development and production builds.
  imageUrl: { type: String, default: '/naslovna.jpg' },
  // Smaller crop (3 of the 5 collage panels) used on phones instead of
  // imageUrl — see the max-width: 768px rule below. Falls back to imageUrl.
  mobileImageUrl: { type: String, default: '/naslovna-mobile.jpg' },
})
</script>

<template>
  <section
    class="hero"
    :class="{ 'hero--placeholder': !imageUrl }"
    :style="
      imageUrl
        ? {
            '--hero-image': `url(${imageUrl})`,
            '--hero-image-mobile': `url(${mobileImageUrl || imageUrl})`,
          }
        : {}
    "
  >
    <div v-if="imageUrl" class="hero__overlay"></div>
    <div class="container hero__content px-5" v-reveal>
      <h1>{{ headline }}</h1>
    </div>
    <router-link v-if="ctaLabel" :to="ctaTo" class="btn hero__cta" v-reveal="150">{{ ctaLabel }}</router-link>
  </section>
  <p v-if="subtext" class="hero__subtext container px-5" v-reveal="120">{{ subtext }}</p>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 70vh;
  /* Dynamic viewport height accounts for the address bar collapsing on
     iOS/Android — the fallback vh above still applies on browsers that
     don't support it. */
  min-height: 70dvh;
  display: flex;
  align-items: center;
  background-color: var(--color-border);
  /* Only the image for the active breakpoint is downloaded, so phones never
     fetch the full-width desktop collage. */
  background-image: var(--hero-image);
  background-size: cover;
  background-position: center;
  color: #fff;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 640px;
}

.hero__content h1 {
  color: #fff;
}

.hero__cta {
  /* Centered via left/right + margin auto rather than translateX(-50%) —
     the v-reveal directive (see main.css `.reveal`) animates `transform`
     for its fade/slide-in, which would otherwise clobber a centering
     transform. */
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: var(--space-lg);
  width: fit-content;
  margin: 0 auto;
}

.hero__subtext {
  max-width: 640px;
  margin: var(--space-md) auto 0;
  padding-bottom: var(--space-sm);
  color: var(--color-text-muted);
  font-size: 1.1rem;
  text-align: center;
}

/* No studio photo yet — a soft brand-colored wash instead of a plain gray box. */
.hero--placeholder {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-bg) 55%, var(--color-primary) 130%);
}

.hero--placeholder .hero__content h1 {
  color: var(--color-text);
}

@media (max-width: 768px) {
  /* Box takes the mobile image's own proportions (1152×891), so the whole
     photo shows with no cropping and no empty band below it. */
  .hero {
    min-height: 0;
    aspect-ratio: 1152 / 891;
    background-size: cover;
    background-position: center;
  }

  .hero:not(.hero--placeholder) {
    background-image: var(--hero-image-mobile, var(--hero-image));
  }

  .hero__cta {
    bottom: var(--space-md);
  }
}

@media (max-width: 480px) {
  .hero__subtext {
    font-size: 1rem;
  }
}
</style>
