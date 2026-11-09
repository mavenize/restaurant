import "./header.css";
import { createBookingButton } from "../components/button.js";
import { createLogo } from "../components/logo.js";
import { content } from "../data/content.js";
import { createEl } from "../utils/dom.js";

function createNav() {
  const nav = createEl("nav", { className: "header__nav" });

  content.header.nav.forEach(({ label, href }) => {
    nav.appendChild(
      createEl("a", {
        className: "header__link",
        text: label,
        attrs: { href },
      }),
    );
  });

  nav.appendChild(
    createEl("button", {
      className: "header__link",
      text: content.header.hoursToggle,
      attrs: { type: "button" },
    }),
  );

  return nav;
}

function createActions() {
  const { label, ariaLabel, href } = content.header.instagram;
  const actions = createEl("div", { className: "header__actions" });

  actions.appendChild(
    createEl("a", {
      className: "header__instagram",
      text: label,
      attrs: { href, "aria-label": ariaLabel },
    }),
  );
  actions.appendChild(createBookingButton({ compact: true }));

  return actions;
}

export function createHeader() {
  const header = createEl("header", { className: "header" });
  const inner = createEl("div", { className: "container header__inner" });

  inner.appendChild(createLogo());
  inner.appendChild(createNav());
  inner.appendChild(createActions());
  header.appendChild(inner);

  return header;
}
