// Static "Настани" (events) content for the public site — same static-content
// pattern as src/content/gallery.js and src/content/instructors.js (see
// src/content/pages.js for why content lives here instead of the database).
//
// To add a real event:
//   1. Create frontend/public/events/<event-slug>/ and drop 3-5 photos in it,
//      named 1.jpg, 2.jpg, 3.jpg... in display order (mirrors how
//      frontend/public/gallery/ holds the gallery photos).
//   2. Add an entry below with a title, date (YYYY-MM-DD), a short
//      description, and an `images` array pointing at those photos in order.
//      Each image needs a human-readable `alt` — it's read aloud by screen
//      readers and shown if the photo fails to load.
//   3. Entries are shown in the order they appear in this array — put the
//      most recent event first.
//
// Photos are real, taken from frontend/public/events/<folder>/. Dates and
// descriptions are still empty — the card hides them until they're filled in.

export const events = [
  {
    id: 1,
    title: 'Velina x HUMN',
    date: null,
    description: '',
    images: [
      { url: '/events/event%201%20humn%20park/1.jpg', alt: 'Humn Park — фотографија 1' },
      { url: '/events/event%201%20humn%20park/2.jpg', alt: 'Humn Park — фотографија 2' },
      { url: '/events/event%201%20humn%20park/3.jpg', alt: 'Humn Park — фотографија 3' },
      { url: '/events/event%201%20humn%20park/4.jpg', alt: 'Humn Park — фотографија 4' },
      { url: '/events/event%201%20humn%20park/5.jpg', alt: 'Humn Park — фотографија 5' },
    ],
    sort_order: 1,
  },
  {
    id: 2,
    title: 'Velina Spring Garden Session',
    date: null,
    description: '',
    images: [
      { url: '/events/event%202%20ilovica/4.jpg', alt: 'Velina Spring Garden Session — фотографија 1' },
      { url: '/events/event%202%20ilovica/2.jpg', alt: 'Velina Spring Garden Session — фотографија 2' },
      { url: '/events/event%202%20ilovica/3.jpg', alt: 'Velina Spring Garden Session — фотографија 3' },
      { url: '/events/event%202%20ilovica/1.jpg', alt: 'Velina Spring Garden Session — фотографија 4' },
      { url: '/events/event%202%20ilovica/5.jpg', alt: 'Velina Spring Garden Session — фотографија 5' },
    ],
    sort_order: 2,
  },
  {
    id: 3,
    title: 'Velina Mindful Morning',
    date: null,
    description: '',
    images: [
      { url: '/events/event%203%20so%20joga/1.jpg', alt: 'Velina Mindful Morning — фотографија 1' },
      { url: '/events/event%203%20so%20joga/2.jpg', alt: 'Velina Mindful Morning — фотографија 2' },
      { url: '/events/event%203%20so%20joga/3.jpg', alt: 'Velina Mindful Morning — фотографија 3' },
      { url: '/events/event%203%20so%20joga/4.jpg', alt: 'Velina Mindful Morning — фотографија 4' },
    ],
    sort_order: 3,
  },
  {
    id: 4,
    title: "Velina's Summer Glow Experience",
    date: null,
    description: '',
    images: [
      { url: '/events/event%204%20vila%20roni/1.jpg', alt: "Velina's Summer Glow Experience — фотографија 1" },
      { url: '/events/event%204%20vila%20roni/2.jpg', alt: "Velina's Summer Glow Experience — фотографија 2" },
      { url: '/events/event%204%20vila%20roni/3.jpg', alt: "Velina's Summer Glow Experience — фотографија 3" },
      { url: '/events/event%204%20vila%20roni/4.jpg', alt: "Velina's Summer Glow Experience — фотографија 4" },
      { url: '/events/event%204%20vila%20roni/5.jpg', alt: "Velina's Summer Glow Experience — фотографија 5" },
    ],
    sort_order: 4,
  },
  {
    id: 5,
    title: 'Aquapilates with Velina',
    date: null,
    description: '',
    images: [
      { url: '/events/event%205%20aquapilates/1.jpg', alt: 'Aquapilates with Velina — фотографија 1' },
      { url: '/events/event%205%20aquapilates/2.jpg', alt: 'Aquapilates with Velina — фотографија 2' },
      { url: '/events/event%205%20aquapilates/3.jpg', alt: 'Aquapilates with Velina — фотографија 3' },
      { url: '/events/event%205%20aquapilates/4.jpg', alt: 'Aquapilates with Velina — фотографија 4' },
      { url: '/events/event%205%20aquapilates/5.jpg', alt: 'Aquapilates with Velina — фотографија 5' },
    ],
    sort_order: 5,
  },
  {
    id: 6,
    title: 'Velina Poolside Sunset Session',
    date: null,
    description: '',
    images: [
      { url: '/events/event%206%20lebedovo%20ezero/1.jpg', alt: 'Velina Poolside Sunset Session — фотографија 1' },
      { url: '/events/event%206%20lebedovo%20ezero/2.jpg', alt: 'Velina Poolside Sunset Session — фотографија 2' },
      { url: '/events/event%206%20lebedovo%20ezero/3.jpg', alt: 'Velina Poolside Sunset Session — фотографија 3' },
      { url: '/events/event%206%20lebedovo%20ezero/4.jpg', alt: 'Velina Poolside Sunset Session — фотографија 4' },
    ],
    sort_order: 6,
  },
]
