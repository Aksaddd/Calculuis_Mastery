# Section 2.8 — The Derivative as a Function (Part B): Differentiability vs Continuity, Higher Derivatives, and Exercises

*Covers pp. 157–165 of the book (PDF pp. 185 mid – 193 top). The structural relationship between differentiability and continuity (Theorem 4), the three canonical failure modes of differentiability (corner, discontinuity, vertical tangent), higher derivatives (velocity, acceleration, jerk), and all 57 exercises.*

---

## Theorem 4 — Differentiable Implies Continuous

Both continuity and differentiability are desirable properties for a function to have. The following theorem shows how these properties are related.

> **Theorem 4.** If $f$ is differentiable at $a$, then $f$ is continuous at $a$.

### Proof

To prove that $f$ is continuous at $a$, we have to show that $\lim_{x \to a}f(x) = f(a)$. We do this by showing that the difference $f(x) - f(a)$ approaches 0.

**Starting from the given information:** $f$ is differentiable at $a$, which means

$$f'(a) = \lim_{x \to a}\frac{f(x) - f(a)}{x - a}$$

exists (by Equation 2.7.5, the $x \to a$ form).

**Key trick — multiply and divide by $(x - a)$:** when $x \neq a$,

$$f(x) - f(a) = \frac{f(x) - f(a)}{x - a}\,(x - a)$$

Thus, using the Product Law (and Equation 2.7.5):

$$\lim_{x \to a}[f(x) - f(a)] = \lim_{x \to a}\frac{f(x) - f(a)}{x - a}\,(x - a) = \lim_{x \to a}\frac{f(x) - f(a)}{x - a} \cdot \lim_{x \to a}(x - a) = f'(a) \cdot 0 = 0$$

**Now add and subtract $f(a)$:**

$$\lim_{x \to a}f(x) = \lim_{x \to a}[f(a) + (f(x) - f(a))] = \lim_{x \to a}f(a) + \lim_{x \to a}[f(x) - f(a)] = f(a) + 0 = f(a)$$

Therefore $f$ is continuous at $a$. $\blacksquare$

### The converse is FALSE

> **Note.** The converse of Theorem 4 is false; that is, there are functions that are continuous but not differentiable.

For instance, $f(x) = |x|$ is continuous at 0 because $\lim_{x \to 0}f(x) = \lim_{x \to 0}|x| = 0 = f(0)$ (Section 2.3 Example 7). But in Example 5 we showed that $f$ is not differentiable at 0.

**Differentiability is a *strictly stronger* property than continuity.** Differentiable $\Rightarrow$ continuous, but not conversely. The set of differentiable functions is a subset of continuous functions.

> **The implication chain so far:**
> $$\text{differentiable} \implies \text{continuous} \implies \text{limit exists}$$
> All three sets are nested. Each implication is one-way; the converses fail.

---

## How Can a Function Fail to Be Differentiable?

We saw that $|x|$ is not differentiable at 0 because of a **corner**. Theorem 4 gives another way: **if $f$ is not continuous at $a$, then $f$ is not differentiable at $a$.** And there's a third way: **vertical tangent**.

### The three failure modes

**(1) A corner (or "kink").** If the graph of $f$ has a corner or kink, then the graph has no tangent at that point and $f$ is not differentiable there. (In trying to compute $f'(a)$, we find that the left and right limits of the difference quotient are different.)

**Prototype:** $f(x) = |x|$ at $x = 0$ (Example 5).

**(2) A discontinuity.** So at any discontinuity (for instance, a jump discontinuity), $f$ fails to be differentiable. Theorem 4 (contrapositive): not continuous $\Rightarrow$ not differentiable.

**Prototype:** a step function $f(x) = \llbracket x \rrbracket$ (the floor function) — not differentiable at integers.

**(3) A vertical tangent.** A third possibility is that the curve has a **vertical tangent line** when $x = a$; that is, $f$ is continuous at $a$ and

$$\lim_{x \to a}|f'(x)| = \infty$$

**This means that the tangent lines become steeper and steeper as $x \to a$.**

**Prototype:** $f(x) = \sqrt[3]{x}$ at $x = 0$. As $x \to 0$, the tangent line to $y = \sqrt[3]{x}$ becomes vertical (slope → ∞). Compute:
- $f'(x) = \frac{1}{3}x^{-2/3} = \dfrac{1}{3\sqrt[3]{x^2}}$
- $\lim_{x \to 0}|f'(x)| = \infty$

So the derivative "fails to exist as a finite number" at $x = 0$.

### Summary figure

> **Figure 7 — The three ways $f$ can fail to be differentiable at $a$.**
> - **(a) A corner.** Cusp-shaped graph meeting at a sharp point at $(a, f(a))$. Left side has one slope, right side has another; no unique tangent.
> - **(b) A discontinuity.** Graph with a jump break at $x = a$ (solid dot on one side, open dot on the other). Function isn't even continuous there.
> - **(c) A vertical tangent.** Smooth curve passing through $(a, f(a))$ but with a vertical tangent line — the graph is "infinitely steep" at that single point.

```plot
{
  "title": "Figure 7(a) — corner",
  "width": 420, "height": 240,
  "xRange": [-2, 2], "yRange": [-0.5, 2.5],
  "xStep": 1, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [{"fn": "abs(x)", "domain": [-2, 2], "color": "#b04a2f", "width": 2.3}],
  "points": [{"x": 0, "y": 0, "style": "filled", "color": "#1f2430"}],
  "caption": "(a) Left slope ≠ right slope — no unique tangent at the corner."
}
```

```plot
{
  "title": "Figure 7(b) — discontinuity",
  "width": 420, "height": 240,
  "xRange": [-2, 2], "yRange": [-1, 3],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {
      "piecewise": [
        {"fn": "x + 1", "domain": [-2, 0], "endpoints": ["closed", "closed"]},
        {"fn": "x + 2", "domain": [0, 2],  "endpoints": ["open", "closed"]}
      ],
      "color": "#b04a2f", "width": 2.3
    }
  ],
  "caption": "(b) Not continuous at 0 → not differentiable at 0 (Theorem 4 contrapositive)."
}
```

```plot
{
  "title": "Figure 7(c) — vertical tangent",
  "width": 420, "height": 240,
  "xRange": [-2, 2], "yRange": [-1.5, 1.5],
  "xStep": 1, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "-pow(-x, 1/3)", "domain": [-2, 0],  "color": "#b04a2f", "width": 2.3, "samples": 400},
    {"fn": "pow(x, 1/3)",    "domain": [0, 2],   "color": "#b04a2f", "width": 2.3, "samples": 400}
  ],
  "points": [{"x": 0, "y": 0, "style": "filled", "color": "#1f2430"}],
  "caption": "(c) Continuous at 0, but the tangent is vertical — slope is infinite, not a number."
}
```

> **Figure 6 — Vertical tangent illustrated.** A smooth curve that passes through the point $(a, f(a))$ continuously but whose tangent line is vertical at that point — the slope is undefined (or ∞).

```plot
{
  "title": "Figure 6 — y = ∛x has a vertical tangent at (0, 0)",
  "width": 520, "height": 300,
  "xRange": [-2, 2], "yRange": [-1.5, 1.5],
  "xStep": 0.5, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "-pow(-x, 1/3)", "domain": [-2, 0], "color": "#b04a2f", "width": 2.3, "samples": 500},
    {"fn": "pow(x, 1/3)",    "domain": [0, 2],  "color": "#b04a2f", "width": 2.3, "samples": 500}
  ],
  "lines": [
    {"type": "vertical", "x": 0, "yRange": [-1.2, 1.2], "color": "#2867b2", "width": 1.6, "dash": "4 3"}
  ],
  "points": [{"x": 0, "y": 0, "style": "filled", "color": "#1f2430"}],
  "caption": "Slope of ∛x blows up at 0: f'(x) = 1/(3x^{2/3}) → ∞. The vertical dashed line IS the tangent — but verticality means no well-defined slope."
}
```

### The zooming-in diagnostic

A graphing calculator or computer provides another way of looking at differentiability:

**If $f$ is differentiable at $a$:** when we zoom in toward the point $(a, f(a))$, the graph **straightens out** and appears more and more like a line (the tangent). See Figure 8. We saw a specific example of this in Figure 2 of Section 2.7 (the $x^2$ at $(1, 1)$ zoom-in).

**If $f$ is not differentiable at $a$:** no matter how much we zoom in toward a point like the ones in Figures 6 and 7(a), **we can't eliminate the sharp point or corner** (see Figure 9). The corner persists at any magnification.

> **Figure 8 — Differentiable point under zoom.** Successive zooms on the graph of a differentiable function at a point: outer view shows the curved graph; inner zooms show it straightening into a line.

```plot
{
  "title": "Figure 8(i) — y = 0.5x² + 0.5 at (1, 1) — outer view",
  "width": 420, "height": 240,
  "xRange": [-0.5, 2.5], "yRange": [0, 3],
  "xStep": 0.5, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [{"fn": "0.5*x*x + 0.5", "domain": [-0.5, 2.5], "color": "#b04a2f", "width": 2.2}],
  "points": [{"x": 1, "y": 1, "style": "filled", "color": "#1f2430"}],
  "caption": "(i) Curve clearly bends."
}
```

```plot
{
  "title": "Figure 8(ii) — zoom [0.5, 1.5] × [0.6, 1.4]",
  "width": 420, "height": 240,
  "xRange": [0.5, 1.5], "yRange": [0.6, 1.4],
  "xStep": 0.25, "yStep": 0.2,
  "xLabel": "x", "yLabel": "y",
  "curves": [{"fn": "0.5*x*x + 0.5", "domain": [0.5, 1.5], "color": "#b04a2f", "width": 2.2}],
  "points": [{"x": 1, "y": 1, "style": "filled", "color": "#1f2430"}],
  "caption": "(ii) Bend is subtler."
}
```

```plot
{
  "title": "Figure 8(iii) — zoom [0.9, 1.1] × [0.92, 1.08]",
  "width": 420, "height": 240,
  "xRange": [0.9, 1.1], "yRange": [0.92, 1.08],
  "xStep": 0.05, "yStep": 0.04,
  "xLabel": "x", "yLabel": "y",
  "curves": [{"fn": "0.5*x*x + 0.5", "domain": [0.9, 1.1], "color": "#b04a2f", "width": 2.2}],
  "points": [{"x": 1, "y": 1, "style": "filled", "color": "#1f2430"}],
  "caption": "(iii) Indistinguishable from a straight line — differentiable at (1, 1)."
}
```

> **Figure 9 — Non-differentiable point under zoom.** Successive zooms on a corner: outer view shows the corner; inner zooms show the corner persists at every scale — the graph never looks like a line locally.

```plot
{
  "title": "Figure 9(i) — y = |x| at (0, 0) — outer view",
  "width": 420, "height": 240,
  "xRange": [-2, 2], "yRange": [-0.2, 2],
  "xStep": 1, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [{"fn": "abs(x)", "domain": [-2, 2], "color": "#b04a2f", "width": 2.3}],
  "points": [{"x": 0, "y": 0, "style": "filled", "color": "#1f2430"}],
  "caption": "(i) Sharp corner at origin."
}
```

```plot
{
  "title": "Figure 9(ii) — zoom [−0.5, 0.5] × [−0.1, 0.5]",
  "width": 420, "height": 240,
  "xRange": [-0.5, 0.5], "yRange": [-0.1, 0.5],
  "xStep": 0.25, "yStep": 0.1,
  "xLabel": "x", "yLabel": "y",
  "curves": [{"fn": "abs(x)", "domain": [-0.5, 0.5], "color": "#b04a2f", "width": 2.3}],
  "points": [{"x": 0, "y": 0, "style": "filled", "color": "#1f2430"}],
  "caption": "(ii) Still a corner, just smaller."
}
```

```plot
{
  "title": "Figure 9(iii) — zoom [−0.1, 0.1] × [−0.02, 0.1]",
  "width": 420, "height": 240,
  "xRange": [-0.1, 0.1], "yRange": [-0.02, 0.1],
  "xStep": 0.05, "yStep": 0.02,
  "xLabel": "x", "yLabel": "y",
  "curves": [{"fn": "abs(x)", "domain": [-0.1, 0.1], "color": "#b04a2f", "width": 2.3}],
  "points": [{"x": 0, "y": 0, "style": "filled", "color": "#1f2430"}],
  "caption": "(iii) The corner never smooths out. Non-differentiable at 0."
}
```

**Intuitive test:** "Is this function differentiable here?" becomes "Can I zoom in until the graph looks like a line?"

### Differentiability in financial engineering

**Each failure mode has a concrete financial analog:**

- **Corners** — payoff functions at strike prices. A European call option's payoff $\max(S - K, 0)$ has a corner at $S = K$; it's continuous but not differentiable there.
- **Discontinuities** — bond coupon payment dates, dividend ex-dates. Price drops by exactly the coupon/dividend amount, so $V$ has a jump at those times.
- **Vertical tangents** — model blow-up boundaries. Certain stochastic volatility models have vertical-tangent behavior near pathological parameter regimes.

**Why it matters:** risk models that assume full differentiability (smoothness) can break at these pathologies. **Delta hedging a short call option near the strike at expiration is a nightmare** precisely because Gamma ($\partial^2 V/\partial S^2$) blows up — a vertical-tangent-like pathology in the Delta. This is why option market makers close out short-strike positions well before expiry, and why path-dependent derivatives need careful numerical treatment.

---

## Higher Derivatives

If $f$ is a differentiable function, then its derivative $f'$ is also a function, so $f'$ may have a derivative of its own, denoted by $(f')' = f''$. This new function $f''$ is called the **second derivative of $f$** because it is the derivative of the derivative of $f$.

**Using Leibniz notation, we write the second derivative of $y = f(x)$ as:**

$$\frac{d}{dx}\!\left(\frac{dy}{dx}\right) = \frac{d^2 y}{dx^2}$$

### Example 6 — Second derivative of $x^3 - x$

If $f(x) = x^3 - x$, find and interpret $f''(x)$.

***Solution.*** In Example 2 we found that the first derivative is $f'(x) = 3x^2 - 1$. So the second derivative is:

$$f''(x) = (f')'(x) = \lim_{h \to 0}\frac{f'(x + h) - f'(x)}{h} = \lim_{h \to 0}\frac{[3(x + h)^2 - 1] - [3x^2 - 1]}{h}$$

Expand $(x + h)^2 = x^2 + 2xh + h^2$:

$$= \lim_{h \to 0}\frac{3x^2 + 6xh + 3h^2 - 1 - 3x^2 + 1}{h} = \lim_{h \to 0}\frac{6xh + 3h^2}{h} = \lim_{h \to 0}(6x + 3h) = 6x$$

**So $f''(x) = 6x$.**

### Interpretation

> **Figure 10 — Three graphs on one screen: $f$, $f'$, $f''$.**
> - $f(x) = x^3 - x$ (cubic, labeled $f$) — S-shaped.
> - $f'(x) = 3x^2 - 1$ (labeled $f'$) — parabola.
> - $f''(x) = 6x$ (labeled $f''$) — straight line through origin.
>
> **Conceptual check:** $f''$ is negative when $f'$ has negative slope (the parabola is decreasing, for $x < 0$); $f''$ is positive when $f'$ has positive slope (for $x > 0$). **So the second derivative graph $f''$ is consistent with differentiating $f'$.**

```plot
{
  "title": "Figure 10 — f, f', f'' on one screen for f(x) = x³ − x",
  "width": 560, "height": 360,
  "xRange": [-2, 2], "yRange": [-8, 8],
  "xStep": 0.5, "yStep": 2,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x*x - x", "domain": [-2, 2], "color": "#b04a2f", "width": 2.2},
    {"fn": "3*x*x - 1", "domain": [-2, 2], "color": "#2867b2", "width": 2.0},
    {"fn": "6*x",       "domain": [-2, 2], "color": "#1f9d55", "width": 2.0, "dash": "4 3"}
  ],
  "annotations": [
    {"x": 1.9, "y": 5.9,  "text": "f",   "color": "#b04a2f", "italic": true, "anchor": "end"},
    {"x": 1.9, "y": 11,   "text": "f'",  "color": "#2867b2", "italic": true, "anchor": "end"},
    {"x": 1.3, "y": 7.7,  "text": "f''", "color": "#1f9d55", "italic": true, "anchor": "end"}
  ],
  "caption": "f' is 0 where f has horizontal tangents (±1/√3); f'' is 0 where f' has its minimum (x = 0) — differentiating is consistent across the chain."
}
```

We can interpret $f''(x)$ as the **slope of the curve $y = f'(x)$** at the point $(x, f'(x))$. In other words, it is the **rate of change of the slope of the original curve $y = f(x)$**.

**Notice from Figure 10** that $f''(x)$ is **negative when $y = f'(x)$ has negative slope** and **positive when $y = f'(x)$ has positive slope**. So the graphs serve as a check on our calculations.

*Margin note: TEC Module 2.8 — Changing the coefficients of a polynomial $f$ shows how it affects the appearance of the graphs of $f$, $f'$, and $f''$.*

### Interpretation: rate of change of a rate of change

In general, we can interpret a second derivative as a **rate of change of a rate of change**. The most familiar example is **acceleration**, which we define as follows.

If $s = s(t)$ is the position function of an object that moves in a straight line, we know that its first derivative represents the velocity $v(t)$:

$$v(t) = s'(t) = \frac{ds}{dt}$$

The instantaneous rate of change of velocity with respect to time is called the **acceleration $a(t)$** of the object. Thus the acceleration function is the derivative of the velocity function and is therefore the second derivative of the position function:

$$a(t) = v'(t) = s''(t) \quad \text{or, in Leibniz notation,} \quad a = \frac{dv}{dt} = \frac{d^2 s}{dt^2}$$

### Third derivatives — and jerk

The **third derivative $f'''$** is the derivative of the second derivative: $f''' = (f'')'$. So $f'''(x)$ can be interpreted as the slope of the curve $y = f''(x)$ or as the rate of change of $f''(x)$.

**Alternative notations** for the third derivative of $y = f(x)$:

$$y''' = f'''(x) = \frac{d}{dx}\!\left(\frac{d^2 y}{dx^2}\right) = \frac{d^3 y}{dx^3}$$

**The process can be continued.** The fourth derivative $f''''$ is usually denoted by $f^{(4)}$. In general, the $n$-th derivative of $f$ is denoted by $f^{(n)}$ and is obtained from $f$ by differentiating $n$ times. If $y = f(x)$, we write:

$$y^{(n)} = f^{(n)}(x) = \frac{d^n y}{dx^n}$$

---

### Example 7 — Third and fourth derivatives of $x^3 - x$

If $f(x) = x^3 - x$, find $f'''(x)$ and $f^{(4)}(x)$.

***Solution.*** In Example 6 we found that $f''(x) = 6x$. The graph of the second derivative has equation $y = 6x$ and so it is a straight line with slope 6. Since the derivative $f'''(x)$ is the slope of $f''(x)$, we have:

$$f'''(x) = 6$$

for all values of $x$. So $f'''$ is a constant function and its graph is a horizontal line. Therefore, for all values of $x$:

$$f^{(4)}(x) = 0$$

**The pattern.** For polynomial functions, derivatives eventually hit zero. $f(x) = x^3 - x$ has derivatives $3x^2 - 1, 6x, 6, 0, 0, 0, \ldots$ — after the third derivative, everything is zero.

**For polynomial of degree $n$,** the $n$-th derivative is a constant (the leading coefficient times $n!$), and the $(n+1)$-th derivative is zero.

### Physical interpretation — jerk

We can interpret the **third derivative physically** in the case where the function is the position function $s = s(t)$ of an object that moves along a straight line. Because $s''' = (s'')' = a'$, the third derivative of the position function is the derivative of the acceleration function and is called the **jerk**:

$$j = \frac{da}{dt} = \frac{d^3 s}{dt^3}$$

Thus the jerk $j$ is the rate of change of acceleration. It is aptly named because **a large jerk means a sudden change in acceleration, which causes an abrupt movement in a vehicle.**

**Physical intuition:**
- **Position $s$** — where you are.
- **Velocity $v = s'$** — how fast you're going.
- **Acceleration $a = s'' = v'$** — how fast your speed is changing (felt as G-force in a car).
- **Jerk $j = s''' = a'$** — how fast the G-force is changing (felt as an *abrupt* push or pull; roller coasters have high jerk).

Engineers design elevators, cars, and roller coasters to control jerk — smooth rides have low jerk; rough rides have high jerk. The fourth derivative ("snap") and higher (crackle, pop — yes, really) appear in specialized dynamics and signal-processing contexts.

### Future applications

We have seen that one application of second and third derivatives occurs in analyzing the motion of objects using acceleration and jerk.

**Upcoming uses of higher derivatives:**
- **Section 4.3** — the second derivative tells you about **concavity** (which way the graph bends): $f''> 0$ means concave up, $f'' < 0$ means concave down. Essential for curve-sketching.
- **Chapter 11** — second and higher derivatives enable us to represent functions as sums of infinite series (**Taylor series** and **Maclaurin series**).

**For your quant track,** higher derivatives are specifically where things get interesting:
- **Convexity of bonds** — second derivative of price with respect to yield. Bond traders use it for "convexity adjustment" to refine duration-based hedges.
- **Gamma** — second derivative of option value with respect to underlying price. The "convexity" of the option position.
- **Color** ($\partial \Gamma/\partial t$) and **Speed** ($\partial \Gamma/\partial S$) — third-order Greeks.
- **Taylor expansions of P&L** — portfolio risk often expressed as $\Delta \cdot \Delta S + \frac{1}{2} \Gamma \cdot (\Delta S)^2 + \text{higher-order terms}$, a Taylor series truncation.

**Moral:** higher derivatives aren't academic luxury; they're where second-order effects (the ones that matter for real risk management) come from.

---

## Exercises

*Legend: `[HINT]` = cyan-boxed; `[GRAPH]` = graphing tool.*

---

### Estimating derivative values from a graph (Exercises 1–2)

**1.** Use the given graph to estimate the value of each derivative. Then sketch the graph of $f'$.
- (a) $f'(-3)$ &nbsp; (b) $f'(-2)$ &nbsp; (c) $f'(-1)$ &nbsp; (d) $f'(0)$
- (e) $f'(1)$ &nbsp; (f) $f'(2)$ &nbsp; (g) $f'(3)$

> **Graph provided.** Curve on $[-3, 3]$ with visible max/min features.

**2.** Use the given graph to estimate the value of each derivative. Then sketch the graph of $f'$.
- (a) $f'(0)$ &nbsp; (b) $f'(1)$ &nbsp; (c) $f'(2)$
- (d) $f'(3)$ &nbsp; (e) $f'(4)$ &nbsp; (f) $f'(5)$

> **Graph provided.** Curve on $[0, 5]$ with visible slope variations.

---

### Matching $f$ with $f'$ (Exercise 3)

**3.** `[HINT]` Match the graph of each function in (a)–(d) with the graph of its derivative in I–IV. Give reasons for your choices.

> **Graphs provided.** Four functions (labeled a–d) and four candidate derivatives (I–IV) — you pair them up based on slope-vs-value reasoning.

---

### Sketch $f'$ below $f$ (Exercises 4–11)

**4–11.** Trace or copy the graph of the given function $f$. (Assume that the axes have equal scales.) Then use the method of Example 1 to sketch the graph of $f'$ below it.

**4.** A U-shape (even-like function) with minimum at origin.

**5.** `[HINT]` Increasing then decreasing curve, approximately bell-like on the right.

**6.** Sharp peak near origin with rapid decay.

**7.** Semicircular curve.

**8.** Sharp-bottomed V-like shape.

**9.** Sinusoidal.

**10.** Smooth U with inflection points.

**11.** `[HINT]` S-shape curve approaching horizontal asymptote.

---

### Population/marriage-age tangent estimation (Exercises 12–13)

**12.** Shown is the graph of the population function $P(t)$ for yeast cells in a laboratory culture. Use the method of Example 1 to graph the derivative $P'(t)$. What does the graph of $P'$ tell us about the yeast population?

> **Graph provided.** S-shaped (logistic) curve from $P = 0$ at $t = 0$ approaching $P = 500+$ around $t = 15$ hours.

**13.** The graph shows how the average age of first marriage of Japanese men has varied in the last half of the 20th century. Sketch the graph of the derivative function $M'(t)$. During which years was the derivative negative?

> **Graph provided.** $M(t)$ slowly varying between 25 and 27 years from 1960 to 2000.

---

### Sketch $f'$ for common functions (Exercises 14–16)

**14–16.** Make a careful sketch of the graph of $f$ and below it sketch the graph of $f'$ in the same manner as in Exercises 4–11. Can you guess a formula for $f'(x)$ from its graph?

**14.** $f(x) = \sin x$

**15.** $f(x) = e^x$

**16.** $f(x) = \ln x$

---

### Guess and verify derivative formulas (Exercises 17–18)

**17.** `[HINT]` Let $f(x) = x^2$.
- (a) Estimate the values of $f'(0)$, $f'(\tfrac{1}{2})$, $f'(1)$, and $f'(2)$ by using a graphing device to zoom in on the graph of $f$.
- (b) Use symmetry to deduce the values of $f'(-\tfrac{1}{2})$, $f'(-1)$, and $f'(-2)$.
- (c) Use the results from parts (a) and (b) to guess a formula for $f'(x)$.
- (d) Use the definition of a derivative to prove that your guess in part (c) is correct.

**18.** `[HINT]` Let $f(x) = x^3$.
- (a) Estimate the values of $f'(0)$, $f'(\tfrac{1}{2})$, $f'(1)$, $f'(2)$, and $f'(3)$ by using a graphing device to zoom in on the graph of $f$.
- (b) Use symmetry to deduce the values of $f'(-\tfrac{1}{2})$, $f'(-1)$, $f'(-2)$, and $f'(-3)$.
- (c) Use the values from parts (a) and (b) to graph $f'$.
- (d) Guess a formula for $f'(x)$.
- (e) Use the definition of a derivative to prove that your guess in part (d) is correct.

---

### Find the derivative using the definition (Exercises 19–29)

**19–29.** Find the derivative of the function using the definition of derivative. State the domain of the function and the domain of its derivative.

**19.** $f(x) = \tfrac{1}{2}x - \tfrac{1}{3}$

**20.** $f(x) = mx + b$

**21.** $f(t) = 5t - 9t^2$

**22.** $f(x) = 1.5x^2 - x + 3.7$

**23.** $f(x) = x^3 - 3x + 5$

**24.** $f(x) = x + \sqrt{x}$

**25.** $g(x) = \sqrt{1 + 2x}$

**26.** $f(x) = \dfrac{3 + x}{1 - 3x}$

**27.** `[HINT]` $G(t) = \dfrac{4t}{t + 1}$

**28.** $g(t) = \dfrac{1}{\sqrt{t}}$

**29.** $f(x) = x^4$

---

### Transformed function + graphing (Exercise 30)

**30.**
- (a) Sketch the graph of $f(x) = \sqrt{6 - x}$ by starting with the graph of $y = \sqrt{x}$ and using the transformations of Section 1.3.
- (b) Use the graph from part (a) to sketch the graph of $f'$.
- (c) Use the definition of a derivative to find $f'(x)$. What are the domains of $f$ and $f'$?
- (d) `[GRAPH]` Use a graphing device to graph $f'$ and compare with your sketch in part (b).

---

### Sketch $f'$ with graphing check (Exercises 31–32)

**31.**
- (a) If $f(x) = x^4 + 2x$, find $f'(x)$.
- (b) `[GRAPH]` Check to see that your answer to part (a) is reasonable by comparing the graphs of $f$ and $f'$.

**32.**
- (a) If $f(t) = t^2 - \sqrt{t}$, find $f'(t)$.
- (b) `[GRAPH]` Check to see that your answer to part (a) is reasonable by comparing the graphs of $f$ and $f'$.

---

### Discrete-data derivative estimates (Exercises 33–34)

**33.** `[HINT]` The unemployment rate $U(t)$ varies with time. The table (from the Bureau of Labor Statistics) gives the percentage of unemployed in the US labor force from 1993 to 2002.

| $t$ | $U(t)$ | $t$ | $U(t)$ |
|:---:|:---:|:---:|:---:|
| 1993 | 6.9 | 1998 | 4.5 |
| 1994 | 6.1 | 1999 | 4.2 |
| 1995 | 5.6 | 2000 | 4.0 |
| 1996 | 5.4 | 2001 | 4.7 |
| 1997 | 4.9 | 2002 | 5.8 |

- (a) What is the meaning of $U'(t)$? What are its units?
- (b) Construct a table of values for $U'(t)$.

**34.** Let $P(t)$ be the percentage of Americans under the age of 18 at time $t$. The table gives values of this function in census years from 1950 to 2000.

| $t$ | $P(t)$ | $t$ | $P(t)$ |
|:---:|:---:|:---:|:---:|
| 1950 | 31.1 | 1980 | 28.0 |
| 1960 | 35.7 | 1990 | 25.7 |
| 1970 | 34.0 | 2000 | 25.7 |

- (a) What is the meaning of $P'(t)$? What are its units?
- (b) Construct a table of estimated values for $P'(t)$.
- (c) Graph $P$ and $P'$.
- (d) How would it be possible to get more accurate values for $P'(t)$?

---

### Identify non-differentiable points from graphs (Exercises 35–38)

**35–38.** The graph of $f$ is given. State, with reasons, the numbers at which $f$ is not differentiable.

**35.** `[HINT]` > Graph shows two pieces meeting at a corner at $x = -2$.

**36.** > Graph shows a cusp/corner at origin and smooth curve around $x = 4$.

**37.** > Graph shows dramatic slope change at $x = 0$ and peak around $x = -2$ and $x = 4$.

**38.** > Graph shows corner/discontinuity features near $x = -2$, $x = 0$, and $x = 2$.

---

### Zoom-test differentiability (Exercises 39–40)

**39.** `[GRAPH]` Graph the function $f(x) = x + \sqrt{|x|}$. Zoom in repeatedly, first toward the point $(-1, 0)$ and then toward the origin. What is different about the behavior of $f$ in the vicinity of these two points? What do you conclude about the differentiability of $f$?

**40.** `[GRAPH]` Zoom in toward the points $(1, 0)$, $(0, 1)$, and $(-1, 0)$ on the graph of the function $g(x) = (x^2 - 1)^{2/3}$. What do you notice? Account for what you see in terms of the differentiability of $g$.

---

### Match $f, f', f''$ (Exercises 41–42)

**41.** `[HINT]` The figure shows the graphs of $f$, $f'$, and $f''$. Identify each curve, and explain your choices.

> **Graph provided.** Three curves labeled $a, b, c$.

**42.** The figure shows graphs of $f$, $f'$, $f''$, and $f'''$. Identify each curve, and explain your choices.

> **Graph provided.** Four curves labeled $a, b, c, d$.

---

### Match position / velocity / acceleration / jerk (Exercises 43–44)

**43.** The figure shows the graphs of three functions. One is the position function of a car, one is the velocity of the car, and one is its acceleration. Identify each curve, and explain your choices.

> **Graph provided.** Three curves on one time axis.

**44.** The figure shows the graphs of four functions. One is the position function of a car, one is the velocity of the car, one is its acceleration, and one is its jerk. Identify each curve, and explain your choices.

> **Graph provided.** Four curves on one time axis.

---

### Find $f'(x)$ and $f''(x)$ (Exercises 45–46)

**45–46.** Use the definition of a derivative to find $f'(x)$ and $f''(x)$. Then graph $f$, $f'$, and $f''$ on a common screen and check to see if your answers are reasonable.

**45.** $f(x) = 1 + 4x - x^2$

**46.** $f(x) = 1/x$

---

### Hit zero in four differentiations (Exercise 47)

**47.** `[HINT][GRAPH]` If $f(x) = 2x^2 - x^3$, find $f'(x)$, $f''(x)$, $f'''(x)$, and $f^{(4)}(x)$. Graph $f$, $f'$, $f''$, and $f'''$ on a common screen. Are the graphs consistent with the geometric interpretations of these derivatives?

---

### Estimate acceleration and jerk from position graph (Exercise 48)

**48.**
- (a) The graph of a position function of a car is shown, where $s$ is measured in feet and $t$ in seconds. Use it to graph the velocity and acceleration of the car. What is the acceleration at $t = 10$ seconds?
- (b) Use the acceleration curve from part (a) to estimate the jerk at $t = 10$ seconds. What are the units for jerk?

> **Graph provided.** Position function increasing and accelerating.

---

### Cube root and vertical tangent (Exercises 49–50)

**49.** Let $f(x) = \sqrt[3]{x}$.
- (a) If $a \neq 0$, use Equation 2.7.5 to find $f'(a)$.
- (b) Show that $f'(0)$ does not exist.
- (c) Show that $y = \sqrt[3]{x}$ has a vertical tangent line at $(0, 0)$. (Recall the shape of the graph of $f$. See Figure 13 in Section 1.2.)

**50.**
- (a) If $g(x) = x^{2/3}$, show that $g'(0)$ does not exist.
- (b) If $a \neq 0$, find $g'(a)$.
- (c) Show that $y = x^{2/3}$ has a vertical tangent line at $(0, 0)$.
- (d) `[GRAPH]` Illustrate part (c) by graphing $y = x^{2/3}$.

---

### $|x - 6|$ and the floor function (Exercises 51–52)

**51.** `[HINT]` Show that the function $f(x) = |x - 6|$ is not differentiable at 6. Find a formula for $f'$ and sketch its graph.

**52.** Where is the greatest integer function $f(x) = \llbracket x \rrbracket$ not differentiable? Find a formula for $f'$ and sketch its graph.

---

### Piecewise definition and differentiability (Exercise 53)

**53.** `[HINT]`
- (a) Sketch the graph of the function $f(x) = x|x|$.
- (b) For what values of $x$ is $f$ differentiable?
- (c) Find a formula for $f'$.

---

### One-sided derivatives (Exercise 54)

**54.** The **left-hand** and **right-hand derivatives** of $f$ at $a$ are defined by
$$f'_-(a) = \lim_{h \to 0^-}\frac{f(a + h) - f(a)}{h}$$
$$f'_+(a) = \lim_{h \to 0^+}\frac{f(a + h) - f(a)}{h}$$
if these limits exist. Then $f'(a)$ exists if and only if these one-sided derivatives exist and are equal.

(a) Find $f'_-(4)$ and $f'_+(4)$ for the function
$$f(x) = \begin{cases} 0 & \text{if } x \leq 0 \\ 5 - x & \text{if } 0 < x < 4 \\ \dfrac{1}{5 - x} & \text{if } x \geq 4 \end{cases}$$
(b) Sketch the graph of $f$.
(c) Where is $f$ discontinuous?
(d) Where is $f$ not differentiable?

---

### Even/odd function derivatives (Exercise 55)

**55.** Recall that a function $f$ is called **even** if $f(-x) = f(x)$ for all $x$ in its domain and **odd** if $f(-x) = -f(x)$ for all such $x$. Prove each of the following.
- (a) The derivative of an even function is an odd function.
- (b) The derivative of an odd function is an even function.

---

### Faucet temperature (Exercise 56)

**56.** When you turn on a hot-water faucet, the temperature $T$ of the water depends on how long the water has been running.
- (a) Sketch a possible graph of $T$ as a function of the time $t$ that has elapsed since the faucet was turned on.
- (b) Describe how the rate of change of $T$ with respect to $t$ varies as $t$ increases.
- (c) Sketch a graph of the derivative of $T$.

---

### Angle of inclination (Exercise 57)

**57.** Let $\ell$ be the tangent line to the parabola $y = x^2$ at the point $(1, 1)$. The **angle of inclination** of $\ell$ is the angle $\phi$ that $\ell$ makes with the positive direction of the $x$-axis. Calculate $\phi$ correct to the nearest degree.

---

*This closes Section 2.8 Exercises.*

## Priority gradient

Section 2.8 exercises cluster around four skills: **graphical differentiation**, **algebraic differentiation from the definition**, **differentiability diagnosis**, and **higher-derivative computation**.

**Highest value — the core skills:**

- **Exercises 4, 5, 11** — graphical differentiation (sketch $f'$ under $f$). Pick 2. Builds the visual intuition that slope-at-a-point maps to height-on-derivative-graph.
- **Exercises 23, 26, 27** — differentiate a polynomial, a rational function, and a radical function using the definition. **Do all three**: they're the three difficulty levels of the Chapter 3 toolkit.
- **Exercises 17 and 18** — guess-and-verify derivative formulas for $x^2$ and $x^3$. **This is the Power Rule discovery moment.** $f(x) = x^n$ gives $f'(x) = n x^{n-1}$ emerges as a pattern. The exercises literally walk you through *discovering* the Power Rule. Do both.
- **Exercise 49** — $\sqrt[3]{x}$ has a vertical tangent at 0. Critical example of the "derivative fails to exist at continuity point" failure mode.
- **Exercise 51** — $|x - 6|$ derivative is the sign function centered at 6. Classic corner-at-translation example.
- **Exercise 53** — $f(x) = x|x|$ is differentiable everywhere including 0, with $f'(x) = 2|x|$. **Unexpected** — even though $|x|$ is not differentiable at 0, multiplying by $x$ repairs the non-differentiability. This is the prototype of "smooth by multiplication" — similar to why $x^2 \sin(1/x)$ is differentiable at 0 even though $\sin(1/x)$ itself oscillates wildly.

**High value — higher derivatives and classification:**

- **Exercises 35–38** — identify non-differentiable points from graphs. Pick 2. Train your eye to spot corners, discontinuities, and vertical tangents visually.
- **Exercise 41 or 42** — match $f, f', f''$ (and $f'''$ for 42) from a set of curves. Essential for reading multi-derivative plots. Pick one.
- **Exercise 43 or 44** — match position, velocity, acceleration (and jerk for 44). The physics-of-motion classic. Pick one.
- **Exercise 45 or 46** — compute $f'$ and $f''$ from the definition and verify graphically. Pick one. Reinforces that differentiation is a composable operation.
- **Exercise 47** — compute $f, f', f'', f''', f^{(4)}$ for the cubic $2x^2 - x^3$. Note $f^{(4)} = 0$ because $\deg f = 3$. **Polynomial of degree $n$ becomes zero after $n+1$ differentiations.**

**Medium value:**

- **Exercises 1–3** — graph-based estimates. Pick one.
- **Exercises 14, 15, 16** — guess formulas for derivatives of $\sin x$, $e^x$, $\ln x$ from graphs. Useful to build intuition for Chapter 3. Pick one.
- **Exercises 19–22, 24, 25, 28, 29** — straightforward differentiation practice. Pick 2.
- **Exercises 33, 34** — tabular data, construct $U'(t)$ or $P'(t)$. The Example 7 pattern from 2.7. Pick one.
- **Exercise 40** — zoom test at $(0, 1)$ on $g(x) = (x^2 - 1)^{2/3}$. The corner/cusp diagnostic.
- **Exercise 54** — one-sided derivatives with a three-piece function. Important conceptual refinement.
- **Exercise 55** — prove even $\Rightarrow$ odd derivative (and vice versa). **Worth doing** — it's a clean application of the chain rule (via the definition) and useful in Fourier analysis, complex analysis, and symmetry arguments in physics.

**Skim or skip:**

- **Exercise 30** — transformed graph; redundant if you've done 31 or 32.
- **Exercise 39** — similar zoom test; pick one of {39, 40}.
- **Exercise 50** — similar to 49; do one.
- **Exercise 52** — floor function differentiability — obvious (not continuous at integers; corners nowhere; so not differentiable at integers).
- **Exercise 56** — qualitative sketch with hot water faucet; more physics-ish than math.
- **Exercise 57** — compute angle of inclination; trivial arithmetic.

**The "must-do" cluster:**

- **17 and 18** (Power Rule discovery).
- **23, 27** (two definition-based derivatives).
- **47** (the full polynomial chain $f \to f' \to f'' \to f''' \to f^{(4)}$).
- **49** (vertical tangent).
- **53** ($x|x|$ — differentiability repaired by multiplication).
- **55** (even/odd derivative symmetry).

**Exercise 55 is structurally underrated** — it connects differentiation to functional symmetry. The proof: if $f$ is even, $f(-x) = f(x)$; differentiate both sides (using the chain rule intuitively): $-f'(-x) = f'(x)$, so $f'(-x) = -f'(x)$, meaning $f'$ is odd. Similarly odd $\Rightarrow$ even derivative. **This symmetry reasoning appears in Fourier series (symmetries determine sine vs cosine components), quantum mechanics (parity of wave functions), and multivariable calculus (symmetric functions have symmetric gradients).**

---

## Section 2.8 complete. Two files delivered:

- `17_section_2.8_derivative_function.md`
- `18_section_2.8_higher_derivatives_exercises.md` (this file)

**Section 2.8 was the final exposition section of Chapter 2.** The Chapter 2 Review is on PDF pages 193–199 (book pp. 165–171): **Concept Check**, **True-False Quiz**, **Exercises**, **Problems Plus**.

**Chapter 2 Review plan** (probably 2 units):
1. Concept Check + True-False Quiz + Review Exercises 1–30 (basic consolidation)
2. Review Exercises 31–65 + Problems Plus (challenging synthesis problems)

Say "next" when ready.
