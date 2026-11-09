import hero800Avif from "../assets/images/hero-800.avif";
import hero800Webp from "../assets/images/hero-800.webp";
import hero1225Avif from "../assets/images/hero-1225.avif";
import hero1225Webp from "../assets/images/hero-1225.webp";
import pasta800Avif from "../assets/images/pasta-800.avif";
import pasta800Webp from "../assets/images/pasta-800.webp";
import pasta1600Avif from "../assets/images/pasta-1600.avif";
import pasta1600Webp from "../assets/images/pasta-1600.webp";
import restaurant800Avif from "../assets/images/restaurang-800.avif";
import restaurant800Webp from "../assets/images/restaurang-800.webp";
import restaurant1600Avif from "../assets/images/restaurang-1600.avif";
import restaurant1600Webp from "../assets/images/restaurang-1600.webp";

const COLUMN_SIZES =
  "(min-width: 1440px) 733px, (min-width: 1024px) calc((100vw - 184px) * 7 / 12), (min-width: 768px) calc(100vw - 128px)";

function srcset(small, smallWidth, large, largeWidth) {
  return `${small} ${smallWidth}w, ${large} ${largeWidth}w`;
}

export const photos = {
  hero: {
    avif: srcset(hero800Avif, 800, hero1225Avif, 1225),
    webp: srcset(hero800Webp, 800, hero1225Webp, 1225),
    fallback: hero800Webp,
    width: 1225,
    height: 1200,
    sizes: `${COLUMN_SIZES}, calc(100vw - 40px)`,
  },
  pasta: {
    avif: srcset(pasta800Avif, 800, pasta1600Avif, 1600),
    webp: srcset(pasta800Webp, 800, pasta1600Webp, 1600),
    fallback: pasta800Webp,
    width: 1600,
    height: 1068,
    sizes: `${COLUMN_SIZES}, 100vw`,
  },
  restaurant: {
    avif: srcset(restaurant800Avif, 800, restaurant1600Avif, 1600),
    webp: srcset(restaurant800Webp, 800, restaurant1600Webp, 1600),
    fallback: restaurant800Webp,
    width: 1600,
    height: 1067,
    sizes: `${COLUMN_SIZES}, calc(100vw - 40px)`,
  },
};
