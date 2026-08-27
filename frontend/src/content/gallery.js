// Static gallery for the public site — see src/content/pages.js for why
// this lives here instead of the database. Images themselves live in
// frontend/public/gallery/; to add a new one, drop the file there and add
// a matching entry below (title/alt are shown to visitors, so keep them
// human-readable — unlike the auto-generated ones below carried over from
// the old filename-based sync).

export const gallery = [
  { id: 1, title: '1', image_url: '/gallery/1.jpg', alt_text: 'Velina Reformer — 1', sort_order: 1 },
  { id: 2, title: '11', image_url: '/gallery/11.jpg', alt_text: 'Velina Reformer — 11', sort_order: 2 },
  { id: 3, title: 'Balance', image_url: '/gallery/balance.jpg', alt_text: 'Velina Reformer — Balance', sort_order: 3 },
  { id: 4, title: 'Control', image_url: '/gallery/control.jpg', alt_text: 'Velina Reformer — Control', sort_order: 4 },
  { id: 5, title: 'End', image_url: '/gallery/end.jpg', alt_text: 'Velina Reformer — End', sort_order: 5 },
  { id: 6, title: 'Focus', image_url: '/gallery/focus.jpg', alt_text: 'Velina Reformer — Focus', sort_order: 6 },
  {
    id: 7,
    title: 'Kako Funkc',
    image_url: '/gallery/kako%20funkc.jpg',
    alt_text: 'Velina Reformer — Kako Funkc',
    sort_order: 7,
  },
  {
    id: 8,
    title: 'Meet D 1',
    image_url: '/gallery/meet%20d%201.jpg',
    alt_text: 'Velina Reformer — Meet D 1',
    sort_order: 8,
  },
  {
    id: 9,
    title: 'Meet Daniela',
    image_url: '/gallery/meet%20daniela.jpg',
    alt_text: 'Velina Reformer — Meet Daniela',
    sort_order: 9,
  },
  {
    id: 10,
    title: 'Mentalni Pridobivki',
    image_url: '/gallery/mentalni%20pridobivki.jpg',
    alt_text: 'Velina Reformer — Mentalni Pridobivki',
    sort_order: 10,
  },
  {
    id: 11,
    title: 'Programi I Treninzi',
    image_url: '/gallery/programi%20i%20treninzi.jpg',
    alt_text: 'Velina Reformer — Programi I Treninzi',
    sort_order: 11,
  },
  { id: 12, title: 'Pt1', image_url: '/gallery/pt1.jpg', alt_text: 'Velina Reformer — Pt1', sort_order: 12 },
  {
    id: 13,
    title: 'Zosto Velina R',
    image_url: '/gallery/zosto%20velina%20r.jpg',
    alt_text: 'Velina Reformer — Zosto Velina R',
    sort_order: 13,
  },
]
