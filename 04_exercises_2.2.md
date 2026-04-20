# Section 2.2 — Exercises

*Covers pp. 96–99 top of the book (PDF pp. 124 bottom – 127 top). Full set: Exercises 1–42.*

*Legend: `[HINT]` = cyan-boxed number; `[GRAPH]` = graphing tool recommended; `[CAS]` = computer algebra system.*

---

## Concept questions (Exercises 1–4)

**1.** Explain in your own words what is meant by the equation
$$\lim_{x \to 2} f(x) = 5$$
Is it possible for this statement to be true and yet $f(2) = 3$? Explain.

**2.** Explain what it means to say that
$$\lim_{x \to 1^-} f(x) = 3 \qquad \text{and} \qquad \lim_{x \to 1^+} f(x) = 7$$
In this situation is it possible that $\lim_{x \to 1} f(x)$ exists? Explain.

**3.** Explain the meaning of each of the following.
- (a) $\displaystyle \lim_{x \to -3} f(x) = \infty$
- (b) $\displaystyle \lim_{x \to 4^+} f(x) = -\infty$

**4.** `[HINT]` For the function $f$ whose graph is given, state the value of each quantity, if it exists. If it does not exist, explain why.
- (a) $\displaystyle \lim_{x \to 0} f(x)$
- (b) $\displaystyle \lim_{x \to 3^-} f(x)$
- (c) $\displaystyle \lim_{x \to 3^+} f(x)$
- (d) $\displaystyle \lim_{x \to 3} f(x)$
- (e) $f(3)$

> **Graph provided.** A piecewise curve on a grid. Left piece rises from below 0, reaches a local max around $x = 1$, then descends to a jump discontinuity at $x = 3$. The left limit at $x = 3$ is 4 (open circle); a solid dot shows $f(3) = 3$; the right piece starts from a different open circle and descends.

---

## Limits from graphs (Exercises 5–10)

**5.** Use the given graph of $f$ to state the value of each quantity, if it exists. If it does not exist, explain why.
- (a) $\displaystyle \lim_{x \to 1^-} f(x)$
- (b) $\displaystyle \lim_{x \to 1^+} f(x)$
- (c) $\displaystyle \lim_{x \to 1} f(x)$
- (d) $\displaystyle \lim_{x \to 5} f(x)$
- (e) $f(5)$

> **Graph provided.** Piecewise curve with a breakpoint at $x = 1$ (jump from one height to another; open circles at both ends) and a smooth continuation to $x = 5$ with an open circle at $(5, \text{some value})$.

**6.** For the function $h$ whose graph is given, state the value of each quantity, if it exists. If it does not exist, explain why.
- (a) $\displaystyle \lim_{x \to -3^-} h(x)$
- (b) $\displaystyle \lim_{x \to -3^+} h(x)$
- (c) $\displaystyle \lim_{x \to -3} h(x)$
- (d) $h(-3)$
- (e) $\displaystyle \lim_{x \to 0^-} h(x)$
- (f) $\displaystyle \lim_{x \to 0^+} h(x)$
- (g) $\displaystyle \lim_{x \to 0} h(x)$
- (h) $h(0)$
- (i) $\displaystyle \lim_{x \to 2} h(x)$
- (j) $h(2)$
- (k) $\displaystyle \lim_{x \to 5^+} h(x)$
- (l) $\displaystyle \lim_{x \to 5^-} h(x)$

> **Graph provided.** A complex piecewise curve on a grid from $x = -4$ to $x = 6$ with several discontinuities and an oscillatory segment. Shows multiple jumps and open/solid-dot markers.

**7.** For the function $g$ whose graph is given, state the value of each quantity, if it exists. If it does not exist, explain why.
- (a) $\displaystyle \lim_{t \to 0^-} g(t)$
- (b) $\displaystyle \lim_{t \to 0^+} g(t)$
- (c) $\displaystyle \lim_{t \to 0} g(t)$
- (d) $\displaystyle \lim_{t \to 2^-} g(t)$
- (e) $\displaystyle \lim_{t \to 2^+} g(t)$
- (f) $\displaystyle \lim_{t \to 2} g(t)$
- (g) $g(2)$
- (h) $\displaystyle \lim_{t \to 4} g(t)$

> **Graph provided.** Curve from $t = 0$ to $t = 4$ showing a jump at $t = 2$, with open and solid circles indicating the piecewise values.

**8.** For the function $R$ whose graph is shown, state the following.
- (a) $\displaystyle \lim_{x \to 2} R(x)$
- (b) $\displaystyle \lim_{x \to 5} R(x)$
- (c) $\displaystyle \lim_{x \to -3^-} R(x)$
- (d) $\displaystyle \lim_{x \to -3^+} R(x)$
- (e) The equations of the vertical asymptotes.

> **Graph provided.** Two-branch rational-function-style graph with vertical asymptotes visible at approximately $x = -3$ and $x = 2$, showing branches plunging to $\pm\infty$.

**9.** For the function $f$ whose graph is shown, state the following.
- (a) $\displaystyle \lim_{x \to -7} f(x)$
- (b) $\displaystyle \lim_{x \to -3} f(x)$
- (c) $\displaystyle \lim_{x \to 0} f(x)$
- (d) $\displaystyle \lim_{x \to 6^-} f(x)$
- (e) $\displaystyle \lim_{x \to 6^+} f(x)$
- (f) The equations of the vertical asymptotes.

> **Graph provided.** Multi-branch curve over $x \in [-8, 8]$ with vertical asymptotes clearly visible.

**10.** A patient receives a 150-mg injection of a drug every 4 hours. The graph shows the amount $f(t)$ of the drug in the bloodstream after $t$ hours. Find
$$\lim_{t \to 12^-} f(t) \qquad \text{and} \qquad \lim_{t \to 12^+} f(t)$$
and explain the significance of these one-sided limits.

> **Graph provided.** A sawtooth-like pattern: the drug level rises sharply at $t = 0, 4, 8, 12, 16, \ldots$ (each new injection) up to about 300 mg, then decays exponentially to about 150 mg just before the next injection.

---

## Limit from a graph by function analysis (Exercise 11)

**11.** `[HINT][GRAPH]` Use the graph of the function $f(x) = 1/(1 + e^{1/x})$ to state the value of each limit, if it exists. If it does not exist, explain why.
- (a) $\displaystyle \lim_{x \to 0^-} f(x)$
- (b) $\displaystyle \lim_{x \to 0^+} f(x)$
- (c) $\displaystyle \lim_{x \to 0} f(x)$

---

## Sketch a piecewise function (Exercise 12)

**12.** Sketch the graph of the following function and use it to determine the values of $a$ for which $\lim_{x \to a} f(x)$ exists:
$$f(x) = \begin{cases} 2 - x & \text{if } x < -1 \\ x & \text{if } -1 \leq x < 1 \\ (x - 1)^2 & \text{if } x \geq 1 \end{cases}$$

---

## Sketch an example with specified behavior (Exercises 13–16)

**13–16.** Sketch the graph of an example of a function $f$ that satisfies all of the given conditions.

**13.** $\displaystyle \lim_{x \to 1^-} f(x) = 2$, $\ \displaystyle \lim_{x \to 1^+} f(x) = -2$, $\ f(1) = 2$

**14.** $\displaystyle \lim_{x \to 0^-} f(x) = 1$, $\ \displaystyle \lim_{x \to 0^+} f(x) = -1$, $\ \displaystyle \lim_{x \to 2^-} f(x) = 0$, $\ \displaystyle \lim_{x \to 2^+} f(x) = 1$, $\ f(2) = 1$, $\ f(0)$ is undefined

**15.** `[HINT]` $\displaystyle \lim_{x \to 3^+} f(x) = 4$, $\ \displaystyle \lim_{x \to 3^-} f(x) = 2$, $\ \displaystyle \lim_{x \to -2} f(x) = 2$, $\ f(3) = 3$, $\ f(-2) = 1$

**16.** $\displaystyle \lim_{x \to 1} f(x) = 3$, $\ \displaystyle \lim_{x \to 4^-} f(x) = 3$, $\ \displaystyle \lim_{x \to 4^+} f(x) = -3$, $\ f(1) = 1$, $\ f(4) = -1$

---

## Guess the limit by evaluating at given values (Exercises 17–20)

**17–20.** Guess the value of the limit (if it exists) by evaluating the function at the given numbers (correct to six decimal places).

**17.** $\displaystyle \lim_{x \to 2} \frac{x^2 - 2x}{x^2 - x - 2}$, &nbsp; $x = 2.5, 2.1, 2.05, 2.01, 2.005, 2.001, 1.9, 1.95, 1.99, 1.995, 1.999$

**18.** $\displaystyle \lim_{x \to -1} \frac{x^2 - 2x}{x^2 - x - 2}$, &nbsp; $x = 0, -0.5, -0.9, -0.95, -0.99, -0.999, -2, -1.5, -1.1, -1.01, -1.001$

**19.** $\displaystyle \lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$, &nbsp; $x = \pm 1, \pm 0.5, \pm 0.1, \pm 0.05, \pm 0.01$

**20.** $\displaystyle \lim_{x \to 0^+} x \ln(x + x^2)$, &nbsp; $x = 1, 0.5, 0.1, 0.05, 0.01, 0.005, 0.001$

---

## Estimate from a table (Exercises 21–24)

**21–24.** Use a table of values to estimate the value of the limit. If you have a graphing device, use it to confirm your result graphically.

**21.** $\displaystyle \lim_{x \to 0} \frac{\sqrt{x + 4} - 2}{x}$

**22.** $\displaystyle \lim_{x \to 0} \frac{\tan 3x}{\tan 5x}$

**23.** $\displaystyle \lim_{x \to 1} \frac{x^6 - 1}{x^{10} - 1}$

**24.** $\displaystyle \lim_{x \to 0} \frac{9^x - 5^x}{x}$

---

## Infinite limits (Exercises 25–32)

**25–32.** Determine the infinite limit.

**25.** $\displaystyle \lim_{x \to -3^+} \frac{x + 2}{x + 3}$

**26.** $\displaystyle \lim_{x \to -3^-} \frac{x + 2}{x + 3}$

**27.** `[HINT]` $\displaystyle \lim_{x \to 1} \frac{2 - x}{(x - 1)^2}$

**28.** $\displaystyle \lim_{x \to 5^-} \frac{e^x}{(x - 5)^3}$

**29.** $\displaystyle \lim_{x \to 3^+} \ln(x^2 - 9)$

**30.** $\displaystyle \lim_{x \to \pi^-} \cot x$

**31.** $\displaystyle \lim_{x \to 2\pi^-} x \csc x$

**32.** $\displaystyle \lim_{x \to 2^-} \frac{x^2 - 2x}{x^2 - 4x + 4}$

---

## Infinite limits — analyze and sketch (Exercises 33–34)

**33.** `[GRAPH]` Determine $\displaystyle \lim_{x \to 1^-} \frac{1}{x^3 - 1}$ and $\displaystyle \lim_{x \to 1^+} \frac{1}{x^3 - 1}$
- (a) by evaluating $f(x) = 1/(x^3 - 1)$ for values of $x$ that approach 1 from the left and from the right,
- (b) by reasoning as in Example 9, and
- (c) from a graph of $f$.

**34.**
- (a) Find the vertical asymptotes of the function
$$y = \frac{x^2 + 1}{3x - 2x^2}$$
- (b) `[GRAPH]` Confirm your answer to part (a) by graphing the function.

---

## Classic numerical estimation and its pitfalls (Exercises 35–36)

**35.** `[HINT][GRAPH]`
- (a) Estimate the value of the limit $\displaystyle \lim_{x \to 0} (1 + x)^{1/x}$ to five decimal places. Does this number look familiar?
- (b) Illustrate part (a) by graphing the function $y = (1 + x)^{1/x}$.

**36.** `[GRAPH]`
- (a) By graphing the function $f(x) = (\tan 4x)/x$ and zooming in toward the point where the graph crosses the $y$-axis, estimate the value of $\lim_{x \to 0} f(x)$.
- (b) Check your answer in part (a) by evaluating $f(x)$ for values of $x$ that approach 0.

---

## Deeper numerical traps (Exercises 37–39)

**37.**
- (a) Evaluate the function $f(x) = x^2 - (2^x / 1000)$ for $x = 1, 0.8, 0.6, 0.4, 0.2, 0.1,$ and $0.05$, and guess the value of
$$\lim_{x \to 0}\left(x^2 - \frac{2^x}{1000}\right)$$
- (b) Evaluate $f(x)$ for $x = 0.04, 0.02, 0.01, 0.005, 0.003,$ and $0.001$. Guess again.

**38.** `[GRAPH]`
- (a) Evaluate $h(x) = (\tan x - x)/x^3$ for $x = 1, 0.5, 0.1, 0.05, 0.01,$ and $0.005$.
- (b) Guess the value of $\displaystyle \lim_{x \to 0} \frac{\tan x - x}{x^3}$.
- (c) Evaluate $h(x)$ for successively smaller values of $x$ until you finally reach a value of 0 for $h(x)$. Are you still confident that your guess in part (b) is correct? Explain why you eventually obtained a value of 0. (In Section 4.4 a method for evaluating the limit will be explained.)
- (d) Graph the function $h$ in the viewing rectangle $[-1, 1]$ by $[0, 1]$. Then zoom in toward the point where the graph crosses the $y$-axis to estimate the limit of $h(x)$ as $x$ approaches 0. Continue to zoom in until you observe distortions in the graph of $h$. Compare with the results of part (c).

**39.** `[GRAPH]` Graph the function $f(x) = \sin(\pi/x)$ of Example 4 in the viewing rectangle $[-1, 1]$ by $[-1, 1]$. Then zoom in toward the origin several times. Comment on the behavior of this function.

---

## Relativistic mass (Exercise 40)

**40.** In the theory of relativity, the mass of a particle with velocity $v$ is
$$m = \frac{m_0}{\sqrt{1 - v^2/c^2}}$$
where $m_0$ is the mass of the particle at rest and $c$ is the speed of light. What happens as $v \to c^-$?

---

## Vertical asymptotes of trig (Exercises 41–42)

**41.** `[GRAPH]` Use a graph to estimate the equations of all the vertical asymptotes of the curve
$$y = \tan(2 \sin x) \qquad -\pi \leq x \leq \pi$$
Then find the exact equations of these asymptotes.

**42.** `[HINT][GRAPH]`
- (a) Use numerical and graphical evidence to guess the value of the limit
$$\lim_{x \to 1} \frac{x^3 - 1}{\sqrt{x} - 1}$$
- (b) How close to 1 does $x$ have to be to ensure that the function in part (a) is within a distance 0.5 of its limit?

---

*This closes Section 2.2 Exercises.*

## Priority gradient

Section 2.2 exercises are mostly about building limit intuition — *numerical* and *graphical*. The algebraic machinery comes in 2.3. So these are warm-ups.

**Highest value:**

- **Exercise 17, 18** — $\lim (x^2 - 2x)/(x^2 - x - 2)$ at both $x = 2$ and $x = -1$. The $0/0$ at $x = 2$ is removable (factor the $(x-2)$); at $x = -1$ the denominator vanishes but the numerator doesn't → one-sided infinite limits. **Good contrast.** Do both.
- **Exercise 19** — $\lim (e^x - 1 - x)/x^2 = 1/2$. This is the *second-order Taylor remainder*: $e^x = 1 + x + x^2/2 + O(x^3)$. Numerical confirmation that the quadratic term is $1/2$.
- **Exercise 20** — $\lim x \ln(x + x^2)$. Type "$0 \cdot (-\infty)$" indeterminate form. Harder than it looks. Limit is 0.
- **Exercise 23** — $\lim (x^6 - 1)/(x^{10} - 1)$ at $x = 1$. Factor $x^6 - 1 = (x-1) \cdot \sum$, same for $x^{10} - 1$. Gets $6/10 = 3/5$. Classic.
- **Exercise 27** — $\lim (2-x)/(x-1)^2$ at $x = 1$. Numerator $\to 1$, denominator $\to 0^+$ (squared). Infinite limit. Sign analysis straightforward.
- **Exercise 33** — $\lim 1/(x^3 - 1)$ at $x = 1$. Classic asymmetric infinite limit: left goes to $-\infty$, right goes to $+\infty$. Exact practice for sign-analysis recipe.
- **Exercise 35** — $\lim(1 + x)^{1/x} = e$. This is *the* compound-interest definition of $e$ from Section 1.5 Unit 2! The 30-year-old hint from Bernoulli; Stewart sneaks it into a numerical exercise. Confirm numerically that it's $\approx 2.71828$.
- **Exercise 37** — the "guess again" lesson: dominant $x^2$ term hides the $-2^x / 1000$ contribution. Classic Example-5-style trap.
- **Exercise 40** — $m \to \infty$ as $v \to c^-$. Physics application: you can't accelerate a massive particle to the speed of light.

**Medium value:**

- **Exercises 5–10** — graph-reading for limits and one-sided limits. Pick 2–3.
- **Exercises 13–16** — sketch an example satisfying specified limit conditions. Pick 2.
- **Exercise 22** — $\lim \tan(3x)/\tan(5x) = 3/5$. Builds on the $\sin(x)/x \to 1$ fact.
- **Exercise 24** — $\lim(9^x - 5^x)/x = \ln(9/5) = \ln 1.8$. This is the derivative of $a^x$ at 0 in disguise.
- **Exercise 41** — $\tan(2\sin x)$: asymptotes where $2\sin x = \pi/2 + n\pi$. Solve $\sin x = \pi/4$ etc.

**Skim or skip:**

- **Exercises 1–3** (concept questions with no computation).
- **Exercises 25, 26** — trivial infinite-limit sign checks; pick one.
- **Exercise 42** — mostly numerical; the "how close to 1" question foreshadows ε-δ but doesn't require it.

**Most valuable exercise in the whole set: Exercise 35.** Stewart is sneaking the compound-interest limit $\lim(1+x)^{1/x} = e$ into a numerical exercise disguised as practice. Confirm numerically that this really is the number $e \approx 2.71828$ — and remember that this was one of the five equivalent characterizations of $e$ I flagged back in Section 1.5 Unit 2. **The continuous-compounding identity in finance is literally this limit.** Every time you see $e^{rT}$ as the continuous-compounding factor, that's this exercise's limit in disguise.
