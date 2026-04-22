# Section 1.1 — Symmetry and Monotonicity

*Covers pp. 19 and top of 20 of the book (PDF pp. 47 and top of 48). Two short conceptual wrappers that close out Section 1.1 before the exercises: the even/odd classification of functions, and the formal definition of increasing vs. decreasing on an interval.*

---

## Symmetry — even and odd functions

> **Definition.**
> - $f$ is **even** if $f(-x) = f(x)$ for every $x$ in its domain.
> - $f$ is **odd** if $f(-x) = -f(x)$ for every $x$ in its domain.

**Geometric meaning.**

| Type | Algebraic condition | Graph symmetry |
|------|---------------------|----------------|
| Even | $f(-x) = f(x)$ | Symmetric about the **$y$-axis** (reflect the right half to get the left) |
| Odd | $f(-x) = -f(x)$ | Symmetric about the **origin** (rotate the right half 180° to get the left) |

**Canonical examples:**

- $f(x) = x^2$ is even: $f(-x) = (-x)^2 = x^2 = f(x)$.
- $f(x) = x^3$ is odd: $f(-x) = (-x)^3 = -x^3 = -f(x)$.

In general: $x^n$ is even when $n$ is even, odd when $n$ is odd — which is where the names come from.

> **Figure 19 — An even function.** A curve symmetric about the $y$-axis. For a sample $x > 0$, the heights at $+x$ and $-x$ are equal: $f(-x) = f(x)$, shown by matching vertical tick marks on both sides.

```plot
{
  "title": "Figure 19 — even function (representative)",
  "width": 460, "height": 300,
  "xRange": [-3, 3], "yRange": [-1, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "0.5 * x*x + 1", "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "vertical", "x":  1.6, "yRange": [0, 2.28], "color": "#888", "dash": "3 3"},
    {"type": "vertical", "x": -1.6, "yRange": [0, 2.28], "color": "#888", "dash": "3 3"}
  ],
  "points": [
    {"x":  1.6, "y": 2.28, "style": "filled", "color": "#1f2430", "label": "(x, f(x))",  "labelDx": 8, "labelDy": -8},
    {"x": -1.6, "y": 2.28, "style": "filled", "color": "#1f2430", "label": "(−x, f(x))", "labelDx": -8, "labelDy": -8}
  ],
  "caption": "Equal heights at +x and −x: f(−x) = f(x)."
}
```

> **Figure 20 — An odd function.** A curve symmetric about the origin. For a sample $x > 0$, the height at $-x$ is the negative of the height at $+x$: $f(-x) = -f(x)$. The curve passes through the origin.

```plot
{
  "title": "Figure 20 — odd function (representative)",
  "width": 460, "height": 320,
  "xRange": [-3, 3], "yRange": [-4, 4],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "0.4 * x*x*x", "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "vertical", "x":  1.5, "yRange": [0,  1.35], "color": "#888", "dash": "3 3"},
    {"type": "vertical", "x": -1.5, "yRange": [-1.35, 0], "color": "#888", "dash": "3 3"}
  ],
  "points": [
    {"x":  1.5, "y":  1.35, "style": "filled", "color": "#1f2430", "label": "(x, f(x))",   "labelDx": 8, "labelDy": -8},
    {"x": -1.5, "y": -1.35, "style": "filled", "color": "#1f2430", "label": "(−x, −f(x))", "labelDx": -8, "labelDy": 14}
  ],
  "caption": "Heights at +x and −x are opposite: f(−x) = −f(x); curve passes through (0, 0)."
}
```

**Practical consequence.** If you know $f$ is even or odd, you only need to sketch (or compute values of) $f$ for $x \geq 0$:
- Even → mirror it across the $y$-axis.
- Odd → rotate it 180° about the origin.

---

### Example 11 — Classifying three functions

Determine whether each function is even, odd, or neither.

**(a)** $f(x) = x^5 + x$

$$f(-x) = (-x)^5 + (-x) = (-1)^5 x^5 + (-x) = -x^5 - x = -(x^5 + x) = -f(x)$$

So $f$ is **odd**.

**(b)** $g(x) = 1 - x^4$

$$g(-x) = 1 - (-x)^4 = 1 - x^4 = g(x)$$

So $g$ is **even**.

**(c)** $h(x) = 2x - x^2$

$$h(-x) = 2(-x) - (-x)^2 = -2x - x^2$$

Compare: $h(x) = 2x - x^2$ and $-h(x) = -2x + x^2$. Neither matches $h(-x) = -2x - x^2$. So $h$ is **neither**.

> **Figure 21 — The three graphs from Example 11.**
> - **(a)** $f(x) = x^5 + x$: origin-symmetric curve passing through $(-1, -2)$, the origin, $(1, 2)$, steeply rising (odd).
> - **(b)** $g(x) = 1 - x^4$: downward-opening "flattened hump" symmetric about the $y$-axis, peak at $(0, 1)$, crossing the $x$-axis at $x = \pm 1$ (even).
> - **(c)** $h(x) = 2x - x^2$: a downward parabola with vertex at $(1, 1)$, crossing the $x$-axis at $x = 0$ and $x = 2$. Not symmetric about either axis — neither even nor odd.

```plot
{
  "title": "Figure 21a — f(x) = x⁵ + x (odd)",
  "width": 460, "height": 320,
  "xRange": [-1.5, 1.5], "yRange": [-5, 5],
  "xStep": 0.5, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x*x*x*x + x", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": -1, "y": -2, "style": "filled", "color": "#1f2430", "label": "(−1, −2)", "labelDx": -8, "labelDy": 14},
    {"x":  1, "y":  2, "style": "filled", "color": "#1f2430", "label": "(1, 2)",   "labelDx": 8,  "labelDy": -8}
  ]
}
```

```plot
{
  "title": "Figure 21b — g(x) = 1 − x⁴ (even)",
  "width": 460, "height": 300,
  "xRange": [-1.6, 1.6], "yRange": [-3, 1.5],
  "xStep": 0.5, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "1 - pow(x, 4)", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x":  0, "y": 1, "style": "filled", "color": "#1f2430", "label": "(0, 1)",  "labelDx": 8,  "labelDy": -8},
    {"x":  1, "y": 0, "style": "filled", "color": "#1f2430", "label": "(1, 0)",  "labelDx": 8,  "labelDy": 14},
    {"x": -1, "y": 0, "style": "filled", "color": "#1f2430", "label": "(−1, 0)", "labelDx": -8, "labelDy": 14}
  ]
}
```

```plot
{
  "title": "Figure 21c — h(x) = 2x − x² (neither)",
  "width": 460, "height": 320,
  "xRange": [-1.5, 3.5], "yRange": [-3, 2],
  "xStep": 0.5, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "2*x - x*x", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 0, "y": 0, "style": "filled", "color": "#1f2430", "label": "(0, 0)", "labelDx": -8, "labelDy": 14},
    {"x": 2, "y": 0, "style": "filled", "color": "#1f2430", "label": "(2, 0)", "labelDx": 8,  "labelDy": 14},
    {"x": 1, "y": 1, "style": "filled", "color": "#1f2430", "label": "vertex (1, 1)", "labelDx": 8, "labelDy": -8}
  ]
}
```

**Recipe for checking.** Compute $f(-x)$ and simplify, then compare to $f(x)$ (even) and $-f(x)$ (odd). If it matches neither, the function is neither. **Warning**: a polynomial with *both* even and odd power terms (e.g., $x^2 + x$) is generally neither — the even/odd classification is about the whole function, not individual terms.

---

## Increasing and Decreasing Functions

Monotonicity describes whether a function goes up or down on an interval.

> **Figure 22 — Mixed monotonicity.** A curve $y = f(x)$ rising from point $A$ at $x = a$ up to point $B$ at $x = b$, falling from $B$ down to $C$ at $x = c$, then rising again from $C$ up to $D$ at $x = d$. On $[a, b]$ the function increases; on $[b, c]$ it decreases; on $[c, d]$ it increases again. For any two points $x_1 < x_2$ between $a$ and $b$, the heights satisfy $f(x_1) < f(x_2)$.

```plot
{
  "title": "Figure 22 — increasing / decreasing / increasing",
  "width": 540, "height": 320,
  "xRange": [0, 7], "yRange": [-0.5, 3.5],
  "xStep": 1, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {
      "fn": "sin(x) + 0.3*x",
      "domain": [0.3, 6.7],
      "color": "#b04a2f", "width": 2.2
    }
  ],
  "points": [
    {"x": 0.3,   "y": 0.39, "style": "filled", "color": "#1f2430", "label": "A", "labelDx": -10, "labelDy": 4},
    {"x": 1.875, "y": 1.52, "style": "filled", "color": "#1f2430", "label": "B", "labelDx": 0,   "labelDy": -10, "labelAnchor": "middle"},
    {"x": 4.408, "y": 0.37, "style": "filled", "color": "#1f2430", "label": "C", "labelDx": 0,   "labelDy": 16,  "labelAnchor": "middle"},
    {"x": 6.7,   "y": 2.41, "style": "filled", "color": "#1f2430", "label": "D", "labelDx": 10,  "labelDy": 4}
  ],
  "lines": [
    {"type": "vertical", "x": 0.3,   "yRange": [0, 0.39], "color": "#888", "dash": "3 3"},
    {"type": "vertical", "x": 1.875, "yRange": [0, 1.52], "color": "#888", "dash": "3 3"},
    {"type": "vertical", "x": 4.408, "yRange": [0, 0.37], "color": "#888", "dash": "3 3"},
    {"type": "vertical", "x": 6.7,   "yRange": [0, 2.41], "color": "#888", "dash": "3 3"}
  ],
  "annotations": [
    {"x": 0.3,   "y": -0.18, "text": "a", "color": "#1f2430", "anchor": "middle"},
    {"x": 1.875, "y": -0.18, "text": "b", "color": "#1f2430", "anchor": "middle"},
    {"x": 4.408, "y": -0.18, "text": "c", "color": "#1f2430", "anchor": "middle"},
    {"x": 6.7,   "y": -0.18, "text": "d", "color": "#1f2430", "anchor": "middle"}
  ],
  "caption": "f(x) = sin x + 0.3x: increases on [a, b], decreases on [b, c], increases on [c, d]."
}
```

> **Definition.**
> A function $f$ is called **increasing** on an interval $I$ if
> $$f(x_1) < f(x_2) \quad \text{whenever } x_1 < x_2 \text{ in } I$$
> It is called **decreasing** on $I$ if
> $$f(x_1) > f(x_2) \quad \text{whenever } x_1 < x_2 \text{ in } I$$

**Read the quantifier carefully.** The inequality must hold for *every* pair of numbers $x_1, x_2$ in $I$ with $x_1 < x_2$ — not just for some pairs, and not just for adjacent points. A function that increases on $[0, 1]$ and then decreases on $[1, 2]$ is **not** increasing on $[0, 2]$; the interval of increase has to be one where it goes up throughout.

**Canonical example.**

> **Figure 23 — $y = x^2$ on both sides of the origin.** The parabola is **decreasing** on $(-\infty, 0]$ (falling to the vertex) and **increasing** on $[0, \infty)$ (rising from the vertex).

```plot
{
  "title": "Figure 23 — y = x²: decreasing on (−∞, 0], increasing on [0, ∞)",
  "width": 460, "height": 320,
  "xRange": [-3, 3], "yRange": [-1, 9],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 0, "y": 0, "style": "filled", "color": "#1f2430", "label": "vertex (0, 0)", "labelDx": 8, "labelDy": 14}
  ],
  "annotations": [
    {"x": -1.5, "y": 6, "text": "decreasing", "color": "#5b6477", "italic": false, "anchor": "middle"},
    {"x":  1.5, "y": 6, "text": "increasing", "color": "#5b6477", "italic": false, "anchor": "middle"}
  ]
}
```

**Why "strictly" matters.** Stewart's definition uses strict inequality: $f(x_1) < f(x_2)$, not $\leq$. So a function that's constant on a stretch is *neither* strictly increasing nor strictly decreasing there. Some textbooks distinguish "strictly increasing" from "nondecreasing" ($\leq$); Stewart bundles "increasing" to mean strict. Watch for this when you cross-reference other sources — especially in analysis textbooks, where the distinction is enforced more carefully.

**Why this matters for calculus coming up.** In Chapter 3, you'll prove that $f$ is increasing on an interval iff $f'(x) \geq 0$ there (with $> 0$ except possibly at isolated points giving strict increase). That link between the sign of the derivative and monotonicity is the engine behind every graph-sketching problem and every first-derivative test for optima. The definition on this page is what that theorem is actually about.

---

*This closes Section 1.1's exposition. The rest of Section 1.1 (PDF pp. 48 bottom – 51) is Exercises.*
