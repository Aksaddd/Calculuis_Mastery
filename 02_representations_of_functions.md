# Section 1.1 — Representations of Functions

*Continues from Unit 1 (function definition). Covers pp. 12–15 of the book (PDF pp. 40–43).*

---

## Visualizing a function

There are several ways to picture what a function does:

**As a machine.** If $x$ is in the domain of $f$, then when $x$ enters the machine it is accepted as input and the machine produces an output $f(x)$ according to the rule of the function. The domain is the set of all possible inputs; the range is the set of all possible outputs.

> **Figure 2 — Machine diagram.** A box labeled $f$ with an incoming arrow labeled $x$ (input) on the left and an outgoing arrow labeled $f(x)$ (output) on the right.

The preprogrammed functions on a calculator illustrate this. Press $\sqrt{\phantom{x}}$ (or $\sqrt{x}\,$), enter input $x$:
- If $x < 0$, the calculator returns an error — $x$ is not in the domain of this function.
- If $x \geq 0$, the display shows an *approximation* to $\sqrt{x}$.

So the calculator's $\sqrt{x}$ key is not quite the same as the exact mathematical function $f$ defined by $f(x) = \sqrt{x}$.

**As an arrow diagram.** Each arrow connects an element of $D$ to an element of $E$; the arrow from $x$ indicates that $f(x)$ is the value associated with $x$.

> **Figure 3 — Arrow diagram.** Two blob-shaped regions side by side: $D$ (left) and $E$ (right). Points $x$ and $a$ sit in $D$; arrows from them land on $f(x)$ and $f(a)$ in $E$. The arrows are labeled $f$.

**As a graph** (most common).

> **Definition.** If $f$ is a function with domain $D$, then its **graph** is the set of ordered pairs
> $$\{(x, f(x)) \mid x \in D\}$$

(These are input-output pairs. Equivalently: the graph of $f$ is all points $(x, y)$ in the coordinate plane such that $y = f(x)$ and $x$ is in the domain of $f$.)

The graph gives a "life history" picture. Since $y = f(x)$ at any point $(x, y)$ on the graph, the value of $f(x)$ can be read as the height of the graph above the point $x$. The graph also lets us read the domain off the $x$-axis and the range off the $y$-axis.

> **Figure 4.** A generic curve in the $xy$-plane with a point $(x, f(x))$ marked on it. Vertical drop-lines at $x = 1$, $x = 2$, and a generic $x$ show the heights $f(1)$, $f(2)$, $f(x)$.

> **Figure 5.** Same idea, but with the *range* labeled as a bracket on the $y$-axis (from the minimum $y$-value of the curve to the maximum) and the *domain* labeled as a bracket on the $x$-axis.

---

### Example 1 — Reading values from a graph

The graph of a function $f$ is shown in Figure 6.
- (a) Find the values of $f(1)$ and $f(5)$.
- (b) What are the domain and range of $f$?

> **Figure 6.** Curve defined on $0 \leq x \leq 7$. It passes through the point $(1, 3)$, reaches a local max near $x = 1$, dips below the $x$-axis with a minimum near $x = 5$ at $y \approx -0.7$, then rises again toward $y \approx 4$ at $x = 7$.

```plot
{
  "title": "Figure 6 — graph of f on [0, 7]",
  "width": 520, "height": 340,
  "xRange": [-0.5, 7.5], "yRange": [-3, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {
      "fn": "3 * exp(-pow(x - 1, 2)) - 2.3 * exp(-pow((x - 4)/0.9, 2)) + 4 * exp(-pow((x - 7)/0.7, 2))",
      "domain": [0, 7],
      "color": "#b04a2f", "width": 2.2
    }
  ],
  "points": [
    {"x": 1, "y": 3, "style": "filled", "color": "#1f2430", "label": "(1, 3)", "labelDx": 8, "labelDy": -8},
    {"x": 5, "y": -0.7, "style": "filled", "color": "#1f2430", "label": "(5, −0.7)", "labelDx": 8, "labelDy": 14}
  ],
  "lines": [
    {"type": "vertical", "x": 1, "yRange": [0, 3], "color": "#888", "dash": "3 3"},
    {"type": "vertical", "x": 5, "yRange": [-0.7, 0], "color": "#888", "dash": "3 3"}
  ],
  "caption": "Smooth curve hand-fit to match described control points (1, 3) and (5, −0.7); range ≈ [−2, 4]."
}
```

***Solution.***

(a) From Figure 6, the point $(1, 3)$ lies on the graph of $f$, so $f(1) = 3$. (The point above $x = 1$ is 3 units above the $x$-axis.) At $x = 5$, the graph lies about $0.7$ unit below the $x$-axis, so

$$f(5) \approx -0.7$$

(b) $f(x)$ is defined for $0 \leq x \leq 7$, so the domain is the closed interval $[0, 7]$. The values of $f$ range from $-2$ to $4$, so the range is

$$\{y \mid -2 \leq y \leq 4\} = [-2, 4]$$

*Margin note: The notation for intervals is given in Appendix A.*

---

### Example 2 — Sketching graphs and finding domain/range

Sketch the graph and find the domain and range of each function:

- (a) $f(x) = 2x - 1$
- (b) $g(x) = x^2$

***Solution.***

**(a)** The equation $y = 2x - 1$ is the equation of a line with slope $2$ and $y$-intercept $-1$. (Slope-intercept form: $y = mx + b$; see Appendix B.) The expression $2x - 1$ is defined for all real numbers, so the domain is $\mathbb{R}$. The graph also covers every real height, so the range is $\mathbb{R}$.

> **Figure 7.** A straight line of slope $2$ crossing the $y$-axis at $-1$, passing through $(1/2, 0)$ and $(1, 1)$.

```plot
{
  "title": "Figure 7 — y = 2x − 1",
  "width": 460, "height": 320,
  "xRange": [-3, 3], "yRange": [-5, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "2*x - 1", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 0, "y": -1, "style": "filled", "label": "(0, −1)", "labelDx": 8, "labelDy": 14},
    {"x": 0.5, "y": 0, "style": "filled", "label": "(½, 0)", "labelDx": 8, "labelDy": -8},
    {"x": 1, "y": 1, "style": "filled", "label": "(1, 1)", "labelDx": 8, "labelDy": -8}
  ]
}
```

**(b)** Since $g(2) = 2^2 = 4$ and $g(-1) = (-1)^2 = 1$, plotting $(2, 4)$ and $(-1, 1)$ together with a few more points and joining them gives a parabola. The equation $y = x^2$ represents a parabola (Appendix C). The domain of $g$ is $\mathbb{R}$. Since $x^2 \geq 0$ for all $x$ and every nonnegative number $y$ is a square, the range is

$$\{y \mid y \geq 0\} = [0, \infty)$$

> **Figure 8.** A parabola $y = x^2$ opening upward with vertex at the origin, passing through $(-1, 1)$ and $(2, 4)$.

```plot
{
  "title": "Figure 8 — y = x²",
  "width": 460, "height": 340,
  "xRange": [-3, 3], "yRange": [-1, 9],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 0, "y": 0, "style": "filled", "label": "(0, 0)", "labelDx": 8, "labelDy": 14},
    {"x": -1, "y": 1, "style": "filled", "label": "(−1, 1)", "labelDx": -8, "labelDy": -8},
    {"x": 2, "y": 4, "style": "filled", "label": "(2, 4)", "labelDx": 8, "labelDy": -8}
  ]
}
```

---

### Example 3 — The difference quotient

If $f(x) = 2x^2 - 5x + 1$ and $h \neq 0$, evaluate

$$\frac{f(a + h) - f(a)}{h}$$

***Solution.*** First evaluate $f(a + h)$ by replacing $x$ by $a + h$:

$$f(a + h) = 2(a + h)^2 - 5(a + h) + 1 = 2(a^2 + 2ah + h^2) - 5(a + h) + 1 = 2a^2 + 4ah + 2h^2 - 5a - 5h + 1$$

Substitute and simplify:

$$\frac{f(a + h) - f(a)}{h} = \frac{(2a^2 + 4ah + 2h^2 - 5a - 5h + 1) - (2a^2 - 5a + 1)}{h} = \frac{4ah + 2h^2 - 5h}{h} = 4a + 2h - 5$$

> **Margin note:** The expression $\dfrac{f(a+h) - f(a)}{h}$ is called the **difference quotient** and occurs frequently in calculus. As we'll see in Chapter 2, it represents the average rate of change of $f(x)$ between $x = a$ and $x = a + h$.

**Why this matters:** the difference quotient is the discrete precursor to the derivative. When we take $h \to 0$, this becomes $f'(a)$. Memorize this form.

---

## Representations of Functions

There are four possible ways to represent a function:

| Representation | By |
|---|---|
| **verbally** | a description in words |
| **numerically** | a table of values |
| **visually** | a graph |
| **algebraically** | an explicit formula |

If a single function can be represented in all four ways, it's often useful to go from one to another for additional insight. (Example 2 started algebraically and obtained graphs.) But certain functions are described more naturally by one method than by another. With this in mind, reexamine the four situations from the beginning of the section:

**A. Area of a circle.** Best represented by the algebraic formula $A(r) = \pi r^2$, though a table or a graph (half a parabola) is possible. Radius must be positive, so
$$\text{domain} = \{r \mid r > 0\} = (0, \infty), \qquad \text{range} = (0, \infty)$$

**B. World population.** Described in words: $P(t)$ is the human population of the world at time $t$. The table of values (see Unit 1) gives a convenient numerical representation. Plotting those values yields a **scatter plot** (Figure 9) — another useful representation. No exact formula is possible, but an approximation can be found:

$$P(t) \approx f(t) = (0.008079266) \cdot (1.013731)^t$$

This is the exponential model fit to the data. The function $f$ is called a **mathematical model** for population growth — a function with an explicit formula that approximates the behavior of the actual (unknown) function. The calculus of Chapter 2 onward can still be applied even when only a table is available; an explicit formula is not necessary.

> **Figure 9 — Scatter plot.** Axes: horizontal $t$ spanning 1900 to 2000 in 20-year ticks, vertical $P$ reaching $6 \times 10^9$. Eleven dots, one per decade from 1900 to 2000, tracing an upward-curving trend (slow early, accelerating through mid-century, steep by 2000).

```plot
{
  "title": "Figure 9 — World population scatter plot",
  "width": 520, "height": 340,
  "xRange": [1895, 2005], "yRange": [0, 7000],
  "xStep": 20, "yStep": 1000,
  "xLabel": "t (year)", "yLabel": "P (millions)",
  "curves": [
    {
      "data": [
        [1900, 1650], [1910, 1750], [1920, 1860], [1930, 2070],
        [1940, 2300], [1950, 2560], [1960, 3040], [1970, 3710],
        [1980, 4450], [1990, 5280], [2000, 6080]
      ],
      "mode": "scatter",
      "color": "#b04a2f",
      "r": 4
    }
  ]
}
```

> **Figure 10 — Fitted model.** Same axes as Figure 9. The same eleven data points, now overlaid with a smooth continuous curve — the exponential fit $f(t) = (0.008079266)(1.013731)^t$ — passing closely through them.

```plot
{
  "title": "Figure 10 — Population data with exponential fit",
  "width": 520, "height": 340,
  "xRange": [1895, 2005], "yRange": [0, 7000],
  "xStep": 20, "yStep": 1000,
  "xLabel": "t (year)", "yLabel": "P (millions)",
  "curves": [
    {
      "fn": "0.008079266 * pow(1.013731, x) / 1e6",
      "color": "#2867b2", "width": 2
    },
    {
      "data": [
        [1900, 1650], [1910, 1750], [1920, 1860], [1930, 2070],
        [1940, 2300], [1950, 2560], [1960, 3040], [1970, 3710],
        [1980, 4450], [1990, 5280], [2000, 6080]
      ],
      "mode": "scatter",
      "color": "#b04a2f",
      "r": 4
    }
  ],
  "annotations": [
    {"x": 1958, "y": 4500, "text": "f(t) = 0.008·(1.0137)^t", "color": "#2867b2", "size": 11}
  ]
}
```

**C. Cost of mailing a letter.** Described in words: $C(w)$ is the cost of mailing a first-class letter of weight $w$. The rule the US Postal Service used as of 2007: **39 cents for up to one ounce, plus 24 cents for each successive ounce up to 13 ounces.** The table of values is the most convenient representation:

| $w$ (ounces) | $C(w)$ (dollars) |
|:---:|:---:|
| $0 < w \leq 1$ | 0.39 |
| $1 < w \leq 2$ | 0.63 |
| $2 < w \leq 3$ | 0.87 |
| $3 < w \leq 4$ | 1.11 |
| $4 < w \leq 5$ | 1.35 |
| ⋮ | ⋮ |
| $12 < w \leq 13$ | 3.27 |

A graph is also possible — this function is examined again as a piecewise/step function in Example 10.

*Margin note: A function defined by a table of values is called a **tabular** function.*

**D. Northridge earthquake acceleration.** The graph (Figure 1 from Unit 1) is the most natural representation of $a(t)$. A table of values could be compiled, and it's even possible to devise an approximate formula — but everything a geologist needs to know (amplitudes and patterns) is visible at a glance from the graph. The same is true for the patterns seen in electrocardiograms of heart patients and in polygraphs for lie detection.

---

### Example 4 — Sketching a graph from a verbal description

When you turn on a hot-water faucet, the temperature $T$ of the water depends on how long the water has been running. Draw a rough graph of $T$ as a function of the time $t$ that has elapsed since the faucet was turned on.

***Solution.*** Three phases:

1. **Initial:** water has been sitting in the pipes, so $T$ is close to room temperature.
2. **Heating up:** hot water from the tank starts flowing, so $T$ increases quickly.
3. **Steady:** $T$ is constant at the temperature of the heated water in the tank.
4. **Cooling:** when the tank drains, $T$ decreases back toward the temperature of the water supply.

> **Figure 11.** $T$ vs. $t$ curve. Starts at a low-to-mid $T$ value, rises steeply to a high plateau, holds flat across the middle of the graph, then descends gently back toward the starting $T$.

```plot
{
  "title": "Figure 11 — Hot-water temperature vs. time (qualitative)",
  "width": 520, "height": 320,
  "xRange": [0, 12], "yRange": [0, 60],
  "xStep": 1, "yStep": 10,
  "xLabel": "t (min)", "yLabel": "T (°C)",
  "curves": [
    {
      "fn": "20 + 30 / (1 + exp(-3*(x - 2))) * (1 - 1 / (1 + exp(-2*(x - 10))))",
      "color": "#b04a2f", "width": 2.2
    }
  ],
  "caption": "Stylized: room-temp start, sharp rise as hot-tank water arrives, plateau, then decline as tank empties."
}
```

---

### Example 5 — From words to an algebraic formula (optimization setup)

A rectangular storage container with an open top has a volume of $10 \text{ m}^3$. The length of its base is twice its width. The base costs \$10/m²; the sides cost \$6/m². Express the cost of materials as a function of the width of the base.

***Solution.*** Let $w$ = width of base, $2w$ = length of base, $h$ = height.

> **Figure 12.** An open-top rectangular box (perspective drawing). Width labeled $w$, length labeled $2w$, height labeled $h$.

**Set up the cost.**

- Area of base: $(2w)(w) = 2w^2$. Cost of base: $10 \cdot 2w^2 = 20w^2$.
- Two sides have area $wh$; the other two have area $2wh$. Cost of sides: $6 \cdot [2(wh) + 2(2wh)] = 36wh$.
- Total cost:
$$C = 10(2w^2) + 6[2(wh) + 2(2wh)] = 20w^2 + 36wh$$

**Eliminate $h$** using the volume constraint $w(2w)h = 10$:

$$h = \frac{10}{2w^2} = \frac{5}{w^2}$$

**Substitute** into $C$:

$$C = 20w^2 + 36w \cdot \frac{5}{w^2} = 20w^2 + \frac{180}{w}$$

So the cost as a function of $w$ is

$$\boxed{\; C(w) = 20w^2 + \frac{180}{w}, \qquad w > 0 \;}$$

*Margin note: In setting up applied functions as in Example 5, it may be useful to review the principles of problem solving (see p. 76), particularly* Step 1: Understand the Problem.

**Why this matters:** This is the archetype of a calculus optimization setup. You'll minimize $C(w)$ in Chapter 4 by taking $C'(w) = 0$. The method — pick variables, write cost, use constraint to reduce to one variable — is the pattern for every applied optimization problem in the book.

