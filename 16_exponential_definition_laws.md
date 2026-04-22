# Section 1.5 — Exponential Functions

*Covers pp. 52 bottom – 55 top of the book (PDF pp. 80 mid – 83 top). The theoretical development: defining $a^x$ for integer, rational, and irrational exponents; the family of exponential graphs; the Laws of Exponents; two worked examples. The APPLICATIONS sub-section and THE NUMBER $e$ become Unit 2.*

---

## Section 1.5 — Exponential Functions

The function $f(x) = 2^x$ is called an **exponential function** because the variable $x$ is the *exponent*. It should not be confused with the power function $g(x) = x^2$, in which the variable is the *base*.

*Margin note: In Appendix G we present an alternative approach to the exponential and logarithmic functions using integral calculus.*

> **Definition.** An **exponential function** is a function of the form
> $$f(x) = a^x$$
> where $a$ is a positive constant.

---

## Defining $a^x$ — from integer exponents to real exponents

Stewart walks through the extension of $a^x$ from the simplest case (integer $x$) to the general case (real $x$). This is the kind of thing you normally take for granted, but it's worth understanding how the domain gets enlarged in stages.

### Integer exponents

**Positive integer $n$:**
$$a^n = \underbrace{a \cdot a \cdot \cdots \cdot a}_{n \text{ factors}}$$

**Zero and negative integers:**
$$a^0 = 1, \qquad a^{-n} = \frac{1}{a^n}$$

### Rational exponents

If $x = p/q$ is a rational number with $p, q \in \mathbb{Z}$ and $q > 0$:

$$a^{p/q} = \sqrt[q]{a^p} = (\sqrt[q]{a})^p$$

(Both forms agree because fractional exponents and radicals are the same operation.)

### Irrational exponents — the subtle case

What does $2^{\sqrt{3}}$ or $5^\pi$ mean? We only know how to handle rational exponents so far.

**The trick is to "squeeze" the irrational by rational approximations.** Since $\sqrt{3} = 1.7320508\ldots$, we have

$$1.7 < \sqrt{3} < 1.8 \quad\implies\quad 2^{1.7} < 2^{\sqrt{3}} < 2^{1.8}$$

$$1.73 < \sqrt{3} < 1.74 \quad\implies\quad 2^{1.73} < 2^{\sqrt{3}} < 2^{1.74}$$

$$1.732 < \sqrt{3} < 1.733 \quad\implies\quad 2^{1.732} < 2^{\sqrt{3}} < 2^{1.733}$$

$$1.7320 < \sqrt{3} < 1.7321 \quad\implies\quad 2^{1.7320} < 2^{\sqrt{3}} < 2^{1.7321}$$

$$1.73205 < \sqrt{3} < 1.73206 \quad\implies\quad 2^{1.73205} < 2^{\sqrt{3}} < 2^{1.73206}$$

$$\vdots$$

**It can be shown that there is exactly one number that is greater than all the numbers $2^{1.7}, 2^{1.73}, 2^{1.732}, 2^{1.7320}, 2^{1.73205}, \ldots$ and less than all the numbers $2^{1.8}, 2^{1.74}, 2^{1.733}, 2^{1.7321}, 2^{1.73206}, \ldots$. We define $2^{\sqrt{3}}$ to be this number.**

Using this approximation process:

$$2^{\sqrt{3}} \approx 3.321997$$

*Margin note: A proof of this fact is given in J. Marsden and A. Weinstein,* Calculus Unlimited *(Menlo Park, CA: Benjamin/Cummings, 1981). For an online version, see www.cds.caltech.edu/~marsden/volume/cu/CU.pdf.*

**What's really going on mathematically.** The rigorous definition of $a^x$ for irrational $x$ requires the **completeness axiom** of the real numbers — the same axiom that guarantees every Cauchy sequence converges, every bounded-above set has a least upper bound, every Dedekind cut determines a real number. Stewart waves at it; Rudin's *Principles of Mathematical Analysis* fills in the proof. For now it's enough to know: **the definition works because $\mathbb{R}$ is complete.** This quiet use of completeness is your first encounter with the deep axiom underlying all of real analysis.

> **Figure 1 — Representation of $y = 2^x$ for $x$ rational.** An ascending curve sketched with tiny gaps at the irrational $x$-values — visually, a curve with "holes."

> **Figure 2 — $y = 2^x$ for $x$ real.** Same curve, now with all the holes filled in. This is the continuous extension we just constructed.

---

## The family of exponential functions

> **Figure 3 — The family $y = a^x$ for various bases.** Six curves on the same axes:
> - $y = \left(\tfrac{1}{2}\right)^x$ and $y = \left(\tfrac{1}{4}\right)^x$ on the left — **decaying** (bases $< 1$). Larger denominators decay faster.
> - $y = 1^x$ — horizontal line at $y = 1$ (degenerate case).
> - $y = 1.5^x$, $y = 2^x$, $y = 4^x$, $y = 10^x$ on the right — **growing** (bases $> 1$). Larger bases grow faster.
> - All six curves pass through the single point $(0, 1)$ because $a^0 = 1$ for any $a \neq 0$.

```plot
{
  "title": "Figure 3 — y = aˣ for a = ¼, ½, 1, 1.5, 2, 4, 10",
  "width": 540, "height": 380,
  "xRange": [-2.5, 2.5], "yRange": [-1, 8],
  "xStep": 0.5, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "pow(0.25, x)", "color": "#6b3aa0", "width": 1.8},
    {"fn": "pow(0.5,  x)", "color": "#2867b2", "width": 1.8},
    {"fn": "1",            "color": "#888",    "width": 1.4, "dash": "5 4"},
    {"fn": "pow(1.5,  x)", "color": "#5a8f3a", "width": 1.8},
    {"fn": "pow(2,    x)", "color": "#c87d3b", "width": 1.8},
    {"fn": "pow(4,    x)", "color": "#b04a2f", "width": 1.8},
    {"fn": "pow(10,   x)", "color": "#7a2515", "width": 1.8}
  ],
  "annotations": [
    {"x": -2.0, "y": 7.3, "text": "(¼)ˣ",  "color": "#6b3aa0"},
    {"x": -2.4, "y": 4.3, "text": "(½)ˣ",  "color": "#2867b2"},
    {"x":  2.05,"y": 1.1, "text": "1ˣ",    "color": "#666"},
    {"x":  2.05,"y": 2.5, "text": "1.5ˣ",  "color": "#5a8f3a"},
    {"x":  2.05,"y": 4.2, "text": "2ˣ",    "color": "#c87d3b"},
    {"x":  1.50,"y": 6.5, "text": "4ˣ",    "color": "#b04a2f"},
    {"x":  0.85,"y": 7.4, "text": "10ˣ",   "color": "#7a2515"}
  ],
  "points": [
    {"x": 0, "y": 1, "style": "filled", "color": "#1f2430", "r": 3, "label": "(0, 1)", "labelDx": 8, "labelDy": 14}
  ]
}
```

**The three cases of $y = a^x$** (summarized in Figure 4):

| Base | Behavior | Graph |
|------|----------|-------|
| $0 < a < 1$ | **Decreasing** (decays) | Downward-sloping curve from upper-left, approaching $x$-axis as $x \to \infty$ |
| $a = 1$ | Constant | Horizontal line $y = 1$ |
| $a > 1$ | **Increasing** (grows) | Upward-sloping curve, approaching $x$-axis as $x \to -\infty$ |

> **Figure 4.** Three panels showing (a) $y = a^x$ with $0 < a < 1$: decaying curve through $(0, 1)$; (b) $y = 1^x$: horizontal line; (c) $y = a^x$ with $a > 1$: growing curve through $(0, 1)$.

```plot
{
  "title": "Figure 4(a) — y = aˣ, 0 < a < 1 (here a = 1/2)",
  "width": 420, "height": 260,
  "xRange": [-3, 3], "yRange": [-0.5, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [{"fn": "pow(0.5, x)", "domain": [-3, 3], "color": "#b04a2f", "width": 2.2}],
  "points": [{"x": 0, "y": 1, "style": "filled", "color": "#1f2430", "label": "(0, 1)", "labelDx": 8, "labelDy": -6}],
  "caption": "Decaying: values fall as x increases; x-axis is a horizontal asymptote as x → ∞."
}
```

```plot
{
  "title": "Figure 4(b) — y = 1ˣ (constant)",
  "width": 420, "height": 260,
  "xRange": [-3, 3], "yRange": [-0.5, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [{"fn": "1", "domain": [-3, 3], "color": "#b04a2f", "width": 2.2}],
  "points": [{"x": 0, "y": 1, "style": "filled", "color": "#1f2430", "label": "(0, 1)", "labelDx": 8, "labelDy": -6}],
  "caption": "Degenerate case: 1ˣ = 1 for every x."
}
```

```plot
{
  "title": "Figure 4(c) — y = aˣ, a > 1 (here a = 2)",
  "width": 420, "height": 260,
  "xRange": [-3, 3], "yRange": [-0.5, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [{"fn": "pow(2, x)", "domain": [-3, 3], "color": "#b04a2f", "width": 2.2}],
  "points": [{"x": 0, "y": 1, "style": "filled", "color": "#1f2430", "label": "(0, 1)", "labelDx": 8, "labelDy": -6}],
  "caption": "Growing: values rise as x increases; x-axis is a horizontal asymptote as x → −∞."
}
```

**Key facts for any $a > 0$ with $a \neq 1$:**

$$\text{domain} = \mathbb{R} = (-\infty, \infty), \qquad \text{range} = (0, \infty)$$

The function **never hits zero, never goes negative**. The $x$-axis is a horizontal asymptote.

**Reflection identity.** Since $(1/a)^x = 1/a^x = a^{-x}$, the graph of $y = (1/a)^x$ is the reflection of $y = a^x$ about the $y$-axis. So Figure 3's left-side curves are the mirror images of the right-side ones — the decay and growth cases are not independent phenomena, just two faces of the same function family.

*Margin note: If $0 < a < 1$, then $a^x$ approaches 0 as $x$ becomes large. If $a > 1$, then $a^x$ approaches 0 as $x$ decreases through negative values. In both cases the $x$-axis is a horizontal asymptote. These matters are discussed in Section 2.6.*

---

## Laws of Exponents

One reason the exponential function is important lies in these properties. The laws are well-known for rational $x, y$ and can be proved to remain true for arbitrary real $x, y$ (see Appendix G).

> **Laws of Exponents.** If $a$ and $b$ are positive numbers and $x$ and $y$ are any real numbers, then:
> $$1. \quad a^{x + y} = a^x\,a^y \qquad\qquad 2. \quad a^{x - y} = \frac{a^x}{a^y}$$
> $$3. \quad (a^x)^y = a^{xy} \qquad\qquad 4. \quad (ab)^x = a^x\,b^x$$

**Operational reading of the four laws:**
1. **Addition in the exponent ↔ multiplication of bases.** This is the single most important property of exponentials — it's why $\log$ turns products into sums, it's why compound interest compounds, it's why continuous-compounding formulas have exponentials.
2. **Subtraction in the exponent ↔ division.** Follows from Law 1.
3. **Nested exponents multiply.** $(a^2)^3 = a^{2 \cdot 3} = a^6$, etc.
4. **Exponents distribute over products** (but *not* over sums — there's no $(a + b)^x$ simplification here).

**Law 1 is the whole reason exponentials model multiplicative processes.** Population after $t_1 + t_2$ years = (population after $t_1$ years) × (growth factor for $t_2$ years). Position along a tree of compounded returns factors the same way. The functional equation $f(x + y) = f(x) f(y)$ — along with continuity — uniquely determines $f(x) = a^x$ for some base $a$. This characterization is worth knowing.

---

## Example 1 — Graph $y = 3 - 2^x$ using transformations

Sketch the graph of the function $y = 3 - 2^x$ and determine its domain and range.

***Solution.*** Three transformation steps starting from $y = 2^x$:

1. Start with $y = 2^x$ (Figure 5(a)).
2. Reflect about the $x$-axis to get $y = -2^x$ (Figure 5(b)).
3. Shift up by 3 to get $y = 3 - 2^x$ (Figure 5(c)).

**Domain:** $\mathbb{R}$ (same as $2^x$).

**Range:** Since $2^x > 0$, we have $-2^x < 0$, so $3 - 2^x < 3$. And as $x \to -\infty$, $2^x \to 0$, so $3 - 2^x \to 3^-$ (approaches 3 from below). As $x \to \infty$, $2^x \to \infty$, so $3 - 2^x \to -\infty$.

$$\text{range} = (-\infty, 3)$$

> **Figure 5 — Transforming $y = 2^x$ into $y = 3 - 2^x$.**
> - **(a) $y = 2^x$:** Growing exponential, passing through $(0, 1)$.
> - **(b) $y = -2^x$:** Same shape reflected downward, passing through $(0, -1)$. Range $(-\infty, 0)$.
> - **(c) $y = 3 - 2^x$:** Panel (b) shifted up 3. Passes through $(0, 2)$. Horizontal asymptote at $y = 3$ as $x \to -\infty$. Goes to $-\infty$ as $x \to \infty$.

```plot
{
  "title": "Figure 5a — y = 2ˣ",
  "width": 460, "height": 280,
  "xRange": [-3, 3], "yRange": [-1, 8],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "pow(2, x)", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 0, "y": 1, "style": "filled", "color": "#1f2430", "label": "(0, 1)", "labelDx": -8, "labelDy": -8}
  ]
}
```

```plot
{
  "title": "Figure 5b — y = −2ˣ",
  "width": 460, "height": 280,
  "xRange": [-3, 3], "yRange": [-8, 1],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "-pow(2, x)", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 0, "y": -1, "style": "filled", "color": "#1f2430", "label": "(0, −1)", "labelDx": -8, "labelDy": 14}
  ]
}
```

```plot
{
  "title": "Figure 5c — y = 3 − 2ˣ",
  "width": 460, "height": 320,
  "xRange": [-3, 4], "yRange": [-6, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "3 - pow(2, x)", "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "horizontal", "y": 3, "color": "#888", "dash": "5 4"}
  ],
  "points": [
    {"x": 0, "y": 2, "style": "filled", "color": "#1f2430", "label": "(0, 2)", "labelDx": 8, "labelDy": -8}
  ],
  "annotations": [
    {"x": 3.8, "y": 3.4, "text": "y = 3 (asymptote)", "color": "#666", "anchor": "end", "italic": false}
  ]
}
```

---

## Example 2 — Exponential vs. power function: who grows faster?

Use a graphing device to compare the exponential function $f(x) = 2^x$ and the power function $g(x) = x^2$. Which grows more quickly when $x$ is large?

***Solution.*** Plot both in the window $[-2, 6] \times [0, 40]$.

> **Figure 6 — Local view, $[-2, 6] \times [0, 40]$.** The curves intersect **three times** in this window. For a while the power function $x^2$ is larger; in the middle region they cross back and forth; by $x > 4$ the exponential $2^x$ pulls decisively above the power function.

```plot
{
  "title": "Figure 6 — y = 2ˣ vs. y = x², local view",
  "width": 540, "height": 360,
  "xRange": [-2, 6], "yRange": [0, 40],
  "xStep": 1, "yStep": 5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "pow(2, x)", "color": "#b04a2f", "width": 2.0},
    {"fn": "x*x",       "color": "#2867b2", "width": 2.0}
  ],
  "annotations": [
    {"x": 5.8, "y": 36, "text": "2ˣ", "color": "#b04a2f", "anchor": "end"},
    {"x": 5.8, "y": 28, "text": "x²", "color": "#2867b2", "anchor": "end"}
  ]
}
```

Widen to $[0, 8] \times [0, 250]$:

> **Figure 7 — Global view, $[0, 8] \times [0, 250]$.** The exponential has surged far above the power function. At $x = 8$: $2^8 = 256$, while $8^2 = 64$. The gap widens without bound.

```plot
{
  "title": "Figure 7 — y = 2ˣ vs. y = x², global view",
  "width": 540, "height": 360,
  "xRange": [0, 8], "yRange": [0, 260],
  "xStep": 1, "yStep": 50,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "pow(2, x)", "color": "#b04a2f", "width": 2.2},
    {"fn": "x*x",       "color": "#2867b2", "width": 2.2}
  ],
  "annotations": [
    {"x": 7.8, "y": 240, "text": "2ˣ", "color": "#b04a2f", "anchor": "end"},
    {"x": 7.8, "y":  55, "text": "x²", "color": "#2867b2", "anchor": "end"}
  ]
}
```

**The general fact** (will be proved rigorously with limits in Chapter 2, with L'Hôpital's in Chapter 4): for any $a > 1$ and any $n > 0$,

$$\lim_{x \to \infty} \frac{x^n}{a^x} = 0$$

In words: **every exponential eventually dominates every polynomial**, no matter how steep the polynomial. $x^{100}$ loses to $1.01^x$ for $x$ large enough.

*Margin note: Example 2 shows that $y = 2^x$ increases more quickly than $y = x^2$. To demonstrate just how quickly $f(x) = 2^x$ increases, let's perform the following thought experiment. Suppose we start with a piece of paper a thousandth of an inch thick and we fold it in half 50 times. Each time we fold the paper in half, the thickness of the paper doubles, so the thickness of the resulting paper would be $2^{50}/1000$ inches. How thick do you think that is? It works out to be more than 17 million miles!*

**Why exponential dominance matters for your quant track specifically.**
- **Asymptotic complexity.** Exponential-time algorithms ($2^n$) are computationally infeasible for anything but tiny $n$; polynomial-time algorithms ($n^k$) remain tractable. The dominance theorem is why "P vs. NP" cares about polynomial-time reductions specifically.
- **Tail probability bounds.** Gaussian tails decay like $e^{-x^2/2}$; polynomial tails (heavy-tailed distributions like Cauchy or power-law) decay like $x^{-\alpha}$. A Gaussian eventually has much thinner tails than any power law. The dominance theorem is the mathematical reason why Gaussian assumptions under-weight extreme events in fat-tailed financial data.
- **Interest compounding.** $P(1 + r)^t$ vs. $P + rPt$ — the first (compound) eventually dominates the second (simple) no matter how small $r$ is. Exponential growth is the relentless force that makes time-in-market beat timing-the-market.

---

*End of Unit 1. Unit 2 covers the APPLICATIONS sub-section (population models) and THE NUMBER $e$ (the natural base).*
