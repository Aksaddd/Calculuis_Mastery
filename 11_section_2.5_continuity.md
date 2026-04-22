# Section 2.5 — Continuity (Part A): Definition, Discontinuity Types, and the Continuity Theorems

*Covers pp. 119–126 top of the book (PDF pp. 147–154 top). The formalization of "no gaps, no jumps." Builds directly on the limit machinery from 2.2–2.4. Includes the taxonomy of discontinuities, the continuity-preservation theorems (algebra, polynomials, trig, composition), and the main-menu theorem that classifies which common functions are continuous on their domains.*

---

## Section 2.5 — Continuity

We noticed in Section 2.3 that the limit of a function as $x$ approaches $a$ can often be found simply by calculating the value of the function at $a$ — i.e., the Direct Substitution Property. **Functions with this property are called *continuous at $a$***. The mathematical definition corresponds closely with the everyday meaning of *continuity*: a continuous process is one that takes place gradually, without interruption or abrupt change.

---

## Definition 1 — Continuity at a Point

> **Definition 1.** A function $f$ is **continuous at a number $a$** if
> $$\lim_{x \to a}f(x) = f(a)$$

**Definition 1 implicitly requires three things** if $f$ is continuous at $a$:

1. **$f(a)$ is defined** (i.e., $a$ is in the domain of $f$).
2. **$\lim_{x \to a}f(x)$ exists.**
3. **$\lim_{x \to a}f(x) = f(a)$** — the limit value matches the function value.

All three conditions must hold. Violating any one gives a discontinuity.

**In words:** a continuous function has the property that a small change in $x$ produces only a small change in $f(x)$. The change in $f(x)$ can be made as small as we please by keeping the change in $x$ sufficiently small. This is exactly the ε-δ criterion from Section 2.4 with $L = f(a)$.

### Discontinuity terminology

If $f$ is defined near $a$ (i.e., $f$ is defined on an open interval containing $a$, except perhaps at $a$), **we say that $f$ is *discontinuous at $a$*** (or $f$ has a *discontinuity at $a$*) if $f$ is not continuous at $a$.

### Physical intuition

Physical phenomena are usually continuous. For instance:
- The **displacement or velocity of a vehicle** varies continuously with time.
- A **person's height** varies continuously with age.

But **discontinuities do occur** — e.g., in electric currents switched on at a particular moment. (Recall Example 6 of Section 2.2: the Heaviside function $H(t)$ is discontinuous at 0 because $\lim_{t \to 0}H(t)$ doesn't exist.)

### Geometric picture

> **Figure 1 — Geometric view of continuity at $a$.** As $x$ approaches $a$, the point $(x, f(x))$ on the graph approaches $(a, f(a))$. There is **no gap** in the curve. Conceptually: you can draw the graph through $x = a$ without lifting your pen.

**A function is continuous on an interval if it is continuous at every number in that interval.** Equivalently: its graph has no break in it and can be drawn without removing your pen from the paper.

---

### Example 1 — Reading discontinuities from a graph

At which numbers is $f$ discontinuous, from the graph?

> **Figure 2 — Graph of $f$ over $[0, 5]$ with three notable features** at $x = 1, 3, 5$. The curve has a break at $x = 1$, jumps at $x = 3$, and has a definite value at $x = 5$ that's separated from the rest of the curve.

***Solution.*** Three discontinuities to analyze:

**$a = 1$:** Looks like a discontinuity because the graph has a break. The official reason: $f(1)$ is not defined (hole).

**$a = 3$:** Break in the graph, but for a different reason. $f(3)$ *is* defined, but $\lim_{x \to 3}f(x)$ does not exist (left and right limits are different). So $f$ is discontinuous at 3.

**$a = 5$:** $f(5)$ is defined and $\lim_{x \to 5}f(x)$ exists (both sides agree). **But** $\lim_{x \to 5}f(x) \neq f(5)$. Condition 3 fails. So $f$ is discontinuous at 5.

**The three conditions of Definition 1** correspond exactly to the three discontinuity modes demonstrated at $x = 1, 3, 5$: (1) $f(a)$ undefined, (2) limit doesn't exist, (3) limit exists but differs from $f(a)$.

---

### Example 2 — A taxonomy of discontinuity types

Where are each of the following functions discontinuous?

(a) $f(x) = \dfrac{x^2 - x - 2}{x - 2}$ &nbsp; (b) $f(x) = \begin{cases} 1/x^2 & \text{if } x \neq 0 \\ 1 & \text{if } x = 0 \end{cases}$

(c) $f(x) = \begin{cases} \dfrac{x^2 - x - 2}{x - 2} & \text{if } x \neq 2 \\ 1 & \text{if } x = 2 \end{cases}$ &nbsp; (d) $f(x) = \llbracket x \rrbracket$

***Solution.***

**(a) At $x = 2$:** $f(2)$ is not defined (the formula gives $0/0$). Condition 1 fails. For any other $x$, the function is a polynomial ratio, and we'll see in Theorem 5 that these are continuous everywhere they're defined.

**(b) At $x = 0$:** $f(0) = 1$ is defined, but $\lim_{x \to 0}f(x) = \lim_{x \to 0}(1/x^2) = \infty$ — the limit doesn't exist (the function blows up). Condition 2 fails.

**(c) At $x = 2$:** $f(2) = 1$ is defined and $\lim_{x \to 2}f(x) = \lim_{x \to 2}\dfrac{x^2 - x - 2}{x - 2} = \lim_{x \to 2}\dfrac{(x - 2)(x + 1)}{x - 2} = \lim_{x \to 2}(x + 1) = 3$. **So the limit exists, and equals 3.** But $f(2) = 1 \neq 3 = \lim_{x \to 2}f(x)$. Condition 3 fails.

**(d) At every integer $n$:** $f(n) = \llbracket n \rrbracket = n$ is defined, but $\lim_{x \to n}\llbracket x \rrbracket$ doesn't exist because the left and right limits differ (from Example 10 of Section 2.3). Condition 2 fails at each integer.

### The three types of discontinuity — named

> **Figure 3 — The four discontinuities of Example 2 visualized.**
> - **(a) Removable.** Line with a hole at $x = 2$; could "plug" the hole to make continuous.
> - **(b) Infinite.** Curve $1/x^2$ with a vertical asymptote at 0; $f(0) = 1$ is isolated at height 1 but graph explodes around it.
> - **(c) Removable.** Same line as (a) but with an isolated dot at $(2, 1)$; redefining $f(2) = 3$ would make it continuous.
> - **(d) Jump.** Staircase of horizontal segments. At each integer, a jump of size 1.

**The discontinuity taxonomy:**

| Type | Example | Description |
|:---|:---|:---|
| **Removable** | (a), (c) | Could be eliminated by *redefining* $f$ at a single point. The limit exists; the issue is only at the point. |
| **Infinite** | (b) | $f \to \pm\infty$ at the point. Can't be fixed. |
| **Jump** | (d) | Left and right limits both exist but differ. The function "jumps" from one value to another. |

**Distinguishing matters because removable discontinuities can be "patched"** — we can extend $f$ to a continuous function by redefining at the problem point. Infinite and jump discontinuities cannot. This classification matters throughout analysis (e.g., Riemann integrability allows finitely many discontinuities but only of certain types).

**For your quant track:**
- **Removable discontinuities** are the "just a hole" artifact of formulas like $(e^x - 1)/x$, $(\sin x)/x$, $(1 - \cos x)/x^2$ — the $0/0$ forms. The limit exists; the formula just isn't evaluable at the point. Numerical codes should handle these via series expansion or L'Hôpital.
- **Infinite discontinuities** at strike prices or boundaries show up in option pricing at maturity (Gamma, Vega).
- **Jump discontinuities** occur at dividend payment dates, coupon payment dates, ex-dividend dates — places where a cash flow causes an abrupt price change.

---

## One-Sided Continuity

> **Definition 2 — Continuous from one side.** A function $f$ is **continuous from the right at $a$** if
> $$\lim_{x \to a^+}f(x) = f(a)$$
> and $f$ is **continuous from the left at $a$** if
> $$\lim_{x \to a^-}f(x) = f(a)$$

### Example 3 — Floor function is continuous from the right

At each integer $n$, the function $f(x) = \llbracket x \rrbracket$ is continuous from the right but discontinuous from the left, because

$$\lim_{x \to n^+}f(x) = \lim_{x \to n^+}\llbracket x \rrbracket = n = f(n) \qquad \text{(continuous from right)}$$

$$\lim_{x \to n^-}f(x) = \lim_{x \to n^-}\llbracket x \rrbracket = n - 1 \neq f(n) \qquad \text{(discontinuous from left)}$$

**The floor function's "side bias."** When $x = n$ the function equals $n$ — same as the right-side limit. But the left-side limit is $n - 1$ — one less. So the staircase function "agrees with the right" at each integer.

---

## Continuity on an Interval

> **Definition 3 — Continuous on an interval.** A function $f$ is **continuous on an interval** if it is continuous at every number in the interval. *(If $f$ is defined only on one side of an endpoint of the interval, we understand "continuous" at the endpoint to mean "continuous from the right" (at a left endpoint) or "continuous from the left" (at a right endpoint).)*

### Example 4 — $f(x) = 1 - \sqrt{1 - x^2}$ is continuous on $[-1, 1]$

Show that $f(x) = 1 - \sqrt{1 - x^2}$ is continuous on the interval $[-1, 1]$.

***Solution.*** For any $a$ with $-1 < a < 1$, use the Limit Laws:

$$\lim_{x \to a}f(x) = \lim_{x \to a}\!\left(1 - \sqrt{1 - x^2}\right) = 1 - \lim_{x \to a}\sqrt{1 - x^2} \qquad \text{(Laws 2, 7)}$$

$$= 1 - \sqrt{\lim_{x \to a}(1 - x^2)} \qquad \text{(Law 11)}$$

$$= 1 - \sqrt{1 - a^2} = f(a)$$

Thus $f$ is continuous at every interior point $a \in (-1, 1)$.

**Endpoints.** Similarly, $\lim_{x \to -1^+}f(x) = 1 = f(-1)$ and $\lim_{x \to 1^-}f(x) = 1 = f(1)$. So $f$ is continuous from the right at $-1$ and from the left at $1$.

By Definition 3, $f$ is continuous on $[-1, 1]$. $\blacksquare$

**Geometric visualization.** The graph of $f(x) = 1 - \sqrt{1 - x^2}$ is the lower half of the circle $x^2 + (y - 1)^2 = 1$ — smooth connected arc from $(-1, 1)$ down through $(0, 0)$ up to $(1, 1)$. No breaks, as expected.

---

## The Algebra of Continuity (Theorem 4)

Definitions 1–3 tell us *when* a function is continuous. The next theorem tells us *how* to combine continuous functions to get new continuous functions.

> **Theorem 4.** If $f$ and $g$ are continuous at $a$ and $c$ is a constant, then the following functions are also continuous at $a$:
> **1.** $f + g$ &nbsp;&nbsp;&nbsp; **2.** $f - g$ &nbsp;&nbsp;&nbsp; **3.** $c f$ &nbsp;&nbsp;&nbsp; **4.** $f g$ &nbsp;&nbsp;&nbsp; **5.** $\dfrac{f}{g}$ if $g(a) \neq 0$

### Proof of Part 1 (the Sum)

Since $f$ and $g$ are continuous at $a$:

$$\lim_{x \to a}f(x) = f(a) \quad \text{and} \quad \lim_{x \to a}g(x) = g(a)$$

Therefore:

$$\lim_{x \to a}(f + g)(x) = \lim_{x \to a}[f(x) + g(x)]$$

$$= \lim_{x \to a}f(x) + \lim_{x \to a}g(x) \qquad \text{(Law 1)}$$

$$= f(a) + g(a)$$

$$= (f + g)(a)$$

This shows $f + g$ is continuous at $a$. $\blacksquare$

Each of the five parts follows from the corresponding Limit Law in Section 2.3.

**Corollary.** It follows from Theorem 4 and Definition 3 that if $f$ and $g$ are continuous on an interval, then so are $f + g$, $f - g$, $cf$, $fg$, and (if $g$ is never 0) $f/g$. **Continuous functions form a closed algebra under the usual operations.**

---

## Theorem 5 — Polynomials and Rational Functions

The following theorem was stated in Section 2.3 as the Direct Substitution Property:

> **Theorem 5.**
> - **(a)** Any polynomial is continuous everywhere; that is, continuous on $\mathbb{R} = (-\infty, \infty)$.
> - **(b)** Any rational function is continuous wherever it is defined; that is, continuous on its domain.

### Proof of (a)

A polynomial has the form $P(x) = c_n x^n + c_{n-1}x^{n-1} + \cdots + c_1 x + c_0$. From the Limit Laws (Law 7: $\lim c = c$; Law 9: $\lim x^m = a^m$):

$$\lim_{x \to a}c_0 = c_0 \qquad \lim_{x \to a}x^m = a^m \ \text{ for } m = 1, 2, \ldots, n$$

Each monomial $c_m x^m$ is continuous at $a$ (the product of two continuous functions: constant and $x^m$). The polynomial is a sum of such monomials, plus the constant term; by Theorem 4 (parts 1 and 3), the whole sum is continuous at $a$. Since $a$ was arbitrary, $P$ is continuous on $\mathbb{R}$. $\blacksquare$

### Proof of (b) is similar using the Quotient Law (Law 5).

**The volume of a sphere.** As an illustration of Theorem 5: $V(r) = \frac{4}{3}\pi r^3$ is a polynomial in $r$, so $V$ is a continuous function of the radius. Physically: a small change in radius produces a small change in volume.

**A thrown ball.** If thrown vertically with initial velocity 50 ft/s, the height is $h = 50t - 16t^2$ — a polynomial in $t$. So height is continuous in time.

---

### Example 5 — Quick evaluation via continuity

Find $\displaystyle \lim_{x \to -2}\frac{x^3 + 2x^2 - 1}{5 - 3x}$.

***Solution.*** The function $f(x) = (x^3 + 2x^2 - 1)/(5 - 3x)$ is rational, so by Theorem 5 it is continuous on its domain, which is $\{x \mid x \neq 5/3\}$. Since $-2 \neq 5/3$:

$$\lim_{x \to -2}f(x) = f(-2) = \frac{(-2)^3 + 2(-2)^2 - 1}{5 - 3(-2)} = \frac{-1}{11}$$

$\blacksquare$

**Same answer as Example 2 of Section 2.3.** The difference: there we applied Law after Law mechanically; here we just invoke "rational ⟹ continuous ⟹ plug in." **Theorem 5 is the computational payoff of the limit machinery.**

---

## Trig Functions Are Continuous

From the geometric definitions of sine and cosine (Figure 5 shows a unit-circle picture with angle $\theta$ and the point $P = (\cos\theta, \sin\theta)$), as $\theta \to 0$, the point $P$ approaches the fixed point $(1, 0)$, so

$$\tag{6} \lim_{\theta \to 0}\cos\theta = 1 \qquad \lim_{\theta \to 0}\sin\theta = 0$$

Since $\cos 0 = 1$ and $\sin 0 = 0$, equations (6) say that **the cosine and sine functions are continuous at 0**. The addition formulas

$$\sin(\theta + h) = \sin\theta\cos h + \cos\theta\sin h$$
$$\cos(\theta + h) = \cos\theta\cos h - \sin\theta\sin h$$

extend this to continuity everywhere. (The detailed argument uses continuity at 0 plus these addition formulas — see Exercises 56 and 57.)

**Tangent.** Since $\tan x = \sin x/\cos x$, Theorem 4 (Part 5) says $\tan$ is continuous wherever $\cos x \neq 0$, i.e., everywhere except at $x = \pm\pi/2, \pm 3\pi/2, \ldots$. This matches our observation in Section 2.2 that $\tan$ has vertical asymptotes at these points.

> **Figure 6 — $y = \tan x$.** Standard picture: periodic with vertical asymptotes at odd multiples of $\pi/2$, continuous on each interval between asymptotes.

**Inverse trig functions.** The inverse of any continuous one-to-one function is continuous (proved in Appendix F via the reflection-across-$y = x$ picture). So inverse trig functions ($\arcsin, \arccos, \arctan$, etc.) are continuous on their domains.

**Exponential and logarithmic functions.** Recall from Section 1.5 that $y = a^x$ was defined to be continuous on $\mathbb{R}$ (the "holes at irrational values" were *filled in* by the definition). Its inverse $y = \log_a x$ is therefore continuous on $(0, \infty)$.

---

## Theorem 7 — The Big Menu of Continuous Functions

Collecting the results so far:

> **Theorem 7.** The following types of functions are continuous at every number in their domains:
> - **Polynomials**
> - **Rational functions**
> - **Root functions**
> - **Trigonometric functions**
> - **Inverse trigonometric functions**
> - **Exponential functions**
> - **Logarithmic functions**

**This is the big menu.** Anything built from these via the algebraic operations of Theorem 4 (addition, subtraction, multiplication, division, constant multiple) is continuous on its domain.

**The list of "elementary functions" = menu + algebra + composition.** Plus Theorem 9 below (composition of continuous functions), every elementary function is continuous on its domain. Since essentially every function in applied math, physics, engineering, and finance is built from these building blocks, **continuity is the default** — discontinuities are the interesting exceptions.

---

### Example 6 — Where is $(\ln x + \arctan x)/(x^2 - 1)$ continuous?

Find where $f(x) = \dfrac{\ln x + \arctan x}{x^2 - 1}$ is continuous.

***Solution.*** Decompose into building blocks:

- $\ln x$ — continuous on $(0, \infty)$ (Theorem 7).
- $\arctan x = \tan^{-1} x$ — continuous on $\mathbb{R}$ (Theorem 7).
- Sum: $\ln x + \arctan x$ — continuous on $(0, \infty)$ by Theorem 4, Part 1.
- Denominator: $x^2 - 1$ is a polynomial, continuous on $\mathbb{R}$ (Theorem 7).
- Quotient: continuous at all points where denominator $\neq 0$, i.e., $x \neq \pm 1$.

**Combining:** $f$ is continuous on $(0, 1) \cup (1, \infty)$.

(We lose the point $x = 1$ because the denominator vanishes there, and the whole interval $(-\infty, 0]$ because $\ln x$ isn't defined there.)

---

### Example 7 — Evaluate $\lim_{x \to \pi}\dfrac{\sin x}{2 + \cos x}$

***Solution.*** Numerator $\sin x$ is continuous everywhere. Denominator $2 + \cos x$ is continuous everywhere (sum of continuous functions) and **never zero** because $\cos x \geq -1$, so $2 + \cos x \geq 1 > 0$.

By Theorem 4 Part 5, the quotient $\sin x / (2 + \cos x)$ is continuous everywhere. So by Definition 1:

$$\lim_{x \to \pi}\frac{\sin x}{2 + \cos x} = \frac{\sin\pi}{2 + \cos\pi} = \frac{0}{2 - 1} = 0$$

---

## Theorem 8 — The Limit-Moves-Through Principle

> **Theorem 8.** If $f$ is continuous at $b$ and $\lim_{x \to a}g(x) = b$, then $\lim_{x \to a}f(g(x)) = f(b)$. In other words,
> $$\lim_{x \to a}f(g(x)) = f\!\left(\lim_{x \to a}g(x)\right)$$

**In words: "a limit symbol can be moved through a function symbol" if the function is continuous and the limit exists.** The order of the two symbols can be reversed.

**Intuitive justification.** If $x$ is close to $a$, then $g(x)$ is close to $b$ (by the given limit). And since $f$ is continuous at $b$, when $g(x)$ is close to $b$, then $f(g(x))$ is close to $f(b)$. So $f(g(x)) \to f(b)$ as $x \to a$.

A rigorous proof is given in Appendix F. The key move: combine the ε-δ definition for $f$ continuity at $b$ with the ε-δ definition for $g$'s limit at $a$, using the "bound-then-refine" technique.

---

### Example 8 — Evaluate $\lim_{x \to 1}\arcsin\!\left(\frac{1 - \sqrt{x}}{1 - x}\right)$

***Solution.*** Because $\arcsin$ is continuous (Theorem 7), we can apply Theorem 8 to move the limit inside:

$$\lim_{x \to 1}\arcsin\!\left(\frac{1 - \sqrt{x}}{1 - x}\right) = \arcsin\!\left(\lim_{x \to 1}\frac{1 - \sqrt{x}}{1 - x}\right)$$

Now evaluate the inner limit. $1 - x = (1 - \sqrt{x})(1 + \sqrt{x})$ — factor difference of squares:

$$\lim_{x \to 1}\frac{1 - \sqrt{x}}{1 - x} = \lim_{x \to 1}\frac{1 - \sqrt{x}}{(1 - \sqrt{x})(1 + \sqrt{x})} = \lim_{x \to 1}\frac{1}{1 + \sqrt{x}} = \frac{1}{2}$$

Therefore:

$$\lim_{x \to 1}\arcsin\!\left(\frac{1 - \sqrt{x}}{1 - x}\right) = \arcsin\!\left(\frac{1}{2}\right) = \frac{\pi}{6}$$

$\blacksquare$

**Moving the limit inside is the core move.** When you see a continuous-looking function applied to a complicated expression whose limit is computable, swap the order: take the limit of the expression first, then apply the function. This converts "limit of $f(g(x))$" into "$f$ of a computed value" — much easier.

---

## Theorem 9 — Composition of Continuous Functions

> **Theorem 9.** If $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then the composite function $f \circ g$ given by $(f \circ g)(x) = f(g(x))$ is continuous at $a$.

**Informal statement:** "a continuous function of a continuous function is a continuous function."

**Proof.** By continuity of $g$ at $a$: $\lim_{x \to a}g(x) = g(a)$. By Theorem 8 (with $b = g(a)$): $\lim_{x \to a}f(g(x)) = f(g(a))$. That's precisely the statement that $f \circ g$ is continuous at $a$. $\blacksquare$

### Example 9 — Composition-based continuity

Where are the following functions continuous?

**(a) $h(x) = \sin(x^2)$.**

Decompose: $h(x) = f(g(x))$ with $g(x) = x^2$ and $f(x) = \sin x$.

- $g$ is a polynomial, continuous on $\mathbb{R}$ (Theorem 7).
- $f$ is continuous everywhere (Theorem 7).

By Theorem 9, $h = f \circ g$ is continuous on $\mathbb{R}$.

**(b) $F(x) = \ln(1 + \cos x)$.**

Decompose: $F = f \circ g$ with $g(x) = 1 + \cos x$ and $f(x) = \ln x$.

- $g$ is continuous on $\mathbb{R}$ (sum of constant and cosine).
- $f = \ln$ is continuous on $(0, \infty)$.

By Theorem 9, $F$ is continuous wherever $g(x) > 0$, i.e., wherever $1 + \cos x > 0$. Since $\cos x \geq -1$ with equality only at $x = \pm\pi, \pm 3\pi, \ldots$, $F$ is undefined exactly at the odd multiples of $\pi$. Otherwise, $F$ is continuous.

> **Figure 7 — $y = \ln(1 + \cos x)$.** Series of hump-shaped arcs on each interval $(-\pi, \pi), (\pi, 3\pi), \ldots$, each rising from $-\infty$ (where $\cos = -1$) to a peak at the center, then dropping back to $-\infty$. The function has **vertical asymptotes** at every odd multiple of $\pi$, but is continuous on each interval between them.

---

## The continuity toolkit — summary

By the end of Unit 1:

1. **Definition 1** — $f$ continuous at $a$ iff $\lim_{x \to a}f(x) = f(a)$.
2. **Three discontinuity types** — removable, infinite, jump.
3. **One-sided continuity** (Definition 2) and interval continuity (Definition 3).
4. **Algebra (Theorem 4)** — continuous functions close under $+, -, \times, /$ (nonzero), and scalar multiplication.
5. **Theorem 5** — polynomials are continuous on $\mathbb{R}$; rational functions on their domains.
6. **Theorem 7 (the big menu)** — polynomials, rationals, roots, trig, inverse trig, exp, log all continuous on their domains.
7. **Theorem 8** — limits commute with continuous functions: $\lim f(g(x)) = f(\lim g(x))$.
8. **Theorem 9** — composition of continuous is continuous.

**What you can do now.** Given any "elementary function" $f(x)$ built from the big menu via algebra and composition, you can identify its continuity set by:
1. Decomposing into building blocks from the menu.
2. Determining each block's domain/continuity set.
3. Combining via Theorems 4 and 9 (taking intersections of domains, respecting the chain of operations).

**This covers essentially every function you'll meet.** Discontinuities become detectable: at isolated domain-breaks (removable or infinite) or at points where a piecewise function switches (potentially jump).

---

*End of Unit 1 of Section 2.5. Unit 2 covers the Intermediate Value Theorem (Theorem 10) with Example 10, and all Section 2.5 exercises.*
