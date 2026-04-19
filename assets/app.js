/* ------------------------------------------------------------------ */
/* Calculus Mastery — site logic                                      */
/* Loads each markdown section, renders math + tables + figure cards. */
/* ------------------------------------------------------------------ */

const TOC = [
  {
    chapter: "Chapter 1 — Functions and Models",
    sections: [
      {
        title: "1.1 Four Ways to Represent a Function",
        units: [
          { id: "01_section_1.1_opener",            title: "Opener & Definition" },
          { id: "02_representations_of_functions",  title: "Representations of Functions" },
          { id: "03_domains_vlt_piecewise",         title: "Domains, VLT & Piecewise" },
          { id: "04_symmetry_monotonicity",         title: "Symmetry & Monotonicity" }
        ]
      },
      {
        title: "1.2 Mathematical Models",
        units: [
          { id: "06_section_1.2_modeling_linear",   title: "Modeling & Linear Models" },
          { id: "07_polynomials_power_functions",   title: "Polynomials & Power Functions" },
          { id: "08_rational_algebraic_functions",  title: "Rational & Algebraic Functions" },
          { id: "09_trigonometric_functions",       title: "Trigonometric Functions" },
          { id: "10_exponential_log_transcendental",title: "Exponential, Log & Transcendental" },
          { id: "11_exercises_1.2",                 title: "Exercises 1.2" }
        ]
      },
      {
        title: "1.3 New Functions from Old",
        units: [
          { id: "12_transformations_of_functions",  title: "Transformations of Functions" },
          { id: "13_combinations_composition",      title: "Combinations & Composition" },
          { id: "14_exercises_1.3",                 title: "Exercises 1.3" }
        ]
      },
      {
        title: "1.4 Graphing Calculators & Computers",
        units: [
          { id: "15_section_1.4_graphing_technology", title: "Graphing Technology" }
        ]
      },
      {
        title: "1.5 Exponential Functions",
        units: [
          { id: "16_exponential_definition_laws",   title: "Definition & Laws" },
          { id: "17_applications_and_number_e",     title: "Applications & the Number e" },
          { id: "18_exercises_1.5",                 title: "Exercises 1.5" }
        ]
      },
      {
        title: "1.6 Inverse Functions & Logarithms",
        units: [
          { id: "20_logarithmic_functions",         title: "Logarithmic Functions" },
          { id: "21_inverse_trig_functions",        title: "Inverse Trig Functions" },
          { id: "22_exercises_1.6",                 title: "Exercises 1.6" }
        ]
      },
      {
        title: "Chapter 1 Wrap-up",
        units: [
          { id: "23_chapter_1_review",              title: "Concept Check, T/F, Review Exercises" },
          { id: "24_principles_and_problems_plus",  title: "Principles of Problem Solving + Problems Plus" }
        ]
      }
    ]
  }
];

/* Flat list of all units with linkage metadata */
const FLAT = (() => {
  const list = [];
  TOC.forEach(ch => {
    ch.sections.forEach(sec => {
      sec.units.forEach(u => {
        list.push({
          id: u.id,
          title: u.title,
          section: sec.title,
          chapter: ch.chapter
        });
      });
    });
  });
  return list;
})();

const STORAGE_KEY = "calc_mastery_read_v1";

/* ---------- progress storage ---------- */
function loadRead() {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")); }
  catch { return new Set(); }
}
function saveRead(set) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}
let READ = loadRead();

/* ---------- markdown + math rendering ---------- */
/*
 * marked treats `_` and `*` as emphasis even inside `$..$`, which would
 * mangle TeX. We pre-extract math, render markdown, then restore math
 * and feed it to KaTeX.
 */
function renderMarkdown(src) {
  const blocks = [];
  const inlines = [];

  // Extract display math first so $$ tokens never get split into two $
  let s = src.replace(/\$\$([\s\S]+?)\$\$/g, (_, expr) => {
    const i = blocks.length;
    blocks.push(expr.trim());
    return `@@MATHBLOCK${i}@@`;
  });

  // Then inline math (must not be a $$ remnant; simple $...$)
  s = s.replace(/(?<!\\)\$([^\$\n]+?)(?<!\\)\$/g, (_, expr) => {
    const i = inlines.length;
    inlines.push(expr.trim());
    return `@@MATHINLINE${i}@@`;
  });

  marked.setOptions({
    gfm: true,
    breaks: false,
    headerIds: true,
    mangle: false
  });
  let html = marked.parse(s);

  // Unwrap <p>@@MATHBLOCKn@@</p> so display math isn't nested in a paragraph
  html = html.replace(/<p>(\s*@@MATHBLOCK\d+@@\s*)<\/p>/g, "$1");

  // Restore math via KaTeX renderToString
  html = html.replace(/@@MATHBLOCK(\d+)@@/g, (_, i) =>
    safeKatex(blocks[+i], true)
  );
  html = html.replace(/@@MATHINLINE(\d+)@@/g, (_, i) =>
    safeKatex(inlines[+i], false)
  );

  return html;
}

function safeKatex(expr, displayMode) {
  try {
    return katex.renderToString(expr, {
      displayMode,
      throwOnError: false,
      strict: "ignore",
      trust: false,
      output: "html"
    });
  } catch (e) {
    const tag = displayMode ? "div" : "span";
    return `<${tag} class="katex-error" title="${escapeHtml(e.message)}">${escapeHtml(expr)}</${tag}>`;
  }
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ---------- figure / definition / note classification ---------- */
function classifyBlockquotes(root) {
  root.querySelectorAll("blockquote").forEach(bq => {
    const text = (bq.textContent || "").trim();
    // Look at the first ~80 chars after stripping leading bold/strong
    const head = text.slice(0, 100).toLowerCase();

    if (/^figure\b|^hero figure\b|^graph provided\b|^histogram\b|^scatter\b/.test(head)) {
      bq.classList.add("figure");
    } else if (/^definition\b|^theorem\b|^law\b|^laws of\b|^principle\b/.test(head)) {
      bq.classList.add("definition");
    } else if (/^margin note\b|^note\b|^notation\b|^warning\b|^caution\b|^tip\b/.test(head)) {
      bq.classList.add("note");
    } else {
      // Fall back: if it's clearly a figure-like description (mentions "axes" / "graph")
      if (/axes|x-axis|y-axis|graph|curve|plot|histogram|scatter/.test(head)) {
        bq.classList.add("figure");
      } else {
        bq.classList.add("note");
      }
    }
  });
}

/* Wrap raw <table> in scroll container for narrow viewports */
function wrapTables(root) {
  root.querySelectorAll("table").forEach(t => {
    if (t.parentElement && t.parentElement.classList.contains("table-wrap")) return;
    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    t.parentNode.insertBefore(wrap, t);
    wrap.appendChild(t);
  });
}

/* ---------- sidebar build ---------- */
function buildSidebar() {
  const nav = document.getElementById("nav");
  nav.innerHTML = "";

  TOC.forEach(ch => {
    const chHead = document.createElement("div");
    chHead.className = "nav-chapter";
    chHead.textContent = ch.chapter;
    nav.appendChild(chHead);

    ch.sections.forEach(sec => {
      const secHead = document.createElement("div");
      secHead.className = "nav-section-title";
      secHead.textContent = sec.title;
      nav.appendChild(secHead);

      sec.units.forEach(u => {
        const a = document.createElement("a");
        a.className = "nav-link";
        a.href = `#${u.id}`;
        a.dataset.id = u.id;
        a.dataset.search = (u.title + " " + sec.title).toLowerCase();

        const dot = document.createElement("span");
        dot.className = "dot";
        a.appendChild(dot);

        const label = document.createElement("span");
        label.textContent = u.title;
        a.appendChild(label);

        nav.appendChild(a);
      });
    });
  });

  refreshReadStates();
}

function refreshReadStates() {
  document.querySelectorAll(".nav-link").forEach(a => {
    if (READ.has(a.dataset.id)) a.classList.add("read");
    else a.classList.remove("read");
  });
  const text = document.getElementById("progress-text");
  const fill = document.getElementById("progress-fill");
  text.textContent = `${READ.size} / ${FLAT.length} read`;
  fill.style.width = `${(READ.size / FLAT.length) * 100}%`;
}

function highlightActive(id) {
  document.querySelectorAll(".nav-link").forEach(a => {
    a.classList.toggle("active", a.dataset.id === id);
  });
}

/* ---------- routing ---------- */
async function loadUnit(id) {
  const meta = FLAT.find(u => u.id === id);
  const article = document.getElementById("article");
  const pager = document.getElementById("pager");

  if (!meta) {
    article.innerHTML = `<div class="error">Section not found: ${escapeHtml(id)}</div>`;
    pager.classList.add("hidden");
    return;
  }

  article.innerHTML = `<div class="loading">Loading ${escapeHtml(meta.title)}…</div>`;
  pager.classList.add("hidden");
  highlightActive(id);

  let raw;
  try {
    const res = await fetch(`${id}.md`, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    raw = await res.text();
  } catch (err) {
    article.innerHTML = `
      <div class="error">
        Failed to load <code>${escapeHtml(id)}.md</code>.<br/>
        ${escapeHtml(err.message)}<br/><br/>
        If you opened this file directly with <code>file://</code>, your browser
        blocks fetch. Run a local server: <code>python3 -m http.server</code> in
        the project root, then open <code>http://localhost:8000</code>.
      </div>`;
    return;
  }

  const body = renderMarkdown(raw);

  const idx = FLAT.findIndex(u => u.id === id);
  const isRead = READ.has(id);

  article.innerHTML = `
    <header class="section-header">
      <div class="section-crumbs">${escapeHtml(meta.chapter)} &middot; ${escapeHtml(meta.section)}</div>
      <div class="section-meta">
        <label class="read-toggle">
          <input type="checkbox" id="mark-read" ${isRead ? "checked" : ""} />
          <span>Mark as read</span>
        </label>
        <span class="section-position">${idx + 1} of ${FLAT.length}</span>
      </div>
    </header>
    <div id="article-body">${body}</div>
  `;

  const bodyEl = document.getElementById("article-body");
  classifyBlockquotes(bodyEl);
  wrapTables(bodyEl);

  document.getElementById("mark-read").addEventListener("change", e => {
    if (e.target.checked) READ.add(id);
    else READ.delete(id);
    saveRead(READ);
    refreshReadStates();
  });

  // pager
  const prev = FLAT[idx - 1];
  const next = FLAT[idx + 1];
  const prevLink = document.getElementById("prev-link");
  const nextLink = document.getElementById("next-link");
  if (prev) {
    prevLink.classList.remove("disabled");
    prevLink.href = `#${prev.id}`;
    prevLink.innerHTML = `&larr; ${escapeHtml(prev.title)}`;
  } else {
    prevLink.classList.add("disabled");
    prevLink.innerHTML = `&larr; Previous`;
    prevLink.href = "#";
  }
  if (next) {
    nextLink.classList.remove("disabled");
    nextLink.href = `#${next.id}`;
    nextLink.innerHTML = `${escapeHtml(next.title)} &rarr;`;
  } else {
    nextLink.classList.add("disabled");
    nextLink.innerHTML = `Next &rarr;`;
    nextLink.href = "#";
  }
  nextLink.classList.add("next");
  pager.classList.remove("hidden");

  document.title = `${meta.title} — Calculus Mastery`;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  // Close mobile sidebar after click
  document.getElementById("sidebar").classList.remove("open");
}

function handleRoute() {
  const id = (location.hash || "").replace(/^#/, "");
  if (!id) {
    // Welcome state
    document.title = "Calculus Mastery";
    document.getElementById("pager").classList.add("hidden");
    highlightActive(null);
    return;
  }
  loadUnit(id);
}

/* ---------- search/filter ---------- */
function wireSearch() {
  const input = document.getElementById("search");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll(".nav-link").forEach(a => {
      a.classList.toggle("hidden", q && !a.dataset.search.includes(q));
    });
  });
}

/* ---------- keyboard shortcuts ---------- */
function wireKeys() {
  window.addEventListener("keydown", e => {
    // ignore in inputs
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") return;

    if (e.key === "/") {
      e.preventDefault();
      document.getElementById("search").focus();
      return;
    }
    const id = (location.hash || "").replace(/^#/, "");
    const idx = FLAT.findIndex(u => u.id === id);
    if (idx === -1) return;
    if (e.key === "ArrowRight" && FLAT[idx + 1]) {
      location.hash = `#${FLAT[idx + 1].id}`;
    } else if (e.key === "ArrowLeft" && FLAT[idx - 1]) {
      location.hash = `#${FLAT[idx - 1].id}`;
    }
  });
}

/* ---------- init ---------- */
function init() {
  buildSidebar();
  wireSearch();
  wireKeys();

  document.getElementById("reset-progress").addEventListener("click", () => {
    if (!confirm("Clear all read marks?")) return;
    READ.clear();
    saveRead(READ);
    refreshReadStates();
    // re-sync the current page checkbox if visible
    const cb = document.getElementById("mark-read");
    if (cb) cb.checked = false;
  });

  document.getElementById("mobile-toggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });

  window.addEventListener("hashchange", handleRoute);
  handleRoute();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
