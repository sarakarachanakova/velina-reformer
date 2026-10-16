<script setup>
defineProps({
  instructor: { type: Object, required: true },
  // Stagger delay (ms) for the scroll-reveal entrance when several cards
  // sit in a grid — see v-reveal (src/directives/reveal.js).
  revealDelay: { type: Number, default: 0 },
})
</script>

<template>
  <article class="instructor-card" v-reveal="revealDelay">
    <div class="instructor-card__image photo-frame">
      <img
        v-if="instructor.image_url"
        :src="instructor.image_url"
        :alt="instructor.name"
        loading="lazy"
      />
      <div v-else class="instructor-card__placeholder" aria-hidden="true">
        {{ instructor.name?.[0]?.toUpperCase() ?? '?' }}
      </div>
    </div>
    <h3>{{ instructor.name }}</h3>
  </article>
</template>

<style scoped>
.instructor-card {
  text-align: center;
  transition: transform 0.3s ease;
}

.instructor-card:hover {
  transform: translateY(-4px);
}

.instructor-card__image {
  aspect-ratio: 3 / 4;
  margin-bottom: var(--space-sm);
}

.instructor-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.instructor-card__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--color-text-muted);
}
</style>
