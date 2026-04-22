# Section 2.6 — Limits at Infinity (Part B): Precise ε-N Definitions + Exercises

*Covers pp. 138–143 of the book (PDF pp. 166–171). The rigorous formalization of $\lim_{x \to \infty}f(x) = L$ (Definition 7) parallel to the ε-δ work of Section 2.4 — but now with a threshold $N$ on the input instead of a distance $\delta$ from a point. Then the infinite-limit-at-infinity definition (Definition 9) and all 71 exercises.*

---

## Precise Definitions

Section 2.6 Part A used intuitive language ("$x$ sufficiently large"). Now we make it rigorous — following the same ε-based blueprint from Section 2.4, but with the input-side parameter changed to suit the new context.

---

### Definition 7 — Precise Definition of $\lim_{x \to \infty}f(x) = L$

> **Definition 7.** Let $f$ be a function defined on some interval $(a, \infty)$. Then
> $$\lim_{x \to \infty}f(x) = L$$
> means that for every $\varepsilon > 0$ there is a corresponding number $N$ such that
> $$|f(x) - L| < \varepsilon \quad \text{whenever} \quad x > N$$

**Contrast with Definition 2 of Section 2.4:**

| Section 2.4 Definition 2 | Section 2.6 Definition 7 |
|:---|:---|
| $\lim_{x \to a}f(x) = L$ (finite-point limit) | $\lim_{x \to \infty}f(x) = L$ (limit at infinity) |
| Challenger: $\varepsilon > 0$ | Challenger: $\varepsilon > 0$ (same) |
| Responder: $\delta > 0$ (distance from $a$) | Responder: $N$ (threshold on $x$) |
| Condition: $0 < \|x - a\| < \delta$ | Condition: $x > N$ |

**The challenge-response grammar is identical.** Only the input-side control parameter changes. Instead of "$x$ is within $\delta$ of $a$," the responder's constraint is "$x$ is past the threshold $N$." $\varepsilon$ still lives on the output side.

### Geometric interpretation

> **Figure 14 — The ε-N game visualized.** Horizontal band at heights $L - \varepsilon$ to $L + \varepsilon$ — the output tolerance. Beyond a vertical threshold at $x = N$, the graph of $f$ stays entirely within this band. **Conceptually:** for any output tolerance $\varepsilon$, we find a far-enough-right threshold $N$ such that the curve has "entered" the band and stays there.

```plot
{
  "title": "Figure 14 — the ε-N game: past x = N the curve stays inside the ε-band",
  "width": 560, "height": 320,
  "xRange": [0, 12], "yRange": [0, 4],
  "xStep": 2, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "2 + 1.5/(x + 0.5)", "domain": [0.05, 12], "color": "#b04a2f", "width": 2.2, "samples": 400}
  ],
  "lines": [
    {"type": "horizontal", "y": 2.4, "color": "#2867b2", "width": 1.4, "dash": "4 3"},
    {"type": "horizontal", "y": 1.6, "color": "#2867b2", "width": 1.4, "dash": "4 3"},
    {"type": "vertical",   "x": 4,   "color": "#2867b2", "width": 1.4, "dash": "4 3"}
  ],
  "annotations": [
    {"x": 11.5, "y": 2.55, "text": "L + ε", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 11.5, "y": 1.75, "text": "L − ε", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 4,    "y": 0.2,  "text": "N",     "color": "#2867b2", "italic": false, "anchor": "middle"}
  ],
  "caption": "For every output tolerance ε, some threshold N exists past which the curve is trapped inside the ε-band forever."
}
```

> **Figure 15 — Smaller ε requires larger N.** A tighter horizontal band requires the curve to get closer to $L$; this typically requires looking further to the right.

```plot
{
  "title": "Figure 15 — tighter ε forces larger N",
  "width": 560, "height": 320,
  "xRange": [0, 12], "yRange": [0, 4],
  "xStep": 2, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "2 + 1.5/(x + 0.5)", "domain": [0.05, 12], "color": "#b04a2f", "width": 2.2, "samples": 400}
  ],
  "lines": [
    {"type": "horizontal", "y": 2.15, "color": "#2867b2", "width": 1.4, "dash": "4 3"},
    {"type": "horizontal", "y": 1.85, "color": "#2867b2", "width": 1.4, "dash": "4 3"},
    {"type": "vertical",   "x": 9.5,  "color": "#2867b2", "width": 1.4, "dash": "4 3"}
  ],
  "annotations": [
    {"x": 11.5, "y": 2.3,  "text": "L + ε'", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 11.5, "y": 1.7,  "text": "L − ε'", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 9.5,  "y": 0.2,  "text": "N'",     "color": "#2867b2", "italic": false, "anchor": "middle"}
  ],
  "caption": "Narrower ε' ⇒ larger N' — have to look further to the right before the curve is close enough."
}
```

**Smaller $\varepsilon$ → larger $N$.** The inverse relationship between the tolerance demand and the threshold response is the same "cost of precision" theme as ε-δ.

---

### Definition 8 — Precise Definition of $\lim_{x \to -\infty}f(x) = L$

A precise version for the negative direction:

> **Definition 8.** Let $f$ be a function defined on some interval $(-\infty, a)$. Then
> $$\lim_{x \to -\infty}f(x) = L$$
> means that for every $\varepsilon > 0$ there is a corresponding number $N$ such that
> $$|f(x) - L| < \varepsilon \quad \text{whenever} \quad x < N$$

**Same grammar as Definition 7**, but the input-side constraint is "$x < N$" (far to the *left*) instead of "$x > N$" (far to the *right*).

> **Figure 16 — The ε-N game for $-\infty$.** Same ε-band, but now the constraint is $x < N$ (the threshold marks the right edge, and we look at behavior to its left).

```plot
{
  "title": "Figure 16 — ε-N for x → −∞: past N to the left, curve stays in the band",
  "width": 560, "height": 320,
  "xRange": [-12, 0], "yRange": [0, 4],
  "xStep": 2, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "2 + 1.5/(-x + 0.5)", "domain": [-12, -0.05], "color": "#b04a2f", "width": 2.2, "samples": 400}
  ],
  "lines": [
    {"type": "horizontal", "y": 2.4, "color": "#2867b2", "width": 1.4, "dash": "4 3"},
    {"type": "horizontal", "y": 1.6, "color": "#2867b2", "width": 1.4, "dash": "4 3"},
    {"type": "vertical",   "x": -4,  "color": "#2867b2", "width": 1.4, "dash": "4 3"}
  ],
  "annotations": [
    {"x": -0.5, "y": 2.55, "text": "L + ε", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": -0.5, "y": 1.75, "text": "L − ε", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": -4,   "y": 0.2,  "text": "N",     "color": "#2867b2", "italic": false, "anchor": "middle"}
  ],
  "caption": "Same idea as Figure 14, but the responder's threshold is on the left — we require x < N instead of x > N."
}
```

---

### Example 12 — Use a graph to find $N$ for given $\varepsilon$

For the rational function from Example 3, we calculated $\lim_{x \to \infty}\dfrac{3x^2 - x - 2}{5x^2 + 4x + 1} = \dfrac{3}{5}$. Use a graph to find a value of $N$ corresponding to $\varepsilon = 0.1$ in Definition 7.

***Solution.*** Rewrite the target inequality in the Definition 7 form: "$|f(x) - 3/5| < 0.1$" becomes

$$0.5 < \frac{3x^2 - x - 2}{5x^2 + 4x + 1} < 0.7$$

**Graphical procedure.**
1. Graph the curve $y = (3x^2 - x - 2)/(5x^2 + 4x + 1)$ and the two horizontal lines $y = 0.5$ and $y = 0.7$.
2. Find the last $x$-value where the curve crosses $y = 0.5$ (entering the band from below).

Using the cursor: the curve crosses $y = 0.5$ at $x \approx 6.7$. **For $x > 6.7$**, the curve stays between 0.5 and 0.7.

**Rounding up to be safe**, take $N = 7$. Then:

$$\left|\frac{3x^2 - x - 2}{5x^2 + 4x + 1} - 0.6\right| < 0.1 \quad \text{whenever} \quad x > 7$$

In other words, for $\varepsilon = 0.1$ we can choose $N = 7$ (or any larger number) in Definition 7.

> **Figure 17 — The graphical verification.** Horizontal lines at $y = 0.5$ and $y = 0.7$; the curve enters between them around $x = 6.7$ and stays inside.

```plot
{
  "title": "Figure 17 — (3x² − x − 2)/(5x² + 4x + 1) enters the ε-band near x = 6.7",
  "width": 540, "height": 320,
  "xRange": [0, 15], "yRange": [-1.5, 1.5],
  "xStep": 2, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "(3*x*x - x - 2)/(5*x*x + 4*x + 1)", "domain": [0, 15], "color": "#b04a2f", "width": 2.2, "samples": 500}
  ],
  "lines": [
    {"type": "horizontal", "y": 0.7, "color": "#2867b2", "width": 1.4, "dash": "4 3"},
    {"type": "horizontal", "y": 0.5, "color": "#2867b2", "width": 1.4, "dash": "4 3"},
    {"type": "vertical",   "x": 7,   "color": "#2867b2", "width": 1.4, "dash": "4 3"}
  ],
  "annotations": [
    {"x": 14.5, "y": 0.85, "text": "y = 0.7", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 14.5, "y": 0.35, "text": "y = 0.5", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 7,    "y": -1.3, "text": "N = 7",   "color": "#2867b2", "italic": false, "anchor": "middle"}
  ],
  "caption": "For ε = 0.1 about 3/5, N = 7 works — past x = 7 the curve is locked between 0.5 and 0.7."
}
```

---

### Example 13 — Prove $\lim_{x \to \infty}\dfrac{1}{x} = 0$ using Definition 7

Given $\varepsilon > 0$, we want to find $N$ such that

$$\left|\frac{1}{x} - 0\right| < \varepsilon \quad \text{whenever} \quad x > N$$

**Stage 1 — Find $N$.** In computing the limit, we may assume that $x > 0$. Then $1/x < \varepsilon \iff x > 1/\varepsilon$.

**Choose $N = 1/\varepsilon$.**

**Stage 2 — Verify.** If $x > N = 1/\varepsilon$, then

$$\left|\frac{1}{x} - 0\right| = \frac{1}{x} < \varepsilon$$

By Definition 7, $\lim_{x \to \infty}(1/x) = 0$. $\blacksquare$

> **Figure 18 — Three values of $\varepsilon$ and the corresponding $N$.** For $\varepsilon = 1$, $N = 1$. For $\varepsilon = 0.2$, $N = 5$. For $\varepsilon = 0.1$, $N = 10$. **Tightening the output tolerance by 10× requires moving the threshold 10× further right** — the linear relationship $N = 1/\varepsilon$.

```plot
{
  "title": "Figure 18 — y = 1/x: three ε's pair with three N's (N = 1/ε)",
  "width": 560, "height": 320,
  "xRange": [0, 14], "yRange": [-0.3, 1.3],
  "xStep": 2, "yStep": 0.25,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "1/x", "domain": [0.8, 14], "color": "#b04a2f", "width": 2.2, "samples": 400}
  ],
  "lines": [
    {"type": "horizontal", "y": 1,   "color": "#b04a2f", "dash": "2 2"},
    {"type": "horizontal", "y": 0.2, "color": "#2867b2", "dash": "2 2"},
    {"type": "horizontal", "y": 0.1, "color": "#2867b2", "dash": "2 2"},
    {"type": "vertical",   "x": 1,   "color": "#b04a2f", "dash": "2 2"},
    {"type": "vertical",   "x": 5,   "color": "#2867b2", "dash": "2 2"},
    {"type": "vertical",   "x": 10,  "color": "#2867b2", "dash": "2 2"}
  ],
  "annotations": [
    {"x": 13.5, "y": 1.1,  "text": "ε = 1",    "color": "#b04a2f", "italic": false, "anchor": "end"},
    {"x": 13.5, "y": 0.26, "text": "ε = 0.2",  "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 13.5, "y": 0.14, "text": "ε = 0.1",  "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 1,    "y": -0.2, "text": "N = 1",    "color": "#b04a2f", "italic": false, "anchor": "middle"},
    {"x": 5,    "y": -0.2, "text": "N = 5",    "color": "#2867b2", "italic": false, "anchor": "middle"},
    {"x": 10,   "y": -0.2, "text": "N = 10",   "color": "#2867b2", "italic": false, "anchor": "middle"}
  ],
  "caption": "Shrink ε by 10× and N grows by 10×. The dependence N = 1/ε is the exact response-scaling summary of the tail rate."
}
```

**The "response scaling" diagnoses the tail behavior.** $N = 1/\varepsilon$ means $1/x$ approaches 0 at rate exactly $1/x$. For $1/x^2$, we'd need $N = 1/\sqrt{\varepsilon}$ — faster-decaying tail. **Response scaling is a quantitative summary of asymptotic rate.**

---

## Definition 9 — Infinite Limit at Infinity

The last piece: what "$\lim_{x\to\infty}f = \infty$" precisely means. The output-side parameter is again $M$ (a large threshold), and the input-side parameter is still $N$:

> **Definition 9.** Let $f$ be a function defined on some interval $(a, \infty)$. Then
> $$\lim_{x \to \infty}f(x) = \infty$$
> means that for every positive number $M$ there is a corresponding positive number $N$ such that
> $$f(x) > M \quad \text{whenever} \quad x > N$$

**Reading.** The challenger demands $f(x)$ exceed $M$ (a large threshold); you respond with $N$ such that $x > N$ forces $f(x) > M$.

> **Figure 19 — The $M$-$N$ game.** Horizontal line $y = M$ drawn high up; vertical line $x = N$. For $x$ to the right of $N$, the graph of $f$ stays above $y = M$.

```plot
{
  "title": "Figure 19 — lim_{x→∞} f = ∞: above M for all x past N",
  "width": 540, "height": 320,
  "xRange": [0, 10], "yRange": [0, 25],
  "xStep": 1, "yStep": 5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "0.25*x*x", "domain": [0, 10], "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "horizontal", "y": 12, "color": "#2867b2", "width": 1.4, "dash": "4 3"},
    {"type": "vertical",   "x":  7, "color": "#2867b2", "width": 1.4, "dash": "4 3"}
  ],
  "annotations": [
    {"x": 9.5, "y": 13,  "text": "y = M", "color": "#2867b2", "italic": false, "anchor": "end"},
    {"x": 7,   "y": 1,   "text": "N",     "color": "#2867b2", "italic": false, "anchor": "middle"}
  ],
  "caption": "Past x = N, the curve lives entirely above y = M. Raise M and you'll need a larger N."
}
```

Similar definitions apply when $\infty$ is replaced by $-\infty$ — the patient can deduce them by symmetry. (See Exercise 70.)

---

## Summary Table — All Limit Definitions

After Sections 2.4 and 2.6, we have the complete taxonomy of limit types:

| Limit statement | Challenger | Responder | Condition |
|:---|:---:|:---:|:---|
| $\displaystyle \lim_{x \to a}f(x) = L$ | $\varepsilon > 0$ | $\delta > 0$ | $0 < \|x - a\| < \delta \Rightarrow \|f - L\| < \varepsilon$ |
| $\displaystyle \lim_{x \to a}f(x) = \pm\infty$ | $M$ or $N$ (threshold) | $\delta > 0$ | $0 < \|x - a\| < \delta \Rightarrow f \gtrless M$ |
| $\displaystyle \lim_{x \to \infty}f(x) = L$ | $\varepsilon > 0$ | $N$ (input threshold) | $x > N \Rightarrow \|f - L\| < \varepsilon$ |
| $\displaystyle \lim_{x \to -\infty}f(x) = L$ | $\varepsilon > 0$ | $N$ (input threshold) | $x < N \Rightarrow \|f - L\| < \varepsilon$ |
| $\displaystyle \lim_{x \to \infty}f(x) = \infty$ | $M > 0$ | $N > 0$ | $x > N \Rightarrow f > M$ |

**Every limit statement has the same logical structure:** a universal quantifier on the challenger's parameter, an existential on the responder's, and a condition relating input constraints to output guarantees. **Master this grammar and every convergence statement in analysis, probability, and numerical methods becomes legible.**

---

## Exercises

*Legend: `[HINT]` = cyan-boxed; `[GRAPH]` = graphing tool.*

---

### Concept questions (Exercises 1–2)

**1.** Explain in your own words the meaning of each of the following.
- (a) $\displaystyle \lim_{x \to \infty}f(x) = 5$
- (b) $\displaystyle \lim_{x \to -\infty}f(x) = 3$

**2.** `[HINT]`
- (a) Can the graph of $y = f(x)$ intersect a vertical asymptote? Can it intersect a horizontal asymptote? Illustrate by sketching graphs.
- (b) How many horizontal asymptotes can the graph of $y = f(x)$ have? Sketch graphs to illustrate the possibilities.

---

### Graph-reading (Exercises 3–4)

**3.** For the function $f$ whose graph is given, state the following.
- (a) $\displaystyle \lim_{x \to 2}f(x)$
- (b) $\displaystyle \lim_{x \to -1^-}f(x)$
- (c) $\displaystyle \lim_{x \to -1^+}f(x)$
- (d) $\displaystyle \lim_{x \to \infty}f(x)$
- (e) $\displaystyle \lim_{x \to -\infty}f(x)$
- (f) The equations of the asymptotes

**4.** For the function $g$ whose graph is given, state the following.
- (a) $\displaystyle \lim_{x \to \infty}g(x)$
- (b) $\displaystyle \lim_{x \to -\infty}g(x)$
- (c) $\displaystyle \lim_{x \to 3}g(x)$
- (d) $\displaystyle \lim_{x \to 0}g(x)$
- (e) $\displaystyle \lim_{x \to -2^+}g(x)$
- (f) The equations of the asymptotes

---

### Sketch a function with specified behavior (Exercises 5–10)

**5–10.** Sketch the graph of an example of a function $f$ that satisfies all of the given conditions.

**5.** $f(0) = 0$, $\ f(1) = 1$, $\ \displaystyle \lim_{x \to \infty}f(x) = 0$, $\ f$ is odd

**6.** $\displaystyle \lim_{x \to 0^+}f(x) = \infty$, $\ \displaystyle \lim_{x \to 0^-}f(x) = -\infty$, $\ \displaystyle \lim_{x \to \infty}f(x) = 1$, $\ \displaystyle \lim_{x \to -\infty}f(x) = 1$

**7.** `[HINT]` $\displaystyle \lim_{x \to 2}f(x) = -\infty$, $\ \displaystyle \lim_{x \to \infty}f(x) = \infty$, $\ \displaystyle \lim_{x \to -\infty}f(x) = 0$, $\ \displaystyle \lim_{x \to 0^+}f(x) = \infty$, $\ \displaystyle \lim_{x \to 0^-}f(x) = -\infty$

**8.** $\displaystyle \lim_{x \to -2}f(x) = \infty$, $\ \displaystyle \lim_{x \to \infty}f(x) = 3$, $\ \displaystyle \lim_{x \to -\infty}f(x) = -3$

**9.** $f(0) = 3$, $\ \displaystyle \lim_{x \to 0^-}f(x) = 4$, $\ \displaystyle \lim_{x \to 0^+}f(x) = 2$, $\ \displaystyle \lim_{x \to -\infty}f(x) = -\infty$, $\ \displaystyle \lim_{x \to 4^-}f(x) = -\infty$, $\ \displaystyle \lim_{x \to 4^+}f(x) = \infty$, $\ \displaystyle \lim_{x \to \infty}f(x) = 3$

**10.** $\displaystyle \lim_{x \to 3}f(x) = -\infty$, $\ \displaystyle \lim_{x \to \infty}f(x) = 2$, $\ f(0) = 0$, $\ f$ is even

---

### Guess-then-confirm limit (Exercises 11–12)

**11.** `[GRAPH]` Guess the value of the limit
$$\lim_{x \to \infty}\frac{x^2}{2^x}$$
by evaluating the function $f(x) = x^2/2^x$ for $x = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 50,$ and 100. Then use a graph of $f$ to support your guess.

**12.** `[GRAPH]`
- (a) Use a graph of $f(x) = (1 - 2/x)^x$ to estimate the value of $\lim_{x \to \infty}f(x)$ correct to two decimal places.
- (b) Use a table of values of $f(x)$ to estimate the limit to four decimal places.

---

### Evaluate with justification (Exercises 13–14)

**13–14.** Evaluate the limit and justify each step by indicating the appropriate properties of limits.

**13.** $\displaystyle \lim_{x \to \infty}\frac{3x^2 - x + 4}{2x^2 + 5x - 8}$

**14.** $\displaystyle \lim_{x \to \infty}\sqrt{\frac{12x^3 - 5x + 2}{1 + 4x^2 + 3x^3}}$

---

### Find the limit (Exercises 15–36)

**15–36.** Find the limit.

**15.** $\displaystyle \lim_{x \to \infty}\frac{1}{2x + 3}$

**16.** $\displaystyle \lim_{x \to \infty}\frac{3x + 5}{x - 4}$

**17.** $\displaystyle \lim_{x \to -\infty}\frac{1 - x - x^2}{2x^2 - 7}$

**18.** $\displaystyle \lim_{y \to \infty}\frac{2 - 3y^2}{5y^2 + 4y}$

**19.** `[HINT]` $\displaystyle \lim_{x \to \infty}\frac{x^3 + 5x}{2x^3 - x^2 + 4}$

**20.** $\displaystyle \lim_{t \to -\infty}\frac{t^2 + 2}{t^3 + t^2 - 1}$

**21.** $\displaystyle \lim_{u \to \infty}\frac{4u^4 + 5}{(u^2 - 2)(2u^2 - 1)}$

**22.** $\displaystyle \lim_{x \to \infty}\frac{x + 2}{\sqrt{9x^2 + 1}}$

**23.** $\displaystyle \lim_{x \to \infty}\frac{\sqrt{9x^6 - x}}{x^3 + 1}$

**24.** $\displaystyle \lim_{x \to -\infty}\frac{\sqrt{9x^6 - x}}{x^3 + 1}$

**25.** `[HINT]` $\displaystyle \lim_{x \to \infty}\!\left(\sqrt{9x^2 + x} - 3x\right)$

**26.** $\displaystyle \lim_{x \to -\infty}\!\left(x + \sqrt{x^2 + 2x}\right)$

**27.** $\displaystyle \lim_{x \to \infty}\!\left(\sqrt{x^2 + ax} - \sqrt{x^2 + bx}\right)$

**28.** $\displaystyle \lim_{x \to \infty}\cos x$

**29.** $\displaystyle \lim_{x \to \infty}\frac{x + x^3 + x^5}{1 - x^2 + x^4}$

**30.** $\displaystyle \lim_{x \to \infty}\sqrt{x^2 + 1}$

**31.** $\displaystyle \lim_{x \to -\infty}(x^4 + x^5)$

**32.** $\displaystyle \lim_{x \to \infty}\frac{x^3 - 2x + 3}{5 - 2x^2}$

**33.** $\displaystyle \lim_{x \to \infty}\frac{1 - e^x}{1 + 2e^x}$

**34.** $\displaystyle \lim_{x \to \infty}\tan^{-1}(x^2 - x^4)$

**35.** $\displaystyle \lim_{x \to \infty}(e^{-2x}\cos x)$

**36.** $\displaystyle \lim_{x \to (\pi/2)^+}e^{\tan x}$

---

### Graphing + proof (Exercises 37–38)

**37.** `[GRAPH]`
- (a) Estimate the value of $\displaystyle \lim_{x \to -\infty}\!\left(\sqrt{x^2 + x + 1} + x\right)$ by graphing the function $f(x) = \sqrt{x^2 + x + 1} + x$.
- (b) Use a table of values of $f(x)$ to guess the value of the limit.
- (c) Prove that your guess is correct.

**38.** `[GRAPH]`
- (a) Use a graph of $f(x) = \sqrt{3x^2 + 8x + 6} - \sqrt{3x^2 + 3x + 1}$ to estimate the value of $\lim_{x \to \infty}f(x)$ to one decimal place.
- (b) Use a table of values of $f(x)$ to estimate the limit to four decimal places.
- (c) Find the exact value of the limit.

---

### Find all asymptotes (Exercises 39–44)

**39–44.** Find the horizontal and vertical asymptotes of each curve. If you have a graphing device, check your work by graphing the curve and estimating the asymptotes.

**39.** $y = \dfrac{2x + 1}{x - 2}$

**40.** $y = \dfrac{x^2 + 1}{2x^2 - 3x - 2}$

**41.** `[HINT]` $y = \dfrac{2x^2 + x - 1}{x^2 + x - 2}$

**42.** $y = \dfrac{1 + x^4}{x^2 - x^4}$

**43.** $y = \dfrac{x^3 - x}{x^2 - 6x + 5}$

**44.** $y = \dfrac{2 e^x}{e^x - 5}$

---

### Estimate asymptote + limit calculation (Exercises 45–46)

**45.** `[GRAPH]` Estimate the horizontal asymptote of the function
$$f(x) = \frac{3x^3 + 500x^2}{x^3 + 500x^2 + 100x + 2000}$$
by graphing $f$ for $-10 \leq x \leq 10$. Then calculate the equation of the asymptote by evaluating the limit. How do you explain the discrepancy?

**46.** `[GRAPH]`
- (a) Graph the function $f(x) = \dfrac{\sqrt{2x^2 + 1}}{3x - 5}$. How many horizontal and vertical asymptotes do you observe? Use the graph to estimate the values of the limits $\lim_{x \to \infty}f(x)$ and $\lim_{x \to -\infty}f(x)$.
- (b) By calculating values of $f(x)$, give numerical estimates of the limits in part (a).
- (c) Calculate the exact values of the limits in part (a). Did you get the same value or different values for these two limits? [In view of your answer to part (a), you might have to check your calculation for the second limit.]

---

### Construct a formula with specified conditions (Exercises 47–48)

**47.** Find a formula for a function $f$ that satisfies the following conditions:
$$\lim_{x \to \pm\infty}f(x) = 0, \ \lim_{x \to 0}f(x) = -\infty, \ f(2) = 0, \ \lim_{x \to 3^-}f(x) = \infty, \ \lim_{x \to 3^+}f(x) = -\infty$$

**48.** Find a formula for a function that has vertical asymptotes $x = 1$ and $x = 3$ and horizontal asymptote $y = 1$.

---

### Rough sketch from limits + intercepts (Exercises 49–52)

**49–52.** Find the limits as $x \to \infty$ and as $x \to -\infty$. Use this information, together with intercepts, to give a rough sketch of the graph as in Example 11.

**49.** $y = x^4 - x^6$

**50.** $y = x^3(x + 2)^2(x - 1)$

**51.** $y = (3 - x)(1 + x)^2(1 - x)^4$

**52.** $y = x^2(x^2 - 1)^2(x + 2)$

---

### Squeeze Theorem and end behavior (Exercises 53–54)

**53.**
- (a) Use the Squeeze Theorem to evaluate $\displaystyle \lim_{x \to \infty}\frac{\sin x}{x}$.
- (b) `[GRAPH]` Graph $f(x) = (\sin x)/x$. How many times does the graph cross the asymptote?

**54.** `[GRAPH]` By the *end behavior* of a function we mean the behavior of its values as $x \to \infty$ and as $x \to -\infty$.
- (a) Describe and compare the end behavior of the functions
$$P(x) = 3x^5 - 5x^3 + 2x \qquad Q(x) = 3x^5$$
by graphing both functions in the viewing rectangles $[-2, 2] \times [-2, 2]$ and $[-10, 10] \times [-10{,}000, 10{,}000]$.
- (b) Two functions are said to have the **same end behavior** if their ratio approaches 1 as $x \to \infty$. Show that $P$ and $Q$ have the same end behavior.

---

### Polynomial limit by degree (Exercise 55)

**55.** `[HINT]` Let $P$ and $Q$ be polynomials. Find
$$\lim_{x \to \infty}\frac{P(x)}{Q(x)}$$
if the degree of $P$ is (a) less than the degree of $Q$ and (b) greater than the degree of $Q$.

---

### $y = x^n$ sketch taxonomy (Exercise 56)

**56.** Make a rough sketch of the curve $y = x^n$ ($n$ an integer) for the following five cases:
- (i) $n = 0$
- (ii) $n > 0$, $n$ odd
- (iii) $n > 0$, $n$ even
- (iv) $n < 0$, $n$ odd
- (v) $n < 0$, $n$ even

Then use these sketches to find the following limits.
- (a) $\displaystyle \lim_{x \to 0^+}x^n$
- (b) $\displaystyle \lim_{x \to 0^-}x^n$
- (c) $\displaystyle \lim_{x \to \infty}x^n$
- (d) $\displaystyle \lim_{x \to -\infty}x^n$

---

### Squeeze with explicit bounds (Exercise 57)

**57.** `[HINT]` Find $\lim_{x \to \infty}f(x)$ if, for all $x > 1$,
$$\frac{10e^x - 21}{2e^x} < f(x) < \frac{5\sqrt{x}}{\sqrt{x - 1}}$$

---

### Salt concentration (Exercise 58)

**58.**
- (a) A tank contains 5000 L of pure water. Brine that contains 30 g of salt per liter of water is pumped into the tank at a rate of 25 L/min. Show that the concentration of salt after $t$ minutes (in grams per liter) is
$$C(t) = \frac{30 t}{200 + t}$$
- (b) What happens to the concentration as $t \to \infty$?

---

### Terminal velocity (Exercise 59)

**59.** In Chapter 9 we will be able to show, under certain assumptions, that the velocity $v(t)$ of a falling raindrop at time $t$ is
$$v(t) = v^*(1 - e^{-gt/v^*})$$
where $g$ is the acceleration due to gravity and $v^*$ is the **terminal velocity** of the raindrop.
- (a) Find $\lim_{t \to \infty}v(t)$.
- (b) `[GRAPH]` Graph $v(t)$ if $v^* = 1$ m/s and $g = 9.8$ m/s². How long does it take for the velocity of the raindrop to reach 99% of its terminal velocity?

---

### Exponential decay to tolerance (Exercise 60)

**60.** `[GRAPH]`
- (a) By graphing $y = e^{-x/10}$ and $y = 0.1$ on a common screen, discover how large you need to make $x$ so that $e^{-x/10} < 0.1$.
- (b) Can you solve part (a) without using a graphing device?

---

### ε-N for specific examples (Exercises 61–64)

**61.** `[GRAPH]` Use a graph to find a number $N$ such that
$$\text{if} \quad x > N \quad \text{then} \quad \left|\frac{3x^2 + 1}{2x^2 + x + 1} - 1.5\right| < 0.05$$

**62.** `[GRAPH]` For the limit
$$\lim_{x \to \infty}\frac{\sqrt{4x^2 + 1}}{x + 1} = 2$$
illustrate Definition 7 by finding values of $N$ that correspond to $\varepsilon = 0.5$ and $\varepsilon = 0.1$.

**63.** `[GRAPH]` For the limit
$$\lim_{x \to -\infty}\frac{\sqrt{4x^2 + 1}}{x + 1} = -2$$
illustrate Definition 8 by finding values of $N$ that correspond to $\varepsilon = 0.5$ and $\varepsilon = 0.1$.

**64.** `[GRAPH]` For the limit
$$\lim_{x \to \infty}\frac{2x + 1}{\sqrt{x + 1}} = \infty$$
illustrate Definition 9 by finding a value of $N$ that corresponds to $M = 100$.

---

### "How large" estimation (Exercises 65–66)

**65.** `[HINT]`
- (a) How large do we have to take $x$ so that $1/x^2 < 0.0001$?
- (b) Taking $r = 2$ in Theorem 5, we have the statement $\lim_{x \to \infty}\dfrac{1}{x^2} = 0$. Prove this directly using Definition 7.

**66.**
- (a) How large do we have to take $x$ so that $1/\sqrt{x} < 0.0001$?
- (b) Taking $r = 1/2$ in Theorem 5, we have the statement $\lim_{x \to \infty}\dfrac{1}{\sqrt{x}} = 0$. Prove this directly using Definition 7.

---

### Prove using Definition 8 or 9 (Exercises 67–69)

**67.** Use Definition 8 to prove that $\displaystyle \lim_{x \to -\infty}\frac{1}{x} = 0$.

**68.** Prove, using Definition 9, that $\displaystyle \lim_{x \to \infty}x^3 = \infty$.

**69.** Use Definition 9 to prove that $\displaystyle \lim_{x \to \infty}e^x = \infty$.

---

### Formulate and use definition (Exercise 70)

**70.** Formulate a precise definition of $\displaystyle \lim_{x \to -\infty}f(x) = -\infty$. Then use your definition to prove that
$$\lim_{x \to -\infty}(1 + x^3) = -\infty$$

---

### Substitution between $x \to \infty$ and $t \to 0^+$ (Exercise 71)

**71.** Prove that
$$\lim_{x \to \infty}f(x) = \lim_{t \to 0^+}f(1/t)$$
and
$$\lim_{x \to -\infty}f(x) = \lim_{t \to 0^-}f(1/t)$$
if these limits exist.

---

*This closes Section 2.6 Exercises.*

## Priority gradient

Section 2.6 exercises are a balanced mix of **computational practice** (limits at infinity) and **precise definition** work (ε-N proofs).

**Highest value — computational core:**

- **Exercises 13, 14, 19, 21, 29, 32** — rational-function limits at infinity. Cover the three degree cases (numerator < / = / > denominator). Pick 3–4.
- **Exercises 22, 23, 24** — radical-function limits. **23 vs. 24** is the key pair: same numerator, different signs at $\pm\infty$ because of $\sqrt{x^6} = |x|^3$. The sign trap from Example 4 re-appears. **Do both 23 and 24 to lock in the $\sqrt{x^2} = |x|$ pattern.**
- **Exercises 25, 26, 27** — the "$\infty - \infty$" conjugate trick. 27 is the general version: $\lim_{x\to\infty}(\sqrt{x^2 + ax} - \sqrt{x^2 + bx}) = (a - b)/2$. **Deeply worth doing** — this identity shows up in perturbation-theory arguments in physics and finance.
- **Exercises 33, 35** — $e^x$-based limits. 33 ($\lim (1-e^x)/(1+2e^x)$) at $\pm\infty$ — the logistic function in disguise! One-sided limits give $1$ and $-1/2$. Beautifully important.
- **Exercise 34** — $\lim \arctan(x^2 - x^4) = -\pi/2$ as $x \to \infty$. The inside goes to $-\infty$; $\arctan$ approaches its lower asymptote. Practice with composition.

**High value — asymptote practice:**

- **Exercises 39, 40, 43** — find horizontal and vertical asymptotes of rational functions. Pick 2.
- **Exercise 41** — similar; note the $2x^2 + x - 1 = (2x - 1)(x + 1)$ factoring matters for vertical asymptote analysis.
- **Exercise 49, 51** — polynomial sketching with intercepts and end behavior. Do 1.
- **Exercise 55** — the polynomial-over-polynomial degree rule made general. **Know this in your sleep** — it's the shortcut for every rational-function limit-at-infinity.

**Medium value:**

- **Exercises 1–10** — concept questions and sketch-from-conditions. Pick 1 concept Q and 1 sketch exercise.
- **Exercises 11, 12** — guess-and-confirm. Exercise 12 specifically asks about $(1 - 2/x)^x$ — which has limit $e^{-2}$. A beautiful compound-interest connection: this is the "continuously compounded interest at rate $-2$" formula, the same limit from Section 1.5 Unit 2 and Exercise 35 of Section 2.2. **A cultural landmark worth doing.**
- **Exercises 58, 59** — applied asymptotic limits. 58 (salt concentration) has limit 30 g/L — the inflow concentration, reached asymptotically. 59 (terminal velocity) $v \to v^*$ — the raindrop asymptotes to its terminal speed. **Both are canonical "asymptotic approach" patterns** used in every quant-finance application with mean-reversion, speed-of-equilibration, or half-life.
- **Exercises 61–64** — find $N$ graphically for given $\varepsilon$. Pick 1.
- **Exercise 65** — prove $\lim(1/x^2) = 0$ directly with Definition 7. Template for Exercise 66.

**Skim or skip:**

- **Exercises 15–18, 20, 30, 31, 36** — routine computation; pick 1–2.
- **Exercise 28** — $\lim \cos x$ at infinity. Doesn't exist (oscillation). Too trivial.
- **Exercises 44, 45, 46, 47, 48** — more asymptote / construction problems; pick 1.
- **Exercises 50, 52** — more polynomial sketching; pick 1.
- **Exercises 53, 54** — nice but not essential.
- **Exercises 56, 57** — $x^n$ taxonomy; the answers are obvious if you know the rules.
- **Exercises 60** — solve $e^{-x/10} < 0.1$ numerically; trivial analytically ($x > 10 \ln 10$).
- **Exercises 67–71** — ε-N proofs for various cases; pick 1.

**The "must-do" cluster for your trajectory:**

- **Exercise 25 or 27** — the conjugate trick.
- **Exercise 33** — logistic in disguise.
- **Exercise 55** — the degree-rule shortcut.
- **Exercise 59** — terminal velocity; asymptotic approach.
- **Exercise 12** — $(1 - 2/x)^x = e^{-2}$; compound-interest connection.

**Exercise 33 is deeply underrated.** $f(x) = (1 - e^x)/(1 + 2e^x)$ has two different horizontal asymptotes: $+1$ at $-\infty$ (numerator and denominator both → 1, so ratio → 1) and $-1/2$ at $+\infty$ (divide by $e^x$: $(e^{-x} - 1)/(e^{-x} + 2) \to -1/2$). **This function is structurally similar to the logistic / sigmoid: as you sweep $x$ from $-\infty$ to $+\infty$, it smoothly transitions between two steady-state values.** This is the mathematical shape of the binary-classification decision function in logistic regression, neural network activations, sentiment analysis scores, and countless other quantitative models. Internalize.

---

## Section 2.6 complete. Two files delivered:

- `13_section_2.6_limits_at_infinity.md`
- `14_section_2.6_precise_exercises.md`

**Next up: Section 2.7 — Derivatives and Rates of Change.** This is the payoff section — everything from Sections 2.1–2.6 was building toward the *formal* definition of the derivative. The tangent slope problem from Section 2.1 comes full circle, and we define $f'(a)$ as the limit of the difference quotient. All the numerical techniques become algebraic. **For your quant track, this is where derivatives-as-Greeks, duration-as-bond-derivative, and marginal-anything become fully rigorous.**

**Section 2.7 plan** (2 units):
1. Tangent problem revisited + definition of derivative + Examples 1–5
2. Rates of change + applications + Exercises
