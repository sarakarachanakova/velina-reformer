<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  targetDate: { type: String, required: true }, // ISO string, e.g. '2027-06-12T00:00:00'
  title: { type: String, default: '' },
})

const now = ref(Date.now())
let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

const diff = computed(() => Math.max(0, new Date(props.targetDate).getTime() - now.value))

const timeLeft = computed(() => {
  const totalSeconds = Math.floor(diff.value / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
})

const isOver = computed(() => diff.value <= 0)

const pad = (n) => String(n).padStart(2, '0')
</script>

<template>
  <div class="countdown">
    <p v-if="title" class="countdown__title">{{ title }}</p>
    <div v-if="!isOver" class="countdown__grid">
      <div class="countdown__unit countdown__unit--1">
        <span class="countdown__value" :key="timeLeft.days">{{ timeLeft.days }}</span>
        <span class="countdown__label">Денови</span>
      </div>
      <div class="countdown__unit countdown__unit--2">
        <span class="countdown__value" :key="timeLeft.hours">{{ pad(timeLeft.hours) }}</span>
        <span class="countdown__label">Часови</span>
      </div>
      <div class="countdown__unit countdown__unit--3">
        <span class="countdown__value" :key="timeLeft.minutes">{{ pad(timeLeft.minutes) }}</span>
        <span class="countdown__label">Минути</span>
      </div>
      <div class="countdown__unit countdown__unit--4">
        <span class="countdown__value" :key="timeLeft.seconds">{{ pad(timeLeft.seconds) }}</span>
        <span class="countdown__label">Секунди</span>
      </div>
    </div>
    <p v-else class="countdown__over">Датумот е достигнат!</p>
  </div>
</template>

<style scoped>
.countdown {
  text-align: center;
}

.countdown__title {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  color: var(--color-text);
  margin-bottom: var(--space-md);
  animation: drop-in 0.6s ease both;
}

.countdown__grid {
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.countdown__unit {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: var(--space-sm) var(--space-md);
  min-width: 100px;
  box-shadow: 0 0 0 rgba(249, 193, 211, 0.6);
  animation:
    pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both,
    glow-pulse 2.4s ease-in-out infinite,
    float 3.6s ease-in-out infinite;
}

.countdown__unit--1 {
  animation-delay: 0s, 0.6s, 0s;
}

.countdown__unit--2 {
  animation-delay: 0.1s, 0.7s, 0.3s;
}

.countdown__unit--3 {
  animation-delay: 0.2s, 0.8s, 0.6s;
}

.countdown__unit--4 {
  animation-delay: 0.3s, 0.9s, 0.9s;
}

.countdown__unit:hover {
  transform: translateY(-4px) scale(1.05);
  transition: transform 0.2s ease;
}

.countdown__value {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 2.75rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  line-height: 1;
  animation: bump 0.4s ease;
}

.countdown__label {
  margin-top: var(--space-xs);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

.countdown__over {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--color-primary-dark);
  animation: pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes pop-in {
  from {
    opacity: 0;
    transform: scale(0.4) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes drop-in {
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bump {
  0% {
    transform: scale(1.35);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes glow-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 rgba(249, 193, 211, 0.5);
  }
  50% {
    box-shadow: 0 0 22px rgba(249, 193, 211, 0.85);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@media (max-width: 480px) {
  .countdown__unit {
    min-width: 76px;
    padding: var(--space-xs) var(--space-sm);
  }

  .countdown__value {
    font-size: 2rem;
  }
}
</style>
