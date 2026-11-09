const LIVE_SITE = "https://tropicalunpezzo.se";

const urls = {
  home: "/",
  menu: `${LIVE_SITE}/pdf/meny-sv.pdf`,
  catering: `${LIVE_SITE}/sv/catering-abonnering-stockholm-kungstradgarden/`,
  about: `${LIVE_SITE}/sv/om-oss-pizza-restaurang-i-kungstradgarden-stockholm/`,
  pizza: `${LIVE_SITE}/sv/pizza-stockholm/`,
  wine: `${LIVE_SITE}/sv/vin-ol-stockholm/`,
  instagram: "https://www.instagram.com/tropicalunpezzo/",
  booking:
    "https://app.bokabord.se/reservation/?hash=e6ffe59d993ee60529e78c6e3acbc8f4",
  email: "mailto:info@tropicalunpezzo.se",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8140.2956065595745!2d18.0722783!3d59.33172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d9de862c853%3A0x3bb4ca18333bd2e9!2sTROPICAL%20UN%20PEZZO%20D%E2%80%99ITALIA!5e0!3m2!1sen!2sse!4v1719953943579!5m2!1sen!2sse",
};

const instagramLabel = "Instagram";
const mainNavLabel = "Huvudmeny";

export const content = {
  urls,

  logo: {
    alt: "Tropical un pezzo d'Italia",
    href: urls.home,
  },

  booking: {
    label: "Boka bord",
    arrow: "→",
    href: urls.booking,
  },

  hours: {
    title: "Öppettider",
    closeLabel: "Stäng",
    closeIcon: "✕",
    address: "Kungsträdgårdsgatan 12",
    rows: [
      { days: "Måndag", time: "Stängt" },
      { days: "Tisdag", time: "11 - 15" },
      { days: "Ons-Fre", time: "11 - 21" },
      { days: "Lör-Sön", time: "12 - 21" },
    ],
  },

  header: {
    navLabel: mainNavLabel,
    nav: [
      { label: "MENY", href: urls.menu },
      { label: "CATERING & ABONNERING", href: urls.catering },
    ],
    hoursToggle: "ÖPPETTIDER",
    instagram: {
      label: "IG",
      ariaLabel: `IG ${instagramLabel}`,
      href: urls.instagram,
    },
  },

  mobileMenu: {
    navLabel: mainNavLabel,
    toggleLabel: "Meny",
    openIcon: "☰",
    closeIcon: "✕",
    nav: [
      { label: "Meny", href: urls.menu },
      { label: "Catering & abonnering", href: urls.catering },
      { label: instagramLabel, href: urls.instagram },
    ],
  },

  hero: {
    eyebrow: "KUNGSTRÄDGÅRDSGATAN 12 · STOCKHOLM",
    display: "Salve!",
    subline: "Vad kul att ni hittat hit! Vi är en italiensk restaurang",
    menuButton: { label: "Se menyn (PDF)", href: urls.menu },
    placeholder: {
      desktop: "hero · uteservering Kungsträdgården · 1680×1280 webp",
      mobile: "hero · 800×1000 webp",
    },
  },

  intro: {
    lead: "Tropical Un pezzo D'italia, mitt i kungsträdgården - välkommen in!",
    body: "där fokus alltid ligger på enkelhet, smak och gemenskap. Här serverar vi allt från nygräddad pizza till genuina italienska rätter som tar dig direkt till Medelhavets soliga gator i hjärtat av Stockholm. Hos oss kan du njuta av utvalda viner, öl och en meny där klassiker möter nya favoriter. Vi erbjuder även catering för både små och stora tillställningar - perfekt när du vill överraska dina gäster med något extra. Vi är vad vi kallar oss en bit av Italien:",
  },

  pasta: {
    heading: "Italiensk pasta i Stockholm",
    body: "Vi är stolta över att servera autentisk pasta, tillagad med kärlek och traditionella italienska recept. Perfekt som en mättande lunch eller en smakrik middag i hjärtat av staden. Varje tallrik är en resa till Italiens kulinariska arv, där färska råvaror och genuin kvalitet står i centrum. Förutom våra klassiska pastarätter erbjuder vi ett brett urval av smaker som garanterat mättar både stora och små sällskap. Välkommen till Tropical un pezzo d'Italia, en plats där du kan njuta av en bit av Italien mitt i Kungsträdgården!",
    placeholder: {
      desktop: "gelato · 1600×1200 webp",
      mobile: "gelato · 800×600 webp",
    },
  },

  twoWorlds: {
    heading: "Två världar blir till en hos oss.",
    // "välkommna" is the live site's spelling, kept until the client confirms a fix.
    body: "Vi hälsar stora som små välkommna in - en plats där Stockholm möter Italien, och där vi önskar att varje besök blir något att minnas.",
    placeholder: {
      desktop: "restaurang · 1600×1100 webp",
      mobile: "restaurang · 800×600 webp",
    },
  },

  visit: {
    mapTitle: "Karta till Tropical un pezzo d'Italia",
    mapSrc: urls.map,
  },

  footer: {
    navLabel: "Sidfot",
    nav: [
      { label: "HEM", href: urls.home },
      { label: "MENY", href: urls.menu },
      { label: "CATERING & ABONNERING", href: urls.catering },
      { label: "OM OSS", href: urls.about },
      { label: "PIZZA", href: urls.pizza },
      { label: "VIN & ÖL", href: urls.wine },
    ],
    copyright: "© Copyright 2025 tropicalunpezzo.se |",
    email: { label: "info@tropicalunpezzo.se", href: urls.email },
    instagram: { label: instagramLabel, href: urls.instagram },
  },
};
