# Tropical un pezzo d'Italia: home page

A single home page for an Italian restaurant in Stockholm, in Swedish, bundled with Webpack and rendered entirely from JavaScript. `design_handoff_home_page/` is the source of truth for look, copy and behaviour: open `design-reference.html` for desktop (1a), mobile (1b) and the spec (1c), and read its `README.md`. Where the handoff says "no build step" or gives a different folder layout, this project's Webpack setup and `plan.md` win.

`plan.md` holds the full project plan. This file holds the working rules.

## Commands
- `npx webpack serve`: live dev server at http://localhost:8080
- `npm run build`: production build to `dist/`

## Code rules
- Build all page content with `document.createElement` and `appendChild`, using the `createEl` helper in `src/utils/dom.js` to create elements. Never use `innerHTML`, `insertAdjacentHTML`, or HTML inside template strings.
- `src/template.html` holds only the `<head>` and `<div id="content"></div>`. The `<head>` tags stay there because social scrapers do not run JS.
- Copy, hours, address and URLs live only in `src/data/content.js`. Copy stays verbatim from the design.
- Use one DOM for all screen widths and adapt it with CSS. Breakpoints: ≤767, 768–1023, ≥1024.
- Style with classes and the tokens in `src/styles/tokens.css`. No inline styles, and no hard-coded colours outside that file.
- Each section is a module in `src/sections/` that exports a `createX()` function returning an element, with its CSS beside it.
- Install a package only when a task needs it.
- Never start a code comment with the words TODO, FIXME or NOTE, in any letter case. The extension scans every workspace file and imports those comments onto the board as tasks.

## Task board (todo4vcode)
The ToDo4VCode extension is in shared-file mode and watches `.todo4vcode/shared-tasks.json`, so edits to that file appear on the board. `plan.md` defines the tasks, and the board tracks their state. All code must belong to a task on the board. If work has no task, add one first.

Every task has:
- `text`: an ID and title, such as `T-07 · Shared components`
- `description`: goal and files, in plain text because the field does not render Markdown
- `priority`: `Must`, `Should`, `Could` or `Wont`
- `tags`: its phase, such as `phase-1`
- `subtasks`: its **Definition of Done**, one item per subtask, each prefixed `DoD:`, so progress shows as checkboxes

When editing the file by hand:
- Keep the JSON valid, or the extension falls back to its last valid copy.
- Keep `completed` true only when `status` is `Done`.
- Give new tasks an `order` 1000 above the highest existing value.
- Re-read the file before each edit, because the user may have changed it in the extension.

Status flow:
- `Todo`: not started
- `In Progress`: being built, one task at a time
- `Testing`: Definition of Done checked and commit proposed, waiting on the user
- `Done`: the user has confirmed it

## Working loop
Build one task at a time, in plan order:
1. Set the task to `In Progress`.
2. Build only that task's scope. Anything else that turns up becomes a new task.
3. Check every Definition of Done item, including `npm run build` and that `src/` has no `innerHTML` or `insertAdjacentHTML`. Tick only what was actually verified.
4. Set the task to `Testing` and stop. Report which items were verified and which need the user's eyes in a browser.
5. Propose the exact `git add <files>` list and the commit message alongside the code.
6. When the user confirms, set the task to `Done`. That status change goes in with the next task's commit. Only then start the next task.

## Commits
The user commits and pushes. Do not run `git commit` or `git push` unless asked.

Every commit covers one task, names its ID, and stages `.todo4vcode/shared-tasks.json` with the code:

```
feat(T-07): add shared hours table component

Why it was needed, in one or two lines.

Task: T-07 · Shared components
```

Types: `feat`, `fix`, `style`, `refactor`, `chore`, `docs`.
