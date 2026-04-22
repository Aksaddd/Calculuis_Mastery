# Chapter 2 Review (Part A): Concept Check + True-False Quiz + Exercises 1–30

*Covers pp. 165–167 of the book (PDF pp. 193–195). Three sections: 15 concept-check questions that test whether you can state the key definitions and theorems of Chapter 2, 20 true-false questions that probe common misconceptions, and the first half of the Review Exercises.*

---

## Concept Check — 15 Items to Test Your Definitions

*Each question asks you to explain, define, or state something from Chapter 2. If you can answer all 15 cleanly, you've mastered the chapter's conceptual structure.*

**1.** Explain what each of the following means and illustrate with a sketch.
- (a) $\displaystyle \lim_{x \to a}f(x) = L$
- (b) $\displaystyle \lim_{x \to a^+}f(x) = L$
- (c) $\displaystyle \lim_{x \to a^-}f(x) = L$
- (d) $\displaystyle \lim_{x \to a}f(x) = \infty$
- (e) $\displaystyle \lim_{x \to \infty}f(x) = L$

**2.** Describe several ways in which a limit can fail to exist. Illustrate with sketches.

**3.** State the following Limit Laws.
- (a) Sum Law
- (b) Difference Law
- (c) Constant Multiple Law
- (d) Product Law
- (e) Quotient Law
- (f) Power Law
- (g) Root Law

**4.** What does the Squeeze Theorem say?

**5.**
- (a) What does it mean to say that the line $x = a$ is a vertical asymptote of the curve $y = f(x)$? Draw curves to illustrate the various possibilities.
- (b) What does it mean to say that the line $y = L$ is a horizontal asymptote of the curve $y = f(x)$? Draw curves to illustrate the various possibilities.

**6.** Which of the following curves have vertical asymptotes? Which have horizontal asymptotes?
- (a) $y = x^4$ &nbsp; (b) $y = \sin x$
- (c) $y = \tan x$ &nbsp; (d) $y = \tan^{-1} x$
- (e) $y = e^x$ &nbsp; (f) $y = \ln x$
- (g) $y = 1/x$ &nbsp; (h) $y = \sqrt{x}$

**7.**
- (a) What does it mean for $f$ to be continuous at $a$?
- (b) What does it mean for $f$ to be continuous on the interval $(-\infty, \infty)$? What can you say about the graph of such a function?

**8.** What does the Intermediate Value Theorem say?

**9.** Write an expression for the slope of the tangent line to the curve $y = f(x)$ at the point $(a, f(a))$.

**10.** Suppose an object moves along a straight line with position $f(t)$ at time $t$. Write an expression for the instantaneous velocity of the object at time $t = a$. How can you interpret this velocity in terms of the graph of $f$?

**11.** If $y = f(x)$ and $x$ changes from $x_1$ to $x_2$, write expressions for the following.
- (a) The average rate of change of $y$ with respect to $x$ over the interval $[x_1, x_2]$.
- (b) The instantaneous rate of change of $y$ with respect to $x$ at $x = x_1$.

**12.** Define the derivative $f'(a)$. Discuss two ways of interpreting this number.

**13.** Define the second derivative of $f$. If $f(t)$ is the position function of a particle, how can you interpret the second derivative?

**14.**
- (a) What does it mean for $f$ to be differentiable at $a$?
- (b) What is the relation between the differentiability and continuity of a function?
- (c) Sketch the graph of a function that is continuous but not differentiable at $a = 2$.

**15.** Describe several ways in which a function can fail to be differentiable. Illustrate with sketches.

---

### Concept Check — quick-reference answers

*Not from Stewart — compiled for your self-check.*

| # | The answer in one line |
|:---:|:---|
| 1a | $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently close to (but not equal to) $a$. |
| 1b | Same, but $x$ approaches $a$ from the right only ($x > a$). |
| 1c | Same, but $x$ approaches $a$ from the left only ($x < a$). |
| 1d | $f(x)$ becomes arbitrarily large (positive) by taking $x$ sufficiently close to $a$. |
| 1e | $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently large. |
| 2 | Three ways: (i) jump discontinuity (one-sided limits disagree); (ii) infinite behavior (function blows up); (iii) oscillation (e.g. $\sin(1/x)$ near 0). |
| 3 | See Section 2.3 Unit 1 for all seven formal statements. |
| 4 | If $f \leq g \leq h$ near $a$ and $\lim f = \lim h = L$, then $\lim g = L$. |
| 5 | Vertical: $\lim_{x\to a^\pm}f = \pm\infty$ for some ±/side. Horizontal: $\lim_{x\to\pm\infty}f = L$. |
| 6 | Vertical asymptotes: c, f, g. Horizontal asymptotes: d, e (for $x \to -\infty$), g. |
| 7a | $\lim_{x\to a}f(x) = f(a)$. |
| 7b | Continuous at every point of $(-\infty, \infty)$; graph has no gaps or breaks. |
| 8 | If $f$ continuous on $[a, b]$ and $N$ between $f(a)$ and $f(b)$, then $\exists c \in (a, b)$ with $f(c) = N$. |
| 9 | $m = \lim_{x \to a}\frac{f(x) - f(a)}{x - a}$ or equivalently $\lim_{h \to 0}\frac{f(a + h) - f(a)}{h}$. |
| 10 | $v(a) = \lim_{h \to 0}\frac{f(a+h) - f(a)}{h}$; geometrically, slope of the tangent line to the position graph at $t = a$. |
| 11a | $\frac{f(x_2) - f(x_1)}{x_2 - x_1}$ |
| 11b | $\lim_{\Delta x \to 0}\frac{\Delta y}{\Delta x} = f'(x_1)$ |
| 12 | $f'(a) = \lim_{h \to 0}\frac{f(a+h) - f(a)}{h}$. Interpretations: (1) slope of tangent line; (2) instantaneous rate of change. |
| 13 | $f'' = (f')'$. For position $s(t)$: $s''$ is acceleration. |
| 14 | (a) $f'(a)$ exists. (b) Differentiable $\Rightarrow$ continuous (converse fails). (c) E.g. $\|x - 2\|$ at $a = 2$. |
| 15 | Three ways: corner/kink, discontinuity, vertical tangent. |

---

## True-False Quiz — 20 Items

*Determine whether the statement is true or false. If true, explain why. If false, explain why or give an example that disproves the statement.*

**1.** $\displaystyle \lim_{x \to 4}\!\left(\frac{2x}{x - 4} - \frac{8}{x - 4}\right) = \lim_{x \to 4}\frac{2x}{x - 4} - \lim_{x \to 4}\frac{8}{x - 4}$

**2.** $\displaystyle \lim_{x \to 1}\frac{x^2 + 6x - 7}{x^2 + 5x - 6} = \frac{\lim_{x \to 1}(x^2 + 6x - 7)}{\lim_{x \to 1}(x^2 + 5x - 6)}$

**3.** $\displaystyle \lim_{x \to 1}\frac{x - 3}{x^2 + 2x - 4} = \frac{\lim_{x \to 1}(x - 3)}{\lim_{x \to 1}(x^2 + 2x - 4)}$

**4.** If $\lim_{x \to 5}f(x) = 2$ and $\lim_{x \to 5}g(x) = 0$, then $\lim_{x \to 5}[f(x)/g(x)]$ does not exist.

**5.** If $\lim_{x \to 5}f(x) = 0$ and $\lim_{x \to 5}g(x) = 0$, then $\lim_{x \to 5}[f(x)/g(x)]$ does not exist.

**6.** If $\lim_{x \to 6}[f(x)g(x)]$ exists, then the limit must be $f(6)g(6)$.

**7.** If $p$ is a polynomial, then $\lim_{x \to b}p(x) = p(b)$.

**8.** If $\lim_{x \to 0}f(x) = \infty$ and $\lim_{x \to 0}g(x) = \infty$, then $\lim_{x \to 0}[f(x) - g(x)] = 0$.

**9.** A function can have two different horizontal asymptotes.

**10.** If $f$ has domain $[0, \infty)$ and has no horizontal asymptote, then $\lim_{x \to \infty}f(x) = \infty$ or $\lim_{x \to \infty}f(x) = -\infty$.

**11.** If the line $x = 1$ is a vertical asymptote of $y = f(x)$, then $f$ is not defined at 1.

**12.** If $f(1) > 0$ and $f(3) < 0$, then there exists a number $c$ between 1 and 3 such that $f(c) = 0$.

**13.** If $f$ is continuous at 5 and $f(5) = 2$ and $f(4) = 3$, then $\lim_{x \to 2}f(4x^2 - 11) = 2$.

**14.** If $f$ is continuous on $[-1, 1]$ and $f(-1) = 4$ and $f(1) = 3$, then there exists a number $r$ such that $|r| < 1$ and $f(r) = \pi$.

**15.** Let $f$ be a function such that $\lim_{x \to 0}f(x) = 6$. Then there exists a number $\delta$ such that if $0 < |x| < \delta$, then $|f(x) - 6| < 1$.

**16.** If $f(x) > 1$ for all $x$ and $\lim_{x \to 0}f(x)$ exists, then $\lim_{x \to 0}f(x) > 1$.

**17.** If $f$ is continuous at $a$, then $f$ is differentiable at $a$.

**18.** If $f'(r)$ exists, then $\lim_{x \to r}f(x) = f(r)$.

**19.** $\displaystyle \frac{d^2 y}{dx^2} = \!\left(\frac{dy}{dx}\right)^2$

**20.** The equation $x^{10} - 10x^2 + 5 = 0$ has a root in the interval $(0, 2)$.

---

### True-False — quick answers with pinpoint reasons

| # | T/F | Why |
|:---:|:---:|:---|
| 1 | **F** | Both right-side limits are $\pm\infty$; the Difference Law requires both to exist (finitely). However, the LHS *does* simplify to $\lim \frac{2x - 8}{x - 4} = \lim \frac{2(x - 4)}{x - 4} = 2$. |
| 2 | **F** | Denominator limit is $1 + 5 - 6 = 0$; Quotient Law fails. (But both sides can be computed; they equal different expressions. The LHS is $\lim(x+7)/(x+6) = 8/7$ after factoring.) |
| 3 | **T** | Denominator limit is $1 + 2 - 4 = -1 \neq 0$; Quotient Law applies. |
| 4 | **T** | Yes — for $f/g$ with $g \to 0$, if $f \to 2 \neq 0$, the quotient diverges to $\pm\infty$. |
| 5 | **F** | $0/0$ form can have finite limits (e.g., $\lim_{x\to 5}(x - 5)/(x - 5) = 1$). |
| 6 | **F** | Limit need not equal $f(6)g(6)$ unless both are continuous at 6. Counterexample: $f(6)$ and $g(6)$ could be defined differently than their limits. |
| 7 | **T** | Polynomials are continuous (Theorem 5 of 2.5). |
| 8 | **F** | $\infty - \infty$ is indeterminate. Example: $f = 1/x^2$, $g = 1/x^2 + 1$, both $\to \infty$ at 0, but $f - g = -1$. |
| 9 | **T** | E.g. $\arctan x$ has $y = \pm\pi/2$; rational functions like $(1-e^x)/(1+2e^x)$ also have distinct asymptotes at $\pm\infty$. |
| 10 | **F** | $f(x) = \sin x$ on $[0, \infty)$ has no horizontal asymptote but oscillates — neither $+\infty$ nor $-\infty$. |
| 11 | **F** | $f$ might be defined but with a limit that goes to $\pm\infty$ in one direction only, while the function has some value at 1. |
| 12 | **F** | Requires continuity. Counterexample: $f$ discontinuous (e.g. $f(2) = 1$ instead of matching limits). |
| 13 | **T** | $\lim_{x\to 2}(4x^2 - 11) = 5$, and $f$ continuous at 5 means $\lim f(4x^2-11) = f(5) = 2$. |
| 14 | **T** | Apply IVT: $f(-1) = 4 > \pi > 3 = f(1)$, so $\exists r \in (-1, 1)$ with $f(r) = \pi$, hence $\|r\| < 1$. |
| 15 | **T** | Taking $\varepsilon = 1$ in the ε-δ definition: a $\delta$ exists with $\|f(x) - 6\| < 1$ for $0 < \|x\| < \delta$. |
| 16 | **F** | The limit could equal 1 exactly, not strictly greater. Example: $f(x) = 1 + x^2$, $\lim = 1$ not $> 1$. |
| 17 | **F** | Continuous doesn't imply differentiable. $\|x\|$ at 0 is the counterexample. |
| 18 | **T** | Differentiable at $r$ $\Rightarrow$ continuous at $r$ (Theorem 4 of 2.8) $\Rightarrow$ $\lim f(x) = f(r)$. |
| 19 | **F** | $d^2 y/dx^2 = (y')'$, not $(y')^2$. Example: $y = x^2$, $y' = 2x$, $y'' = 2 \neq 4x^2 = (y')^2$. |
| 20 | **T** | $f(0) = 5 > 0$, $f(2) = 1024 - 40 + 5 = 989 > 0$... wait. $f(0) = 5$, $f(1) = 1 - 10 + 5 = -4$. So sign changes on $(0, 1) \subset (0, 2)$. By IVT, root exists. ✓ |

---

## Review Exercises 1–30

*Legend: `[HINT]` = cyan-boxed; `[GRAPH]` = graphing tool.*

---

### Reading everything from a graph (Exercise 1)

**1.** The graph of $f$ is given.
- (a) Find each limit, or explain why it does not exist.
  - (i) $\displaystyle \lim_{x \to 2^+}f(x)$
  - (ii) $\displaystyle \lim_{x \to -3^+}f(x)$
  - (iii) $\displaystyle \lim_{x \to -3}f(x)$
  - (iv) $\displaystyle \lim_{x \to 4}f(x)$
  - (v) $\displaystyle \lim_{x \to 0}f(x)$
  - (vi) $\displaystyle \lim_{x \to 2^-}f(x)$
  - (vii) $\displaystyle \lim_{x \to \infty}f(x)$
  - (viii) $\displaystyle \lim_{x \to -\infty}f(x)$
- (b) State the equations of the horizontal asymptotes.
- (c) State the equations of the vertical asymptotes.
- (d) At what numbers is $f$ discontinuous? Explain.

> **Graph provided.** A curve over $[-4, 5]$ or so with features at $x = -3, 0, 2, 4$ including possible asymptotes, discontinuities, and various approaches.

---

### Sketch graph with conditions (Exercise 2)

**2.** Sketch the graph of an example of a function $f$ that satisfies all of the following conditions:
$$\lim_{x \to -\infty}f(x) = -2, \ \lim_{x \to \infty}f(x) = 0, \ \lim_{x \to -3}f(x) = \infty$$
$$\lim_{x \to 3^-}f(x) = -\infty, \ \lim_{x \to 3^+}f(x) = 2, \ f \text{ is continuous from the right at 3}$$

---

### Find the limit (Exercises 3–20)

**3.** $\displaystyle \lim_{x \to 1}e^{x^3 - x}$

**4.** $\displaystyle \lim_{x \to 3}\frac{x^2 - 9}{x^2 + 2x - 3}$

**5.** $\displaystyle \lim_{x \to -3}\frac{x^2 - 9}{x^2 + 2x - 3}$

**6.** $\displaystyle \lim_{x \to 1^+}\frac{x^2 - 9}{x^2 + 2x - 3}$

**7.** $\displaystyle \lim_{h \to 0}\frac{(h - 1)^3 + 1}{h}$

**8.** $\displaystyle \lim_{t \to 2}\frac{t^2 - 4}{t^3 - 8}$

**9.** $\displaystyle \lim_{r \to 9}\frac{\sqrt{r}}{(r - 9)^4}$

**10.** $\displaystyle \lim_{v \to 4^+}\frac{4 - v}{|4 - v|}$

**11.** $\displaystyle \lim_{u \to 1}\frac{u^4 - 1}{u^3 + 5u^2 - 6u}$

**12.** $\displaystyle \lim_{x \to 3}\frac{\sqrt{x + 6} - x}{x^3 - 3x^2}$

**13.** $\displaystyle \lim_{x \to \infty}\frac{\sqrt{x^2 - 9}}{2x - 6}$

**14.** $\displaystyle \lim_{x \to -\infty}\frac{\sqrt{x^2 - 9}}{2x - 6}$

**15.** $\displaystyle \lim_{x \to -\pi^+}\ln(\sin x)$

**16.** $\displaystyle \lim_{x \to -\infty}\frac{1 - 2x^2 - x^4}{5 + x - 3x^4}$

**17.** $\displaystyle \lim_{x \to \infty}\!\left(\sqrt{x^2 + 4x + 1} - x\right)$

**18.** $\displaystyle \lim_{x \to \infty}e^{x - x^2}$

**19.** $\displaystyle \lim_{x \to 0^+}\tan^{-1}(1/x)$

**20.** $\displaystyle \lim_{x \to 1}\!\left(\frac{1}{x - 1} + \frac{1}{x^2 - 3x + 2}\right)$

---

### Asymptote discovery (Exercises 21–22)

**21–22.** `[GRAPH]` Use graphs to discover the asymptotes of the curve. Then prove what you have discovered.

**21.** $y = \dfrac{\cos^2 x}{x^2}$

**22.** $y = \sqrt{x^2 + x + 1} - \sqrt{x^2 - x}$

---

### Squeeze theorem (Exercises 23–24)

**23.** If $2x - 1 \leq f(x) \leq x^2$ for $0 < x < 3$, find $\lim_{x \to 1}f(x)$.

**24.** Prove that $\lim_{x \to 0}x^2 \cos(1/x^2) = 0$.

---

### ε-δ and ε-N proofs (Exercises 25–28)

**25–28.** Prove the statement using the precise definition of a limit.

**25.** $\displaystyle \lim_{x \to 2}(14 - 5x) = 4$

**26.** $\displaystyle \lim_{x \to 0}\sqrt[3]{x} = 0$

**27.** $\displaystyle \lim_{x \to 2}(x^2 - 3x) = -2$

**28.** $\displaystyle \lim_{x \to 4^+}\frac{2}{\sqrt{x - 4}} = \infty$

---

### Piecewise function analysis (Exercise 29)

**29.** Let
$$f(x) = \begin{cases} \sqrt{-x} & \text{if } x < 0 \\ 3 - x & \text{if } 0 \leq x < 3 \\ (x - 3)^2 & \text{if } x > 3 \end{cases}$$

- (a) Evaluate each limit, if it exists.
  - (i) $\displaystyle \lim_{x \to 0^+}f(x)$
  - (ii) $\displaystyle \lim_{x \to 0^-}f(x)$
  - (iii) $\displaystyle \lim_{x \to 0}f(x)$
  - (iv) $\displaystyle \lim_{x \to 3^-}f(x)$
  - (v) $\displaystyle \lim_{x \to 3^+}f(x)$
  - (vi) $\displaystyle \lim_{x \to 3}f(x)$
- (b) Where is $f$ discontinuous?
- (c) Sketch the graph of $f$.

---

### Piecewise continuity (Exercise 30)

**30.** Let
$$g(x) = \begin{cases} 2x - x^2 & \text{if } 0 \leq x \leq 2 \\ 2 - x & \text{if } 2 < x \leq 3 \\ x - 4 & \text{if } 3 < x < 4 \\ \pi & \text{if } x \geq 4 \end{cases}$$

- (a) For each of the numbers 2, 3, and 4, discover whether $g$ is continuous from the left, continuous from the right, or continuous at the number.
- (b) Sketch the graph of $g$.

---

## Priority gradient for Review Exercises 1–30

These are consolidation questions — they touch every technique in Chapter 2. Priorities based on what's most useful to practice.

**Highest value — pick these as your first pass:**

- **Exercise 1** — all the graph-reading skills in one question (infinite limits, one-sided limits, asymptotes, continuity). Do it.
- **Exercise 4 or 5** — factoring $(x-3)(x+3)/((x-1)(x+3))$ in the $0/0$ case (at $x = 3$) vs. the infinite-limit case (at $x = -3$, where the denominator vanishes but numerator doesn't). Good contrast.
- **Exercise 7** — difference quotient $((h-1)^3 + 1)/h$ — this is $f'(0)$ for $f(x) = (x-1)^3 + 1$... which equals 3. **Reverse-engineering practice.**
- **Exercise 13 and 14** — the $\sqrt{x^2}/(x - 6)$ sign-trap from Example 4 of 2.6. Limits at $\pm\infty$ give $\pm 1/2$. **Do both** to lock in the $\sqrt{x^2} = |x|$ sign convention.
- **Exercise 17** — conjugate trick for "$\infty - \infty$": $\sqrt{x^2 + 4x + 1} - x \to 2$.
- **Exercises 25, 27** — ε-δ proofs. Pick one.
- **Exercise 28** — infinite-limit ε-δ variant. Good practice.
- **Exercise 29** — piecewise function with one-sided limits at breakpoints. Classic.

**Medium value:**

- **Exercises 3, 6, 8, 10** — mechanical limit computation; pick one.
- **Exercises 11, 12** — factor/rationalize tricks.
- **Exercises 15, 16, 18, 19** — limits involving transcendental functions; pick one.
- **Exercise 20** — combine-the-fractions trick then cancel. Algebraically nice.
- **Exercise 23** — Squeeze with a non-trivial lower bound.
- **Exercise 30** — multi-piece piecewise continuity.

**Skim or skip:**

- **Exercise 2** — sketch graph with conditions. Mechanical.
- **Exercises 21, 22** — graph-then-prove asymptotes. Mechanical if you know the techniques.
- **Exercises 24, 26** — specific ε-δ proofs.

**The "must-do" shortlist:**

- **1** (graph reading, every skill combined)
- **7** (difference quotient as derivative)
- **13, 14** (sign-trap at $\pm\infty$)
- **17** (conjugate trick)
- **20** (combine-and-cancel)
- **25** (ε-δ proof template)
- **29** (piecewise function analysis)

These seven cover essentially every computational skill from Chapter 2.

---

*End of Chapter 2 Review Unit 1. Unit 2 covers Exercises 31–52 (derivatives and applications) plus all 14 Problems Plus (the challenge set).*
