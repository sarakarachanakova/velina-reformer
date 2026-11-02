<script>
// Kept in memory only (outside the component instance): once closed, the
// pop-up stays closed while the visitor clicks around the site, but every
// page load or refresh resets this and shows it again.
let dismissed = false
</script>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import CountdownTimer from './CountdownTimer.vue'

const props = defineProps({
  targetDate: { type: String, required: true }, // ISO string with offset, e.g. '2026-11-06T18:00:00+01:00'
  title: { type: String, default: '' },
})

const isOpen = ref(false)
const dialog = ref(null)

onMounted(async () => {
  if (new Date(props.targetDate).getTime() <= Date.now() || dismissed) return
  isOpen.value = true
  await nextTick()
  dialog.value?.focus()
})

function close() {
  isOpen.value = false
  dismissed = true
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="countdown-popup" @click.self="close" @keydown.esc="close">
      <div
        ref="dialog"
        class="countdown-popup__dialog"
        role="dialog"
        aria-modal="true"
        :aria-label="title || 'Одбројување'"
        tabindex="-1"
      >
        <button type="button" class="countdown-popup__close" aria-label="Close" @click="close">×</button>
        <CountdownTimer :target-date="targetDate" :title="title" />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.countdown-popup {
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm);
  background: rgba(20, 25, 20, 0.6);
  animation: popup-fade-in 0.3s ease both;
}

.countdown-popup__dialog {
  position: relative;
  width: min(100%, 560px);
  padding: var(--space-lg) var(--space-md) var(--space-md);
  background: var(--gradient-page);
  border-radius: var(--radius);
  box-shadow: var(--shadow-photo);
  outline: none;
}

/* z-index keeps it above the countdown units, whose animated transforms
   would otherwise paint them on top of it. */
.countdown-popup__close {
  position: absolute;
  z-index: 1;
  top: var(--space-xs);
  right: var(--space-xs);
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 300;
  line-height: 1;
}

.countdown-popup__close:hover {
  background: var(--color-accent-tint);
}

@keyframes popup-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 480px) {
  /* Top padding clears the close button (2.75rem tall, 0.5rem from the top). */
  .countdown-popup__dialog {
    padding: 4.25rem var(--space-xs) var(--space-sm);
  }
}
</style>
