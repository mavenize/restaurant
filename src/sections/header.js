import { createEl } from "../utils/dom.js";

export function createHeader() {
  return createEl("header", { className: "header" });
}
