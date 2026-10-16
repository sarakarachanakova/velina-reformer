<script setup>
import { ref } from 'vue'
import logo from '../assets/brand/logo-160.png'

const isOpen = ref(false)

const links = [
  { to: '/', label: 'Дома' },
  { to: '/about', label: 'За нас' },
  { to: '/reformer-pilates', label: 'Реформер Пилатес' },
  { to: '/instructors', label: 'Инструктори' },
  { to: '/gallery', label: 'Галерија' },
  { to: '/events', label: 'Настани' },
  { to: '/contact', label: 'Контакт' },
]

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <nav class="container navbar__inner">
      <router-link to="/" class="navbar__brand" @click="closeMenu">
        <img :src="logo" alt="Velina Reformer — Reformer Pilates & Aerobics" class="navbar__logo" />
      </router-link>

      <button
        class="navbar__toggle"
        :class="{ 'navbar__toggle--open': isOpen }"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="navbar__links" :class="{ 'navbar__links--open': isOpen }">
        <li v-for="link in links" :key="link.to">
          <router-link :to="link.to" @click="closeMenu">{{ link.label }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  /* Same fixed-to-viewport gradient as `body` (see main.css) so the navbar
     reads as part of the page rather than a separate opaque bar. */
  background: var(--gradient-page);
  background-attachment: fixed;
  border-bottom: 1px solid var(--color-border);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-sm);
  padding-bottom: var(--space-sm);
}

.navbar__brand {
  display: flex;
  align-items: center;
}

.navbar__logo {
  width: 52px;
  height: 52px;
  border-radius: 50%;
}

.navbar__links {
  display: flex;
  gap: var(--space-md);
  list-style: none;
}

.navbar__links a {
  font-size: 0.95rem;
  color: var(--color-text);
}

.navbar__links a.router-link-active {
  color: var(--color-primary);
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  padding: 0.6rem;
}

.navbar__toggle span {
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: transform 0.25s ease, opacity 0.2s ease;
}

.navbar__toggle--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar__toggle--open span:nth-child(2) {
  opacity: 0;
}

.navbar__toggle--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--gradient-page);
    background-attachment: fixed;
    border-bottom: 1px solid var(--color-border);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.3s ease, opacity 0.25s ease;
  }

  .navbar__links--open {
    max-height: 400px;
    opacity: 1;
  }

  .navbar__links li {
    padding: var(--space-sm) var(--space-sm);
    border-top: 1px solid var(--color-border);
  }
}
</style>
