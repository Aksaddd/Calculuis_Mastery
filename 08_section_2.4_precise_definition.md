# Section 2.4 — The Precise Definition of a Limit (Part A): Motivation, Definition, and Graphical/Algebraic Examples

*Covers pp. 109–113 of the book (PDF pp. 137–141). The most important conceptual section in Chapter 2. We replace the intuitive "$f(x)$ gets closer to $L$ as $x$ gets closer to $a$" with a rigorous challenge-response statement using the Greek letters $\varepsilon$ and $\delta$. This is where real analysis begins.*

---

## Section 2.4 — The Precise Definition of a Limit

The intuitive definition from Section 2.2 has a problem. Phrases like "$x$ is close to 2" and "$f(x)$ gets closer and closer to $L$" are **vague**. How close is close? In order to prove conclusively statements like

$$\lim_{x \to 0}\!\left(x^3 + \frac{\cos 5x}{10{,}000}\right) = 0.0001 \quad \text{or} \quad \lim_{x \to 0}\frac{\sin x}{x} = 1$$

we need a definition that doesn't depend on informal language. **Section 2.4 builds that definition from scratch.**

---

## The Motivating Challenge

Consider the specific function

$$f(x) = \begin{cases} 2x - 1 & \text{if } x \neq 3 \\ 6 & \text{if } x = 3 \end{cases}$$

Intuitively, as $x$ approaches 3 (but $x \neq 3$), $f(x) = 2x - 1$ approaches $2(3) - 1 = 5$. The value $f(3) = 6$ is irrelevant — limits don't look at the point itself. So we want $\lim_{x \to 3}f(x) = 5$.

**Can we prove this rigorously?** The plan: quantify what "approaches 5" means.

### The cascading-tolerance game

Ask: **how close does $x$ have to be to 3 so that $f(x)$ differs from 5 by less than 0.1?**

The distance from $x$ to 3 is $|x - 3|$; the distance from $f(x)$ to 5 is $|f(x) - 5|$. So we want a $\delta$ such that

$$|f(x) - 5| < 0.1 \quad \text{whenever} \quad |x - 3| < \delta \ \text{ and } \ x \neq 3$$

If $|x - 3| > 0$ (guaranteed by $x \neq 3$), we can rewrite as: find $\delta$ such that

$$|f(x) - 5| < 0.1 \quad \text{whenever} \quad 0 < |x - 3| < \delta$$

**Computation.** For $x \neq 3$:

$$|f(x) - 5| = |(2x - 1) - 5| = |2x - 6| = 2|x - 3|$$

So $|f(x) - 5| < 0.1$ becomes $2|x - 3| < 0.1$, i.e. $|x - 3| < 0.05$.

**Choose $\delta = 0.05$.** Then whenever $0 < |x - 3| < 0.05$, we get $|f(x) - 5| < 0.1$. ✓

**Tighten the tolerance.** Now demand $f(x)$ be within **0.01** of 5. Same argument: $2|x - 3| < 0.01$ means $|x - 3| < 0.005$. Choose $\delta = 0.005$.

**Tighten again to 0.001:** choose $\delta = 0.0005$.

### The pattern — and the breakthrough

The numbers $0.1, 0.01, 0.001$ are **error tolerances** that we might allow on the output. For 5 to be the precise limit of $f(x)$ as $x \to 3$, we must be able to bring the difference between $f(x)$ and $5$ below **any** positive number. And the calculation shows we can — by taking $\delta$ to be half that number.

**Using the Greek letter $\varepsilon$** (epsilon) for an arbitrary positive tolerance, we have:

$$\tag{1} |f(x) - 5| < \varepsilon \quad \text{whenever} \quad 0 < |x - 3| < \delta = \frac{\varepsilon}{2}$$

**This is a precise statement** that "$f(x)$ is close to 5 when $x$ is close to 3" — we can make $f(x)$ within an arbitrary distance $\varepsilon$ of 5 by taking $x$ within a corresponding distance $\varepsilon/2$ of 3.

Using (1) as a template, Stewart formalizes the general definition.

---

## Definition 2 — The Precise Definition of a Limit

> **Definition 2 (ε-δ definition of a limit).** Let $f$ be a function defined on some open interval that contains the number $a$, except possibly at $a$ itself. Then we say that the **limit of $f(x)$ as $x$ approaches $a$ is $L$**, and we write
> $$\lim_{x \to a}f(x) = L$$
> if **for every number $\varepsilon > 0$ there is a number $\delta > 0$** such that
> $$|f(x) - L| < \varepsilon \quad \text{whenever} \quad 0 < |x - a| < \delta$$

### Reading the definition carefully

Five things to notice:

1. **"For every $\varepsilon > 0$."** The $\varepsilon$ is **given to you** — you don't choose it. You must respond to whatever $\varepsilon$ someone hands you, no matter how small.

2. **"There is a number $\delta > 0$."** The $\delta$ is **your response** — you get to choose it, based on the $\varepsilon$ you were given. A specific $\delta$ that works for $\varepsilon = 0.1$ might not work for $\varepsilon = 0.01$ — you generally need a smaller $\delta$ for a smaller $\varepsilon$.

3. **"$|f(x) - L| < \varepsilon$"** — the *output* is within $\varepsilon$ of $L$. The Greek letter $\varepsilon$ always refers to tolerance on the $y$-axis (output side).

4. **"Whenever $0 < |x - a| < \delta$"** — the *input* is within $\delta$ of $a$ (but not equal to $a$). The "$0 < $" is critical: we exclude $x = a$ itself, just like in Section 2.2's intuitive definition.

5. **"$\varepsilon$ and $\delta$ are the Greek letters** $\varepsilon$ and $\delta$ (epsilon and delta)." The convention is universal — never use $a, b, c$ for these roles.

*Margin note: It is traditional to use the Greek letter $\delta$ (delta) in this situation.*

### Two equivalent reformulations

**In words:**

> $\lim_{x \to a}f(x) = L$ means that the distance between $f(x)$ and $L$ can be made arbitrarily small by taking the distance from $x$ to $a$ sufficiently small (but not 0).

**In interval language:** Since $|x - a| < \delta$ is equivalent to $-\delta < x - a < \delta$, which is equivalent to $a - \delta < x < a + \delta$ (and excluding $x = a$ means $x \neq a$), and similarly $|f(x) - L| < \varepsilon$ is equivalent to $L - \varepsilon < f(x) < L + \varepsilon$:

> $\lim_{x \to a}f(x) = L$ means that for every $\varepsilon > 0$ (no matter how small $\varepsilon$ is) we can find $\delta > 0$ such that if $x$ lies in the open interval $(a - \delta, a + \delta)$ and $x \neq a$, then $f(x)$ lies in the open interval $(L - \varepsilon, L + \varepsilon)$.

---

## Geometric Interpretation

> **Figure 1 (the motivating example).** The graph of the function $y = 2x - 1$ with the target limit height $y = 5$ drawn in. A horizontal band at heights $5 - \varepsilon$ to $5 + \varepsilon$ is shaded, and we see that for $x$ in the interval $(3 - \delta, 3 + \delta)$ (excluding $x = 3$ itself), the graph stays inside this horizontal band. **Conceptually: the band represents the output tolerance, and we find an $x$-neighborhood that maps inside it.**

> **Figure 2 (arrow-diagram visualization).** Two copies of the real number line with an "$f$" arrow connecting them. The input $x$ on the left line is mapped to $f(x)$ on the right line. The figure represents $f$ as a mapping $\mathbb{R} \to \mathbb{R}$, setting up the interval-based geometric picture.

> **Figure 3 (what the ε-δ definition looks like as a mapping).** A tiny $\delta$-sized interval around $a$ on the left maps, under $f$, into a tiny $\varepsilon$-sized interval around $L$ on the right. **The definition asserts this mapping works for every $\varepsilon$, by adjusting $\delta$.**

### Graph-based visualization: the "horizontal band challenge"

> **Figure 4.** The graph of a function $y = f(x)$ with two horizontal lines $y = L + \varepsilon$ and $y = L - \varepsilon$ drawn in. These define the "target band" of output tolerance.

> **Figure 5.** Given the horizontal band from Figure 4, we narrow the $x$-axis to an interval $(a - \delta, a + \delta)$ — shown as a **vertical strip** — such that the graph of $f$ over that strip stays within the horizontal band. **The ε-δ game is: given any band width ε, find a strip width δ such that the graph confined to the strip stays in the band.**

> **Figure 6.** A tighter $\varepsilon$ (narrower horizontal band) typically requires a smaller $\delta$ (narrower vertical strip). The figure shows the same curve with $\varepsilon$ reduced and $\delta$ correspondingly smaller. **Conceptually: smaller output tolerance forces tighter input control.**

### The "every positive ε" requirement is the whole point

**It's important to realize that the process must work for EVERY positive number $\varepsilon$, no matter how small.** If there's *any* $\varepsilon > 0$ for which you can't find a $\delta$, then the limit isn't $L$.

---

## The Challenge-Response Framing

**In proving limit statements it may be helpful to think of the definition of limit as a challenge.**

- **Person A** (the challenger): fixes a number $\varepsilon > 0$ (say $\varepsilon = 0.01$) — they think you can't make $f(x)$ within $\varepsilon$ of $L$.
- **Person B** (you, the responder): must find a $\delta > 0$ such that $0 < |x - a| < \delta$ forces $|f(x) - L| < \varepsilon$.

**The game continues.** A might challenge with smaller values of $\varepsilon$ (0.0001, 0.000001, ...). Each time, B must find a new $\delta$ that works — usually smaller.

**B wins if B can respond to every challenge.** If B can always respond — no matter how small $\varepsilon$ — then $\lim_{x \to a}f(x) = L$ by definition. If A can find even one $\varepsilon$ for which B cannot respond, the limit fails.

**This is the game that defines analysis.** Every rigorous limit proof is structurally a response to this challenge.

---

### Example 1 — Finding $\delta$ graphically for $\varepsilon = 0.2$

Use a graph to find a number $\delta$ such that

$$|(x^3 - 5x + 6) - 2| < 0.2 \quad \text{whenever} \quad |x - 1| < \delta$$

(In other words: for $f(x) = x^3 - 5x + 6$, $a = 1$, $L = 2$, find a $\delta$ corresponding to $\varepsilon = 0.2$.)

***Solution.*** Graph $f(x) = x^3 - 5x + 6$ near $x = 1$. Since $f(1) = 1 - 5 + 6 = 2$, we're looking at the region near the point $(1, 2)$.

The target inequality $|(x^3 - 5x + 6) - 2| < 0.2$ rewrites as

$$1.8 < x^3 - 5x + 6 < 2.2$$

**Graphical procedure.**
1. Draw horizontal lines $y = 1.8$ and $y = 2.2$ on the graph.
2. Find the $x$-coordinates where the graph crosses these lines near $x = 1$.
3. Using a graphing calculator and the cursor, Stewart estimates:
   - $y = 2.2$ crosses the curve near $x \approx 0.911$.
   - $y = 1.8$ crosses the curve near $x \approx 1.124$.

So the graph stays between heights 1.8 and 2.2 for roughly $0.92 < x < 1.12$.

**Choosing $\delta$.** This interval is **not symmetric** about $x = 1$. The distance to the left endpoint is $1 - 0.92 = 0.08$; the distance to the right endpoint is $1.12 - 1 = 0.12$. **We must take the smaller** of these two distances as our $\delta$:

$$\delta = 0.08$$

Then $|x - 1| < 0.08$ implies $x \in (0.92, 1.08) \subseteq (0.92, 1.12)$, which guarantees $|f(x) - 2| < 0.2$. ✓

**This is illustration, not proof.** The graphical procedure shows the definition works for $\varepsilon = 0.2$. It does **not** prove the limit is 2 — a proof requires showing a $\delta$ exists for *every* $\varepsilon$, not just this one.

*Margin note: Although we chose $\delta = 0.08$, any smaller positive value of $\delta$ would also have worked.*

---

## Proving Limit Statements — the Two-Stage Strategy

Since a proof requires responding to every $\varepsilon$, we need an algebraic method, not a graph. The standard template:

**Stage 1 — Preliminary analysis (guessing $\delta$).** Assume we have the unknown $\varepsilon$. Manipulate $|f(x) - L| < \varepsilon$ into the form $|x - a| < (\text{something in } \varepsilon)$. The "something" tells us what $\delta$ should be.

**Stage 2 — Proof (verifying the guess).** Start from the definition: let $\varepsilon > 0$ be given. Choose your $\delta$ (the result of Stage 1). Suppose $0 < |x - a| < \delta$. Then derive $|f(x) - L| < \varepsilon$ by a forward chain of inequalities.

The two stages are literally written out in opposite directions — Stage 1 reasons *backward* from the goal to find $\delta$; Stage 2 reasons *forward* from $\delta$ to the goal.

---

### Example 2 — A rigorous ε-δ proof

Prove that $\displaystyle \lim_{x \to 3}(4x - 5) = 7$.

***Solution.***

**Stage 1 — Preliminary analysis (guessing $\delta$).** Let $\varepsilon > 0$ be given. We want to find $\delta$ such that $0 < |x - 3| < \delta \implies |(4x - 5) - 7| < \varepsilon$.

Compute the output distance:

$$|(4x - 5) - 7| = |4x - 12| = |4(x - 3)| = 4|x - 3|$$

So $|(4x - 5) - 7| < \varepsilon$ is the same as $4|x - 3| < \varepsilon$, i.e., $|x - 3| < \varepsilon/4$.

**This suggests $\delta = \varepsilon/4$.**

**Stage 2 — Proof (showing this $\delta$ works).** Given $\varepsilon > 0$, choose $\delta = \varepsilon/4$. If $0 < |x - 3| < \delta$, then

$$|(4x - 5) - 7| = |4x - 12| = 4|x - 3| < 4\delta = 4 \cdot \frac{\varepsilon}{4} = \varepsilon$$

Therefore $|(4x - 5) - 7| < \varepsilon$ whenever $0 < |x - 3| < \delta$. **By Definition 2, $\lim_{x \to 3}(4x - 5) = 7$.** $\blacksquare$

> **Figure 9 (the geometric picture).** The graph of $y = 4x - 5$ with horizontal lines at $y = 7 \pm \varepsilon$ and vertical lines at $x = 3 \pm \delta$. The band-and-strip picture: the $\varepsilon$-band on the $y$-axis corresponds to a $\delta$-strip on the $x$-axis, and the graph stays inside the box where they intersect.

### Commentary on Stage 1 vs. Stage 2

**Stage 1 is exploration; Stage 2 is deductive proof.** Both stages are necessary — Stage 1 shows you where $\delta$ comes from, but Stage 2 is what actually establishes the theorem. You **cannot** publish a paper consisting only of Stage 1. You must show the chosen $\delta$ verifiably works.

**Stage 1 reasoning:** solve backwards. We want $|f(x) - L| < \varepsilon$; this is equivalent to $|x - a| < (\text{some function of } \varepsilon)$.

**Stage 2 reasoning:** chain forward. Assume $|x - a| < \delta$; derive $|f(x) - L| < \varepsilon$ by algebra.

### Historical note — Cauchy and the Rigor Revolution

*Margin note: After the invention of calculus in the 17th century, there followed a period of free development of the subject in the 18th century. Mathematicians like the Bernoulli brothers and Euler were eager to exploit the power of calculus and boldly explored the consequences of this new and wonderful mathematical theory without worrying too much about whether their proofs were completely correct.*

*The 19th century, by contrast, was the Age of Rigor in mathematics. There was a movement to go back to the foundations of the subject — to provide careful definitions and rigorous proofs. At the forefront of this movement was the French mathematician* **Augustin-Louis Cauchy** *(1789–1857), who started out as a military engineer before becoming a mathematics professor in Paris. Cauchy took Newton's idea of a limit, which was kept alive in the 18th century by the French mathematician Jean d'Alembert, and made it more precise. His definition of a limit reads as follows: "When the successive values attributed to a variable approach indefinitely a fixed value so as to end by differing from it by as little as one wishes, this last is called the* limit *of all the others." But when Cauchy used this definition in examples and proofs, he often employed delta-epsilon inequalities similar to the ones in this section. A typical Cauchy proof starts with: "Designate by $\delta$ and $\varepsilon$ two very small numbers;…" He used $\varepsilon$ because of the correspondence between epsilon and the French word* erreur *and $\delta$ because delta corresponds to* différence. *Later, the German mathematician* **Karl Weierstrass** *(1815–1897) stated the definition of a limit exactly as in our Definition 2.*

**This is one of the pivotal developments in the history of mathematics.** Before Cauchy-Weierstrass, calculus was powerful but philosophically shaky — Newton's "infinitesimals" and "fluxions" were never quite rigorously defined. The ε-δ formalism made all of analysis rigorous in one stroke. Every theorem of real analysis, every measure-theoretic probability argument, every convergence result in numerical analysis you'll encounter in MFE — all of it rests on Definition 2.

---

## One-Sided Limits Made Precise

The intuitive definitions of one-sided limits from Section 2.2 can be precisely reformulated.

> **Definition 3 — Precise definition of left-hand limit.**
> $$\lim_{x \to a^-}f(x) = L$$
> if for every number $\varepsilon > 0$ there is a number $\delta > 0$ such that
> $$|f(x) - L| < \varepsilon \quad \text{whenever} \quad a - \delta < x < a$$

> **Definition 4 — Precise definition of right-hand limit.**
> $$\lim_{x \to a^+}f(x) = L$$
> if for every number $\varepsilon > 0$ there is a number $\delta > 0$ such that
> $$|f(x) - L| < \varepsilon \quad \text{whenever} \quad a < x < a + \delta$$

**The only difference from Definition 2** is that $x$ is restricted to lie in the *left half* $(a - \delta, a)$ for the left-hand limit, or the *right half* $(a, a + \delta)$ for the right-hand limit. The $\varepsilon$ game is otherwise identical.

---

### Example 3 — Using Definition 4 to prove $\lim_{x \to 0^+}\sqrt{x} = 0$

Prove that $\displaystyle \lim_{x \to 0^+}\sqrt{x} = 0$.

***Solution.***

**Stage 1 — Preliminary analysis.** Let $\varepsilon > 0$ be given. Here $a = 0, L = 0$, so we want $\delta > 0$ such that

$$|\sqrt{x} - 0| < \varepsilon \quad \text{whenever} \quad 0 < x < \delta$$

Since $x > 0$ makes $\sqrt{x}$ well-defined and positive, $|\sqrt{x} - 0| = \sqrt{x}$, and the requirement becomes $\sqrt{x} < \varepsilon$. Squaring both sides (both are positive, so the inequality preserves): $x < \varepsilon^2$.

**This suggests $\delta = \varepsilon^2$.**

**Stage 2 — Proof.** Given $\varepsilon > 0$, choose $\delta = \varepsilon^2$. If $0 < x < \delta = \varepsilon^2$, then $\sqrt{x} < \sqrt{\varepsilon^2} = \varepsilon$ (since both sides are positive). Therefore $|\sqrt{x} - 0| = \sqrt{x} < \varepsilon$.

By Definition 4, $\lim_{x \to 0^+}\sqrt{x} = 0$. $\blacksquare$

**Why use the right-hand version.** $\sqrt{x}$ is undefined for $x < 0$, so the two-sided limit doesn't make sense (we need both sides of 0 defined). But the right-hand limit is well-defined, and we proved it equals 0.

---

## What comes next

Unit 2 will work through more complex ε-δ proofs (Examples 4–6):
- Polynomial limits that require bounding (e.g., $\lim_{x\to 3}x^2 = 9$, where $|x^2 - 9| = |x - 3||x + 3|$ and we need to bound $|x + 3|$).
- The formal proof of Limit Law 1 (Sum Law) from the definition.

Unit 3 will cover infinite-limit ε-δ definitions ($\lim_{x\to a}f(x) = \infty$ formalized) and all the exercises.

**Why this matters for your MFE prep.** ε-δ is the foundation for:
- **Measure-theoretic probability** — all measure-theoretic convergence (almost sure, in probability, in $L^p$) is built on ε-δ-style quantification.
- **Stochastic convergence results** — CLT, law of large numbers, martingale convergence theorems — all have rigorous ε-δ-style proofs underneath.
- **Numerical analysis** — when a paper says an algorithm "converges with error $O(h^2)$," it's an ε-δ-type statement.
- **Functional analysis** (Hilbert/Banach spaces used in asset pricing) — continuity of operators requires ε-δ formalism.

**You don't need to memorize every proof.** But you do need fluency in the challenge-response framing — it's the grammar of all rigorous quantitative work. Baruch MFE and Courant will both assume this fluency on day 1.

---

*End of Unit 1 of Section 2.4. Unit 2 covers more complex ε-δ proofs (Examples 4-6) and the proof of the Sum Law.*
