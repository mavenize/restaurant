import "./imagePlaceholder.css";
import { createEl } from "../utils/dom.js";

export function createImagePlaceholder({ size, label, tone, className }) {
  const classes = ["placeholder", `placeholder--${size}`];
  if (tone) classes.push(`placeholder--${tone}`);
  if (className) classes.push(className);

  const placeholder = createEl("div", { className: classes.join(" ") });

  placeholder.appendChild(
    createEl("span", {
      className: "placeholder__label placeholder__label--desktop",
      text: label.desktop,
    }),
  );
  placeholder.appendChild(
    createEl("span", {
      className: "placeholder__label placeholder__label--mobile",
      text: label.mobile,
    }),
  );

  return placeholder;
}
