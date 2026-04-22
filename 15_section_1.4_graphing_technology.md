# Section 1.4 — Graphing Calculators and Computers

*Covers pp. 46–52 top of the book (PDF pp. 74–80 top). One continuous exposition (no sub-headings) about using graphing technology effectively, plus 36 exercises. Combined into one unit because the section is short and lower-priority for your trajectory.*

---

## Orientation — why this section deserves less attention than the rest of Chapter 1

Stewart 6e was written in 2007. This section is structured around **TI-83 graphing calculator workflows** — `Xmin`, `Xmax`, `Ymin`, `Ymax`, viewing-rectangle pixel counts. Most of that machinery is now handled automatically by modern tools (Desmos, Wolfram Alpha, matplotlib, Jupyter notebooks).

**Content that has NOT aged and is worth internalizing:**
1. **Aliasing** — a finite-resolution renderer can show totally wrong graphs for high-frequency oscillations (Example 4, Exercises 35–36). The same phenomenon causes moiré patterns in images and "beat frequencies" in signal processing, and it's fundamental to understanding Shannon sampling theory. This matters for any quant plotting high-frequency data.
2. **Domain subtleties** — finding the right window requires *thinking*, not just trusting the default (Examples 2, 5, 6). A graph that "appears reasonable" can hide discontinuities, asymptotes, or out-of-range features entirely.
3. **Families of functions** — varying a parameter and observing how the graph changes (Example 8, Exercises 27–34) is a fundamental analytical move. Parameter sensitivity analysis is a direct analog in quant modeling.
4. **Numerical root-finding by zooming** (Example 9) — this is the primitive form of bisection / Newton's method. The general technique survives even if TI-83 interface details don't.

**Content you can skip:**
- TI-83-specific tips like "dot mode" or "change of scale to avoid extraneous vertical lines at asymptotes" (Example 6) — these are artifacts of 2007-era rendering pipelines. Modern plotting libraries handle asymptotes correctly by default.

With that framing, the examples:

---

## The viewing rectangle

A graphing tool displays a rectangular portion of the graph:

$$[a, b] \times [c, d] = \{(x, y) \mid a \leq x \leq b, \ c \leq y \leq d\}$$

This is the **viewing rectangle** (or viewing window). The machine samples evenly-spaced $x$-values in $[a, b]$, computes $f(x)$, plots the points, and connects them.

> **Figure 1.** A rectangle in the $xy$-plane with corners $(a, c)$, $(b, c)$, $(b, d)$, $(a, d)$, labeled with $x = a$ and $x = b$ as the left/right edges and $y = c$, $y = d$ as the bottom/top.

---

## Example 1 — The blank-screen pitfall

Draw $f(x) = x^2 + 3$ in the viewing rectangles (a) $[-2, 2] \times [-2, 2]$, (b) $[-4, 4] \times [-4, 4]$, (c) $[-10, 10] \times [-5, 30]$, (d) $[-50, 50] \times [-100, 1000]$.

**Result.** Rectangle (a) shows a **blank screen** — because $x^2 + 3 \geq 3$ for all $x$, the entire graph lies above $y = 2$, outside the window. Rectangle (b) shows only the bottom of the parabola. Rectangles (c) and (d) show the full parabolic shape, but in (d) the $y$-intercept at $3$ is invisible because it's dwarfed by the scale.

**Takeaway.** If you don't know the range, compute the minimum value analytically first, then set $y$-bounds to include it.

---

## Example 2 — Windowing a function with restricted domain

Determine an appropriate viewing rectangle for $f(x) = \sqrt{8 - 2x^2}$ and graph it.

**Domain.** $8 - 2x^2 \geq 0 \Leftrightarrow x^2 \leq 4 \Leftrightarrow -2 \leq x \leq 2$. So domain is $[-2, 2]$.

**Range.** $0 \leq \sqrt{8 - 2x^2} \leq \sqrt{8} = 2\sqrt{2} \approx 2.83$. So range is $[0, 2\sqrt{2}]$.

**Window.** Take $[-3, 3] \times [-1, 4]$ — somewhat larger than the tight bounding box, for margin.

> **Figure 3.** The upper half of an ellipse, centered at the origin, crossing the $x$-axis at $\pm 2$ and peaking at $(0, 2\sqrt{2})$.

```plot
{
  "title": "Figure 3 — y = √(8 − 2x²)",
  "width": 460, "height": 280,
  "xRange": [-3, 3], "yRange": [-1, 4],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sqrt(8 - 2*x*x)", "domain": [-2, 2], "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x":  0, "y": 2.828, "style": "filled", "color": "#1f2430", "label": "(0, 2√2)", "labelDx": 8, "labelDy": -8},
    {"x": -2, "y": 0,     "style": "filled", "color": "#1f2430"},
    {"x":  2, "y": 0,     "style": "filled", "color": "#1f2430"}
  ]
}
```

---

## Example 3 — Iteratively finding the right window for a polynomial

Graph $y = x^3 - 150x$.

Domain is $\mathbb{R}$, so we need to experiment:
- $[-5, 5] \times [-5, 5]$: appears blank (curve is too steep at this scale).
- $[-20, 20] \times [-20, 20]$: looks like vertical lines — the curve leaves and re-enters the window between sample points.
- $[-20, 20] \times [-500, 500]$: better, but still missing features.
- $[-20, 20] \times [-1000, 1000]$: reveals the characteristic S-shape of a cubic with positive leading coefficient — left arm down, middle region with a local max and min, right arm up.

---

## Example 4 — Aliasing (the most important example in this section)

Graph $f(x) = \sin 50x$.

The period is $\dfrac{2\pi}{50} = \dfrac{\pi}{25} \approx 0.126$ — very short.

> **Figure 6 — Four different viewing rectangles showing four different "graphs" of the same function.**
> - **(a) $[-12, 12] \times [-1.5, 1.5]$:** appears as a single smooth low-frequency wave.
> - **(b) $[-10, 10] \times [-1.5, 1.5]$:** shows dense rapid oscillations of uneven amplitude.
> - **(c) $[-9, 9] \times [-1.5, 1.5]$:** different pattern — "beats" of varying density.
> - **(d) $[-6, 6] \times [-1.5, 1.5]$:** appears as a single decreasing curve with no oscillation at all!

**Why this happens.** The display has a finite number of pixels (e.g., 95 pixels wide on a TI-83). If the period is shorter than the distance between pixels, the renderer samples at points that can fall systematically at peaks, at troughs, or at zero crossings — producing spurious patterns.

**The fix.** Zoom in to a viewing rectangle narrower than a single period. $[-0.25, 0.25] \times [-1.5, 1.5]$ reveals the true oscillation.

```plot
{
  "title": "y = sin 50x — true behavior, narrow window",
  "width": 540, "height": 280,
  "xRange": [-0.25, 0.25], "yRange": [-1.5, 1.5],
  "xStep": 0.0628318530717959, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sin(50*x)", "color": "#b04a2f", "width": 2, "samples": 1500}
  ],
  "caption": "Period = 2π/50 ≈ 0.126. Each tick is one period (π/25)."
}
```

**General rule — Nyquist criterion.** To avoid aliasing, you need to sample at least **twice per period**. If the period is $T$, the viewing-rectangle width divided by pixel count must be at most $T/2$. This is the Shannon-Nyquist theorem in its simplest form: *"to capture a signal with maximum frequency $f_{\max}$, sample at rate $> 2f_{\max}$."* **Directly relevant for you** — sampling intraday tick data, resampling returns at different frequencies, computing realized volatility on high-frequency windows. The rule is the same.

---

## Example 5 — When one window isn't enough

Graph $f(x) = \sin x + \tfrac{1}{100}\cos 100x$.

In $[-6.5, 6.5] \times [-1.5, 1.5]$ the graph looks essentially like $y = \sin x$ (with barely-visible "bumps"). Zooming to $[-0.1, 0.1] \times [-0.1, 0.1]$ reveals the bumpy fine structure from the $\tfrac{1}{100}\cos 100x$ term.

**Takeaway.** When a function has terms with **very different scales**, no single window can show both. Use multiple windows. This is the same issue as plotting a stock price on a log scale when intraday noise is tiny relative to the level.

---

## Example 6 — Spurious vertical lines at asymptotes

Graph $y = \dfrac{1}{1 - x}$.

A calculator in "connect" mode draws a steep vertical line at $x = 1$ (the asymptote) — because it connects the last point before $x = 1$ (at very large positive $y$) to the first point after (at very large negative $y$). The line is not part of the graph; it's a rendering artifact.

**Fix.** Either switch to "dot mode" (don't connect points), or change the viewing rectangle so that $x = 1$ falls exactly on a sample point (then the machine won't draw through it).

**This pitfall is TI-83-specific.** Modern plotting libraries handle asymptotes correctly by default (e.g., matplotlib's default behavior disconnects at infinite values if you set `ylim` appropriately).

---

## Example 7 — Platform-dependent output for $\sqrt[3]{x}$

Graph $y = \sqrt[3]{x}$.

Some graphing devices show only the right half — because they compute $\sqrt[3]{x}$ via $e^{(\ln x)/3}$, which is undefined for $x < 0$. To force a correct plot on such a machine, graph

$$f(x) = \frac{x}{|x|} \cdot |x|^{1/3}$$

which equals $\sqrt[3]{x}$ for $x \neq 0$ but uses only $|x|$ inside the radical.

**Takeaway.** Know how your tool computes things. Power-function and log-based cube-root implementations disagree on negative inputs.

---

## Example 8 — Family of functions

Graph $y = x^3 + cx$ for $c = 2, 1, 0, -1, -2$.

> **Figure 13 — Five sub-graphs showing the cubic's shape evolving with $c$.**
> - $c = 2$: $y = x^3 + 2x$ — strictly increasing S-curve.
> - $c = 1$: $y = x^3 + x$ — still strictly increasing.
> - $c = 0$: $y = x^3$ — flat at the origin (inflection point, zero slope there).
> - $c = -1$: $y = x^3 - x$ — now has a local max and a local min.
> - $c = -2$: $y = x^3 - 2x$ — deeper local max and min.

```plot
{
  "title": "Figure 13 — y = x³ + cx for c = 2, 1, 0, −1, −2",
  "width": 540, "height": 380,
  "xRange": [-2.5, 2.5], "yRange": [-6, 6],
  "xStep": 0.5, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x*x + 2*x",  "color": "#b04a2f", "width": 1.8},
    {"fn": "x*x*x + x",    "color": "#c87d3b", "width": 1.8},
    {"fn": "x*x*x",        "color": "#1f2430", "width": 2.0},
    {"fn": "x*x*x - x",    "color": "#2867b2", "width": 1.8},
    {"fn": "x*x*x - 2*x",  "color": "#6b3aa0", "width": 1.8}
  ],
  "annotations": [
    {"x":  2.05, "y":  5.7, "text": "c = 2",  "color": "#b04a2f", "anchor": "start"},
    {"x":  1.85, "y":  5.6, "text": "c = 1",  "color": "#c87d3b", "anchor": "start"},
    {"x":  1.65, "y":  4.5, "text": "c = 0",  "color": "#1f2430", "anchor": "start"},
    {"x":  1.85, "y":  3.6, "text": "c = −1", "color": "#2867b2", "anchor": "start"},
    {"x":  2.05, "y":  2.7, "text": "c = −2", "color": "#6b3aa0", "anchor": "start"}
  ]
}
```

**Takeaway.** The qualitative behavior changes at $c = 0$: for $c \geq 0$ the cubic is monotone; for $c < 0$ it has a max and a min. This **bifurcation** is the kind of transition you identify analytically in Chapter 4. Parameter sweeps + visual inspection is the experimental counterpart to bifurcation analysis.

---

## Example 9 — Solving an equation by zooming

Find the solution of $\cos x = x$ correct to two decimal places.

**Approach.** The solutions are the $x$-coordinates of intersections between $y = \cos x$ and $y = x$.
- Wide view $[-5, 5] \times [-1.5, 1.5]$: one intersection, between 0 and 1.
- Zoom to $[0, 1] \times [0, 1]$: intersection is between 0.7 and 0.8.
- Zoom to $[0.7, 0.8] \times [0.7, 0.8]$ with $x$-scale 0.01: intersection is at about **$x \approx 0.74$**.

This is **bisection** in graphical form. It's not the fastest numerical root-finder (Newton's method converges quadratically vs. bisection's linear rate), but it's robust and requires no derivatives. In practice you'd use `scipy.optimize.brentq` or similar.

---

## Exercises

*Legend: `[HINT]` = cyan-boxed number (homework hint online).*

### Choose the right viewing rectangle (Exercises 1–14)

**1.** Use a graphing calculator or computer to determine which of the given viewing rectangles produces the most appropriate graph of the function $f(x) = \sqrt{x^3 - 5x^2}$.
- (a) $[-5, 5]$ by $[-5, 5]$
- (b) $[0, 10]$ by $[0, 2]$
- (c) $[0, 10]$ by $[0, 10]$

**2.** Use a graphing calculator or computer to determine which of the given viewing rectangles produces the most appropriate graph of the function $f(x) = x^4 - 16x^2 + 20$.
- (a) $[-3, 3]$ by $[-3, 3]$
- (b) $[-10, 10]$ by $[-10, 10]$
- (c) $[-50, 50]$ by $[-50, 50]$
- (d) $[-5, 5]$ by $[-50, 50]$

**3–14.** Determine an appropriate viewing rectangle for the given function and use it to draw the graph.

**3.** $f(x) = 5 + 20x - x^2$

**4.** $f(x) = x^3 + 30x^2 + 200x$

**5.** $f(x) = \sqrt[4]{81 - x^4}$

**6.** $f(x) = \sqrt{0.1x + 20}$

**7.** $f(x) = x^3 - 225x$

**8.** `[HINT]` $f(x) = \dfrac{x}{x^2 + 100}$

**9.** `[HINT]` $f(x) = \sin^2(1000x)$

**10.** $f(x) = \cos(0.001x)$

**11.** $f(x) = \sin\sqrt{x}$

**12.** $f(x) = \sec(20\pi x)$

**13.** $y = 10\sin x + \sin 100x$

**14.** $y = x^2 + 0.02\sin 50x$

---

### Ellipses, hyperbolas, and intersections (Exercises 15–18)

**15.** Graph the ellipse $4x^2 + 2y^2 = 1$ by graphing the functions whose graphs are the upper and lower halves of the ellipse.

**16.** Graph the hyperbola $y^2 - 9x^2 = 1$ by graphing the functions whose graphs are the upper and lower branches of the hyperbola.

**17–18.** Do the graphs intersect in the given viewing rectangle? If they do, how many points of intersection are there?

**17.** $y = 3x^2 - 6x + 1$, $\ y = 0.23x - 2.25$; $\ [-1, 3]$ by $[-2.5, 1.5]$

**18.** $y = 6 - 4x - x^2$, $\ y = 3x + 18$; $\ [-6, 2]$ by $[-5, 20]$

---

### Find solutions numerically (Exercises 19–22)

**19–21.** Find all solutions of the equation correct to two decimal places.

**19.** $x^3 - 9x^2 - 4 = 0$

**20.** $x^3 = 4x - 1$

**21.** $x^2 = \sin x$

**22.** We saw in Example 9 that the equation $\cos x = x$ has exactly one solution.
- (a) Use a graph to show that the equation $\cos x = 0.3x$ has three solutions and find their values correct to two decimal places.
- (b) Find an approximate value of $m$ such that the equation $\cos x = mx$ has exactly two solutions.

---

### Asymptotic / long-run comparisons (Exercises 23–25)

**23.** `[HINT]` Use graphs to determine which of the functions $f(x) = 10x^2$ and $g(x) = x^3/10$ is eventually larger (that is, larger when $x$ is very large).

**24.** Use graphs to determine which of the functions $f(x) = x^4 - 100x^3$ and $g(x) = x^3$ is eventually larger.

**25.** For what values of $x$ is it true that $|\sin x - x| < 0.1$?

---

### Family of functions and parameter sweeps (Exercises 26–34)

**26.** Graph the polynomials $P(x) = 3x^5 - 5x^3 + 2x$ and $Q(x) = 3x^5$ on the same screen, first using the viewing rectangle $[-2, 2]$ by $[-2, 2]$ and then changing to $[-10, 10]$ by $[-10{,}000, 10{,}000]$. What do you observe from these graphs?

**27.** `[HINT]` In this exercise we consider the family of root functions $f(x) = \sqrt[n]{x}$, where $n$ is a positive integer.
- (a) Graph the functions $y = \sqrt{x}$, $y = \sqrt[4]{x}$, and $y = \sqrt[6]{x}$ on the same screen using the viewing rectangle $[-1, 4]$ by $[-1, 3]$.
- (b) Graph the functions $y = x$, $y = \sqrt[3]{x}$, and $y = \sqrt[5]{x}$ on the same screen using the viewing rectangle $[-3, 3]$ by $[-2, 2]$.
- (c) Graph the functions $y = \sqrt{x}$, $y = \sqrt[3]{x}$, $y = \sqrt[4]{x}$, and $y = \sqrt[5]{x}$ on the same screen using the viewing rectangle $[-1, 3]$ by $[-1, 2]$.
- (d) What conclusions can you make from these graphs?

**28.** In this exercise we consider the family of functions $f(x) = 1/x^n$, where $n$ is a positive integer.
- (a) Graph the functions $y = 1/x$ and $y = 1/x^3$ on the same screen using the viewing rectangle $[-3, 3]$ by $[-3, 3]$.
- (b) Graph the functions $y = 1/x^2$ and $y = 1/x^4$ on the same screen using the same viewing rectangle as in part (a).
- (c) Graph all of the functions in parts (a) and (b) on the same screen using the viewing rectangle $[-1, 3]$ by $[-1, 3]$.
- (d) What conclusions can you make from these graphs?

**29.** `[HINT]` Graph the function $f(x) = x^4 + cx^2 + x$ for several values of $c$. How does the graph change when $c$ changes?

**30.** Graph the function $f(x) = \sqrt{1 + cx^2}$ for various values of $c$. Describe how changing the value of $c$ affects the graph.

**31.** Graph the function $y = x^n 2^{-x}$, $x \geq 0$, for $n = 1, 2, 3, 4, 5$, and $6$. How does the graph change as $n$ increases?

**32.** The curves with equations

$$y = \frac{|x|}{\sqrt{c - x^2}}$$

are called **bullet-nose curves**. Graph some of these curves to see why. What happens as $c$ increases?

**33.** `[HINT]` What happens to the graph of the equation $y^2 = cx^3 + x^2$ as $c$ varies?

**34.** This exercise explores the effect of the inner function $g$ on a composite function $y = f(g(x))$.
- (a) Graph the function $y = \sin(\sqrt{x})$ using the viewing rectangle $[0, 400]$ by $[-1.5, 1.5]$. How does this graph differ from the graph of the sine function?
- (b) Graph the function $y = \sin(x^2)$ using the viewing rectangle $[-5, 5]$ by $[-1.5, 1.5]$. How does this graph differ from the graph of the sine function?

---

### Aliasing (Exercises 35–36)

**35.** The figure shows the graphs of $y = \sin 96x$ and $y = \sin 2x$ as displayed by a TI-83 graphing calculator. The first graph is inaccurate. Explain why the two graphs appear identical. [*Hint*: The TI-83's graphing window is 95 pixels wide. What specific points does the calculator plot?]

> **Figure provided:** Two identical-looking low-frequency sine curves, the left labeled $y = \sin 96x$ and the right labeled $y = \sin 2x$, both showing about 2 periods across $[0, 2\pi]$ on the TI-83. In reality $\sin 96x$ has 96/2 = 48 periods on this interval.

```plot
{
  "title": "What the TI-83 draws for both sin 96x and sin 2x (two periods on [0, 2π])",
  "width": 540, "height": 260,
  "xRange": [0, 6.283185], "yRange": [-1.2, 1.2],
  "xStep": 1.5707963, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sin(2*x)", "domain": [0, 6.283185], "color": "#b04a2f", "width": 2.2, "samples": 400}
  ],
  "caption": "Identical-looking. But only one of these is actually sin 2x — the other is sin 96x aliased to the same 95-pixel sampling grid."
}
```

```plot
{
  "title": "The TRUE shape of y = sin 96x on [0, 2π] — 48 complete periods",
  "width": 540, "height": 260,
  "xRange": [0, 6.283185], "yRange": [-1.2, 1.2],
  "xStep": 1.5707963, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sin(96*x)", "domain": [0, 6.283185], "color": "#2867b2", "width": 0.9, "samples": 8000}
  ],
  "caption": "What the function actually does: 48 oscillations per 2π. The TI-83's 95-pixel grid samples the wrong way and collapses this onto sin 2x."
}
```

**36.** The first graph in the figure is that of $y = \sin 45x$ as displayed by a TI-83 graphing calculator. It is inaccurate and so, to help explain its appearance, we replot the curve in dot mode in the second graph.

> **Figure provided:** Left — a dense but uneven waveform labeled "$y = \sin 45x$" on $[0, 2\pi]$. Right — the same function in dot mode, showing scattered dot patterns suggesting two envelope curves.

```plot
{
  "title": "What the TI-83 draws for y = sin 45x in connected mode",
  "width": 540, "height": 260,
  "xRange": [0, 6.283185], "yRange": [-1.2, 1.2],
  "xStep": 1.5707963, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sin(45*x)", "domain": [0, 6.283185], "color": "#b04a2f", "width": 1.0, "samples": 3000}
  ],
  "caption": "Dense zig-zag — connecting the 95 sampled points produces an uneven waveform, not the clean 45/2π ≈ 7.2-period curve you'd want."
}
```

```plot
{
  "title": "In dot mode: two envelope curves emerge",
  "width": 540, "height": 260,
  "xRange": [0, 6.283185], "yRange": [-1.2, 1.2],
  "xStep": 1.5707963, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"data": [[0,0],[0.0668,0.1333],[0.1337,-0.2642],[0.2005,0.3904],[0.2674,-0.5096],[0.3342,0.6197],[0.4011,-0.7188],[0.4679,0.8051],[0.5347,-0.8769],[0.6016,0.9332],[0.6684,-0.9728],[0.7353,0.995],[0.8021,-0.9994],[0.869,0.9861],[0.9358,-0.9551],[1.0026,0.9071],[1.0695,-0.8429],[1.1363,0.7637],[1.2032,-0.6708],[1.27,0.5659],[1.3368,-0.451],[1.4037,0.328],[1.4705,-0.1992],[1.5374,0.0668],[1.6042,0.0668],[1.6711,-0.1992],[1.7379,0.328],[1.8047,-0.451],[1.8716,0.5659],[1.9384,-0.6708],[2.0053,0.7637],[2.0721,-0.8429],[2.139,0.9071],[2.2058,-0.9551],[2.2726,0.9861],[2.3395,-0.9994],[2.4063,0.995],[2.4732,-0.9728],[2.54,0.9332],[2.6069,-0.8769],[2.6737,0.8051],[2.7405,-0.7188],[2.8074,0.6197],[2.8742,-0.5096],[2.9411,0.3904],[3.0079,-0.2642],[3.0748,0.1333],[3.1416,0],[3.2084,-0.1333],[3.2753,0.2642],[3.3421,-0.3904],[3.409,0.5096],[3.4758,-0.6197],[3.5426,0.7188],[3.6095,-0.8051],[3.6763,0.8769],[3.7432,-0.9332],[3.81,0.9728],[3.8769,-0.995],[3.9437,0.9994],[4.0105,-0.9861],[4.0774,0.9551],[4.1442,-0.9071],[4.2111,0.8429],[4.2779,-0.7637],[4.3448,0.6708],[4.4116,-0.5659],[4.4784,0.451],[4.5453,-0.328],[4.6121,0.1992],[4.679,-0.0668],[4.7458,-0.0668],[4.8127,0.1992],[4.8795,-0.328],[4.9463,0.451],[5.0132,-0.5659],[5.08,0.6708],[5.1469,-0.7637],[5.2137,0.8429],[5.2805,-0.9071],[5.3474,0.9551],[5.4142,-0.9861],[5.4811,0.9994],[5.5479,-0.995],[5.6148,0.9728],[5.6816,-0.9332],[5.7484,0.8769],[5.8153,-0.8051],[5.8821,0.7188],[5.949,-0.6197],[6.0158,0.5096],[6.0827,-0.3904],[6.1495,0.2642],[6.2163,-0.1333],[6.2832,0]], "mode": "scatter", "color": "#5b6477", "pointStyle": "filled", "r": 1.8},
    {"fn": "sin(4*x)",  "domain": [0, 6.283185], "color": "#2867b2", "width": 1.4, "samples": 400, "dash": "3 3"},
    {"fn": "-sin(4*x)", "domain": [0, 6.283185], "color": "#2867b2", "width": 1.4, "samples": 400, "dash": "3 3"}
  ],
  "caption": "The sampled values land on two dashed envelope curves ±sin 4x. (Envelope freq = |45 − 49·1| = 4 since 49 ≈ 95/2 is the Nyquist rate.)"
}
```

What two sine curves does the calculator appear to be plotting? Show that each point on the graph of $y = \sin 45x$ that the TI-83 chooses to plot is in fact on one of these two curves. (The TI-83's graphing window is 95 pixels wide.)

---

## Priority notes for a quant-prep pass

**Worth doing:**
- **Exercise 9** (aliasing on $\sin^2(1000x)$) — same phenomenon as Example 4. Direct Nyquist intuition.
- **Exercises 27, 28** (families of root functions, families of $1/x^n$) — parameter-sensitivity thinking.
- **Exercise 29** (family $x^4 + cx^2 + x$) — bifurcation flavor; the graph topology changes as $c$ passes through certain thresholds.
- **Exercises 35, 36** (explicit aliasing math) — genuinely sharpens Nyquist intuition.
- **Exercises 23, 24** (which function is eventually larger) — asymptotic reasoning; this is what Big-O notation is built on and what you need for tail-behavior analysis.

**Skip or skim:**
- **1–14** (pick the right window) — trivial if you've computed domain/range analytically first.
- **15–18** (ellipse, hyperbola, intersections) — concept familiar.
- **19–22** (numerical solve via zoom) — once was novel; now just `scipy.optimize.brentq`.
- **30, 31, 32, 33** (more parameter sweeps) — pick one or two; they're all essentially the same exercise with different functions.

This section's lessons are internalized in an afternoon. Move on to 1.5 (Exponential Functions — a more substantial section) when you're ready.
