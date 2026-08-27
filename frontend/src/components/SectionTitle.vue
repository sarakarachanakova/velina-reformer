<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  align: { type: String, default: 'left' }, // 'left' | 'center'
})
</script>

<template>
  <div class="section-title" :class="`section-title--${align}`">
    <h2>{{ title }}</h2>
    <div class="accent-rule" :class="{ 'accent-rule--center': align === 'center' }"></div>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-title {
  margin-bottom: var(--space-md);
}

.section-title--center {
  text-align: center;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

.section-title p {
  margin-top: var(--space-xs);
}
</style>
