import "./logo.css";
import logoLightUrl from "../assets/logo-light.svg";
import logoUrl from "../assets/logo.svg";
import { content } from "../data/content.js";
import { createEl } from "../utils/dom.js";

export function createLogo({ className, light = false } = {}) {
  const link = createEl("a", {
    className: className ? `logo ${className}` : "logo",
    attrs: { href: content.logo.href },
  });

  link.appendChild(
    createEl("img", {
      className: "logo__image",
      attrs: { src: light ? logoLightUrl : logoUrl, alt: content.logo.alt },
    }),
  );

  return link;
}
