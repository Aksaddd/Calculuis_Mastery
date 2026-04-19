# Principles of Problem Solving + Chapter 1 Problems Plus

*Covers pp. 76–81 of the book (PDF pp. 104–109). Two things bundled: Polya's problem-solving methodology as a general-purpose framework, and 20 challenging problems that test Chapter 1 content. The problems are substantially harder than ordinary exercises — they require synthesis across multiple sections and creative applications.*

---

## Part 1 — Polya's Problem-Solving Framework

Stewart adapts George Polya's classic *How To Solve It* (1945) into a four-step framework. As a math major you've likely already seen this, so I'll summarize compactly with emphasis on the tactical heuristics under each step.

### Step 1 — Understand the Problem

Ask three questions:
- **What is the unknown?**
- **What are the given quantities?**
- **What are the given conditions?**

Two things help a lot here:
- **Draw a diagram.** Identify the given and required quantities on the diagram.
- **Introduce suitable notation.** Use letters $a, b, c, m, n, x, y$ for unknowns, or suggestive initials like $V$ for volume, $t$ for time.

### Step 2 — Think of a Plan

Find a connection between the given information and the unknown. If no connection is obvious, try one of these heuristics:

| Heuristic | What it means |
|---|---|
| **Try to recognize something familiar** | Relate the problem to something you've seen before. |
| **Try to recognize patterns** | Geometric, numerical, or algebraic — look for regularity that suggests a formula. |
| **Use analogy** | Try a similar but simpler problem. If stuck on a 3D problem, try 2D. If stuck on a general case, try a special case. |
| **Introduce something extra** | An auxiliary line in a diagram, a new variable, a substitution — anything that bridges the given and unknown. |
| **Take cases** | Split into exhaustive sub-problems. Canonical for absolute value, piecewise functions, parity, sign conditions. |
| **Work backward** | Assume the answer and figure out what would have to be true. Useful for equation-solving. |
| **Establish subgoals** | Break a complex problem into intermediate targets. Standard for multi-step derivations. |
| **Indirect reasoning** | Proof by contradiction — assume the statement is false and derive a contradiction. |
| **Mathematical induction** | For statements indexed by $n \in \mathbb{N}$: prove base case, then induction step. |

> **Principle of Mathematical Induction.** Let $S_n$ be a statement about the positive integer $n$. Suppose that
> 1. $S_1$ is true.
> 2. $S_{k+1}$ is true whenever $S_k$ is true.
>
> Then $S_n$ is true for all positive integers $n$.

### Step 3 — Carry Out the Plan

Execute the plan, verifying each step as you go.

### Step 4 — Look Back

Check whether the answer makes sense. Look for ways to simplify or see the solution more deeply. **Descartes:** "Every problem that I solved became a rule which served afterwards to solve other problems."

---

### Example 1 — Express hypotenuse of a right triangle with area 25 m² as a function of its perimeter $P$

(*Step 1 — Understand the problem.*) Unknown: $h$ (hypotenuse). Given: perimeter $P$, area $25 \text{ m}^2$.

(*Draw a diagram.*) A right triangle with legs $a, b$ and hypotenuse $h$.

(*Introduce variables $a, b$.*) We have three relationships:

$$\tag{1} h^2 = a^2 + b^2 \quad \text{(Pythagoras)}$$

$$\tag{2} 25 = \tfrac{1}{2} a b \quad \text{(area)}$$

$$\tag{3} P = a + b + h \quad \text{(perimeter)}$$

Three equations in three unknowns ($a, b, h$). But solving directly is messy.

(*Step 2 — Plan.*) **Try to recognize something familiar.** The ingredients $a^2 + b^2$, $ab$, and $a + b$ together should remind you of:

$$(a + b)^2 = a^2 + 2ab + b^2$$

(*Step 3 — Carry out.*) Using Equations 1 and 2:

$$(a + b)^2 = (a^2 + b^2) + 2ab = h^2 + 4(25) = h^2 + 100$$

From Equation 3, $a + b = P - h$, so:

$$(P - h)^2 = h^2 + 100$$
$$P^2 - 2Ph + h^2 = h^2 + 100$$
$$2Ph = P^2 - 100$$

$$\boxed{\; h = \frac{P^2 - 100}{2P} \;}$$

(*Step 4 — Look back.*) Check: at $P \to \infty$, $h \to P/2$, which makes sense (a degenerate thin tall triangle). Reasonable.

---

### Example 2 — Solve $|x - 3| + |x + 2| < 11$

(*Plan: take cases* based on the signs of the two absolute-value arguments.)

- $|x - 3| = x - 3$ if $x \geq 3$, else $-(x - 3) = -x + 3$.
- $|x + 2| = x + 2$ if $x \geq -2$, else $-(x + 2) = -x - 2$.

Three cases based on where $x$ sits relative to the breakpoints $-2$ and $3$:

**Case I: $x < -2$.** Both arguments negative, so $|x-3| = -x+3$ and $|x+2| = -x-2$.
$$(-x + 3) + (-x - 2) < 11 \implies -2x + 1 < 11 \implies -2x < 10 \implies x > -5$$
Combining with $x < -2$: **$-5 < x < -2$**.

**Case II: $-2 \leq x < 3$.** First argument negative, second non-negative: $|x-3| = -x+3$, $|x+2| = x+2$.
$$(-x + 3) + (x + 2) < 11 \implies 5 < 11$$
True always (independent of $x$). So all $x \in [-2, 3)$ satisfy the inequality.

**Case III: $x \geq 3$.** Both arguments non-negative.
$$(x - 3) + (x + 2) < 11 \implies 2x - 1 < 11 \implies 2x < 12 \implies x < 6$$
Combining with $x \geq 3$: **$3 \leq x < 6$**.

Union of the three case-solutions: $(-5, -2) \cup [-2, 3) \cup [3, 6) = (-5, 6)$.

$$\boxed{\; \text{Solution: } (-5, 6) \;}$$

---

### Example 3 — Induction on iterated composition

If $f_0(x) = x/(x+1)$ and $f_{n+1} = f_0 \circ f_n$ for $n = 0, 1, 2, \ldots$, find a formula for $f_n(x)$.

(*Plan: look for a pattern.* Compute $f_1, f_2, f_3$ and spot the rule, then prove by induction.)

**Pattern finding.**

$$f_1(x) = (f_0 \circ f_0)(x) = f_0(f_0(x)) = f_0\!\left(\tfrac{x}{x+1}\right) = \frac{\frac{x}{x+1}}{\frac{x}{x+1} + 1} = \frac{\frac{x}{x+1}}{\frac{2x+1}{x+1}} = \frac{x}{2x+1}$$

$$f_2(x) = (f_0 \circ f_1)(x) = f_0(f_1(x)) = f_0\!\left(\tfrac{x}{2x+1}\right) = \frac{\frac{x}{2x+1}}{\frac{x}{2x+1} + 1} = \frac{x}{3x+1}$$

$$f_3(x) = (f_0 \circ f_2)(x) = f_0\!\left(\tfrac{x}{3x+1}\right) = \frac{x}{4x+1}$$

**The pattern.** The coefficient of $x$ in the denominator is $n + 1$:

$$\tag{4} f_n(x) = \frac{x}{(n+1)x + 1}$$

**Proof by induction.**

*Base case* ($n = 0$): $f_0(x) = \dfrac{x}{1 \cdot x + 1} = \dfrac{x}{x + 1}$. ✓

*Inductive step.* Assume $f_k(x) = \dfrac{x}{(k+1)x + 1}$. Show $f_{k+1}(x) = \dfrac{x}{(k+2)x + 1}$.

$$f_{k+1}(x) = f_0(f_k(x)) = f_0\!\left(\tfrac{x}{(k+1)x + 1}\right) = \frac{\frac{x}{(k+1)x+1}}{\frac{x}{(k+1)x+1} + 1} = \frac{\frac{x}{(k+1)x+1}}{\frac{(k+2)x + 1}{(k+1)x+1}} = \frac{x}{(k+2)x + 1}$$

This is (4) with $n = k + 1$. By induction, (4) holds for all $n \geq 0$. $\blacksquare$

**Why this matters for your quant track.** Iterated compositions $f \circ f \circ \cdots \circ f$ appear in:
- **Dynamical systems** — $x_{n+1} = f(x_n)$ is a deterministic map.
- **Markov chains** — iterating transition operators.
- **Neural networks** — a deep network is literally $f_n \circ f_{n-1} \circ \cdots \circ f_1$.
- **Newton's method** — $x_{n+1} = x_n - f(x_n)/f'(x_n)$ is iterating a particular composition.

The induction technique here — spot a pattern from small cases, guess a formula, prove by induction — is the standard move for analyzing any iterated process symbolically.

---

## Part 2 — Problems (Chapter 1)

The 20 problems below test Chapter 1 content at a more challenging level than the Review exercises. Many require the Polya heuristics above.

*Legend (same as before):*
- `[HINT]` — boxed exercise number.
- `[GRAPH]` — graphing calculator/software recommended.
- `[CAS]` — CAS required.

---

### Problems

**1.** One of the legs of a right triangle has length 4 cm. Express the length of the altitude perpendicular to the hypotenuse as a function of the length of the hypotenuse.

**2.** The altitude perpendicular to the hypotenuse of a right triangle is 12 cm. Express the length of the hypotenuse as a function of the perimeter.

**3.** Solve the equation $|2x - 1| - |x + 5| = 3$.

**4.** Solve the inequality $|x - 1| - |x - 3| \geq 5$.

**5.** Sketch the graph of the function $f(x) = \big|\,x^2 - 4|x| + 3\,\big|$.

**6.** Sketch the graph of the function $g(x) = |x^2 - 1| - |x^2 - 4|$.

**7.** Draw the graph of the equation $x + |x| = y + |y|$.

**8.** Draw the graph of the equation $x^4 - 4x^2 - x^2 y^2 + 4 y^2 = 0$.

**9.** Sketch the region in the plane consisting of all points $(x, y)$ such that $|x| + |y| \leq 1$.

**10.** Sketch the region in the plane consisting of all points $(x, y)$ such that
$$|x - y| + |x| - |y| \leq 2$$

**11.** Evaluate $(\log_2 3)(\log_3 4)(\log_4 5) \cdots (\log_{31} 32)$.

**12.**
- (a) Show that the function $f(x) = \ln\!\left(x + \sqrt{x^2 + 1}\right)$ is an odd function.
- (b) Find the inverse function of $f$.

**13.** Solve the inequality $\ln(x^2 - 2x - 2) \leq 0$.

**14.** Use indirect reasoning to prove that $\log_2 5$ is an irrational number.

**15.** A driver sets out on a journey. For the first half of the distance she drives at the leisurely pace of 30 mi/h; she drives the second half at 60 mi/h. What is her average speed on this trip?

**16.** Is it true that $f \circ (g + h) = f \circ g + f \circ h$?

**17.** Prove that if $n$ is a positive integer, then $7^n - 1$ is divisible by 6.

**18.** Prove that $1 + 3 + 5 + \cdots + (2n - 1) = n^2$.

**19.** If $f_0(x) = x^2$ and $f_{n+1}(x) = f_0(f_n(x))$ for $n = 0, 1, 2, \ldots$, find a formula for $f_n(x)$.

**20.**
- (a) If $f_0(x) = \dfrac{1}{2 - x}$ and $f_{n+1} = f_0 \circ f_n$ for $n = 0, 1, 2, \ldots$, find an expression for $f_n(x)$ and use mathematical induction to prove it.
- (b) `[GRAPH]` Graph $f_0, f_1, f_2, f_3$ on the same screen and describe the effects of repeated composition.

---

## Priority gradient — which Problems Plus to actually do

**These are HARDER than the Review exercises.** The Review tests whether you can apply each Chapter 1 concept in isolation; Problems Plus tests whether you can *combine* them creatively. Expect each to take 15–30 minutes.

### Definitely do these (highest value):

**Problem 1.** Altitude-to-hypotenuse as function of hypotenuse length. Geometry + algebraic manipulation. *Sketch of technique: if one leg is 4 and hypotenuse is $h$, the other leg is $\sqrt{h^2 - 16}$. Area = $\tfrac{1}{2}(4)(\sqrt{h^2 - 16}) = \tfrac{1}{2} h \cdot (\text{altitude})$. Solve for altitude.*

**Problem 11.** Evaluate $(\log_2 3)(\log_3 4)\cdots(\log_{31} 32)$. **This is beautiful.** Using change of base ($\log_a b = \ln b / \ln a$), the product telescopes:

$$\prod_{k=2}^{31} \log_k(k+1) = \prod_{k=2}^{31} \frac{\ln(k+1)}{\ln k} = \frac{\ln 3}{\ln 2} \cdot \frac{\ln 4}{\ln 3} \cdots \frac{\ln 32}{\ln 31} = \frac{\ln 32}{\ln 2} = \log_2 32 = 5$$

Every numerator cancels with the next denominator. **Telescoping products are a standard technique in probability (likelihood ratios), finance (multi-period compound factors), and analysis (infinite products).** Do this one.

**Problem 12.** Show $f(x) = \ln(x + \sqrt{x^2 + 1})$ is odd, and find $f^{-1}$. This is a cultural landmark — $\sinh^{-1}$ is defined to be exactly this function. You're essentially being asked to rediscover the inverse hyperbolic sine. The inverse comes out to $f^{-1}(x) = (e^x - e^{-x})/2 = \sinh x$. Foreshadows Chapter 3 hyperbolic functions.

**Problem 14.** Prove $\log_2 5$ is irrational by contradiction. Assume $\log_2 5 = p/q$ with $p, q$ integers. Then $2^{p/q} = 5$, so $2^p = 5^q$. Left side has only 2 as a prime factor; right side has only 5. Impossible unless both sides equal 1 (which needs $p = q = 0$, disallowed). **This is a classic introduction to proofs by contradiction and to irrationality arguments.** Essential for any advanced math track.

**Problem 15.** Average speed for a half-60 / half-30 trip. **The answer is NOT 45.** Harmonic mean: $\frac{2 \cdot 30 \cdot 60}{30 + 60} = \frac{3600}{90} = 40$ mph. Arithmetic mean is wrong because the 30 mph half takes *twice as long* as the 60 mph half, so it should be weighted more. **The arithmetic-mean-vs-harmonic-mean distinction shows up constantly in finance (time-weighted vs. dollar-weighted returns, IRR calculation)**. Worth internalizing.

**Problem 20.** Find a formula for iterated composition of $f_0(x) = 1/(2 - x)$ and prove by induction. Pattern-recognition + induction practice. Similar to Stewart's Example 3, but with a different base function. Expected form: $f_n(x)$ follows a pattern tied to Fibonacci-like sequences.

### Good to do (medium value):

- **Problem 3** ($|2x-1| - |x+5| = 3$) and **Problem 4** ($|x-1| - |x-3| \geq 5$) — case analysis drills.
- **Problems 5, 6** — absolute-value function sketching; composition of transformations.
- **Problems 9, 10** — region-sketching with absolute values. Each region has a nice geometric description — #9 is a diamond (rotated square), #10 is more subtle.
- **Problem 13** ($\ln(x^2 - 2x - 2) \leq 0$) — combines logarithm manipulation with quadratic inequality.
- **Problem 17** ($7^n - 1$ divisible by 6) and **Problem 18** (sum of odd integers $= n^2$) — induction warm-ups.
- **Problem 19** (iterated squaring). $f_n(x) = x^{2^{n+1}}$ — simpler pattern than Problem 20.

### Skippable:

- **Problem 2** — similar to #1, just with different variables.
- **Problems 7, 8** — implicit equation sketching; tedious rather than illuminating.
- **Problem 16** (is $f \circ (g + h) = f \circ g + f \circ h$?) — the answer is no in general. Trivial once you see it.

---

## Chapter 1 — final synthesis for your trajectory

**If you do three Problems Plus problems and nothing else, make them 11, 12, and 15.**

- **Problem 11** — telescoping products.
- **Problem 12** — inverse hyperbolic sine hidden inside a log.
- **Problem 15** — harmonic mean vs. arithmetic mean.

Each of these introduces a technique you'll use again in Chapters 2+, and each has a direct echo in quant finance.

---

*End of Chapter 1 Review Unit B. The entire Chapter 1 — textbook sections 1.1 through 1.6 plus the Review — is now parsed into 24 Markdown files.*
