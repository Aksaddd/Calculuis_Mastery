# Section 2.8 — The Derivative as a Function (Part A): The Derivative Function, Notations, and Graphical Differentiation

*Covers pp. 154–157 top of the book (PDF pp. 182–185 top). The shift in perspective: in 2.7 we computed $f'(a)$ at individual points. Now we view $f'$ as a function in its own right, mapping each $x$ to the tangent slope there. This unlocks the Leibniz notation, the graphical-differentiation technique, and the formal definition of differentiability on intervals.*

---

## Section 2.8 — The Derivative as a Function

In the preceding section we considered the derivative of a function $f$ at a fixed number $a$:

$$\tag{1} f'(a) = \lim_{h \to 0}\frac{f(a + h) - f(a)}{h}$$

**The perspective shift.** Here we change our point of view and let the number $a$ vary. If we replace $a$ in Equation 1 by a variable $x$, we obtain:

$$\tag{2} f'(x) = \lim_{h \to 0}\frac{f(x + h) - f(x)}{h}$$

**Given any number $x$ for which this limit exists, we assign to $x$ the number $f'(x)$.** So we can regard $f'$ as a new function, called the **derivative of $f$** and defined by Equation 2. We know that the value of $f'$ at $x$, $f'(x)$, can be interpreted geometrically as the slope of the tangent line to the graph of $f$ at the point $(x, f(x))$.

**Why "derivative"?** The function $f'$ is called the derivative of $f$ because it has been "derived" from $f$ by the limiting operation in Equation 2. **The domain of $f'$ is the set $\{x \mid f'(x) \text{ exists}\}$** and may be smaller than the domain of $f$.

---

### Example 1 — Graphical Differentiation

The graph of a function $f$ is given. Use it to sketch the graph of the derivative $f'$.

> **Figure 1 — Given graph of $f$.** A curve over $[-1, 7]$ or so showing: a local minimum around $x = 1$ (labeled $A$), a local maximum around $x = 2$ (labeled $B$), another local minimum around $x = 3$ (labeled $C$), and a steadily increasing region to the right. The point $P$ is marked at $x = 5$ where the tangent slope visibly looks like about $3/2$.

***Solution.*** We can estimate the value of the derivative at any value of $x$ by drawing the tangent at the point $(x, f(x))$ and estimating its slope.

**Sample estimate:** for $x = 5$, we draw the tangent at $P$ in Figure 2(a) and estimate its slope to be about $\frac{3}{2}$, so $f'(5) \approx 1.5$. This allows us to plot the point $P'(5, 1.5)$ on the graph of $f'$ directly beneath $P$.

Repeating this procedure at several points gives the graph shown in Figure 2(b).

> **Figure 2 — The graphical differentiation procedure.**
> - **Panel (a):** Top graph $y = f(x)$. Tangent slopes at critical points: $A$ (horizontal, slope 0), $B$ (horizontal, slope 0), $C$ (horizontal, slope 0), $P$ (slope $\approx 3/2$).
> - **Panel (b):** Bottom graph $y = f'(x)$. The tangent slopes from (a) become $y$-values here. $A', B', C'$ are the points where $f'$ crosses the $x$-axis (corresponding to the horizontal-tangent points in (a)). **$f'$ is positive where $f$ is increasing (between $A$ and $B$, after $C$) and negative where $f$ is decreasing (between $B$ and $C$).**

**The three-step method:**
1. **Mark horizontal tangents** on $f$ — these are the zeros of $f'$.
2. **Between zeros, determine the sign of $f'$** — positive where $f$ is increasing, negative where decreasing.
3. **Estimate slope magnitudes** at representative points — steep means large $|f'|$, flat means small.

*Margin note: TEC Visual 2.8 shows an animation of Figure 2 for several functions.*

**Notice the structural relationship.** The tangents at $A$, $B$, and $C$ are horizontal, so **the derivative is 0** there and the graph of $f'$ crosses the $x$-axis at the points $A'$, $B'$, and $C'$, directly beneath $A$, $B$, and $C$. Between $A$ and $B$ the tangents have positive slope, so $f'(x)$ is positive there. But between $B$ and $C$ the tangents have negative slope, so $f'(x)$ is negative there.

**This "translate the slope visually into a height" procedure is the core technique of graphical analysis** — it's how you read off a derivative chart when given a raw data chart. In finance, it's how you read a price chart into a velocity-of-price chart (the "rate of change" technical indicator in charting platforms). In physics, it's how you transform position plots into velocity plots.

---

### Example 2 — Algebraic differentiation of a cubic

(a) If $f(x) = x^3 - x$, find a formula for $f'(x)$.
(b) Illustrate by comparing the graphs of $f$ and $f'$.

***Solution.***

**(a)** When using Equation 2 to compute a derivative, **we must remember that the variable is $h$ and that $x$ is temporarily regarded as a constant during the calculation of the limit.**

$$f'(x) = \lim_{h \to 0}\frac{f(x + h) - f(x)}{h} = \lim_{h \to 0}\frac{[(x + h)^3 - (x + h)] - [x^3 - x]}{h}$$

Expand $(x + h)^3 = x^3 + 3x^2 h + 3xh^2 + h^3$:

$$= \lim_{h \to 0}\frac{x^3 + 3x^2 h + 3xh^2 + h^3 - x - h - x^3 + x}{h}$$

$$= \lim_{h \to 0}\frac{3x^2 h + 3xh^2 + h^3 - h}{h}$$

Factor $h$ from the numerator:

$$= \lim_{h \to 0}\frac{h(3x^2 + 3xh + h^2 - 1)}{h} = \lim_{h \to 0}(3x^2 + 3xh + h^2 - 1) = 3x^2 - 1$$

**So $f'(x) = 3x^2 - 1$.**

**(b) Illustration by graphs.**

> **Figure 3 — Graphs of $f$ and $f'$ on separate axes.**
> - **Left:** $y = x^3 - x$. S-shaped cubic with a local max and local min.
> - **Right:** $y = 3x^2 - 1$. Upward-opening parabola with roots at $\pm 1/\sqrt{3}$.
>
> **Notice:** $f'(x) = 0$ when $f$ has horizontal tangents (at $x = \pm 1/\sqrt{3}$). $f'(x) > 0$ when $f$ is increasing (outside $[-1/\sqrt{3}, 1/\sqrt{3}]$). $f'(x) < 0$ when $f$ is decreasing (inside). **The graphs serve as a check on the algebraic work.**

**A pattern to file away.** $f(x) = x^3 - x$ gives $f'(x) = 3x^2 - 1$. **Differentiate each term separately:** $x^3 \mapsto 3x^2$, $-x \mapsto -1$, and constants (which we don't have here) would go to 0. This is the **Power Rule + Sum/Difference + Constant Multiple Rule** from Chapter 3, which you'd re-derive by the same mechanical expansion-and-cancel technique used here.

---

### Example 3 — Differentiating $\sqrt{x}$ (with rationalization)

If $f(x) = \sqrt{x}$, find the derivative of $f$. State the domain of $f'$.

***Solution.*** Apply Equation 2:

$$f'(x) = \lim_{h \to 0}\frac{\sqrt{x + h} - \sqrt{x}}{h}$$

This has an indeterminate $0/0$ form with a radical in the numerator. **Rationalize the numerator** by multiplying by the conjugate:

$$= \lim_{h \to 0}\!\left(\frac{\sqrt{x + h} - \sqrt{x}}{h}\right)\!\left(\frac{\sqrt{x + h} + \sqrt{x}}{\sqrt{x + h} + \sqrt{x}}\right)$$

$$= \lim_{h \to 0}\frac{(x + h) - x}{h\,(\sqrt{x + h} + \sqrt{x})} = \lim_{h \to 0}\frac{h}{h\,(\sqrt{x + h} + \sqrt{x})}$$

Cancel the $h$:

$$= \lim_{h \to 0}\frac{1}{\sqrt{x + h} + \sqrt{x}} = \frac{1}{\sqrt{x} + \sqrt{x}} = \frac{1}{2\sqrt{x}}$$

**So $f'(x) = \dfrac{1}{2\sqrt{x}}$.**

**Domain of $f'$:** we need $x > 0$ (not $\geq 0$) because $f'(0)$ would involve division by zero. So **domain of $f'$ is $(0, \infty)$** — strictly smaller than the domain of $f$, which is $[0, \infty)$.

**The "domain shrinks" phenomenon.** $f$ is defined at $x = 0$, but $f'$ is not — this is a concrete example of "domain of $f'$ may be smaller than domain of $f$." The geometric reason: at $(0, 0)$, the graph of $\sqrt{x}$ has a **vertical tangent**, so the "slope" is undefined (or infinite).

> **Figures 4(a) and 4(b) — Visual confirmation.**
> - **(a):** Graph of $f(x) = \sqrt{x}$. Starts at the origin with an infinite (vertical) slope, rises, flattens. Passes through $(1, 1)$.
> - **(b):** Graph of $f'(x) = 1/(2\sqrt{x})$. Domain $(0, \infty)$. Decreasing curve with a vertical asymptote at $x = 0$ and a horizontal asymptote at $y = 0$ as $x \to \infty$.
>
> **Geometric reading:** the vertical asymptote in $f'$ at $x = 0$ *is* the vertical tangent in $f$ at $(0, 0)$. The horizontal asymptote of $f'$ at $y = 0$ as $x \to \infty$ reflects the fact that $\sqrt{x}$ gets arbitrarily flat for large $x$.

*Margin note: Here we rationalize the numerator.*

---

### Example 4 — A rational-function derivative

Find $f'$ if $f(x) = \dfrac{1 - x}{2 + x}$.

***Solution.*** Apply Equation 2:

$$f'(x) = \lim_{h \to 0}\frac{f(x + h) - f(x)}{h} = \lim_{h \to 0}\frac{\dfrac{1 - (x + h)}{2 + (x + h)} - \dfrac{1 - x}{2 + x}}{h}$$

Combine the fractions in the numerator over a common denominator $(2 + x + h)(2 + x)$:

$$= \lim_{h \to 0}\frac{(1 - x - h)(2 + x) - (1 - x)(2 + x + h)}{h(2 + x + h)(2 + x)}$$

Expand both products:

- $(1 - x - h)(2 + x) = 2 - x - 2h - x^2 - xh$
- $(1 - x)(2 + x + h) = 2 - x + h - x^2 - xh$

Subtract:

$$(2 - x - 2h - x^2 - xh) - (2 - x + h - x^2 - xh) = -2h - h = -3h$$

So:

$$f'(x) = \lim_{h \to 0}\frac{-3h}{h(2 + x + h)(2 + x)} = \lim_{h \to 0}\frac{-3}{(2 + x + h)(2 + x)} = -\frac{3}{(2 + x)^2}$$

*Margin note: Recall $\dfrac{a/b - c/d}{e} = \dfrac{ad - bc}{bd} \cdot \dfrac{1}{e}$.*

**So $f'(x) = -\dfrac{3}{(2 + x)^2}$.**

**Domain:** $f$ is undefined at $x = -2$ (denominator zero); $f'$ is also undefined there (denominator squared, still zero). So domain of $f'$ is $\{x \mid x \neq -2\}$ — the same as domain of $f$.

**Note the sign.** $f'(x) < 0$ everywhere on the domain. This tells us $f$ is **strictly decreasing** on each of its two domain pieces $(-\infty, -2)$ and $(-2, \infty)$. (The function has a vertical asymptote at $x = -2$, so "decreasing everywhere" means on each piece separately.)

---

## Other Notations for the Derivative

If we use the traditional notation $y = f(x)$ to indicate that the independent variable is $x$ and the dependent variable is $y$, then some common alternative notations for the derivative are as follows:

$$f'(x) = y' = \frac{dy}{dx} = \frac{df}{dx} = \frac{d}{dx}f(x) = Df(x) = D_x f(x)$$

**All six notations mean the same thing.**

- **$f'$ and $y'$** — Lagrange's prime notation (1797). Compact and widely used.
- **$\dfrac{dy}{dx}$ and $\dfrac{df}{dx}$** — Leibniz's notation (1684). Suggests "ratio of infinitesimals" but should be read as a unit, not a quotient (at least for the time being; later rigorous interpretations are possible).
- **$D$ and $D_x$** — operator notation. Treats differentiation as an operator acting on functions. Useful in linear algebra and differential equations.
- **Newton's dot** (not shown by Stewart here but worth mentioning): $\dot{y}$ for derivative with respect to time. Still standard in physics and mechanical engineering.

The symbols $D$ and $d/dx$ are called **differentiation operators** because they indicate the operation of **differentiation** — the process of calculating a derivative.

### Leibniz notation — why it's useful

The symbol $dy/dx$ is a synonym for $f'(x)$. It's a **very useful and suggestive notation**, especially when used in conjunction with increment notation:

$$\frac{dy}{dx} = \lim_{\Delta x \to 0}\frac{\Delta y}{\Delta x}$$

**This form literally encodes the definition.** $\Delta y$ is the change in $y$; $\Delta x$ is the change in $x$; $\Delta y/\Delta x$ is the average rate of change (the difference quotient); taking the limit as $\Delta x \to 0$ gives the instantaneous rate of change $dy/dx$.

**Value at a specific point.** If we want to indicate the value of a derivative $dy/dx$ in Leibniz notation at a specific number $a$:

$$\left.\frac{dy}{dx}\right|_{x = a} \quad \text{or} \quad \left.\frac{dy}{dx}\right]_{x = a}$$

both read as "$dy/dx$ evaluated at $x = a$" and both equal $f'(a)$.

*Margin historical note on Leibniz: Gottfried Wilhelm Leibniz was born in Leipzig in 1646 and studied law, theology, philosophy, and mathematics at the university there, graduating with a bachelor's degree at age 17. After earning his doctorate in law at age 20, Leibniz entered the diplomatic service and spent most of his life traveling to the capitals of Europe on political missions. In particular, he worked to avert a French military threat against Germany and attempted to reconcile the Catholic and Protestant churches.*

*His serious study of mathematics did not begin until 1672 while he was on a diplomatic mission in Paris. There he built a calculating machine and met scientists, like Huygens, who directed his attention to the latest developments in mathematics and science. Leibniz sought to develop a symbolic logic and system of notation that would simplify logical reasoning. In particular, the version of calculus that he published in 1684 established the notation and the rules for finding derivatives that we use today.*

*Unfortunately, a dreadful priority dispute arose in the 1690s between the followers of Newton and those of Leibniz as to who had invented calculus first. Leibniz was even accused of plagiarism by members of the Royal Society in England. The truth is that each man invented calculus independently. Newton arrived at his version of calculus first but, because of his fear of controversy, did not publish it immediately. So Leibniz's 1684 account of calculus was the first to be published.*

**The notation war legacy.** The Newton-Leibniz priority dispute poisoned British mathematics for more than a century. British mathematicians clung to Newton's cumbersome dot notation out of national loyalty, while the rest of Europe embraced Leibniz's $dy/dx$. **Leibniz's notation won on merit** — it's more flexible (easily extends to $dy/dt$, $\partial u/\partial x$, etc.) and its suggestive "ratio of infinitesimals" reading made multivariable calculus and differential equations more natural. Today we use Leibniz's notation everywhere except for time derivatives in physics (still Newton's dot) and compact computation (often Lagrange's prime).

---

## Definition 3 — Differentiability

> **Definition 3.** A function $f$ is **differentiable at $a$** if $f'(a)$ exists. It is **differentiable on an open interval $(a, b)$** [or $(a, \infty)$ or $(-\infty, a)$ or $(-\infty, \infty)$] if it is differentiable at every number in the interval.

**Differentiability is a property of a function at a point or on an interval.** The definition piggybacks on the existence of $f'(a)$ — which is itself a limit. So differentiability at $a$ is equivalent to the existence of the difference-quotient limit at $a$.

**Domain of $f'$.** The natural domain of the derivative function $f'$ is exactly the set of points where $f$ is differentiable.

---

### Example 5 — $f(x) = |x|$ is differentiable everywhere except 0

Where is the function $f(x) = |x|$ differentiable?

***Solution.*** We apply the definition using Equation 2, splitting by the sign of $x$ (since $|x|$ is piecewise-defined).

**Case 1: $x > 0$.** For $h$ small enough, $x + h > 0$ as well, so $|x + h| = x + h$. Then:

$$f'(x) = \lim_{h \to 0}\frac{|x + h| - |x|}{h} = \lim_{h \to 0}\frac{(x + h) - x}{h} = \lim_{h \to 0}\frac{h}{h} = 1$$

So $f$ is differentiable for any $x > 0$, with $f'(x) = 1$.

**Case 2: $x < 0$.** For $h$ small enough, $x + h < 0$ as well, so $|x + h| = -(x + h)$. Then:

$$f'(x) = \lim_{h \to 0}\frac{-(x + h) - (-x)}{h} = \lim_{h \to 0}\frac{-h}{h} = -1$$

So $f$ is differentiable for any $x < 0$, with $f'(x) = -1$.

**Case 3: $x = 0$.** Compute directly:

$$f'(0) = \lim_{h \to 0}\frac{|0 + h| - |0|}{h} = \lim_{h \to 0}\frac{|h|}{h}$$

Compute one-sided limits (from Section 2.3 Example 8):

$$\lim_{h \to 0^+}\frac{|h|}{h} = \lim_{h \to 0^+}\frac{h}{h} = 1$$

$$\lim_{h \to 0^-}\frac{|h|}{h} = \lim_{h \to 0^-}\frac{-h}{h} = -1$$

The two one-sided limits differ, so $\lim_{h \to 0}|h|/h$ does not exist. **Therefore $f'(0)$ does not exist, and $f$ is not differentiable at $0$.**

**Summary.** $|x|$ is differentiable for all $x \neq 0$, with

$$f'(x) = \begin{cases} 1 & \text{if } x > 0 \\ -1 & \text{if } x < 0 \end{cases}$$

> **Figure 5 — Graphs of $|x|$ and its derivative.**
> - **(a):** $y = |x|$ — V-shape with vertex at origin. The two straight sides have slopes $+1$ (right side) and $-1$ (left side). At the vertex, the graph has a **corner**.
> - **(b):** $y = f'(x)$ — piecewise constant: $+1$ for $x > 0$, $-1$ for $x < 0$, with a hole at $x = 0$ (no defined value).

**The geometric diagnosis.** The graph of $|x|$ has a **corner at $x = 0$** — it changes direction abruptly. At a corner, **there is no single tangent line**; the left side "sees" a tangent with slope $-1$ and the right side "sees" slope $+1$. No single number can be "the" tangent slope. **Hence $f'(0)$ fails to exist.**

**This is the "sign function" $\text{sgn}(x)$ from Section 2.3 Exercise 45** — now seen as the derivative of $|x|$ (wherever defined). In ML, $|x|$ is the L1 loss function; its derivative is the sign function; this is why L1 regularization (LASSO) has the famous "shrink to exactly zero" behavior — the sign-function discontinuity at 0 creates a kink in the loss that pulls solutions to sparse zero values.

---

## What Unit 1 established

- $f'$ is a **function in its own right** — domain $=$ where $f'(a)$ exists — not just a number at a single point.
- **Graphical differentiation** lets you sketch $f'$ from a graph of $f$ by estimating tangent slopes at several $x$-values.
- **Algebraic differentiation** uses Equation 2 and factor-and-cancel to produce a formula.
- **Rationalization** handles radical-function derivatives (Example 3).
- **Rational functions** use common-denominator arithmetic (Example 4).
- **Leibniz's $dy/dx$, Lagrange's $f'$, operator $D$, Newton's dot** — four flavors of the same thing.
- **Differentiability** requires the difference-quotient limit to exist — and fails at **corners**.

---

*End of Unit 1 of Section 2.8. Unit 2 covers the relationship between differentiability and continuity (Theorem 4), the three canonical modes of differentiability failure (corner, discontinuity, vertical tangent), higher derivatives (including acceleration and jerk), and all 57 exercises of Section 2.8.*
