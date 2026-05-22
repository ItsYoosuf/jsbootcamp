"""Shared emit helpers for curriculum HTML/JS generation."""
from __future__ import annotations

import html
import importlib.util
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOOLS = Path(__file__).resolve().parent


def load_render():
    spec = importlib.util.spec_from_file_location("rcp", TOOLS / "render_curriculum_page.py")
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader
    spec.loader.exec_module(mod)
    return mod.render_page, mod.DAY_TITLES


render_page, DAY_TITLES = load_render()


def lesson_main(day: int, topic_line: str, titles: list[str]) -> str:
    h1 = html.escape(f"Day {day} — {DAY_TITLES[day]}")
    parts = [
        '            <header class="page-title">',
        '                <p class="lesson-label">Lesson</p>',
        f"                <h1>{h1}</h1>",
        "            </header>",
        f'            <p class="curriculum-lede">Aligned with <strong>{html.escape(topic_line)}</strong> (student doc).</p>',
        "",
    ]
    for i, title in enumerate(titles, 1):
        op = " open" if i == 1 else ""
        parts.extend(
            [
                f'            <details class="exercise"{op}>',
                "                <summary>",
                f'                    <span class="lesson-task__tag">Topic {i}</span>',
                f'                    <span class="lesson-task__title">{title}</span>',
                "                </summary>",
                '                <div class="lesson-task__body">',
                f'                    <pre id="topic{i}Code" class="code-sample"><code></code></pre>',
                "                </div>",
                "            </details>",
                "",
            ]
        )
    return "\n".join(parts).rstrip() + "\n"


def lesson_js(snippets: list[str]) -> str:
    lines = ['"use strict";\n']
    for i, s in enumerate(snippets, 1):
        lines.append(f"const _topic{i} = {json.dumps(s)};\n")
        lines.append(f'document.querySelector("#topic{i}Code code").textContent = _topic{i};\n')
    return "".join(lines)


def exercise_block(
    n: int,
    tag: str,
    title: str,
    items: list[str],
    open_first: bool = False,
) -> str:
    op = " open" if open_first else ""
    lis = "\n".join(f"                        <li>{it}</li>" for it in items)
    return f"""            <details class="exercise"{op}>
                <summary>
                    <span class="lesson-task__tag">{tag}</span>
                    <span class="lesson-task__title">{title}</span>
                </summary>
                <div class="lesson-task__body">
                    <ul class="task-spec">
{lis}
                    </ul>
                    <p class="output-label">Solution output</p>
                    <pre id="task{n}Output" class="run-output"></pre>
                </div>
            </details>
"""


def hands_main(_day: int, h1: str, label: str, blocks: list[tuple[str, str, list[str], bool]]) -> str:
    h1e = html.escape(h1)
    labe = html.escape(label)
    parts = [
        '            <header class="page-title">',
        f'                <p class="lesson-label">{labe}</p>',
        f"                <h1>{h1e}</h1>",
        "            </header>",
        "",
    ]
    for i, (tag, title, items, is_open) in enumerate(blocks, 1):
        parts.append(exercise_block(i, tag, title, items, is_open))
        parts.append("")
    return "\n".join(parts).rstrip() + "\n"


def emit_day(
    day: int,
    *,
    preserve_all_js: bool = False,
    topic_line: str,
    topic_titles: list[str],
    topic_snippets: list[str],
    hands_label: str,
    hands_blocks: list[tuple[str, str, list[str], bool]],
    hands_js: str,
    hw_label: str,
    hw_blocks: list[tuple[str, str, list[str], bool]],
    hw_js: str,
) -> None:
    lesson_frag = lesson_main(day, topic_line, topic_titles)
    (ROOT / f"day-{day}" / "js").mkdir(parents=True, exist_ok=True)
    (ROOT / f"day-{day}" / "html").mkdir(parents=True, exist_ok=True)

    (ROOT / f"day-{day}" / "html" / "lesson.html").write_text(
        render_page(day=day, page="lesson", main_fragment=lesson_frag),
        encoding="utf-8",
    )
    if not preserve_all_js:
        (ROOT / f"day-{day}" / "js" / "lesson.js").write_text(lesson_js(topic_snippets), encoding="utf-8")

    hf = hands_main(day, "Hands-on", hands_label, hands_blocks)
    (ROOT / f"day-{day}" / "html" / "hands-on.html").write_text(
        render_page(day=day, page="hands-on", main_fragment=hf),
        encoding="utf-8",
    )
    if not preserve_all_js:
        (ROOT / f"day-{day}" / "js" / "hands-on.js").write_text(hands_js, encoding="utf-8")

    hwf = hands_main(day, "Homework", hw_label, hw_blocks)
    (ROOT / f"day-{day}" / "html" / "homework.html").write_text(
        render_page(day=day, page="homework", main_fragment=hwf),
        encoding="utf-8",
    )
    if not preserve_all_js:
        (ROOT / f"day-{day}" / "js" / "homework.js").write_text(hw_js, encoding="utf-8")
