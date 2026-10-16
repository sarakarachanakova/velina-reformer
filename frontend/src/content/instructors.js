// Static instructor roster for the public site — see src/content/pages.js
// for why this lives here instead of the database. To add, remove, or
// reorder an instructor, edit this array directly.

export const instructors = [
  {
    id: 1,
    name: 'Данела Велинска',
    role: 'Lead Instructor',
    bio: 'Сертифициран Реформер Пилатес инструктор, посветена на правилно движење, сила и баланс.',
    image_url: '/instruktori/daniela-instruktor.jpeg',
    sort_order: 1,
  },
  {
    id: 2,
    name: 'Ѓорги Танушев',
    role: 'Reformer Instructor',
    bio: 'Инструктор по Реформер Пилатес со фокус на функционален тренинг и индивидуален пристап.',
    image_url: '/instruktori/gjorgi-instruktor.jpeg',
    sort_order: 2,
  },
]
