# Chapter 1 Review — Concept Check, True/False Quiz, Exercises

*Covers pp. 73–75 of the book (PDF pp. 101–103). The Chapter 1 wrap-up: 13 Concept Check questions, 13 True/False statements, and 28 Review Exercises integrating all six sections.*

*Legend (same as before):*
- `[HINT]` — exercise number boxed in cyan; homework hint available online.
- `[GRAPH]` — small tree icon; graphing calculator or software recommended.
- `[CAS]` — computer algebra system required.

---

## Concept Check

These are open-ended "define or explain" questions — no numerical answer expected. Use them as a self-test: if you can't explain a concept in your own words, go back and re-read that unit's notes.

**1.**
- (a) What is a function? What are its domain and range?
- (b) What is the graph of a function?
- (c) How can you tell whether a given curve is the graph of a function?

**2.** Discuss four ways of representing a function. Illustrate your discussion with examples.

**3.**
- (a) What is an even function? How can you tell if a function is even by looking at its graph?
- (b) What is an odd function? How can you tell if a function is odd by looking at its graph?

**4.** What is an increasing function?

**5.** What is a mathematical model?

**6.** Give an example of each type of function.
- (a) Linear function
- (b) Power function
- (c) Exponential function
- (d) Quadratic function
- (e) Polynomial of degree 5
- (f) Rational function

**7.** Sketch by hand, on the same axes, the graphs of the following functions.
- (a) $f(x) = x$
- (b) $g(x) = x^2$
- (c) $h(x) = x^3$
- (d) $j(x) = x^4$

**8.** Draw, by hand, a rough sketch of the graph of each function.
- (a) $y = \sin x$
- (b) $y = \tan x$
- (c) $y = e^x$
- (d) $y = \ln x$
- (e) $y = 1/x$
- (f) $y = |x|$
- (g) $y = \sqrt{x}$
- (h) $y = \tan^{-1} x$

**9.** Suppose that $f$ has domain $A$ and $g$ has domain $B$.
- (a) What is the domain of $f + g$?
- (b) What is the domain of $fg$?
- (c) What is the domain of $f/g$?

**10.** How is the composite function $f \circ g$ defined? What is its domain?

**11.** Suppose the graph of $f$ is given. Write an equation for each of the graphs that are obtained from the graph of $f$ as follows.
- (a) Shift 2 units upward.
- (b) Shift 2 units downward.
- (c) Shift 2 units to the right.
- (d) Shift 2 units to the left.
- (e) Reflect about the $x$-axis.
- (f) Reflect about the $y$-axis.
- (g) Stretch vertically by a factor of 2.
- (h) Shrink vertically by a factor of 2.
- (i) Stretch horizontally by a factor of 2.
- (j) Shrink horizontally by a factor of 2.

**12.**
- (a) What is a one-to-one function? How can you tell if a function is one-to-one by looking at its graph?
- (b) If $f$ is a one-to-one function, how is its inverse function $f^{-1}$ defined? How do you obtain the graph of $f^{-1}$ from the graph of $f$?

**13.**
- (a) How is the inverse sine function $f(x) = \sin^{-1} x$ defined? What are its domain and range?
- (b) How is the inverse cosine function $f(x) = \cos^{-1} x$ defined? What are its domain and range?
- (c) How is the inverse tangent function $f(x) = \tan^{-1} x$ defined? What are its domain and range?

---

## True-False Quiz

*Determine whether the statement is true or false. If it is true, explain why. If it is false, explain why or give an example that disproves the statement.*

**1.** If $f$ is a function, then $f(s + t) = f(s) + f(t)$.

**2.** If $f(s) = f(t)$, then $s = t$.

**3.** If $f$ is a function, then $f(3x) = 3 f(x)$.

**4.** If $x_1 < x_2$ and $f$ is a decreasing function, then $f(x_1) > f(x_2)$.

**5.** A vertical line intersects the graph of a function at most once.

**6.** If $f$ and $g$ are functions, then $f \circ g = g \circ f$.

**7.** If $f$ is one-to-one, then $f^{-1}(x) = \dfrac{1}{f(x)}$.

**8.** You can always divide by $e^x$.

**9.** If $0 < a < b$, then $\ln a < \ln b$.

**10.** If $x > 0$, then $(\ln x)^6 = 6 \ln x$.

**11.** If $x > 0$ and $a > 1$, then $\dfrac{\ln x}{\ln a} = \ln\!\dfrac{x}{a}$.

**12.** $\tan^{-1}(-1) = \dfrac{3\pi}{4}$.

**13.** $\tan^{-1} x = \dfrac{\sin^{-1} x}{\cos^{-1} x}$.

### Answer key with brief explanations

These are the standard kind-of-subtle statements Stewart uses to test misconception patterns. For self-check:

| # | T/F | Reason |
|:---:|:---:|:---|
| 1 | **F** | Functions don't distribute over addition in general. Try $f(x) = x^2$: $f(1+1) = 4$ but $f(1) + f(1) = 2$. |
| 2 | **F** | Only true if $f$ is one-to-one. Take $f(x) = x^2$: $f(1) = f(-1)$ but $1 \neq -1$. |
| 3 | **F** | Same issue as #1 — scalar doesn't distribute. $f(x) = x^2$: $f(3 \cdot 1) = 9 \neq 3 f(1) = 3$. |
| 4 | **T** | Definition of decreasing: $x_1 < x_2 \Rightarrow f(x_1) > f(x_2)$. This is literally the definition. |
| 5 | **T** | Vertical Line Test. This is the defining property. |
| 6 | **F** | Composition is not commutative. Standard counterexample: $f = x^2$, $g = x + 1$. |
| 7 | **F** | **Critical misconception** — $f^{-1}$ is not the reciprocal. $[f(x)]^{-1} = 1/f(x)$, but $f^{-1}(x)$ is the inverse function. |
| 8 | **T** | $e^x > 0$ for all real $x$, so dividing by $e^x$ never hits division by zero. |
| 9 | **T** | $\ln$ is strictly increasing on $(0, \infty)$. Monotonicity preserves the inequality. |
| 10 | **F** | $(\ln x)^6$ is the log raised to the 6th power; $\ln(x^6) = 6 \ln x$ is what you're thinking of. **Parenthesis placement matters.** |
| 11 | **F** | Change of base says $\ln x / \ln a = \log_a x$, not $\ln(x/a)$. Two different things. |
| 12 | **F** | $\arctan$ has range $(-\pi/2, \pi/2)$. $\tan^{-1}(-1) = -\pi/4$, not $3\pi/4$. The value $3\pi/4$ is outside the arctan range. |
| 13 | **F** | Identity is spurious. $\tan^{-1}$ has no such quotient decomposition. Try $x = 0$: LHS = 0, RHS = $0/(π/2) = 0$ (coincidence); try $x = 1$: LHS = $\pi/4$, RHS = $(\pi/4)/(\pi/4) = 1$, different. |

**The deep ones for your quant track:** #1, #2, #6, #7, #10, #11 all represent the misconceptions that cause the most rework in applied work. Internalize why each is false.

---

## Review Exercises

### Graph-reading and one-to-one (Exercises 1–2)

**1.** Let $f$ be the function whose graph is given.
- (a) Estimate the value of $f(2)$.
- (b) Estimate the values of $x$ such that $f(x) = 3$.
- (c) State the domain of $f$.
- (d) State the range of $f$.
- (e) On what interval is $f$ increasing?
- (f) Is $f$ one-to-one? Explain.
- (g) Is $f$ even, odd, or neither even nor odd? Explain.

> **Graph provided.** A smooth curve on a grid, resembling a rotated S — starts in the third quadrant, rises through the origin with a local minimum below, continues up through a local maximum in the first quadrant, then declines at the far right. Passes through approximately $(-5, -3)$ up to $(5, 3)$.

**2.** The graph of $g$ is given.
- (a) State the value of $g(2)$.
- (b) Why is $g$ one-to-one?
- (c) Estimate the value of $g^{-1}(2)$.
- (d) Estimate the domain of $g^{-1}$.
- (e) Sketch the graph of $g^{-1}$.

> **Graph provided.** A monotonically increasing S-curve on a grid, passing through approximately $(0, 0)$ and $(1, 1)$, increasing throughout its domain.

---

### Difference quotient (Exercise 3)

**3.** If $f(x) = x^2 - 2x + 3$, evaluate the difference quotient
$$\frac{f(a + h) - f(a)}{h}$$

---

### Verbal sketch (Exercise 4)

**4.** Sketch a rough graph of the yield of a crop as a function of the amount of fertilizer used.

---

### Domains and ranges (Exercises 5–8)

**5–8.** Find the domain and range of the function.

**5.** $f(x) = \dfrac{2}{3x - 1}$

**6.** $g(x) = \sqrt{16 - x^4}$

**7.** $h(x) = \ln(x + 6)$

**8.** $F(t) = 3 + \cos 2t$

---

### Describe transformations (Exercises 9–10)

**9.** Suppose that the graph of $f$ is given. Describe how the graphs of the following functions can be obtained from the graph of $f$.
- (a) $y = f(x) + 8$
- (b) $y = f(x + 8)$
- (c) $y = 1 + 2 f(x)$
- (d) $y = f(x - 2) - 2$
- (e) $y = -f(x)$
- (f) $y = f^{-1}(x)$

**10.** The graph of $f$ is given. Draw the graphs of the following functions.
- (a) $y = f(x - 8)$
- (b) $y = -f(x)$
- (c) $y = 2 - f(x)$
- (d) $y = \tfrac{1}{2} f(x) - 1$
- (e) $y = f^{-1}(x)$
- (f) $y = f^{-1}(x + 3)$

> **Graph provided.** A piecewise-linear ascending curve on a grid, passing through approximately $(0, -1)$, $(1, 0)$, then rising with a slight curvature.

---

### Transformations applied (Exercises 11–16)

**11–16.** Use transformations to sketch the graph of the function.

**11.** $y = -\sin 2x$

**12.** $y = 3 \ln(x - 2)$

**13.** $y = \tfrac{1}{2}(1 + e^x)$

**14.** $y = 2 - \sqrt{x}$

**15.** $f(x) = \dfrac{1}{x + 2}$

**16.** $f(x) = \begin{cases} -x & \text{if } x < 0 \\ e^x - 1 & \text{if } x \geq 0 \end{cases}$

---

### Even/odd classification (Exercise 17)

**17.** Determine whether $f$ is even, odd, or neither even nor odd.
- (a) $f(x) = 2x^5 - 3x^2 + 2$
- (b) $f(x) = x^3 - x^7$
- (c) $f(x) = e^{-x^2}$
- (d) $f(x) = 1 + \sin x$

---

### Piecewise geometric function (Exercise 18)

**18.** Find an expression for the function whose graph consists of the line segment from the point $(-2, 2)$ to the point $(-1, 0)$ together with the top half of the circle with center the origin and radius 1.

---

### Compositions and domains (Exercise 19)

**19.** If $f(x) = \ln x$ and $g(x) = x^2 - 9$, find the functions (a) $f \circ g$, (b) $g \circ f$, (c) $f \circ f$, (d) $g \circ g$, and their domains.

---

### Three-function decomposition (Exercise 20)

**20.** Express the function $F(x) = \dfrac{1}{\sqrt{x + \sqrt{x}}}$ as a composition of three functions.

---

### Modeling (Exercises 21–22)

**21.** Life expectancy improved dramatically in the 20th century. The table gives the life expectancy at birth (in years) of males born in the United States. Use a scatter plot to choose an appropriate type of model. Use your model to predict the life span of a male born in the year 2010.

| Birth year | Life expectancy | Birth year | Life expectancy |
|:---:|:---:|:---:|:---:|
| 1900 | 48.3 | 1960 | 66.6 |
| 1910 | 51.1 | 1970 | 67.1 |
| 1920 | 55.2 | 1980 | 70.0 |
| 1930 | 57.4 | 1990 | 71.8 |
| 1940 | 62.5 | 2000 | 73.0 |
| 1950 | 65.6 | | |

**22.** A small-appliance manufacturer finds that it costs \$9000 to produce 1000 toaster ovens a week and \$12{,}000 to produce 1500 toaster ovens a week.
- (a) Express the cost as a function of the number of toaster ovens produced, assuming that it is linear. Then sketch the graph.
- (b) What is the slope of the graph and what does it represent?
- (c) What is the $y$-intercept of the graph and what does it represent?

---

### Inverse function values (Exercises 23–24)

**23.** If $f(x) = 2x + \ln x$, find $f^{-1}(2)$.

**24.** Find the inverse function of $f(x) = \dfrac{x + 1}{2x + 1}$.

---

### Exact trig/log values (Exercise 25)

**25.** Find the exact value of each expression.
- (a) $e^{2 \ln 3}$
- (b) $\log_{10} 25 + \log_{10} 4$
- (c) $\tan(\arcsin\tfrac{1}{2})$
- (d) $\sin(\cos^{-1} \tfrac{4}{5})$

---

### Solve for x (Exercise 26)

**26.** Solve each equation for $x$.
- (a) $e^x = 5$
- (b) $\ln x = 2$
- (c) $e^{e^x} = 2$
- (d) $\tan^{-1} x = 1$

---

### Logistic population (Exercise 27)

**27.** The population of a certain species in a limited environment with initial population 100 and carrying capacity 1000 is
$$P(t) = \frac{100{,}000}{100 + 900\,e^{-t}}$$
where $t$ is measured in years.
- (a) `[GRAPH]` Graph this function and estimate how long it takes for the population to reach 900.
- (b) Find the inverse of this function and explain its meaning.
- (c) Use the inverse function to find the time required for the population to reach 900. Compare with the result of part (a).

---

### Family comparison (Exercise 28)

**28.** `[GRAPH]` Graph the three functions $y = x^a$, $y = a^x$, and $y = \log_a x$ on the same screen for two or three values of $a > 1$. For large values of $x$, which of these functions has the largest values and which has the smallest values?

---

*This closes the Chapter 1 Review Exercises.*

## Priority gradient for the Review

**Highest value — do these:**
- **Exercise 3** (difference quotient for $x^2 - 2x + 3$) — one more rep for the Chapter 3 derivative setup.
- **Exercise 19** ($f \circ g, g \circ f, f \circ f, g \circ g$ with log and polynomial) — tests domain tracking through composition rigorously.
- **Exercise 20** (three-function decomposition of $1/\sqrt{x + \sqrt{x}}$) — harder decomposition that requires three layers, not just two. Chain-rule prep.
- **Exercise 23** ($f(x) = 2x + \ln x$, find $f^{-1}(2)$) — clever: you can't invert algebraically, but you can guess $f^{-1}(2)$ by finding $x$ such that $2x + \ln x = 2$. The answer is $x = 1$ (since $2(1) + \ln 1 = 2 + 0 = 2$). **This is the inverse-function-via-solving-equation pattern.** Same move as implied-vol computation.
- **Exercise 27** (logistic model) — invert $P(t) = 100{,}000 / (100 + 900 e^{-t})$ to get $t = \ln(900 P / (100{,}000 - 100 P))$. **This is the logistic inverse**, used everywhere in logistic regression. Do it once and remember the result.
- **Exercise 28** (compare $x^a$ vs $a^x$ vs $\log_a x$) — the three-way hierarchy from Unit 2 of Section 1.6 made concrete. Visually confirm $\log \ll $ polynomial $\ll$ exponential.

**Medium value:**
- **Exercises 5–8** (domain/range) — routine practice.
- **Exercises 11–16** (transformations) — mechanical.
- **Exercise 25** (exact value computation) — 4 small problems, good warm-up before a test.
- **Exercise 26** (solve for $x$) — 4 problems; (c) and (d) are slightly tricky and worth doing.

**Skim or skip:**
- **Exercises 1, 2, 4, 9, 10** — reading graphs; trivial at your level.
- **Exercises 17, 18** — routine.
- **Exercises 21, 22** — modeling scenarios you've seen before.

**The two most valuable problems** in the whole review are **23** (inverse-by-solving) and **27** (logistic inverse). Both teach an inversion move you'll use repeatedly in applied contexts.
