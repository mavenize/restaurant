import "./twoWorlds.css";
import { createImagePlaceholder } from "../components/imagePlaceholder.js";
import { content } from "../data/content.js";
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
    createImagePlaceholder({
      size: "restaurant",
      tone: "terracotta",
      label: content.twoWorlds.placeholder,
    }),
  );
  band.appendChild(inner);

  return band;
}
