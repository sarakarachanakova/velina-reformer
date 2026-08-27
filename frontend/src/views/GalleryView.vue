<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SectionTitle from '../components/SectionTitle.vue'
import GalleryGrid from '../components/GalleryGrid.vue'
import { gallery } from '../content/gallery'
</script>

<template>
  <DefaultLayout>
    <section class="section container">
      <SectionTitle title="Галерија | Велина Реформер" align="left" />
      <GalleryGrid :images="gallery" />
    </section>
  </DefaultLayout>
</template>
