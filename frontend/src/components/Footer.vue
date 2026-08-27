<script setup>
import logo from '../assets/brand/logo-160.png'
import { trackPhoneClick, trackInstagramClick, trackContactClick } from '../utils/analytics'

const foundedYear = 2025
const year = new Date().getFullYear()
const copyrightYears = year > foundedYear ? `${foundedYear}–${year}` : foundedYear
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <img :src="logo" alt="Velina Reformer — Reformer Pilates & Aerobics" class="footer__logo" />
        <p>Струмица, Северна Македонија</p>
      </div>

      <div class="footer__contact">
        <p class="footer__phone">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.62 2.65a2 2 0 0 1-.45 2.11L8 9.76a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.86.29 1.75.5 2.65.62A2 2 0 0 1 22 16.92Z" /></svg>
          <a href="tel:+38977503524" @click="trackPhoneClick('footer')">+389 77 503 524</a>
        </p>
        <p class="footer__email">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
          <a href="mailto:info@velinareformer.mk" @click="trackContactClick('footer_email')">info@velinareformer.mk</a>
        </p>
      </div>

      <div class="footer__social">
        <a
          href="https://www.instagram.com/velinareformer?igsi=Mmx6Y3o0amo4cDZr"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          @click="trackInstagramClick('footer')"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61582159225800" target="_blank" rel="noopener" aria-label="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z" /></svg>
        </a>
        <a href="https://www.tiktok.com/@velinareformer" target="_blank" rel="noopener" aria-label="TikTok">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.2a3.4 3.4 0 1 1-2.8-3.35V7.5A7 7 0 1 0 18 14.2V9.1A7.8 7.8 0 0 1 14 3Z" /></svg>
        </a>
      </div>
    </div>

    <div class="container">
      <p class="footer__copyright">&copy; {{ copyrightYears }} Velina Reformer. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: var(--space-lg) 0 var(--space-md);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.footer__logo {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin-bottom: var(--space-xs);
}

.footer__social {
  display: flex;
  gap: var(--space-sm);
}

.footer__phone,
.footer__email {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.footer__phone svg,
.footer__email svg {
  width: 1rem;
  height: 1rem;
  fill: none;
  stroke: var(--color-primary);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

.footer__social a:hover {
  color: var(--color-primary);
}

.footer__social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  color: var(--color-text-muted);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.footer__social a:hover {
  border-color: var(--color-primary);
}

.footer__social svg {
  width: 1.1rem;
  height: 1.1rem;
  fill: currentColor;
}

.footer__social a:first-child svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
}

.footer__copyright {
  font-size: 0.85rem;
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-sm);
}

@media (max-width: 768px) {
  .footer__inner {
    flex-direction: column;
    gap: var(--space-sm);
  }
}
</style>
