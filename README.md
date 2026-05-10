# JavaScript curriculum

Materials for a full JavaScript track for beginners through advanced topics, ending in a small vanilla-JS capstone project (**DeskHub** — a support-style ticket dashboard).

## Browser practice pages

Open **`index.html`** in your browser (double-click or “Open with…” from your editor). Use the **Curriculum** panel on the right to jump between days and pages.

Each published practice day has:

- **`lesson.html`** — Topics and examples you can read and try in DevTools.
- **`hands-on.html`** — Short tasks for class time.
- **`homework.html`** — Take-home practice.

Scripts live next to the HTML under `day-N/js/`. Shared styling is **`shared/css/styles.css`**; the outline is built by **`shared/js/sidebar.js`**.

To add another day later: create `day-N/html/` and `day-N/js/`, copy the pattern from an existing day, and add an entry to the `DAYS` array in `shared/js/sidebar.js`.

## Markdown worksheets (optional PDFs)

Many sessions ship as Markdown files you can open in VS Code (or any editor). If you use the **Markdown PDF** extension, you can export a printable PDF from any `.md` file.

Naming is usually:

- **`Day{N}_Student_Doc.md`** — Follow-along notes and exercises for class.
- **`Day{N}_Cheatsheet.md`** — One-page reference.
- **`Day{N}_Teaching_Script.md`** — Same material with full demo code and reference answers so you can check your work or revisit a session on your own.

## What the course covers

**Basics (Days 1–12)** — Variables and types, operators, control flow, loops, functions, arrays, objects, modern syntax you need every day, DOM basics, events, errors, modules.

**Going deeper (Days 13–27)** — How JS runs (scope, closures, `this`, prototypes, classes), async patterns, the event loop, collections and iterators, ES modules, functional style, patterns and performance.

**Capstone (Days 28–32)** — **`deskhub-starter/`**: you build the UI and wire it to a fake REST API using the daily checklist in `DAILY_TASKS.md`. Start with `README.md` and `PROJECT_GUIDE.md` inside that folder.

Examples in the written materials often use everyday Indian context (places, currency, GST) so the scenarios feel familiar.

## Status

✅ Basic JS (Days 1–12)  
✅ Advanced JS (Days 13–27)  
✅ Capstone project (Days 28–32)

## License

Internal training materials. Not for redistribution without permission.
