# Section 2.4 — The Precise Definition of a Limit (Part B): Polynomial Proofs, the Sum Law, and Infinite Limits

*Covers pp. 113–116 top of the book (PDF pp. 142–144). The remaining exposition of Section 2.4: a harder ε-δ proof with a bounding technique (Example 4), the proof of the Sum Law from the definition, and the precise definitions for $\lim = \pm \infty$ (Definitions 6 and 7 with Example 5).*

---

## Example 4 — A polynomial ε-δ proof with bounding

Prove that $\displaystyle \lim_{x \to 3} x^2 = 9$.

**Why this is harder than Example 2.** Example 2 was $4x - 5$ — a linear function, where $|f(x) - L| = 4|x - a|$ gave us $\delta$ directly. Here $|f(x) - 9| = |x^2 - 9|$ is **not** a constant times $|x - 3|$; it has an extra factor that depends on $x$. We have to be more clever.

***Solution.***

**Stage 1 — Preliminary analysis (guessing $\delta$).** Let $\varepsilon > 0$ be given. We want $\delta > 0$ such that

$$0 < |x - 3| < \delta \implies |x^2 - 9| < \varepsilon$$

**Factor the target inequality.** Since $x^2 - 9 = (x + 3)(x - 3)$:

$$|x^2 - 9| = |x + 3| \cdot |x - 3|$$

So we want $|x + 3| \cdot |x - 3| < \varepsilon$.

**The complication.** This isn't just $(\text{constant}) \cdot |x - 3|$ — the factor $|x + 3|$ depends on $x$. If $|x + 3|$ were known to be bounded above by some constant $C$, we'd have

$$|x^2 - 9| = |x + 3| \cdot |x - 3| < C \cdot |x - 3|$$

and could take $\delta = \varepsilon/C$.

**Finding a bound $C$ for $|x + 3|$.** Since we're looking at $x$ near 3, $|x + 3|$ is close to 6. Let's restrict $x$ to lie close enough to 3 — say, within distance 1 of 3:

$$|x - 3| < 1 \implies 2 < x < 4 \implies 5 < x + 3 < 7$$

So **if $|x - 3| < 1$, then $|x + 3| < 7$**. Take $C = 7$.

**Assembling $\delta$.** We now have **two constraints on $|x - 3|$**:
- $|x - 3| < 1$ (needed to ensure $|x + 3| < 7$).
- $|x - 3| < \varepsilon/C = \varepsilon/7$ (needed to ensure $C|x - 3| < \varepsilon$).

To satisfy both simultaneously, take $\delta$ to be the **smaller** of these two:

$$\delta = \min\!\left\{1, \frac{\varepsilon}{7}\right\}$$

**Stage 2 — Proof.** Given $\varepsilon > 0$, let $\delta = \min\{1, \varepsilon/7\}$. Suppose $0 < |x - 3| < \delta$. Then:

- Since $\delta \leq 1$, we have $|x - 3| < 1$, which gives $|x + 3| < 7$ (as computed in Stage 1).
- Since $\delta \leq \varepsilon/7$, we have $|x - 3| < \varepsilon/7$.

Therefore:

$$|x^2 - 9| = |x + 3| \cdot |x - 3| < 7 \cdot \frac{\varepsilon}{7} = \varepsilon$$

By Definition 2, $\lim_{x \to 3} x^2 = 9$. $\blacksquare$

### The "bound-then-refine" technique — a reusable pattern

**The idea generalizes far beyond polynomials.** Whenever $|f(x) - L|$ factors as (something depending on $x$) × (something vanishing as $x \to a$):

1. **Bound the "something depending on $x$"** by a constant $C$, valid when $|x - a|$ is within some "safety distance" $r$ (in the example, $r = 1$, $C = 7$).
2. **Force $|x - a| < \varepsilon/C$** to kill the ε target.
3. **Take $\delta = \min\{r, \varepsilon/C\}$** so that both conditions hold.

**Common use cases beyond Stewart:** proving continuity of products, proving continuity under composition, deriving $\varepsilon$-$\delta$ bounds for derivatives in Chapter 3, proving uniform continuity theorems in real analysis, and essentially every convergence argument in probability (CLT, LLN, martingale convergence — all use bound-then-refine).

---

## The Bigger Picture — Why We Proved the Limit Laws

Stewart's comment after Example 4 captures something important:

> *"As Example 4 shows, it is not always easy to prove that limit statements are true using the ε, δ definition. In fact, if we had been given a more complicated function such as $f(x) = (6x^2 - 8x + 9)/(2x^2 - 1)$, a proof would require a great deal of ingenuity. Fortunately this is unnecessary because the Limit Laws stated in Section 2.3 can be proved using Definition 2, and then the limits of complicated functions can be found rigorously from the Limit Laws without resorting to the definition directly."*

**This is the payoff of the Limit Laws from Section 2.3.** Once you prove the Sum Law, Product Law, Quotient Law, etc. from Definition 2 (rigorously, at cost of some work), you can compute limits of arbitrarily complex functions by combining known limits. You don't need to fight through an ε-δ proof for each new function.

**Stewart next demonstrates this by proving the Sum Law directly from Definition 2.**

---

## Proof of the Sum Law (Law 1 from Section 2.3)

> **Statement of Sum Law.** If $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$, then
> $$\lim_{x \to a} [f(x) + g(x)] = L + M$$

### The proof

Let $\varepsilon > 0$ be given. We must find $\delta > 0$ such that

$$0 < |x - a| < \delta \implies |f(x) + g(x) - (L + M)| < \varepsilon$$

**Step 1 — Apply the Triangle Inequality.** Rewrite the target expression:

$$|f(x) + g(x) - (L + M)| = |(f(x) - L) + (g(x) - M)|$$

By the Triangle Inequality ($|a + b| \leq |a| + |b|$, see Appendix A):

$$\tag{5} |f(x) + g(x) - (L + M)| \leq |f(x) - L| + |g(x) - M|$$

**Step 2 — Make each term less than $\varepsilon/2$.** We'll show $|f(x) - L| + |g(x) - M| < \varepsilon$ by making each term less than $\varepsilon/2$.

Since $\varepsilon/2 > 0$ and $\lim_{x \to a} f(x) = L$, by Definition 2 there exists a number $\delta_1 > 0$ such that

$$0 < |x - a| < \delta_1 \implies |f(x) - L| < \frac{\varepsilon}{2}$$

Similarly, since $\lim_{x \to a} g(x) = M$, there exists $\delta_2 > 0$ such that

$$0 < |x - a| < \delta_2 \implies |g(x) - M| < \frac{\varepsilon}{2}$$

**Step 3 — Combine both conditions.** Let $\delta = \min\{\delta_1, \delta_2\}$. If $0 < |x - a| < \delta$, then $|x - a| < \delta_1$ and $|x - a| < \delta_2$, so both bounds apply:

$$|f(x) - L| < \frac{\varepsilon}{2} \quad \text{and} \quad |g(x) - M| < \frac{\varepsilon}{2}$$

**Step 4 — Apply the Triangle Inequality from Step 1:**

$$|f(x) + g(x) - (L + M)| \leq |f(x) - L| + |g(x) - M| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$$

**Conclusion.** For any $\varepsilon > 0$, we found $\delta > 0$ such that $0 < |x - a| < \delta \implies |f(x) + g(x) - (L + M)| < \varepsilon$. By Definition 2:

$$\lim_{x \to a}[f(x) + g(x)] = L + M \qquad \blacksquare$$

### Why this proof is a pedagogical landmark

Three techniques from this proof are used **everywhere in analysis**:

1. **Triangle Inequality.** Bound a sum of absolute values. $|a + b| \leq |a| + |b|$ is the single most-used inequality in analysis.

2. **The "$\varepsilon/2$ trick."** Split your total error budget $\varepsilon$ evenly between two terms, each handled separately. Generalizes to splitting by $\varepsilon/n$ for $n$ terms, or $\varepsilon/2^k$ for infinite sums.

3. **Taking $\delta = \min\{\delta_1, \delta_2\}$.** When multiple conditions all need to be satisfied, take the strictest (smallest) constraint. Generalizes to $\min$ over any finite collection.

**The remaining Limit Laws (Difference, Product, Quotient) are proved by similar techniques in the exercises and in Appendix F.** The Product and Quotient proofs require more delicacy — the Product Law uses an "$\varepsilon/(|L| + |M| + 1)$ trick" to handle the factor cross-terms, and the Quotient Law needs a lower bound on $|g(x)|$ to avoid division-by-near-zero issues.

**For your MFE prep.** These three techniques — Triangle Inequality, $\varepsilon/2$ splitting, and $\delta = \min$ — are the bread and butter of every convergence proof in probability theory and functional analysis. You'll meet them countless times; internalize the pattern here.

---

## Infinite Limits Made Precise

The intuitive statement "$\lim_{x \to a} f(x) = \infty$" from Section 2.2 (Unit B) can also be made rigorous. The idea: instead of demanding $f(x)$ be within $\varepsilon$ of a finite limit, **we demand $f(x)$ exceed any given large number $M$**.

> **Definition 6 — Precise definition of $\lim = \infty$.** Let $f$ be a function defined on some open interval that contains the number $a$, except possibly at $a$ itself. Then
> $$\lim_{x \to a} f(x) = \infty$$
> means that for every positive number $M$ there is a positive number $\delta$ such that
> $$f(x) > M \quad \text{whenever} \quad 0 < |x - a| < \delta$$

**Contrast with Definition 2:**
- In Definition 2, $\varepsilon$ represents a small positive tolerance (how close to $L$); $f(x)$ must be within $\varepsilon$ of $L$.
- In Definition 6, $M$ represents a large positive threshold; $f(x)$ must **exceed** $M$.

**The role of the game is the same.** The challenger hands you a positive $M$ (as large as they want); you respond with a $\delta > 0$ such that $0 < |x - a| < \delta$ forces $f(x) > M$. Win every challenge and the limit is $+\infty$.

> **Figure 10 — Visualizing Definition 6.** The graph of $f$ with a horizontal line $y = M$ drawn high up, and a vertical strip $(a - \delta, a + \delta)$ around the limit point. **The conceptual content: within this strip, the graph of $f$ stays entirely above the line $y = M$.** As the challenger raises $M$ (moving the horizontal line up), the responder must tighten $\delta$ (narrowing the strip).

```plot
{
  "title": "Figure 10 — lim_{x→a} f(x) = ∞: above every line y = M",
  "width": 520, "height": 340,
  "xRange": [-3, 3], "yRange": [-2, 12],
  "xStep": 1, "yStep": 2,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "1/(x*x)", "domain": [-3, -0.32], "color": "#b04a2f", "width": 2.2, "samples": 700},
    {"fn": "1/(x*x)", "domain": [0.32, 3],   "color": "#b04a2f", "width": 2.2, "samples": 700}
  ],
  "lines": [
    {"type": "horizontal", "y": 6,  "color": "#2867b2", "width": 1.5, "dash": "4 3"},
    {"type": "vertical",   "x":  0.4, "color": "#2867b2", "width": 1.5, "dash": "4 3"},
    {"type": "vertical",   "x": -0.4, "color": "#2867b2", "width": 1.5, "dash": "4 3"}
  ],
  "annotations": [
    {"x": 2.8, "y": 6.5, "text": "y = M", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 0.4, "y": -1.4,"text": "a + δ", "color": "#2867b2", "italic": false, "anchor": "middle"},
    {"x": -0.4,"y": -1.4,"text": "a − δ", "color": "#2867b2", "italic": false, "anchor": "middle"}
  ],
  "caption": "Inside the δ-strip, the whole curve sits above y = M. Pick any larger M and you'll need a thinner strip — but a strip always exists."
}
```

---

### Example 5 — Using Definition 6 to prove $\lim_{x \to 0}(1/x^2) = \infty$

Use Definition 6 to prove that $\displaystyle \lim_{x \to 0}\frac{1}{x^2} = \infty$.

***Solution.*** Let $M > 0$ be a given positive number. We want to find $\delta > 0$ such that

$$0 < |x| < \delta \implies \frac{1}{x^2} > M$$

**Manipulate the output inequality.** For $x \neq 0$:

$$\frac{1}{x^2} > M \iff x^2 < \frac{1}{M} \iff |x| < \frac{1}{\sqrt{M}}$$

**Choose $\delta = 1/\sqrt{M}$.**

**Verification.** If $0 < |x| < \delta = 1/\sqrt{M}$, then $x^2 < 1/M$, so $1/x^2 > M$.

By Definition 6:

$$\lim_{x \to 0}\frac{1}{x^2} = \infty \qquad \blacksquare$$

**Note the inverse-scaling pattern.** As $M$ grows (we demand $1/x^2$ be larger and larger), $\delta = 1/\sqrt{M}$ shrinks. Specifically:
- $M = 100 \Rightarrow \delta = 0.1$ (need $|x| < 0.1$ to get $1/x^2 > 100$)
- $M = 10{,}000 \Rightarrow \delta = 0.01$
- $M = 10^6 \Rightarrow \delta = 0.001$

**The shape of the dependence** is $\delta \sim 1/\sqrt{M}$ — sublinear in the challenge. Different infinite-limit problems give different shapes. For $1/x$ (one-sided), it's $\delta = 1/M$; for $1/x^4$, it's $\delta = M^{-1/4}$. **The exponent in the response tells you how fast the function explodes.**

---

## Negative Infinite Limit — Definition 7

The analogous definition for "$\lim = -\infty$":

> **Definition 7 — Precise definition of $\lim = -\infty$.** Let $f$ be a function defined on some open interval that contains the number $a$, except possibly at $a$ itself. Then
> $$\lim_{x \to a} f(x) = -\infty$$
> means that for every negative number $N$ there is a positive number $\delta$ such that
> $$f(x) < N \quad \text{whenever} \quad 0 < |x - a| < \delta$$

**The challenger hands you a very negative $N$ (say, $N = -10{,}000$); you respond with $\delta > 0$ such that $f(x)$ is forced below $N$.** The definition is the mirror image of Definition 6: large-positive $M$ becomes large-negative $N$, and "exceeds $M$" becomes "falls below $N$."

> **Figure 11 — Visualizing Definition 7.** A horizontal line $y = N$ drawn very low on the graph, with a vertical strip $(a - \delta, a + \delta)$ around the limit point. **The conceptual content: within this strip, the graph of $f$ stays entirely below the line $y = N$.** The picture is the vertical-flip of Figure 10.

```plot
{
  "title": "Figure 11 — lim_{x→a} f(x) = −∞: below every line y = N",
  "width": 520, "height": 340,
  "xRange": [-3, 3], "yRange": [-12, 2],
  "xStep": 1, "yStep": 2,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "-1/(x*x)", "domain": [-3, -0.32], "color": "#b04a2f", "width": 2.2, "samples": 700},
    {"fn": "-1/(x*x)", "domain": [0.32, 3],   "color": "#b04a2f", "width": 2.2, "samples": 700}
  ],
  "lines": [
    {"type": "horizontal", "y": -6,  "color": "#2867b2", "width": 1.5, "dash": "4 3"},
    {"type": "vertical",   "x":  0.4, "color": "#2867b2", "width": 1.5, "dash": "4 3"},
    {"type": "vertical",   "x": -0.4, "color": "#2867b2", "width": 1.5, "dash": "4 3"}
  ],
  "annotations": [
    {"x": 2.8, "y": -5.5, "text": "y = N", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 0.4, "y": 1.3,  "text": "a + δ", "color": "#2867b2", "italic": false, "anchor": "middle"},
    {"x": -0.4,"y": 1.3,  "text": "a − δ", "color": "#2867b2", "italic": false, "anchor": "middle"}
  ],
  "caption": "Mirror image of Figure 10. For any N < 0 (however far below the axis), some δ > 0 forces the entire δ-strip of the curve below y = N."
}
```

---

## One-sided infinite limits (analogous definitions — for reference)

The four one-sided infinite definitions (left/right × up/down) are straightforward analogs of Definitions 6 and 7 with the $0 < |x - a| < \delta$ replaced by either $a - \delta < x < a$ (left) or $a < x < a + \delta$ (right). Stewart doesn't write them out explicitly in the text, but they follow the same template:

| Type | Precise statement |
|:---|:---|
| $\displaystyle \lim_{x \to a^-} f(x) = \infty$ | $\forall M > 0,\ \exists \delta > 0:\ a - \delta < x < a \implies f(x) > M$ |
| $\displaystyle \lim_{x \to a^+} f(x) = \infty$ | $\forall M > 0,\ \exists \delta > 0:\ a < x < a + \delta \implies f(x) > M$ |
| $\displaystyle \lim_{x \to a^-} f(x) = -\infty$ | $\forall N < 0,\ \exists \delta > 0:\ a - \delta < x < a \implies f(x) < N$ |
| $\displaystyle \lim_{x \to a^+} f(x) = -\infty$ | $\forall N < 0,\ \exists \delta > 0:\ a < x < a + \delta \implies f(x) < N$ |

**All six infinite-limit flavors (two two-sided + four one-sided) follow the same structural template:** challenger presents a threshold, responder presents an input constraint, and the definition asserts the challenge/response game is always winnable.

---

## The unified framework — what we've built

Section 2.4 in a nutshell:

| Limit statement | Quantifier setup | Challenger's parameter | Responder's parameter |
|:---|:---|:---:|:---:|
| $\lim_{x \to a} f(x) = L$ (finite) | $\forall \varepsilon > 0, \exists \delta > 0:\ 0 < \|x - a\| < \delta \Rightarrow \|f(x) - L\| < \varepsilon$ | $\varepsilon$ (small) | $\delta$ |
| $\lim_{x \to a} f(x) = \infty$ | $\forall M > 0, \exists \delta > 0:\ 0 < \|x - a\| < \delta \Rightarrow f(x) > M$ | $M$ (large) | $\delta$ |
| $\lim_{x \to a} f(x) = -\infty$ | $\forall N < 0, \exists \delta > 0:\ 0 < \|x - a\| < \delta \Rightarrow f(x) < N$ | $N$ (very negative) | $\delta$ |

**All three share the challenge-response grammar** from Unit 1. The challenger's parameter differs (small tolerance, large threshold, or very negative threshold), but the responder's job is always: find a $\delta$ that forces the conclusion.

**Looking ahead to Section 2.5 (Continuity) and Section 2.6 (Limits at Infinity):**
- **Continuity at $a$** is defined to mean $\lim_{x \to a} f(x) = f(a)$ — which is a special case of Definition 2.
- **Limits at infinity** ($\lim_{x \to \infty}$) have a similar ε-setup: for every $\varepsilon > 0$, there is an $N > 0$ such that $x > N \Rightarrow |f(x) - L| < \varepsilon$. **The challenger's parameter is still $\varepsilon$; the responder's parameter becomes $N$ (a threshold on $x$) instead of $\delta$ (a distance from $a$).**

**By the end of Chapter 2, every limit-type statement will be written in this quantifier-response form.** Learning it fluently here pays off immediately in 2.5 and 2.6, and permanently in all real analysis to come.

---

*End of Unit 2 of Section 2.4. Section 2.4's exposition is complete. Unit 3 is Exercises 1–43.*
