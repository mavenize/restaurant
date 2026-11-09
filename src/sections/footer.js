import "./footer.css";
import { createLogo } from "../components/logo.js";
import { content } from "../data/content.js";
import { createEl } from "../utils/dom.js";

function createNav() {
  const nav = createEl("nav", { className: "footer__nav" });

  content.footer.nav.forEach(({ label, href }) => {
    nav.appendChild(
      createEl("a", {
        className: "footer__link",
        text: label,
        attrs: { href },
      }),
    );
  });

  return nav;
}

function createBottom() {
  const { copyright, email, instagram } = content.footer;
  const bottom = createEl("div", { className: "footer__bottom" });
  const legal = createEl("span", { text: `${copyright} ` });

  legal.appendChild(
    createEl("a", {
      className: "footer__legal-link",
      text: email.label,
      attrs: { href: email.href },
    }),
  );

  bottom.appendChild(legal);
  bottom.appendChild(
    createEl("a", {
      className: "footer__legal-link footer__instagram",
      text: instagram.label,
      attrs: { href: instagram.href },
    }),
  );

  return bottom;
}

export function createFooter() {
  const footer = createEl("footer", { className: "footer" });
  const inner = createEl("div", { className: "container footer__inner" });
  const top = createEl("div", { className: "footer__top" });

  top.appendChild(createLogo({ className: "footer__logo" }));
  top.appendChild(createNav());

  inner.appendChild(top);
  inner.appendChild(createBottom());
  footer.appendChild(inner);

  return footer;
}
