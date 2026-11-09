import "./hoursCard.css";
import { createHoursTable } from "../components/hoursTable.js";
import { content } from "../data/content.js";
import { createEl } from "../utils/dom.js";

const STORAGE_KEY = "hoursDismissed";
const CARD_ID = "hours-card";

let card;
let toggle;

// Storage access throws when site data is blocked, and that must not stop the page rendering.
function readDismissed() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function saveDismissed(dismissed) {
  try {
    if (dismissed) {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } else {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Without storage the card still toggles, it just resets on reload.
  }
}

function setDismissed(dismissed) {
  card.hidden = dismissed;
  toggle?.setAttribute("aria-expanded", String(!dismissed));
  saveDismissed(dismissed);
}

export function connectHoursToggle(button) {
  toggle = button;
  toggle.setAttribute("aria-controls", CARD_ID);
  toggle.setAttribute("aria-expanded", String(!readDismissed()));
  toggle.addEventListener("click", () => setDismissed(!card.hidden));
}

function createTop() {
  const { title, closeLabel, closeIcon } = content.hours;
  const top = createEl("div", { className: "hours-card__top" });
  const close = createEl("button", {
    className: "hours-card__close",
    text: closeIcon,
    attrs: { type: "button", "aria-label": closeLabel },
  });

  close.addEventListener("click", () => {
    setDismissed(true);

    // Hiding the focused button would otherwise leave keyboard and screen reader users with no focus.
    const spot = card.parentElement;
    spot.tabIndex = -1;
    spot.focus({ preventScroll: true });
  });

  top.appendChild(
    createEl("h2", { className: "hours-card__title", text: title }),
  );
  top.appendChild(close);

  return top;
}

export function createHoursCard() {
  card = createEl("div", { className: "hours-card", attrs: { id: CARD_ID } });

  card.appendChild(createTop());
  card.appendChild(createHoursTable({ variant: "card" }));
  card.appendChild(
    createEl("div", {
      className: "hours-card__address",
      text: content.hours.address,
    }),
  );

  card.hidden = readDismissed();

  return card;
}
