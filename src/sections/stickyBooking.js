import "./stickyBooking.css";
import { createBookingButton } from "../components/button.js";
import { createEl } from "../utils/dom.js";

export function createStickyBooking(footer) {
  const bar = createEl("div", { className: "sticky-booking" });

  bar.appendChild(createBookingButton({ className: "sticky-booking__button" }));

  new IntersectionObserver(([entry]) => {
    bar.hidden = entry.isIntersecting;
  }).observe(footer);

  return bar;
}
