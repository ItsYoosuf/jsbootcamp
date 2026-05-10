(function () {
    const DAYS = [
        { id: "6", title: "Day 6 — Functions" },
        { id: "7", title: "Day 7 — Arrays" },
        { id: "8", title: "Day 8 — Objects" }
    ];

    const PAGES = [
        { key: "lesson", label: "Lesson", file: "lesson.html" },
        { key: "hands-on", label: "Hands-on", file: "hands-on.html" },
        { key: "homework", label: "Homework", file: "homework.html" }
    ];

    function wrapLayout() {
        const body = document.body;
        const root = body.dataset.outlineRoot ?? "";
        const currentDay = body.dataset.outlineDay ?? "";
        const currentPage = body.dataset.outlinePage ?? "";

        const shell = document.createElement("div");
        shell.className = "page-shell";

        const main = document.createElement("main");
        main.className = "page-main";
        main.id = "main-content";

        while (body.firstChild) {
            main.appendChild(body.firstChild);
        }

        const aside = document.createElement("aside");
        aside.className = "site-outline";
        aside.setAttribute("aria-label", "Curriculum outline");
        aside.innerHTML = buildOutlineHtml(root, currentDay, currentPage);

        shell.appendChild(main);
        shell.appendChild(aside);
        body.appendChild(shell);
    }

    function href(root, path) {
        return root + path;
    }

    function buildOutlineHtml(root, currentDay, currentPage) {
        let html =
            '<p class="site-outline-title">Curriculum</p><ul class="site-outline-tree">';

        const overviewCurrent =
            currentPage === "overview" ? ' aria-current="page"' : "";
        html += `<li class="site-outline-item"><a href="${href(
            root,
            "index.html"
        )}"${overviewCurrent}>Overview</a></li>`;

        for (const day of DAYS) {
            const isFirstDay = day.id === DAYS[0].id;
            const isCurrentDay = currentDay === day.id;
            const detailsOpen =
                isFirstDay || isCurrentDay ? " open" : "";
            html += `<li class="site-outline-day"><details class="site-outline-details"${detailsOpen}><summary>${escapeHtml(
                day.title
            )}</summary><ul>`;

            for (const p of PAGES) {
                const path = `day-${day.id}/html/${p.file}`;
                const isHere =
                    currentDay === day.id && currentPage === p.key;
                const cur = isHere ? ' aria-current="page"' : "";
                html += `<li><a href="${href(root, path)}"${cur}>${escapeHtml(
                    p.label
                )}</a></li>`;
            }

            html += "</ul></details></li>";
        }

        html += "</ul>";
        return html;
    }

    function escapeHtml(s) {
        return s
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", wrapLayout);
    } else {
        wrapLayout();
    }
})();
