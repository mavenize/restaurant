import "./styles.css";
import { createEl } from "./utils/dom.js";
import { createHeader } from "./sections/header.js";
import { createHero } from "./sections/hero.js";
import { createIntro } from "./sections/intro.js";
import { createPasta } from "./sections/pasta.js";
import { createTwoWorlds } from "./sections/twoWorlds.js";
import { createVisit } from "./sections/visit.js";
import { createFooter } from "./sections/footer.js";
import { createStickyBooking } from "./sections/stickyBooking.js";

const content = document.getElementById("content");
const main = createEl("main");

main.appendChild(createHero());
main.appendChild(createIntro());
main.appendChild(createPasta());
main.appendChild(createTwoWorlds());
main.appendChild(createVisit());

content.appendChild(createHeader());
content.appendChild(main);
content.appendChild(createFooter());
content.appendChild(createStickyBooking());
