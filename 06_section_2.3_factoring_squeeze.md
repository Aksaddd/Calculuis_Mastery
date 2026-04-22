# Section 2.3 — Calculating Limits (Part B): Factoring, Rationalizing, and the Squeeze Theorem

*Covers pp. 102–106 of the book (PDF pp. 130–134). The techniques for evaluating limits where direct substitution fails: algebraic reformulation (factoring and rationalizing), piecewise function analysis via one-sided limits, and the Squeeze Theorem. Nine worked examples (3–11).*

---

## The $0/0$ Indeterminate Form

When direct substitution gives $0/0$, the limit might still exist — we just can't read it off by plugging in. The apparent $0/0$ indicates that **the numerator and denominator share a common "source of vanishing"** that can often be canceled algebraically.

Three techniques:
1. **Factor and cancel** — if both numerator and denominator have a common factor that vanishes at $a$, cancel it.
2. **Rationalize** — multiply by a conjugate to eliminate a troublesome radical.
3. **Squeeze** — bound the function between two simpler ones with the same limit.

---

### Example 3 — The factoring trick (the Section 2.1 tangent problem, revisited)

Find $\displaystyle \lim_{x \to 1} \frac{x^2 - 1}{x - 1}$.

***Solution.*** Let $f(x) = (x^2 - 1)/(x - 1)$. We **can't find the limit by substituting** $x = 1$ because $f(1)$ isn't defined ($0/0$). Nor can we apply the Quotient Law (Law 5), because the limit of the denominator is 0.

**Preliminary algebra** — factor the numerator as a difference of squares:

$$\frac{x^2 - 1}{x - 1} = \frac{(x - 1)(x + 1)}{x - 1}$$

The numerator and denominator have a common factor of $x - 1$. When we take the limit as $x \to 1$, we have $x \neq 1$ and so $x - 1 \neq 0$. Therefore **we can cancel the common factor** and compute the limit:

$$\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} \frac{(x - 1)(x + 1)}{x - 1} = \lim_{x \to 1}(x + 1) = 1 + 1 = 2$$

*Margin note: The limit in this example arose in Section 2.1 when we were trying to find the tangent to the parabola $y = x^2$ at the point $(1, 1)$.*

**This is the same limit as the motivating Example 1 of Section 2.1.** The tangent slope there was 2; here we've proved it algebraically using the factoring trick. What was "intuitive numerical convergence" in 2.1 is now "rigorous cancellation."

### The substitution-principle shortcut

**Key observation.** In Example 3, we replaced the given function $f(x) = (x^2 - 1)/(x - 1)$ with the simpler function $g(x) = x + 1$ — which agrees with $f$ everywhere except at $x = 1$. The limit of $g$ at 1 is the same as the limit of $f$ at 1. **This move is general:**

> **Useful fact.** If $f(x) = g(x)$ when $x \neq a$, then $\displaystyle \lim_{x \to a}f(x) = \lim_{x \to a}g(x)$, provided the limits exist.

**Why this is legal:** computing a limit as $x \to a$ never looks at $x = a$ itself. So modifying (or leaving undefined) the value at the single point $x = a$ doesn't affect the limit. This is exactly the "only the neighborhood matters" principle from Section 2.2.

---

### Example 4 — Redefining at the limit point

Find $\displaystyle \lim_{x \to 1} g(x)$ where

$$g(x) = \begin{cases} x + 1 & \text{if } x \neq 1 \\ \pi & \text{if } x = 1 \end{cases}$$

***Solution.*** Here $g$ is defined at $x = 1$ and $g(1) = \pi$. But the value of a limit as $x$ approaches 1 does not depend on the value of the function at 1. Since $g(x) = x + 1$ for $x \neq 1$:

$$\lim_{x \to 1} g(x) = \lim_{x \to 1}(x + 1) = 2$$

> **Figure 2 — Two graphs shown side by side.**
> - **Upper panel:** $y = f(x) = (x^2 - 1)/(x - 1)$ — the line $y = x + 1$ with a **hole** at $(1, 2)$.
> - **Lower panel:** $y = g(x)$ — the line $y = x + 1$ with an **isolated dot** at $(1, \pi)$ and a hole at $(1, 2)$.

```plot
{
  "title": "Figure 2 (top) — f(x) = (x² − 1)/(x − 1): hole at (1, 2)",
  "width": 520, "height": 280,
  "xRange": [-1, 3], "yRange": [-1, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x + 1", "domain": [-1, 3], "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 1, "y": 2, "style": "open", "color": "#b04a2f", "label": "(1, 2)", "labelDx": 10, "labelDy": -6}
  ],
  "caption": "Same line y = x + 1, but with a hole at x = 1 where the formula is literally 0/0."
}
```

```plot
{
  "title": "Figure 2 (bottom) — g(x): same line, g(1) = π",
  "width": 520, "height": 280,
  "xRange": [-1, 3], "yRange": [-1, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x + 1", "domain": [-1, 3], "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 1, "y": 2,       "style": "open",   "color": "#b04a2f", "label": "limit = 2",  "labelDx": 10, "labelDy": 14},
    {"x": 1, "y": 3.14159, "style": "filled", "color": "#1f2430", "label": "g(1) = π",  "labelDx": 10, "labelDy": -6}
  ],
  "caption": "Redefining g(1) = π does not change the limit as x → 1. The limit still equals 2."
}
```

**Examples 3 and 4 show the same limiting behavior with different function values at the point.** The function may have a hole, a different isolated value, or even be continuous — the limit only cares about the approach.

---

### Example 5 — The difference quotient as a limit

Evaluate $\displaystyle \lim_{h \to 0} \frac{(3 + h)^2 - 9}{h}$.

***Solution.*** Let $F(h) = ((3 + h)^2 - 9)/h$. Direct substitution gives $0/0$. Simplify algebraically:

$$F(h) = \frac{(9 + 6h + h^2) - 9}{h} = \frac{6h + h^2}{h} = \frac{h(6 + h)}{h} = 6 + h$$

for $h \neq 0$. Recall we consider only $h \neq 0$ when letting $h$ approach 0. Thus:

$$\lim_{h \to 0} \frac{(3 + h)^2 - 9}{h} = \lim_{h \to 0}(6 + h) = 6$$

**The quant-relevant pattern.** The expression $((3+h)^2 - 9)/h$ is exactly a **difference quotient** — the limit of which is the derivative of $f(x) = x^2$ at $x = 3$. And indeed, $f'(3) = 2 \cdot 3 = 6$. ✓

**Every derivative in Chapter 3 is computed by this exact procedure:**
1. Set up $(f(a + h) - f(a))/h$.
2. Simplify algebraically (expand, factor, cancel).
3. Take the limit as $h \to 0$.

Getting comfortable with Example 5's mechanics now pays off enormously in Chapter 3.

---

### Example 6 — The rationalization trick (and a Section 2.2 confirmation)

Find $\displaystyle \lim_{t \to 0} \frac{\sqrt{t^2 + 9} - 3}{t^2}$.

***Solution.*** We can't apply the Quotient Law immediately, since the limit of the denominator is 0. Here the preliminary algebra consists of **rationalizing the numerator** — multiply by the conjugate:

$$\lim_{t \to 0} \frac{\sqrt{t^2 + 9} - 3}{t^2} = \lim_{t \to 0} \frac{\sqrt{t^2 + 9} - 3}{t^2} \cdot \frac{\sqrt{t^2 + 9} + 3}{\sqrt{t^2 + 9} + 3}$$

$$= \lim_{t \to 0} \frac{(t^2 + 9) - 9}{t^2(\sqrt{t^2 + 9} + 3)}$$

$$= \lim_{t \to 0} \frac{t^2}{t^2(\sqrt{t^2 + 9} + 3)}$$

$$= \lim_{t \to 0} \frac{1}{\sqrt{t^2 + 9} + 3}$$

At this point, direct substitution works (the denominator doesn't vanish):

$$= \frac{1}{\sqrt{0 + 9} + 3} = \frac{1}{3 + 3} = \frac{1}{6}$$

**This calculation confirms the guess we made in Example 2 in Section 2.2.** And it avoids the catastrophic-cancellation disaster — because the conjugate-multiplication transformed a $\sqrt{\cdot} - 3$ form (nearly-equal quantities) into a simple $t^2/t^2$ cancellation.

**When to rationalize:** whenever a limit has the form $(\sqrt{\text{stuff}} - k)/\text{stuff}$ or $(\sqrt{\text{stuff}} - \sqrt{\text{other stuff}})/\text{stuff}$ and direct substitution gives $0/0$. Multiply numerator and denominator by the conjugate of the radical-containing part, and the difference-of-squares identity $(\sqrt{A} - \sqrt{B})(\sqrt{A} + \sqrt{B}) = A - B$ eliminates the radicals in the numerator.

---

## One-Sided Limits and the Basic Theorem

Some limits are best calculated by first finding the left- and right-hand limits. The following theorem is a reminder of what we discovered in Section 2.2: **a two-sided limit exists if and only if both of the one-sided limits exist and are equal**.

> **Theorem 1.**
> $$\lim_{x \to a} f(x) = L \quad \Longleftrightarrow \quad \lim_{x \to a^-} f(x) = L \ \text{ and } \ \lim_{x \to a^+} f(x) = L$$

**When computing one-sided limits, we use the fact that the Limit Laws also hold for one-sided limits.**

---

### Example 7 — $\lim_{x \to 0}|x| = 0$ by cases

Show that $\displaystyle \lim_{x \to 0}|x| = 0$.

***Solution.*** Recall the definition of absolute value:

$$|x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$$

**Right-hand limit:** since $|x| = x$ for $x > 0$,

$$\lim_{x \to 0^+} |x| = \lim_{x \to 0^+} x = 0$$

**Left-hand limit:** since $|x| = -x$ for $x < 0$,

$$\lim_{x \to 0^-} |x| = \lim_{x \to 0^-}(-x) = 0$$

Both one-sided limits agree, so by Theorem 1:

$$\lim_{x \to 0} |x| = 0$$

> **Figure 3 — Graph of $y = |x|$.** A V-shape with vertex at the origin — the canonical picture. Both branches approach the origin, confirming the limit is 0.

```plot
{
  "title": "Figure 3 — y = |x|",
  "width": 480, "height": 300,
  "xRange": [-3, 3], "yRange": [-0.8, 3.2],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "abs(x)", "domain": [-3, 3], "color": "#b04a2f", "width": 2.3}
  ],
  "points": [
    {"x": 0, "y": 0, "style": "filled", "color": "#1f2430"}
  ],
  "caption": "Both branches close in on (0, 0). lim_{x→0} |x| = 0."
}
```

---

### Example 8 — $|x|/x$ at 0 does NOT exist

Prove that $\displaystyle \lim_{x \to 0}\frac{|x|}{x}$ does not exist.

***Solution.*** Split on the sign of $x$:

- For $x > 0$: $|x|/x = x/x = 1$.
- For $x < 0$: $|x|/x = -x/x = -1$.

Therefore:

$$\lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} 1 = 1$$
$$\lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-}(-1) = -1$$

Since the right- and left-hand limits are different, by Theorem 1, $\displaystyle \lim_{x \to 0}|x|/x$ **does not exist**.

> **Figure 4 — Graph of $y = |x|/x$.** A piecewise-constant function: $y = 1$ for $x > 0$, $y = -1$ for $x < 0$, with a hole at the origin. Jump of size 2 at $x = 0$.

```plot
{
  "title": "Figure 4 — y = |x|/x = sgn(x) (undefined at 0)",
  "width": 480, "height": 280,
  "xRange": [-3, 3], "yRange": [-2, 2],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {
      "piecewise": [
        {"fn": "-1", "domain": [-3, 0], "endpoints": ["closed", "open"]},
        {"fn": "1",  "domain": [0, 3],  "endpoints": ["open",   "closed"]}
      ],
      "color": "#b04a2f", "width": 2.4
    }
  ],
  "caption": "Right-limit at 0 is +1; left-limit is −1. They disagree, so the two-sided limit does not exist."
}
```

**This is the "sign function" — denoted $\text{sgn}(x)$** — which you'll meet in Exercise 45. It's everywhere in applied math: as the derivative of $|x|$ where defined, as the output of a perceptron in ML, as the indicator for whether a trading signal goes long or short.

---

### Example 9 — Piecewise function, limit at the boundary

If

$$f(x) = \begin{cases} \sqrt{x - 4} & \text{if } x > 4 \\ 8 - 2x & \text{if } x < 4 \end{cases}$$

determine whether $\displaystyle \lim_{x \to 4} f(x)$ exists.

***Solution.*** Compute the one-sided limits by applying the appropriate piece to each side.

**Right-hand limit** ($x > 4$, so use $\sqrt{x - 4}$):

$$\lim_{x \to 4^+} f(x) = \lim_{x \to 4^+} \sqrt{x - 4} = \sqrt{4 - 4} = 0$$

**Left-hand limit** ($x < 4$, so use $8 - 2x$):

$$\lim_{x \to 4^-} f(x) = \lim_{x \to 4^-}(8 - 2x) = 8 - 2(4) = 0$$

Both one-sided limits equal 0. By Theorem 1:

$$\lim_{x \to 4} f(x) = 0$$

*Margin note: It is shown in Example 3 in Section 2.4 that $\lim_{x \to 0^+} \sqrt{x} = 0$.* (The rigorous ε-δ proof that $\sqrt{x}$ has the expected limit at 0.)

> **Figure 5 — Graph of $f$.** A V-shaped curve meeting at the point $(4, 0)$: the left piece is a descending line from the upper-left down to $(4, 0)$; the right piece is an ascending square-root curve starting at $(4, 0)$.

```plot
{
  "title": "Figure 5 — piecewise f from Example 9",
  "width": 520, "height": 320,
  "xRange": [-0.5, 10], "yRange": [-1, 10],
  "xStep": 1, "yStep": 2,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {
      "piecewise": [
        {"fn": "8 - 2*x",      "domain": [0, 4],  "endpoints": ["closed", "open"]},
        {"fn": "sqrt(x - 4)",  "domain": [4, 10], "endpoints": ["closed", "closed"]}
      ],
      "color": "#b04a2f", "width": 2.3
    }
  ],
  "points": [
    {"x": 4, "y": 0, "style": "filled", "color": "#1f2430", "label": "(4, 0)", "labelDx": 10, "labelDy": 14}
  ],
  "caption": "Both pieces meet at (4, 0): left-limit and right-limit both equal 0, so lim_{x→4} f(x) = 0."
}
```

**Geometric takeaway.** The two pieces of $f$ meet continuously at $x = 4$ — they join at the same point, even though the slopes differ (a corner). This foreshadows **continuous but not differentiable** — a concept that becomes precise in Chapter 3.

---

### Example 10 — The Greatest Integer (Floor) Function

The **greatest integer function** is defined by $\llbracket x \rrbracket = $ the largest integer that is less than or equal to $x$.

For instance:

$$\llbracket 4 \rrbracket = 4, \ \llbracket 4.8 \rrbracket = 4, \ \llbracket \pi \rrbracket = 3, \ \llbracket \sqrt{2} \rrbracket = 1, \ \left\llbracket -\tfrac{1}{2} \right\rrbracket = -1$$

Show that $\displaystyle \lim_{x \to 3}\llbracket x \rrbracket$ does not exist.

*Margin note: Other notations for $\llbracket x \rrbracket$ are $[x]$ and $\lfloor x \rfloor$. The greatest integer function is sometimes called the **floor function**.*

***Solution.*** For $3 \leq x < 4$, $\llbracket x \rrbracket = 3$. So:

$$\lim_{x \to 3^+}\llbracket x \rrbracket = \lim_{x \to 3^+} 3 = 3$$

For $2 \leq x < 3$, $\llbracket x \rrbracket = 2$. So:

$$\lim_{x \to 3^-}\llbracket x \rrbracket = \lim_{x \to 3^-} 2 = 2$$

Because these one-sided limits are not equal, $\displaystyle \lim_{x \to 3}\llbracket x \rrbracket$ does not exist by Theorem 1.

> **Figure 6 — Graph of the greatest integer function.** A staircase-shaped graph: horizontal segments at integer heights, with open circles on the right end and closed circles on the left end of each step. Jumps of size 1 at each integer.

```plot
{
  "title": "Figure 6 — y = ⟦x⟧ (floor function)",
  "width": 520, "height": 300,
  "xRange": [-2.5, 5.5], "yRange": [-3, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {
      "step": [
        {"y": -3, "x": [-3, -2], "endpoints": ["closed", "open"]},
        {"y": -2, "x": [-2, -1], "endpoints": ["closed", "open"]},
        {"y": -1, "x": [-1, 0],  "endpoints": ["closed", "open"]},
        {"y": 0,  "x": [0, 1],   "endpoints": ["closed", "open"]},
        {"y": 1,  "x": [1, 2],   "endpoints": ["closed", "open"]},
        {"y": 2,  "x": [2, 3],   "endpoints": ["closed", "open"]},
        {"y": 3,  "x": [3, 4],   "endpoints": ["closed", "open"]},
        {"y": 4,  "x": [4, 5],   "endpoints": ["closed", "open"]}
      ],
      "color": "#b04a2f", "width": 2.3
    }
  ],
  "caption": "At every integer n, the left-limit is n − 1 and the right-limit is n. The two-sided limit does not exist at any integer."
}
```

**In applied contexts:**
- **Time-discretization** — rounding sub-second timestamps to integer seconds uses floor.
- **Binning in histograms** — $\llbracket x/w \rrbracket$ tells you which bin of width $w$ a value $x$ falls into.
- **Integer quantile function** — $\llbracket nF^{-1}(p) \rrbracket$ extracts the integer index.

Floor functions show up everywhere, and their built-in jump discontinuities at integers are a source of headaches: **derivatives and integrals don't commute with floor**. A function as innocuous as $\llbracket x \rrbracket$ is not differentiable at a dense set of points.

---

## The Squeeze Theorem

The next two theorems give additional properties of limits. Their proofs can be found in Appendix F.

> **Theorem 2 — Limit Inequality.** If $f(x) \leq g(x)$ when $x$ is near $a$ (except possibly at $a$) and the limits of $f$ and $g$ both exist as $x$ approaches $a$, then
> $$\lim_{x \to a} f(x) \leq \lim_{x \to a} g(x)$$

**In words.** Pointwise inequality between functions transfers to their limits. A statement you probably consider "obvious," but Theorem 2 makes it official.

> **Theorem 3 — The Squeeze Theorem.** If $f(x) \leq g(x) \leq h(x)$ when $x$ is near $a$ (except possibly at $a$) and
> $$\lim_{x \to a} f(x) = \lim_{x \to a} h(x) = L$$
> then
> $$\lim_{x \to a} g(x) = L$$

**Also known as:** the **Sandwich Theorem** or the **Pinching Theorem**.

**In words.** If $g(x)$ is squeezed between $f(x)$ and $h(x)$ near $a$, and if $f$ and $h$ have the same limit $L$ at $a$, then **$g$ is forced to have limit $L$ also**.

> **Figure 7 — Visualization of the Squeeze Theorem.** Three curves on one graph: $h$ on top, $f$ on bottom, and $g$ sandwiched between them. All three curves meet at the point $(a, L)$ — the $f$ and $h$ bounds collapse to $L$ at $a$, dragging $g$ along.

```plot
{
  "title": "Figure 7 — the Squeeze Theorem: f ≤ g ≤ h, all meeting at (a, L)",
  "width": 540, "height": 340,
  "xRange": [-2.5, 2.5], "yRange": [-0.5, 3.2],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "1.5 - 0.4*x*x",                 "domain": [-2.5, 2.5], "color": "#2867b2", "width": 2},
    {"fn": "1.5 + 0.4*x*x",                 "domain": [-2.5, 2.5], "color": "#2867b2", "width": 2},
    {"fn": "1.5 + 0.35*x*sin(3*x)",         "domain": [-2.5, 2.5], "color": "#b04a2f", "width": 2.3, "samples": 600}
  ],
  "points": [
    {"x": 0, "y": 1.5, "style": "filled", "color": "#1f2430", "label": "(a, L)", "labelDx": 10, "labelDy": -6}
  ],
  "annotations": [
    {"x":  2.2, "y": 3.0, "text": "h(x) (upper bound)", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x":  2.2, "y": 0.1, "text": "f(x) (lower bound)", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": -2.2, "y": 2.4, "text": "g(x)",               "color": "#b04a2f", "italic": false, "anchor": "start"}
  ],
  "caption": "Upper bound h and lower bound f both head toward L at x = a. Whatever g is doing in between, it is forced to head toward L as well."
}
```

**When to reach for the Squeeze Theorem.** Anytime you have a function that *oscillates* or is otherwise hard to analyze directly, but whose *magnitude* can be bounded. Oscillation + a bound of the form $|g(x)| \leq h(x)$ with $h(x) \to 0$ is the canonical setup.

---

### Example 11 — $x^2 \sin(1/x)$ at 0 via squeeze

Show that $\displaystyle \lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$.

***Solution.*** First note that we **cannot** use the Product Law:

$$\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = \lim_{x \to 0} x^2 \cdot \lim_{x \to 0} \sin\!\left(\frac{1}{x}\right) \qquad \text{\large ✗ WRONG}$$

because $\lim_{x \to 0}\sin(1/x)$ does not exist (see Example 4 in Section 2.2). **The Product Law requires both factors to have limits — it fails if either one doesn't.**

**The Squeeze Theorem rescues us.** Use the universal bound on sine:

$$-1 \leq \sin\!\left(\frac{1}{x}\right) \leq 1$$

Multiply by $x^2$ (which is $\geq 0$, preserving the inequality):

$$-x^2 \leq x^2 \sin\!\left(\frac{1}{x}\right) \leq x^2$$

Now we have $g(x) = x^2 \sin(1/x)$ squeezed between $f(x) = -x^2$ and $h(x) = x^2$. Both bounds go to 0:

$$\lim_{x \to 0}(-x^2) = 0 \qquad \lim_{x \to 0} x^2 = 0$$

By the Squeeze Theorem:

$$\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$$

> **Figure 8 — Graph of $y = x^2 \sin(1/x)$ squeezed between $y = \pm x^2$.** The outer parabolas $\pm x^2$ form a narrowing "funnel" at the origin. Inside the funnel, the oscillating curve $x^2 \sin(1/x)$ bounces between the two parabolas with rapidly increasing frequency as $x \to 0$. Despite the wild oscillation, the amplitude is damped toward zero by the $x^2$ factor, so the whole thing collapses into the origin.

```plot
{
  "title": "Figure 8 — y = x² sin(1/x) squeezed between ±x²",
  "width": 540, "height": 340,
  "xRange": [-0.6, 0.6], "yRange": [-0.35, 0.35],
  "xStep": 0.2, "yStep": 0.1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x",             "domain": [-0.6, 0.6],   "color": "#2867b2", "width": 1.6, "dash": "4 3"},
    {"fn": "-x*x",            "domain": [-0.6, 0.6],   "color": "#2867b2", "width": 1.6, "dash": "4 3"},
    {"fn": "x*x*sin(1/x)",    "domain": [-0.6, -0.01], "color": "#b04a2f", "width": 2,   "samples": 3000},
    {"fn": "x*x*sin(1/x)",    "domain": [0.01, 0.6],   "color": "#b04a2f", "width": 2,   "samples": 3000}
  ],
  "points": [
    {"x": 0, "y": 0, "style": "open", "color": "#b04a2f"}
  ],
  "annotations": [
    {"x": 0.55, "y": 0.31, "text": "h(x) = x²",  "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 0.55, "y": -0.31,"text": "f(x) = −x²", "color": "#2867b2", "italic": false, "anchor": "end"}
  ],
  "caption": "The inner curve bounces frantically but is trapped between ±x², which pinch to 0 at x = 0. Squeeze Theorem forces the limit to 0."
}
```

**This is a prototype for a common pattern in analysis and probability.** Whenever you have a product where one factor oscillates but the other shrinks to zero, the oscillation doesn't matter — the shrinking dominates. The Squeeze Theorem formalizes this intuition:

- **Variance-bounded martingales** — a rapidly oscillating process multiplied by a vanishing step size still has a definite limit. This is the intuition behind Itô's lemma and stochastic integration.
- **Density estimators** — kernel bandwidths shrink as $n \to \infty$, even as the raw data oscillates wildly; asymptotic normality survives because the kernel shrinks faster than the oscillation grows.
- **Convergence of Fourier partial sums** — oscillation times a decay factor vanishes.

**The "oscillate but shrink" pattern** is a recurring theme in applied math. Learn to recognize it now — the Squeeze Theorem will be your tool of choice.

---

## Summary of Techniques for the $0/0$ Indeterminate Form

When you encounter $\lim_{x \to a} f(x)/g(x)$ with $f(a) = g(a) = 0$:

1. **Factor and cancel** — look for a common factor of $(x - a)$ (Example 3).
2. **Rationalize** — if there are radicals, multiply by the conjugate (Example 6).
3. **Algebraic simplification** — expand, combine fractions, or use trig identities (Example 5).
4. **Split into one-sided limits** — for piecewise functions or absolute values (Examples 7–9).
5. **Squeeze Theorem** — for oscillating-but-bounded functions (Example 11).

**L'Hôpital's Rule** (Chapter 4) gives a more powerful general technique for $0/0$ forms — but it requires derivatives, so we can't use it yet. For now, the five techniques above cover the limits you'll encounter in Chapter 2.

---

*End of Unit 2 of Section 2.3. Section 2.3's exposition is complete. Unit 3 is Exercises 1–62.*
