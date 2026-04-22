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
  },
  {
    chapter: "Chapter 2 — Limits and Derivatives",
    sections: [
      {
        title: "2.1 The Tangent and Velocity Problems",
        units: [
          { id: "01_section_2.1_tangent_velocity", title: "Tangent & Velocity" }
        ]
      },
      {
        title: "2.2 The Limit of a Function",
        units: [
          { id: "02_section_2.2_limit_definition", title: "Definition & One-Sided Limits" },
          { id: "03_section_2.2_infinite_limits",  title: "Infinite Limits & Vertical Asymptotes" },
          { id: "04_exercises_2.2",                title: "Exercises 2.2" }
        ]
      },
      {
        title: "2.3 Calculating Limits (Limit Laws)",
        units: [
          { id: "05_section_2.3_limit_laws",       title: "Limit Laws & Direct Substitution" },
          { id: "06_section_2.3_factoring_squeeze",title: "Factoring, Rationalizing, Squeeze" },
          { id: "07_exercises_2.3",                title: "Exercises 2.3" }
        ]
      },
      {
        title: "2.4 The Precise Definition of a Limit",
        units: [
          { id: "08_section_2.4_precise_definition", title: "ε-δ Definition & Examples" },
          { id: "09_section_2.4_harder_proofs",      title: "Harder Proofs & Sum Law" },
          { id: "10_exercises_2.4",                  title: "Exercises 2.4" }
        ]
      },
      {
        title: "2.5 Continuity",
        units: [
          { id: "11_section_2.5_continuity",      title: "Continuity & Discontinuity Types" },
          { id: "12_section_2.5_IVT_exercises",   title: "Intermediate Value Theorem + Exercises" }
        ]
      },
      {
        title: "2.6 Limits at Infinity",
        units: [
          { id: "13_section_2.6_limits_at_infinity", title: "Horizontal Asymptotes" },
          { id: "14_section_2.6_precise_exercises",  title: "Precise ε-N Definitions + Exercises" }
        ]
      },
      {
        title: "2.7 Derivatives and Rates of Change",
        units: [
          { id: "15_section_2.7_derivative_definition", title: "Definition of the Derivative" },
          { id: "16_section_2.7_rates_exercises",        title: "Rates of Change + Exercises" }
        ]
      },
      {
        title: "2.8 The Derivative as a Function",
        units: [
          { id: "17_section_2.8_derivative_function",              title: "The Derivative Function" },
          { id: "18_section_2.8_higher_derivatives_exercises",     title: "Higher Derivatives + Exercises" }
        ]
      },
      {
        title: "Chapter 2 Wrap-up",
        units: [
          { id: "19_ch2_review_concept_exercises", title: "Concept Check, T/F, Review Exercises" }
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

/* Turn `[HINT]` / `[GRAPH]` / `[CAS]` code spans into stylized badges,
 * and italic "[Graph: ...]" prompts into compact figure-placeholder cards.
 * HINT badges become clickable — they open an inline hint card with
 * a pedagogically written hint keyed by exercise number.
 */
function stylizeExerciseMarkers(root, fileId) {
  const BADGES = {
    "[HINT]":  { cls: "badge-hint",  title: "Click for a study hint.",  text: "HINT", interactive: true },
    "[GRAPH]": { cls: "badge-graph", title: "Graphing calculator or graphing software recommended (tree icon in the textbook).", text: "GRAPH" },
    "[CAS]":   { cls: "badge-cas",   title: "Computer algebra system required.", text: "CAS" }
  };

  root.querySelectorAll("code").forEach(code => {
    const key = code.textContent.trim();
    const badge = BADGES[key];
    if (!badge) return;

    if (badge.interactive) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `ex-badge ${badge.cls}`;
      btn.title = badge.title;
      btn.textContent = badge.text;
      btn.addEventListener("click", () => toggleHint(btn, fileId));
      code.replaceWith(btn);
    } else {
      const span = document.createElement("span");
      span.className = `ex-badge ${badge.cls}`;
      span.title = badge.title;
      span.textContent = badge.text;
      code.replaceWith(span);
    }
  });

  // Italic [Graph: ...] placeholders → figure-placeholder card
  root.querySelectorAll("em").forEach(em => {
    const txt = em.textContent.trim();
    if (!/^\[Graph:/i.test(txt)) return;
    const desc = txt.replace(/^\[Graph:\s*/i, "").replace(/\]$/, "").trim();
    const fig = document.createElement("figure");
    fig.className = "graph-placeholder";
    fig.innerHTML = `
      <svg viewBox="0 0 28 28" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="22" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <path d="M6 20 Q 12 8 22 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
      <figcaption><strong>Graph:</strong> ${escapeHtml(desc)}</figcaption>
    `;
    const parent = em.parentElement;
    if (parent && parent.tagName === "P" && parent.childNodes.length === 1) {
      parent.replaceWith(fig);
    } else {
      em.replaceWith(fig);
    }
  });
}

/* Resolve the exercise number a HINT badge belongs to by walking up to
 * its paragraph and reading the first bold token — "5.", "7a.", "23–24.",
 * or a leading "(a)" / "(b)" inside a sub-item. We accept the first
 * number we find before the badge. */
function resolveExerciseId(btn) {
  // First look back within the paragraph for a <strong>N.</strong>
  const p = btn.closest("p, li");
  if (!p) return null;
  const strongs = p.querySelectorAll("strong");
  for (const s of strongs) {
    const m = s.textContent.match(/^(\d+)(?:[\-–]\d+)?[a-z]?\./);
    if (m) return m[1];
  }
  // Fallback: walk previous siblings looking for the nearest exercise header
  let node = p.previousElementSibling;
  while (node) {
    const ss = node.querySelectorAll ? node.querySelectorAll("strong") : [];
    for (const s of ss) {
      const m = s.textContent.match(/^(\d+)(?:[\-–]\d+)?[a-z]?\./);
      if (m) return m[1];
    }
    node = node.previousElementSibling;
  }
  return null;
}

function toggleHint(btn, fileId) {
  const existing = btn._hintCard;
  if (existing && existing.isConnected) {
    existing.remove();
    btn._hintCard = null;
    btn.classList.remove("open");
    return;
  }

  const exId = resolveExerciseId(btn);
  const hints = (window.CalcHints || {})[fileId] || {};
  const hintRaw = exId ? hints[exId] : null;

  const card = document.createElement("div");
  card.className = "hint-card";

  const header = document.createElement("div");
  header.className = "hint-card-header";
  header.innerHTML = `<span class="hint-card-label">Hint${exId ? " · Ex " + exId : ""}</span>`;
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "hint-card-close";
  closeBtn.setAttribute("aria-label", "Close hint");
  closeBtn.textContent = "×";
  closeBtn.addEventListener("click", () => {
    card.remove();
    btn._hintCard = null;
    btn.classList.remove("open");
  });
  header.appendChild(closeBtn);
  card.appendChild(header);

  const body = document.createElement("div");
  body.className = "hint-card-body";
  if (hintRaw) {
    body.innerHTML = renderMarkdown(hintRaw);
  } else {
    body.innerHTML = `<p class="hint-card-empty">No hint authored yet for this exercise. <em>The original textbook marked this one with a boxed number, indicating an online homework hint was available.</em> Try the analytical approach from the lesson notes for this section.</p>`;
  }
  card.appendChild(body);

  // Insert the hint card sensibly relative to the exercise element:
  //   - inside an <li>, append to the <li> itself
  //   - otherwise, insert after the enclosing <p>
  const container = btn.closest("li");
  if (container) {
    container.appendChild(card);
  } else {
    const p = btn.closest("p");
    if (p && p.parentElement) {
      p.parentElement.insertBefore(card, p.nextSibling);
    } else {
      btn.parentElement.appendChild(card);
    }
  }

  btn._hintCard = card;
  btn.classList.add("open");
}

/* Render ```plot fenced blocks as inline SVG figures */
function renderPlots(root) {
  const blocks = root.querySelectorAll('pre > code.language-plot');
  blocks.forEach(code => {
    const pre = code.parentElement;
    const raw = code.textContent;
    let spec;
    try {
      spec = JSON.parse(raw);
    } catch (err) {
      const errEl = document.createElement('div');
      errEl.className = 'plot-error';
      errEl.textContent = 'Plot JSON parse error: ' + err.message;
      pre.replaceWith(errEl);
      return;
    }
    let svg;
    try {
      svg = window.CalcPlot.render(spec);
    } catch (err) {
      const errEl = document.createElement('div');
      errEl.className = 'plot-error';
      errEl.textContent = 'Plot render error: ' + err.message;
      pre.replaceWith(errEl);
      return;
    }
    const figure = document.createElement('figure');
    figure.className = 'plot-figure';
    figure.innerHTML = svg;
    if (spec.caption) {
      const cap = document.createElement('figcaption');
      cap.textContent = spec.caption;
      figure.appendChild(cap);
    }
    // If the previous sibling is a figure-blockquote, fold the plot
    // visually into the same card by adding a class to it.
    const prev = pre.previousElementSibling;
    if (prev && prev.tagName === 'BLOCKQUOTE' && prev.classList.contains('figure')) {
      prev.classList.add('with-plot');
    }
    pre.replaceWith(figure);
  });

  // Fold manually-authored <figure class="plot-figure"> (inline SVG in
  // the markdown) into a preceding figure-description blockquote too.
  root.querySelectorAll('figure.plot-figure').forEach(fig => {
    const prev = fig.previousElementSibling;
    if (prev && prev.tagName === 'BLOCKQUOTE' && prev.classList.contains('figure')) {
      prev.classList.add('with-plot');
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
  text.textContent = `${READ.size} / ${FLAT.length} sections read`;
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
  stylizeExerciseMarkers(bodyEl, id);
  renderPlots(bodyEl);

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
