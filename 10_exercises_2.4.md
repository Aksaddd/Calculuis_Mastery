# Section 2.4 — Exercises

*Covers pp. 117–118 of the book (PDF pp. 145–146). Full set: Exercises 1–44.*

*Legend: `[HINT]` = cyan-boxed; `[GRAPH]` = graphing tool; `[CAS]` = computer algebra system.*

---

## Find δ from a graph (Exercises 1–4)

**1.** Use the given graph of $f(x) = 1/x$ to find a number $\delta$ such that
$$\text{if} \quad |x - 2| < \delta \quad \text{then} \quad \left|\tfrac{1}{x} - 0.5\right| < 0.2$$

> **Graph provided.** The curve $y = 1/x$ near $x = 2$, with horizontal lines marking $y = 0.3$ and $y = 0.7$ (giving the $\pm 0.2$ tolerance band) and vertical lines at $x = 10/7$ and $x = 10/3$ (where the curve crosses the tolerance lines).

**2.** Use the given graph of $f$ to find a number $\delta$ such that
$$\text{if} \quad 0 < |x - 5| < \delta \quad \text{then} \quad |f(x) - 3| < 0.6$$

> **Graph provided.** An increasing curve passing through $(5, 3)$ with horizontal bands at $y = 2.4$ and $y = 3.6$ (the tolerance band) and a solid dot at approximately $(5, 3.6)$.

**3.** `[HINT]` Use the given graph of $f(x) = \sqrt{x}$ to find a number $\delta$ such that
$$\text{if} \quad |x - 4| < \delta \quad \text{then} \quad |\sqrt{x} - 2| < 0.4$$

> **Graph provided.** Square-root curve with horizontal bands at $y = 1.6$ and $y = 2.4$.

**4.** Use the given graph of $f(x) = x^2$ to find a number $\delta$ such that
$$\text{if} \quad |x - 1| < \delta \quad \text{then} \quad |x^2 - 1| < \tfrac{1}{2}$$

> **Graph provided.** The parabola $y = x^2$ near $x = 1$ with horizontal lines at $y = 0.5$ and $y = 1.5$.

---

## Graphing tool to find δ (Exercises 5–8)

**5.** `[GRAPH]` Use a graph to find a number $\delta$ such that
$$\text{if} \quad \left|x - \tfrac{\pi}{4}\right| < \delta \quad \text{then} \quad |\tan x - 1| < 0.2$$

**6.** `[GRAPH]` Use a graph to find a number $\delta$ such that
$$\text{if} \quad |x - 1| < \delta \quad \text{then} \quad \left|\frac{2x}{x^2 + 4} - 0.4\right| < 0.1$$

**7.** `[GRAPH]` For the limit
$$\lim_{x \to 1}(4 + x - 3x^3) = 2$$
illustrate Definition 2 by finding values of $\delta$ that correspond to $\varepsilon = 1$ and $\varepsilon = 0.1$.

**8.** `[GRAPH]` For the limit
$$\lim_{x \to 0}\frac{e^x - 1}{x} = 1$$
illustrate Definition 2 by finding values of $\delta$ that correspond to $\varepsilon = 0.5$ and $\varepsilon = 0.1$.

---

## Given $\lim_{x \to \pi/2}\tan^2 x = \infty$ (Exercise 9)

**9.** `[GRAPH]` Given that $\lim_{x \to \pi/2}\tan^2 x = \infty$, illustrate Definition 6 by finding values of $\delta$ that correspond to (a) $M = 1000$ and (b) $M = 10{,}000$.

---

## Use a graph to find δ (Exercise 10)

**10.** `[GRAPH]` Use a graph to find a number $\delta$ such that
$$\text{if} \quad 5 < x < 5 + \delta \quad \text{then} \quad \frac{x^2}{\sqrt{x - 5}} > 100$$

---

## Crystal-growth furnace (Exercise 11)

**11.** A machinist is required to manufacture a circular metal disk with area 1000 cm².
- (a) What radius produces such a disk?
- (b) If the machinist is allowed an error tolerance of $\pm 5$ cm² in the area of the disk, how close to the ideal radius in part (a) must the machinist control the radius?
- (c) In terms of the $\varepsilon, \delta$ definition of $\lim_{x \to a}f(x) = L$, what is $x$? What is $f(x)$? What is $a$? What is $L$? What value of $\varepsilon$ is given? What is the corresponding value of $\delta$?

**12.** `[GRAPH]` A crystal growth furnace is used in research to determine how best to manufacture crystals used in electronic components for the space shuttle. For proper growth of the crystal, the temperature must be controlled accurately by adjusting the input power. Suppose the relationship is given by
$$T(w) = 0.1 w^2 + 2.155 w + 20$$
where $T$ is the temperature in degrees Celsius and $w$ is the power input in watts.
- (a) How much power is needed to maintain the temperature at 200°C?
- (b) If the temperature is allowed to vary from 200°C by up to $\pm 1$°C, what range of wattage is allowed for the input power?
- (c) In terms of the $\varepsilon, \delta$ definition of $\lim_{x \to a}f(x) = L$, what is $x$? What is $f(x)$? What is $a$? What is $L$? What value of $\varepsilon$ is given? What is the corresponding value of $\delta$?

---

## Combine ε-statements (Exercises 13–14)

**13.**
- (a) Find a number $\delta$ such that if $|x - 2| < \delta$, then $|4x - 8| < \varepsilon$, where $\varepsilon = 0.1$.
- (b) Repeat part (a) with $\varepsilon = 0.01$.

**14.** Given that $\lim_{x \to 2}(5x - 7) = 3$, illustrate Definition 2 by finding values of $\delta$ that correspond to $\varepsilon = 0.1$, $\varepsilon = 0.05$, and $\varepsilon = 0.01$.

---

## Basic ε-δ proofs (Exercises 15–18)

**15–18.** Prove the statement using the $\varepsilon, \delta$ definition of limit and illustrate with a diagram like Figure 9.

**15.** $\displaystyle \lim_{x \to 1}(2x + 3) = 5$

**16.** $\displaystyle \lim_{x \to -2}\!\left(\tfrac{1}{2}x + 3\right) = 2$

**17.** `[HINT]` $\displaystyle \lim_{x \to -3}(1 - 4x) = 13$

**18.** $\displaystyle \lim_{x \to 4}(7 - 3x) = -5$

---

## More ε-δ proofs (Exercises 19–32)

**19–32.** Prove the statement using the $\varepsilon, \delta$ definition of limit.

**19.** $\displaystyle \lim_{x \to 3}\frac{x}{5} = \frac{3}{5}$

**20.** $\displaystyle \lim_{x \to 6}\!\left(\frac{x}{4} + 3\right) = \frac{9}{2}$

**21.** $\displaystyle \lim_{x \to 2}\frac{x^2 + x - 6}{x - 2} = 5$

**22.** $\displaystyle \lim_{x \to -1.5}\frac{9 - 4x^2}{3 + 2x} = 6$

**23.** $\displaystyle \lim_{x \to a} x = a$

**24.** $\displaystyle \lim_{x \to a} c = c$

**25.** `[HINT]` $\displaystyle \lim_{x \to 0} x^2 = 0$

**26.** $\displaystyle \lim_{x \to 0} x^3 = 0$

**27.** $\displaystyle \lim_{x \to 0}|x| = 0$

**28.** $\displaystyle \lim_{x \to 9^-}\sqrt[4]{9 - x} = 0$

**29.** `[HINT]` $\displaystyle \lim_{x \to 2}(x^2 - 4x + 5) = 1$

**30.** $\displaystyle \lim_{x \to 3}(x^2 + x - 4) = 8$

**31.** `[HINT]` $\displaystyle \lim_{x \to -2}(x^2 - 1) = 3$

**32.** $\displaystyle \lim_{x \to 2}x^3 = 8$

---

## Alternative δ choices (Exercises 33–34)

**33.** Verify that another possible choice of $\delta$ for showing that $\lim_{x \to 3}x^2 = 9$ in Example 4 is $\delta = \min\{1, \varepsilon/8\}$.

**34.** Verify, by a geometric argument, that the largest possible choice of $\delta$ for showing that $\lim_{x \to 3}x^2 = 9$ is $\delta = \sqrt{9 + \varepsilon} - 3$.

---

## CAS-based δ-finding (Exercise 35)

**35.** `[CAS]`
- (a) For the limit $\lim_{x \to 1}(x^3 + x + 1) = 3$, use a graph to find a value of $\delta$ that corresponds to $\varepsilon = 0.4$.
- (b) By using a computer algebra system to solve the cubic equation $x^3 + x + 1 = 3 + \varepsilon$, find the largest possible value of $\delta$ that works for any given $\varepsilon > 0$.
- (c) Put $\varepsilon = 0.4$ in your answer to part (b) and compare with your answer to part (a).

---

## Prove nontrivial limits (Exercises 36–39)

**36.** Prove that $\displaystyle \lim_{x \to 2}\frac{1}{x} = \frac{1}{2}$.

**37.** `[HINT]` Prove that $\displaystyle \lim_{x \to a}\sqrt{x} = \sqrt{a}$ if $a > 0$.
$$\left[\text{Hint: Use } |\sqrt{x} - \sqrt{a}| = \frac{|x - a|}{\sqrt{x} + \sqrt{a}}\right]$$

**38.** If $H$ is the Heaviside function defined in Example 6 in Section 2.2, prove, using Definition 2, that $\lim_{t \to 0}H(t)$ does not exist. *[Hint: Use an indirect proof as follows. Suppose that the limit is $L$. Take $\varepsilon = \tfrac{1}{2}$ in the definition of a limit and try to arrive at a contradiction.]*

**39.** If the function $f$ is defined by
$$f(x) = \begin{cases} 0 & \text{if } x \text{ is rational} \\ 1 & \text{if } x \text{ is irrational} \end{cases}$$
prove that $\lim_{x \to 0}f(x)$ does not exist.

---

## Prove Theorem 1 (Exercise 40)

**40.** By comparing Definitions 2, 3, and 4, prove Theorem 1 in Section 2.3.

---

## Infinite-limit proofs (Exercises 41–44)

**41.** How close to $-3$ do we have to take $x$ so that
$$\frac{1}{(x + 3)^4} > 10{,}000\,?$$

**42.** Prove, using Definition 6, that $\displaystyle \lim_{x \to -3}\frac{1}{(x + 3)^4} = \infty$.

**43.** `[HINT]` Prove that $\displaystyle \lim_{x \to 0^+}\ln x = -\infty$.

**44.** Suppose that $\lim_{x \to a}f(x) = \infty$ and $\lim_{x \to a}g(x) = c$, where $c$ is a real number. Prove each statement.
- (a) $\displaystyle \lim_{x \to a}[f(x) + g(x)] = \infty$
- (b) $\displaystyle \lim_{x \to a}[f(x)g(x)] = \infty$ if $c > 0$
- (c) $\displaystyle \lim_{x \to a}[f(x)g(x)] = -\infty$ if $c < 0$

---

*This closes Section 2.4 Exercises.*

## Priority gradient

Section 2.4 exercises split cleanly into **warm-up** (graph-reading to find δ) and **proof** (actual ε-δ derivations). The proof problems are the core of the section.

**Highest value — the fundamentals:**

- **Exercises 15, 16, 18** — linear ε-δ proofs. These are the Example 2 pattern. Do at least one fully; the technique transfers to every other linear problem. Template: $|f(x) - L| = K|x - a|$ for some constant $K$, so $\delta = \varepsilon/K$.
- **Exercises 25, 26** — power-function ε-δ at 0. $\lim_{x\to 0}x^2 = 0$ needs $\delta = \sqrt{\varepsilon}$; $\lim_{x\to 0}x^3 = 0$ needs $\delta = \varepsilon^{1/3}$. **Response scaling reveals the local behavior** — key for understanding derivatives.
- **Exercise 29** — $\lim_{x\to 2}(x^2 - 4x + 5) = 1$. Use the bound-then-refine technique from Example 4. Factor $x^2 - 4x + 5 - 1 = (x - 2)^2$, which is nice — but the general quadratic requires $(x-2)(x-2+\text{stuff})$ factoring.
- **Exercise 31** — $\lim_{x\to -2}(x^2 - 1) = 3$. Similar — use the bound-then-refine. Factor $x^2 - 1 - 3 = x^2 - 4 = (x - 2)(x + 2)$.
- **Exercise 37** — $\lim_{x\to a}\sqrt{x} = \sqrt{a}$ for $a > 0$. **The hint is the whole trick:** $|\sqrt{x} - \sqrt{a}| = |x - a|/(\sqrt{x} + \sqrt{a})$. Then bound the denominator below by $\sqrt{a}$ (valid if $x > a/4$, say). Do this one — it's the template for proving continuity of any "algebraic" function.
- **Exercise 40** — prove that $\lim = L$ iff both one-sided equal $L$. The proof is structural: directly comparing the interval constraints. Essential for understanding the one-sided framework.
- **Exercise 42** — $\lim_{x\to -3}1/(x+3)^4 = \infty$ via Definition 6. Practice with the M-δ game. Response: $\delta = M^{-1/4}$.
- **Exercise 44** — prove three corollaries of infinite limits. Part (a) is straightforward (add an unbounded function and a bounded one, still unbounded). Parts (b) and (c) require the bound-then-refine technique with care about signs.

**Medium value:**

- **Exercises 1–4** — graphical δ-finding. Pick one.
- **Exercises 5–10** — more graphical δ-finding with explicit functions. Pick one.
- **Exercise 11** — the disk-area problem (the classic "tolerance on the square" motivator). Good applied context.
- **Exercises 19–22** — linear / rational ε-δ proofs. Pick one or two.
- **Exercises 27, 28** — $|x|$ at 0, $\sqrt[4]{9 - x}$ at 9 (one-sided). Both use the same $\delta = f(\varepsilon)$ trick.
- **Exercise 36** — $\lim_{x\to 2}1/x = 1/2$. Similar to Example 4's pattern — bound $|1/(2x)|$ by a constant then solve. Good second-difficulty-level problem.
- **Exercise 41** — "how close to $-3$" — practically identical to setting $M = 10{,}000$ in the M-δ definition. Warmup for Exercise 42.
- **Exercise 43** — $\lim_{x \to 0^+}\ln x = -\infty$. Use Definition 7 (actually the right-hand version). The response: given $N < 0$, choose $\delta = e^N$ (very small). Good practice combining log with ε-δ.

**Skim or skip:**

- **Exercises 12** — crystal-furnace variation of the disk problem; redundant if you've done 11.
- **Exercises 17, 30, 32** — more linear / polynomial ε-δ; pick one variant only.
- **Exercises 13, 14** — specific numerical ε values; trivial given general-ε proofs.
- **Exercises 23, 24** — almost trivial (identity and constant).
- **Exercises 33, 34** — verify alternative δ for Example 4; fine-print variants.
- **Exercises 35** — CAS-dependent; skip unless you want the CAS practice.
- **Exercise 38** — Heaviside-nonexistence proof by contradiction; clever but non-essential.
- **Exercise 39** — Rational/irrational function; reuses the same contradiction template as 38.

**The three exercises that matter most:** **25, 37, 44.**

- **25** forces you to do the cleanest polynomial ε-δ proof — just $\delta = \sqrt{\varepsilon}$.
- **37** is the template for every "continuity of an algebraic function" proof. Once you can prove $\sqrt{}$ is continuous at every $a > 0$, the same technique extends to $\sqrt[3]{\cdot}$, $1/\sqrt{\cdot}$, and any other radical.
- **44** shows how ε-δ interacts with infinite limits and forces you to think about signs carefully — the bread-and-butter of Chapter 4's L'Hôpital's rule applications.

**Proofs to study as cultural landmarks (even if not assigned):**
- The Sum Law proof (already in Unit 2) — the $\varepsilon/2$ trick.
- The Product Law proof — the "$\varepsilon/(|L| + |M| + 1)$ trick." See Appendix F.
- The Quotient Law — needs a lower bound on $|g(x)|$; uses a two-stage bound.

These proofs **look** harder than they are. The pattern is always: Triangle Inequality + ε/(something) trick + $\delta = \min\{\delta_1, \delta_2, \ldots\}$.

**For your MFE prep specifically:** don't get stuck trying to do every ε-δ proof. The key internalization is: **a limit exists ⟺ you can always produce a δ response, no matter how small ε.** Every convergence statement in probability theory (a.s., in probability, in distribution, in $L^p$) is structurally this same challenge-response game, just with different parameter names. Once the grammar is second nature, the specific ε-δ calculations become routine.
