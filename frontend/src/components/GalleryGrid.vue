<script setup>
import { nextTick, ref } from 'vue'
import { trackGalleryOpen } from '../utils/analytics'

defineProps({
  images: { type: Array, required: true },
})

const selectedImage = ref(null)
const lightbox = ref(null)

async function openImage(image) {
  selectedImage.value = image
  trackGalleryOpen(image)
  await nextTick()
  lightbox.value?.focus()
}

function closeImage() {
  selectedImage.value = null
}
</script>

<template>
  <div class="gallery-grid">
    <figure v-for="image in images" :key="image.id" class="gallery-grid__item">
      <button
        v-if="image.image_url"
        type="button"
        class="gallery-grid__image-button"
        :aria-label="`View ${image.alt_text || image.title} larger`"
        @click="openImage(image)"
      >
        <img
          :src="image.image_url"
          :alt="image.alt_text || image.title"
          loading="lazy"
        />
      </button>
      <div v-else class="gallery-grid__placeholder" aria-hidden="true">
        {{ image.title }}
      </div>
    </figure>
  </div>

  <Teleport to="body">
    <div
      v-if="selectedImage"
      ref="lightbox"
      class="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="`Large view of ${selectedImage.alt_text || selectedImage.title}`"
      tabindex="-1"
      @click.self="closeImage"
      @keydown.esc="closeImage"
    >
      <button type="button" class="gallery-lightbox__close" aria-label="Close image" @click="closeImage">×</button>
      <img :src="selectedImage.image_url" :alt="selectedImage.alt_text || selectedImage.title" />
    </div>
  </Teleport>
</template>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-sm);
}

.gallery-grid__item {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--color-border);
}

.gallery-grid__image-button {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: none;
  cursor: zoom-in;
}

.gallery-grid__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-grid__item img:hover {
  transform: scale(1.04);
}

.gallery-grid__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm);
  text-align: center;
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.gallery-lightbox {
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

.gallery-lightbox img {
  max-width: min(100%, 1100px);
  max-height: calc(100vh - 4rem);
  object-fit: contain;
}

.gallery-lightbox__close {
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

.gallery-lightbox__close:hover {
  background: rgba(255, 255, 255, 0.15);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
