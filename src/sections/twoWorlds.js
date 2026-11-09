import "./twoWorlds.css";
import { createPhoto } from "../components/photo.js";
import { content } from "../data/content.js";
import { photos } from "../data/photos.js";
import { createEl } from "../utils/dom.js";

function createText() {
  const { heading, body } = content.twoWorlds;
  const text = createEl("div", { className: "two-worlds__text" });

  text.appendChild(
    createEl("h2", { className: "two-worlds__heading", text: heading }),
  );
  text.appendChild(
    createEl("p", { className: "two-worlds__body", text: body }),
  );

  return text;
}

export function createTwoWorlds() {
  const band = createEl("section", { className: "two-worlds" });
  const inner = createEl("div", { className: "container two-worlds__inner" });

  inner.appendChild(createText());
  inner.appendChild(
    createPhoto({
      photo: photos.restaurant,
      alt: content.twoWorlds.photoAlt,
      size: "restaurant",
    }),
  );
  band.appendChild(inner);

  return band;
}
