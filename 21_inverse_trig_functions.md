# Section 1.6 — Inverse Trigonometric Functions

*Covers pp. 67 bottom – 70 top of the book (PDF pp. 95 mid – 98 top). The inverses of the six trigonometric functions: arcsine, arccosine, arctangent, and the less-used arccsc/arcsec/arccot. Includes Examples 12–13 and all six graphs.*

---

## Inverse Trigonometric Functions

When we try to find inverses of trigonometric functions, we run into an immediate problem: **the trig functions are periodic, so they're not one-to-one** — horizontal lines cross them infinitely many times.

**The fix: restrict the domain** to an interval on which the function *is* one-to-one, then take the inverse of the restricted function. The choice of restriction is conventional, not unique, and different authors sometimes choose different ranges for $\sec^{-1}$ and $\csc^{-1}$ (we'll come back to this).

---

## Inverse Sine (Arcsine)

You can see from Figure 17 that the sine function is not one-to-one (HLT fails):

> **Figure 17 — $y = \sin x$.** Standard sine wave, oscillating between $-1$ and $1$. Any horizontal line at height $c \in (-1, 1)$ crosses it infinitely many times.

```plot
{
  "title": "Figure 17 — y = sin x  (not one-to-one)",
  "width": 540, "height": 260,
  "xRange": [-7, 7], "yRange": [-1.5, 1.5],
  "xStep": 1.5707963267948966, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sin(x)", "color": "#b04a2f", "width": 2}
  ],
  "lines": [
    {"type": "horizontal", "y": 0.5, "color": "#2867b2", "dash": "5 4"}
  ],
  "annotations": [
    {"x": 6.5, "y": 0.7, "text": "y = ½ — infinitely many crossings", "color": "#2867b2", "anchor": "end", "italic": false}
  ]
}
```

### The restriction

But the function $f(x) = \sin x$, restricted to $-\pi/2 \leq x \leq \pi/2$, **is** one-to-one:

> **Figure 18 — $y = \sin x$ restricted to $[-\pi/2, \pi/2]$.** Just one increasing arc of the sine wave — from $(-\pi/2, -1)$ through the origin up to $(\pi/2, 1)$. Passes the HLT.

```plot
{
  "title": "Figure 18 — y = sin x  on  [−π/2, π/2]  (one-to-one)",
  "width": 460, "height": 320,
  "xRange": [-2, 2], "yRange": [-1.5, 1.5],
  "xStep": 0.5235987755982989, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sin(x)", "domain": [-1.5707963267948966, 1.5707963267948966], "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": -1.5707963267948966, "y": -1, "style": "filled", "color": "#1f2430", "label": "(−π/2, −1)", "labelDx": 8,  "labelDy": 14},
    {"x":  1.5707963267948966, "y":  1, "style": "filled", "color": "#1f2430", "label": "(π/2, 1)",   "labelDx": -8, "labelDy": -8}
  ]
}
```

The inverse function of this restricted sine function exists and is denoted by $\sin^{-1}$ or $\arcsin$. It is called the **inverse sine function** or the **arcsine function**.

> **Definition of arcsine.**
> $$\sin^{-1} x = y \quad \Longleftrightarrow \quad \sin y = x \ \text{ and } \ -\frac{\pi}{2} \leq y \leq \frac{\pi}{2}$$

**Reading this.** If $-1 \leq x \leq 1$, then $\sin^{-1} x$ is **the unique number in $[-\pi/2, \pi/2]$ whose sine is $x$**. The range restriction is essential — it's what makes the inverse well-defined.

*Margin note:* **CAUTION.** $\sin^{-1} x \neq \dfrac{1}{\sin x}$. The $-1$ is not an exponent; it's inverse-function notation.

---

### Example 12 — Evaluating arcsine expressions

Evaluate (a) $\sin^{-1}(1/2)$ and (b) $\tan(\arcsin\tfrac{1}{3})$.

***Solution.***

**(a)** We need the number in $[-\pi/2, \pi/2]$ whose sine is $\tfrac{1}{2}$. That number is $\pi/6$:

$$\sin^{-1}\!\left(\tfrac{1}{2}\right) = \frac{\pi}{6}$$

because $\sin(\pi/6) = \tfrac{1}{2}$ and $\pi/6 \in [-\pi/2, \pi/2]$.

**(b)** Let $\theta = \arcsin\tfrac{1}{3}$, so $\sin\theta = \tfrac{1}{3}$ with $\theta \in [-\pi/2, \pi/2]$ (so in this case $\theta \in [0, \pi/2]$, first quadrant). Draw a right triangle with angle $\theta$, opposite side $1$, and hypotenuse $3$.

> **Figure 19 — Right triangle for Example 12(b).** Angle $\theta$ at the lower-left vertex; opposite side of length 1 (vertical leg); hypotenuse of length 3 (slanting side). The adjacent side (horizontal leg) is to be computed.

<figure class="plot-figure">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 240" role="img" aria-label="Right triangle with hypotenuse 3, opposite side 1, adjacent side 2√2">
  <g fill="none" stroke="#1f2430" stroke-width="2" stroke-linejoin="round">
    <polygon points="50,190 310,190 310,97.5" fill="#fdfcf6"/>
    <polyline points="296,190 296,176 310,176" stroke-width="1.4"/>
  </g>
  <g font-family="'Times New Roman', Times, serif" font-size="16" font-style="italic" fill="#1f2430">
    <text x="180" y="208" text-anchor="middle">2√2  (adjacent)</text>
    <text x="320" y="146" text-anchor="start">1  (opposite)</text>
    <text x="165" y="132" text-anchor="middle" fill="#b04a2f">3  (hypotenuse)</text>
    <path d="M 80 190 A 30 30 0 0 0 73.5 177" fill="none" stroke="#b04a2f" stroke-width="1.4"/>
    <text x="86" y="182" font-size="17" fill="#b04a2f">θ</text>
  </g>
</svg>
<figcaption>sin θ = 1/3 places θ in a right triangle with opposite 1 and hypotenuse 3. Pythagoras gives the adjacent side 2√2, so tan θ = 1/(2√2).</figcaption>
</figure>

By the Pythagorean theorem:

$$\text{adjacent} = \sqrt{3^2 - 1^2} = \sqrt{9 - 1} = \sqrt{8} = 2\sqrt{2}$$

Therefore

$$\tan(\arcsin\tfrac{1}{3}) = \tan\theta = \frac{\text{opposite}}{\text{adjacent}} = \frac{1}{2\sqrt{2}}$$

**The right-triangle technique.** Whenever you need a trig function of an inverse trig function — $\cos(\arcsin x)$, $\sec(\arctan x)$, $\sin(\arccos x)$, etc. — the fastest approach is:
1. Let $\theta$ be the inverse trig expression.
2. Extract the trig function of $\theta$ you know (from the definition of the inverse).
3. Draw a right triangle realizing that relationship.
4. Use Pythagoras to fill in the missing side.
5. Read off any trig function of $\theta$ from the triangle.

This works for any simplification of $\text{trig}(\text{arctrig}(x))$ and is much faster than manipulating identities.

---

### Cancellation equations for arcsine

The inverse-function cancellation equations (Unit 1) applied to $\sin$ and $\sin^{-1}$:

$$\sin^{-1}(\sin x) = x \quad \text{for} \ -\frac{\pi}{2} \leq x \leq \frac{\pi}{2}$$
$$\sin(\sin^{-1} x) = x \quad \text{for} \ -1 \leq x \leq 1$$

**The domain restriction in the first equation is critical.** If $x$ is outside $[-\pi/2, \pi/2]$, then $\sin^{-1}(\sin x) \neq x$. For example, $\sin^{-1}(\sin \pi) = \sin^{-1}(0) = 0 \neq \pi$ — because $\sin^{-1}$ always outputs a value in $[-\pi/2, \pi/2]$, so it collapses $\pi$ back to $0$.

### Graph of arcsine

$$\text{domain of } \sin^{-1} = [-1, 1], \qquad \text{range of } \sin^{-1} = [-\pi/2, \pi/2]$$

> **Figure 20 — $y = \sin^{-1} x = \arcsin x$.** The restricted sine curve (Figure 18) reflected across the line $y = x$. Passes through $(-1, -\pi/2)$, $(0, 0)$, $(1, \pi/2)$. S-shape restricted to a bounded domain, with **endpoints** rather than asymptotes.

```plot
{
  "title": "Figure 20 — y = arcsin x",
  "width": 460, "height": 360,
  "xRange": [-1.5, 1.5], "yRange": [-2, 2],
  "xStep": 0.5, "yStep": 0.5235987755982989,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "asin(x)", "domain": [-1, 1], "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": -1, "y": -1.5707963267948966, "style": "filled", "color": "#1f2430", "label": "(−1, −π/2)", "labelDx": 8, "labelDy": 14},
    {"x":  0, "y":  0, "style": "filled", "color": "#1f2430"},
    {"x":  1, "y":  1.5707963267948966, "style": "filled", "color": "#1f2430", "label": "(1, π/2)",  "labelDx": -8, "labelDy": -8}
  ]
}
```

---

## Inverse Cosine (Arccosine)

The inverse cosine function is handled similarly, but with a different domain restriction on $\cos$ — we pick $[0, \pi]$ because cosine is one-to-one (decreasing) there.

> **Figure 21 — $y = \cos x$ restricted to $[0, \pi]$.** Starts at $(0, 1)$, decreases smoothly through $(\pi/2, 0)$, down to $(\pi, -1)$.

```plot
{
  "title": "Figure 21 — y = cos x  on  [0, π]  (one-to-one, decreasing)",
  "width": 460, "height": 320,
  "xRange": [-0.5, 3.5], "yRange": [-1.5, 1.5],
  "xStep": 0.5235987755982989, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "cos(x)", "domain": [0, 3.141592653589793], "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 0,                  "y":  1, "style": "filled", "color": "#1f2430", "label": "(0, 1)",   "labelDx": 8, "labelDy": -8},
    {"x": 1.5707963267948966, "y":  0, "style": "filled", "color": "#1f2430", "label": "(π/2, 0)", "labelDx": 8, "labelDy": -8},
    {"x": 3.141592653589793,  "y": -1, "style": "filled", "color": "#1f2430", "label": "(π, −1)",  "labelDx": -8, "labelDy": -8}
  ]
}
```

> **Definition of arccosine.**
> $$\cos^{-1} x = y \quad \Longleftrightarrow \quad \cos y = x \ \text{ and } \ 0 \leq y \leq \pi$$

### Cancellation equations

$$\cos^{-1}(\cos x) = x \quad \text{for} \ 0 \leq x \leq \pi$$
$$\cos(\cos^{-1} x) = x \quad \text{for} \ -1 \leq x \leq 1$$

### Graph of arccosine

$$\text{domain of } \cos^{-1} = [-1, 1], \qquad \text{range of } \cos^{-1} = [0, \pi]$$

> **Figure 22 — $y = \cos^{-1} x = \arccos x$.** Starts at $(-1, \pi)$, decreases smoothly through $(0, \pi/2)$, down to $(1, 0)$. This is the reflection of restricted cosine (Figure 21) across $y = x$.

```plot
{
  "title": "Figure 22 — y = arccos x",
  "width": 460, "height": 360,
  "xRange": [-1.5, 1.5], "yRange": [-0.5, 3.5],
  "xStep": 0.5, "yStep": 0.5235987755982989,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "acos(x)", "domain": [-1, 1], "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": -1, "y": 3.141592653589793,  "style": "filled", "color": "#1f2430", "label": "(−1, π)",   "labelDx": 8,  "labelDy": -8},
    {"x":  0, "y": 1.5707963267948966, "style": "filled", "color": "#1f2430", "label": "(0, π/2)",  "labelDx": 8,  "labelDy": -8},
    {"x":  1, "y": 0,                  "style": "filled", "color": "#1f2430", "label": "(1, 0)",    "labelDx": -8, "labelDy": -8}
  ]
}
```

**Note — range $[0, \pi]$, not $[-\pi/2, \pi/2]$.** Arccosine and arcsine use *different* output ranges. Arcsine outputs values from $-\pi/2$ to $\pi/2$; arccosine outputs values from $0$ to $\pi$. Don't conflate them — asking "what's $\arccos(-1/2)$?" is asking "what angle in $[0, \pi]$ has cosine $-1/2$?" — the answer is $2\pi/3$, not $-\pi/3$.

---

## Inverse Tangent (Arctangent)

The tangent function can be made one-to-one by restricting it to $(-\pi/2, \pi/2)$ — the interval between consecutive vertical asymptotes.

> **Figure 23 — $y = \tan x$ restricted to $(-\pi/2, \pi/2)$.** Ascending curve from $-\infty$ (near $x = -\pi/2^+$) through the origin up to $+\infty$ (near $x = \pi/2^-$). Vertical asymptotes at $x = \pm \pi/2$ (shown as dashed lines).

```plot
{
  "title": "Figure 23 — y = tan x  on  (−π/2, π/2)",
  "width": 460, "height": 380,
  "xRange": [-2, 2], "yRange": [-6, 6],
  "xStep": 0.5235987755982989, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "tan(x)", "domain": [-1.5, 1.5], "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "vertical", "x": -1.5707963267948966, "color": "#888", "dash": "5 4"},
    {"type": "vertical", "x":  1.5707963267948966, "color": "#888", "dash": "5 4"}
  ]
}
```

> **Definition of arctangent.**
> $$\tan^{-1} x = y \quad \Longleftrightarrow \quad \tan y = x \ \text{ and } \ -\frac{\pi}{2} < y < \frac{\pi}{2}$$

**Strict inequality this time**, because $\tan(\pm \pi/2)$ is undefined.

---

### Example 13 — Simplifying $\cos(\tan^{-1} x)$

Simplify $\cos(\tan^{-1} x)$.

***Solution 1 — using identities.*** Let $y = \tan^{-1} x$, so $\tan y = x$ and $-\pi/2 < y < \pi/2$. We want $\cos y$, but it's easier to find $\sec y$ first:

$$\sec^2 y = 1 + \tan^2 y = 1 + x^2$$

Since $y \in (-\pi/2, \pi/2)$, $\sec y > 0$, so:

$$\sec y = \sqrt{1 + x^2}$$

Therefore

$$\cos(\tan^{-1} x) = \cos y = \frac{1}{\sec y} = \frac{1}{\sqrt{1 + x^2}}$$

***Solution 2 — using a right triangle.*** Let $y = \tan^{-1} x$, so $\tan y = x$. Draw a right triangle with the angle $y$, opposite side $x$, and adjacent side $1$ (so that $\tan y = \text{opp}/\text{adj} = x/1 = x$).

> **Figure 24 — Right triangle for Example 13.** Angle $y$ at the lower-left vertex; adjacent leg (horizontal) of length 1; opposite leg (vertical) of length $x$; hypotenuse of length $\sqrt{1 + x^2}$ (by Pythagoras).

Then read off:

$$\cos(\tan^{-1} x) = \cos y = \frac{\text{adjacent}}{\text{hypotenuse}} = \frac{1}{\sqrt{1 + x^2}}$$

**Why this identity appears so often.** $\cos(\tan^{-1} x) = 1/\sqrt{1 + x^2}$ is one of the most useful trigonometric identities in calculus. You'll see it in:
- **The substitution $x = \tan\theta$** for integrals involving $\sqrt{1 + x^2}$ (trigonometric substitution, Chapter 7).
- **Derivative of $\arctan$** (Chapter 3): $\frac{d}{dx}\arctan x = \frac{1}{1 + x^2}$, derived using exactly this identity.
- **Unit-vector normalization** in 2D geometry: a slope-$x$ direction has unit vector $\left(\cos(\arctan x), \sin(\arctan x)\right) = \left(\frac{1}{\sqrt{1+x^2}}, \frac{x}{\sqrt{1+x^2}}\right)$.

### Graph of arctangent

$$\text{domain of } \tan^{-1} = \mathbb{R}, \qquad \text{range of } \tan^{-1} = (-\pi/2, \pi/2)$$

> **Figure 25 — $y = \tan^{-1} x = \arctan x$.** Smooth ascending S-curve through the origin. Has **horizontal asymptotes** at $y = \pi/2$ (as $x \to \infty$) and $y = -\pi/2$ (as $x \to -\infty$), shown as dashed horizontal lines. The reflection-across-$y=x$ of Figure 23: vertical asymptotes of $\tan$ become horizontal asymptotes of $\arctan$.

```plot
{
  "title": "Figure 25 — y = arctan x",
  "width": 540, "height": 320,
  "xRange": [-8, 8], "yRange": [-2, 2],
  "xStep": 1, "yStep": 0.5235987755982989,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "atan(x)", "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "horizontal", "y":  1.5707963267948966, "color": "#888", "dash": "5 4"},
    {"type": "horizontal", "y": -1.5707963267948966, "color": "#888", "dash": "5 4"}
  ],
  "annotations": [
    {"x": 7.5, "y":  1.65, "text": "y = π/2",  "color": "#666", "anchor": "end", "italic": false},
    {"x": 7.5, "y": -1.50, "text": "y = −π/2", "color": "#666", "anchor": "end", "italic": false}
  ],
  "points": [
    {"x": 0, "y": 0, "style": "filled", "color": "#1f2430"}
  ]
}
```

**Useful limits** to internalize now, since they'll come up often:

$$\lim_{x \to \infty} \arctan x = \frac{\pi}{2}, \qquad \lim_{x \to -\infty} \arctan x = -\frac{\pi}{2}$$

---

## The remaining three inverse trig functions

Cosecant, secant, and cotangent have their own inverses, used less frequently. Stewart summarizes:

> **Equation 11.**
> $$y = \csc^{-1} x \ (|x| \geq 1) \ \Longleftrightarrow \ \csc y = x \ \text{ and } \ y \in (0, \pi/2] \cup (\pi, 3\pi/2]$$
> $$y = \sec^{-1} x \ (|x| \geq 1) \ \Longleftrightarrow \ \sec y = x \ \text{ and } \ y \in [0, \pi/2) \cup [\pi, 3\pi/2)$$
> $$y = \cot^{-1} x \ (x \in \mathbb{R}) \ \Longleftrightarrow \ \cot y = x \ \text{ and } \ y \in (0, \pi)$$

> **Figure 26 — $y = \sec x$ showing the branches used to define $\sec^{-1}$.** Two branches per period, with vertical asymptotes at $x = \pi/2, 3\pi/2, \ldots$. The highlighted portions for the $\sec^{-1}$ restriction: $[0, \pi/2)$ and $[\pi, 3\pi/2)$.

```plot
{
  "title": "Figure 26 — y = sec x  with sec⁻¹ branches highlighted",
  "width": 540, "height": 360,
  "xRange": [-2, 6], "yRange": [-6, 6],
  "xStep": 1.5707963267948966, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "1/cos(x)", "domain": [-1.50, -1.65], "color": "#bbb", "width": 1.5},
    {"fn": "1/cos(x)", "domain": [0,    1.50],   "color": "#b04a2f", "width": 2.4},
    {"fn": "1/cos(x)", "domain": [1.65, 4.55],   "color": "#bbb", "width": 1.5},
    {"fn": "1/cos(x)", "domain": [3.141592653589793, 4.55],"color": "#b04a2f","width": 2.4}
  ],
  "lines": [
    {"type": "vertical", "x": -1.5707963267948966, "color": "#888", "dash": "5 4"},
    {"type": "vertical", "x":  1.5707963267948966, "color": "#888", "dash": "5 4"},
    {"type": "vertical", "x":  4.71238898038469,   "color": "#888", "dash": "5 4"},
    {"type": "horizontal", "y":  1, "color": "#ddd", "dash": "3 3"},
    {"type": "horizontal", "y": -1, "color": "#ddd", "dash": "3 3"}
  ],
  "caption": "Highlighted branches: [0, π/2) and [π, 3π/2) — Stewart's choice for sec⁻¹."
}
```

### The convention mess

**The choice of intervals for $y$ in the definitions of $\csc^{-1}$ and $\sec^{-1}$ is not universally agreed upon.** Some authors use $y \in [0, \pi/2) \cup (\pi/2, \pi]$ for $\sec^{-1}$ — a different but equally valid choice. Stewart's choice (the one in Equation 11) is motivated by the fact that it makes the derivative of $\sec^{-1}$ cleaner in Chapter 3.

**Practical advice.** If you ever need to work with $\sec^{-1}$ or $\csc^{-1}$ — in integration by parts, trig substitution, or a physics problem — always verify which convention the source is using. Both choices work; inconsistent choices between you and the source don't.

---

## Summary table — all six inverse trig functions

| Function | Definition range | Domain | Range |
|----------|------------------|--------|-------|
| $\sin^{-1} x$ | $\sin y = x$, $-\tfrac{\pi}{2} \leq y \leq \tfrac{\pi}{2}$ | $[-1, 1]$ | $[-\tfrac{\pi}{2}, \tfrac{\pi}{2}]$ |
| $\cos^{-1} x$ | $\cos y = x$, $0 \leq y \leq \pi$ | $[-1, 1]$ | $[0, \pi]$ |
| $\tan^{-1} x$ | $\tan y = x$, $-\tfrac{\pi}{2} < y < \tfrac{\pi}{2}$ | $\mathbb{R}$ | $(-\tfrac{\pi}{2}, \tfrac{\pi}{2})$ |
| $\csc^{-1} x$ | $\csc y = x$, Stewart's convention | $(-\infty, -1] \cup [1, \infty)$ | Stewart-specific |
| $\sec^{-1} x$ | $\sec y = x$, Stewart's convention | $(-\infty, -1] \cup [1, \infty)$ | Stewart-specific |
| $\cot^{-1} x$ | $\cot y = x$, $0 < y < \pi$ | $\mathbb{R}$ | $(0, \pi)$ |

---

## Why inverse trig functions matter going forward

**In Chapter 3 (derivatives)** you'll derive:

$$\frac{d}{dx}\arcsin x = \frac{1}{\sqrt{1 - x^2}}, \quad \frac{d}{dx}\arccos x = -\frac{1}{\sqrt{1 - x^2}}, \quad \frac{d}{dx}\arctan x = \frac{1}{1 + x^2}$$

These are surprisingly useful: they turn rational functions (the derivatives) back into inverse trig functions (the antiderivatives). Which means...

**In Chapter 5 (integration)** they're the key to:

$$\int \frac{dx}{\sqrt{1 - x^2}} = \arcsin x + C, \qquad \int \frac{dx}{1 + x^2} = \arctan x + C$$

**Trig substitution** (Chapter 7) uses inverse trig to simplify integrals of $\sqrt{a^2 - x^2}$, $\sqrt{a^2 + x^2}$, $\sqrt{x^2 - a^2}$ — three of the most common algebraic forms you'll integrate.

**For your quant work.**
- **$\arctan$ shows up in the Cauchy distribution** as its CDF: $F(x) = \tfrac{1}{2} + \tfrac{1}{\pi}\arctan(x)$. The Cauchy is the go-to heavy-tailed distribution for robust statistics.
- **Brownian-motion quantile calculations** that involve normal CDFs often reduce to arctan-like expressions after approximation.
- **Polar/complex-number representations** use $\arctan(y/x)$ to compute the argument of a complex number — critical in signal processing and Fourier analysis.

---

*End of Unit 3. Section 1.6's exposition is complete. Unit 4 is Exercises 1–73.*
