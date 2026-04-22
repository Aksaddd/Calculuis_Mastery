# Section 2.2 — The Limit of a Function (Part A): Definition and One-Sided Limits

*Covers pp. 88–93 top of the book (PDF pp. 116–121 top). The first half of Section 2.2: the intuitive definition of $\lim_{x\to a} f(x) = L$, several examples (including some that show how easy it is to guess wrong), and the notion of one-sided limits. Infinite limits and vertical asymptotes will be Unit 2b.*

---

## Section 2.2 — The Limit of a Function

Having seen in the preceding section how limits arise when we want to find the tangent to a curve or the velocity of an object, we now turn our attention to limits in general and numerical and graphical methods for computing them.

---

## Motivating example

Investigate the behavior of $f(x) = x^2 - x + 2$ for values of $x$ near 2.

**Table of values** for $x$ close to 2 (but not equal to 2):

| $x$ (from below) | $f(x)$ | $x$ (from above) | $f(x)$ |
|:---:|:---:|:---:|:---:|
| 1.0 | 2.000000 | 3.0 | 8.000000 |
| 1.5 | 2.750000 | 2.5 | 5.750000 |
| 1.8 | 3.440000 | 2.2 | 4.640000 |
| 1.9 | 3.710000 | 2.1 | 4.310000 |
| 1.95 | 3.852500 | 2.05 | 4.152500 |
| 1.99 | 3.970100 | 2.01 | 4.030100 |
| 1.995 | 3.985025 | 2.005 | 4.015025 |
| 1.999 | 3.997001 | 2.001 | 4.003001 |

From the table and the graph (Figure 1) we see that when $x$ is close to 2 (on either side), $f(x)$ is close to 4. **In fact, we can make $f(x)$ as close to 4 as we like by taking $x$ sufficiently close to 2.**

```plot
{
  "title": "Figure 1 — y = x² − x + 2 approaching 4 as x → 2",
  "width": 520, "height": 360,
  "xRange": [-0.5, 3.5], "yRange": [-0.5, 8.5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x - x + 2", "domain": [-0.5, 3.5], "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "vertical",   "x": 2, "yRange": [0, 4],  "color": "#888", "dash": "3 3"},
    {"type": "horizontal", "y": 4, "xRange": [0, 2],  "color": "#888", "dash": "3 3"}
  ],
  "points": [
    {"x": 2, "y": 4, "style": "filled", "color": "#1f2430", "label": "(2, 4)", "labelDx": 10, "labelDy": -8}
  ],
  "annotations": [
    {"x": 0.55, "y": 4.4, "text": "f(x) → 4", "color": "#1f2430", "italic": false},
    {"x": 2.55, "y": 0.6, "text": "x → 2",    "color": "#1f2430", "italic": false}
  ],
  "caption": "As x slides toward 2 from either side, the corresponding height f(x) slides toward 4."
}
```

We express this by saying

$$\lim_{x \to 2} (x^2 - x + 2) = 4$$

"The limit of $f(x) = x^2 - x + 2$ as $x$ approaches 2 is equal to 4."

---

## Definition of a limit (intuitive)

> **Definition 1 (intuitive).** We write
> $$\lim_{x \to a} f(x) = L$$
> and say "the limit of $f(x)$, as $x$ approaches $a$, equals $L$" if we can make the values of $f(x)$ arbitrarily close to $L$ (as close to $L$ as we like) by taking $x$ to be sufficiently close to $a$ (on either side of $a$) but not equal to $a$.

**The alternative notation** $f(x) \to L$ as $x \to a$ reads "$f(x)$ approaches $L$ as $x$ approaches $a$."

### The critical clause — "but not equal to $a$"

**Notice the phrase "but $x \neq a$" in the definition.** This means that in finding the limit of $f(x)$ as $x$ approaches $a$, we **never consider** $x = a$. In fact, $f(x)$ need not even be defined when $x = a$. **The only thing that matters is how $f$ is defined *near* $a$.**

> **Figure 2 — Three cases where $\lim_{x \to a} f(x) = L$ in all three cases.**
> - **(a)** $f(a) = L$ (the usual case — function is continuous at $a$).
> - **(b)** $f(a) \neq L$ (function has a "bump" at $a$; the isolated dot above or below the limit line shows $f(a)$ taking some other value).
> - **(c)** $f(a)$ is not defined at all (there's a "hole" at $a$, but $f$ still approaches $L$ as $x \to a$).

<figure class="plot-figure">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 260" role="img" aria-label="Three graphs all with the same limit L at x = a, but different behavior exactly at a.">
  <g font-family="'Times New Roman', Times, serif" font-size="13" fill="#1f2430">
    <g transform="translate(20 20)">
      <text x="110" y="0" font-size="12" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" fill="#5b6477" font-style="italic">(a) f(a) = L</text>
      <line x1="20" y1="180" x2="220" y2="180" stroke="#1f2430" stroke-width="1.3"/>
      <line x1="20" y1="20"  x2="20"  y2="180" stroke="#1f2430" stroke-width="1.3"/>
      <path d="M 30 155 Q 70 115, 110 90 Q 150 65, 200 45" fill="none" stroke="#b04a2f" stroke-width="2.2"/>
      <line x1="110" y1="180" x2="110" y2="90" stroke="#888" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="20"  y1="90"  x2="110" y2="90" stroke="#888" stroke-width="1" stroke-dasharray="3 3"/>
      <circle cx="110" cy="90" r="4" fill="#b04a2f"/>
      <text x="110" y="196" text-anchor="middle" font-style="italic">a</text>
      <text x="15"  y="93"  text-anchor="end"    font-style="italic">L</text>
    </g>
    <g transform="translate(270 20)">
      <text x="110" y="0" font-size="12" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" fill="#5b6477" font-style="italic">(b) f(a) ≠ L</text>
      <line x1="20" y1="180" x2="220" y2="180" stroke="#1f2430" stroke-width="1.3"/>
      <line x1="20" y1="20"  x2="20"  y2="180" stroke="#1f2430" stroke-width="1.3"/>
      <path d="M 30 155 Q 70 115, 110 90 Q 150 65, 200 45" fill="none" stroke="#b04a2f" stroke-width="2.2"/>
      <line x1="110" y1="180" x2="110" y2="90" stroke="#888" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="20"  y1="90"  x2="110" y2="90" stroke="#888" stroke-width="1" stroke-dasharray="3 3"/>
      <circle cx="110" cy="90" r="4.5" fill="#fdfcf6" stroke="#b04a2f" stroke-width="1.8"/>
      <circle cx="110" cy="45" r="4"   fill="#b04a2f"/>
      <text x="110" y="196" text-anchor="middle" font-style="italic">a</text>
      <text x="15"  y="93"  text-anchor="end"    font-style="italic">L</text>
      <text x="118" y="42"  font-style="italic">f(a)</text>
    </g>
    <g transform="translate(520 20)">
      <text x="110" y="0" font-size="12" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" fill="#5b6477" font-style="italic">(c) f(a) undefined</text>
      <line x1="20" y1="180" x2="220" y2="180" stroke="#1f2430" stroke-width="1.3"/>
      <line x1="20" y1="20"  x2="20"  y2="180" stroke="#1f2430" stroke-width="1.3"/>
      <path d="M 30 155 Q 70 115, 110 90 Q 150 65, 200 45" fill="none" stroke="#b04a2f" stroke-width="2.2"/>
      <line x1="110" y1="180" x2="110" y2="90" stroke="#888" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="20"  y1="90"  x2="110" y2="90" stroke="#888" stroke-width="1" stroke-dasharray="3 3"/>
      <circle cx="110" cy="90" r="4.5" fill="#fdfcf6" stroke="#b04a2f" stroke-width="1.8"/>
      <text x="110" y="196" text-anchor="middle" font-style="italic">a</text>
      <text x="15"  y="93"  text-anchor="end"    font-style="italic">L</text>
    </g>
  </g>
</svg>
<figcaption>All three functions satisfy lim<sub>x→a</sub> f(x) = L. What happens <em>at</em> a is irrelevant — the limit only sees values near a.</figcaption>
</figure>

**This is the single most important conceptual point in Section 2.2.** The limit is a statement about the *neighborhood* of $a$, not about $a$ itself. You can delete, redefine, or simply leave the value $f(a)$ undefined, and the limit $\lim_{x\to a} f(x)$ is unaffected. This is what allows calculus to handle $0/0$ indeterminate forms — the limit cares about approach, not about the literal value.

*Margin note: A more precise definition will be given in Section 2.4.* (The ε-δ definition.)

---

### Example 1 — A limit via tabulation

Guess the value of $\displaystyle \lim_{x \to 1} \frac{x - 1}{x^2 - 1}$.

***Solution.*** The function $f(x) = (x-1)/(x^2-1)$ is **not defined when $x = 1$** (it's $0/0$), but that doesn't matter — the definition of limit only looks at values near $a$, not at $a$.

**Tables of values** (correct to six decimal places):

$x$ approaching 1 from below:

| $x < 1$ | $f(x)$ |
|:---:|:---:|
| 0.5 | 0.666667 |
| 0.9 | 0.526316 |
| 0.99 | 0.502513 |
| 0.999 | 0.500250 |
| 0.9999 | 0.500025 |

$x$ approaching 1 from above:

| $x > 1$ | $f(x)$ |
|:---:|:---:|
| 1.5 | 0.400000 |
| 1.1 | 0.476190 |
| 1.01 | 0.497512 |
| 1.001 | 0.499750 |
| 1.0001 | 0.499975 |

Both sides approach **0.5** as $x \to 1$:

$$\lim_{x \to 1} \frac{x - 1}{x^2 - 1} = 0.5$$

**Algebraic confirmation.** Factor: $x^2 - 1 = (x-1)(x+1)$, so $\dfrac{x-1}{x^2-1} = \dfrac{1}{x+1}$ for $x \neq 1$. And $\dfrac{1}{1+1} = \dfrac{1}{2}$. ✓

> **Figure 3 — The graph of $y = (x-1)/(x^2-1)$.** Reciprocal-like curve approaching 0.5 as $x \to 1$, with a **hole** at $(1, 0.5)$ since the function isn't defined there.

```plot
{
  "title": "Figure 3 — y = (x − 1)/(x² − 1) has a removable hole at (1, 0.5)",
  "width": 520, "height": 340,
  "xRange": [-0.6, 3.5], "yRange": [-0.5, 2.5],
  "xStep": 1, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "1/(x + 1)", "domain": [-0.5, 3.4], "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "horizontal", "y": 0.5, "xRange": [0, 1], "color": "#888", "dash": "3 3"},
    {"type": "vertical",   "x": 1,   "yRange": [0, 0.5], "color": "#888", "dash": "3 3"}
  ],
  "points": [
    {"x": 1, "y": 0.5, "style": "open", "color": "#b04a2f", "label": "hole at (1, ½)", "labelDx": 12, "labelDy": -4}
  ],
  "caption": "Algebraically (x−1)/(x²−1) = 1/(x+1) for x ≠ 1. The limit at x = 1 is ½ even though the function is undefined there."
}
```

### A twist — redefining at the limit point changes nothing

Modify $f$ to create a new function $g$ with value $2$ at $x = 1$:

$$g(x) = \begin{cases} \dfrac{x - 1}{x^2 - 1} & \text{if } x \neq 1 \\ 2 & \text{if } x = 1 \end{cases}$$

**This new function $g$ still has the same limit as $x \to 1$:**

$$\lim_{x \to 1} g(x) = \frac{1}{2}$$

> **Figure 4 — Graph of $y = g(x)$.** Same curve as Figure 3 but with an **isolated point at $(1, 2)$** replacing the hole. Since $g(1) = 2$ but values near 1 still approach 0.5, the limit is 0.5 — it doesn't care about the isolated dot.

```plot
{
  "title": "Figure 4 — redefine g(1) = 2: limit is still ½",
  "width": 520, "height": 340,
  "xRange": [-0.6, 3.5], "yRange": [-0.5, 2.7],
  "xStep": 1, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "1/(x + 1)", "domain": [-0.5, 3.4], "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "horizontal", "y": 0.5, "xRange": [0, 1], "color": "#888", "dash": "3 3"},
    {"type": "vertical",   "x": 1,   "yRange": [0, 2],  "color": "#888", "dash": "3 3"}
  ],
  "points": [
    {"x": 1, "y": 0.5, "style": "open",   "color": "#b04a2f", "label": "limit = ½", "labelDx": 12, "labelDy": -4},
    {"x": 1, "y": 2,   "style": "filled", "color": "#1f2430", "label": "g(1) = 2",  "labelDx": 12, "labelDy": -4}
  ],
  "caption": "The function value g(1) = 2 floats in the air, unconnected to the curve. The limit still only sees the curve near x = 1."
}
```

**Takeaway reinforced.** Stewart hammers this point on purpose: **$\lim_{x \to a} f(x)$ depends only on the values of $f$ for $x$ near $a$, not at $a$.**

---

### Example 2 — A limit where naïve computation misleads you

Estimate $\displaystyle \lim_{t \to 0} \frac{\sqrt{t^2 + 9} - 3}{t^2}$.

***Solution.*** Tabulate for several values of $t$ near 0:

| $t$ | $f(t) = \dfrac{\sqrt{t^2 + 9} - 3}{t^2}$ |
|:---:|:---:|
| $\pm 1.0$ | 0.16228 |
| $\pm 0.5$ | 0.16553 |
| $\pm 0.1$ | 0.16662 |
| $\pm 0.05$ | 0.16666 |
| $\pm 0.01$ | 0.16667 |

**Pattern:** the values appear to approach $0.1666666\ldots = 1/6$. Guess:

$$\lim_{t \to 0} \frac{\sqrt{t^2 + 9} - 3}{t^2} = \frac{1}{6}$$

(This guess is in fact correct, and we'll verify it algebraically later in the section.)

### The catastrophic cancellation pitfall

**What happens if you take even smaller values of $t$?** A different table using even tighter values:

| $t$ | $f(t)$ |
|:---:|:---:|
| $\pm 0.0005$ | 0.16800 |
| $\pm 0.0001$ | 0.20000 |
| $\pm 0.00005$ | 0.00000 |
| $\pm 0.00001$ | 0.00000 |

**The calculator is now lying to you.** The "answer" collapses to 0, then ballooned to 0.2 before that. What's going on?

**Catastrophic cancellation.** For tiny $t$, $\sqrt{t^2 + 9}$ is extremely close to 3, so $\sqrt{t^2 + 9} - 3$ is a subtraction of two nearly-equal numbers. Floating-point arithmetic has only ~16 digits of precision, so subtraction can produce garbage in the last few digits. Dividing this garbage by the (tiny) $t^2$ amplifies the error enormously.

*Margin note: For a further explanation of why calculators sometimes give false values, click on Lies My Calculator and Computer Told Me. In particular, see the section called The Perils of Subtraction.*

> **Figure 5 — Graphing the function at different scales demonstrates the pitfall.**
> - **(a) $[-5, 5] \times [-0.1, 0.3]$:** smooth bump; the limit value $1/6$ is visible.
> - **(b) $[-0.1, 0.1] \times [-0.1, 0.3]$:** still fine.
> - **(c) $[-10^{-6}, 10^{-6}] \times [-0.1, 0.3]$:** graph shows wild oscillations — floating-point noise.
> - **(d) $[-10^{-7}, 10^{-7}] \times [-0.1, 0.3]$:** looks like a random jumble of vertical lines.

```plot
{
  "title": "Figure 5 — the true (stable) graph of f(t) = 1/(√(t² + 9) + 3)",
  "width": 520, "height": 320,
  "xRange": [-5, 5], "yRange": [-0.05, 0.28],
  "xStep": 1, "yStep": 0.05,
  "xLabel": "t", "yLabel": "y",
  "curves": [
    {"fn": "1/(sqrt(t*t + 9) + 3)", "domain": [-5, 5], "color": "#b04a2f", "width": 2.2, "samples": 600}
  ],
  "lines": [
    {"type": "horizontal", "y": 0.16667, "color": "#888", "dash": "3 3"}
  ],
  "points": [
    {"x": 0, "y": 0.16667, "style": "open", "color": "#b04a2f", "label": "(0, 1/6)", "labelDx": 12, "labelDy": -8}
  ],
  "caption": "Plotted in the stabilized form 1/(√(t²+9) + 3) the bump is smooth and the limit 1/6 is unmissable. Evaluating the naive form near t = 0 with floating-point arithmetic produces pure noise."
}
```

**For your quant track, this is a big deal.** Catastrophic cancellation is why numerical libraries compute $\sqrt{1 + x} - 1$ via the identity $\dfrac{x}{\sqrt{1+x} + 1}$ (avoiding subtraction). It's why Black-Scholes implementations use `log1p(x)` instead of `log(1 + x)` for tiny $x$. It's why computing $\Phi(x) - \Phi(y)$ for close $x, y$ (as in thin-tail probability calculations) needs rearrangement. **The correct algebraic identity for Example 2 is:**

$$\frac{\sqrt{t^2 + 9} - 3}{t^2} \cdot \frac{\sqrt{t^2 + 9} + 3}{\sqrt{t^2 + 9} + 3} = \frac{(t^2 + 9) - 9}{t^2(\sqrt{t^2 + 9} + 3)} = \frac{1}{\sqrt{t^2 + 9} + 3}$$

This simplified form has **no subtraction of close values** and evaluates cleanly to $\dfrac{1}{\sqrt{9} + 3} = \dfrac{1}{6}$ at $t = 0$. Always look for algebraic reformulation before trusting numerical tables — especially when floating-point gets nervous.

---

### Example 3 — A famous limit: $\lim_{x \to 0} \sin(x)/x$

Guess the value of $\displaystyle \lim_{x \to 0} \frac{\sin x}{x}$.

***Solution.*** The function $f(x) = \sin(x)/x$ isn't defined at $x = 0$. Remembering $\sin x$ means the sine of the angle **in radians**, tabulate (to eight decimal places):

| $x$ | $\sin(x)/x$ |
|:---:|:---:|
| $\pm 1.0$ | 0.84147098 |
| $\pm 0.5$ | 0.95885108 |
| $\pm 0.4$ | 0.97354586 |
| $\pm 0.3$ | 0.98506736 |
| $\pm 0.2$ | 0.99334665 |
| $\pm 0.1$ | 0.99833417 |
| $\pm 0.05$ | 0.99958339 |
| $\pm 0.01$ | 0.99998333 |
| $\pm 0.005$ | 0.99999583 |
| $\pm 0.001$ | 0.99999983 |

**Conjecture:**

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

> **Figure 6 — Graph of $y = \sin(x)/x$.** A smooth bell-shaped curve peaking near $(0, 1)$ with a **hole** at the origin. Even though the function is undefined at 0, the graph passes seamlessly through $y = 1$ at $x = 0$.

```plot
{
  "title": "Figure 6 — y = sin(x)/x approaches 1 as x → 0",
  "width": 520, "height": 340,
  "xRange": [-10, 10], "yRange": [-0.4, 1.2],
  "xStep": 2, "yStep": 0.25,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sin(x)/x", "domain": [-10, -0.001], "color": "#b04a2f", "width": 2.2, "samples": 800},
    {"fn": "sin(x)/x", "domain": [0.001, 10],   "color": "#b04a2f", "width": 2.2, "samples": 800}
  ],
  "points": [
    {"x": 0, "y": 1, "style": "open", "color": "#b04a2f", "label": "hole at (0, 1)", "labelDx": 12, "labelDy": -6}
  ],
  "caption": "Undefined at x = 0, yet the curve seamlessly heads to 1 from both sides."
}
```

**This guess is correct**, and will be proved rigorously in Chapter 3 using a geometric argument.

**Why this limit is famous.** $\sin(x)/x \to 1$ as $x \to 0$ is *the* reason derivatives of trig functions come out clean. The derivative of $\sin x$ being $\cos x$ — a fundamental fact that makes all of harmonic analysis, Fourier theory, and signals processing work — ultimately reduces to this limit. Worth remembering.

---

### Example 4 — A limit that doesn't exist (wild oscillation)

Investigate $\displaystyle \lim_{x \to 0} \sin\!\left(\frac{\pi}{x}\right)$.

***Solution.*** The function $f(x) = \sin(\pi/x)$ is undefined at 0. Try plugging in some convenient small values:

$$f(1) = \sin \pi = 0 \qquad f\!\left(\tfrac{1}{2}\right) = \sin 2\pi = 0 \qquad f\!\left(\tfrac{1}{3}\right) = \sin 3\pi = 0 \qquad f\!\left(\tfrac{1}{4}\right) = \sin 4\pi = 0$$

$$f(0.1) = \sin 10\pi = 0 \qquad f(0.01) = \sin 100\pi = 0$$

Similarly $f(0.001) = 0$ and $f(0.0001) = 0$. **On the basis of this information we might be tempted to guess that $\lim_{x \to 0} \sin(\pi/x) = 0$.**

**But this time our guess is wrong.**

Note that although $f(1/n) = \sin(n\pi) = 0$ for any integer $n$, **it is also true that $f(x) = 1$ for infinitely many values of $x$ that approach 0** — namely $x = 2/(4k+1)$ for integers $k$.

> **Figure 7 — $y = \sin(\pi/x)$.** Between 0 and 1, the function oscillates between $-1$ and $+1$ infinitely many times, with oscillations becoming arbitrarily compressed as $x \to 0^+$. A similar pattern on the negative side. No well-defined limiting value.

```plot
{
  "title": "Figure 7 — y = sin(π/x): oscillates wildly as x → 0",
  "width": 520, "height": 340,
  "xRange": [-1, 1], "yRange": [-1.3, 1.3],
  "xStep": 0.25, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sin(PI/x)", "domain": [-1, -0.01], "color": "#b04a2f", "width": 1.6, "samples": 4000},
    {"fn": "sin(PI/x)", "domain": [0.01, 1],   "color": "#b04a2f", "width": 1.6, "samples": 4000}
  ],
  "caption": "The values hit +1 and −1 infinitely often on every neighborhood of 0. No single number is being approached, so the limit does not exist."
}
```

Since the values of $f(x)$ do not approach a fixed number as $x$ approaches 0:

$$\lim_{x \to 0} \sin\!\left(\frac{\pi}{x}\right) \quad \text{does NOT exist}$$

**The lesson: "checking a few values and eyeballing" is not a proof.** If you pick the wrong values (here, $x = 1/n$) they all happen to give 0, making you think the limit is 0. The function's behavior *between* your sampled points tells the true story.

**This is precisely why Stewart builds to the ε-δ definition in Section 2.4.** Intuitive reasoning and numerical tables can mislead you; rigorous definition cannot.

---

### Example 5 — Another calculator trap: hidden small contributions

Find $\displaystyle \lim_{x \to 0}\left(x^3 + \frac{\cos 5x}{10{,}000}\right)$.

***Solution.*** First table:

| $x$ | $x^3 + \cos(5x)/10{,}000$ |
|:---:|:---:|
| 1 | 1.000028 |
| 0.5 | 0.124920 |
| 0.1 | 0.001088 |
| 0.05 | 0.000222 |
| 0.01 | 0.000101 |

Naïve guess: values are dropping to 0, so limit is 0.

**But if we persevere with smaller values of $x$:**

| $x$ | $x^3 + \cos(5x)/10{,}000$ |
|:---:|:---:|
| 0.005 | 0.00010009 |
| 0.001 | 0.00010000 |

**The values are now settling at $0.0001 = 1/10{,}000$**, not 0. In fact:

$$\lim_{x \to 0}\left(x^3 + \frac{\cos 5x}{10{,}000}\right) = \frac{1}{10{,}000} = 0.0001$$

because $x^3 \to 0$ and $\cos(5x) \to \cos(0) = 1$, so the sum approaches $0 + 1/10{,}000$.

**What the first table was hiding.** For $x = 1$, the term $x^3 = 1$ dominates. For $x = 0.1$, $x^3 = 0.001$ still dominates $0.0001$. You need $x \lesssim 0.01$ before the $1/10{,}000$ becomes comparable to $x^3$. The "limit" revealed itself only once you zoomed in past the dominant term.

**Pitfalls summarized — why intuition fails.** From Examples 4 and 5:
> **CAUTION.** Examples 4 and 5 illustrate some of the **pitfalls in guessing the value of a limit**. It is easy to guess the wrong value if we use inappropriate values of $x$, but it is difficult to know when to stop calculating values. And, as the discussion after Example 2 shows, sometimes calculators and computers give the wrong values. In the next section, however, we will develop foolproof methods for calculating limits.

---

### Example 6 — The Heaviside function: a limit that doesn't exist because of a jump

The **Heaviside function** $H$ is defined by

$$H(t) = \begin{cases} 0 & \text{if } t < 0 \\ 1 & \text{if } t \geq 0 \end{cases}$$

(Named after the electrical engineer Oliver Heaviside, 1850–1925. Used to describe an electric current switched on at time $t = 0$.)

> **Figure 8 — Graph of $H(t)$.** A horizontal line at $y = 0$ for $t < 0$, then a jump to $y = 1$ for $t \geq 0$. The two pieces are connected by an abrupt vertical transition at $t = 0$ — a **jump discontinuity**.

```plot
{
  "title": "Figure 8 — the Heaviside step function H(t)",
  "width": 520, "height": 300,
  "xRange": [-3, 3], "yRange": [-0.4, 1.6],
  "xStep": 1, "yStep": 0.5,
  "xLabel": "t", "yLabel": "H(t)",
  "curves": [
    {
      "piecewise": [
        {"fn": "0", "domain": [-3, 0], "endpoints": ["closed", "open"]},
        {"fn": "1", "domain": [0, 3],  "endpoints": ["closed", "closed"]}
      ],
      "color": "#b04a2f", "width": 2.4
    }
  ],
  "caption": "Left-limit at 0 is 0; right-limit at 0 is 1. They disagree, so the two-sided limit lim_{t→0} H(t) does not exist."
}
```

As $t$ approaches 0 from the left, $H(t)$ approaches 0. As $t$ approaches 0 from the right, $H(t)$ approaches 1. **There is no single number that $H(t)$ approaches as $t \to 0$.**

Therefore $\lim_{t \to 0} H(t)$ does not exist.

---

## One-Sided Limits

Example 6 revealed a structure worth naming. The left and right approaches give different values — each well-defined on its own, but disagreeing. We give these one-sided limits their own notation and definition.

### Definition — left-hand limit

> **Definition 2 (left-hand limit).** We write
> $$\lim_{x \to a^-} f(x) = L$$
> and say the **left-hand limit of $f(x)$ as $x$ approaches $a$** (or the **limit of $f(x)$ as $x$ approaches $a$ from the left**) is equal to $L$ if we can make the values of $f(x)$ arbitrarily close to $L$ by taking $x$ to be sufficiently close to $a$ and $x$ **less than $a$**.

### Right-hand limit (analogous)

If we require that $x$ be greater than $a$, we get the **right-hand limit of $f(x)$ as $x$ approaches $a$**:

$$\lim_{x \to a^+} f(x) = L$$

**Notation reminders:**
- "$x \to a^-$" means "$x$ approaches $a$ with $x < a$" (from the left / from below).
- "$x \to a^+$" means "$x$ approaches $a$ with $x > a$" (from the right / from above).

> **Figure 9 — The two one-sided limits visualized.**
> - **(a) Left limit $\lim_{x \to a^-} f(x) = L$:** the curve approaches height $L$ as $x$ moves in from the left (arrow pointing right, ending at $a$). The value $f(x)$ is shown approaching $L$ from the appropriate side.
> - **(b) Right limit $\lim_{x \to a^+} f(x) = L$:** the curve approaches height $L$ as $x$ moves in from the right (arrow pointing left, ending at $a$).

<figure class="plot-figure">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 250" role="img" aria-label="Left one-sided limit and right one-sided limit at x = a">
  <defs>
    <marker id="fig9-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 Z" fill="#2867b2"/>
    </marker>
  </defs>
  <g font-family="'Times New Roman', Times, serif" font-size="13" fill="#1f2430">
    <g transform="translate(20 20)">
      <text x="140" y="0" font-size="12" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" fill="#5b6477" font-style="italic">(a) left-hand limit</text>
      <line x1="20" y1="180" x2="270" y2="180" stroke="#1f2430" stroke-width="1.3"/>
      <line x1="20" y1="20"  x2="20"  y2="180" stroke="#1f2430" stroke-width="1.3"/>
      <path d="M 25 150 Q 90 110, 170 85" fill="none" stroke="#b04a2f" stroke-width="2.2"/>
      <circle cx="170" cy="85" r="4.5" fill="#fdfcf6" stroke="#b04a2f" stroke-width="1.8"/>
      <line x1="20"  y1="85"  x2="170" y2="85" stroke="#888" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="170" y1="180" x2="170" y2="85" stroke="#888" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="60"  y1="204" x2="155" y2="204" stroke="#2867b2" stroke-width="1.8" marker-end="url(#fig9-arrow)"/>
      <text x="170" y="196" text-anchor="middle" font-style="italic">a</text>
      <text x="15"  y="88"   text-anchor="end"    font-style="italic">L</text>
      <text x="170" y="74"  font-style="italic" text-anchor="middle" fill="#2867b2">x → a⁻</text>
    </g>
    <g transform="translate(330 20)">
      <text x="140" y="0" font-size="12" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" fill="#5b6477" font-style="italic">(b) right-hand limit</text>
      <line x1="20" y1="180" x2="270" y2="180" stroke="#1f2430" stroke-width="1.3"/>
      <line x1="20" y1="20"  x2="20"  y2="180" stroke="#1f2430" stroke-width="1.3"/>
      <path d="M 260 145 Q 200 105, 130 85" fill="none" stroke="#b04a2f" stroke-width="2.2"/>
      <circle cx="130" cy="85" r="4.5" fill="#fdfcf6" stroke="#b04a2f" stroke-width="1.8"/>
      <line x1="20"  y1="85"  x2="130" y2="85" stroke="#888" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="130" y1="180" x2="130" y2="85" stroke="#888" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="235" y1="204" x2="145" y2="204" stroke="#2867b2" stroke-width="1.8" marker-end="url(#fig9-arrow)"/>
      <text x="130" y="196" text-anchor="middle" font-style="italic">a</text>
      <text x="15"  y="88"   text-anchor="end"    font-style="italic">L</text>
      <text x="130" y="74"  font-style="italic" text-anchor="middle" fill="#2867b2">x → a⁺</text>
    </g>
  </g>
</svg>
<figcaption>Left-hand limit: close in from below a. Right-hand limit: close in from above a. When both exist and are equal, that common value is the two-sided limit.</figcaption>
</figure>

### The two-sided / one-sided relationship

By comparing Definition 1 with the one-sided definitions, we see this fundamental theorem:

> **Equation 3 — Two-sided limit via one-sided limits.**
> $$\lim_{x \to a} f(x) = L \quad \Longleftrightarrow \quad \lim_{x \to a^-} f(x) = L \ \text{ and } \ \lim_{x \to a^+} f(x) = L$$

**In words: the two-sided limit exists and equals $L$ if and only if both one-sided limits exist and agree on the value $L$.**

**This is the official "limit exists" criterion.** Whenever you're asked whether $\lim_{x\to a} f(x)$ exists:
1. Compute $\lim_{x\to a^-} f(x)$ and $\lim_{x\to a^+} f(x)$ separately.
2. If they exist and are equal, the two-sided limit is their common value.
3. If they differ, or if either doesn't exist, the two-sided limit doesn't exist.

For the Heaviside function: $\lim_{t \to 0^-} H(t) = 0$ and $\lim_{t \to 0^+} H(t) = 1$. They differ, so $\lim_{t \to 0} H(t)$ doesn't exist. ✓

---

### Example 7 — Reading one-sided limits from a graph

The graph of a function $g$ is shown. Use it to state the values (if they exist) of:

(a) $\displaystyle \lim_{x \to 2^-} g(x)$ &nbsp;&nbsp;&nbsp; (b) $\displaystyle \lim_{x \to 2^+} g(x)$ &nbsp;&nbsp;&nbsp; (c) $\displaystyle \lim_{x \to 2} g(x)$

(d) $\displaystyle \lim_{x \to 5^-} g(x)$ &nbsp;&nbsp;&nbsp; (e) $\displaystyle \lim_{x \to 5^+} g(x)$ &nbsp;&nbsp;&nbsp; (f) $\displaystyle \lim_{x \to 5} g(x)$

> **Figure 10 — Graph of $y = g(x)$.** Grid from $x = 0$ to $x = 5$, $y = 0$ to $y = 4$. The curve consists of two smooth arcs:
> - **Left piece:** rises from the origin, reaches a peak around $(1.5, 3.5)$, then descends approaching $y = 3$ as $x \to 2^-$. At $x = 2$ there's an **open circle** at $(2, 3)$ (the left limit value) and the curve jumps.
> - **Right piece:** starts at $(2, 1)$ with an **open circle** (so $g(2)$ is not 1 either — there's a separate **solid dot** elsewhere suggesting $g(2)$ is some third value). Rises from 1 up through to $(5, 2)$ where it ends on an open circle.
> - **Further right:** a second arc from $(5, 2)$ open circle to beyond, with a **solid dot** showing $g(5)$ explicitly equals some value near 2 as well. Both one-sided limits at $x = 5$ agree.

```plot
{
  "title": "Figure 10 — graph of g for Example 7",
  "width": 540, "height": 360,
  "xRange": [-0.3, 6.3], "yRange": [-0.3, 4.3],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {
      "piecewise": [
        {"fn": "-1.5*(x - 1.5)*(x - 1.5) + 3.375", "domain": [0, 2], "endpoints": ["closed", "open"]},
        {"fn": "1 + (x - 2)/3",                    "domain": [2, 5], "endpoints": ["open", "open"]},
        {"fn": "2 + 0.3*(x - 5)",                  "domain": [5, 6.2], "endpoints": ["open", "closed"]}
      ],
      "color": "#b04a2f", "width": 2.3
    }
  ],
  "points": [
    {"x": 2, "y": 2, "style": "filled", "color": "#1f2430", "label": "g(2)", "labelDx": 10, "labelDy": -6},
    {"x": 5, "y": 3, "style": "filled", "color": "#1f2430", "label": "g(5)", "labelDx": 10, "labelDy": -6}
  ],
  "caption": "At x = 2, left-limit is 3 and right-limit is 1 — two-sided limit does not exist. At x = 5, both one-sided limits equal 2, so lim_{x→5} g(x) = 2 even though g(5) = 3."
}
```

***Solution.***

**(a) $\lim_{x \to 2^-} g(x) = 3$.** As $x$ approaches 2 from the left, the curve's values approach 3.

**(b) $\lim_{x \to 2^+} g(x) = 1$.** As $x$ approaches 2 from the right, the curve's values approach 1.

**(c) $\lim_{x \to 2} g(x)$ does not exist**, since the left and right limits are different.

**(d) $\lim_{x \to 5^-} g(x) = 2$.**

**(e) $\lim_{x \to 5^+} g(x) = 2$.**

**(f) $\lim_{x \to 5} g(x) = 2$**, since the left and right limits agree. This is despite the fact that $g(5)$ itself might be a different value (as shown by the solid dot in the figure) — **the limit only cares about neighborhood behavior, not the value at $5$.**

**Re-emphasizing the key distinction.** In part (f), the limit equals 2, but $g(5)$ might be anything (e.g., 3). These are **different questions**. $\lim_{x \to 5} g(x) = 2$ says "values approach 2 as $x \to 5$." $g(5) = 3$ says "the function's value at the point is 3." Both can be true simultaneously — this is exactly Figure 2(b) from earlier. The function is defined at the point but takes a value different from the limit.

**When $f(a) = \lim_{x \to a} f(x)$**, we call the function **continuous at $a$** — this is Section 2.5. When the limit exists but differs from $f(a)$, or when $f(a)$ isn't even defined, we have a **removable discontinuity**.

---

*End of Unit 2a. Unit 2b continues with infinite limits, vertical asymptotes, and more examples — the second half of Section 2.2 before the exercise set.*
