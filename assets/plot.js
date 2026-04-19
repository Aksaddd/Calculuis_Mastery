/* ------------------------------------------------------------------ */
/* CalcPlot — small SVG plotting engine for the study site            */
/* ------------------------------------------------------------------ */
/*
 * Spec format (JSON in a ```plot fenced block):
 *
 * {
 *   "title": "Figure 2 — y = 3x − 2",
 *   "width": 520, "height": 340,
 *   "xRange": [-3, 3], "yRange": [-8, 8],
 *   "xStep": 1, "yStep": 2,
 *   "xLabel": "x", "yLabel": "y",
 *   "curves": [
 *     {"fn": "3*x - 2", "color": "#b04a2f", "width": 2, "label": "y = 3x − 2"}
 *   ],
 *   "points": [
 *     {"x": 1, "y": 0, "style": "filled", "label": "(1, 0)"},
 *     {"x": 1, "y": 1, "style": "open"}
 *   ],
 *   "lines": [
 *     {"type": "vertical",   "x": 1, "color": "#888", "dash": "4 4"},
 *     {"type": "horizontal", "y": 0, "color": "#000"}
 *   ],
 *   "annotations": [
 *     {"x": 1.5, "y": 4, "text": "y = 3x − 2", "color": "#b04a2f"}
 *   ]
 * }
 *
 * Curve types:
 *   - {"fn": "3*x - 2"}                     plain function on full xRange
 *   - {"fn": "1/x", "domain": [0.001, 5]}   restricted to a sub-interval
 *   - {"piecewise": [
 *         {"fn": "1 - x", "domain": [-2, 1], "endpoints": ["closed", "closed"]},
 *         {"fn": "x*x",   "domain": [1, 3],  "endpoints": ["open",   "open"]}
 *      ]}
 *   - {"step": [
 *         {"y": 0.39, "x": [0, 1], "endpoints": ["open", "closed"]},
 *         {"y": 0.63, "x": [1, 2], "endpoints": ["open", "closed"]}
 *      ]}
 *   - {"data": [[x1,y1], [x2,y2], ...], "mode": "line" | "scatter"}
 *
 * Function syntax: standard JS arithmetic; ^ is rewritten to **.
 * Math.* is in scope (sin, cos, tan, sqrt, abs, exp, log, PI, E, pow…).
 */

window.CalcPlot = (function () {
  "use strict";

  // ---------- function compilation -----------------------------------
  const FN_CACHE = new Map();
  function compile(expr) {
    if (FN_CACHE.has(expr)) return FN_CACHE.get(expr);
    const norm = String(expr).replace(/\^/g, "**");
    const fn = new Function("x", "with (Math) { return (" + norm + "); }");
    FN_CACHE.set(expr, fn);
    return fn;
  }

  // ---------- numeric helpers ----------------------------------------
  function niceStep(min, max) {
    const span = max - min;
    if (span <= 0) return 1;
    const raw = span / 8;
    const pow = Math.pow(10, Math.floor(Math.log10(raw)));
    const norm = raw / pow;
    let step;
    if (norm < 1.5) step = 1;
    else if (norm < 3.5) step = 2;
    else if (norm < 7.5) step = 5;
    else step = 10;
    return step * pow;
  }

  function fmt(n) {
    if (n === 0) return "0";
    const abs = Math.abs(n);
    if (abs >= 1000 || abs < 0.01) return n.toPrecision(2);
    // round to remove float dust
    const r = Math.round(n * 1e6) / 1e6;
    return String(r);
  }

  function clamp(v, lo, hi) {
    return v < lo ? lo : v > hi ? hi : v;
  }

  // ---------- SVG primitive builders ---------------------------------
  function attrs(o) {
    let s = "";
    for (const k in o) {
      if (o[k] === undefined || o[k] === null || o[k] === "") continue;
      s += " " + k + '="' + String(o[k]).replace(/"/g, "&quot;") + '"';
    }
    return s;
  }
  function el(tag, a, inner) {
    return "<" + tag + attrs(a || {}) + (inner === undefined ? " />" : ">" + inner + "</" + tag + ">");
  }
  function escapeText(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // ---------- main render --------------------------------------------
  function render(spec) {
    const W = spec.width || 520;
    const H = spec.height || 340;
    const padL = spec.padL ?? 56;
    const padR = spec.padR ?? 24;
    const padT = spec.padT ?? (spec.title ? 30 : 14);
    const padB = spec.padB ?? 42;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;

    const [xMin, xMax] = spec.xRange;
    const [yMin, yMax] = spec.yRange;
    const X = (x) => padL + ((x - xMin) / (xMax - xMin)) * plotW;
    const Y = (y) => padT + ((yMax - y) / (yMax - yMin)) * plotH;

    const out = [];

    // Plot background
    out.push(el("rect", {
      x: padL, y: padT, width: plotW, height: plotH,
      fill: "#fdfcf6", stroke: "none"
    }));

    // ---- gridlines + tick labels ----
    const xStep = spec.xStep || niceStep(xMin, xMax);
    const yStep = spec.yStep || niceStep(yMin, yMax);
    const eps = 1e-9;

    for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax + eps; x += xStep) {
      const px = X(x);
      out.push(el("line", {
        x1: px, y1: padT, x2: px, y2: padT + plotH,
        stroke: "#ebe9df", "stroke-width": 1
      }));
      // hide the "0" label only if both 0 axes exist (it'd overlap origin)
      const isZero = Math.abs(x) < eps;
      if (!isZero || !(yMin <= 0 && yMax >= 0)) {
        out.push(el("text", {
          x: px, y: padT + plotH + 14,
          "font-size": 11, "text-anchor": "middle",
          fill: "#5b6477", "font-family": "Helvetica, Arial, sans-serif"
        }, escapeText(fmt(x))));
      }
    }
    for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax + eps; y += yStep) {
      const py = Y(y);
      out.push(el("line", {
        x1: padL, y1: py, x2: padL + plotW, y2: py,
        stroke: "#ebe9df", "stroke-width": 1
      }));
      const isZero = Math.abs(y) < eps;
      if (!isZero || !(xMin <= 0 && xMax >= 0)) {
        out.push(el("text", {
          x: padL - 6, y: py + 4,
          "font-size": 11, "text-anchor": "end",
          fill: "#5b6477", "font-family": "Helvetica, Arial, sans-serif"
        }, escapeText(fmt(y))));
      }
    }

    // ---- 0-axes (if visible) ----
    if (xMin <= 0 && xMax >= 0) {
      const x0 = X(0);
      out.push(el("line", {
        x1: x0, y1: padT, x2: x0, y2: padT + plotH,
        stroke: "#1f2430", "stroke-width": 1.4
      }));
    }
    if (yMin <= 0 && yMax >= 0) {
      const y0 = Y(0);
      out.push(el("line", {
        x1: padL, y1: y0, x2: padL + plotW, y2: y0,
        stroke: "#1f2430", "stroke-width": 1.4
      }));
    }

    // ---- frame ----
    out.push(el("rect", {
      x: padL, y: padT, width: plotW, height: plotH,
      fill: "none", stroke: "#c9c6b8", "stroke-width": 1
    }));

    // ---- helper lines (vertical/horizontal/segments) BEFORE curves ----
    for (const ln of spec.lines || []) {
      out.push(renderLine(ln, X, Y, padL, padT, plotW, plotH, xMin, xMax, yMin, yMax));
    }

    // ---- curves ----
    for (const curve of spec.curves || []) {
      out.push(renderCurve(curve, X, Y, xMin, xMax, yMin, yMax, plotW));
    }

    // ---- points ----
    for (const p of spec.points || []) {
      out.push(renderPoint(p, X, Y));
    }

    // ---- annotations ----
    for (const a of spec.annotations || []) {
      out.push(renderAnnotation(a, X, Y));
    }

    // ---- axis labels ----
    if (spec.xLabel) {
      out.push(el("text", {
        x: padL + plotW - 4, y: H - 22,
        "font-size": 13, "font-style": "italic",
        "text-anchor": "end",
        fill: "#1f2430", "font-family": "'Times New Roman', Times, serif"
      }, escapeText(spec.xLabel)));
    }
    if (spec.yLabel) {
      out.push(el("text", {
        x: padL + 4, y: padT + 4,
        "font-size": 13, "font-style": "italic",
        "text-anchor": "start",
        fill: "#1f2430", "font-family": "'Times New Roman', Times, serif"
      }, escapeText(spec.yLabel)));
    }

    // ---- title ----
    if (spec.title) {
      out.push(el("text", {
        x: W / 2, y: 18,
        "font-size": 13, "font-weight": 600,
        "text-anchor": "middle",
        fill: "#1f2430", "font-family": "Helvetica, Arial, sans-serif"
      }, escapeText(spec.title)));
    }

    // ---- caption beneath axis label ----
    if (spec.caption) {
      out.push(el("text", {
        x: W / 2, y: H - 4,
        "font-size": 11, "text-anchor": "middle",
        fill: "#5b6477", "font-family": "Helvetica, Arial, sans-serif",
        "font-style": "italic"
      }, escapeText(spec.caption)));
    }

    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' +
      W + " " + H + '" preserveAspectRatio="xMidYMid meet" ' +
      'role="img" aria-label="' + escapeText(spec.title || "plot") + '">' +
      out.join("") + "</svg>"
    );
  }

  // ---------- curve rendering ----------------------------------------
  function renderCurve(curve, X, Y, xMin, xMax, yMin, yMax, plotW) {
    const color = curve.color || "#b04a2f";
    const w = curve.width || 2;
    const dash = curve.dash || "";
    const samples = curve.samples || Math.max(200, Math.round(plotW || 400));

    if (curve.fn) {
      const fn = compile(curve.fn);
      const dom = curve.domain || [xMin, xMax];
      const path = sampleFunctionPath(fn, dom[0], dom[1], samples, X, Y, yMin, yMax);
      return el("path", {
        d: path,
        fill: "none",
        stroke: color,
        "stroke-width": w,
        "stroke-dasharray": dash,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      });
    }

    if (curve.piecewise) {
      let s = "";
      for (const p of curve.piecewise) {
        const fn = compile(p.fn);
        s += el("path", {
          d: sampleFunctionPath(fn, p.domain[0], p.domain[1], samples, X, Y, yMin, yMax),
          fill: "none",
          stroke: color,
          "stroke-width": w,
          "stroke-dasharray": dash,
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        });
        // automatic endpoint dots
        const eps = p.endpoints || ["closed", "closed"];
        const xL = p.domain[0], xR = p.domain[1];
        const yL = fn(xL), yR = fn(xR);
        if (isFinite(yL)) s += renderPoint({
          x: xL, y: yL, style: eps[0] === "open" ? "open" : "filled", color
        }, X, Y);
        if (isFinite(yR)) s += renderPoint({
          x: xR, y: yR, style: eps[1] === "open" ? "open" : "filled", color
        }, X, Y);
      }
      return s;
    }

    if (curve.step) {
      let s = "";
      for (const seg of curve.step) {
        const [x1, x2] = seg.x;
        const y = seg.y;
        s += el("line", {
          x1: X(x1), y1: Y(y), x2: X(x2), y2: Y(y),
          stroke: color, "stroke-width": w, "stroke-linecap": "butt"
        });
        const eps = seg.endpoints || ["open", "closed"];
        s += renderPoint({ x: x1, y, style: eps[0] === "open" ? "open" : "filled", color }, X, Y);
        s += renderPoint({ x: x2, y, style: eps[1] === "open" ? "open" : "filled", color }, X, Y);
      }
      return s;
    }

    if (curve.data) {
      const mode = curve.mode || "line";
      let s = "";
      const pts = curve.data.filter(p => isFinite(p[0]) && isFinite(p[1]));
      if (mode === "line" || mode === "both") {
        let d = "";
        for (let i = 0; i < pts.length; i++) {
          d += (i ? " L " : "M ") + X(pts[i][0]) + " " + Y(pts[i][1]);
        }
        s += el("path", {
          d, fill: "none", stroke: color, "stroke-width": w,
          "stroke-dasharray": dash, "stroke-linecap": "round", "stroke-linejoin": "round"
        });
      }
      if (mode === "scatter" || mode === "both") {
        for (const [x, y] of pts) {
          s += renderPoint({ x, y, style: curve.pointStyle || "filled", color, r: curve.r || 3 }, X, Y);
        }
      }
      return s;
    }

    return "";
  }

  function sampleFunctionPath(fn, x0, x1, samples, X, Y, yMin, yMax) {
    let d = "";
    let pen = false;
    let prevY = NaN;
    for (let i = 0; i <= samples; i++) {
      const x = x0 + (i / samples) * (x1 - x0);
      let y;
      try { y = fn(x); } catch { y = NaN; }
      if (!isFinite(y)) { pen = false; continue; }
      // clip vertical jumps caused by asymptotes
      if (pen && isFinite(prevY) && Math.abs(y - prevY) > 4 * (yMax - yMin)) {
        pen = false;
      }
      // soft clip to a band 50% beyond the visible range
      const yClipped = clamp(y, yMin - 0.5 * (yMax - yMin), yMax + 0.5 * (yMax - yMin));
      d += (pen ? " L " : " M ") + X(x).toFixed(2) + " " + Y(yClipped).toFixed(2);
      pen = true;
      prevY = y;
    }
    return d;
  }

  // ---------- point ---------------------------------------------------
  function renderPoint(p, X, Y) {
    const r = p.r || 4;
    const cx = X(p.x), cy = Y(p.y);
    const color = p.color || "#1f2430";
    let s = "";
    if (p.style === "open") {
      s += el("circle", { cx, cy, r, fill: "#fdfcf6", stroke: color, "stroke-width": 1.6 });
    } else {
      s += el("circle", { cx, cy, r, fill: color, stroke: color, "stroke-width": 1 });
    }
    if (p.label) {
      const dx = p.labelDx ?? 7;
      const dy = p.labelDy ?? -7;
      const anchor = p.labelAnchor || (dx < 0 ? "end" : "start");
      s += el("text", {
        x: cx + dx, y: cy + dy,
        "font-size": 11, fill: "#1f2430",
        "font-family": "'Times New Roman', Times, serif",
        "font-style": "italic",
        "text-anchor": anchor
      }, escapeText(p.label));
    }
    return s;
  }

  // ---------- helper line --------------------------------------------
  function renderLine(ln, X, Y, padL, padT, plotW, plotH, xMin, xMax, yMin, yMax) {
    const color = ln.color || "#888";
    const w = ln.width || 1;
    const dash = ln.dash || "";
    if (ln.type === "vertical") {
      const px = X(ln.x);
      const y1 = ln.yRange ? Y(ln.yRange[1]) : padT;
      const y2 = ln.yRange ? Y(ln.yRange[0]) : padT + plotH;
      return el("line", {
        x1: px, y1, x2: px, y2,
        stroke: color, "stroke-width": w, "stroke-dasharray": dash
      });
    }
    if (ln.type === "horizontal") {
      const py = Y(ln.y);
      const x1 = ln.xRange ? X(ln.xRange[0]) : padL;
      const x2 = ln.xRange ? X(ln.xRange[1]) : padL + plotW;
      return el("line", {
        x1, y1: py, x2, y2: py,
        stroke: color, "stroke-width": w, "stroke-dasharray": dash
      });
    }
    if (ln.from && ln.to) {
      return el("line", {
        x1: X(ln.from[0]), y1: Y(ln.from[1]),
        x2: X(ln.to[0]),   y2: Y(ln.to[1]),
        stroke: color, "stroke-width": w, "stroke-dasharray": dash
      });
    }
    return "";
  }

  // ---------- annotation ---------------------------------------------
  function renderAnnotation(a, X, Y) {
    const color = a.color || "#1f2430";
    const size = a.size || 12;
    const anchor = a.anchor || "start";
    const family = a.family || "'Times New Roman', Times, serif";
    const style = a.italic === false ? "" : "italic";
    return el("text", {
      x: X(a.x), y: Y(a.y),
      "font-size": size,
      "text-anchor": anchor,
      "font-family": family,
      "font-style": style,
      fill: color
    }, escapeText(a.text));
  }

  return { render, compile };
})();
