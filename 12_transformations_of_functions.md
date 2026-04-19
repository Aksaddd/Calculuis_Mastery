# Section 1.3 — Transformations of Functions

*Covers pp. 37 bottom – 41 top of the book (PDF pp. 65 mid – 69 top). The first half of Section 1.3: shifts (vertical and horizontal), stretches/compressions (vertical and horizontal), reflections (about either axis), and the absolute-value transformation. Five worked examples. The second half (Combinations and Composition) becomes Unit 2.*

---

## Section 1.3 — New Functions from Old Functions

In this section we start with the basic functions we discussed in Section 1.2 and obtain new functions by **shifting**, **stretching**, and **reflecting** their graphs. We also show how to combine pairs of functions by the standard arithmetic operations and by **composition**.

---

## Transformations of Functions

By applying certain transformations to the graph of a given function we can obtain the graphs of certain related functions. This will give us the ability to sketch graphs of many functions quickly by hand. It will also enable us to write equations for given graphs.

### Translations (shifts)

If $c$ is a positive number, then the graph of $y = f(x) + c$ is just the graph of $y = f(x)$ shifted upward a distance of $c$ units (because each $y$-coordinate is increased by the same number $c$).

Likewise, if $g(x) = f(x - c)$, where $c > 0$, then the value of $g$ at $x$ is the same as the value of $f$ at $x - c$ ($c$ units to the left of $x$). Therefore, the graph of $y = f(x - c)$ is just the graph of $y = f(x)$ shifted **$c$ units to the right** (see Figure 1).

> **Summary — Vertical and Horizontal Shifts.** Suppose $c > 0$. To obtain the graph of
> - $y = f(x) + c$, shift the graph of $y = f(x)$ a distance $c$ units **upward**
> - $y = f(x) - c$, shift the graph of $y = f(x)$ a distance $c$ units **downward**
> - $y = f(x - c)$, shift the graph of $y = f(x)$ a distance $c$ units **to the right**
> - $y = f(x + c)$, shift the graph of $y = f(x)$ a distance $c$ units **to the left**

> **Figure 1 — Translating the graph of $f$.** A central reference curve $y = f(x)$ sits at the origin of a coordinate system. Around it, four translated copies appear with dashed displacement arrows of length $c$ showing the shift direction:
> - Upper translate: $y = f(x) + c$ (moved $c$ units up).
> - Lower translate: $y = f(x) - c$ (moved $c$ units down).
> - Right translate: $y = f(x - c)$ (moved $c$ units right).
> - Left translate: $y = f(x + c)$ (moved $c$ units left).

```plot
{
  "title": "Figure 1 — y = f(x) and four translates (c = 2)",
  "width": 540, "height": 360,
  "xRange": [-7, 7], "yRange": [-4, 6],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "exp(-x*x/2) * 2",                 "color": "#1f2430", "width": 2.2},
    {"fn": "exp(-x*x/2) * 2 + 2",             "color": "#b04a2f", "width": 1.8},
    {"fn": "exp(-x*x/2) * 2 - 2",             "color": "#5a8f3a", "width": 1.8},
    {"fn": "exp(-pow(x - 2, 2)/2) * 2",       "color": "#2867b2", "width": 1.8},
    {"fn": "exp(-pow(x + 2, 2)/2) * 2",       "color": "#6b3aa0", "width": 1.8}
  ],
  "annotations": [
    {"x":  0,   "y": 4.4, "text": "f(x) + c", "color": "#b04a2f", "anchor": "middle"},
    {"x":  0,   "y": 0.4, "text": "f(x) − c", "color": "#5a8f3a", "anchor": "middle"},
    {"x":  3.7, "y": 2.3, "text": "f(x − c)", "color": "#2867b2", "anchor": "start"},
    {"x": -3.7, "y": 2.3, "text": "f(x + c)", "color": "#6b3aa0", "anchor": "end"},
    {"x":  0.3, "y": 2.4, "text": "f(x)",     "color": "#1f2430", "anchor": "start"}
  ]
}
```

**Sign convention to memorize.** "Inside, backwards; outside, forwards." That is, a change inside the argument ($x - c$ or $x + c$) moves the graph **opposite** to the sign you might naïvely expect, while a change outside ($+ c$ or $- c$ added to $f$) moves it in the expected direction. $f(x - 3)$ shifts right; $f(x) - 3$ shifts down. This is the single most-common error with transformations, and it's worth memorizing the phrase.

---

### Stretching and reflecting

If $c > 1$, then the graph of $y = c f(x)$ is the graph of $y = f(x)$ **stretched by a factor of $c$ in the vertical direction** (because each $y$-coordinate is multiplied by the same number $c$). The graph of $y = -f(x)$ is the graph of $y = f(x)$ **reflected about the $x$-axis** because the point $(x, y)$ is replaced by the point $(x, -y)$.

> **Summary — Vertical and Horizontal Stretching and Reflecting.** Suppose $c > 1$. To obtain the graph of
> - $y = c\,f(x)$, **stretch** the graph of $y = f(x)$ vertically by a factor of $c$
> - $y = \tfrac{1}{c}\,f(x)$, **compress** the graph of $y = f(x)$ vertically by a factor of $c$
> - $y = f(cx)$, **compress** the graph of $y = f(x)$ horizontally by a factor of $c$
> - $y = f(x/c)$, **stretch** the graph of $y = f(x)$ horizontally by a factor of $c$
> - $y = -f(x)$, **reflect** the graph of $y = f(x)$ about the $x$-axis
> - $y = f(-x)$, **reflect** the graph of $y = f(x)$ about the $y$-axis

> **Figure 2 — Stretching and reflecting the graph of $f$.** Central reference $y = f(x)$ with four transformed copies:
> - $y = c\,f(x)$ (with $c > 1$): same curve shape, vertically exaggerated — peaks higher, troughs lower.
> - $y = \tfrac{1}{c}\,f(x)$: same shape, vertically compressed toward the $x$-axis.
> - $y = f(-x)$: mirror image across the $y$-axis.
> - $y = -f(x)$: mirror image across the $x$-axis (curve flipped upside down).

```plot
{
  "title": "Figure 2 — vertical scaling and reflections (c = 2)",
  "width": 540, "height": 360,
  "xRange": [-5, 5], "yRange": [-5, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x * exp(-x*x/4)",          "color": "#1f2430", "width": 2.2},
    {"fn": "2 * x * exp(-x*x/4)",      "color": "#b04a2f", "width": 1.8},
    {"fn": "0.5 * x * exp(-x*x/4)",    "color": "#5a8f3a", "width": 1.8},
    {"fn": "(-x) * exp(-x*x/4)",       "color": "#2867b2", "width": 1.8, "dash": "5 4"},
    {"fn": "-(x * exp(-x*x/4))",       "color": "#6b3aa0", "width": 1.8, "dash": "5 4"}
  ],
  "annotations": [
    {"x":  4.5, "y":  2.0, "text": "c·f(x)",   "color": "#b04a2f", "anchor": "end"},
    {"x":  4.5, "y":  0.5, "text": "(1/c)·f(x)","color": "#5a8f3a", "anchor": "end"},
    {"x": -4.5, "y":  1.4, "text": "f(−x)",    "color": "#2867b2", "anchor": "start"},
    {"x":  4.5, "y": -1.0, "text": "−f(x)",    "color": "#6b3aa0", "anchor": "end"},
    {"x":  3.5, "y":  1.4, "text": "f(x)",     "color": "#1f2430", "anchor": "start"}
  ]
}
```

**Horizontal vs. vertical — the "inside vs. outside" rule (extended).** Operations *outside* $f$ (multiplying the whole output: $c\,f$, $-f$) act **vertically** and "as expected" — $c\,f(x)$ with $c > 1$ stretches up/down. Operations *inside* $f$ (affecting the argument: $f(cx)$, $f(-x)$) act **horizontally** and "oppositely" — $f(cx)$ with $c > 1$ **compresses** horizontally (the graph runs through a full cycle in less $x$-distance). Remember: the inside always plays by reciprocal rules.

> **Figure 3 — Stretching transformations applied to the cosine function with $c = 2$.**
> - **Left panel (vertical scaling):** $y = \cos x$, $y = 2\cos x$ (stretched to amplitude 2), $y = \tfrac{1}{2}\cos x$ (compressed to amplitude 0.5). All three share the same zero-crossings; they differ only in amplitude.
> - **Right panel (horizontal scaling):** $y = \cos x$, $y = \cos 2x$ (period compressed to $\pi$), $y = \cos\tfrac{1}{2}x$ (period stretched to $4\pi$). All three have amplitude 1 but oscillate at different rates.

```plot
{
  "title": "Figure 3 (left) — vertical scaling: cos x, 2 cos x, ½ cos x",
  "width": 520, "height": 320,
  "xRange": [-1, 8], "yRange": [-2.5, 2.5],
  "xStep": 1.5707963267948966, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "cos(x)",       "color": "#1f2430", "width": 1.8},
    {"fn": "2*cos(x)",     "color": "#b04a2f", "width": 1.8},
    {"fn": "0.5*cos(x)",   "color": "#5a8f3a", "width": 1.8}
  ],
  "annotations": [
    {"x": 0.05, "y": 2.05, "text": "2 cos x",  "color": "#b04a2f"},
    {"x": 0.05, "y": 1.05, "text": "cos x",    "color": "#1f2430"},
    {"x": 0.05, "y": 0.55, "text": "½ cos x",  "color": "#5a8f3a"}
  ]
}
```

```plot
{
  "title": "Figure 3 (right) — horizontal scaling: cos x, cos 2x, cos(x/2)",
  "width": 520, "height": 320,
  "xRange": [-1, 13], "yRange": [-1.5, 1.5],
  "xStep": 1.5707963267948966, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "cos(x)",       "color": "#1f2430", "width": 1.8},
    {"fn": "cos(2*x)",     "color": "#b04a2f", "width": 1.8},
    {"fn": "cos(x/2)",     "color": "#5a8f3a", "width": 1.8}
  ],
  "annotations": [
    {"x": 0.05, "y": 1.10, "text": "cos x",   "color": "#1f2430"},
    {"x": 1.4,  "y": -1.1, "text": "cos 2x",  "color": "#b04a2f"},
    {"x": 12.5, "y": 0.4,  "text": "cos(x/2)","color": "#5a8f3a", "anchor": "end"}
  ]
}
```

---

### Example 1 — Transformations of $y = \sqrt{x}$

Given the graph of $y = \sqrt{x}$ (from Figure 13(a) in Section 1.2), use transformations to graph

$$y = \sqrt{x} - 2, \qquad y = \sqrt{x - 2}, \qquad y = -\sqrt{x}, \qquad y = 2\sqrt{x}, \qquad y = \sqrt{-x}$$

***Solution.*** Apply the rules in order.

> **Figure 4 — Six sub-graphs showing the original and five transformations, each starting from $y = \sqrt{x}$.**
> - **(a) $y = \sqrt{x}$** — original. Starts at origin, rises with decreasing slope through $(1, 1)$. First quadrant only.
> - **(b) $y = \sqrt{x} - 2$** — shifted down 2 units. Starts at $(0, -2)$, rises through $(1, -1)$, crosses $x$-axis at $x = 4$.
> - **(c) $y = \sqrt{x - 2}$** — shifted right 2 units. Starts at $(2, 0)$, rises through $(3, 1)$. No negative-$x$ portion.
> - **(d) $y = -\sqrt{x}$** — reflected about the $x$-axis. Starts at origin, descends through $(1, -1)$. Fourth quadrant.
> - **(e) $y = 2\sqrt{x}$** — stretched vertically by factor 2. Starts at origin, rises through $(1, 2)$ — twice as steep as the original at every $x$.
> - **(f) $y = \sqrt{-x}$** — reflected about the $y$-axis. Starts at origin, rises through $(-1, 1)$. Second quadrant; mirror of (a).

```plot
{
  "title": "Figure 4 — six transformations of y = √x, on shared axes",
  "width": 540, "height": 380,
  "xRange": [-7, 7], "yRange": [-3, 5],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sqrt(x)",       "domain": [0, 7],   "color": "#1f2430", "width": 1.8},
    {"fn": "sqrt(x) - 2",   "domain": [0, 7],   "color": "#b04a2f", "width": 1.8},
    {"fn": "sqrt(x - 2)",   "domain": [2, 7],   "color": "#c87d3b", "width": 1.8},
    {"fn": "-sqrt(x)",      "domain": [0, 7],   "color": "#5a8f3a", "width": 1.8},
    {"fn": "2*sqrt(x)",     "domain": [0, 5],   "color": "#2867b2", "width": 1.8},
    {"fn": "sqrt(-x)",      "domain": [-7, 0],  "color": "#6b3aa0", "width": 1.8}
  ],
  "annotations": [
    {"x": 6.5, "y": 2.45, "text": "√x",        "color": "#1f2430", "anchor": "end"},
    {"x": 6.5, "y": 0.45, "text": "√x − 2",    "color": "#b04a2f", "anchor": "end"},
    {"x": 6.5, "y": 2.10, "text": "√(x − 2)",  "color": "#c87d3b", "anchor": "end"},
    {"x": 6.5, "y": -2.5, "text": "−√x",       "color": "#5a8f3a", "anchor": "end"},
    {"x": 4.5, "y": 4.5,  "text": "2√x",       "color": "#2867b2", "anchor": "end"},
    {"x": -6.5,"y": 2.5,  "text": "√(−x)",     "color": "#6b3aa0", "anchor": "start"}
  ]
}
```

---

### Example 2 — Shift via completing the square

Sketch the graph of $f(x) = x^2 + 6x + 10$.

***Solution.*** Complete the square:

$$x^2 + 6x + 10 = (x^2 + 6x + 9) + 1 = (x + 3)^2 + 1$$

So $y = (x + 3)^2 + 1$ is the parabola $y = x^2$ shifted **3 units left** and **1 unit up**. Vertex at $(-3, 1)$.

> **Figure 5 — From parabola to shifted parabola.**
> - **(a) $y = x^2$:** standard parabola, vertex at origin.
> - **(b) $y = (x + 3)^2 + 1$:** same shape, vertex at $(-3, 1)$ (marked with a dot on the graph). The parabola sits in the second quadrant extension area, nowhere touching the $x$-axis.

```plot
{
  "title": "Figure 5 — y = x²  vs.  y = (x + 3)² + 1",
  "width": 540, "height": 340,
  "xRange": [-7, 5], "yRange": [-1, 9],
  "xStep": 1, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x",                "color": "#1f2430", "width": 1.8, "dash": "5 4"},
    {"fn": "(x + 3)*(x + 3) + 1","color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x":  0, "y": 0, "style": "filled", "color": "#1f2430", "label": "(0, 0)",   "labelDx": 8, "labelDy": -8},
    {"x": -3, "y": 1, "style": "filled", "color": "#b04a2f", "label": "(−3, 1)",  "labelDx": 8, "labelDy": -8}
  ],
  "annotations": [
    {"x":  3.0, "y": 7.5, "text": "y = x²",            "color": "#1f2430", "anchor": "end"},
    {"x": -6.5, "y": 7.5, "text": "y = (x + 3)² + 1",  "color": "#b04a2f", "anchor": "start"}
  ]
}
```

**Why completing the square matters operationally.** Every quadratic $ax^2 + bx + c$ can be rewritten as $a(x - h)^2 + k$ by completing the square — this is called **vertex form**. It makes the vertex $(h, k)$ readable at a glance and the transformation structure explicit: start from $y = ax^2$, shift right by $h$, shift up by $k$. For any later curve-sketching or optimization problem involving a quadratic, this is the canonical first move.

---

### Example 3 — Trigonometric transformations

Sketch the graphs of:
- (a) $y = \sin 2x$
- (b) $y = 1 - \sin x$

***Solution.***

**(a)** We obtain the graph of $y = \sin 2x$ from that of $y = \sin x$ by **compressing horizontally by a factor of 2**. The period of $\sin x$ is $2\pi$, so the period of $\sin 2x$ is $\dfrac{2\pi}{2} = \pi$ — twice the oscillation rate.

> **Figure 6 — $y = \sin x$.** Standard sine wave with period $2\pi$. Zero crossings at $0, \pi, 2\pi, \ldots$; peaks at $\pi/2, 5\pi/2, \ldots$; troughs at $3\pi/2, \ldots$. Amplitude 1.

```plot
{
  "title": "Figure 6 — y = sin x  (period 2π)",
  "width": 540, "height": 260,
  "xRange": [-1, 8], "yRange": [-1.5, 1.5],
  "xStep": 1.5707963267948966, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sin(x)", "color": "#b04a2f", "width": 2.2}
  ]
}
```

> **Figure 7 — $y = \sin 2x$.** Same amplitude, but horizontally compressed. Period is $\pi$. Zero crossings at $0, \pi/2, \pi, 3\pi/2, \ldots$; peak at $\pi/4$; trough at $3\pi/4$. Two full oscillations fit into the interval $[0, 2\pi]$ instead of one.

```plot
{
  "title": "Figure 7 — y = sin 2x  (period π)",
  "width": 540, "height": 260,
  "xRange": [-1, 8], "yRange": [-1.5, 1.5],
  "xStep": 1.5707963267948966, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "sin(2*x)", "color": "#b04a2f", "width": 2.2}
  ]
}
```

**(b)** To obtain the graph of $y = 1 - \sin x$, start with $y = \sin x$. Reflect about the $x$-axis to get $y = -\sin x$, then shift **up 1 unit** to get $y = 1 - \sin x$.

> **Figure 8 — $y = 1 - \sin x$.** A sinusoidal curve oscillating between $y = 0$ (bottom) and $y = 2$ (top), with the midline at $y = 1$. Troughs at $x = \pi/2, 5\pi/2, \ldots$ (where $\sin x$ peaks at $+1$); peaks at $x = 3\pi/2, 7\pi/2, \ldots$ (where $\sin x$ troughs at $-1$). The whole curve sits above the $x$-axis, touching it exactly at the troughs.

```plot
{
  "title": "Figure 8 — y = 1 − sin x",
  "width": 540, "height": 280,
  "xRange": [-1, 8], "yRange": [-0.5, 2.5],
  "xStep": 1.5707963267948966, "yStep": 0.5,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "1 - sin(x)", "color": "#b04a2f", "width": 2.2}
  ],
  "lines": [
    {"type": "horizontal", "y": 1, "color": "#bbb", "dash": "3 3"}
  ]
}
```

---

### Example 4 — Composite transformation: daylight hours at Philadelphia

Figure 9 shows graphs of the number of hours of daylight as functions of the time of the year at several latitudes. Given that Philadelphia is located at approximately **40°N latitude**, find a function that models the length of daylight at Philadelphia.

> **Figure 9 — Daylight length by latitude.** Five curves on the same axes — hours of daylight (0 to 20) vs. month (Mar through Dec), one curve per latitude (20°N, 30°N, 40°N, 50°N, 60°N). All cross at ≈12 hours near the equinoxes. Higher-latitude curves have larger amplitude (wider range between summer peak and winter trough).
>
> *Source: Lucia C. Harrison,* Daylight, Twilight, Darkness and Time *(New York: Silver, Burdett, 1935) page 40.*

***Solution.*** Each curve resembles a **shifted and stretched sine function**. We build the 40°N model step-by-step.

**Step 1 — Amplitude.** From the 40°N (blue) curve: daylight ranges from about 14.8 hours on June 21 to 9.2 hours on December 21. The amplitude is half the range:

$$B = \tfrac{1}{2}(14.8 - 9.2) = 2.8$$

**Step 2 — Period.** One full cycle takes 365 days. So if we write $y = A + B \sin(c\,t + \varphi)$, we need $\dfrac{2\pi}{c} = 365$, giving

$$c = \frac{2\pi}{365}$$

**Step 3 — Phase shift.** The curve begins its upward cycle on March 21, which is the **80th day of the year** ($t = 80$). So we shift the basic $\sin$ right by 80: $\sin\!\left[\frac{2\pi}{365}(t - 80)\right]$.

**Step 4 — Vertical shift.** The midline of the oscillation is at 12 hours (the annual mean). So $A = 12$.

**Combining:**

$$\boxed{\; L(t) = 12 + 2.8\,\sin\!\left[\frac{2\pi}{365}(t - 80)\right] \;}$$

This is exactly the formula foreshadowed in Section 1.2 Unit 4 — and now we've derived it by combining four elementary transformations of $\sin$. **It's a textbook illustration of how the four transformation parameters (mean, amplitude, period, phase) are read off a real-world oscillatory dataset.**

---

### The absolute-value transformation

Another transformation of some interest is taking the **absolute value** of a function. If $y = |f(x)|$, then by the definition of absolute value:

$$|f(x)| = \begin{cases} f(x) & \text{when } f(x) \geq 0 \\ -f(x) & \text{when } f(x) < 0 \end{cases}$$

This gives the rule: **the part of the graph that lies above the $x$-axis remains the same; the part that lies below the $x$-axis is reflected about the $x$-axis**.

### Example 5 — Absolute value of a shifted parabola

Sketch the graph of $y = |x^2 - 1|$.

***Solution.*** First graph the parabola $y = x^2 - 1$ (Figure 10(a)): this is $y = x^2$ shifted down by 1, crossing the $x$-axis at $x = \pm 1$ and dipping to minimum $-1$ at $x = 0$. The graph lies **below the $x$-axis** when $-1 < x < 1$. Reflect that portion about the $x$-axis to get $y = |x^2 - 1|$.

> **Figure 10 — The $|\,\cdot\,|$ transformation on $y = x^2 - 1$.**
> - **(a) $y = x^2 - 1$:** upward-opening parabola with vertex at $(0, -1)$, crossing the $x$-axis at $x = -1$ and $x = 1$.
> - **(b) $y = |x^2 - 1|$:** outside the interval $[-1, 1]$, the graph is unchanged (upper branches of the parabola). Inside $[-1, 1]$, the downward lobe is flipped upward into a "bump" with maximum 1 at $x = 0$ — a W-shape sitting entirely on or above the $x$-axis. Corners (non-smooth joins) at $x = \pm 1$ where the reflection kicks in.

```plot
{
  "title": "Figure 10a — y = x² − 1",
  "width": 460, "height": 320,
  "xRange": [-2.5, 2.5], "yRange": [-2, 5],
  "xStep": 0.5, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x - 1", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x":  0, "y": -1, "style": "filled", "color": "#1f2430", "label": "(0, −1)", "labelDx": 8, "labelDy": -8},
    {"x": -1, "y":  0, "style": "filled", "color": "#1f2430"},
    {"x":  1, "y":  0, "style": "filled", "color": "#1f2430"}
  ]
}
```

```plot
{
  "title": "Figure 10b — y = |x² − 1|",
  "width": 460, "height": 320,
  "xRange": [-2.5, 2.5], "yRange": [-1, 5],
  "xStep": 0.5, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "abs(x*x - 1)", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x":  0, "y": 1, "style": "filled", "color": "#1f2430", "label": "(0, 1)", "labelDx": 8, "labelDy": -8},
    {"x": -1, "y": 0, "style": "filled", "color": "#1f2430", "label": "corner", "labelDx": -8, "labelDy": 14},
    {"x":  1, "y": 0, "style": "filled", "color": "#1f2430", "label": "corner", "labelDx": 8,  "labelDy": 14}
  ]
}
```

**The corners matter.** Wherever $f$ crosses the $x$-axis transversally, the graph of $|f|$ has a **corner** (a point where the left and right derivatives differ). This is one of the first natural places a function fails to be differentiable. You'll see this kind of kink again in Chapter 2 (limits) and Chapter 3 (derivatives) — differentiability has geometric content.

---

*End of Unit 1. Unit 2 picks up with COMBINATIONS OF FUNCTIONS (arithmetic and composition), starting halfway down page 69.*
