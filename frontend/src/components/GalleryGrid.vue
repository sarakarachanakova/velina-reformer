<script setup>
import { nextTick, ref } from 'vue'
import { trackGalleryOpen } from '../utils/analytics'

defineProps({
  images: { type: Array, required: true },
  // 2 (default) matches the full Gallery page; 3 is used on the landing
  // page preview for smaller, denser thumbnails on mobile.
  mobileColumns: { type: Number, default: 2 },
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
  <div class="row gx-3 gx-md-4">
    <figure
      v-for="(image, index) in images"
      :key="image.id"
      class="col-md-4 col-lg-3 gallery-grid__col py-4"
      :class="mobileColumns === 3 ? 'col-4' : 'col-6'"
    >
      <div class="gallery-grid__item photo-frame" v-reveal="(index % 6) * 60">
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
.gallery-grid__col {
  margin: 0;
}

.gallery-grid__item {
  aspect-ratio: 1 / 1;
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
  animation: lightbox-fade-in 0.25s ease both;
}

.gallery-lightbox img {
  max-width: min(100%, 1100px);
  max-height: calc(100vh - 4rem);
  object-fit: contain;
  border-radius: var(--radius);
  animation: lightbox-pop-in 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes lightbox-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes lightbox-pop-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
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
</style>
