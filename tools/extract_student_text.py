"""Dump plain text from student docs (PDF via pypdf, HTML strip tags) into _curriculum_text/."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "_student_docs_extract" / "Student Docs"
OUT = ROOT / "_curriculum_text"
OUT.mkdir(parents=True, exist_ok=True)

MAPPING = [
    (1, "Day1_Student_Handout_v2.pdf"),
    (2, "Day2_Student_Doc.pdf"),
    (3, "Day3_Student_Doc.pdf"),
    (4, "Day4_Student_Doc.html"),
    (5, "Day5_Student_Doc.html"),
    (6, "Day6_Student_Doc.html"),
    (7, "Day7_Student_Doc.html"),
    (8, "Day8_Student_Doc.html"),
    (9, "Day9_Student_Doc.html"),
    (10, "Day10_Student_Doc.html"),
    (11, "Day11_Student_Doc.html"),
    (12, "Day12_Student_Doc.html"),
    (13, "Day 13 Student Doc.html"),
    (14, "Day 14 Student Doc.pdf"),
    (15, "Day 15 Student Doc.pdf"),
    (16, "Day 16 Student Doc.pdf"),
    (17, "Day 17 Student Doc.pdf"),
    (18, "Day 18 Student Doc.pdf"),
    (19, "Day 19 Student Doc.html"),
    (20, "Day 20 Cheatsheet.html"),
    (21, "Day 21 Student Doc.html"),
]


def html_to_text(raw: str) -> str:
    raw = re.sub(r"(?is)<script.*?>.*?</script>", "", raw)
    raw = re.sub(r"(?is)<style.*?>.*?</style>", "", raw)
    raw = re.sub(r"<[^>]+>", "\n", raw)
    raw = re.sub(r"\n{3,}", "\n\n", raw)
    return raw.strip()


def main() -> None:
    from pypdf import PdfReader

    for day, name in MAPPING:
        path = DOCS / name
        if not path.exists():
            print("MISSING", path)
            continue
        if path.suffix.lower() == ".pdf":
            r = PdfReader(str(path))
            text = "\n\n".join((p.extract_text() or "") for p in r.pages)
        else:
            text = html_to_text(path.read_text(encoding="utf-8", errors="replace"))
        out = OUT / f"day-{day:02d}.txt"
        out.write_text(text, encoding="utf-8")
        print(out, "chars", len(text))


if __name__ == "__main__":
    main()
