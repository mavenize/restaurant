import "./pasta.css";
import { createPhoto } from "../components/photo.js";
import { content } from "../data/content.js";
import { photos } from "../data/photos.js";
import { createEl } from "../utils/dom.js";

function createText() {
  const { heading, body } = content.pasta;
  const text = createEl("div", { className: "pasta__text" });

  text.appendChild(createEl("h2", { className: "pasta__heading", text: heading }));
  text.appendChild(createEl("p", { text: body }));

  return text;
}

export function createPasta() {
  const pasta = createEl("section", { className: "pasta" });
  const inner = createEl("div", { className: "container pasta__inner" });

  inner.appendChild(
    createPhoto({
      photo: photos.pasta,
      alt: content.pasta.photoAlt,
      size: "pasta",
    }),
  );
  inner.appendChild(createText());
  pasta.appendChild(inner);

  return pasta;
}
