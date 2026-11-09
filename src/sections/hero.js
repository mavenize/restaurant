import { createEl } from "../utils/dom.js";

export function createHero() {
  return createEl("section", { className: "hero" });
}
