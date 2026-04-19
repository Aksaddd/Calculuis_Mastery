# Section 1.2 — Polynomials and Power Functions

*Covers pp. 28–31 top of the book (PDF pp. 56 middle – 59 top). The second and third function families in Stewart's catalog: polynomials (finite sums of nonnegative integer powers) and power functions ($x^a$ for arbitrary constant $a$), including root functions and the reciprocal.*

---

## Polynomials

> **Definition.** A function $P$ is a **polynomial** if
> $$P(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_2 x^2 + a_1 x + a_0$$
> where $n$ is a **nonnegative integer** and the numbers $a_0, a_1, a_2, \ldots, a_n$ are constants called the **coefficients**.

**Vocabulary.**

- **Domain.** Every polynomial has domain $\mathbb{R} = (-\infty, \infty)$.
- **Leading coefficient.** $a_n$, the coefficient of the highest power.
- **Degree.** If $a_n \neq 0$, the **degree** of $P$ is $n$.

**Example.** $P(x) = 2x^6 - x^4 + \tfrac{2}{5}x^3 + \sqrt{2}$ is a polynomial of degree 6.

### Named low-degree cases

**Degree 1 — linear.** $P(x) = mx + b$. Already covered in Unit 1.

**Degree 2 — quadratic.** $P(x) = ax^2 + bx + c$, called a **quadratic function**. Its graph is always a parabola — a shift of $y = ax^2$. It opens *upward* if $a > 0$ and *downward* if $a < 0$.

> **Figure 7 — Quadratics are parabolas.**
> - **(a)** $y = x^2 + x + 1$: upward parabola, axis of symmetry to the left of the $y$-axis (minimum at $x = -\tfrac{1}{2}$, $y = \tfrac{3}{4}$).
> - **(b)** $y = -2x^2 + 3x + 1$: downward parabola, peak in the first quadrant near $x = \tfrac{3}{4}$, $y \approx 2.1$.

**Degree 3 — cubic.** $P(x) = ax^3 + bx^2 + cx + d$ with $a \neq 0$. Called a **cubic function**.

> **Figure 8 — Higher-degree polynomials.**
> - **(a)** $y = x^3 - x + 1$: cubic, monotone-ish shape with a local max and local min near the origin, passing through $(0, 1)$.
> - **(b)** $y = x^4 - 3x^2 + x$: quartic with a "W-like" profile — two local minima and one local maximum, passing through the origin.
> - **(c)** $y = 3x^5 - 25x^3 + 60x$: degree-5 with multiple turning points, graph shown with $y$-scale marked at $20$, exhibits the characteristic odd-degree end behavior (down on the far left, up on the far right).

**Why the shapes look that way is answered in Chapter 4** (first/second derivative tests for turning points and inflection).

Polynomials are commonly used to model quantities in natural and social sciences. Section 3.7 explains why economists often use polynomial cost functions $P(x)$ for producing $x$ units. Here, we model a falling ball.

---

### Example 4 — Quadratic model for a falling ball (CN Tower)

A ball is dropped from the upper observation deck of the CN Tower, 450 m above the ground, and its height $h$ above the ground is recorded at 1-second intervals:

**Table 2.**

| Time $t$ (s) | Height $h$ (m) |
|:---:|:---:|
| 0 | 450 |
| 1 | 445 |
| 2 | 431 |
| 3 | 408 |
| 4 | 375 |
| 5 | 332 |
| 6 | 279 |
| 7 | 216 |
| 8 | 143 |
| 9 | 61 |

Find a model to fit the data and use the model to predict when the ball hits the ground.

***Solution.*** Plot the points (Figure 9). A linear model is inappropriate — the drops per second are accelerating (5, 14, 23, 33, 43, 53, 63, 73, 82 m). The shape looks parabolic, so fit a quadratic by least squares (calculator or CAS):

$$\tag{3} h = 449.36 + 0.96\,t - 4.90\,t^2$$

> **Figure 9 — Scatter plot for the falling ball.** $h$ (meters, 0–450) vs. $t$ (seconds, 0–9). The points trace a concave-down curve starting near 450 at $t = 0$ and descending steeply toward 0 at $t \approx 9.5$.

> **Figure 10 — Quadratic fit.** Same data points, now with the smooth parabola $h = 449.36 + 0.96t - 4.90t^2$ drawn through them. The fit is visually very tight.

**When does the ball hit the ground?** Set $h = 0$:

$$-4.90\,t^2 + 0.96\,t + 449.36 = 0$$

Quadratic formula:

$$t = \frac{-0.96 \pm \sqrt{(0.96)^2 - 4(-4.90)(449.36)}}{2(-4.90)}$$

The positive root is $t \approx 9.67$ s.

**Prediction: the ball hits the ground after about 9.7 seconds.**

**Physics connection.** The coefficient $-4.90$ in front of $t^2$ is essentially $-\tfrac{1}{2}g$ for $g \approx 9.8\text{ m/s}^2$. The constant $449.36$ is the initial height (close to the stated 450 m). The linear term $0.96\,t$ is small and captures measurement slop — if the drop were exactly free-fall from rest with no air resistance, the pure physics model would be

$$h_{\text{phys}}(t) = 450 - \tfrac{1}{2}(9.8)\,t^2 = 450 - 4.9\,t^2$$

The empirical fit recovers $g$ to within 0.2%, which is excellent for a least-squares fit of coarse data. This is a clean example of **data-derived model parameters matching a known physical constant** — a core validation technique whenever you're fitting empirical models in any science.

---

## Power Functions

> **Definition.** A function of the form $f(x) = x^a$, where $a$ is a constant, is called a **power function**.

The behavior depends dramatically on what kind of number $a$ is. Stewart works through three cases.

---

### Case (i): $a = n$, where $n$ is a positive integer

The graphs of $f(x) = x^n$ for $n = 1, 2, 3, 4, 5$ are polynomials with just one term.

> **Figure 11 — $f(x) = x^n$ for $n = 1, 2, 3, 4, 5$.** Five small graphs side by side. $y = x$ is a line through the origin with slope 1. $y = x^2$ is an upward parabola. $y = x^3, x^5$ are odd-symmetric sigmoids passing through the origin (steep arms up-right, down-left). $y = x^4$ is a "flatter-bottomed" parabola-like curve (even). All five pass through $(1, 1)$ (and the origin).

**The shape depends on parity of $n$:**

- $n$ even → $f(x) = x^n$ is **even**, graph resembles the parabola $y = x^2$, symmetric about the $y$-axis.
- $n$ odd → $f(x) = x^n$ is **odd**, graph resembles $y = x^3$, symmetric about the origin.

**Within each parity class, higher $n$ means:**

> As $n$ increases, the graph of $y = x^n$ becomes **flatter near $0$** and **steeper when $|x| \geq 1$**.

Reason: if $|x| < 1$, then $|x^2| < |x|$, $|x^3|$ is even smaller, $|x^4|$ smaller still, etc.; if $|x| > 1$, the inequalities flip.

> **Figure 12 — Families of power functions.**
> - **Left:** $y = x^2, x^4, x^6$ (all even). All pass through $(\pm 1, 1)$. As $n$ grows, the graphs pinch tighter to the $x$-axis between $x = -1$ and $x = 1$, then shoot upward more steeply outside.
> - **Right:** $y = x^3, x^5$ (both odd). Both pass through $(1, 1)$ and $(-1, -1)$. Same pinching-and-steepening pattern, but now origin-symmetric.

---

### Case (ii): $a = 1/n$, where $n$ is a positive integer

The function $f(x) = x^{1/n} = \sqrt[n]{x}$ is called a **root function**.

- **$n = 2$ (square root):** $f(x) = \sqrt{x}$. Domain $[0, \infty)$. The graph is the **upper half of the sideways parabola $x = y^2$** — exactly the same curve we dissected in the Vertical Line Test discussion (Section 1.1, Figure 14).
- **Other even $n$:** $y = \sqrt[n]{x}$ has the same general shape as $\sqrt{x}$.
- **$n = 3$ (cube root):** $f(x) = \sqrt[3]{x}$. Domain is **all of $\mathbb{R}$** (every real number has a unique real cube root).
- **Other odd $n \geq 3$:** same general shape as $\sqrt[3]{x}$.

> **Figure 13 — Root functions.**
> - **(a)** $f(x) = \sqrt{x}$: starts at the origin, rises with decreasing slope, passes through $(1, 1)$. Lives entirely in the first quadrant.
> - **(b)** $f(x) = \sqrt[3]{x}$: passes through the origin with a **vertical tangent**; rises to $(1, 1)$ on the right; mirrors into the third quadrant through $(-1, -1)$. Shape like a "stretched-and-flattened" $y = x^3$ rotated.

**Parity pattern for roots.** Even-root functions live in $[0, \infty)$ (can't take even roots of negatives in $\mathbb{R}$); odd-root functions are defined on all of $\mathbb{R}$ and are **odd**.

---

### Case (iii): $a = -1$, the reciprocal function

The **reciprocal function** $f(x) = x^{-1} = \dfrac{1}{x}$.

- Rewrite as $xy = 1$: this is a **hyperbola** with the coordinate axes as its asymptotes.
- Domain: $\{x \mid x \neq 0\}$. Range: $\{y \mid y \neq 0\}$.
- Odd function.

> **Figure 14 — The reciprocal function $y = \dfrac{1}{x}$.** Two branches: one in the first quadrant (near the origin the curve shoots up toward $+\infty$; far from the origin it hugs the $x$-axis), one in the third quadrant (mirror image through the origin). The graph never touches either axis.

**Physics/chemistry application — Boyle's Law.** At constant temperature, the volume $V$ of a gas is inversely proportional to the pressure $P$:

$$V = \frac{C}{P}$$

for some constant $C$. So $V$ as a function of $P$ has the same general shape as the right half of Figure 14.

> **Figure 15 — Volume as a function of pressure at constant temperature.** Axes: $P$ horizontal (positive only), $V$ vertical (positive only). A hyperbolic branch: high $V$ near $P = 0$, asymptotically approaching 0 as $P \to \infty$. Exactly the first-quadrant branch of $y = 1/x$, rescaled.

*Another instance in which a power function is used to model a physical phenomenon is discussed in Exercise 26 (Kepler's Third Law of Planetary Motion — the one with $T^2 \propto d^3$, which is fit by a power function with $a = 3/2$).*

---

## Why power functions matter generally

Power functions with non-integer $a$ (like $a = 3/2$ in Kepler's law, $a = 0.75$ in allometric scaling, $a = -2$ in inverse-square laws) are the natural language for **scaling relationships** throughout the sciences. You encounter them as:

- **Inverse-square laws** (gravity, Coulomb): $F \propto r^{-2}$.
- **Kepler's Third Law**: $T \propto d^{3/2}$ (Exercise 26).
- **Volatility-of-volatility scaling** in quantitative finance: implied vol often scales roughly as $\text{skew} \propto T^{-1/2}$ for short-dated options.
- **Fractal dimensions, power-law distributions** (Pareto, Zipf): tail probabilities behave like $x^{-\alpha}$.

The general **log-linear fitting trick** — if you suspect $y = k x^a$, plot $\log y$ vs. $\log x$; if the relationship is power-law, the log-log plot is a straight line with slope $a$ and intercept $\log k$. You'll use this constantly outside this course. Stewart introduces it implicitly in Exercise 26; it deserves to be a named technique in your notes.

---

*End of Unit 2. Next unit picks up at RATIONAL FUNCTIONS mid-page 59.*
