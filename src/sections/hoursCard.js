import "./hoursCard.css";
import { createHoursTable } from "../components/hoursTable.js";
import { content } from "../data/content.js";
import { createEl } from "../utils/dom.js";

const STORAGE_KEY = "hoursDismissed";

let card;

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
  saveDismissed(dismissed);
}

export function toggleHoursCard() {
  setDismissed(!card.hidden);
}

function createTop() {
  const { title, closeLabel, closeIcon } = content.hours;
  const top = createEl("div", { className: "hours-card__top" });
  const close = createEl("button", {
    className: "hours-card__close",
    text: closeIcon,
    attrs: { type: "button", "aria-label": closeLabel },
  });

  close.addEventListener("click", () => setDismissed(true));

  top.appendChild(
    createEl("span", { className: "hours-card__title", text: title }),
  );
  top.appendChild(close);

  return top;
}

export function createHoursCard() {
  card = createEl("div", { className: "hours-card" });

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
