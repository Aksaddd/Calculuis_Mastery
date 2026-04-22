# Section 2.2 — The Limit of a Function (Part B): Infinite Limits and Vertical Asymptotes

*Covers pp. 93 bottom – 96 top of the book (PDF pp. 121 bottom – 124). The second half of Section 2.2: what it means when a function's values "blow up" as $x$ approaches a point, how to write $\lim_{x \to a} f(x) = \pm\infty$ rigorously (even though $\infty$ is not a number), and the definition of vertical asymptote.*

---

## Infinite Limits

### Example 8 — The canonical infinite limit: $1/x^2$ near 0

Find $\displaystyle \lim_{x \to 0} \frac{1}{x^2}$ if it exists.

***Solution.*** As $x$ becomes close to 0, $x^2$ also becomes close to 0, and $1/x^2$ becomes very large.

**Table of values:**

| $x$ | $1/x^2$ |
|:---:|:---:|
| $\pm 1$ | 1 |
| $\pm 0.5$ | 4 |
| $\pm 0.2$ | 25 |
| $\pm 0.1$ | 100 |
| $\pm 0.05$ | 400 |
| $\pm 0.01$ | 10{,}000 |
| $\pm 0.001$ | 1{,}000{,}000 |

The values grow without any upper bound. **The values of $f(x)$ do not approach a number, so $\lim_{x \to 0}(1/x^2)$ does not exist** in the sense of Definition 1.

> **Figure 11 — Graph of $y = 1/x^2$.** Symmetric about the $y$-axis, with two branches rising steeply to infinity as $x \to 0$ from either side. The $x$-axis is a horizontal asymptote at both $\pm \infty$; the $y$-axis is a vertical asymptote at 0.

```plot
{
  "title": "Figure 11 — y = 1/x² blows up at x = 0",
  "width": 520, "height": 340,
  "xRange": [-3, 3], "yRange": [-1, 20],
  "xStep": 1, "yStep": 4,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "1/(x*x)", "domain": [-3, -0.22],  "color": "#b04a2f", "width": 2.2, "samples": 800},
    {"fn": "1/(x*x)", "domain": [0.22, 3],    "color": "#b04a2f", "width": 2.2, "samples": 800}
  ],
  "lines": [
    {"type": "vertical", "x": 0, "color": "#2867b2", "width": 1.5, "dash": "5 4"}
  ],
  "caption": "The y-axis (x = 0) is a vertical asymptote. 1/x² grows without bound from both sides, so lim_{x→0} 1/x² = ∞."
}
```

**Notation for this behavior.** Even though the limit doesn't exist (as a number), Stewart introduces notation to describe the specific *way* in which it fails:

$$\lim_{x \to 0} \frac{1}{x^2} = \infty$$

### CAUTION: $\infty$ is not a number

> **Critical warning.** This **does not mean** that $\infty$ is a number, nor that the limit actually exists. It simply expresses the particular way in which the limit fails to exist: $1/x^2$ can be made as large as we like by taking $x$ close enough to 0.

The equation "$\lim = \infty$" is shorthand for a precise statement about *unbounded growth*, not an assignment of the value $\infty$ to the limit.

### Formal definition

> **Definition 4 — Infinite limit (to $+\infty$).** Let $f$ be a function defined on both sides of $a$, except possibly at $a$ itself. Then
> $$\lim_{x \to a} f(x) = \infty$$
> means that the values of $f(x)$ can be made arbitrarily large (as large as we please) by taking $x$ sufficiently close to $a$, but not equal to $a$.

**Alternative notation:** $f(x) \to \infty$ as $x \to a$.

**Reading the statement aloud.** Any of these phrasings work:
- "The limit of $f(x)$, as $x$ approaches $a$, is infinity."
- "$f(x)$ becomes infinite as $x$ approaches $a$."
- "$f(x)$ increases without bound as $x$ approaches $a$."

> **Figure 12 — Illustration of $\lim_{x \to a} f(x) = \infty$.** A generic curve with a vertical dashed line $x = a$ acting as a barrier. The curve's branches on both sides of $x = a$ rise steeply upward without touching the vertical line — values go to $+\infty$ as $x$ approaches $a$.

```plot
{
  "title": "Figure 12 — lim_{x→a} f(x) = ∞",
  "width": 520, "height": 320,
  "xRange": [-3, 3], "yRange": [-0.5, 8],
  "xStep": 1, "yStep": 2,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "1/((x)*(x))", "domain": [-3, -0.35],  "color": "#b04a2f", "width": 2.2, "samples": 600},
    {"fn": "1/((x)*(x))", "domain": [0.35, 3],    "color": "#b04a2f", "width": 2.2, "samples": 600}
  ],
  "lines": [
    {"type": "vertical", "x": 0, "color": "#2867b2", "width": 1.5, "dash": "5 4"}
  ],
  "annotations": [
    {"x": 0.15, "y": -0.2, "text": "a", "color": "#2867b2", "italic": true}
  ],
  "caption": "Both branches run off the top of the page. lim_{x→a} f(x) = ∞ means: values of f become arbitrarily large as x gets close to a."
}
```

---

## Negative infinite limits

A similar notion handles limits where $f$ becomes arbitrarily large **in the negative direction**.

*Margin note: When we say a number is "large negative," we mean that it is negative but its magnitude (absolute value) is large.*

> **Definition 5 — Infinite limit (to $-\infty$).** Let $f$ be defined on both sides of $a$, except possibly at $a$ itself. Then
> $$\lim_{x \to a} f(x) = -\infty$$
> means that the values of $f(x)$ can be made arbitrarily large negative by taking $x$ sufficiently close to $a$, but not equal to $a$.

**Reading the symbol $-\infty$:** "the limit of $f(x)$ as $x$ approaches $a$ is negative infinity," or "$f(x)$ decreases without bound as $x \to a$."

**Example:**

$$\lim_{x \to 0} \left(-\frac{1}{x^2}\right) = -\infty$$

> **Figure 13 — Graph illustrating $\lim_{x \to a} f(x) = -\infty$.** Two branches of a curve, each plunging downward to $-\infty$ as $x \to a$ from either side. The vertical line $x = a$ is again a barrier.

```plot
{
  "title": "Figure 13 — lim_{x→a} f(x) = −∞",
  "width": 520, "height": 320,
  "xRange": [-3, 3], "yRange": [-8, 0.5],
  "xStep": 1, "yStep": 2,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "-1/((x)*(x))", "domain": [-3, -0.35], "color": "#b04a2f", "width": 2.2, "samples": 600},
    {"fn": "-1/((x)*(x))", "domain": [0.35, 3],   "color": "#b04a2f", "width": 2.2, "samples": 600}
  ],
  "lines": [
    {"type": "vertical", "x": 0, "color": "#2867b2", "width": 1.5, "dash": "5 4"}
  ],
  "annotations": [
    {"x": 0.15, "y": 0.25, "text": "a", "color": "#2867b2", "italic": true}
  ],
  "caption": "Both branches dive off the bottom. lim_{x→a} f(x) = −∞ means: values can be made arbitrarily large negative by taking x close to a."
}
```

---

## One-sided infinite limits

Combining the one-sided notation from Unit 2a with the infinite-limit notation:

$$\lim_{x \to a^-} f(x) = \infty \qquad \lim_{x \to a^+} f(x) = \infty$$
$$\lim_{x \to a^-} f(x) = -\infty \qquad \lim_{x \to a^+} f(x) = -\infty$$

**Four possible one-sided infinite behaviors** — left/right × up/down.

> **Figure 14 — The four one-sided infinite cases.**
> - **(a) $\lim_{x \to a^-} f(x) = \infty$:** the left branch of the curve rises to $+\infty$ as $x$ approaches $a$ from below. (The right side might do anything.)
> - **(b) $\lim_{x \to a^+} f(x) = \infty$:** the right branch rises to $+\infty$.
> - **(c) $\lim_{x \to a^-} f(x) = -\infty$:** the left branch plunges to $-\infty$.
> - **(d) $\lim_{x \to a^+} f(x) = -\infty$:** the right branch plunges to $-\infty$.

<figure class="plot-figure">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 420" role="img" aria-label="Four one-sided infinite limit cases at x = a">
  <style>
    .axf { stroke: #1f2430; stroke-width: 1.2; }
    .asy { stroke: #2867b2; stroke-width: 1.4; stroke-dasharray: 5 4; }
    .crv { stroke: #b04a2f; stroke-width: 2.2; fill: none; stroke-linecap: round; }
    .lab { font-family: 'Times New Roman', Times, serif; font-size: 13px; fill: #1f2430; font-style: italic; }
    .cap { font-family: Helvetica, Arial, sans-serif; font-size: 11px; fill: #5b6477; font-style: italic; }
  </style>
  <g transform="translate(20 20)">
    <text class="cap" x="130" y="-4" text-anchor="middle">(a)  x → a⁻,  f → +∞</text>
    <line class="axf" x1="20" y1="170" x2="240" y2="170"/>
    <line class="axf" x1="20" y1="10"  x2="20"  y2="170"/>
    <line class="asy" x1="160" y1="10" x2="160" y2="170"/>
    <path class="crv" d="M 28 140 Q 100 110, 140 80 T 158 20"/>
    <text class="lab" x="160" y="184" text-anchor="middle">a</text>
  </g>
  <g transform="translate(330 20)">
    <text class="cap" x="130" y="-4" text-anchor="middle">(b)  x → a⁺,  f → +∞</text>
    <line class="axf" x1="20" y1="170" x2="240" y2="170"/>
    <line class="axf" x1="20" y1="10"  x2="20"  y2="170"/>
    <line class="asy" x1="100" y1="10" x2="100" y2="170"/>
    <path class="crv" d="M 102 20 Q 120 80, 160 110 T 232 140"/>
    <text class="lab" x="100" y="184" text-anchor="middle">a</text>
  </g>
  <g transform="translate(20 230)">
    <text class="cap" x="130" y="-4" text-anchor="middle">(c)  x → a⁻,  f → −∞</text>
    <line class="axf" x1="20" y1="30"  x2="240" y2="30"/>
    <line class="axf" x1="20" y1="30"  x2="20"  y2="190"/>
    <line class="asy" x1="160" y1="30" x2="160" y2="190"/>
    <path class="crv" d="M 28 60 Q 100 90, 140 120 T 158 180"/>
    <text class="lab" x="160" y="24" text-anchor="middle">a</text>
  </g>
  <g transform="translate(330 230)">
    <text class="cap" x="130" y="-4" text-anchor="middle">(d)  x → a⁺,  f → −∞</text>
    <line class="axf" x1="20" y1="30"  x2="240" y2="30"/>
    <line class="axf" x1="20" y1="30"  x2="20"  y2="190"/>
    <line class="asy" x1="100" y1="30" x2="100" y2="190"/>
    <path class="crv" d="M 102 180 Q 120 120, 160 90 T 232 60"/>
    <text class="lab" x="100" y="24" text-anchor="middle">a</text>
  </g>
</svg>
<figcaption>Any one of these four one-sided behaviors is enough to make the line x = a a vertical asymptote.</figcaption>
</figure>

Each panel shows a vertical dashed line at $x = a$ with one branch of a curve exhibiting the specified behavior.

---

## Vertical asymptotes — the official definition

> **Definition 6 — Vertical asymptote.** The line $x = a$ is called a **vertical asymptote** of the curve $y = f(x)$ if **at least one** of the following statements is true:
> $$\lim_{x \to a} f(x) = \infty \qquad \lim_{x \to a^-} f(x) = \infty \qquad \lim_{x \to a^+} f(x) = \infty$$
> $$\lim_{x \to a} f(x) = -\infty \qquad \lim_{x \to a^-} f(x) = -\infty \qquad \lim_{x \to a^+} f(x) = -\infty$$

**Key language.** "At least one" is the operative phrase — you only need one of the six infinite-limit statements to hold for $x = a$ to be a vertical asymptote. The function doesn't have to blow up from both sides in the same direction.

**Quick checks:**
- $y = 1/x^2$ has a vertical asymptote at $x = 0$ because $\lim_{x \to 0} 1/x^2 = \infty$ (both sides). ✓
- $y = 1/x$ has a vertical asymptote at $x = 0$ because $\lim_{x \to 0^+} 1/x = \infty$ and $\lim_{x \to 0^-} 1/x = -\infty$ — even though the two one-sided limits disagree, either alone satisfies the definition. ✓
- All four cases in Figure 14 exhibit a vertical asymptote at $x = a$.

**Why vertical asymptotes matter for graph-sketching.** Knowledge of vertical asymptotes is essential for sketching rational functions, trig functions, logs, and most functions with domain restrictions. They give you the "walls" the function cannot cross.

---

### Example 9 — $y = 2x/(x-3)$: one-sided infinite limits at $x = 3$

Find $\displaystyle \lim_{x \to 3^+} \frac{2x}{x - 3}$ and $\displaystyle \lim_{x \to 3^-} \frac{2x}{x - 3}$.

***Solution.***

**Right-hand limit** ($x \to 3^+$): if $x$ is close to 3 but **larger** than 3, then $x - 3$ is a small positive number and $2x$ is close to 6. So the quotient $2x/(x-3)$ is a *large positive* number. Thus

$$\lim_{x \to 3^+} \frac{2x}{x - 3} = \infty$$

**Left-hand limit** ($x \to 3^-$): if $x$ is close to 3 but **smaller** than 3, then $x - 3$ is a small negative number but $2x$ is still a positive number close to 6. So $2x/(x-3)$ is numerically large *negative*. Thus

$$\lim_{x \to 3^-} \frac{2x}{x - 3} = -\infty$$

**Sign-analysis recipe — the universal method for one-sided infinite limits.** For any rational function $P(x)/Q(x)$ approaching a point $a$ where $Q(a) = 0$ but $P(a) \neq 0$:
1. Find the sign of the numerator $P(x)$ near $a$.
2. Find the sign of the denominator $Q(x)$ on each side of $a$ separately.
3. The quotient blows up to $+\infty$ where signs agree, $-\infty$ where they disagree.

In Example 9: $P(3) = 6 > 0$ everywhere near 3; $Q(x) = x - 3$ is negative for $x < 3$ and positive for $x > 3$. So the sign flips, and the two one-sided limits give opposite infinities. ✓

> **Figure 15 — Graph of $y = 2x/(x-3)$.** A rational-function "two-branch" picture: the left branch plunges to $-\infty$ just below $x = 3$; the right branch launches from $+\infty$ just above $x = 3$. The vertical line $x = 3$ is the vertical asymptote. The curve also has a horizontal asymptote at $y = 2$ (as $x \to \pm \infty$, $2x/(x-3) \to 2$ — but we're not considering limits at infinity yet; that's Section 2.6).

```plot
{
  "title": "Figure 15 — y = 2x/(x − 3)",
  "width": 520, "height": 360,
  "xRange": [-5, 10], "yRange": [-12, 14],
  "xStep": 2, "yStep": 4,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "2*x/(x - 3)", "domain": [-5, 2.7], "color": "#b04a2f", "width": 2.2, "samples": 700},
    {"fn": "2*x/(x - 3)", "domain": [3.3, 10], "color": "#b04a2f", "width": 2.2, "samples": 700}
  ],
  "lines": [
    {"type": "vertical",   "x": 3, "color": "#2867b2", "width": 1.5, "dash": "5 4"},
    {"type": "horizontal", "y": 2, "color": "#2867b2", "width": 1.2, "dash": "3 3"}
  ],
  "annotations": [
    {"x": 3.15, "y": -11.2, "text": "x = 3",  "color": "#2867b2", "italic": false},
    {"x": 9.2,  "y": 2.8,   "text": "y = 2",  "color": "#2867b2", "italic": false, "anchor": "end"}
  ],
  "caption": "Just left of x = 3 the curve plunges to −∞; just right, it launches from +∞. lim_{x→3⁻} = −∞, lim_{x→3⁺} = +∞."
}
```

---

### Example 10 — Vertical asymptotes of $\tan x$

Find the vertical asymptotes of $f(x) = \tan x$.

***Solution.*** Because $\tan x = \dfrac{\sin x}{\cos x}$, there are potential vertical asymptotes where $\cos x = 0$, i.e., at $x = \pi/2, 3\pi/2, 5\pi/2, \ldots$ — specifically at $x = (2n + 1)\pi/2$ for any integer $n$.

**At $x = \pi/2$:** As $x \to (\pi/2)^-$, $\cos x \to 0^+$ (cosine is positive just below $\pi/2$). As $x \to (\pi/2)^+$, $\cos x \to 0^-$ (cosine is negative just above $\pi/2$). And $\sin x$ is positive and close to 1 throughout this neighborhood.

Therefore:

$$\lim_{x \to (\pi/2)^-} \tan x = \infty \quad\text{and}\quad \lim_{x \to (\pi/2)^+} \tan x = -\infty$$

**General result.** Similar reasoning shows that $x = (2n+1)\pi/2$ is a vertical asymptote of $\tan x$ for every integer $n$.

> **Figure 16 — Graph of $y = \tan x$.** The familiar tangent curve showing infinite periodic asymptotes at $\pm \pi/2, \pm 3\pi/2, \ldots$. Between asymptotes, the curve rises monotonically from $-\infty$ to $+\infty$.

```plot
{
  "title": "Figure 16 — y = tan x: vertical asymptotes at (2n+1)π/2",
  "width": 540, "height": 340,
  "xRange": [-7.2, 7.2], "yRange": [-6, 6],
  "xStep": 1.5707963, "yStep": 2,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "tan(x)", "domain": [-7,  -4.8], "color": "#b04a2f", "width": 2.2, "samples": 600},
    {"fn": "tan(x)", "domain": [-4.5, -1.7], "color": "#b04a2f", "width": 2.2, "samples": 600},
    {"fn": "tan(x)", "domain": [-1.4,  1.4], "color": "#b04a2f", "width": 2.2, "samples": 600},
    {"fn": "tan(x)", "domain": [ 1.7,  4.5], "color": "#b04a2f", "width": 2.2, "samples": 600},
    {"fn": "tan(x)", "domain": [ 4.8,  7],   "color": "#b04a2f", "width": 2.2, "samples": 600}
  ],
  "lines": [
    {"type": "vertical", "x": -4.71239, "color": "#2867b2", "dash": "4 4"},
    {"type": "vertical", "x": -1.57080, "color": "#2867b2", "dash": "4 4"},
    {"type": "vertical", "x":  1.57080, "color": "#2867b2", "dash": "4 4"},
    {"type": "vertical", "x":  4.71239, "color": "#2867b2", "dash": "4 4"}
  ],
  "caption": "Every odd multiple of π/2 is a vertical asymptote. Just below, tan x → +∞; just above, tan x → −∞."
}
```

**The set $\{(2n+1)\pi/2\}$ is the "arctan range-restriction culprit."** In Section 1.6 Unit 3, you saw why $\arctan$ has range $(-\pi/2, \pi/2)$ — because on that interval $\tan$ is bijective onto $\mathbb{R}$. The vertical asymptotes at $\pm \pi/2$ are precisely the boundary points that must be excluded to keep $\tan$ one-to-one.

---

### Logarithmic vertical asymptote

The natural logarithmic function $y = \ln x$ has a vertical asymptote at $x = 0$:

$$\lim_{x \to 0^+} \ln x = -\infty$$

> **Figure 17 — Graph of $y = \ln x$.** Ascending curve starting at the vertical asymptote $x = 0$, passing through $(1, 0)$, and rising very slowly toward infinity as $x \to \infty$. The $y$-axis is the vertical asymptote.

```plot
{
  "title": "Figure 17 — y = ln x has a vertical asymptote at x = 0",
  "width": 520, "height": 320,
  "xRange": [-0.8, 8], "yRange": [-5, 3],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "log(x)", "domain": [0.008, 8], "color": "#b04a2f", "width": 2.2, "samples": 900}
  ],
  "lines": [
    {"type": "vertical", "x": 0, "color": "#2867b2", "width": 1.5, "dash": "5 4"}
  ],
  "points": [
    {"x": 1, "y": 0, "style": "filled", "color": "#1f2430", "label": "(1, 0)", "labelDx": 10, "labelDy": -6}
  ],
  "caption": "lim_{x→0⁺} ln x = −∞. The y-axis is the only vertical asymptote — one-sided is enough."
}
```

The same is true for $y = \log_a x$ provided $a > 1$.

**Why logarithms need this carefully.** The vertical asymptote of $\ln x$ at 0 is the reason $\ln x$ has domain $(0, \infty)$ rather than $[0, \infty)$ or $\mathbb{R}$. $\ln 0$ isn't "some large negative number" — it's literally undefined, the function approaches but never reaches $-\infty$. **In every Black-Scholes-type formula involving $\ln(S/K)$, you're implicitly assuming $S > 0$ and $K > 0$** — both strike and spot must be positive for the formula to make sense. A zero strike or a zero spot breaks the log.

---

## Why infinite limits matter going forward

**For Chapter 2 and beyond:**

- **Section 2.3** (Limit Laws) will explain when you can *compute* limits like Example 9 algebraically, without tabulating.
- **Section 2.4** (ε-δ) gives the formal, rigorous definition matching Definition 4.
- **Section 2.5** (Continuity) distinguishes between "just a hole" (removable) and "blows up" (infinite) discontinuities.
- **Section 2.6** (Limits at Infinity) is the dual: $\lim_{x \to \pm\infty} f(x) = L$, giving horizontal asymptotes.

**For your quant track:** infinite limits show up concretely in several places.

- **Exploding-hazard-rate models** — in credit risk or survival analysis, the hazard function $\lambda(t) \to \infty$ as $t$ approaches a "death time" indicates a certain-default event. Rigorously writing "the hazard goes to infinity" requires exactly the infinite-limit machinery of Definition 4.
- **Option pricing near expiration** — the Greeks (especially **Gamma** and **Vega**) can have very large magnitudes as the underlying approaches the strike price at expiration. The formal statements in Hull's textbook "Gamma approaches infinity at the strike at expiry" are infinite-limit claims.
- **Yield-curve modeling** — the forward rate $f(t, T)$ in certain stochastic models can have $\lim_{T \to t^+} f(t, T) = \infty$ or similar as the tenor shrinks — again requires the one-sided infinite-limit formalism.

The mechanics are simple — divide by something that goes to zero, watch what happens — but the notation $\lim = \pm\infty$ is precise and worth being comfortable with.

---

*End of Unit 2b. Section 2.2's exposition is complete. Unit 2c (next) is Exercises 1–40.*
