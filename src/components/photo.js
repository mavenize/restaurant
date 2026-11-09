import "./photo.css";
import { createEl } from "../utils/dom.js";

export function createPhoto({ photo, alt, size, priority = false, className }) {
  const { avif, webp, fallback, width, height, sizes } = photo;
  const classes = ["photo", `photo--${size}`];
  if (className) classes.push(className);

  const picture = createEl("picture", { className: classes.join(" ") });
  const loading = priority ? { fetchpriority: "high" } : { loading: "lazy" };

  picture.appendChild(
    createEl("source", { attrs: { type: "image/avif", srcset: avif, sizes } }),
  );
  picture.appendChild(
    createEl("source", { attrs: { type: "image/webp", srcset: webp, sizes } }),
  );
  picture.appendChild(
    createEl("img", {
      className: "photo__image",
      attrs: { ...loading, alt, width, height, src: fallback },
    }),
  );

  return picture;
}
