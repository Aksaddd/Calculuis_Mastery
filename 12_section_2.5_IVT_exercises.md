# Section 2.5 — Continuity (Part B): The Intermediate Value Theorem + Exercises

*Covers pp. 126–130 of the book (PDF pp. 154 mid – 158). The IVT — one of the three "big theorems" of continuous functions (alongside Extreme Value Theorem and Uniform Continuity) — with its root-locating application, then all 65 exercises.*

---

## The Intermediate Value Theorem

An important property of continuous functions is expressed by the following theorem, whose proof is found in more advanced books on calculus.

> **Theorem 10 — Intermediate Value Theorem (IVT).** Suppose that $f$ is continuous on the closed interval $[a, b]$ and let $N$ be any number between $f(a)$ and $f(b)$, where $f(a) \neq f(b)$. Then there exists a number $c \in (a, b)$ such that $f(c) = N$.

**In words: a continuous function takes every intermediate value between its values at the endpoints.**

### What the theorem says vs. what it doesn't

**It says:** if $f(a)$ and $f(b)$ are on opposite sides of $N$ (or straddle $N$), then somewhere strictly between $a$ and $b$, $f$ must equal $N$.

**It doesn't say:** $c$ is unique. There could be one value of $c$, or many.

> **Figure 8 — Two scenarios for the IVT.**
> - **(a) Unique $c$.** A strictly monotone curve crosses $y = N$ at a single point $c$.
> - **(b) Multiple $c$'s.** An oscillating curve crosses $y = N$ at three points $c_1, c_2, c_3$.
>
> **The conceptual content:** IVT guarantees existence — $c$ exists — but not uniqueness. The horizontal line $y = N$ **must be crossed at least once** but could be crossed many times.

```plot
{
  "title": "Figure 8(a) — monotone curve: exactly one c with f(c) = N",
  "width": 500, "height": 280,
  "xRange": [0, 5], "yRange": [-0.5, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "0.2 + 0.9*x", "domain": [0, 5], "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "horizontal", "y": 2.5, "color": "#2867b2", "width": 1.5, "dash": "4 3"}
  ],
  "points": [
    {"x": 0, "y": 0.2, "style": "filled", "color": "#1f2430", "label": "(a, f(a))", "labelDx": 10, "labelDy": -6},
    {"x": 5, "y": 4.7, "style": "filled", "color": "#1f2430", "label": "(b, f(b))", "labelDx": -10, "labelDy": -8, "labelAnchor": "end"},
    {"x": 2.5555, "y": 2.5, "style": "filled", "color": "#b04a2f", "label": "c", "labelDx": -6, "labelDy": -10, "labelAnchor": "end"}
  ],
  "annotations": [
    {"x": 4.7, "y": 2.75, "text": "y = N", "color": "#2867b2", "italic": false, "anchor": "end"}
  ],
  "caption": "Monotone crossings are unique."
}
```

```plot
{
  "title": "Figure 8(b) — oscillating curve: three points c with f(c) = N",
  "width": 500, "height": 280,
  "xRange": [0, 5], "yRange": [-0.5, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "2.5 + 1.6*sin(2*(x - 0.5))", "domain": [0, 5], "color": "#b04a2f", "width": 2.2, "samples": 400}
  ],
  "lines": [
    {"type": "horizontal", "y": 2.5, "color": "#2867b2", "width": 1.5, "dash": "4 3"}
  ],
  "points": [
    {"x": 0, "y": 1.154, "style": "filled", "color": "#1f2430", "label": "(a, f(a))", "labelDx": 10, "labelDy": 14},
    {"x": 5, "y": 0.961, "style": "filled", "color": "#1f2430", "label": "(b, f(b))", "labelDx": -10, "labelDy": 14, "labelAnchor": "end"},
    {"x": 0.5,   "y": 2.5, "style": "filled", "color": "#b04a2f", "label": "c₁", "labelDx": -4, "labelDy": -10, "labelAnchor": "end"},
    {"x": 2.0708,"y": 2.5, "style": "filled", "color": "#b04a2f", "label": "c₂", "labelDx": -4, "labelDy": -10, "labelAnchor": "end"},
    {"x": 3.6415,"y": 2.5, "style": "filled", "color": "#b04a2f", "label": "c₃", "labelDx":  4, "labelDy": -10}
  ],
  "annotations": [
    {"x": 4.7, "y": 2.75, "text": "y = N", "color": "#2867b2", "italic": false, "anchor": "end"}
  ],
  "caption": "Oscillating curves may cross N many times — IVT only promises at least one."
}
```

### Intuition and geometric argument

**If we think of a continuous function as a function whose graph has no hole or break, then it is easy to believe the IVT is true.** In geometric terms: if any horizontal line $y = N$ is given between $y = f(a)$ and $y = f(b)$ (Figure 9), then the graph of $f$ can't jump over the line. It must intersect $y = N$ somewhere.

> **Figure 9.** The curve starts at $(a, f(a))$ with $f(a) > N$ (above the line), ends at $(b, f(b))$ with $f(b) < N$ (below the line). Since the graph is continuous — no gaps, no jumps — it must cross $y = N$ somewhere in $(a, b)$.

```plot
{
  "title": "Figure 9 — the curve can't jump over y = N",
  "width": 500, "height": 280,
  "xRange": [0, 5], "yRange": [-0.5, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "4 - 0.5*x - 0.2*(x - 2)*(x - 2)*cos(x)", "domain": [0, 5], "color": "#b04a2f", "width": 2.2, "samples": 500}
  ],
  "lines": [
    {"type": "horizontal", "y": 2, "color": "#2867b2", "width": 1.5, "dash": "4 3"}
  ],
  "points": [
    {"x": 0, "y": 3.2, "style": "filled", "color": "#1f2430", "label": "(a, f(a))", "labelDx": 10, "labelDy": 6},
    {"x": 5, "y": 0.22,"style": "filled", "color": "#1f2430", "label": "(b, f(b))", "labelDx": -10, "labelDy": -8, "labelAnchor": "end"}
  ],
  "annotations": [
    {"x": 4.7, "y": 2.25, "text": "y = N", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 0.2, "y": 4.5,  "text": "f(a) > N",  "color": "#1f2430", "italic": false},
    {"x": 4.8, "y": 0.6,  "text": "f(b) < N",  "color": "#1f2430", "italic": false, "anchor": "end"}
  ],
  "caption": "To get from above the line to below it, the continuous curve has to cross y = N somewhere in between."
}
```

### Continuity is essential

**It is important that the function $f$ in Theorem 10 be continuous.** The IVT is not true in general for discontinuous functions. (See Exercise 44 — a discontinuous function can "skip over" values.)

**Example of failure:** consider $f(x) = \llbracket x \rrbracket$ on $[0, 1]$. $f(0) = 0$ and $f(1) = 1$. Pick $N = 0.5$. There is no $c \in (0, 1)$ with $f(c) = 0.5$ — the floor function is $0$ on $[0, 1)$ and jumps to $1$ only at $x = 1$. **The jump lets the function skip the intermediate value.**

### Main application — locating roots of equations

One use of the IVT is in **locating roots of equations**, as the following example shows.

---

### Example 10 — Locating a root of $4x^3 - 6x^2 + 3x - 2 = 0$

Show that there is a root of the equation $4x^3 - 6x^2 + 3x - 2 = 0$ between 1 and 2.

***Solution.*** Let $f(x) = 4x^3 - 6x^2 + 3x - 2$. We're looking for a number $c$ between 1 and 2 such that $f(c) = 0$. So apply Theorem 10 with $a = 1$, $b = 2$, and $N = 0$.

**Evaluate at the endpoints:**

$$f(1) = 4 - 6 + 3 - 2 = -1 < 0$$

$$f(2) = 32 - 24 + 6 - 2 = 12 > 0$$

So $f(1) < 0 < f(2)$; that is, $N = 0$ is a number between $f(1)$ and $f(2)$.

**$f$ is continuous** since it is a polynomial (Theorem 5). By the IVT, there is a number $c$ between 1 and 2 such that $f(c) = 0$. **In other words, the equation $4x^3 - 6x^2 + 3x - 2 = 0$ has at least one root $c$ in $(1, 2)$.** $\blacksquare$

### Bisection refinement

We can locate the root more precisely by using IVT again. Compute:

$$f(1.2) = -0.128 < 0 \qquad f(1.3) = 0.548 > 0$$

So a root must lie between 1.2 and 1.3. Further:

$$f(1.22) = -0.007008 < 0 \qquad f(1.23) = 0.056068 > 0$$

So a root lies in $(1.22, 1.23)$.

> **Figure 10.** The graph of $f(x) = 4x^3 - 6x^2 + 3x - 2$ in the viewing rectangle $[-1, 3] \times [-3, 3]$. The curve crosses the $x$-axis exactly once, between $x = 1$ and $x = 2$.

```plot
{
  "title": "Figure 10 — f(x) = 4x³ − 6x² + 3x − 2 on [−1, 3]",
  "width": 520, "height": 320,
  "xRange": [-1, 3], "yRange": [-3, 3],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "4*x*x*x - 6*x*x + 3*x - 2", "domain": [-1, 3], "color": "#b04a2f", "width": 2.2, "samples": 500}
  ],
  "points": [
    {"x": 1, "y": -1, "style": "filled", "color": "#1f2430", "label": "f(1) = −1", "labelDx": 10, "labelDy": 14},
    {"x": 2, "y": 12, "style": "filled", "color": "#1f2430"}
  ],
  "annotations": [
    {"x": 2.3, "y": 1.3, "text": "(2, 12) lies above this window", "color": "#5b6477", "italic": false, "size": 10, "anchor": "end"}
  ],
  "caption": "f(1) = −1 < 0 and f(2) = 12 > 0. The continuous cubic must pass through zero somewhere in (1, 2)."
}
```

> **Figure 11.** Zoom to $[1.2, 1.3] \times [-0.2, 0.2]$. The crossing is now visible between $x = 1.22$ and $x = 1.23$.

```plot
{
  "title": "Figure 11 — zoom to [1.2, 1.3] × [−0.2, 0.2]",
  "width": 520, "height": 320,
  "xRange": [1.2, 1.3], "yRange": [-0.2, 0.2],
  "xStep": 0.02, "yStep": 0.05,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "4*x*x*x - 6*x*x + 3*x - 2", "domain": [1.2, 1.3], "color": "#b04a2f", "width": 2.2, "samples": 400}
  ],
  "points": [
    {"x": 1.22, "y": -0.007, "style": "filled", "color": "#1f2430", "label": "f(1.22) < 0", "labelDx": -10, "labelDy": 14, "labelAnchor": "end"},
    {"x": 1.23, "y":  0.056, "style": "filled", "color": "#1f2430", "label": "f(1.23) > 0", "labelDx": 10,  "labelDy": -8}
  ],
  "caption": "The sign change is now confined to (1.22, 1.23). One more bisection round would trap the root in an interval of length 0.005."
}
```

**This procedure has a name: the *bisection method*.** Halve the interval each step by evaluating at the midpoint, keep whichever half contains the sign change, and iterate. **It's guaranteed to converge** — the error at step $n$ is at most $(b - a)/2^n$. This is the single most bulletproof (if slow) root-finder in numerical analysis.

### Why the IVT matters going forward

**This theorem is a workhorse of applied math and appears everywhere in your future.**

**For your quant track specifically:**

- **Implied volatility calculation.** Given a market option price, find the volatility $\sigma$ such that Black-Scholes$(\sigma) = \text{price}$. The Black-Scholes formula is continuous in $\sigma$; at $\sigma = 0$ it gives the intrinsic value, at $\sigma \to \infty$ it gives something much larger. If the market price is between these extremes, **IVT guarantees an implied volatility exists**. Numerical implementations typically use bisection or Newton's method to find it — both rest on IVT.
- **Yield calculation for bonds.** Given a bond price, find the yield $y$ such that PV$(y) = $ price. Present value is a continuous, monotone function of $y$. IVT → unique yield, root-finding extracts it.
- **Calibration.** Match a model output to a market observation by tuning a parameter. Continuity of the output in the parameter + IVT = existence of a calibrating value.
- **Existence of equilibria.** Many economic equilibrium existence proofs (supply = demand, Brouwer fixed-point) reduce to IVT in 1D or its higher-dimensional analogs.

**IVT is also how graphing calculators work.** A calculator computes a finite number of points on the graph and turns on pixels that contain these calculated points. It assumes that the function is continuous and takes on all the intermediate values between two consecutive points — so the calculator connects the pixels by turning on the intermediate pixels. **Every time you see a smooth-looking curve on a calculator screen, you're seeing IVT assumed at every pixel.**

---

## Exercises

*Legend: `[HINT]` = cyan-boxed; `[GRAPH]` = graphing tool.*

---

### Definition-based questions (Exercises 1–2)

**1.** Write an equation that expresses the fact that a function $f$ is continuous at the number 4.

**2.** If $f$ is continuous on $(-\infty, \infty)$, what can you say about its graph?

---

### Read discontinuities from a graph (Exercises 3–4)

**3.** `[HINT]`
- (a) From the graph of $f$, state the numbers at which $f$ is discontinuous and explain why.
- (b) For each of the numbers stated in part (a), determine whether $f$ is continuous from the right, or from the left, or neither.

> **Graph provided.** A curve on $[-4, 6]$ with three discontinuity points visible (hole, jump, or open/closed circle markers).

**4.** From the graph of $g$, state the intervals on which $g$ is continuous.

> **Graph provided.** A piecewise curve on $[-4, 8]$ with several break points.

---

### Sketch with specified properties (Exercises 5–6)

**5.** Sketch the graph of a function that is continuous everywhere except at $x = 3$ and is continuous from the left at 3.

**6.** Sketch the graph of a function that has a jump discontinuity at $x = 2$ and a removable discontinuity at $x = 4$, but is continuous elsewhere.

---

### Parking lot context (Exercise 7)

**7.** `[HINT]` A parking lot charges \$3 for the first hour (or part of an hour) and \$2 for each succeeding hour (or part), up to a daily maximum of \$10.
- (a) Sketch a graph of the cost of parking at this lot as a function of the time parked there.
- (b) Discuss the discontinuities of this function and their significance to someone who parks in the lot.

---

### Continuity assessment (Exercise 8)

**8.** Explain why each function is continuous or discontinuous.
- (a) The temperature at a specific location as a function of time.
- (b) The temperature at a specific time as a function of the distance due west from New York City.
- (c) The altitude above sea level as a function of the distance due west from New York City.
- (d) The cost of a taxi ride as a function of the distance traveled.
- (e) The current in the circuit for the lights in a room as a function of time.

---

### Limit from continuity (Exercise 9)

**9.** If $f$ and $g$ are continuous functions with $f(3) = 5$ and $\lim_{x \to 3}[2f(x) - g(x)] = 4$, find $g(3)$.

---

### Use definition to prove continuity (Exercises 10–14)

**10–12.** Use the definition of continuity and the properties of limits to show that the function is continuous at the given number $a$.

**10.** $f(x) = x^2 + \sqrt{7 - x}$, $\ a = 4$

**11.** `[HINT]` $f(x) = (x + 2x^3)^4$, $\ a = -1$

**12.** $h(t) = \dfrac{2t - 3t^2}{1 + t^3}$, $\ a = 1$

**13–14.** Use the definition of continuity and the properties of limits to show that the function is continuous on the given interval.

**13.** $f(x) = \dfrac{2x + 3}{x - 2}$, &nbsp; $(2, \infty)$

**14.** $g(x) = 2\sqrt{3 - x}$, &nbsp; $(-\infty, 3]$

---

### Explain discontinuity (Exercises 15–20)

**15–20.** Explain why the function is discontinuous at the given number $a$. Sketch the graph of the function.

**15.** $f(x) = \ln|x - 2|$, $\ a = 2$

**16.** $f(x) = \begin{cases} \dfrac{1}{x - 1} & \text{if } x \neq 1 \\ 2 & \text{if } x = 1 \end{cases}$, $\ a = 1$

**17.** $f(x) = \begin{cases} e^x & \text{if } x < 0 \\ x^2 & \text{if } x \geq 0 \end{cases}$, $\ a = 0$

**18.** `[HINT]` $f(x) = \begin{cases} \dfrac{x^2 - x}{x^2 - 1} & \text{if } x \neq 1 \\ 1 & \text{if } x = 1 \end{cases}$, $\ a = 1$

**19.** $f(x) = \begin{cases} \cos x & \text{if } x < 0 \\ 0 & \text{if } x = 0 \\ 1 - x^2 & \text{if } x > 0 \end{cases}$, $\ a = 0$

**20.** $f(x) = \begin{cases} \dfrac{2x^2 - 5x - 3}{x - 3} & \text{if } x \neq 3 \\ 6 & \text{if } x = 3 \end{cases}$, $\ a = 3$

---

### Where continuous — state domain (Exercises 21–28)

**21–28.** Explain, using Theorems 4, 5, 7, and 9, why the function is continuous at every number in its domain. State the domain.

**21.** $F(x) = \dfrac{x}{x^2 + 5x + 6}$

**22.** $G(x) = \sqrt[3]{x}(1 + x^3)$

**23.** $R(x) = x^2 + \sqrt{2x - 1}$

**24.** $h(x) = \dfrac{\sin x}{x + 1}$

**25.** $L(t) = e^{-5t}\cos 2\pi t$

**26.** $F(x) = \sin^{-1}(x^2 - 1)$

**27.** `[HINT]` $G(t) = \ln(t^4 - 1)$

**28.** $H(x) = \cos\!\left(e^{\sqrt{x}}\right)$

---

### Locate discontinuities (Exercises 29–30)

**29.** `[HINT][GRAPH]` $y = \dfrac{1}{1 + e^{1/x}}$

**30.** `[GRAPH]` $y = \ln(\tan^2 x)$

---

### Limit via continuity (Exercises 31–34)

**31–34.** Use continuity to evaluate the limit.

**31.** $\displaystyle \lim_{x \to 4}\frac{5 + \sqrt{x}}{\sqrt{5 + x}}$

**32.** `[HINT]` $\displaystyle \lim_{x \to \pi}\sin(x + \sin x)$

**33.** $\displaystyle \lim_{x \to 1}e^{x^2 - x}$

**34.** $\displaystyle \lim_{x \to 2}\arctan\!\left(\frac{x^2 - 4}{3x^2 - 6x}\right)$

---

### Piecewise continuity (Exercises 35–39)

**35–36.** Show that $f$ is continuous on $(-\infty, \infty)$.

**35.** $f(x) = \begin{cases} x^2 & \text{if } x < 1 \\ \sqrt{x} & \text{if } x \geq 1 \end{cases}$

**36.** $f(x) = \begin{cases} \sin x & \text{if } x < \pi/4 \\ \cos x & \text{if } x \geq \pi/4 \end{cases}$

**37–39.** Find the numbers at which $f$ is discontinuous. At which of these numbers is $f$ continuous from the right, from the left, or neither? Sketch the graph of $f$.

**37.** $f(x) = \begin{cases} 1 + x^2 & \text{if } x \leq 0 \\ 2 - x & \text{if } 0 < x \leq 2 \\ (x - 2)^2 & \text{if } x > 2 \end{cases}$

**38.** $f(x) = \begin{cases} x + 1 & \text{if } x \leq 1 \\ 1/x & \text{if } 1 < x < 3 \\ \sqrt{x - 3} & \text{if } x \geq 3 \end{cases}$

**39.** `[HINT]` $f(x) = \begin{cases} x + 2 & \text{if } x < 0 \\ e^x & \text{if } 0 \leq x \leq 1 \\ 2 - x & \text{if } x > 1 \end{cases}$

---

### Gravity (Exercise 40)

**40.** The gravitational force exerted by the earth on a unit mass at a distance $r$ from the center of the planet is
$$F(r) = \begin{cases} \dfrac{GMr}{R^3} & \text{if } r < R \\ \dfrac{GM}{r^2} & \text{if } r \geq R \end{cases}$$
where $M$ is the mass of the earth, $R$ is its radius, and $G$ is the gravitational constant. Is $F$ a continuous function of $r$?

---

### Find constants for continuity (Exercises 41–43)

**41.** `[HINT]` For what value of the constant $c$ is the function $f$ continuous on $(-\infty, \infty)$?
$$f(x) = \begin{cases} cx^2 + 2x & \text{if } x < 2 \\ x^3 - cx & \text{if } x \geq 2 \end{cases}$$

**42.** Find the values of $a$ and $b$ that make $f$ continuous everywhere.
$$f(x) = \begin{cases} \dfrac{x^2 - 4}{x - 2} & \text{if } x < 2 \\ ax^2 - bx + 3 & \text{if } 2 \leq x < 3 \\ 2x - a + b & \text{if } x \geq 3 \end{cases}$$

**43.** Which of the following functions $f$ has a removable discontinuity at $a$? If the discontinuity is removable, find a function $g$ that agrees with $f$ for $x \neq a$ and is continuous at $a$.
- (a) $f(x) = \dfrac{x^4 - 1}{x - 1}$, $\ a = 1$
- (b) $f(x) = \dfrac{x^3 - x^2 - 2x}{x - 2}$, $\ a = 2$
- (c) $f(x) = \llbracket \sin x \rrbracket$, $\ a = \pi$

---

### IVT failure for discontinuous functions (Exercise 44)

**44.** Suppose that a function $f$ is continuous on $[0, 1]$ except at 0.25 and that $f(0) = 1$ and $f(1) = 3$. Let $N = 2$. Sketch two possible graphs of $f$, one showing that $f$ might not satisfy the conclusion of the Intermediate Value Theorem and one showing that $f$ might still satisfy the conclusion of the IVT (even though it doesn't satisfy the hypothesis).

---

### Applications of IVT (Exercises 45–46)

**45.** If $f(x) = x^2 + 10\sin x$, show that there is a number $c$ such that $f(c) = 1000$.

**46.** Suppose $f$ is continuous on $[1, 5]$ and the only solutions of the equation $f(x) = 6$ are $x = 1$ and $x = 4$. If $f(2) = 8$, explain why $f(3) > 6$.

---

### Use IVT to prove a root exists (Exercises 47–50)

**47–50.** Use the Intermediate Value Theorem to show that there is a root of the given equation in the specified interval.

**47.** `[HINT]` $x^4 + x - 3 = 0$, $\ (1, 2)$

**48.** $\sqrt[3]{x} = 1 - x$, $\ (0, 1)$

**49.** $\cos x = x$, $\ (0, 1)$

**50.** $\ln x = e^{-x}$, $\ (1, 2)$

---

### Prove equation has root + locate interval (Exercises 51–54)

**51–52.**
- (a) Prove that the equation has at least one real root.
- (b) Use your calculator to find an interval of length 0.01 that contains a root.

**51.** $\cos x = x^3$

**52.** $\ln x = 3 - 2x$

**53–54.** `[GRAPH]`
- (a) Prove that the equation has at least one real root.
- (b) Use your graphing device to find the root correct to three decimal places.

**53.** `[HINT]` $100\,e^{-x/100} = 0.01 x^2$

**54.** $\arctan x = 1 - x$

---

### Theorem proofs (Exercises 55–60)

**55.** Prove that $f$ is continuous at $a$ if and only if
$$\lim_{h \to 0}f(a + h) = f(a)$$

**56.** To prove that sine is continuous, we need to show that $\lim_{x \to a}\sin x = \sin a$ for every real number $a$. By Exercise 55 an equivalent statement is that
$$\lim_{h \to 0}\sin(a + h) = \sin a$$
Use (6) to show that this is true.

**57.** Prove that cosine is a continuous function.

**58.**
- (a) Prove Theorem 4, Part 3.
- (b) Prove Theorem 4, Part 5.

**59.** For what values of $x$ is $f$ continuous?
$$f(x) = \begin{cases} 0 & \text{if } x \text{ is rational} \\ 1 & \text{if } x \text{ is irrational} \end{cases}$$

**60.** For what values of $x$ is $g$ continuous?
$$g(x) = \begin{cases} 0 & \text{if } x \text{ is rational} \\ x & \text{if } x \text{ is irrational} \end{cases}$$

---

### IVT tricky questions (Exercises 61–65)

**61.** `[HINT]` Is there a number that is exactly 1 more than its cube?

**62.** If $a$ and $b$ are positive numbers, prove that the equation
$$\frac{a}{x^3 + 2x^2 - 1} + \frac{b}{x^3 + x - 2} = 0$$
has at least one solution in the interval $(-1, 1)$.

**63.** Show that the function
$$f(x) = \begin{cases} x^4 \sin(1/x) & \text{if } x \neq 0 \\ 0 & \text{if } x = 0 \end{cases}$$
is continuous on $(-\infty, \infty)$.

**64.**
- (a) Show that the absolute value function $F(x) = |x|$ is continuous everywhere.
- (b) Prove that if $f$ is a continuous function on an interval, then so is $|f|$.
- (c) Is the converse of the statement in part (b) also true? In other words, if $|f|$ is continuous, does it follow that $f$ is continuous? If so, prove it. If not, find a counterexample.

**65.** A Tibetan monk leaves the monastery at 7:00 AM and takes his usual path to the top of the mountain, arriving at 7:00 PM. The following morning, he starts at 7:00 AM at the top and takes the same path back, arriving at the monastery at 7:00 PM. Use the Intermediate Value Theorem to show that there is a point on the path that the monk will cross at exactly the same time of day on both days.

---

*This closes Section 2.5 Exercises.*

## Priority gradient

Section 2.5 exercises cluster around three skills: **identifying discontinuities**, **proving continuity via theorems**, and **using IVT to prove existence**.

**Highest value — the IVT applications:**

- **Exercises 47–50** — IVT root-existence proofs. Essential technique. $x^4 + x - 3 = 0$, $\sqrt[3]{x} = 1 - x$, $\cos x = x$, $\ln x = e^{-x}$. All polynomial, radical, or transcendental. **This is the root-finding setup for implied volatility, yield, and any calibration problem.** Do at least two.
- **Exercise 49** specifically — $\cos x = x$ on $(0, 1)$. This is the **fixed point of cosine**, equal to the famous Dottie number ($\approx 0.7390851332$). Iterate $x \leftarrow \cos x$ starting from any angle and you converge to this number. A cultural landmark.
- **Exercise 61** — "is there a number exactly 1 more than its cube?" Rephrase: does $x^3 - x + 1 = 0$ have a solution? $f(0) = 1, f(-2) = -5$, so yes. Good translation practice.
- **Exercise 65** — the Tibetan monk problem. A beautiful application of IVT to the *intersection* of two functions. Let $f(t)$ = ascending position, $g(t)$ = descending position. Then $h(t) = f(t) - g(t)$ has $h(0) < 0$ and $h(12) > 0$, so $h(t_0) = 0$ for some $t_0$ — meaning at time $t_0$ the monk is at the same height. **Bolzano's clever application of IVT — totally non-obvious until you frame it right.**

**High value — parameter-finding:**

- **Exercise 41** — find $c$ making the piecewise function continuous. Technique: force $\lim_{x\to 2^-} = \lim_{x\to 2^+}$. $c(4) + 4 = 8 - 2c$, so $4c + 4 = 8 - 2c \Rightarrow 6c = 4 \Rightarrow c = 2/3$. **This is the standard parameter-matching calibration problem.** Do it.
- **Exercise 42** — two-parameter version. Set up both continuity conditions (at $x = 2$ and $x = 3$) and solve the 2×2 system. Exactly the bivariate calibration setup used in financial model fitting.
- **Exercise 43** — identify removable discontinuities and "patch" them. Recognize $(x^4 - 1)/(x - 1) = x^3 + x^2 + x + 1$; patch $g(1) = 4$. This is the standard "clean up a formula" move for numerical code.

**Medium value:**

- **Exercises 10–14** — use the definition to prove continuity. Pick one.
- **Exercises 21–28** — state the domain on which a function is continuous. Mechanical; pick 2–3.
- **Exercises 31–34** — evaluate limit via continuity (plug-in). Trivial if you know the big menu; pick one.
- **Exercises 35–38** — piecewise continuity checks. Pick one.
- **Exercises 51–54** — prove root exists, then refine numerically. Pick one (53 is especially nice — exponential vs. quadratic crossover).

**Skim or skip:**

- **Exercises 1–4** (concept / graph-reading) — one at most.
- **Exercises 5–9** (various warm-ups).
- **Exercise 40** (gravitational force continuity) — nice physics connection but repetitive.
- **Exercises 55–58** (theorem proofs, including proving Theorem 4 Part 3 and 5) — if you want the proof practice.
- **Exercise 59, 60** — rational/irrational contrived function. Answer: (59) nowhere continuous (Dirichlet function); (60) continuous only at $x = 0$. Cultural landmarks but niche.
- **Exercise 63** — similar to Example 11 of Section 2.3; squeeze theorem under the hood.
- **Exercise 64** — absolute value continuity; part (c) has a counterexample (e.g., $f(x) = 1$ for rationals, $-1$ for irrationals; $|f| = 1$ everywhere continuous, but $f$ discontinuous everywhere).

**Must-do list:** **41, 47–50, 61, 65.**

- **41** — parameter-matching for continuity (the calibration pattern).
- **47–50** — IVT root-existence proofs (pick two).
- **61** — IVT translation practice ("rephrase the question as a zero-finding problem").
- **65** — IVT's cultural landmark application (the monk problem) — you'll remember this forever once you see it.

---

## Section 2.5 complete. Two files delivered:

- `11_section_2.5_continuity.md`
- `12_section_2.5_IVT_exercises.md` (this file)

**Next up: Section 2.6 — Limits at Infinity; Horizontal Asymptotes.** The dual to infinite limits: instead of $x$ approaching a point where $f$ blows up, we let $x$ itself go to $\pm\infty$ and see what finite value (if any) $f$ approaches. Introduces horizontal asymptotes, the asymptotic-growth hierarchy made precise, and the techniques for computing limits at infinity algebraically.

**Section 2.6 plan** (2 units):
1. Definition + horizontal asymptotes + limit-at-infinity computations
2. Precise ε-N definition + Exercises
