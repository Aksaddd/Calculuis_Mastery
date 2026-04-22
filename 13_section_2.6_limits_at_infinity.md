# Section 2.6 — Limits at Infinity; Horizontal Asymptotes (Part A): Definitions, Horizontal Asymptotes, and Computational Techniques

*Covers pp. 130–137 top of the book (PDF pp. 158–165). The dual problem to infinite limits: instead of $x$ approaching a point where $f$ blows up, we let $x$ itself grow without bound and ask what finite value (if any) $f$ approaches. This gives us horizontal asymptotes and the asymptotic-growth hierarchy made precise.*

---

## Section 2.6 — Limits at Infinity; Horizontal Asymptotes

In Sections 2.2 and 2.4 we investigated **infinite limits and vertical asymptotes** — we let $x$ approach a number, and the result was that the values of $y$ became arbitrarily large (positive or negative). **In this section we let $x$ become arbitrarily large** (positive or negative) and see what happens to $y$.

---

## Motivating Example

Consider the behavior of

$$f(x) = \frac{x^2 - 1}{x^2 + 1}$$

as $x$ becomes large. Table of values (to six decimal places):

| $x$ | $f(x)$ |
|:---:|:---:|
| 0 | $-1$ |
| $\pm 1$ | 0 |
| $\pm 2$ | 0.600000 |
| $\pm 3$ | 0.800000 |
| $\pm 4$ | 0.882353 |
| $\pm 5$ | 0.923077 |
| $\pm 10$ | 0.980198 |
| $\pm 50$ | 0.999200 |
| $\pm 100$ | 0.999800 |
| $\pm 1000$ | 0.999998 |

> **Figure 1 — Graph of $y = (x^2 - 1)/(x^2 + 1)$.** The curve has a global minimum at $(0, -1)$, rises symmetrically, and flattens out — approaching the horizontal line $y = 1$ from below as $|x|$ grows. **Conceptually: the curve "levels off" toward $y = 1$ for large $|x|$.**

```plot
{
  "title": "Figure 1 — y = (x² − 1)/(x² + 1) approaches y = 1 at both ends",
  "width": 540, "height": 320,
  "xRange": [-8, 8], "yRange": [-1.3, 1.5],
  "xStep": 2, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "(x*x - 1)/(x*x + 1)", "domain": [-8, 8], "color": "#b04a2f", "width": 2.2, "samples": 500}
  ],
  "lines": [
    {"type": "horizontal", "y": 1, "color": "#2867b2", "width": 1.4, "dash": "4 3"}
  ],
  "points": [
    {"x": 0, "y": -1, "style": "filled", "color": "#1f2430", "label": "(0, −1)", "labelDx": 10, "labelDy": 14}
  ],
  "annotations": [
    {"x": 7.5, "y": 1.2, "text": "y = 1", "color": "#2867b2", "italic": false, "anchor": "end"}
  ],
  "caption": "Both ends of the curve press against y = 1 — the single horizontal asymptote for x → ±∞."
}
```

**As $x$ grows larger and larger**, the values of $f(x)$ get closer and closer to 1. In fact, **we can make $f(x)$ as close to 1 as we like by taking $x$ sufficiently large.** Symbolic notation:

$$\lim_{x \to \infty}\frac{x^2 - 1}{x^2 + 1} = 1$$

---

## Definition 1 — Limit at Infinity (Positive Direction)

> **Definition 1 (intuitive).** Let $f$ be a function defined on some interval $(a, \infty)$. Then
> $$\lim_{x \to \infty}f(x) = L$$
> means that the values of $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently large.

**The symbol $\infty$ does not represent a number.** The expression is read:
- "The limit of $f(x)$, as $x$ approaches infinity, is $L$"
- "The limit of $f(x)$, as $x$ becomes infinite, is $L$"
- "The limit of $f(x)$, as $x$ increases without bound, is $L$"

**Alternative notation:** $f(x) \to L$ as $x \to \infty$.

### Horizontal asymptote — many approach shapes

> **Figure 2 — Three ways the graph of $f$ can approach the horizontal line $y = L$ as $x \to \infty$.**
> - **Left panel:** monotonic approach from below (or above).
> - **Middle panel:** monotonic decreasing approach from above.
> - **Right panel:** oscillatory approach — the curve can cross the line $y = L$ infinitely many times on its way to level off.
>
> **All three qualify as $\lim_{x \to \infty}f(x) = L$.** The definition doesn't care about the *shape* of the approach; only that $f(x)$ can be made arbitrarily close to $L$.

<figure class="plot-figure">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 220" role="img" aria-label="Three shapes of approach to a horizontal asymptote">
  <style>
    .ax { stroke: #1f2430; stroke-width: 1.2; }
    .as { stroke: #2867b2; stroke-width: 1.4; stroke-dasharray: 4 3; }
    .cv { stroke: #b04a2f; stroke-width: 2.2; fill: none; }
    .lb { font: italic 12px 'Times New Roman', Times, serif; fill: #1f2430; }
    .cap { font: italic 11px Helvetica, Arial, sans-serif; fill: #5b6477; }
  </style>
  <g transform="translate(20 20)">
    <text class="cap" x="110" y="-4" text-anchor="middle">from below</text>
    <line class="ax" x1="10" y1="170" x2="220" y2="170"/>
    <line class="ax" x1="10" y1="10"  x2="10"  y2="170"/>
    <line class="as" x1="10" y1="55"  x2="220" y2="55"/>
    <path class="cv" d="M 15 150 Q 70 100, 140 70 T 218 58"/>
    <text class="lb" x="225" y="58">y = L</text>
  </g>
  <g transform="translate(260 20)">
    <text class="cap" x="110" y="-4" text-anchor="middle">from above</text>
    <line class="ax" x1="10" y1="170" x2="220" y2="170"/>
    <line class="ax" x1="10" y1="10"  x2="10"  y2="170"/>
    <line class="as" x1="10" y1="115" x2="220" y2="115"/>
    <path class="cv" d="M 15 30 Q 70 80, 140 102 T 218 112"/>
    <text class="lb" x="225" y="118">y = L</text>
  </g>
  <g transform="translate(500 20)">
    <text class="cap" x="110" y="-4" text-anchor="middle">oscillatory</text>
    <line class="ax" x1="10" y1="170" x2="220" y2="170"/>
    <line class="ax" x1="10" y1="10"  x2="10"  y2="170"/>
    <line class="as" x1="10" y1="90"  x2="220" y2="90"/>
    <path class="cv" d="M 15 140 C 40 40, 70 140, 95 70 S 150 115, 180 80 S 215 100, 220 90"/>
    <text class="lb" x="225" y="93">y = L</text>
  </g>
</svg>
<figcaption>The shape of the approach doesn't matter. Monotone from below, monotone from above, oscillatory — all three give lim<sub>x→∞</sub> f(x) = L.</figcaption>
</figure>

---

## Definition 2 — Limit at Infinity (Negative Direction)

For behavior as $x$ becomes large negative:

> **Definition 2 (intuitive).** Let $f$ be a function defined on some interval $(-\infty, a)$. Then
> $$\lim_{x \to -\infty}f(x) = L$$
> means that the values of $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently large negative.

Reads as "the limit of $f(x)$, as $x$ approaches negative infinity, is $L$."

> **Figure 3 — Two ways the graph can approach $y = L$ as $x \to -\infty$.** Mirror-image of Figure 2; the approach happens on the left side of the graph.

<figure class="plot-figure">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 220" role="img" aria-label="Two shapes of approach to a horizontal asymptote as x → −∞">
  <style>
    .ax { stroke: #1f2430; stroke-width: 1.2; }
    .as { stroke: #2867b2; stroke-width: 1.4; stroke-dasharray: 4 3; }
    .cv { stroke: #b04a2f; stroke-width: 2.2; fill: none; }
    .lb { font: italic 12px 'Times New Roman', Times, serif; fill: #1f2430; }
    .cap { font: italic 11px Helvetica, Arial, sans-serif; fill: #5b6477; }
  </style>
  <g transform="translate(20 20)">
    <text class="cap" x="110" y="-4" text-anchor="middle">from below, as x → −∞</text>
    <line class="ax" x1="10" y1="170" x2="220" y2="170"/>
    <line class="ax" x1="215" y1="10" x2="215" y2="170"/>
    <line class="as" x1="10" y1="55" x2="220" y2="55"/>
    <path class="cv" d="M 10 60 Q 70 65, 120 85 T 210 150"/>
    <text class="lb" x="5" y="58" text-anchor="end">L</text>
  </g>
  <g transform="translate(260 20)">
    <text class="cap" x="110" y="-4" text-anchor="middle">from above, as x → −∞</text>
    <line class="ax" x1="10" y1="170" x2="220" y2="170"/>
    <line class="ax" x1="215" y1="10" x2="215" y2="170"/>
    <line class="as" x1="10" y1="115" x2="220" y2="115"/>
    <path class="cv" d="M 10 110 Q 70 105, 120 90 T 210 30"/>
    <text class="lb" x="5" y="118" text-anchor="end">L</text>
  </g>
</svg>
<figcaption>For x → −∞ the approach happens on the far left. Monotone from below, from above, or oscillatory — all give lim<sub>x→−∞</sub> f(x) = L.</figcaption>
</figure>

---

## Definition 3 — Horizontal Asymptote

> **Definition 3.** The line $y = L$ is called a **horizontal asymptote** of the curve $y = f(x)$ if either
> $$\lim_{x \to \infty}f(x) = L \qquad \text{or} \qquad \lim_{x \to -\infty}f(x) = L$$

**Key language:** "either" — you only need the curve to level off at $L$ in *one* direction (toward $+\infty$ or toward $-\infty$) to call $y = L$ a horizontal asymptote. The two directions can give different limits, giving **two horizontal asymptotes**.

### Example — $y = \arctan x$ has two horizontal asymptotes

The curve $y = \tan^{-1} x$ has two horizontal asymptotes, because

$$\tag{4} \lim_{x \to -\infty}\tan^{-1} x = -\frac{\pi}{2} \qquad \lim_{x \to \infty}\tan^{-1} x = \frac{\pi}{2}$$

This follows from the fact that $x = \pm\pi/2$ are vertical asymptotes of the graph of $\tan$ (Section 2.2 Example 10), and the inverse function swaps vertical ↔ horizontal asymptotes under the reflection $y = x$.

> **Figure 4 — Graph of $y = \arctan x$.** Bounded monotonically increasing S-shape, flattening toward $y = \pi/2$ as $x \to +\infty$ and toward $y = -\pi/2$ as $x \to -\infty$. Two horizontal asymptotes visible.

```plot
{
  "title": "Figure 4 — y = arctan x has two horizontal asymptotes, y = ±π/2",
  "width": 520, "height": 320,
  "xRange": [-12, 12], "yRange": [-2.2, 2.2],
  "xStep": 3, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "atan(x)", "domain": [-12, 12], "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "horizontal", "y":  1.5707963, "color": "#2867b2", "width": 1.4, "dash": "4 3"},
    {"type": "horizontal", "y": -1.5707963, "color": "#2867b2", "width": 1.4, "dash": "4 3"}
  ],
  "annotations": [
    {"x": 11, "y":  1.78,  "text": "y = π/2",  "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 11, "y": -1.78,  "text": "y = −π/2", "color": "#2867b2", "italic": false, "anchor": "end"}
  ],
  "caption": "The inverse of the bijection tan: (−π/2, π/2) → ℝ. Bounded, monotone, never reaches the asymptotes."
}
```

**Horizontal asymptotes summary.** $\arctan$ is bounded: its range is $(-\pi/2, \pi/2)$. Approaches both bounds but never reaches them. **In quant finance, $\arctan$ shows up as a "squashing function" that maps the real line to a bounded range** — useful in logistic-like transformations, sigmoid alternatives, and bounded-parameter models.

---

### Example 1 — Read all the limits from a graph

Find the infinite limits, limits at infinity, and asymptotes for the function $f$ whose graph is shown.

> **Figure 5 — Graph of $f$.** A curve over multiple intervals with visible features:
> - Vertical asymptotes at $x = -1$ and $x = 2$ (graph goes to $\pm\infty$ there).
> - Horizontal leveling: approaches $y = 2$ as $x \to -\infty$ and $y = 4$ as $x \to \infty$.

```plot
{
  "title": "Figure 5 — four asymptotes (two vertical, two horizontal)",
  "width": 560, "height": 360,
  "xRange": [-6, 6], "yRange": [-8, 10],
  "xStep": 1, "yStep": 2,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "2 + 1.2/(x + 1)",   "domain": [-6, -1.2], "color": "#b04a2f", "width": 2.2, "samples": 500},
    {"fn": "3 + 0.5*(x - 0.5)/((x + 1)*(x - 2))",   "domain": [-0.8, 1.85], "color": "#b04a2f", "width": 2.2, "samples": 500},
    {"fn": "4 - 1/(x - 2)",     "domain": [2.15, 6], "color": "#b04a2f", "width": 2.2, "samples": 500}
  ],
  "lines": [
    {"type": "vertical",   "x": -1, "color": "#2867b2", "dash": "4 4"},
    {"type": "vertical",   "x":  2, "color": "#2867b2", "dash": "4 4"},
    {"type": "horizontal", "y":  2, "color": "#2867b2", "dash": "4 4"},
    {"type": "horizontal", "y":  4, "color": "#2867b2", "dash": "4 4"}
  ],
  "annotations": [
    {"x": -5.5, "y": 2.5, "text": "y = 2",  "color": "#2867b2", "italic": false},
    {"x":  5.5, "y": 4.5, "text": "y = 4",  "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": -1,   "y": -7,  "text": "x = −1", "color": "#2867b2", "italic": false, "anchor": "middle"},
    {"x":  2,   "y": -7,  "text": "x = 2",  "color": "#2867b2", "italic": false, "anchor": "middle"}
  ],
  "caption": "Vertical asymptotes x = −1, x = 2. Horizontal asymptotes y = 2 (as x → −∞) and y = 4 (as x → ∞)."
}
```

***Solution.***

**Infinite limits (at finite $x$):**

$\displaystyle \lim_{x \to -1}f(x) = \infty$ (large from both sides at $x = -1$).

$\displaystyle \lim_{x \to 2^-}f(x) = -\infty$, $\displaystyle \lim_{x \to 2^+}f(x) = \infty$ (opposite infinities at $x = 2$).

Both lines $x = -1$ and $x = 2$ are **vertical asymptotes**.

**Limits at infinity:**

$\displaystyle \lim_{x \to \infty}f(x) = 4$ and $\displaystyle \lim_{x \to -\infty}f(x) = 2$.

Both lines $y = 4$ and $y = 2$ are **horizontal asymptotes** — one in each direction.

---

### Example 2 — The canonical limit $1/x \to 0$

Find $\displaystyle \lim_{x \to \infty}\frac{1}{x}$ and $\displaystyle \lim_{x \to -\infty}\frac{1}{x}$.

***Solution.*** Observe that when $x$ is large, $1/x$ is small. For instance:

$$\frac{1}{100} = 0.01 \quad \frac{1}{10{,}000} = 0.0001 \quad \frac{1}{1{,}000{,}000} = 0.000001$$

By taking $x$ large enough, we can make $1/x$ as close to 0 as we please. Therefore:

$$\lim_{x \to \infty}\frac{1}{x} = 0$$

Similar reasoning for large negative $x$:

$$\lim_{x \to -\infty}\frac{1}{x} = 0$$

> **Figure 6 — Graph of $y = 1/x$ (the equilateral hyperbola).** Two branches, each approaching the $x$-axis as asymptote for large $|x|$, and the $y$-axis as asymptote as $x \to 0$. Classic picture.

```plot
{
  "title": "Figure 6 — y = 1/x: both axes are asymptotes",
  "width": 520, "height": 340,
  "xRange": [-5, 5], "yRange": [-5, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "1/x", "domain": [-5, -0.21], "color": "#b04a2f", "width": 2.2, "samples": 600},
    {"fn": "1/x", "domain": [0.21, 5],   "color": "#b04a2f", "width": 2.2, "samples": 600}
  ],
  "caption": "Vertical asymptote x = 0 (y → ±∞). Horizontal asymptote y = 0 (y → 0 as |x| → ∞)."
}
```

**The line $y = 0$ (the $x$-axis) is a horizontal asymptote** of $y = 1/x$. (Also, $x = 0$ is a vertical asymptote.)

---

## Theorem 5 — The Power-Reciprocal Rule

Most of the Limit Laws from Section 2.3 also hold for limits at infinity. Specifically:

> **Theorem 5.** If $r > 0$ is a rational number, then
> $$\lim_{x \to \infty}\frac{1}{x^r} = 0$$
> If $r > 0$ is a rational number such that $x^r$ is defined for all $x$, then
> $$\lim_{x \to -\infty}\frac{1}{x^r} = 0$$

**In words:** any positive-power reciprocal $1/x^r$ goes to 0 as $|x| \to \infty$.

**Why the two cases.** For $\lim_{x \to \infty}$, we need $x^r$ defined for large positive $x$ — true for any rational $r > 0$. For $\lim_{x \to -\infty}$, we need $x^r$ defined for large negative $x$ — true for integer $r > 0$ or for $r = p/q$ with $q$ odd, but fails for $r = 1/2$ since $\sqrt{x}$ isn't defined for $x < 0$.

**For your quant track:** Theorem 5 is the formal statement that "higher powers dominate lower powers at infinity" — which is why we divide by the highest power in every rational-function limit-at-infinity calculation.

---

## The Universal Technique for Rational-Function Limits at Infinity

**To evaluate the limit at infinity of any rational function, divide both numerator and denominator by the highest power of $x$ that occurs in the denominator.**

This technique converts each term of the form $x^k$ into either a constant (if the highest-power-in-denominator matches) or $1/x^m$ (if it's a lower power), whose limit is 0 by Theorem 5.

---

### Example 3 — Rational function limit at $+\infty$

Evaluate $\displaystyle \lim_{x \to \infty}\frac{3x^2 - x - 2}{5x^2 + 4x + 1}$.

***Solution.*** Both numerator and denominator grow large; it isn't obvious what their ratio does. Divide both by $x^2$ (the highest power of $x$ in the denominator):

$$\lim_{x \to \infty}\frac{3x^2 - x - 2}{5x^2 + 4x + 1} = \lim_{x \to \infty}\frac{\dfrac{3x^2 - x - 2}{x^2}}{\dfrac{5x^2 + 4x + 1}{x^2}} = \lim_{x \to \infty}\frac{3 - \dfrac{1}{x} - \dfrac{2}{x^2}}{5 + \dfrac{4}{x} + \dfrac{1}{x^2}}$$

Now apply Limit Laws (which also work for limits at infinity):

$$= \frac{\displaystyle \lim_{x \to \infty}\!\left(3 - \tfrac{1}{x} - \tfrac{2}{x^2}\right)}{\displaystyle \lim_{x \to \infty}\!\left(5 + \tfrac{4}{x} + \tfrac{1}{x^2}\right)} \qquad \text{(Law 5)}$$

$$= \frac{\displaystyle \lim_{x \to \infty}3 - \lim_{x \to \infty}\tfrac{1}{x} - 2\lim_{x \to \infty}\tfrac{1}{x^2}}{\displaystyle \lim_{x \to \infty}5 + 4\lim_{x \to \infty}\tfrac{1}{x} + \lim_{x \to \infty}\tfrac{1}{x^2}} \qquad \text{(Laws 1, 2, 3)}$$

$$= \frac{3 - 0 - 0}{5 + 0 + 0} \qquad \text{(Law 7 and Theorem 5)}$$

$$= \frac{3}{5}$$

**A similar calculation for $x \to -\infty$ also gives $3/5$.** So the horizontal asymptote is $y = 3/5$.

> **Figure 7 — Graph of $y = (3x^2 - x - 2)/(5x^2 + 4x + 1)$.** The curve levels off to the horizontal line $y = 0.6$ in both directions. A little dip near the origin, but for $|x| > 2$ or so, the curve is already very close to $0.6$.

```plot
{
  "title": "Figure 7 — (3x² − x − 2)/(5x² + 4x + 1) → 3/5",
  "width": 520, "height": 320,
  "xRange": [-8, 8], "yRange": [-2, 2],
  "xStep": 2, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "(3*x*x - x - 2)/(5*x*x + 4*x + 1)", "domain": [-8, 8], "color": "#b04a2f", "width": 2.2, "samples": 600}
  ],
  "lines": [
    {"type": "horizontal", "y": 0.6, "color": "#2867b2", "dash": "4 3"}
  ],
  "annotations": [
    {"x": 7.5, "y": 0.82, "text": "y = 3/5", "color": "#2867b2", "italic": false, "anchor": "end"}
  ],
  "caption": "Equal degrees in numerator and denominator → limit at ∞ equals the ratio of leading coefficients."
}
```

**The shortcut (once you've seen the pattern).** For $P(x)/Q(x)$ rational with $\deg P = p$ and $\deg Q = q$:

| Degree relationship | Limit at $\pm\infty$ |
|:---:|:---:|
| $p < q$ | 0 |
| $p = q$ | $\frac{\text{leading coeff } P}{\text{leading coeff } Q}$ |
| $p > q$ | $\pm\infty$ (sign from leading coefficient & direction) |

This "leading term dominates" rule is among the most useful results in all of asymptotic analysis.

---

### Example 4 — Horizontal AND vertical asymptotes; sign tracking

Find the horizontal and vertical asymptotes of

$$f(x) = \frac{\sqrt{2x^2 + 1}}{3x - 5}$$

***Solution.***

**Horizontal asymptote at $+\infty$:** Divide numerator and denominator by $x$. For $x > 0$, $\sqrt{x^2} = x$, so:

$$\lim_{x \to \infty}\frac{\sqrt{2x^2 + 1}}{3x - 5} = \lim_{x \to \infty}\frac{\sqrt{2 + 1/x^2}}{3 - 5/x} \qquad \text{(since }\sqrt{x^2} = x\text{ for }x > 0\text{)}$$

$$= \frac{\sqrt{2 + 0}}{3 - 0} = \frac{\sqrt{2}}{3}$$

So $y = \sqrt{2}/3$ is a horizontal asymptote as $x \to \infty$.

**Horizontal asymptote at $-\infty$:** Here $x < 0$, so $\sqrt{x^2} = |x| = -x$. When dividing by $x$, we get:

$$\frac{1}{x}\sqrt{2x^2 + 1} = -\frac{1}{\sqrt{x^2}}\sqrt{2x^2 + 1} = -\sqrt{2 + \frac{1}{x^2}}$$

$$\lim_{x \to -\infty}\frac{\sqrt{2x^2 + 1}}{3x - 5} = \lim_{x \to -\infty}\frac{-\sqrt{2 + 1/x^2}}{3 - 5/x} = \frac{-\sqrt{2}}{3} = -\frac{\sqrt{2}}{3}$$

So $y = -\sqrt{2}/3$ is a horizontal asymptote as $x \to -\infty$.

**Two horizontal asymptotes**, symmetric about the $x$-axis.

**Vertical asymptote:** likely where denominator vanishes: $3x - 5 = 0 \Rightarrow x = 5/3$.

- If $x \to (5/3)^+$: denominator $3x - 5$ is small positive; numerator $\sqrt{2x^2 + 1}$ is positive; quotient is large positive. $f(x) \to \infty$.
- If $x \to (5/3)^-$: denominator is small negative; numerator is still positive; quotient is large negative. $f(x) \to -\infty$.

So $x = 5/3$ is a vertical asymptote.

> **Figure 8 — Graph of $y = \sqrt{2x^2+1}/(3x-5)$.** Two horizontal asymptotes at $y = \pm\sqrt{2}/3 \approx \pm 0.471$ and a vertical asymptote at $x = 5/3$. The curve has three branches.

```plot
{
  "title": "Figure 8 — y = √(2x²+1)/(3x−5): sign flip creates two horizontal asymptotes",
  "width": 520, "height": 340,
  "xRange": [-10, 10], "yRange": [-3, 3],
  "xStep": 2, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sqrt(2*x*x + 1)/(3*x - 5)", "domain": [-10, 1.57], "color": "#b04a2f", "width": 2.2, "samples": 600},
    {"fn": "sqrt(2*x*x + 1)/(3*x - 5)", "domain": [1.8, 10],   "color": "#b04a2f", "width": 2.2, "samples": 600}
  ],
  "lines": [
    {"type": "horizontal", "y":  0.4714, "color": "#2867b2", "dash": "4 3"},
    {"type": "horizontal", "y": -0.4714, "color": "#2867b2", "dash": "4 3"},
    {"type": "vertical",   "x":  1.6667, "color": "#2867b2", "dash": "4 4"}
  ],
  "annotations": [
    {"x": 9.5, "y":  0.65, "text": "y = √2/3",  "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 9.5, "y": -0.65, "text": "y = −√2/3", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 1.67, "y": -2.7, "text": "x = 5/3",   "color": "#2867b2", "italic": false, "anchor": "middle"}
  ],
  "caption": "√(x²) = |x|, so the sign of x flips the horizontal asymptote. The two ends level off at opposite heights."
}
```

**The trap in Example 4** — many students forget $\sqrt{x^2} = |x|$, not $x$. For $x < 0$, we get a sign flip, giving a *different* horizontal asymptote on the negative side. **Always check signs when working with radicals at $\pm\infty$.**

---

### Example 5 — The conjugate trick for $\sqrt{\cdot} - x$ forms

Compute $\displaystyle \lim_{x \to \infty}\!\left(\sqrt{x^2 + 1} - x\right)$.

***Solution.*** Both $\sqrt{x^2 + 1}$ and $x$ grow large, so it's not obvious what their difference does (this is an "$\infty - \infty$" indeterminate form).

**Rationalize by multiplying by the conjugate:**

$$\lim_{x \to \infty}\!\left(\sqrt{x^2 + 1} - x\right) = \lim_{x \to \infty}\!\left(\sqrt{x^2 + 1} - x\right) \cdot \frac{\sqrt{x^2 + 1} + x}{\sqrt{x^2 + 1} + x}$$

$$= \lim_{x \to \infty}\frac{(x^2 + 1) - x^2}{\sqrt{x^2 + 1} + x} = \lim_{x \to \infty}\frac{1}{\sqrt{x^2 + 1} + x}$$

Both terms in the denominator grow large, so the quotient approaches 0.

*Margin note: The Squeeze Theorem could be used to show that this limit is 0. But an easier method is to divide numerator and denominator by $x$.*

More explicitly, dividing by $x$:

$$\lim_{x \to \infty}\frac{1/x}{\sqrt{1 + 1/x^2} + 1} = \frac{0}{\sqrt{1} + 1} = 0$$

$\blacksquare$

> **Figure 9 — Graph of $y = \sqrt{x^2+1} - x$.** Decreasing curve that starts at $y = 1$ (at $x = 0$) and slowly approaches $y = 0$ as $x \to \infty$. The $x$-axis is a horizontal asymptote.

```plot
{
  "title": "Figure 9 — y = √(x² + 1) − x → 0 as x → ∞",
  "width": 520, "height": 300,
  "xRange": [0, 10], "yRange": [-0.2, 1.3],
  "xStep": 1, "yStep": 0.25,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sqrt(x*x + 1) - x", "domain": [0, 10], "color": "#b04a2f", "width": 2.2, "samples": 500}
  ],
  "lines": [
    {"type": "horizontal", "y": 0, "color": "#2867b2", "dash": "4 3"}
  ],
  "points": [
    {"x": 0, "y": 1, "style": "filled", "color": "#1f2430", "label": "(0, 1)", "labelDx": 10, "labelDy": -6}
  ],
  "caption": "An ∞ − ∞ form that's actually finite. Rationalizing turns it into 1/(√(x² + 1) + x), which clearly decays to 0."
}
```

**The pattern.** Whenever you have an "$\infty - \infty$" form with radicals (like $\sqrt{\text{stuff}} - x$ or $\sqrt{f(x)} - \sqrt{g(x)}$), **multiply by the conjugate to convert it to a quotient**, then apply the standard limit-at-infinity technique.

**Quant application.** This exact pattern appears in the asymptotic behavior of the **normal CDF's tail**:
$$1 - \Phi(x) \sim \frac{\phi(x)}{x} \text{ as } x \to \infty$$
where $\phi$ is the density. The derivation involves an "$\infty - \infty$" form rationalized via integration by parts — structurally the same conjugate-trick idea.

---

## Exponential Asymptotic Behavior

The graph of $y = e^x$ has the line $y = 0$ (the $x$-axis) as a horizontal asymptote. (The same is true of any exponential function with base $a > 1$.)

From the graph and the corresponding table:

$$\tag{6} \lim_{x \to -\infty}e^x = 0$$

| $x$ | $e^x$ |
|:---:|:---:|
| 0 | 1.00000 |
| $-1$ | 0.36788 |
| $-2$ | 0.13534 |
| $-3$ | 0.04979 |
| $-5$ | 0.00674 |
| $-8$ | 0.00034 |
| $-10$ | 0.00005 |

**The values of $e^x$ approach 0 very rapidly** — even at $x = -10$, $e^x \approx 5 \times 10^{-5}$.

> **Figure 10 — Graph of $y = e^x$.** Starts from the $x$-axis on the far left (asymptotic), passes through $(0, 1)$, and grows rapidly to the upper right.

```plot
{
  "title": "Figure 10 — y = eˣ has horizontal asymptote y = 0 as x → −∞",
  "width": 520, "height": 320,
  "xRange": [-6, 3], "yRange": [-1, 18],
  "xStep": 1, "yStep": 2,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "exp(x)", "domain": [-6, 3], "color": "#b04a2f", "width": 2.2, "samples": 400}
  ],
  "lines": [
    {"type": "horizontal", "y": 0, "color": "#2867b2", "dash": "4 3"}
  ],
  "points": [
    {"x": 0, "y": 1, "style": "filled", "color": "#1f2430", "label": "(0, 1)", "labelDx": 10, "labelDy": -6}
  ],
  "caption": "Never negative, never zero — but hugs the x-axis arbitrarily closely as x → −∞."
}
```

---

### Example 6 — Limit of $e^{1/x}$ as $x \to 0^-$

Evaluate $\displaystyle \lim_{x \to 0^-}e^{1/x}$.

***Solution.*** Let $t = 1/x$. As $x \to 0^-$, $t \to -\infty$. Therefore, by (6):

$$\lim_{x \to 0^-}e^{1/x} = \lim_{t \to -\infty}e^t = 0$$

*Margin note: The problem-solving strategy for Example 6 is "introducing something extra" (Polya). Here, the something extra, the auxiliary aid, is the new variable $t$.*

**The substitution trick** — $t = 1/x$ is a standard device. It converts a limit "$x \to 0^\pm$" into a limit "$t \to \pm\infty$", which is often easier to reason about.

---

### Example 7 — $\lim_{x \to \infty}\sin x$ does NOT exist

As $x$ increases, the values of $\sin x$ oscillate between 1 and $-1$ infinitely often. So they don't approach any definite number. Therefore $\lim_{x \to \infty}\sin x$ does not exist.

**Like Example 4 of Section 2.2** ($\sin(\pi/x)$ near 0), this illustrates that oscillation can prevent a limit from existing. The fix: ε-δ-style requires values to cluster near a single number, which oscillation violates.

---

## Infinite Limits at Infinity

The dual case: the input grows without bound *and* the output does too.

The notation $\lim_{x \to \infty}f(x) = \infty$ is used to indicate that the values of $f(x)$ become large as $x$ becomes large. Similar meanings for:

$$\lim_{x \to -\infty}f(x) = \infty \qquad \lim_{x \to \infty}f(x) = -\infty \qquad \lim_{x \to -\infty}f(x) = -\infty$$

### Example 8 — $x^3$ at infinity

$\displaystyle \lim_{x \to \infty}x^3 = \infty$: $x^3$ becomes arbitrarily large as $x$ does. For instance, $10^3 = 1000$, $100^3 = 1{,}000{,}000$, $1000^3 = 10^9$.

$\displaystyle \lim_{x \to -\infty}x^3 = -\infty$: $x^3$ becomes arbitrarily large negative (odd-power $\Rightarrow$ sign-preserving).

> **Figure 11 — Graph of $y = x^3$.** S-shape. Descends from $-\infty$ on the lower left, passes through origin, rises to $+\infty$ on the upper right. Monotonically increasing everywhere.

```plot
{
  "title": "Figure 11 — y = x³ heads to ±∞ on both ends",
  "width": 500, "height": 320,
  "xRange": [-3, 3], "yRange": [-28, 28],
  "xStep": 1, "yStep": 7,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x*x", "domain": [-3, 3], "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 0, "y": 0, "style": "filled", "color": "#1f2430"}
  ],
  "caption": "Odd-degree monomial: one end → −∞, the other → +∞."
}
```

### Example 9 — $\infty - \infty$ as a trap

**Be careful with Limit Laws.** It would be **wrong** to write:

$$\lim_{x \to \infty}(x^2 - x) \stackrel{\text{WRONG}}{=} \lim_{x \to \infty}x^2 - \lim_{x \to \infty}x = \infty - \infty$$

**The Limit Laws can't be applied to infinite limits because $\infty$ is not a number** ($\infty - \infty$ is undefined).

**However,** we *can* write:

$$\lim_{x \to \infty}(x^2 - x) = \lim_{x \to \infty}x(x - 1) = \infty$$

because both $x$ and $x - 1$ become arbitrarily large, so their product does too.

**Always factor $\infty - \infty$ forms before concluding.** Factoring usually converts them into a product or quotient whose behavior is clear.

---

### Example 10 — Polynomial-over-polynomial at infinity where top degree > bottom

Find $\displaystyle \lim_{x \to \infty}\frac{x^2 + x}{3 - x}$.

***Solution.*** As in Example 3, divide numerator and denominator by the highest power of $x$ in the denominator — which is just $x$ here:

$$\lim_{x \to \infty}\frac{x^2 + x}{3 - x} = \lim_{x \to \infty}\frac{x + 1}{\frac{3}{x} - 1} = -\infty$$

The numerator $x + 1 \to \infty$ and the denominator $3/x - 1 \to -1$. A large positive number divided by a small negative number is a large negative number. So the ratio goes to $-\infty$.

**Confirming the shortcut rule:** $\deg P = 2 > 1 = \deg Q$, and the leading coefficient ratio is $1/(-1) = -1$ (negative), so the limit is $-\infty$. ✓

---

### Example 11 — Polynomial sketching using intercepts and end behavior

Sketch the graph of $y = (x - 2)^4(x + 1)^3(x - 1)$ by finding its intercepts and its limits as $x \to \infty$ and as $x \to -\infty$.

***Solution.***

**Intercepts.**
- $y$-intercept: $f(0) = (-2)^4(1)^3(-1) = 16 \cdot 1 \cdot -1 = -16$.
- $x$-intercepts: $y = 0$ when $x = 2, -1, 1$.

**Behavior at intercepts.** $(x - 2)^4$ has an **even** exponent, so the function **doesn't change sign at $x = 2$** — it touches the $x$-axis and bounces. $(x + 1)^3$ and $(x - 1)$ have odd exponents, so the function **changes sign at $x = -1$ and $x = 1$**.

**Limits at infinity.** As $x \to \pm\infty$, all three factors grow. Degree of the polynomial is $4 + 3 + 1 = 8$ (even), with leading coefficient $+1$. So:

$$\lim_{x \to \infty}f(x) = +\infty \qquad \lim_{x \to -\infty}f(x) = +\infty$$

(Large positive ↔ both ends go up because degree is even.)

**Combining:**
- Far left: $f \to +\infty$.
- Crosses $x$-axis at $x = -1$ (sign change from + to −).
- Reaches minimum somewhere, crosses $x$-axis at $x = 1$ (sign change from − to +).
- Touches $x$-axis at $x = 2$ (no sign change, stays positive).
- Far right: $f \to +\infty$.

> **Figure 13 — Rough sketch.** Polynomial with the characteristic "W"-shape for this even-degree case: up on both ends, valley between $x = -1$ and $x = 1$ (where it hits $y = -16$ at $x = 0$), and a touch-point at $x = 2$ where the curve kisses the $x$-axis before shooting back up.

```plot
{
  "title": "Figure 13 — y = (x − 2)⁴(x + 1)³(x − 1)",
  "width": 540, "height": 340,
  "xRange": [-2, 3], "yRange": [-40, 40],
  "xStep": 1, "yStep": 10,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "pow(x - 2, 4) * pow(x + 1, 3) * (x - 1)", "domain": [-2, 3], "color": "#b04a2f", "width": 2.2, "samples": 500}
  ],
  "points": [
    {"x": -1, "y": 0,   "style": "filled", "color": "#1f2430", "label": "(−1, 0)",  "labelDx": -8, "labelDy": -10, "labelAnchor": "end"},
    {"x": 1,  "y": 0,   "style": "filled", "color": "#1f2430", "label": "(1, 0)",   "labelDx": 10, "labelDy": 14},
    {"x": 2,  "y": 0,   "style": "filled", "color": "#1f2430", "label": "(2, 0) — touch", "labelDx": 10, "labelDy": 14},
    {"x": 0,  "y": -16, "style": "filled", "color": "#1f2430", "label": "(0, −16)", "labelDx": 10, "labelDy": -6}
  ],
  "caption": "Degree 8, positive leading coefficient: both ends → +∞. Odd-multiplicity roots at −1 and 1 flip sign; even-multiplicity root at 2 only touches."
}
```

**The three-ingredient polynomial sketching method:**
1. **$x$-intercepts and their multiplicities** (for sign-change / touch behavior).
2. **$y$-intercept**.
3. **End behavior** from degree and leading coefficient.

This gives a rough sketch without computing derivatives. Once you learn derivatives in Chapter 3, you can refine with local max/min locations — but the rough sketch via Example 11's technique is often enough for asymptotic reasoning.

---

## The Asymptotic-Growth Hierarchy, Confirmed

From Section 1.5 (Unit 2), we saw numerically that

$$\log_a x \ll x^p \ll a^x \quad \text{as } x \to \infty$$

Now we can express this rigorously using limits at infinity:

$$\lim_{x \to \infty}\frac{\log_a x}{x^p} = 0 \qquad \lim_{x \to \infty}\frac{x^p}{a^x} = 0$$

for any $a > 1$ and $p > 0$. **Logarithms beat nothing; polynomials beat logarithms; exponentials beat polynomials.** The formal proof uses L'Hôpital's rule (Chapter 4), but Example 9 of this section confirms the $x^p$ vs. $x^3$ piece numerically in Figure 12 (an $e^x$ vs $x^3$ comparison).

**This hierarchy matters for finite-sample asymptotics, risk management, and algorithmic complexity:**

- **In finance:** a portfolio with polynomial growth can be out-performed in the long run by one with exponential growth even if it starts with higher value. Compounding eventually beats any polynomial strategy.
- **In ML:** a feature with logarithmic dependence on $n$ can always be eventually dominated by polynomial features — and polynomial complexity by exponential complexity. This drives the search for "efficient" (polynomial-time) algorithms.
- **In numerical analysis:** error bounds $O(1/n)$ dominate $O((\log n)/n)$; methods with $O(c^n)$ complexity are intractable for large $n$.

---

*End of Unit 1 of Section 2.6. Unit 2 covers the precise ε-N definitions (Definitions 7, 8, 9), Examples 12–13, and all Section 2.6 exercises.*
