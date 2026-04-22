# Section 1.3 — Combinations of Functions (Arithmetic + Composition)

*Covers pp. 41 middle – 43 top of the book (PDF pp. 69 middle – 71 top). The second half of Section 1.3: building new functions by arithmetic (sum, difference, product, quotient) and by **composition** — substituting one function into another. Four worked examples (6–9), including both composing and **decomposing** functions.*

---

## Combinations of Functions

Two functions $f$ and $g$ can be combined to form new functions $f + g$, $f - g$, $fg$, and $f/g$ in a manner similar to how we add, subtract, multiply, and divide real numbers.

### Arithmetic combinations

> **Definitions — Sum, difference, product, quotient.**
> $$(f + g)(x) = f(x) + g(x) \qquad (f - g)(x) = f(x) - g(x)$$
> $$(fg)(x) = f(x)\,g(x) \qquad \left(\frac{f}{g}\right)\!(x) = \frac{f(x)}{g(x)}$$

### Domains of combinations

**Sum, difference, product.** If the domain of $f$ is $A$ and the domain of $g$ is $B$, then the domain of $f \pm g$ and $fg$ is **the intersection**

$$A \cap B$$

because both $f(x)$ and $g(x)$ need to be defined for either operation.

**Quotient.** Same intersection, but additionally exclude any $x$ where the denominator is zero:

$$\text{domain of } f/g \ = \ \{x \in A \cap B \mid g(x) \neq 0\}$$

---

### Worked illustration — $(f + g)$ with overlapping domains

Let $f(x) = \sqrt{x}$ and $g(x) = \sqrt{2 - x}$.

- Domain of $f$: $A = [0, \infty)$ (need $x \geq 0$).
- Domain of $g$: $B = (-\infty, 2]$ (need $2 - x \geq 0$).
- Intersection: $A \cap B = [0, 2]$.

So

$$(f + g)(x) = \sqrt{x} + \sqrt{2 - x}, \qquad \text{domain} = [0, 2]$$

---

### Worked illustration — $(f/g)$ excluding a zero

If $f(x) = x^2$ and $g(x) = x - 1$:

- Both are polynomials; individual domains are both $\mathbb{R}$.
- Zeros of $g$: $x = 1$.

So

$$\left(\frac{f}{g}\right)\!(x) = \frac{x^2}{x - 1}$$

has domain $\{x \mid x \neq 1\} = (-\infty, 1) \cup (1, \infty)$.

---

## Composition

**Composition** is a different and more powerful way to combine two functions — feed the output of one directly into the input of the other.

### The idea, informally

Suppose $y = f(u) = \sqrt{u}$ and $u = g(x) = x^2 + 1$. Since $y$ is a function of $u$, and $u$ is in turn a function of $x$, it follows that $y$ is ultimately a function of $x$. Compute by substitution:

$$y = f(u) = f(g(x)) = f(x^2 + 1) = \sqrt{x^2 + 1}$$

The procedure is called **composition**. The new function is *composed* of the two given functions $f$ and $g$.

> **Figure 11 — The $f \circ g$ machine.** A vertical stack: an input $x$ drops into the $g$ machine; the intermediate output $g(x)$ exits $g$ and feeds into the $f$ machine; the final output $f(g(x))$ emerges at the bottom. An external label "$f \circ g$" wraps the whole stack, indicating that the combined $f \circ g$ machine **applies $g$ first, then $f$**.

<figure class="plot-figure">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 440" role="img" aria-label="Composition machine: x feeds g, then f">
  <defs>
    <marker id="fig11-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 Z" fill="#1f2430"/>
    </marker>
  </defs>
  <g font-family="'Times New Roman', Times, serif" fill="#1f2430">
    <rect x="40" y="30" width="300" height="370" rx="14" fill="#fffcf2" stroke="#b08a3e" stroke-width="1.6" stroke-dasharray="6 4"/>
    <text x="320" y="50" font-size="14" font-style="italic" fill="#b08a3e" text-anchor="end">f ∘ g</text>
    <text x="190" y="78"  font-size="22" font-style="italic" text-anchor="middle">x</text>
    <line x1="190" y1="90" x2="190" y2="130" stroke="#1f2430" stroke-width="2" marker-end="url(#fig11-arr)"/>
    <rect x="120" y="135" width="140" height="75" rx="8" fill="#fdfcf6" stroke="#1f2430" stroke-width="2"/>
    <text x="190" y="185" font-size="40" font-style="italic" text-anchor="middle" fill="#b04a2f">g</text>
    <line x1="190" y1="215" x2="190" y2="245" stroke="#1f2430" stroke-width="2" marker-end="url(#fig11-arr)"/>
    <text x="190" y="265" font-size="20" font-style="italic" text-anchor="middle">g(x)</text>
    <rect x="120" y="280" width="140" height="75" rx="8" fill="#fdfcf6" stroke="#1f2430" stroke-width="2"/>
    <text x="190" y="330" font-size="40" font-style="italic" text-anchor="middle" fill="#b04a2f">f</text>
    <line x1="190" y1="360" x2="190" y2="390" stroke="#1f2430" stroke-width="2" marker-end="url(#fig11-arr)"/>
    <text x="190" y="418" font-size="20" font-style="italic" text-anchor="middle">f(g(x))</text>
  </g>
</svg>
<figcaption>Inner machine g runs first (on input x), producing g(x). Outer machine f consumes g(x) and produces f(g(x)) = (f ∘ g)(x).</figcaption>
</figure>

### Formal definition

> **Definition.** Given two functions $f$ and $g$, the **composite function** $f \circ g$ (also called the **composition** of $f$ and $g$) is defined by
> $$(f \circ g)(x) = f(g(x))$$

**Domain of the composite.** $f \circ g$ is defined at $x$ whenever **both** $g(x)$ and $f(g(x))$ are defined — i.e., $x$ must be in the domain of $g$, **and** the value $g(x)$ must be in the domain of $f$.

**Reading order warning.** $(f \circ g)(x) = f(g(x))$ — $g$ is applied **first**, then $f$. Reading left to right in the notation can trick you; the natural sequence is **right-to-left** (innermost function applies first). This convention is universal but easy to misremember when rushed.

---

### Example 6 — Simple composition in both orders

If $f(x) = x^2$ and $g(x) = x - 3$, find the composite functions $f \circ g$ and $g \circ f$.

***Solution.***

$$(f \circ g)(x) = f(g(x)) = f(x - 3) = (x - 3)^2$$

$$(g \circ f)(x) = g(f(x)) = g(x^2) = x^2 - 3$$

> **Note — composition is not commutative.** From Example 6, $f \circ g \neq g \circ f$. The notation $f \circ g$ means the function $g$ is applied **first** and then $f$ is applied **second**. In Example 6, $f \circ g$ is the function that *first* subtracts 3 and *then* squares; $g \circ f$ is the function that *first* squares and *then* subtracts 3.

**Non-commutativity matters.** In everyday life: "put on socks, then shoes" $\neq$ "put on shoes, then socks." In math: applying $f = x^2$ and $g = x - 3$ in different orders gives different answers at almost every $x$. Always mind the order.

---

### Example 7 — Four compositions and four domains

If $f(x) = \sqrt{x}$ and $g(x) = \sqrt{2 - x}$, find each function and its domain:

(a) $f \circ g$ &nbsp;&nbsp;&nbsp; (b) $g \circ f$ &nbsp;&nbsp;&nbsp; (c) $f \circ f$ &nbsp;&nbsp;&nbsp; (d) $g \circ g$

***Solution.***

**(a)** $(f \circ g)(x) = f(g(x)) = f(\sqrt{2 - x}) = \sqrt{\sqrt{2 - x}} = \sqrt[4]{2 - x}$

Domain: need $2 - x \geq 0$, i.e. $x \leq 2$.

$$\text{domain}(f \circ g) = \{x \mid 2 - x \geq 0\} = (-\infty, 2]$$

**(b)** $(g \circ f)(x) = g(f(x)) = g(\sqrt{x}) = \sqrt{2 - \sqrt{x}}$

Two conditions:
- $\sqrt{x}$ defined → $x \geq 0$.
- $2 - \sqrt{x} \geq 0$ → $\sqrt{x} \leq 2$ → $x \leq 4$.

*Margin note: if $0 \leq a \leq b$, then $a^2 \leq b^2$ (squaring preserves inequality on $[0, \infty)$).*

Combining: $0 \leq x \leq 4$, so

$$\text{domain}(g \circ f) = [0, 4]$$

**(c)** $(f \circ f)(x) = f(f(x)) = f(\sqrt{x}) = \sqrt{\sqrt{x}} = \sqrt[4]{x}$

Domain: need $x \geq 0$ (for the outer $\sqrt{}$) and $\sqrt{x} \geq 0$ (automatic when $x \geq 0$). So

$$\text{domain}(f \circ f) = [0, \infty)$$

**(d)** $(g \circ g)(x) = g(g(x)) = g(\sqrt{2 - x}) = \sqrt{2 - \sqrt{2 - x}}$

Two conditions:
- $\sqrt{2 - x}$ defined → $2 - x \geq 0$, i.e. $x \leq 2$.
- $2 - \sqrt{2 - x} \geq 0$ → $\sqrt{2 - x} \leq 2$ → $2 - x \leq 4$ → $x \geq -2$.

Combining: $-2 \leq x \leq 2$, so

$$\text{domain}(g \circ g) = [-2, 2]$$

**Procedure summary for composite domains.** For $(f \circ g)(x)$: (i) find the domain of $g$; (ii) further restrict to those $x$ where $g(x)$ is in the domain of $f$. The domain of the composite is never bigger than the domain of the **inner** function.

---

### Composing three or more functions

It is possible to take the composition of three or more functions. For instance, the composite $f \circ g \circ h$ is found by first applying $h$, then $g$, and then $f$:

$$(f \circ g \circ h)(x) = f(g(h(x)))$$

**Composition is associative.** $(f \circ g) \circ h = f \circ (g \circ h) = f \circ g \circ h$. So the parentheses don't need to be marked, and the notation $f \circ g \circ h$ is unambiguous.

### Example 8 — Three-function composition

Find $f \circ g \circ h$ if

$$f(x) = \frac{x}{x + 1}, \qquad g(x) = x^{10}, \qquad h(x) = x + 3$$

***Solution.*** Work from the inside out:

$$(f \circ g \circ h)(x) = f(g(h(x))) = f(g(x + 3)) = f((x + 3)^{10}) = \frac{(x + 3)^{10}}{(x + 3)^{10} + 1}$$

---

## Decomposition — the reverse skill

So far we've used composition to *build* complicated functions from simpler ones. But in calculus it's often useful to **decompose** a complicated function into simpler ones — for the chain rule (Chapter 3), you need to see a complicated expression as $f(g(x))$ so you can differentiate it as $f'(g(x)) \cdot g'(x)$.

### Example 9 — Decomposing a cosine-squared-shifted function

Given $F(x) = \cos^2(x + 9)$, find functions $f$, $g$, and $h$ such that $F = f \circ g \circ h$.

***Solution.*** Rewrite $F$ as $[\cos(x + 9)]^2$. The formula for $F$ says: **first** add 9, **then** take cosine of the result, **finally** square. So three layers:

$$h(x) = x + 9, \qquad g(x) = \cos x, \qquad f(x) = x^2$$

Check:

$$(f \circ g \circ h)(x) = f(g(h(x))) = f(g(x + 9)) = f(\cos(x + 9)) = [\cos(x + 9)]^2 = F(x) \ \checkmark$$

**Decomposition heuristic — read outside-in when looking at the expression; write inside-out when assigning names.** For $\cos^2(x + 9)$: the outermost operation is "squaring" ($f$), so $f$ is the last function applied; the middle is $\cos$; the innermost is $x + 9$. Match these to $f, g, h$ in reverse order of application.

**Decomposition is not unique.** You could also split $F(x) = \cos^2(x + 9)$ as two functions: $h(x) = \cos(x + 9)$, $f(x) = x^2$, so $F = f \circ h$. Or four: $k(x) = 9$, $h(x) = x + k$, etc. For the chain rule you pick the decomposition that makes each piece as elementary as possible.

**This is the single most important prerequisite for the chain rule.** When Chapter 3 asks you to differentiate $\sin(x^2 + 1)$ or $e^{\sqrt{x}}$ or $\ln(\tan x)$, the first move is always to mentally write it as $f(g(x))$ — identify the outer and inner functions — and only then apply $[f(g(x))]' = f'(g(x)) \cdot g'(x)$. Practicing decomposition now pays off enormously there.

---

## Why composition is fundamental beyond calculus

Function composition is the backbone of how complex systems are built from simple pieces across mathematics and its applications:

- **Programming**: function composition is literally the core of functional programming. `(f . g) x = f (g x)` in Haskell is precisely $(f \circ g)(x)$.
- **Machine learning**: a neural network is a **composition** of layers. $\text{output} = f_n \circ f_{n-1} \circ \cdots \circ f_1 (\text{input})$ where each $f_i$ is one layer's transformation. Backpropagation is the chain rule applied to this composition.
- **Stochastic processes and SDEs**: Itô's lemma — the chain rule for functions of diffusions — is compositional. If $dX_t$ is a process and $Y_t = g(X_t)$, the dynamics of $Y$ are obtained from those of $X$ by a chain-rule-like composition formula.
- **Algebra (group theory)**: composition of symmetries is the group operation; non-commutativity of composition is what separates abelian from non-abelian groups.

Composition isn't a calculus trick. It's a **structural primitive** for building mathematical objects out of simpler ones, and Section 1.3 is your first formal encounter with it. Get fluent here, and a lot of later machinery — chain rule, change of variables, coordinate transformations, linear-algebra compositions of maps — will feel natural rather than technical.

---

*End of Unit 2. Section 1.3's exposition is complete. Unit 3 is Exercises.*
