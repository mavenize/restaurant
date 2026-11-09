import "./hoursTable.css";
import { content } from "../data/content.js";
import { createEl } from "../utils/dom.js";

export function createHoursTable({ variant, className }) {
  const classes = ["hours-table", `hours-table--${variant}`];
  if (className) classes.push(className);

  const table = createEl("dl", { className: classes.join(" ") });

  content.hours.rows.forEach(({ days, time }) => {
    table.appendChild(createEl("dt", { text: days }));
    table.appendChild(createEl("dd", { text: time }));
  });

  return table;
}
