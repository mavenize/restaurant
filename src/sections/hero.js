import "./hero.css";
import { createBookingButton, createButton } from "../components/button.js";
import { createPhoto } from "../components/photo.js";
import { content } from "../data/content.js";
import { photos } from "../data/photos.js";
import { createEl } from "../utils/dom.js";
import { createHoursCard } from "./hoursCard.js";

function createHeading() {
  const { eyebrow, display, subline } = content.hero;
  const heading = createEl("div", { className: "hero__heading" });
  const title = createEl("h1", { className: "hero__title" });

  title.appendChild(
    createEl("span", { className: "hero__display", text: display }),
  );
  title.appendChild(
    createEl("span", { className: "hero__subline", text: subline }),
  );

  heading.appendChild(
    createEl("div", { className: "hero__eyebrow", text: eyebrow }),
  );
  heading.appendChild(title);

  return heading;
}

function createActions() {
  const actions = createEl("div", { className: "hero__actions" });

  actions.appendChild(createBookingButton());
  actions.appendChild(
    createButton({ ...content.hero.menuButton, variant: "secondary" }),
  );

  return actions;
}

export function createHero() {
  const hero = createEl("section", { className: "hero" });
  const inner = createEl("div", { className: "container hero__inner" });
  const text = createEl("div", { className: "hero__text" });
  const media = createEl("div", { className: "hero__media" });

  text.appendChild(createHeading());
  text.appendChild(createActions());

  media.appendChild(
    createPhoto({
      photo: photos.hero,
      alt: content.hero.photoAlt,
      size: "hero",
      priority: true,
      className: "hero__photo",
    }),
  );
  media.appendChild(createHoursCard());

  inner.appendChild(text);
  inner.appendChild(media);
  hero.appendChild(inner);

  return hero;
}
