<script setup>
defineProps({
  text: { type: String, required: true },
  ctaLabel: { type: String, default: 'Контакт' },
  ctaTo: { type: String, default: '/contact' },
})
</script>

<template>
  <section class="cta section">
    <div class="container cta__inner">
      <p>{{ text }}</p>
      <router-link :to="ctaTo" class="btn">{{ ctaLabel }}</router-link>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background: var(--color-primary);
}

.cta__inner {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}

.cta p {
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: var(--space-md);
}

.cta .btn {
  background: #fff;
  color: var(--color-primary);
  border-color: #fff;
}

.cta .btn:hover {
  background: transparent;
  color: #fff;
}
</style>
