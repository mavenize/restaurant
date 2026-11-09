import "./button.css";
import { content } from "../data/content.js";
import { createEl } from "../utils/dom.js";

export function createButton({
  label,
  href,
  arrow,
  variant = "primary",
  compact = false,
  newTab = false,
  className,
}) {
  const classes = ["button", `button--${variant}`];
  if (compact) classes.push("button--compact");
  if (className) classes.push(className);

  const attrs = { href };
  if (newTab) {
    attrs.target = "_blank";
    attrs.rel = "noopener";
  }

  const button = createEl("a", {
    className: classes.join(" "),
    text: label,
    attrs,
  });

  if (arrow) {
    button.appendChild(createEl("span", { text: arrow }));
  }

  return button;
}

export function createBookingButton({ compact, className } = {}) {
  return createButton({ ...content.booking, compact, className, newTab: true });
}
