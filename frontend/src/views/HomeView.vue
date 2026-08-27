<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import HeroSection from '../components/HeroSection.vue'
import SectionTitle from '../components/SectionTitle.vue'
import InstructorCard from '../components/InstructorCard.vue'
import GalleryGrid from '../components/GalleryGrid.vue'
import EventCard from '../components/EventCard.vue'
import CTASection from '../components/CTASection.vue'
import { pages } from '../content/pages'
import { instructors as allInstructors } from '../content/instructors'
import { gallery } from '../content/gallery'
import { events as allEvents } from '../content/events'

const page = pages.home
const instructors = allInstructors.slice(0, 3)
const galleryImages = gallery.slice(0, 6)
const events = allEvents.slice(0, 1)
</script>

<template>
  <DefaultLayout>
    <template v-if="page">
      <HeroSection
        :headline="page.content.heroHeadline"
        :subtext="page.content.heroSubtext"
        cta-label="Контакт"
        cta-to="/contact"
      />

      <section class="section container">
        <SectionTitle title="Нашата Приказна" align="center" />
        <p class="about-preview">{{ page.content.aboutPreview }}</p>
        <div class="about-preview__link">
          <router-link to="/about" class="btn btn-outline">Дознајте повеќе</router-link>
        </div>
      </section>

      <section class="section container">
        <SectionTitle title="Што е Реформер Пилатес?" align="center" />
        <p class="about-preview">{{ page.content.reformerIntro }}</p>
        <div class="about-preview__link">
          <router-link to="/reformer-pilates" class="btn btn-outline">Дознајте повеќе</router-link>
        </div>
      </section>

      <section class="section container">
        <SectionTitle title="Нашите Инструктори" align="center" />
        <div class="instructors-grid">
          <InstructorCard v-for="instructor in instructors" :key="instructor.id" :instructor="instructor" />
        </div>
        <div class="about-preview__link">
          <router-link to="/instructors" class="btn btn-outline">Запознајте го тимот</router-link>
        </div>
      </section>

      <section class="section container">
        <SectionTitle title="Галерија" align="center" />
        <GalleryGrid :images="galleryImages" />
        <div class="about-preview__link">
          <router-link to="/gallery" class="btn btn-outline">Погледнете ја галеријата</router-link>
        </div>
      </section>

      <section class="section container">
        <SectionTitle title="Настани" align="center" />
        <div class="events-preview">
          <EventCard v-for="event in events" :key="event.id" :event="event" />
        </div>
        <div class="about-preview__link">
          <router-link to="/events" class="btn btn-outline">Погледнете ги настаните</router-link>
        </div>
      </section>

      <CTASection :text="page.content.ctaText" />
    </template>
  </DefaultLayout>
</template>

<style scoped>
.about-preview {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}

.about-preview__link {
  text-align: center;
  margin-top: var(--space-md);
}

.instructors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 360px));
  justify-content: center;
  gap: var(--space-md);
}

.events-preview {
  max-width: 700px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .instructors-grid {
    grid-template-columns: 1fr;
  }
}
</style>
