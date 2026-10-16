// Static page copy for the public site.
//
// This used to be served from the Laravel API (`Page` model / `pages` table)
// so a future admin panel could edit it without a frontend rebuild. Until
// that admin UI actually exists, keeping copy in the database just meant
// editing a row by hand to change a sentence — so it lives here instead.
// Edit a value below and refresh; no backend or migration involved.
//
// [Placeholder] marks copy that still needs to come from the client.

export const pages = {
  home: {
    title: 'Velina Reformer',
    content: {
      heroHeadline: 'Mind • Body • Balance',
      heroSubtext: 'Уникатно искуство со Реформер Пилатес',
      aboutPreview:
        'Велина Реформер настана со желба да создадеме простор во Струмица каде Реформер Пилатес е достапен за секого, без разлика на возраста или нивото на подготвеност.',
      reformerIntro:
        'Reformer Pilates е современ метод на вежбање кој ги комбинира контролираното движење, правилното дишење, силата, флексибилноста и стабилноста на телото. Се изведува на специјална справа наречена Reformer, која преку подвижна платформа, пружини и ремени овозможува различни вежби со прилагодлив отпор.\n\n' +
        'За разлика од класичните тренинзи, Reformer Pilates става акцент на квалитетот на движењето, правилната техника и свесното активирање на мускулите. Секоја вежба има своја цел — од зајакнување на мускулатурата и подобрување на држењето на телото, до зголемување на подвижноста, рамнотежата и координацијата.',
      ctaText: 'Подготвени сте да го искусите Реформер Пилатес? Контактирајте го нашето студио.',
    },
  },
  about: {
    title: 'Нашата Приказна | Велина Реформер',
    // Draft copy standing in for the client's own story/voice — short and
    // generic on purpose so it reads fine live, but still meant to be
    // replaced once the client sends their real text.
    content: {
      story:
        'Велина Реформер настана со желба да создадеме простор во Струмица каде Реформер Пилатес е достапен за секого, без разлика на возраста или нивото на подготвеност. Она што почна како мала идеја, прерасна во студио каде движењето и посветеноста станаа дел од секојдневието на нашите клиенти.',
      philosophy:
        'Веруваме дека вистинската сила доаѓа од контрола, а не од брзина. Секоја вежба на реформерот е осмислена да го зајакне телото одвнатре, да ја подобри положбата и да создаде рамнотежа помеѓу умот и движењето.',
      mission:
        'Нашата мисија е да им овозможиме на луѓето во Струмица пристап до безбеден, квалитетен и персонализиран тренинг, воден од искусни инструктори кои внимаваат на секој детал во движењето.',
      difference:
        'Малите групи, индивидуалниот пристап и вниманието кон секој клиент се она што нè издвојува. Кај нас, секој тренинг се приспособува на телото и целите на клиентот — не обратно.',
    },
  },
  'reformer-pilates': {
    title: 'Реформер Пилатес | Велина Реформер',
    // Draft copy standing in for the client's own text — short and generic
    // on purpose so it reads fine live, but still meant to be replaced once
    // the client sends their real text.
    content: {
      whatIsIt:
        'Reformer Pilates е современ метод на вежбање кој ги комбинира контролираното движење, правилното дишење, силата, флексибилноста и стабилноста на телото. Се изведува на специјална справа наречена Reformer, која преку подвижна платформа, пружини и ремени овозможува различни вежби со прилагодлив отпор.\n\n' +
        'За разлика од класичните тренинзи, Reformer Pilates става акцент на квалитетот на движењето, правилната техника и свесното активирање на мускулите. Секоја вежба има своја цел — од зајакнување на мускулатурата и подобрување на држењето на телото, до зголемување на подвижноста, рамнотежата и координацијата.',
      howItWorks:
        'Реформерот користи систем од пружини и ремени кои создаваат контролиран отпор. Секое движење може да се направи полесно или потешко - според вашето ниво. На реформерот, ти учиш да ja слушаш тишината на своето тело - таму каде што започнува вистинската промена.',
      benefits:
        'Редовната пракса придонесува за посилно централно тело (core), подобрена положба на телото, поголема флексибилност и подобра свесност за сопствените движења. Многу клиенти забележуваат и олеснување на болки во грбот и подобрена рамнотежа.',
      suitableFor:
        'Реформер Пилатес е погоден за широк опсег на нивоа на подготвеност — од почетници до напредни вежбачи. Интензитетот и вежбите се приспособуваат индивидуално, па затоа е соодветен и за лица кои се опоравуваат од повреда, по консултација со студиото.',
      typicalSession:
        'Еден типичен час трае околу 55 минути и е целосно воден од инструктор, кој внимава на правилната техника и држење на телото во секое движење. Часовите се одржуваат во мали групи или индивидуално, во зависност од потребите на клиентот.',
    },
  },
  contact: {
    title: 'Контакт | Велина Реформер',
    content: {
      phone: '+389 77 503 524',
      email: 'info@velinareformer.mk',
      address: 'Strumica, North Macedonia',
      instagram: 'https://www.instagram.com/velinareformer?igsi=Mmx6Y3o0amo4cDZr',
      facebook: 'https://www.facebook.com/profile.php?id=61582159225800',
      tiktok: 'https://www.tiktok.com/@velinareformer',
      mapEmbedUrl: '',
      // Outbound link (as opposed to mapEmbedUrl above, which is just the
      // read-only iframe preview) so visitors can open the studio's location
      // in Google Maps / get directions.
      mapsUrl: 'https://www.google.com/maps?q=Velina+Reformer+Pilates,+Strumica',
    },
  },
}
