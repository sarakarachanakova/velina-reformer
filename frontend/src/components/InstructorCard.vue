<script setup>
defineProps({
  instructor: { type: Object, required: true },
})
</script>

<template>
  <article class="instructor-card">
    <div class="instructor-card__image">
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
    <p class="instructor-card__role">{{ instructor.role }}</p>
    <p class="instructor-card__bio">{{ instructor.bio }}</p>
  </article>
</template>

<style scoped>
.instructor-card {
  text-align: center;
}

.instructor-card__image {
  aspect-ratio: 3 / 4;
  background: var(--color-border);
  margin-bottom: var(--space-sm);
  overflow: hidden;
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

.instructor-card__role {
  color: var(--color-primary);
  font-size: 0.9rem;
  margin-bottom: var(--space-xs);
}

.instructor-card__bio {
  font-size: 0.95rem;
}
</style>
