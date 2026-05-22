"""
Assemble day-N/html/{lesson,hands-on,homework}.html with shared curriculum outline
and correct aria-current / open details for the active day and page.
Usage:
  python tools/render_curriculum_page.py <day> <lesson|hands-on|homework> <path-to-main-fragment.html>
Main fragment = inner HTML for <main class="page-main" id="main-content"> (no outer main tags).
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTLINE_PATH = ROOT / "shared" / "html" / "curriculum-outline.inc.html"

SCRIPT_NAMES = {"lesson": "lesson.js", "hands-on": "hands-on.js", "homework": "homework.js"}

DAY_TITLES = {
    1: "Introduction to JavaScript",
    2: "Variables & Data Types",
    3: "Operators & Expressions",
    4: "Control Flow",
    5: "Loops & Iteration",
    6: "Functions",
    7: "Arrays",
    8: "Objects",
    9: "ES6+ Essentials",
    10: "DOM Manipulation Basics",
    11: "Events & Event Handling",
    12: "Error Handling & Module Basics",
    13: "Advanced Day 1 — Execution Context & Hoisting",
    14: "Advanced Day 2 — Scope & Closures",
    15: "Advanced Day 3 — The 'this' Keyword",
    16: "Advanced Day 4 — Prototypes & the Prototype Chain",
    17: "Advanced Day 5 — Classes & OOP",
    18: "Advanced Day 6 — Callbacks & Promises",
    19: "Advanced Day 7 — Async / Await",
    20: "Advanced Day 8 — Event Loop & Tasks",
    21: "Advanced Day 9 — Immutability & Object Patterns",
}


def mark_current(outline: str, day: int, page: str) -> str:
    outline = outline.replace(
        '<details class="site-outline-details" open>',
        '<details class="site-outline-details">',
    )
    outline = re.sub(r"\s+aria-current=\"page\"", "", outline)
    marker = f"<!-- Day {day} -->"
    start = outline.find(marker)
    if start == -1:
        raise SystemExit(f"outline missing marker {marker}")
    end = outline.find("<!-- Day", start + len(marker))
    if end == -1:
        end = len(outline)
    before, block, after = outline[:start], outline[start:end], outline[end:]
    block = re.sub(
        r"(<details class=\"site-outline-details\">)",
        r'<details class="site-outline-details" open>',
        block,
        count=1,
    )
    href = f"../../day-{day}/html/{page}.html"
    needle = f'<a href="{href}">'
    if needle not in block:
        raise SystemExit(f"missing link {needle} in day {day} block (page={page})")
    block = block.replace(needle, f'<a href="{href}" aria-current="page">', 1)
    return before + block + after


def render_page(
    *,
    day: int,
    page: str,
    main_fragment: str,
) -> str:
    outline = OUTLINE_PATH.read_text(encoding="utf-8")
    aside = mark_current(outline, day, page)
    script = SCRIPT_NAMES[page]
    topic = DAY_TITLES.get(day, f"Day {day}")
    page_word = {"lesson": "Lesson", "hands-on": "Hands-on", "homework": "Homework"}[page]
    head_title = f"Day {day} — {topic} — {page_word}".replace("&", "&amp;")
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{head_title}</title>
    <link rel="preload" href="../../shared/css/styles.css" as="style">
    <link rel="stylesheet" href="../../shared/css/styles.css">
</head>
<body>
    <div class="page-shell">
        <main class="page-main" id="main-content">
{main_fragment}
        </main>
        <aside class="site-outline" aria-label="Curriculum outline">
            <p class="site-outline-title">Curriculum</p>
{aside}
        </aside>
    </div>
    <script defer src="../js/{script}"></script>
    <script src="../../shared/js/nav-lock.js"></script>
</body>
</html>
"""


def main() -> None:
    if len(sys.argv) != 4:
        print(__doc__, file=sys.stderr)
        sys.exit(2)
    day = int(sys.argv[1])
    page = sys.argv[2]
    frag_path = Path(sys.argv[3])
    if page not in SCRIPT_NAMES:
        raise SystemExit("page must be lesson, hands-on, or homework")
    main_inner = frag_path.read_text(encoding="utf-8").rstrip() + "\n"
    out_dir = ROOT / f"day-{day}" / "html"
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / f"{page}.html"
    html = render_page(day=day, page=page, main_fragment=main_inner)
    out_path.write_text(html, encoding="utf-8")
    print("Wrote", out_path)


if __name__ == "__main__":
    main()
