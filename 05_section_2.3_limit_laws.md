# Section 2.3 — Calculating Limits Using the Limit Laws (Part A): The Laws and Direct Substitution

*Covers pp. 99–102 top of the book (PDF pp. 127 bottom – 130 top). The computational machinery of limits. We move from "guess it from a table" (Section 2.2) to "calculate it from rules" — the eleven Limit Laws, the Direct Substitution Property, and the first set of worked examples covering polynomial and rational limits.*

---

## Section 2.3 — Calculating Limits Using the Limit Laws

In Section 2.2 we used calculators and graphs to *guess* the values of limits, but we saw that such methods don't always lead to the correct answer. In this section we use the following properties of limits, called the **Limit Laws**, to *calculate* them.

---

## The Five Basic Limit Laws

> **Limit Laws.** Suppose that $c$ is a constant and the limits
> $$\lim_{x \to a} f(x) \qquad \text{and} \qquad \lim_{x \to a} g(x)$$
> exist. Then:
>
> **1. Sum Law:** $\quad \displaystyle \lim_{x \to a}[f(x) + g(x)] = \lim_{x \to a}f(x) + \lim_{x \to a}g(x)$
>
> **2. Difference Law:** $\quad \displaystyle \lim_{x \to a}[f(x) - g(x)] = \lim_{x \to a}f(x) - \lim_{x \to a}g(x)$
>
> **3. Constant Multiple Law:** $\quad \displaystyle \lim_{x \to a}[c\,f(x)] = c\lim_{x \to a}f(x)$
>
> **4. Product Law:** $\quad \displaystyle \lim_{x \to a}[f(x)g(x)] = \lim_{x \to a}f(x) \cdot \lim_{x \to a}g(x)$
>
> **5. Quotient Law:** $\quad \displaystyle \lim_{x \to a}\frac{f(x)}{g(x)} = \frac{\displaystyle\lim_{x \to a}f(x)}{\displaystyle\lim_{x \to a}g(x)} \qquad \text{if } \lim_{x \to a}g(x) \neq 0$

**Verbal statement of each law:**
1. **The limit of a sum is the sum of the limits.**
2. **The limit of a difference is the difference of the limits.**
3. **The limit of a constant times a function is the constant times the limit of the function.**
4. **The limit of a product is the product of the limits.**
5. **The limit of a quotient is the quotient of the limits** (provided the limit of the denominator is not 0).

**Intuitive justification.** It is easy to believe these properties. For instance, if $f(x)$ is close to $L$ and $g(x)$ is close to $M$, it is reasonable to conclude that $f(x) + g(x)$ is close to $L + M$. This gives an intuitive basis for believing Law 1 is true. In Section 2.4 we give a precise definition of a limit and use it to prove this law. The proofs of the remaining laws are given in Appendix F.

**Why the "exist" hypothesis matters.** All five laws require that *both* individual limits exist. If one doesn't, the law doesn't apply — even if the *combined* expression might have a well-defined limit. We'll see examples of this failure mode in Example 1.

---

### Example 1 — Reading limits from graphs, then applying laws

Use the Limit Laws and the graphs of $f$ and $g$ to evaluate the following limits, if they exist:

(a) $\displaystyle \lim_{x \to -2}[f(x) + 5g(x)]$ &nbsp;&nbsp;&nbsp; (b) $\displaystyle \lim_{x \to 1}[f(x)g(x)]$ &nbsp;&nbsp;&nbsp; (c) $\displaystyle \lim_{x \to 2}\frac{f(x)}{g(x)}$

> **Figure 1 — Graphs of $f$ and $g$.** Two curves on the same grid:
> - $f$ is a smooth curve passing through approximately $(-2, 1)$, with a local max, descending on the right side.
> - $g$ is a decreasing line-like curve, passing through approximately $(-2, -1)$, continuing to decrease. Near $x = 1$, $g$ has a jump discontinuity — open circles at $(1, -2)$ and $(1, -1)$.

***Solution.***

**(a)** From the graphs: $\lim_{x \to -2} f(x) = 1$ and $\lim_{x \to -2} g(x) = -1$.

$$\lim_{x \to -2}[f(x) + 5g(x)] = \lim_{x \to -2}f(x) + \lim_{x \to -2}[5g(x)] \qquad \text{(Law 1)}$$

$$= \lim_{x \to -2}f(x) + 5\lim_{x \to -2}g(x) \qquad \text{(Law 3)}$$

$$= 1 + 5(-1) = -4$$

**(b)** From the graph, $\lim_{x \to 1}f(x) = 2$. But $\lim_{x \to 1}g(x)$ **does not exist** because the left and right limits are different:

$$\lim_{x \to 1^-}g(x) = -2 \qquad \lim_{x \to 1^+}g(x) = -1$$

So we can't use Law 4 directly. **But we can use Law 4 on the one-sided limits:**

$$\lim_{x \to 1^-}[f(x)g(x)] = 2 \cdot (-2) = -4 \qquad \lim_{x \to 1^+}[f(x)g(x)] = 2 \cdot (-1) = -2$$

The left and right limits of the product aren't equal, so $\lim_{x \to 1}[f(x)g(x)]$ **does not exist**.

**(c)** From the graphs: $\lim_{x \to 2}f(x) \approx 1.4$ and $\lim_{x \to 2}g(x) = 0$.

**Because the limit of the denominator is 0, we can't use Law 5.** The given limit does not exist because the denominator approaches 0 while the numerator approaches a nonzero number.

**The takeaway from Example 1 part (b).** When a limit of $g$ doesn't exist but $f$'s does, **you might still be able to handle $fg$ by working with one-sided limits separately**. This is a standard salvage trick — when the two-sided limit of one factor fails, the two-sided product might still be meaningfully split into left and right.

---

## Additional Limit Laws

Repeated application of the Product Law (Law 4) with $g = f$ gives:

> **6. Power Law:** $\quad \displaystyle \lim_{x \to a}[f(x)]^n = \left[\lim_{x \to a}f(x)\right]^n$, where $n$ is a positive integer.

**Two foundational "obvious" limits:**

> **7.** $\quad \displaystyle \lim_{x \to a} c = c$
>
> **8.** $\quad \displaystyle \lim_{x \to a} x = a$

**Intuitive content.** Law 7 says the constant function $y = c$ has limit $c$ everywhere (its graph is a horizontal line, so there's nothing to "approach"). Law 8 says the identity function $y = x$ sends $x \to a$ to $a$ (you're just reading off the function value). Both are "obvious from a graph" but get rigorous proofs via the precise definition in Section 2.4.

**Combining Laws 6 and 8:**

> **9.** $\quad \displaystyle \lim_{x \to a} x^n = a^n$, where $n$ is a positive integer.

**Root laws:**

> **10.** $\quad \displaystyle \lim_{x \to a} \sqrt[n]{x} = \sqrt[n]{a}$, where $n$ is a positive integer. (If $n$ is even, we assume $a > 0$.)
>
> **11. Root Law:** $\quad \displaystyle \lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{\lim_{x \to a} f(x)}$, where $n$ is a positive integer. (If $n$ is even, we assume $\lim_{x \to a} f(x) > 0$.)

**Law 11 is a structural move** — **the limit commutes with the $n$-th root**. The generalization to arbitrary continuous functions (Law 10 in Section 2.5) will say that continuity is exactly the property "the limit commutes with the function." This is the conceptual theme that tightens up in 2.5.

---

### Example 2 — Direct evaluation with polynomial and rational limits

Evaluate and justify each step:

(a) $\displaystyle \lim_{x \to 5}(2x^2 - 3x + 4)$ &nbsp;&nbsp;&nbsp; (b) $\displaystyle \lim_{x \to -2}\frac{x^3 + 2x^2 - 1}{5 - 3x}$

***Solution.***

**(a)** Apply the laws step by step:

$$\lim_{x \to 5}(2x^2 - 3x + 4) = \lim_{x \to 5}(2x^2) - \lim_{x \to 5}(3x) + \lim_{x \to 5} 4 \qquad \text{(Laws 2 and 1)}$$

$$= 2\lim_{x \to 5}x^2 - 3\lim_{x \to 5}x + \lim_{x \to 5} 4 \qquad \text{(Law 3)}$$

$$= 2(5^2) - 3(5) + 4 \qquad \text{(Laws 9, 8, 7)}$$

$$= 50 - 15 + 4 = 39$$

**(b)** Apply Law 5 (Quotient), but note that its use is fully justified only at the final stage, once we verify the limit of the denominator exists *and is not zero*.

$$\lim_{x \to -2}\frac{x^3 + 2x^2 - 1}{5 - 3x} = \frac{\displaystyle \lim_{x \to -2}(x^3 + 2x^2 - 1)}{\displaystyle \lim_{x \to -2}(5 - 3x)} \qquad \text{(Law 5 — tentative)}$$

$$= \frac{\displaystyle \lim_{x \to -2}x^3 + 2\lim_{x \to -2}x^2 - \lim_{x \to -2}1}{\displaystyle \lim_{x \to -2}5 - 3\lim_{x \to -2}x} \qquad \text{(Laws 1, 2, 3)}$$

$$= \frac{(-2)^3 + 2(-2)^2 - 1}{5 - 3(-2)} \qquad \text{(Laws 9, 8, 7)}$$

$$= \frac{-8 + 8 - 1}{5 + 6} = -\frac{1}{11}$$

**Denominator check:** $5 - 3(-2) = 11 \neq 0$, so Law 5 was legitimate.

**Margin historical note — Newton and Limits.** Isaac Newton was born on Christmas Day in 1642, the year of Galileo's death. When he entered Cambridge University in 1661 Newton didn't know much mathematics, but he learned quickly by reading Euclid and Descartes and by attending the lectures of Isaac Barrow. Cambridge was closed because of the plague in 1665 and 1666, and Newton returned home to reflect on what he had learned. Those two years were amazingly productive for at that time he made four of his major discoveries: (1) his representation of functions as sums of infinite series, including the binomial theorem; (2) his work on differential and integral calculus; (3) his laws of motion and law of universal gravitation; and (4) his prism experiments on the nature of light and color. Because of a fear of controversy and criticism, he was reluctant to publish his discoveries and it wasn't until 1687, at the urging of the astronomer Halley, that Newton published *Principia Mathematica*. In this work, the greatest scientific treatise ever written, Newton set forth his version of calculus and used it to investigate mechanics, fluid dynamics, and wave motion, and to explain the motion of planets and comets. The beginnings of calculus are found in the calculations of areas and volumes by ancient Greek scholars such as Eudoxus and Archimedes. Although aspects of the idea of a limit are implicit in their "method of exhaustion," Eudoxus and Archimedes never explicitly formulated the concept of a limit. Likewise, mathematicians such as Cavalieri, Fermat, and Barrow, the immediate precursors of Newton in the development of calculus, did not actually use limits. It was Isaac Newton who was the first to talk explicitly about limits. He explained that the main idea behind limits is that quantities "approach nearer than by any given difference." Newton stated that the limit was the basic concept in calculus, but it was left to later mathematicians like Cauchy to clarify his ideas about limits.

---

## The Direct Substitution Property

### The observation

Notice: in Example 2(a), the answer was $39$. And $f(5) = 2(5)^2 - 3(5) + 4 = 39$ directly. In Example 2(b), the limit was $-1/11$, which is exactly $f(-2)$ for $f(x) = (x^3 + 2x^2 - 1)/(5 - 3x)$.

**The limit equals the function's value at the point.** For polynomials and rational functions (when defined), you can just plug in. This is the computational payoff of the Limit Laws.

### Formal statement

> **Direct Substitution Property.** If $f$ is a **polynomial** or a **rational function** and $a$ is in the domain of $f$, then
> $$\lim_{x \to a}f(x) = f(a)$$

**Why this works.** The Limit Laws tell you how to compute limits of sums, differences, products, and quotients by combining the individual limits. Polynomials are built from constants ($\lim c = c$) and the identity function ($\lim x = a$) via additions and multiplications. So:

- $\lim_{x \to a} c = c$ (Law 7) ✓
- $\lim_{x \to a} x = a$ (Law 8) ✓
- $\lim_{x \to a} x^n = a^n$ (Law 9) ✓
- $\lim_{x \to a} (\text{sum of } x^k \text{ terms}) = \text{sum of } a^k \text{ terms}$ (Law 1 repeated) ✓

**In short: the limit of any polynomial at any point is obtained by substituting.** For rational functions, the Quotient Law applies whenever the denominator at $a$ is nonzero — i.e., whenever $a$ is in the domain.

### Continuity foreshadowed

Functions with the Direct Substitution Property are called **continuous at $a$** — this is Section 2.5. For now, take it as a computational shortcut: **polynomials and rational functions (on their domains) are "limit-friendly" — no tables needed, just plug in**.

---

## When direct substitution fails

**Not all limits can be evaluated by direct substitution, as the following examples show.** These are the interesting cases — the ones where the function is *not defined* at $a$, so you can't just "plug in $a$." The $0/0$ indeterminate form is the canonical example.

**Three main tricks for handling $0/0$ cases** (which we'll see in Unit 2):
1. **Factor and cancel** — if the numerator and denominator share a common factor that vanishes at $a$, cancel it.
2. **Rationalize** — multiply by a conjugate to eliminate a problematic radical.
3. **Use the Squeeze Theorem** — bound the function between two others with the same limit.

Examples 3–11 in Unit 2 apply each of these in turn.

---

*End of Unit 1 of Section 2.3. Unit 2 covers the factoring/rationalization techniques, one-sided limits revisited, piecewise-function examples, and the Squeeze Theorem.*
