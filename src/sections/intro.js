import "./intro.css";
import { content } from "../data/content.js";
import { createEl } from "../utils/dom.js";

export function createIntro() {
  const { lead, body } = content.intro;
  const intro = createEl("section", { className: "intro" });
  const inner = createEl("div", { className: "container intro__inner" });

  inner.appendChild(createEl("p", { className: "intro__lead", text: lead }));
  inner.appendChild(createEl("p", { className: "intro__body", text: body }));
  intro.appendChild(inner);

  return intro;
}
