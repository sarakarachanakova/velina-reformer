<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SectionTitle from '../components/SectionTitle.vue'
import GalleryGrid from '../components/GalleryGrid.vue'
import { gallery } from '../content/gallery'
</script>

<template>
  <DefaultLayout>
    <section class="section container px-5">
      <SectionTitle title="Галерија | Велина Реформер" align="left" v-reveal />
      <GalleryGrid :images="gallery" />
    </section>
  </DefaultLayout>
</template>
