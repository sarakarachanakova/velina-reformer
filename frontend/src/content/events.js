// Static "Настани" (events) content for the public site — same static-content
// pattern as src/content/gallery.js and src/content/instructors.js (see
// src/content/pages.js for why content lives here instead of the database).
//
// To add a real event:
//   1. Create frontend/public/events/<event-slug>/ and drop 3-5 photos in it
//      (mirrors how frontend/public/gallery/ holds the gallery photos).
//   2. Add an entry below with a title, date (YYYY-MM-DD), a short
//      description, and an `images` array (3-5 entries) pointing at those
//      photos. Each image needs a human-readable `alt` — it's read aloud by
//      screen readers and shown if the photo fails to load.
//   3. New entries are shown in the order they appear in this array — put
//      the most recent event first.
//
// [Placeholder] marks copy/photos below that still need the client's real
// event details — these entries borrow existing gallery photos as stand-ins
// so the "Настани" page layout can be previewed before real content exists.

export const events = [
  {
    id: 1,
    title: '[Placeholder] Прослава на годишнина од отворањето',
    date: '2026-07-04',
    description:
      '[Placeholder] Краток опис на настанот — што се случуваше, кој учествуваше и зошто беше посебен за студиото. Ќе биде заменето со вистинската содржина од клиентот.',
    images: [
      { url: '/gallery/kako%20funkc.jpg', alt: 'Прослава на годишнина од отворањето — фотографија 1' },
      { url: '/gallery/meet%20d%201.jpg', alt: 'Прослава на годишнина од отворањето — фотографија 2' },
      { url: '/gallery/meet%20daniela.jpg', alt: 'Прослава на годишнина од отворањето — фотографија 3' },
      { url: '/gallery/mentalni%20pridobivki.jpg', alt: 'Прослава на годишнина од отворањето — фотографија 4' },
      { url: '/gallery/programi%20i%20treninzi.jpg', alt: 'Прослава на годишнина од отворањето — фотографија 5' },
    ],
    sort_order: 1,
  },
  {
    id: 2,
    title: '[Placeholder] Отворен ден во студиото',
    date: '2026-05-16',
    description:
      '[Placeholder] Краток опис на настанот — што се случуваше, кој учествуваше и зошто беше посебен за студиото. Ќе биде заменето со вистинската содржина од клиентот.',
    images: [
      { url: '/gallery/1.jpg', alt: 'Отворен ден во студиото — фотографија 1' },
      { url: '/gallery/balance.jpg', alt: 'Отворен ден во студиото — фотографија 2' },
      { url: '/gallery/focus.jpg', alt: 'Отворен ден во студиото — фотографија 3' },
      { url: '/gallery/control.jpg', alt: 'Отворен ден во студиото — фотографија 4' },
    ],
    sort_order: 2,
  },
  {
    id: 3,
    title: '[Placeholder] Работилница за правилно дишење и техника',
    date: '2026-03-10',
    description:
      '[Placeholder] Краток опис на настанот — што се случуваше, кој учествуваше и зошто беше посебен за студиото. Ќе биде заменето со вистинската содржина од клиентот.',
    images: [
      { url: '/gallery/11.jpg', alt: 'Работилница за правилно дишење и техника — фотографија 1' },
      { url: '/gallery/end.jpg', alt: 'Работилница за правилно дишење и техника — фотографија 2' },
      { url: '/gallery/pt1.jpg', alt: 'Работилница за правилно дишење и техника — фотографија 3' },
    ],
    sort_order: 3,
  },
]
