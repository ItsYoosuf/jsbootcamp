from pathlib import Path

root = Path(__file__).resolve().parents[1]
lines = (root / "index.html").read_text(encoding="utf-8").splitlines()
# 1-based line 26 through closing </ul> of site-outline-tree (see index.html; extend when days added)
block = "\n".join(lines[25:275])
block = block.replace('href="day-', 'href="../../day-')
block = block.replace('href="index.html"', 'href="../../index.html"')
block = block.replace('aria-current="page">Overview', ">Overview")
out = root / "shared" / "html" / "curriculum-outline.inc.html"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(block, encoding="utf-8")
print("Wrote", out, "chars", len(block))
