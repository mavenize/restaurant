import "./visit.css";
import { createBookingButton } from "../components/button.js";
import { createHoursTable } from "../components/hoursTable.js";
import { content } from "../data/content.js";
import { createEl } from "../utils/dom.js";

function createInfo() {
  const { title, address } = content.hours;
  const info = createEl("div", { className: "visit__info" });

  info.appendChild(createEl("h2", { className: "visit__heading", text: title }));
  info.appendChild(createHoursTable({ variant: "section" }));
  info.appendChild(
    createEl("div", { className: "visit__address", text: address }),
  );
  info.appendChild(createBookingButton({ className: "visit__booking" }));

  return info;
}

function createMap() {
  const { mapTitle, mapSrc } = content.visit;

  return createEl("iframe", {
    className: "visit__map",
    attrs: { src: mapSrc, title: mapTitle, loading: "lazy" },
  });
}

export function createVisit() {
  const visit = createEl("section", { className: "visit" });
  const inner = createEl("div", { className: "container visit__inner" });

  inner.appendChild(createInfo());
  inner.appendChild(createMap());
  visit.appendChild(inner);

  return visit;
}
