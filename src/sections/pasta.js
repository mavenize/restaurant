import "./pasta.css";
import { createImagePlaceholder } from "../components/imagePlaceholder.js";
import { content } from "../data/content.js";
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
    createImagePlaceholder({
      size: "gelato",
      label: content.pasta.placeholder,
      className: "pasta__photo",
    }),
  );
  inner.appendChild(createText());
  pasta.appendChild(inner);

  return pasta;
}
