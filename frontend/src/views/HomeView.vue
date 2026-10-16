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
const galleryImages = gallery.slice(0, 12)
// Featured on the landing page by id, independent of the order on /events.
const FEATURED_EVENT_ID = 2
const events = allEvents.filter((event) => event.id === FEATURED_EVENT_ID)
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

      <section class="section container px-5" v-reveal>
        <SectionTitle title="Нашата Приказна" align="center" />
        <p class="about-preview">{{ page.content.aboutPreview }}</p>
        <div class="about-preview__link">
          <router-link to="/about" class="btn btn-outline">Дознајте повеќе</router-link>
        </div>
      </section>

      <section class="section container px-5" v-reveal>
        <SectionTitle title="Што е Реформер Пилатес?" align="center" />
        <p class="about-preview text-multiline">{{ page.content.reformerIntro }}</p>
        <div class="about-preview__link">
          <router-link to="/reformer-pilates" class="btn btn-outline">Дознајте повеќе</router-link>
        </div>
      </section>

      <section class="section container px-5">
        <SectionTitle title="Нашите Инструктори" align="center" v-reveal />
        <div class="row g-4 justify-content-center">
          <div
            v-for="(instructor, index) in instructors"
            :key="instructor.id"
            class="col-12 col-sm-6 col-lg-4"
          >
            <InstructorCard :instructor="instructor" :reveal-delay="index * 100" />
          </div>
        </div>
        <div class="about-preview__link">
          <router-link to="/instructors" class="btn btn-outline">Запознајте го тимот</router-link>
        </div>
      </section>

      <section class="section container px-5">
        <SectionTitle title="Галерија" align="center" v-reveal />
        <GalleryGrid :images="galleryImages" :mobile-columns="3" />
        <div class="about-preview__link">
          <router-link to="/gallery" class="btn btn-outline">Погледнете ја галеријата</router-link>
        </div>
      </section>

      <section class="section container px-5">
        <SectionTitle title="Настани" align="center" v-reveal />
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

/* reformerIntro content uses \n line breaks between paragraphs. */
.text-multiline {
  white-space: pre-line;
}

.about-preview__link {
  text-align: center;
  margin-top: var(--space-md);
}

.events-preview {
  max-width: 700px;
  margin: 0 auto;
}
</style>
