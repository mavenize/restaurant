import "./mobileMenu.css";
import { content } from "../data/content.js";
import { createEl } from "../utils/dom.js";

const MENU_ID = "mobile-menu";
const OPEN_CLASS = "mobile-menu--open";
const BODY_LOCK_CLASS = "mobile-menu-locked";
const PAGE_BEHIND_MENU = "main, footer";

export function createMobileMenu(toggle) {
  const { nav, navLabel, openIcon, closeIcon } = content.mobileMenu;
  const menu = createEl("nav", {
    className: "mobile-menu",
    attrs: { id: MENU_ID, "aria-label": navLabel },
  });

  nav.forEach(({ label, href }) => {
    menu.appendChild(
      createEl("a", {
        className: "mobile-menu__link",
        text: label,
        attrs: { href },
      }),
    );
  });

  const isOpen = () => menu.classList.contains(OPEN_CLASS);

  function setOpen(open) {
    menu.classList.toggle(OPEN_CLASS, open);
    document.body.classList.toggle(BODY_LOCK_CLASS, open);
    document.querySelectorAll(PAGE_BEHIND_MENU).forEach((element) => {
      element.toggleAttribute("inert", open);
    });
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? closeIcon : openIcon;
  }

  toggle.setAttribute("aria-controls", MENU_ID);
  toggle.addEventListener("click", () => setOpen(!isOpen()));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // The overlay is mobile-only, so growing past the breakpoint must also release the scroll lock.
  window.matchMedia("(max-width: 767px)").addEventListener("change", (event) => {
    if (!event.matches) setOpen(false);
  });

  setOpen(false);

  return menu;
}
