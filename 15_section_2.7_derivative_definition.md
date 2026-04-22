# Section 2.7 — Derivatives and Rates of Change (Part A): The Tangent Problem, Velocity, and the Definition of the Derivative

*Covers pp. 143–147 top of the book (PDF pp. 171 bottom – 175 top). The payoff section. Everything from Sections 2.1–2.6 has been building toward this: the rigorous definition of the derivative as the limit of difference quotients. The tangent-slope problem of Section 2.1 comes full circle, the velocity problem is reconciled with it, and we finally give a name to the shared underlying concept — the derivative $f'(a)$.*

---

## Section 2.7 — Derivatives and Rates of Change

The problem of finding the tangent line to a curve and the problem of finding the velocity of an object both involve finding the same type of limit, as we saw in Section 2.1. This special type of limit is called a **derivative** and we will see that it can be interpreted as a rate of change in any of the sciences or engineering.

---

## Tangents

If a curve $C$ has equation $y = f(x)$ and we want to find the tangent line to $C$ at the point $P(a, f(a))$, then we consider a nearby point $Q(x, f(x))$, where $x \neq a$, and compute the slope of the secant line $PQ$:

$$m_{PQ} = \frac{f(x) - f(a)}{x - a}$$

Then we let $Q$ approach $P$ along the curve $C$ by letting $x$ approach $a$. If $m_{PQ}$ approaches a number $m$, then we define the **tangent $t$ to be the line through $P$ with slope $m$** — this amounts to saying that the tangent line is the limiting position of the secant line $PQ$ as $Q$ approaches $P$.

> **Figure 1 — The tangent-as-limit picture.** Curve $y = f(x)$ with two points $P(a, f(a))$ (fixed) and $Q(x, f(x))$ (moving). As $x \to a$, $Q \to P$ and the secant line $PQ$ rotates toward the tangent line $t$ at $P$. **Conceptually:** the tangent is the secant's limiting position.

```plot
{
  "title": "Figure 1 — tangent at P as the limiting secant PQ (y = f(x) generic)",
  "width": 540, "height": 340,
  "xRange": [-0.5, 4], "yRange": [-0.5, 4.5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "0.3*x*x - 0.1*x + 0.6", "domain": [-0.5, 4], "color": "#1f2430", "width": 2.2}
  ],
  "lines": [
    {"from": [-0.3, 1.86], "to": [4, 0.14], "color": "#2867b2", "width": 1.6},
    {"from": [-0.3, -0.38], "to": [4, 4.05], "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 1, "y": 0.8, "style": "filled", "color": "#b04a2f", "label": "P(a, f(a))", "labelDx": -10, "labelDy": -8, "labelAnchor": "end"},
    {"x": 3, "y": 3,   "style": "filled", "color": "#2867b2", "label": "Q(x, f(x))", "labelDx": 10,  "labelDy": -8}
  ],
  "annotations": [
    {"x": 3.9, "y": 4.3, "text": "tangent t", "color": "#b04a2f", "italic": false, "anchor": "end"},
    {"x": 3.9, "y": 0.45, "text": "secant PQ", "color": "#2867b2", "italic": false, "anchor": "end"}
  ],
  "caption": "As Q slides down the curve toward P, the secant rotates into the tangent t. Slope of t = lim_{x→a} (f(x) − f(a))/(x − a)."
}
```

### Definition 1 — Tangent Line

> **Definition 1.** The **tangent line** to the curve $y = f(x)$ at the point $P(a, f(a))$ is the line through $P$ with slope
> $$m = \lim_{x \to a}\frac{f(x) - f(a)}{x - a}$$
> provided that this limit exists.

---

### Example 1 — Tangent to $y = x^2$ at $(1, 1)$: the Section 2.1 problem solved rigorously

Find an equation of the tangent line to the parabola $y = x^2$ at the point $P(1, 1)$.

***Solution.*** With $a = 1$ and $f(x) = x^2$, the slope is:

$$m = \lim_{x \to 1}\frac{f(x) - f(1)}{x - 1} = \lim_{x \to 1}\frac{x^2 - 1}{x - 1}$$

Factor the difference of squares:

$$= \lim_{x \to 1}\frac{(x - 1)(x + 1)}{x - 1} = \lim_{x \to 1}(x + 1) = 1 + 1 = 2$$

Using the point-slope form of the equation of a line (point $(1, 1)$, slope $2$):

$$y - 1 = 2(x - 1) \quad \text{or} \quad \boxed{\; y = 2x - 1 \;}$$

**This confirms the guess we made in Example 1 of Section 2.1.** What was "the limit of slopes of secant lines, numerically" there is now the rigorous Definition 1.

### The "zooming-in" intuition

We sometimes refer to the slope of the tangent line to a curve at a point as the **slope of the curve** at the point. The idea: **if we zoom in far enough toward the point, the curve looks almost like a straight line.**

> **Figure 2 — Zooming in on $(1, 1)$ for $y = x^2$.** Three viewing rectangles, each zooming closer to the point: $[0, 2] \times [0, 2]$, $[0.5, 1.5] \times [0.5, 1.5]$, $[0.9, 1.1] \times [0.9, 1.1]$. As we zoom in, the parabola becomes nearly indistinguishable from a straight line with slope 2. **Conceptually: at sufficiently small scale, smooth curves are locally linear.**

```plot
{
  "title": "Figure 2(i) — y = x² in window [0, 2] × [0, 2]",
  "width": 420, "height": 260,
  "xRange": [0, 2], "yRange": [0, 2],
  "xStep": 0.5, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x",      "domain": [0, 2],   "color": "#b04a2f", "width": 2.2},
    {"fn": "2*x - 1",  "domain": [0, 2],   "color": "#2867b2", "width": 1.6, "dash": "3 3"}
  ],
  "points": [{"x": 1, "y": 1, "style": "filled", "color": "#1f2430", "label": "(1, 1)", "labelDx": 8, "labelDy": -6}],
  "caption": "Full shape of the parabola; tangent y = 2x − 1 shown dashed."
}
```

```plot
{
  "title": "Figure 2(ii) — zoom [0.5, 1.5] × [0.5, 1.5]",
  "width": 420, "height": 260,
  "xRange": [0.5, 1.5], "yRange": [0.5, 1.5],
  "xStep": 0.25, "yStep": 0.25,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x",     "domain": [0.5, 1.5], "color": "#b04a2f", "width": 2.2},
    {"fn": "2*x - 1", "domain": [0.5, 1.5], "color": "#2867b2", "width": 1.6, "dash": "3 3"}
  ],
  "points": [{"x": 1, "y": 1, "style": "filled", "color": "#1f2430"}],
  "caption": "Parabola and tangent have started to blend."
}
```

```plot
{
  "title": "Figure 2(iii) — zoom [0.9, 1.1] × [0.9, 1.1]",
  "width": 420, "height": 260,
  "xRange": [0.9, 1.1], "yRange": [0.9, 1.1],
  "xStep": 0.05, "yStep": 0.05,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x",     "domain": [0.9, 1.1], "color": "#b04a2f", "width": 2.2},
    {"fn": "2*x - 1", "domain": [0.9, 1.1], "color": "#2867b2", "width": 1.6, "dash": "3 3"}
  ],
  "points": [{"x": 1, "y": 1, "style": "filled", "color": "#1f2430"}],
  "caption": "Indistinguishable by eye — smooth curves are locally linear, and that slope is the derivative f'(1) = 2."
}
```

*Margin note: TEC Visual 2.7 shows an animation of Figure 2.*

**This "locally linear" property is the core intuition behind derivatives.** Essentially every calculation in Chapter 3 (chain rule, product rule, implicit differentiation) uses this intuition in the form "linearize, compute, combine." In applied math, the linearization is called the *tangent-line approximation* and in numerical methods it's the basis of Newton's method, Euler's method, and the Taylor expansion.

### The alternative (equivalent) formula

There is another expression for the slope of a tangent line that is sometimes easier to use. Let $h = x - a$; then $x = a + h$, and "$x$ approaches $a$" is equivalent to "$h$ approaches 0." The secant slope becomes:

$$m_{PQ} = \frac{f(a + h) - f(a)}{h}$$

**Taking the limit as $h \to 0$:**

$$\tag{2} m = \lim_{h \to 0}\frac{f(a + h) - f(a)}{h}$$

> **Figure 3 — The $h$-based version of the same picture.** Point $P(a, f(a))$ and moving point $Q(a + h, f(a + h))$. The horizontal distance from $P$ to $Q$ is exactly $h$; the vertical change is $f(a + h) - f(a)$. As $h \to 0$, $Q$ slides toward $P$ and the secant approaches the tangent.

```plot
{
  "title": "Figure 3 — the h-version: horizontal run h, vertical rise f(a+h) − f(a)",
  "width": 540, "height": 340,
  "xRange": [-0.5, 4], "yRange": [-0.5, 4.5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "0.3*x*x - 0.1*x + 0.6", "domain": [-0.5, 4], "color": "#1f2430", "width": 2.2}
  ],
  "lines": [
    {"from": [-0.3, 1.86], "to": [4, 0.14], "color": "#2867b2", "width": 1.6},
    {"type": "vertical",   "x": 3, "yRange": [0.8, 3],   "color": "#888", "dash": "3 3"},
    {"type": "horizontal", "y": 0.8, "xRange": [1, 3],   "color": "#888", "dash": "3 3"}
  ],
  "points": [
    {"x": 1, "y": 0.8, "style": "filled", "color": "#b04a2f", "label": "P(a, f(a))",          "labelDx": -10, "labelDy": -8, "labelAnchor": "end"},
    {"x": 3, "y": 3,   "style": "filled", "color": "#2867b2", "label": "Q(a + h, f(a + h))",  "labelDx": 10,  "labelDy": -8}
  ],
  "annotations": [
    {"x": 2,   "y": 0.45, "text": "h",                    "color": "#1f2430", "italic": true,  "anchor": "middle"},
    {"x": 3.25, "y": 1.95,"text": "f(a + h) − f(a)",      "color": "#1f2430", "italic": false, "anchor": "start"}
  ],
  "caption": "Slope of PQ = rise/run = (f(a + h) − f(a))/h. Let h → 0 and you get the derivative f′(a)."
}
```

**When to use which formula.** Both Definition 1 and Equation 2 give the same answer; they're related by the substitution $x = a + h$. Use whichever is algebraically easier:
- **Definition 1** (with $x \to a$) is natural when $f$ is easy to factor in $(x - a)$.
- **Equation 2** (with $h \to 0$) is natural when $f$ expands nicely — any polynomial, for instance.

Most Chapter 3 derivative rules will use Equation 2.

---

### Example 2 — Tangent to the hyperbola $y = 3/x$ at $(3, 1)$

Find an equation of the tangent line to the hyperbola $y = 3/x$ at the point $(3, 1)$.

***Solution.*** With $f(x) = 3/x$, the slope at $(3, 1)$ is:

$$m = \lim_{h \to 0}\frac{f(3 + h) - f(3)}{h} = \lim_{h \to 0}\frac{\dfrac{3}{3 + h} - 1}{h} = \lim_{h \to 0}\frac{\dfrac{3 - (3 + h)}{3 + h}}{h}$$

$$= \lim_{h \to 0}\frac{-h}{h(3 + h)} = \lim_{h \to 0}\frac{-1}{3 + h} = -\frac{1}{3}$$

An equation of the tangent at $(3, 1)$ (point-slope form):

$$y - 1 = -\tfrac{1}{3}(x - 3)$$

which simplifies to:

$$x + 3y - 6 = 0$$

> **Figure 4 — The hyperbola $y = 3/x$ and its tangent line at $(3, 1)$.** Standard rectangular hyperbola in the first quadrant; the tangent line $x + 3y = 6$ cuts through the point $(3, 1)$ with negative slope $-1/3$. Line $PQ$ has slope $-1/3$; the line crosses axes at $(6, 0)$ and $(0, 2)$.

```plot
{
  "title": "Figure 4 — y = 3/x, tangent at (3, 1) has slope −1/3",
  "width": 520, "height": 340,
  "xRange": [0, 8], "yRange": [-0.5, 4],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "3/x",     "domain": [0.4, 8], "color": "#b04a2f", "width": 2.2, "samples": 400},
    {"fn": "2 - x/3", "domain": [0, 8],   "color": "#2867b2", "width": 2, "dash": "3 3"}
  ],
  "points": [
    {"x": 3, "y": 1, "style": "filled", "color": "#1f2430", "label": "(3, 1)", "labelDx": 10, "labelDy": -6}
  ],
  "annotations": [
    {"x": 7.5, "y": -0.3, "text": "tangent: x + 3y = 6", "color": "#2867b2", "italic": false, "anchor": "end"}
  ],
  "caption": "Just one point of contact: the line y = 2 − x/3 touches the hyperbola only at (3, 1)."
}
```

**The computation pattern.** $3/(3 + h) - 1 = (3 - 3 - h)/(3 + h) = -h/(3 + h)$. Cancel the $h$. Plug in $h = 0$. **This factor-h-then-cancel move is the bread and butter of every derivative calculation in Chapter 3** — it's how you handle the "$0/0$" limit that appears in every difference quotient.

---

## Velocities

In Section 2.1 we investigated the motion of a ball dropped from the CN Tower and defined its velocity to be the limiting value of average velocities over shorter and shorter time periods.

**General setup.** An object moves along a straight line according to an equation of motion $s = f(t)$, where $s$ is the displacement (directed distance) of the object from the origin at time $t$. The function $f$ that describes the motion is called the **position function** of the object.

**Average velocity** over $[a, a + h]$:

$$\text{average velocity} = \frac{\text{displacement}}{\text{time}} = \frac{f(a + h) - f(a)}{h}$$

**Compare with Figure 6 (which has $P(a, f(a))$ and $Q(a + h, f(a + h))$ on the position-vs-time graph):** this is the same as the slope of the secant line $PQ$.

### Definition: instantaneous velocity

Now suppose we compute the average velocities over shorter and shorter time intervals $[a, a + h]$. We let $h \to 0$.

> **Equation 3 — Instantaneous velocity.** We define the **velocity (or instantaneous velocity) $v(a)$ at time $t = a$** to be the limit of these average velocities:
> $$v(a) = \lim_{h \to 0}\frac{f(a + h) - f(a)}{h}$$

**This means: the velocity at time $t = a$ is equal to the slope of the tangent line at $P$** (compare Equations 2 and 3). They're the *same formula*.

---

### Example 3 — CN Tower ball revisited, rigorously

Suppose that a ball is dropped from the upper observation deck of the CN Tower, 450 m above the ground.
- (a) What is the velocity of the ball after 5 seconds?
- (b) How fast is the ball traveling when it hits the ground?

***Solution.*** Recall from Section 2.1 that the distance (in meters) fallen after $t$ seconds is $s = f(t) = 4.9\,t^2$. **Find the general velocity at time $t = a$** first:

$$v(a) = \lim_{h \to 0}\frac{f(a + h) - f(a)}{h} = \lim_{h \to 0}\frac{4.9(a + h)^2 - 4.9\,a^2}{h}$$

Expand $(a + h)^2 = a^2 + 2ah + h^2$:

$$= \lim_{h \to 0}\frac{4.9(a^2 + 2ah + h^2 - a^2)}{h} = \lim_{h \to 0}\frac{4.9(2ah + h^2)}{h}$$

Factor $h$ and cancel:

$$= \lim_{h \to 0}4.9(2a + h) = 9.8\,a$$

**So $v(a) = 9.8\,a$.** The velocity at any time is proportional to the time elapsed, with proportionality constant $g = 9.8$ m/s² — **this is the acceleration of gravity.** Derived from first principles.

**(a) At $t = 5$:** $v(5) = 9.8(5) = 49$ m/s. ✓ (matches Section 2.1's numerical guess)

**(b) When does the ball hit the ground?** Solve $s(t_1) = 450$:

$$4.9\,t_1^2 = 450 \implies t_1^2 = \frac{450}{4.9} \implies t_1 = \sqrt{\frac{450}{4.9}} \approx 9.6 \text{ s}$$

**Velocity at ground impact:**

$$v(t_1) = 9.8\,t_1 = 9.8 \cdot \sqrt{\frac{450}{4.9}} \approx 94 \text{ m/s}$$

**Conversion:** 94 m/s ≈ 210 mph. The ball hits the ground at roughly 210 mph. (No air resistance — of course, in reality, terminal velocity would be much less.)

**The computation is rigorous now.** Section 2.1's "we seem to approach 49 m/s" is replaced by algebraic verification: $v(a) = 9.8a$, full stop.

---

## Derivatives — the Unification

We have seen that the same type of limit arises in finding the slope of a tangent line (Equation 2) or the velocity of an object (Equation 3). In fact, limits of the form

$$\lim_{h \to 0}\frac{f(a + h) - f(a)}{h}$$

**arise whenever we calculate a rate of change in any of the sciences or engineering** — such as a rate of reaction in chemistry or a marginal cost in economics. Since this type of limit occurs so widely, it deserves a name and notation.

### Definition 4 — The Derivative

> **Definition 4 — The derivative of a function $f$ at a number $a$.**
> $$f'(a) = \lim_{h \to 0}\frac{f(a + h) - f(a)}{h}$$
> if this limit exists.

**Notation reading.** $f'(a)$ is read "$f$ prime of $a$." Other notations for the same thing (you'll meet them in Chapter 3) include:
- $\dfrac{df}{dx}\bigg|_{x=a}$ (Leibniz notation, evaluated at $a$)
- $Df(a)$ (operator notation)
- $\dot{f}(a)$ (Newton's dot notation — still used in physics)

**All four notations mean the same thing.** Leibniz is standard in calculus / numerical analysis; Newton's dot is the convention for time derivatives in physics and mechanical engineering.

### Equivalent alternative form

If we write $x = a + h$, then $h = x - a$, and $h \to 0$ if and only if $x \to a$. Therefore Definition 4 is equivalent to:

$$\tag{5} f'(a) = \lim_{x \to a}\frac{f(x) - f(a)}{x - a}$$

This is the "Definition 1" form. Both definitions give the same $f'(a)$.

---

### Example 4 — Derivative of $f(x) = x^2 - 8x + 9$ at a general point

Find the derivative of the function $f(x) = x^2 - 8x + 9$ at the number $a$.

***Solution.*** Using Definition 4:

$$f'(a) = \lim_{h \to 0}\frac{f(a + h) - f(a)}{h} = \lim_{h \to 0}\frac{[(a + h)^2 - 8(a + h) + 9] - [a^2 - 8a + 9]}{h}$$

Expand $(a + h)^2 = a^2 + 2ah + h^2$ and $-8(a + h) = -8a - 8h$:

$$= \lim_{h \to 0}\frac{a^2 + 2ah + h^2 - 8a - 8h + 9 - a^2 + 8a - 9}{h}$$

$$= \lim_{h \to 0}\frac{2ah + h^2 - 8h}{h}$$

Factor $h$ and cancel:

$$= \lim_{h \to 0}(2a + h - 8) = 2a - 8$$

**So $f'(a) = 2a - 8$.**

**What this tells us.** The derivative $f'$ is itself a function of $a$ — specifically $f'(a) = 2a - 8$. At any point $a$, we can read off the slope of the tangent to $y = x^2 - 8x + 9$ as simply $2a - 8$.

**Pattern foreshadowed:** the function $x^2 - 8x + 9$ differentiates to $2x - 8$. **The derivative of $x^2$ is $2x$; the derivative of $-8x$ is $-8$; the derivative of the constant $9$ is $0$.** These are the Power Rule, Constant Multiple Rule, and Constant Rule from Chapter 3, which you'd re-derive in Chapter 3 by the same ε-δ-style algebraic manipulation.

---

## The Tangent–Derivative Connection

We defined the tangent line to the curve $y = f(x)$ at the point $P(a, f(a))$ to be the line that passes through $P$ and has slope $m$ given by Equation 1 or 2. Since, by Definition 4, this is the same as the derivative $f'(a)$, we can now say the following:

> **Tangent–derivative equivalence.** The tangent line to $y = f(x)$ at $(a, f(a))$ is the line through $(a, f(a))$ whose slope is equal to $f'(a)$, the derivative of $f$ at $a$.

Using the point-slope form, the tangent-line equation is:

$$y - f(a) = f'(a)(x - a)$$

---

### Example 5 — Tangent line to $y = x^2 - 8x + 9$ at $(3, -6)$

Find an equation of the tangent line to the parabola $y = x^2 - 8x + 9$ at the point $(3, -6)$.

***Solution.*** From Example 4, $f'(a) = 2a - 8$. So at $a = 3$:

$$f'(3) = 2(3) - 8 = -2$$

**Tangent line equation** using point-slope form at $(3, -6)$:

$$y - (-6) = -2(x - 3) \implies y + 6 = -2x + 6 \implies y = -2x$$

**So the tangent line is $y = -2x$.**

> **Figure 7 — Graph of $y = x^2 - 8x + 9$ and its tangent line at $(3, -6)$.** The parabola opens upward (minimum somewhere around $x = 4$); the tangent line $y = -2x$ passes through the origin and hits the parabola at $(3, -6)$ with negative slope. The line just touches — doesn't cross — the parabola at that one point.

```plot
{
  "title": "Figure 7 — y = x² − 8x + 9 and its tangent y = −2x at (3, −6)",
  "width": 540, "height": 340,
  "xRange": [-1, 8], "yRange": [-12, 6],
  "xStep": 1, "yStep": 2,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x - 8*x + 9", "domain": [-1, 8], "color": "#b04a2f", "width": 2.2},
    {"fn": "-2*x",          "domain": [-1, 8], "color": "#2867b2", "width": 2,   "dash": "3 3"}
  ],
  "points": [
    {"x": 3, "y": -6, "style": "filled", "color": "#1f2430", "label": "(3, −6)", "labelDx": 10, "labelDy": 14},
    {"x": 4, "y": -7, "style": "filled", "color": "#5b6477", "label": "vertex (4, −7)", "labelDx": 10, "labelDy": 14}
  ],
  "annotations": [
    {"x": 7.8, "y": -10, "text": "tangent y = −2x",  "color": "#2867b2", "italic": false, "anchor": "end"}
  ],
  "caption": "f′(3) = 2(3) − 8 = −2. The tangent at (3, −6) is y − (−6) = −2(x − 3), i.e. y = −2x."
}
```

**This is how derivative machinery streamlines tangent-line calculation.** Instead of computing a new limit for each tangent (as in Example 2 where we redid all the work), we compute $f'(a)$ once as a function of $a$, then plug in. **Reusability is the whole point.** Once you have the derivative as a function, every tangent line is a fill-in-the-blank.

---

## The Computational Preview

Everything in Chapter 3 (which covers the differentiation rules) starts from Definition 4. In Chapter 3, you'll derive:

- **Power Rule:** $\dfrac{d}{dx}(x^n) = n\,x^{n-1}$. From Example 4, you've basically seen why: $f(x) = x^2$ gives $f'(a) = 2a$. The pattern generalizes.
- **Sum / Difference Rules:** the derivative of a sum is the sum of derivatives. Already obvious from Definition 4 and Sum Law of limits.
- **Constant Multiple / Constant Rules:** $\dfrac{d}{dx}(c f) = c\,f'$ and $\dfrac{d}{dx}(c) = 0$.
- **Product Rule, Quotient Rule, Chain Rule** — require more work.
- **Derivatives of trig, exponential, logarithmic functions** — each derived from Definition 4 applied to that specific function class.

**None of it is magic.** Every rule in Chapter 3 comes from applying Definition 4 to a specific function and simplifying. The computations you did in Example 4 here are the prototype.

---

## For your quant track — what derivatives mean in practice

A derivative $f'(a)$ always means the same thing: **"how fast does $f$ change per unit change in its input, when input is near $a$."** Context-specific interpretations:

| $f$ | $f'$ | Name |
|:---|:---|:---|
| Option value as function of underlying | $\partial V/\partial S$ | **Delta** |
| Option value as function of volatility | $\partial V/\partial \sigma$ | **Vega** |
| Option value as function of time to expiry | $\partial V/\partial t$ | **Theta** |
| Option value as function of interest rate | $\partial V/\partial r$ | **Rho** |
| Bond price as function of yield | $-\partial P/\partial y \cdot (1/P)$ | **Duration** (with sign flip) |
| Cost as function of production | $dC/dx$ | **Marginal cost** |
| Position as function of time | $ds/dt$ | **Velocity** |
| Mass as function of spatial position | $dm/dx$ | **Linear density** |
| Price as function of time | $dp/dt$ | **Instantaneous rate of change of price** |

**Every Greek in option pricing is a derivative.** The Black-Scholes formula gives you $V(S, \sigma, t, r, K)$ as a function of 5 variables; computing $V_S, V_\sigma, V_t, V_r$ (partial derivatives) gives you Delta, Vega, Theta, Rho. **The formal definition of the derivative via Equation 2 is exactly what you use to compute these.**

Everything else in Chapter 3 onward (chain rule, product rule, multivariable derivatives in Chapter 14) extends this machinery — but the foundational definition is Equation 2.

---

*End of Unit 1 of Section 2.7. Unit 2 covers the second interpretation of derivatives as instantaneous rates of change, Examples 6–9 (including real-world applications), and all Section 2.7 exercises.*
