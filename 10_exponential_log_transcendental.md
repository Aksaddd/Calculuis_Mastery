# Section 1.2 — Exponential, Logarithmic, and Transcendental Functions

*Covers pp. 33 bottom – 34 (top through Example 5) of the book (PDF pp. 61 bottom – 62 top 2/3). Two more transcendental families — exponentials $a^x$ and logarithms $\log_a x$ — plus Stewart's wrap-up definition of "transcendental function" and a classification example. This closes out Section 1.2's exposition; Exercises follow as Unit 6.*

---

## Exponential Functions

> **Definition.** The **exponential functions** are the functions of the form
> $$f(x) = a^x$$
> where the **base** $a$ is a positive constant.

**Domain and range.** For any positive base $a \neq 1$:

$$\text{domain} = (-\infty, \infty), \qquad \text{range} = (0, \infty)$$

The function never touches zero, never goes negative, and is defined for *every* real $x$ (including irrational ones — extending $a^x$ from rational to real $x$ is handled carefully in Section 1.5).

> **Figure 20 — Two exponential graphs.**
> - **(a) $y = 2^x$** (growth, $a > 1$). Passes through $(0, 1)$ and $(1, 2)$. As $x \to -\infty$ the graph hugs the $x$-axis (horizontal asymptote); as $x \to +\infty$ it climbs without bound, with concavity upward throughout.
> - **(b) $y = (0.5)^x$** (decay, $0 < a < 1$). Mirror image of (a) reflected across the $y$-axis. Passes through $(0, 1)$ and $(1, 0.5)$. As $x \to -\infty$ it climbs without bound; as $x \to +\infty$ it hugs the $x$-axis.

```plot
{
  "title": "Figure 20a — y = 2ˣ (growth)",
  "width": 460, "height": 320,
  "xRange": [-3, 4], "yRange": [-1, 8],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "pow(2, x)", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 0, "y": 1, "style": "filled", "color": "#1f2430", "label": "(0, 1)", "labelDx": -8, "labelDy": -8},
    {"x": 1, "y": 2, "style": "filled", "color": "#1f2430", "label": "(1, 2)", "labelDx": 8, "labelDy": -8}
  ]
}
```

```plot
{
  "title": "Figure 20b — y = (0.5)ˣ (decay)",
  "width": 460, "height": 320,
  "xRange": [-4, 3], "yRange": [-1, 8],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "pow(0.5, x)", "color": "#2867b2", "width": 2.2}
  ],
  "points": [
    {"x": 0, "y": 1,   "style": "filled", "color": "#1f2430", "label": "(0, 1)",   "labelDx": 8, "labelDy": -8},
    {"x": 1, "y": 0.5, "style": "filled", "color": "#1f2430", "label": "(1, 0.5)", "labelDx": 8, "labelDy": -8}
  ]
}
```

**Modeling intuition.** Exponentials arise whenever the *rate of change* of a quantity is proportional to the quantity itself — "the more you have, the faster it grows" (or decays).

- **$a > 1$:** growth. Population under unlimited resources; compound interest; viral spread (early phase before saturation); any autocatalytic process.
- **$a < 1$:** decay. Radioactive half-life; drug elimination pharmacokinetics; capacitor discharge.

*Exponential functions will be studied in detail in Section 1.5.*

**Power functions vs. exponential functions — don't confuse them.** Stewart does not harp on this, but it's the single most common categorization error:

- **Power function:** $f(x) = x^a$ — variable is the **base**, constant is the exponent.
- **Exponential function:** $f(x) = a^x$ — constant is the base, variable is the **exponent**.

The growth rates are wildly different:
- $x^{100}$ grows polynomially — eventually bounded by any exponential.
- $2^x$ grows exponentially — eventually exceeds any polynomial, no matter how large the exponent.

In asymptotic analysis (relevant to algorithm complexity and to tail probability bounds), we say $x^n = o(a^x)$ for any $a > 1$, $n > 0$. This is the reason polynomial-time algorithms are tractable and exponential-time algorithms aren't.

---

## Logarithmic Functions

> **Definition.** The **logarithmic functions** $f(x) = \log_a x$, where the base $a$ is a positive constant (and $a \neq 1$), are the **inverse functions** of the exponential functions.

Formally:

$$y = \log_a x \quad \Longleftrightarrow \quad x = a^y$$

**Domain and range.** Swapped from the exponential:

$$\text{domain} = (0, \infty), \qquad \text{range} = (-\infty, \infty)$$

(You can only take the log of a positive number; the log can output any real value.)

> **Figure 21 — Four logarithmic graphs, all with base $> 1$.** Stacked on the same axes: $y = \log_2 x, \log_3 x, \log_5 x, \log_{10} x$.
> - **Shared features.** All four pass through $(1, 0)$ (since $\log_a 1 = 0$ for any base). All four are defined only for $x > 0$. All four approach $-\infty$ as $x \to 0^+$ (vertical asymptote at the $y$-axis). All four are increasing.
> - **Ordering for $x > 1$:** $\log_2 x > \log_3 x > \log_5 x > \log_{10} x$ — smaller base gives steeper ascent.
> - **Ordering for $0 < x < 1$:** reversed — smaller base dives faster to $-\infty$.
> - The curves all increase **slowly** for $x > 1$ — log growth is the paradigm of "technically unbounded but practically boring."

```plot
{
  "title": "Figure 21 — y = log₂ x, log₃ x, log₅ x, log₁₀ x",
  "width": 520, "height": 340,
  "xRange": [-0.5, 8], "yRange": [-3, 3],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "log(x) / log(2)",  "domain": [0.05, 8], "color": "#b04a2f", "width": 1.8},
    {"fn": "log(x) / log(3)",  "domain": [0.05, 8], "color": "#c87d3b", "width": 1.8},
    {"fn": "log(x) / log(5)",  "domain": [0.05, 8], "color": "#5a8f3a", "width": 1.8},
    {"fn": "log(x) / log(10)", "domain": [0.05, 8], "color": "#2867b2", "width": 1.8}
  ],
  "annotations": [
    {"x": 7.5, "y": 2.95, "text": "log₂ x",  "color": "#b04a2f", "anchor": "end"},
    {"x": 7.5, "y": 1.85, "text": "log₃ x",  "color": "#c87d3b", "anchor": "end"},
    {"x": 7.5, "y": 1.30, "text": "log₅ x",  "color": "#5a8f3a", "anchor": "end"},
    {"x": 7.5, "y": 0.95, "text": "log₁₀ x", "color": "#2867b2", "anchor": "end"}
  ],
  "points": [
    {"x": 1, "y": 0, "style": "filled", "color": "#1f2430", "r": 3, "label": "(1, 0)", "labelDx": 8, "labelDy": -8}
  ]
}
```

*Logarithmic functions will be studied in detail in Section 1.6.*

**Why logarithms are the natural inverse of exponentials — informally.** If an exponential solves "given time, find population" ($P = P_0 \cdot a^t$), a logarithm solves "given population, find time" ($t = \log_a(P/P_0)$). Every growth/decay problem you solve comes in this pair — forward model is exponential, inverse model is logarithmic.

**Why logarithms are ubiquitous in quant work specifically.**
- **Log-returns** $r_t = \log(P_t/P_{t-1})$ are additive across time (daily log-returns sum to the multi-day log-return), symmetric in direction, and better-approximated by Gaussian distributions than simple returns. Pretty much every piece of academic finance uses log-returns.
- **Log-likelihood** in MLE turns products of probabilities into sums, which turns optimization of joint likelihoods into tractable gradient descent.
- **Entropy** in information theory: $H = -\sum p_i \log p_i$ — the log is not decorative, it's the unique function that makes information additive over independent events.

---

## Transcendental Functions

> **Definition.** **Transcendental functions** are functions that are **not algebraic**.

The set of transcendental functions includes:

- trigonometric functions ($\sin, \cos, \tan, \ldots$),
- inverse trigonometric functions ($\arcsin, \arccos, \arctan, \ldots$),
- exponential functions ($a^x$),
- logarithmic functions ($\log_a x$),

and **a vast number of other functions that have never been named.** The named ones are just the tiny sliver that showed up repeatedly in applications and earned their own symbols.

In Chapter 11 we will study transcendental functions that are defined as **sums of infinite series** — Taylor series, power series, Fourier series. That machinery is what allows us to work with functions like $\sin, e^x, \ln$ rigorously: *by* the power series, not merely *because* they have a geometric intuition.

---

### Example 5 — Classifying functions by family

Classify the following functions as one of the types we've discussed.

**(a)** $f(x) = 5^x$

**(b)** $g(x) = x^5$

**(c)** $h(x) = \dfrac{1 + x}{1 - \sqrt{x}}$

**(d)** $u(t) = 1 - t + 5t^4$

***Solution.***

**(a)** $f(x) = 5^x$ is an **exponential function**. The $x$ is the *exponent*; the base is the constant 5.

**(b)** $g(x) = x^5$ is a **power function**. The $x$ is the *base*; the exponent is the constant 5. Equivalently, since the exponent is a positive integer, this can also be called a **polynomial of degree 5** — the two classifications are consistent, and in this specific case both apply.

**(c)** $h(x) = \dfrac{1 + x}{1 - \sqrt{x}}$ is an **algebraic function**. Numerator is polynomial; denominator involves a square root (not polynomial, but algebraic). The whole quotient is built from polynomials using $+, -, \div, \sqrt{\phantom{x}}$ — so algebraic by definition. It is *not* rational, because $\sqrt{x}$ is not a polynomial.

**(d)** $u(t) = 1 - t + 5t^4$ is a **polynomial of degree 4**. Highest-power term is $5t^4$ (coefficient $5$, exponent $4$).

**Classification hierarchy as a check** — use the strictest type that fits:

$$\underbrace{\text{polynomial}}_{\text{(d)}} \ \subsetneq \ \text{rational} \ \subsetneq \ \underbrace{\text{algebraic}}_{\text{(c)}} \ \subsetneq \ \text{all real functions}$$

Power functions $x^a$ fall into different strata depending on $a$ — if $a$ is a nonnegative integer they're polynomials (as with (b)); if $a$ is a ratio of integers they're algebraic; if $a$ is irrational (e.g., $x^\pi$) they're transcendental.

Exponentials and logs (like (a)) sit entirely outside the algebraic tower — that's the transcendental branch.

---

## Closing thought on the catalog

The function families covered in Section 1.2:

| Family | Form | Hierarchy |
|--------|------|-----------|
| Linear | $mx + b$ | polynomial (degree 1) |
| Quadratic | $ax^2 + bx + c$ | polynomial (degree 2) |
| Polynomial | $a_n x^n + \cdots + a_0$ | algebraic |
| Power | $x^a$ | algebraic if $a \in \mathbb{Q}$; else transcendental |
| Rational | $P(x)/Q(x)$ | algebraic |
| Algebraic | any finite combination with roots | algebraic |
| Trigonometric | $\sin, \cos, \tan, \ldots$ | transcendental |
| Exponential | $a^x$ | transcendental |
| Logarithmic | $\log_a x$ | transcendental |

These are the atoms. Section 1.3 (next section of the textbook) covers how to **combine and transform** them — shifts, stretches, composition, and arithmetic combinations — to build the richer function library you actually use in practice.

---

*End of Unit 5. Section 1.2 exposition is complete. Unit 6 is Exercises 1–26.*
