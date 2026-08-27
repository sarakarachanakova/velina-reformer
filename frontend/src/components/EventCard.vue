<script setup>
import { computed, nextTick, ref } from 'vue'

const props = defineProps({
  event: { type: Object, required: true },
})

const photos = computed(() => props.event.images || [])
const heroPhoto = computed(() => photos.value[0] || null)
const thumbPhotos = computed(() => photos.value.slice(1))

const formattedDate = computed(() => {
  if (!props.event.date) return ''
  const parsed = new Date(props.event.date)
  if (Number.isNaN(parsed.getTime())) return ''
  return new Intl.DateTimeFormat('mk-MK', { day: 'numeric', month: 'long', year: 'numeric' }).format(parsed)
})

const selectedPhoto = ref(null)
const lightbox = ref(null)

async function openPhoto(photo) {
  selectedPhoto.value = photo
  await nextTick()
  lightbox.value?.focus()
}

function closePhoto() {
  selectedPhoto.value = null
}
</script>

<template>
  <article class="event-card">
    <div class="event-card__photos">
      <button
        v-if="heroPhoto"
        type="button"
        class="event-card__hero"
        :aria-label="`View ${heroPhoto.alt} larger`"
        @click="openPhoto(heroPhoto)"
      >
        <img :src="heroPhoto.url" :alt="heroPhoto.alt" loading="lazy" />
      </button>
      <div v-else class="event-card__hero event-card__hero--placeholder" aria-hidden="true">
        {{ event.title }}
      </div>

      <div v-if="thumbPhotos.length" class="event-card__thumbs">
        <button
          v-for="(photo, index) in thumbPhotos"
          :key="index"
          type="button"
          class="event-card__thumb"
          :aria-label="`View ${photo.alt} larger`"
          @click="openPhoto(photo)"
        >
          <img :src="photo.url" :alt="photo.alt" loading="lazy" />
        </button>
      </div>
    </div>

    <div class="event-card__body">
      <span v-if="formattedDate" class="event-card__date">{{ formattedDate }}</span>
      <h3>{{ event.title }}</h3>
      <p>{{ event.description }}</p>
    </div>
  </article>

  <Teleport to="body">
    <div
      v-if="selectedPhoto"
      ref="lightbox"
      class="event-lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="`Large view of ${selectedPhoto.alt}`"
      tabindex="-1"
      @click.self="closePhoto"
      @keydown.esc="closePhoto"
    >
      <button type="button" class="event-lightbox__close" aria-label="Close image" @click="closePhoto">×</button>
      <img :src="selectedPhoto.url" :alt="selectedPhoto.alt" />
    </div>
  </Teleport>
</template>

<style scoped>
.event-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}

.event-card__photos {
  display: flex;
  flex-direction: column;
}

.event-card__hero {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  padding: 0;
  background: var(--color-border);
  cursor: zoom-in;
}

.event-card__hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.event-card__hero:hover img {
  transform: scale(1.03);
}

.event-card__hero--placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm);
  text-align: center;
  font-family: var(--font-heading);
  color: var(--color-text-muted);
}

.event-card__thumbs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  gap: 2px;
}

.event-card__thumb {
  display: block;
  aspect-ratio: 1 / 1;
  border: 0;
  padding: 0;
  background: var(--color-border);
  cursor: zoom-in;
}

.event-card__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.event-card__thumb:hover img {
  transform: scale(1.06);
}

.event-card__body {
  padding: var(--space-md);
}

.event-card__date {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin-bottom: var(--space-xs);
  background: var(--color-accent-tint);
  color: var(--color-primary-dark);
  font-size: 0.8rem;
  letter-spacing: 0.03em;
}

.event-card__body h3 {
  margin-bottom: var(--space-xs);
}

.event-card__body p {
  font-size: 0.95rem;
}

.event-lightbox {
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md);
  background: rgba(20, 25, 20, 0.88);
  outline: none;
}

.event-lightbox img {
  max-width: min(100%, 1100px);
  max-height: calc(100vh - 4rem);
  object-fit: contain;
}

.event-lightbox__close {
  position: absolute;
  top: var(--space-sm);
  right: var(--space-sm);
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 50%;
  background: transparent;
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1;
}

.event-lightbox__close:hover {
  background: rgba(255, 255, 255, 0.15);
}

@media (max-width: 768px) {
  .event-card__thumbs {
    grid-template-columns: repeat(auto-fit, minmax(56px, 1fr));
  }
}
</style>
