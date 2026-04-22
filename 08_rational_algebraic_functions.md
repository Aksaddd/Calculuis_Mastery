# Section 1.2 — Rational and Algebraic Functions

*Covers pp. 31 middle – 32 top of the book (PDF pp. 59 middle – 60 top). Two tightly related function families: rational functions (ratios of polynomials) and their superset, algebraic functions (anything buildable from polynomials using the algebraic operations including roots). Stops where the TRIGONOMETRIC FUNCTIONS sub-heading begins mid-page 60.*

---

## Rational Functions

> **Definition.** A **rational function** $f$ is a ratio of two polynomials:
> $$f(x) = \frac{P(x)}{Q(x)}$$
> where $P$ and $Q$ are polynomials.

**Domain.** All $x$ such that $Q(x) \neq 0$. (Wherever the denominator vanishes, $f$ is undefined.)

**Simplest example.** $f(x) = \dfrac{1}{x}$ — this is the reciprocal function from Case (iii) of Power Functions, graphed in Figure 14. Its domain is $\{x \mid x \neq 0\}$.

**Slightly richer example.**

$$f(x) = \frac{2x^4 - x^2 + 1}{x^2 - 4}$$

The denominator $x^2 - 4 = (x-2)(x+2)$ vanishes at $x = \pm 2$, so the domain is

$$\{x \mid x \neq \pm 2\}$$

> **Figure 16 — $f(x) = \dfrac{2x^4 - x^2 + 1}{x^2 - 4}$.** Three branches, separated by **vertical asymptotes at $x = -2$ and $x = 2$** (drawn as dashed vertical lines). The $y$-axis grid shows a tick at $y = 20$ for scale.
> - **Left branch ($x < -2$):** goes to $+\infty$ on both ends — as $x \to -\infty$ (numerator dominates, $\sim 2x^2$) and as $x \to -2^-$ (denominator $\to 0^+$, numerator positive). Dips to a finite local minimum in between.
> - **Middle branch ($-2 < x < 2$):** goes to $-\infty$ near each asymptote (denominator $\to 0^-$ from inside, numerator stays positive). Sits entirely below the $x$-axis; at $x = 0$ the value is $f(0) = 1/(-4) = -0.25$.
> - **Right branch ($x > 2$):** mirror of the left branch — $+\infty$ near $x = 2^+$ and $+\infty$ as $x \to \infty$, with a finite local minimum between.
>
> Exact asymptotic behavior and the location of the local minima are derived systematically in Chapter 2.

```plot
{
  "title": "Figure 16 — f(x) = (2x⁴ − x² + 1) / (x² − 4)",
  "width": 540, "height": 380,
  "xRange": [-5, 5], "yRange": [-30, 40],
  "xStep": 1, "yStep": 10,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "(2*pow(x,4) - x*x + 1) / (x*x - 4)", "domain": [-5, -2.05], "color": "#b04a2f", "width": 2},
    {"fn": "(2*pow(x,4) - x*x + 1) / (x*x - 4)", "domain": [-1.95, 1.95], "color": "#b04a2f", "width": 2},
    {"fn": "(2*pow(x,4) - x*x + 1) / (x*x - 4)", "domain": [2.05, 5], "color": "#b04a2f", "width": 2}
  ],
  "lines": [
    {"type": "vertical", "x": -2, "color": "#999", "dash": "5 4"},
    {"type": "vertical", "x":  2, "color": "#999", "dash": "5 4"}
  ],
  "annotations": [
    {"x": -2.05, "y": 35, "text": "x = −2", "color": "#666", "anchor": "end", "italic": false},
    {"x":  2.05, "y": 35, "text": "x = 2",  "color": "#666", "anchor": "start", "italic": false}
  ]
}
```

**The universal fact about rational functions:** wherever $Q(x) = 0$ but $P(x) \neq 0$, you get a **vertical asymptote**. This is why domain-finding for rationals reduces to factoring the denominator — every root of $Q$ is either a hole (if it's also a root of $P$ with at least the same multiplicity) or a vertical asymptote.

---

## Algebraic Functions

> **Definition.** A function $f$ is an **algebraic function** if it can be constructed using the algebraic operations — addition, subtraction, multiplication, division, and taking roots — starting with polynomials.

**Containment hierarchy so far:**

$$\text{polynomials} \ \subset \ \text{rational functions} \ \subset \ \text{algebraic functions}$$

Every polynomial is rational (denominator $= 1$). Every rational function is algebraic (no roots needed). The inclusions are proper: $\sqrt{x^2 + 1}$ is algebraic but not rational; $1/(x-1)$ is rational but not polynomial.

**Examples of algebraic functions beyond rationals:**

$$f(x) = \sqrt{x^2 + 1} \qquad\qquad g(x) = \frac{x^4 - 16 x^2}{x + \sqrt{x}} + (x - 2)\sqrt[3]{x + 1}$$

The $g(x)$ example is deliberately ugly — it shows the closure property: sums, products, quotients, and roots of already-algebraic things are still algebraic.

### Graph shapes are varied

Stewart defers systematic graphing of algebraic functions to Chapter 4 (derivative methods). Three examples of what's possible:

> **Figure 17 — Three algebraic functions.**
> - **(a) $f(x) = x\sqrt{x + 3}$.** Domain $[-3, \infty)$ (need $x + 3 \geq 0$). The graph starts at $(-3, 0)$, dips through the fourth quadrant to a minimum, crosses the $x$-axis at the origin, and rises concave-up through the first quadrant. Passes through $(1, 2)$.
> - **(b) $g(x) = \sqrt[4]{x^2 - 25}$.** Domain is where $x^2 - 25 \geq 0$, i.e. $x \leq -5$ or $x \geq 5$. Two disconnected branches. Each rises from $(±5, 0)$ outward with a slope that starts vertical at the boundary (because of the fourth-root behavior at its zero).
> - **(c) $h(x) = x^{2/3}(x - 2)^2$.** Two zeros at $x = 0$ and $x = 2$. Has a **cusp at the origin** (from the $x^{2/3}$ factor) and a smooth local min at $x = 2$ (double root). Non-negative everywhere.

```plot
{
  "title": "Figure 17a — f(x) = x·√(x + 3)",
  "width": 460, "height": 320,
  "xRange": [-4, 3], "yRange": [-3, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x * sqrt(x + 3)", "domain": [-3, 3], "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": -3, "y": 0, "style": "filled", "color": "#1f2430", "label": "(−3, 0)", "labelDx": -8, "labelDy": -8},
    {"x":  0, "y": 0, "style": "filled", "color": "#1f2430"},
    {"x":  1, "y": 2, "style": "filled", "color": "#1f2430", "label": "(1, 2)",  "labelDx": 8,  "labelDy": -8}
  ]
}
```

```plot
{
  "title": "Figure 17b — g(x) = (x² − 25)^(1/4)",
  "width": 460, "height": 320,
  "xRange": [-9, 9], "yRange": [-1, 4],
  "xStep": 1, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "pow(x*x - 25, 0.25)", "domain": [-8.5, -5], "color": "#b04a2f", "width": 2.2},
    {"fn": "pow(x*x - 25, 0.25)", "domain": [5, 8.5],   "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": -5, "y": 0, "style": "filled", "color": "#1f2430", "label": "(−5, 0)", "labelDx": -8, "labelDy": -8},
    {"x":  5, "y": 0, "style": "filled", "color": "#1f2430", "label": "(5, 0)",  "labelDx": 8,  "labelDy": -8}
  ]
}
```

```plot
{
  "title": "Figure 17c — h(x) = x^(2/3)·(x − 2)²",
  "width": 460, "height": 320,
  "xRange": [-2, 4], "yRange": [-1, 6],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "cbrt(x)*cbrt(x) * (x - 2)*(x - 2)", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 0, "y": 0, "style": "filled", "color": "#1f2430", "label": "cusp", "labelDx": -8, "labelDy": -8},
    {"x": 2, "y": 0, "style": "filled", "color": "#1f2430", "label": "(2, 0)", "labelDx": 8, "labelDy": -8}
  ]
}
```

**Cusps and vertical tangents are specifically the signature of fractional-exponent algebraic functions.** $x^{2/3}$ has a cusp at 0; $x^{1/3}$ has a vertical tangent at 0; $\sqrt[4]{x - a}$ has a vertical tangent at $x = a$. These show up in Chapter 4 curve-sketching.

### Physical application — relativistic mass

An algebraic function appears in special relativity. The mass of a particle moving at velocity $v$ is

$$m = f(v) = \frac{m_0}{\sqrt{\,1 - v^2 / c^2\,}}$$

where $m_0$ is the **rest mass** and $c = 3.0 \times 10^5$ km/s is the speed of light in vacuum.

**Reading the formula.**
- At $v = 0$: $m = m_0$ (the rest mass, as expected).
- As $v \to c^-$: the denominator $\sqrt{1 - v^2/c^2} \to 0^+$, so $m \to \infty$. **Why massive objects can't be accelerated to $c$ — it would require infinite energy.**
- Domain: $-c < v < c$ (strictly; at $v = \pm c$ the function is undefined).

This is algebraic because it's built from polynomials ($v^2$, $1 - v^2/c^2$), division, and a square root — nothing transcendental. Every function you meet in *classical* physics (mechanics, fluid dynamics, electromagnetism at its algebraic level) is built from the same toolkit.

---

## Where the hierarchy ends

Stewart's catalog has one more boundary after algebraic functions: **transcendental functions**. These are functions that **cannot** be obtained from polynomials by finitely many algebraic operations — the trigonometric, exponential, and logarithmic families. They live beyond the algebraic closure of polynomials, which is precisely what "transcendental" (from Latin *transcendere*, to climb beyond) means.

The next three sub-sections of 1.2 introduce each of those transcendental families in turn:

$$\underbrace{\text{polynomial} \subset \text{rational} \subset \text{algebraic}}_{\text{all algebraic}} \ \subsetneq \ \underbrace{\text{transcendental}}_{\sin, \cos, \tan, e^x, \ln x, \ldots}$$

---

*End of Unit 3. Next unit: Trigonometric Functions — mid-page 60 onward.*
