<script setup>
defineProps({
  headline: { type: String, required: true },
  subtext: { type: String, default: '' },
  ctaLabel: { type: String, default: '' },
  ctaTo: { type: String, default: '/contact' },
  // Files in `public` are served from the site root, so this maps to
  // frontend/public/naslovna.jpg in development and production builds.
  imageUrl: { type: String, default: '/naslovna.jpg' },
})
</script>

<template>
  <section
    class="hero"
    :class="{ 'hero--placeholder': !imageUrl }"
    :style="imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}"
  >
    <div v-if="imageUrl" class="hero__overlay"></div>
    <div class="container hero__content">
      <h1>{{ headline }}</h1>
      <router-link v-if="ctaLabel" :to="ctaTo" class="btn">{{ ctaLabel }}</router-link>
    </div>
  </section>
  <p v-if="subtext" class="hero__subtext container">{{ subtext }}</p>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  background-color: var(--color-border);
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
  .hero {
    min-height: 60vh;
  }
}
</style>
