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

> **Figure 20 — An odd function.** A curve symmetric about the origin. For a sample $x > 0$, the height at $-x$ is the negative of the height at $+x$: $f(-x) = -f(x)$. The curve passes through the origin.

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

**Recipe for checking.** Compute $f(-x)$ and simplify, then compare to $f(x)$ (even) and $-f(x)$ (odd). If it matches neither, the function is neither. **Warning**: a polynomial with *both* even and odd power terms (e.g., $x^2 + x$) is generally neither — the even/odd classification is about the whole function, not individual terms.

---

## Increasing and Decreasing Functions

Monotonicity describes whether a function goes up or down on an interval.

> **Figure 22 — Mixed monotonicity.** A curve $y = f(x)$ rising from point $A$ at $x = a$ up to point $B$ at $x = b$, falling from $B$ down to $C$ at $x = c$, then rising again from $C$ up to $D$ at $x = d$. On $[a, b]$ the function increases; on $[b, c]$ it decreases; on $[c, d]$ it increases again. For any two points $x_1 < x_2$ between $a$ and $b$, the heights satisfy $f(x_1) < f(x_2)$.

> **Definition.**
> A function $f$ is called **increasing** on an interval $I$ if
> $$f(x_1) < f(x_2) \quad \text{whenever } x_1 < x_2 \text{ in } I$$
> It is called **decreasing** on $I$ if
> $$f(x_1) > f(x_2) \quad \text{whenever } x_1 < x_2 \text{ in } I$$

**Read the quantifier carefully.** The inequality must hold for *every* pair of numbers $x_1, x_2$ in $I$ with $x_1 < x_2$ — not just for some pairs, and not just for adjacent points. A function that increases on $[0, 1]$ and then decreases on $[1, 2]$ is **not** increasing on $[0, 2]$; the interval of increase has to be one where it goes up throughout.

**Canonical example.**

> **Figure 23 — $y = x^2$ on both sides of the origin.** The parabola is **decreasing** on $(-\infty, 0]$ (falling to the vertex) and **increasing** on $[0, \infty)$ (rising from the vertex).

**Why "strictly" matters.** Stewart's definition uses strict inequality: $f(x_1) < f(x_2)$, not $\leq$. So a function that's constant on a stretch is *neither* strictly increasing nor strictly decreasing there. Some textbooks distinguish "strictly increasing" from "nondecreasing" ($\leq$); Stewart bundles "increasing" to mean strict. Watch for this when you cross-reference other sources — especially in analysis textbooks, where the distinction is enforced more carefully.

**Why this matters for calculus coming up.** In Chapter 3, you'll prove that $f$ is increasing on an interval iff $f'(x) \geq 0$ there (with $> 0$ except possibly at isolated points giving strict increase). That link between the sign of the derivative and monotonicity is the engine behind every graph-sketching problem and every first-derivative test for optima. The definition on this page is what that theorem is actually about.

---

*This closes Section 1.1's exposition. The rest of Section 1.1 (PDF pp. 48 bottom – 51) is Exercises.*
