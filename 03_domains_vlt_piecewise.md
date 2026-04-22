# Section 1.1 — Domains, the Vertical Line Test, and Piecewise Functions

*Covers pp. 16–18 of the book (PDF pp. 44–46). Two related threads: first, the conventions for reading a function's domain and recognizing when a curve even represents a function; second, functions defined by different formulas on different pieces of their domain.*

---

## Finding the domain when it isn't stated

*Margin note (important convention):* If a function is given by a formula and the domain is not stated explicitly, the convention is that **the domain is the set of all numbers for which the formula makes sense and defines a real number**.

### Example 6 — Finding domains from formulas

Find the domain of each function.

**(a)** $f(x) = \sqrt{x + 2}$

The square root of a negative number is not defined (as a real number), so we need $x + 2 \geq 0$, i.e. $x \geq -2$. Domain:

$$[-2, \infty)$$

**(b)** $g(x) = \dfrac{1}{x^2 - x}$

Factor the denominator:
$$g(x) = \frac{1}{x^2 - x} = \frac{1}{x(x - 1)}$$

Division by zero is undefined, so $g$ fails at $x = 0$ and $x = 1$. Domain:

$$\{x \mid x \neq 0, \ x \neq 1\} = (-\infty, 0) \cup (0, 1) \cup (1, \infty)$$

**The two things to check for an algebraic formula:** denominators must be nonzero, and expressions under even-order radicals must be nonnegative. Later you'll add: arguments of logarithms must be positive; arguments of $\arcsin$/$\arccos$ must lie in $[-1, 1]$.

---

## The Vertical Line Test

The graph of a function is a curve in the $xy$-plane. But which curves actually *are* graphs of functions?

> **Definition (The Vertical Line Test).** A curve in the $xy$-plane is the graph of a function of $x$ **if and only if** no vertical line intersects the curve more than once.

> **Figure 13 — Why the test works.** Two side-by-side graphs, each with a curve and a vertical line $x = a$.
> - **Left:** the line intersects the curve at exactly one point $(a, b)$. This defines $f(a) = b$. Valid function.
> - **Right:** the line intersects the curve at two points $(a, b)$ and $(a, c)$. No function can assign two different values to the same input. Not a function.

### Worked illustration — a sideways parabola

Consider $x = y^2 - 2$.

> **Figure 14 — Sideways parabola and its two halves.**
> - **(a)** $x = y^2 - 2$: a parabola opening to the right, vertex at $(-2, 0)$. Vertical lines for $x > -2$ cross it twice — not a function of $x$.
> - **(b)** $y = \sqrt{x + 2}$: the **upper** half only (vertex at $(-2, 0)$, curving up and to the right).
> - **(c)** $y = -\sqrt{x + 2}$: the **lower** half only.

```plot
{
  "title": "Figure 14a — x = y² − 2 (full parabola, fails VLT)",
  "width": 460, "height": 320,
  "xRange": [-3, 6], "yRange": [-3, 3],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sqrt(x + 2)",  "domain": [-2, 6], "color": "#b04a2f", "width": 2.2},
    {"fn": "-sqrt(x + 2)", "domain": [-2, 6], "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "vertical", "x": 2, "color": "#888", "dash": "4 4"}
  ],
  "points": [
    {"x": 2, "y":  2, "style": "filled", "color": "#1f2430", "label": "(2, 2)",  "labelDx": 8, "labelDy": -8},
    {"x": 2, "y": -2, "style": "filled", "color": "#1f2430", "label": "(2, −2)", "labelDx": 8, "labelDy": 14},
    {"x": -2, "y": 0, "style": "filled", "color": "#1f2430", "label": "vertex",  "labelDx": -8, "labelDy": -8}
  ],
  "caption": "Dashed vertical line x = 2 hits the curve twice — not a function of x."
}
```

```plot
{
  "title": "Figure 14b — y = √(x + 2)  (upper half, valid function)",
  "width": 460, "height": 280,
  "xRange": [-3, 6], "yRange": [-1, 3],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sqrt(x + 2)", "domain": [-2, 6], "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": -2, "y": 0, "style": "filled", "color": "#1f2430"}
  ]
}
```

```plot
{
  "title": "Figure 14c — y = −√(x + 2)  (lower half, valid function)",
  "width": 460, "height": 280,
  "xRange": [-3, 6], "yRange": [-3, 1],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "-sqrt(x + 2)", "domain": [-2, 6], "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": -2, "y": 0, "style": "filled", "color": "#1f2430"}
  ]
}
```

From $x = y^2 - 2$, solving for $y$: $y^2 = x + 2$, so $y = \pm\sqrt{x + 2}$. The upper and lower halves are graphs of the functions

$$f(x) = \sqrt{x + 2} \qquad \text{and} \qquad g(x) = -\sqrt{x + 2}$$

Alternatively, reverse the roles: treat $y$ as the independent variable and $x$ as the dependent variable. Then $x = h(y) = y^2 - 2$ *does* define $x$ as a function of $y$, and the parabola is the graph of $h$. **The Vertical Line Test is about which variable you're treating as input.**

---

## Piecewise Defined Functions

The functions in the next four examples are defined by **different formulas in different parts of their domains**.

### Example 7 — Evaluating a piecewise function

A function $f$ is defined by

$$f(x) = \begin{cases} 1 - x & \text{if } x \leq 1 \\ x^2 & \text{if } x > 1 \end{cases}$$

Evaluate $f(0)$, $f(1)$, $f(2)$, and sketch the graph.

***Solution.*** Look at the input first; the input determines which rule applies.

- Since $0 \leq 1$: $f(0) = 1 - 0 = 1$.
- Since $1 \leq 1$: $f(1) = 1 - 1 = 0$.
- Since $2 > 1$: $f(2) = 2^2 = 4$.

**Graph.** For $x \leq 1$, use $y = 1 - x$ — the line with slope $-1$, $y$-intercept $1$. For $x > 1$, use $y = x^2$ — the parabola.

> **Figure 15.** Left piece: a line segment descending from upper-left through $(0, 1)$ down to the filled point $(1, 0)$. Right piece: the right branch of the parabola starting from the **open** point $(1, 1)$ (excluded) and rising. The solid dot at $(1, 0)$ means $f(1) = 0$ **is** in the graph; the open dot at $(1, 1)$ means that point is **not** in the graph.

```plot
{
  "title": "Figure 15 — piecewise f(x) = (1 − x  if x ≤ 1, x²  if x > 1)",
  "width": 480, "height": 340,
  "xRange": [-2, 3], "yRange": [-1, 6],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {
      "piecewise": [
        {"fn": "1 - x", "domain": [-2, 1], "endpoints": ["closed", "closed"]},
        {"fn": "x*x",   "domain": [1,  3], "endpoints": ["open",   "closed"]}
      ],
      "color": "#b04a2f",
      "width": 2.2
    }
  ]
}
```

**Notation watch:** solid dot = point included, open dot = point excluded. This is how you visually encode strict vs. non-strict inequality on a piecewise boundary.

---

### The absolute value function

The absolute value of $a$, written $|a|$, is the distance from $a$ to $0$ on the real line. Distances are nonnegative, so

$$|a| \geq 0 \quad \text{for every real } a$$

Quick values:

$$|3| = 3, \quad |-3| = 3, \quad |0| = 0, \quad |\sqrt{2} - 1| = \sqrt{2} - 1, \quad |3 - \pi| = \pi - 3$$

(The last one uses $\pi > 3$, so $3 - \pi < 0$ and we flip the sign.)

> **Definition (piecewise form of absolute value).**
> $$|a| = \begin{cases} a & \text{if } a \geq 0 \\ -a & \text{if } a < 0 \end{cases}$$

(Remember: if $a$ is negative, then $-a$ is positive.)

*Margin note: For a more extensive review of absolute values, see Appendix A.*

### Example 8 — Graphing $f(x) = |x|$

Sketch the graph of $f(x) = |x|$.

***Solution.*** Using the piecewise form:

$$|x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$$

So $f$ coincides with $y = x$ to the right of the $y$-axis and with $y = -x$ to the left.

> **Figure 16.** The characteristic V-shape: two half-lines meeting at the origin, left arm going up-left along $y = -x$, right arm going up-right along $y = x$.

```plot
{
  "title": "Figure 16 — y = |x|",
  "width": 460, "height": 300,
  "xRange": [-4, 4], "yRange": [-1, 4],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "abs(x)", "color": "#b04a2f", "width": 2.2}
  ]
}
```

---

### Example 9 — Reading a piecewise formula off a graph

Find a formula for the function $f$ graphed in Figure 17.

> **Figure 17.** On a grid, the graph rises from the origin along $y = x$ to the point $(1, 1)$, then descends to $(2, 0)$ (forming a triangular "bump"), and for $x > 2$ lies flat on the $x$-axis.

```plot
{
  "title": "Figure 17 — piecewise from a graph (Example 9)",
  "width": 480, "height": 300,
  "xRange": [-1, 5], "yRange": [-1, 2],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {
      "piecewise": [
        {"fn": "x",     "domain": [0, 1], "endpoints": ["closed", "closed"]},
        {"fn": "2 - x", "domain": [1, 2], "endpoints": ["closed", "closed"]},
        {"fn": "0",     "domain": [2, 5], "endpoints": ["closed", "closed"]}
      ],
      "color": "#b04a2f",
      "width": 2.2
    }
  ]
}
```

***Solution.*** Three pieces.

**Piece 1 — from $(0,0)$ to $(1,1)$.** Slope = 1, $y$-intercept = 0. So $y = x$, on $0 \leq x \leq 1$.

**Piece 2 — from $(1,1)$ to $(2,0)$.** Slope = $\frac{0 - 1}{2 - 1} = -1$. Using point-slope form $y - y_1 = m(x - x_1)$ with $(x_1, y_1) = (2, 0)$:

$$y - 0 = (-1)(x - 2) \quad \Longrightarrow \quad y = 2 - x$$

on $1 < x \leq 2$.

**Piece 3 — $x > 2$.** The graph coincides with the $x$-axis: $f(x) = 0$.

Assembling:

$$f(x) = \begin{cases} x & \text{if } 0 \leq x \leq 1 \\ 2 - x & \text{if } 1 < x \leq 2 \\ 0 & \text{if } x > 2 \end{cases}$$

*Margin note: Point-slope form of a line: $y - y_1 = m(x - x_1)$. See Appendix B.*

---

### Example 10 — The postage function as a step function

In Example C (Unit 1) we had the cost $C(w)$ of mailing a first-class letter of weight $w$. It's actually a piecewise-defined function, read straight off the table:

$$C(w) = \begin{cases} 0.39 & \text{if } 0 < w \leq 1 \\ 0.63 & \text{if } 1 < w \leq 2 \\ 0.87 & \text{if } 2 < w \leq 3 \\ 1.11 & \text{if } 3 < w \leq 4 \\ \vdots \end{cases}$$

> **Figure 18.** A staircase graph in the $wC$-plane. Horizontal segments at heights $0.39, 0.63, 0.87, 1.11, 1.35, \ldots$ over successive unit intervals $(0,1], (1,2], (2,3], \ldots$ Each segment is closed on the right end (filled dot) and open on the left (open dot), encoding the $w \leq n$ boundaries of the definition.

```plot
{
  "title": "Figure 18 — Postage step function C(w)",
  "width": 520, "height": 320,
  "xRange": [0, 8], "yRange": [0, 2.4],
  "xStep": 1, "yStep": 0.25,
  "xLabel": "w (oz)", "yLabel": "C(w) ($)",
  "curves": [
    {
      "step": [
        {"y": 0.39, "x": [0, 1], "endpoints": ["open", "closed"]},
        {"y": 0.63, "x": [1, 2], "endpoints": ["open", "closed"]},
        {"y": 0.87, "x": [2, 3], "endpoints": ["open", "closed"]},
        {"y": 1.11, "x": [3, 4], "endpoints": ["open", "closed"]},
        {"y": 1.35, "x": [4, 5], "endpoints": ["open", "closed"]},
        {"y": 1.59, "x": [5, 6], "endpoints": ["open", "closed"]},
        {"y": 1.83, "x": [6, 7], "endpoints": ["open", "closed"]},
        {"y": 2.07, "x": [7, 8], "endpoints": ["open", "closed"]}
      ],
      "color": "#b04a2f",
      "width": 2.2
    }
  ],
  "caption": "Closed dot = endpoint included (w ≤ n); open dot = endpoint excluded (w > n−1)."
}
```

Functions shaped like this — jumping from one constant value to the next — are called **step functions**. Stewart revisits them formally in Chapter 2.

**Why step functions matter for quant prep specifically:** step functions are the canonical example of a discontinuous function, and they're the foundation for the indicator function $\mathbf{1}_{\{x \in A\}}$ that appears everywhere in probability and measure theory. The postage example is a low-stakes introduction to a concept you'll see over and over.
