<script setup>
import { computed, nextTick, ref } from 'vue'
import { trackGalleryOpen } from '../utils/analytics'

const props = defineProps({
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

// Only images that can actually open in the lightbox (placeholders can't).
const viewableImages = computed(() => props.images.filter((image) => image.image_url))

// Moves to the previous (-1) or next (+1) photo, wrapping around at the ends.
function showAdjacent(step) {
  const list = viewableImages.value
  // Match by id: selectedImage holds a reactive proxy, so indexOf would never find it.
  const current = list.findIndex((image) => image.id === selectedImage.value.id)
  selectedImage.value = list[(current + step + list.length) % list.length]
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
      @keydown.left="showAdjacent(-1)"
      @keydown.right="showAdjacent(1)"
    >
      <button type="button" class="gallery-lightbox__close" aria-label="Close image" @click="closeImage">×</button>
      <div v-if="viewableImages.length > 1" class="gallery-lightbox__nav-group">
        <button
          type="button"
          class="gallery-lightbox__nav"
          aria-label="Previous image"
          @click="showAdjacent(-1)"
        >‹</button>
        <button
          type="button"
          class="gallery-lightbox__nav"
          aria-label="Next image"
          @click="showAdjacent(1)"
        >›</button>
      </div>
      <img
        :key="selectedImage.id"
        :src="selectedImage.image_url"
        :alt="selectedImage.alt_text || selectedImage.title"
      />
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
  /* Leaves room below for the prev/next buttons. */
  max-height: calc(100vh - 11rem);
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
  z-index: 1;
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

/* z-index keeps the buttons above the photo, whose pop-in transform would
   otherwise paint it on top of them. */
.gallery-lightbox__nav-group {
  position: absolute;
  z-index: 1;
  bottom: var(--space-sm);
  left: 50%;
  display: flex;
  gap: var(--space-sm);
  transform: translateX(-50%);
}

.gallery-lightbox__nav {
  width: 3rem;
  height: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 50%;
  background: rgba(20, 25, 20, 0.35);
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1;
}

.gallery-lightbox__nav:hover {
  background: rgba(255, 255, 255, 0.15);
}
</style>
