# Section 1.6 — Logarithmic Functions

*Covers pp. 63 bottom – 66 top of the book (PDF pp. 91 bottom – 95 top). The inverse of the exponential function: logarithms with arbitrary base, the natural logarithm $\ln$, the Laws of Logarithms, the Change of Base Formula, and a transformation example. Six worked examples (6–11).*

---

## Logarithmic Functions

If $a > 0$ and $a \neq 1$, the exponential function $f(x) = a^x$ is either strictly increasing ($a > 1$) or strictly decreasing ($0 < a < 1$). Either way, it passes the Horizontal Line Test — it's one-to-one. **Therefore it has an inverse function**, which we call the **logarithmic function with base $a$** and denote $\log_a$.

Using the inverse-function formulation from Equation 3 of Unit 1 ($f^{-1}(x) = y \Leftrightarrow f(y) = x$):

> **Definition (equation 6).**
> $$\log_a x = y \quad \Longleftrightarrow \quad a^y = x$$

**Reading this in words.** $\log_a x$ is the exponent to which the base $a$ must be raised to give $x$. For example:

$$\log_{10} 0.001 = -3 \quad \text{because} \quad 10^{-3} = 0.001$$
$$\log_2 32 = 5 \quad \text{because} \quad 2^5 = 32$$

### Cancellation equations for $\log$ and $\exp$

Applying the inverse-function cancellation equations (Equation 4) to the pair $f(x) = a^x$ and $f^{-1}(x) = \log_a x$:

> **Equation 7.**
> $$\log_a(a^x) = x \quad \text{for every } x \in \mathbb{R}$$
> $$a^{\log_a x} = x \quad \text{for every } x > 0$$

**Each cancellation, in words.**
- The first: take $a$ to the power $x$, then take $\log_a$ — you get back $x$. The $\log_a$ strips away the base-$a$ exponential.
- The second: take $\log_a$ of $x$, then use the result as an exponent on $a$ — you get back $x$. The exponential undoes the log.

**Why domain restrictions differ.** The first equation holds for all real $x$ because $a^x$ is always defined and positive. The second requires $x > 0$ because $\log_a x$ is only defined on $(0, \infty)$.

### Graph and basic features

Since $\log_a$ is the inverse of $a^x$:

$$\text{domain of } \log_a = \text{range of } a^x = (0, \infty)$$
$$\text{range of } \log_a = \text{domain of } a^x = \mathbb{R}$$

> **Figure 11 — Graph of $y = a^x$ (for $a > 1$) and its inverse $y = \log_a x$.** Both curves drawn with the diagonal line $y = x$ between them. $y = a^x$ rises steeply from the negative $x$-axis asymptote; $y = \log_a x$ rises gently from a vertical asymptote at the $y$-axis. Each curve is the other's reflection across the diagonal.

**Key observation.** If $y = a^x$ grows very rapidly for $x > 0$, then its inverse $y = \log_a x$ grows very slowly for $x > 1$. This is the mirror image statement. Fast-growing function $\leftrightarrow$ slow-growing inverse.

> **Figure 12 — Family of log graphs for various bases $> 1$: $\log_2, \log_3, \log_5, \log_{10}$.** All four curves pass through $(1, 0)$ because $\log_a 1 = 0$ for any $a$. All four rise from the vertical asymptote $x = 0$. For $x > 1$, smaller bases give steeper curves: $\log_2 x > \log_3 x > \log_5 x > \log_{10} x$.

---

## Laws of Logarithms

These follow directly from the Laws of Exponents (Unit 1 of Section 1.5) by inverting.

> **Laws of Logarithms.** If $x$ and $y$ are positive numbers, then
> 1. $\log_a(xy) = \log_a x + \log_a y$
> 2. $\log_a\!\left(\dfrac{x}{y}\right) = \log_a x - \log_a y$
> 3. $\log_a(x^r) = r\,\log_a x$ &nbsp;&nbsp;&nbsp;(where $r$ is any real number)

**Operational summary:**
- Law 1: **log turns products into sums.**
- Law 2: **log turns quotients into differences.**
- Law 3: **log turns exponents into multipliers.**

**Why these three laws are the whole reason logs exist.** Before calculators (pre-1970), multiplication of large numbers was done by table lookup: $x \cdot y = \exp(\log x + \log y)$. Addition is much easier than multiplication, so $\log$ made tractable otherwise-infeasible arithmetic. Slide rules work on this principle — they add distances corresponding to logs of the multiplicands. Computers now do arithmetic directly, but the "log turns multiplication into addition" insight remains the reason logs pervade modern mathematics.

**For your quant track.** Three direct applications where Law 1 (product → sum) is the whole point:
- **Log-likelihood** in MLE: $\log \prod p_i = \sum \log p_i$. Turns products of probabilities into sums — gradient descent-able.
- **Log-returns are additive across time:** $\log(P_t/P_0) = \sum_{i=1}^t \log(P_i/P_{i-1})$. Multi-period returns are the sum of single-period log-returns.
- **Entropy:** $H = -\sum p_i \log p_i$ is the unique function making information additive over independent events — Shannon's theorem.

---

### Example 6 — Using the laws to simplify

Use the laws of logarithms to evaluate $\log_2 80 - \log_2 5$.

***Solution.*** Apply Law 2 (quotient) to combine:

$$\log_2 80 - \log_2 5 = \log_2\!\left(\frac{80}{5}\right) = \log_2 16 = 4$$

because $2^4 = 16$.

---

## Natural Logarithms

Of all possible bases $a$ for logarithms, we'll see in Chapter 3 that the most convenient choice for calculus is $e$ — the number defined in Section 1.5 (the base where $y = a^x$ has tangent slope 1 at the origin). The logarithm with base $e$ is called the **natural logarithm** and gets its own notation:

$$\log_e x = \ln x$$

The "n" stands for "natural" (or for "Napier," the inventor of logarithms).

Setting $a = e$ and replacing $\log_e$ with $\ln$ in Equations 6 and 7:

> **Equation 8.**
> $$\ln x = y \quad \Longleftrightarrow \quad e^y = x$$

> **Equation 9 — Cancellation equations for $\ln$ and $e^x$.**
> $$\ln(e^x) = x \quad \text{for } x \in \mathbb{R}$$
> $$e^{\ln x} = x \quad \text{for } x > 0$$

**Special case — setting $x = 1$:**

$$\ln e = 1$$

(Because $e^1 = e$.)

### Notation warning

> **Notation for logarithms.** *Most textbooks in calculus and the sciences, as well as calculators, use the notation $\ln x$ for the natural logarithm and $\log x$ for the "common logarithm," $\log_{10} x$. In the more advanced mathematical and scientific literature and in computer languages, however, the notation $\log x$ usually denotes the natural logarithm.*

**Practical table of conventions** you'll encounter:

| Context | $\log x$ means |
|---|---|
| High-school / pre-calc / chemistry / engineering | $\log_{10} x$ (common log) |
| Stewart and most calculus books | $\log_{10} x$ (they use $\ln$ for natural log) |
| Advanced math / physics / probability / information theory | $\log_e x = \ln x$ (natural log) |
| Computer science | $\log_2 x$ (binary log) |
| Programming (Python `math.log`, C `log()`) | $\log_e x = \ln x$ |

**When in doubt, check.** If an expression involves calculus derivatives or integrals, it's almost certainly natural log. If it involves decibels, pH, or Richter scales, it's base 10. If it involves asymptotic complexity, it's base 2 (though the base doesn't affect Big-O classification, since they differ by a constant).

---

### Example 7 — Solving $\ln x = 5$

Find $x$ if $\ln x = 5$.

***Solution 1 — from the definition.*** $\ln x = 5$ means $e^5 = x$. So

$$x = e^5$$

***Solution 2 — exponentiate both sides.***

$$\ln x = 5 \implies e^{\ln x} = e^5 \implies x = e^5$$

(Using the second cancellation equation $e^{\ln x} = x$.)

**Numerical value:** $e^5 \approx 148.413$.

---

### Example 8 — Solving an exponential equation

Solve the equation $e^{5 - 3x} = 10$.

***Solution.*** Take $\ln$ of both sides (the inverse operation that kills the $e^{(\cdot)}$):

$$\ln(e^{5 - 3x}) = \ln 10$$
$$5 - 3x = \ln 10 \qquad \text{(by the first cancellation equation)}$$
$$3x = 5 - \ln 10$$
$$x = \frac{1}{3}(5 - \ln 10)$$

**Numerical value:** $\ln 10 \approx 2.3026$, so $x \approx \tfrac{1}{3}(5 - 2.3026) = \tfrac{1}{3}(2.6974) \approx 0.8991$.

**The universal recipe for exponential equations.** If $e^{f(x)} = c$ where $c > 0$, apply $\ln$ to get $f(x) = \ln c$, then solve for $x$ using ordinary algebra. The $\ln$ linearizes the exponential structure. This is how you solve for interest rates ("what rate doubles my money in 10 years?"), half-life problems, and Black-Scholes implied vol-type inversions.

---

### Example 9 — Combining logs into a single log

Express $\ln a + \tfrac{1}{2} \ln b$ as a single logarithm.

***Solution.*** Use Laws 3 and 1 in that order:

$$\ln a + \tfrac{1}{2} \ln b = \ln a + \ln b^{1/2} = \ln a + \ln \sqrt{b} = \ln(a \sqrt{b})$$

**The general pattern.** Any expression of the form $\sum_i c_i \ln x_i$ can be collapsed into a single log $\ln\!\left(\prod x_i^{c_i}\right)$. Useful for simplifying expressions; also for converting a *product* model $y = a \cdot x_1^{c_1} \cdot x_2^{c_2} \cdots$ into a *linear* model in $\log$-space: $\ln y = \ln a + c_1 \ln x_1 + c_2 \ln x_2 + \cdots$. **This is the theoretical foundation for log-log regression** — if you suspect a multiplicative power-law relationship, fit it linearly after taking logs.

---

## Change of Base Formula

Logarithms with any base can be expressed in terms of the natural logarithm.

> **Equation 10 — Change of Base Formula.** For any positive number $a$ with $a \neq 1$:
> $$\log_a x = \frac{\ln x}{\ln a}$$

**Proof.** Let $y = \log_a x$. By Equation 6, this means $a^y = x$. Take $\ln$ of both sides:

$$\ln(a^y) = \ln x \implies y \ln a = \ln x \implies y = \frac{\ln x}{\ln a}$$

(Using Law 3 on the left side to pull $y$ out of the exponent.)

### Why this formula matters

Scientific calculators have a $\ln$ button but usually not a $\log_8$ or $\log_{17}$ button. Equation 10 lets you compute any log using only $\ln$:

**Example 10.** Evaluate $\log_8 5$ correct to six decimal places.

$$\log_8 5 = \frac{\ln 5}{\ln 8} \approx \frac{1.609438}{2.079442} \approx 0.773976$$

**General principle.** Once you can compute $\ln x$ (or any single log base), you can compute every other log via this formula. The formula also implies that **$\log_a x$ and $\log_b x$ differ by a constant multiplicative factor** ($\ln b / \ln a$) — which is why asymptotic complexity classes don't care about log base. $O(\log_2 n) = O(\log_{10} n) = O(\ln n)$, all up to multiplicative constants.

---

## The graph of $\ln$, and Example 11

> **Figure 13 — $y = e^x$ and $y = \ln x$ reflected across $y = x$.** Standard setup. $y = e^x$ crosses $(0, 1)$ with slope 1; $y = \ln x$ crosses $(1, 0)$ with slope 1 (the corresponding reflected tangent). $\ln x$ is defined only for $x > 0$, has vertical asymptote at $x = 0$, and grows very slowly for $x > 1$.

In common with all other logarithmic functions with base greater than 1, the natural log is an **increasing function** defined on $(0, \infty)$, and the $y$-axis is a **vertical asymptote** — meaning $\ln x \to -\infty$ as $x \to 0^+$.

### Example 11 — Sketch $y = \ln(x - 2) - 1$ using transformations

***Solution.*** Start with $y = \ln x$ (Figure 13). Apply two transformations:

1. Shift right by 2 units: $y = \ln(x - 2)$.
2. Shift down by 1 unit: $y = \ln(x - 2) - 1$.

> **Figure 14 — Three-panel transformation.**
> - **(a) $y = \ln x$:** standard natural log curve; passes through $(1, 0)$; vertical asymptote at $x = 0$.
> - **(b) $y = \ln(x - 2)$:** same shape shifted right 2; passes through $(3, 0)$; vertical asymptote at $x = 2$.
> - **(c) $y = \ln(x - 2) - 1$:** panel (b) shifted down 1; passes through $(3, -1)$; same vertical asymptote at $x = 2$.

---

## How slowly does $\ln$ actually grow?

Although $\ln x$ is an increasing function, it grows **very slowly** when $x > 1$. In fact, $\ln x$ grows more slowly than any positive power of $x$.

### The comparison — $\ln x$ vs. $\sqrt{x}$

| $x$ | 1 | 2 | 5 | 10 | 50 | 100 | 500 | 1000 | 10{,}000 | 100{,}000 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $\ln x$ | 0 | 0.69 | 1.61 | 2.30 | 3.91 | 4.6 | 6.2 | 6.9 | 9.2 | 11.5 |
| $\sqrt{x}$ | 1 | 1.41 | 2.24 | 3.16 | 7.07 | 10.0 | 22.4 | 31.6 | 100 | 316 |
| $\dfrac{\ln x}{\sqrt{x}}$ | 0 | 0.49 | 0.72 | 0.73 | 0.55 | 0.46 | 0.28 | 0.22 | 0.09 | 0.04 |

**The ratio $\ln x / \sqrt{x} \to 0$** as $x \to \infty$. This says that **$\sqrt{x}$ grows asymptotically faster than $\ln x$** — and the same is true for any positive power $x^p$ with $p > 0$, no matter how small.

> **Figure 15.** Local view of $y = \sqrt{x}$ and $y = \ln x$ on $[0, 5]$. Near the origin they grow at comparable rates; $\ln x$ is slightly larger in a small initial range.

> **Figure 16.** Zoomed out view on $[0, 1000]$. $\sqrt{x}$ has climbed to about 31, while $\ln x$ is still below 7. The gap is enormous and growing.

### The formal dominance statement

For any $a > 1$ and $p > 0$:

$$\lim_{x \to \infty} \frac{\log_a x}{x^p} = 0$$

**Three-way hierarchy — the fundamental asymptotic picture.** Combining with the result from Section 1.5 Unit 1:

$$\text{logarithmic} \ \ll \ \text{polynomial} \ \ll \ \text{exponential}$$

$$\log_a x \ \ll \ x^p \ \ll \ c^x \quad (\text{for } a, c > 1, \ p > 0)$$

**For your quant/CS trajectory, this hierarchy is everything.**
- **Algorithm complexity:** $O(\log n) < O(n^k) < O(c^n)$. Log-time algorithms are blazing fast; polynomial are tractable; exponential are infeasible for large $n$.
- **Convergence rates:** Gradient descent on strongly convex problems has rate $O(\log(1/\epsilon))$ iterations to reach error $\epsilon$. Gradient descent on merely convex problems has rate $O(1/\epsilon)$ — polynomial. The gap is the log-vs-polynomial gap.
- **Information theory:** Entropy $H = -\sum p \log p$ naturally comes in $\log$ units — the bit/nat count of information scales logarithmically with alphabet size.

Master this hierarchy now. It's the single most useful asymptotic fact in applied math.

---

*End of Unit 2. Unit 3 picks up with INVERSE TRIGONOMETRIC FUNCTIONS in the middle of page 95.*
