<script setup>
import CountdownTimer from '../components/CountdownTimer.vue'
</script>

<template>
  <div class="event-page">
    <div class="event-page__blob event-page__blob--1"></div>
    <div class="event-page__blob event-page__blob--2"></div>
    <div class="event-page__blob event-page__blob--3"></div>

    <div class="event-page__content">
      <CountdownTimer target-date="2027-06-12T00:00:00" title="[Placeholder] Одбројување до настан" />
    </div>
  </div>
</template>

<style scoped>
.event-page {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-page);
  overflow: hidden;
  padding: var(--space-md);
}

.event-page__content {
  position: relative;
  z-index: 1;
}

.event-page__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.55;
  pointer-events: none;
}

.event-page__blob--1 {
  width: 380px;
  height: 380px;
  background: var(--color-accent);
  top: -80px;
  left: -80px;
  animation: drift-1 9s ease-in-out infinite;
}

.event-page__blob--2 {
  width: 320px;
  height: 320px;
  background: var(--color-primary);
  bottom: -100px;
  right: -60px;
  animation: drift-2 11s ease-in-out infinite;
}

.event-page__blob--3 {
  width: 260px;
  height: 260px;
  background: var(--color-accent-dark);
  bottom: 10%;
  left: 8%;
  animation: drift-3 7.5s ease-in-out infinite;
}

@keyframes drift-1 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(40px, 30px) scale(1.1);
  }
}

@keyframes drift-2 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-30px, -40px) scale(1.15);
  }
}

@keyframes drift-3 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(20px, -20px) scale(0.9);
  }
}
</style>
