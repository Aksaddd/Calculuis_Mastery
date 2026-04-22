# Section 2.1 — The Tangent and Velocity Problems

*Covers pp. 82–87 of the book (PDF pp. 110–115). The opening section of Chapter 2: two classical problems — finding a tangent line to a curve, and finding the instantaneous velocity of a moving object — that both collapse onto the same conceptual need: a way to take limits. Combined into one unit: exposition + 9 exercises.*

---

## Chapter 2 orientation

Chapter 2 is where calculus proper begins. You'll meet:

- **Limits** (2.1–2.4) — the rigorous notion of "what value does this function approach as its input approaches something?"
- **Continuity** (2.5) — a limit-based formalization of "no jumps, no holes."
- **Limits at infinity** (2.6) — asymptotic behavior.
- **Derivatives** (2.7–2.8) — the instantaneous rate-of-change object built from limits.

Section 2.1 is the motivational warm-up. No formal definitions yet; just two problems that lead directly to the need for limits.

---

## Section 2.1 — The Tangent and Velocity Problems

In this section we see how limits arise when we attempt to find the tangent to a curve or the velocity of an object.

---

## The Tangent Problem

The word "tangent" derives from the Latin *tangens*, meaning "touching." A tangent line to a curve is a line that touches the curve. In particular, a tangent line should have the same direction as the curve at the point of contact.

For a circle, Euclid's definition works: a tangent is a line that intersects the circle once and only once (Figure 1(a)). **But for more complicated curves this definition is inadequate.**

> **Figure 1 — Two motivating pictures.**
> - **(a) Circle with tangent line $t$** passing through the circle at exactly one point. Euclid's definition works here.
> - **(b) General curve with two lines through a point $P$:** line $l$ passes *through* $P$ and hits the curve again at some other point (not a tangent); line $t$ at $P$ appears to "just touch" the curve there but also happens to hit the curve at another point $C$. So "touches once" fails to characterize tangency — the second line $t$ should still be called a tangent at $P$, but it technically intersects more than once.

<figure class="plot-figure">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 260" role="img" aria-label="Left: circle with tangent. Right: curve where the 'touches once' rule fails.">
  <g transform="translate(20 10)">
    <text x="140" y="18" font-size="12" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" fill="#5b6477" font-style="italic">(a) circle</text>
    <circle cx="140" cy="140" r="70" fill="none" stroke="#1f2430" stroke-width="2"/>
    <line x1="30" y1="70" x2="250" y2="70" stroke="#b04a2f" stroke-width="2"/>
    <text x="255" y="74" font-size="17" font-style="italic" font-family="'Times New Roman', Times, serif" fill="#b04a2f">t</text>
    <circle cx="140" cy="70" r="3" fill="#1f2430"/>
    <text x="137" y="85" font-size="12" font-style="italic" text-anchor="end" font-family="'Times New Roman', Times, serif" fill="#1f2430">P</text>
  </g>
  <g transform="translate(320 10)">
    <text x="140" y="18" font-size="12" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" fill="#5b6477" font-style="italic">(b) general curve</text>
    <path d="M 20 60 C 70 60, 90 220, 140 140 C 190 60, 210 220, 260 200" fill="none" stroke="#1f2430" stroke-width="2"/>
    <line x1="20" y1="210" x2="260" y2="80" stroke="#2867b2" stroke-width="1.8" stroke-dasharray="5 4"/>
    <text x="268" y="82" font-size="17" font-style="italic" font-family="'Times New Roman', Times, serif" fill="#2867b2">l</text>
    <line x1="30" y1="170" x2="250" y2="130" stroke="#b04a2f" stroke-width="2"/>
    <text x="258" y="132" font-size="17" font-style="italic" font-family="'Times New Roman', Times, serif" fill="#b04a2f">t</text>
    <circle cx="140" cy="140" r="4" fill="#1f2430"/>
    <text x="145" y="156" font-size="13" font-style="italic" font-family="'Times New Roman', Times, serif" fill="#1f2430">P</text>
    <circle cx="228" cy="156" r="4" fill="#1f2430"/>
    <text x="235" y="153" font-size="13" font-style="italic" font-family="'Times New Roman', Times, serif" fill="#1f2430">C</text>
  </g>
</svg>
<figcaption>On a circle, "intersects once" nails tangency. On a general curve it doesn't — line <em>t</em> is the tangent at <em>P</em> even though it meets the curve again at <em>C</em>.</figcaption>
</figure>

**So what's the right definition?** We'll build it: a tangent line is the line whose **slope is the limit of the slopes of secant lines** as the second point approaches the first.

---

### Example 1 — Tangent to $y = x^2$ at $(1, 1)$

Find an equation of the tangent line to the parabola $y = x^2$ at the point $P(1, 1)$.

***Solution.*** We can find the tangent line's equation once we know its slope $m$. The difficulty: a single point $P$ doesn't determine a slope — we need two points.

**Workaround:** compute an *approximation* to $m$ by picking a nearby point $Q(x, x^2)$ on the parabola and computing the slope $m_{PQ}$ of the **secant line** $PQ$.

For $x \neq 1$:

$$m_{PQ} = \frac{x^2 - 1}{x - 1}$$

**Example point $Q(1.5, 2.25)$:**

$$m_{PQ} = \frac{2.25 - 1}{1.5 - 1} = \frac{1.25}{0.5} = 2.5$$

**Tables of $m_{PQ}$ as $x \to 1$:**

$Q$ approaching $P$ from the **right** ($x > 1$):

| $x$ | $m_{PQ}$ |
|:---:|:---:|
| 2 | 3 |
| 1.5 | 2.5 |
| 1.1 | 2.1 |
| 1.01 | 2.01 |
| 1.001 | 2.001 |

$Q$ approaching $P$ from the **left** ($x < 1$):

| $x$ | $m_{PQ}$ |
|:---:|:---:|
| 0 | 1 |
| 0.5 | 1.5 |
| 0.9 | 1.9 |
| 0.99 | 1.99 |
| 0.999 | 1.999 |

The closer $Q$ is to $P$ on both sides, the closer $m_{PQ}$ is to $2$. This strongly suggests $m = 2$.

**Stating the result using limit notation.** The slope of the tangent line is the *limit* of the slopes of the secant lines:

$$m = \lim_{Q \to P} m_{PQ} \quad \text{and} \quad \lim_{x \to 1} \frac{x^2 - 1}{x - 1} = 2$$

*(Both expressions say the same thing — the first geometrically, the second analytically.)*

**Tangent line equation.** Using point-slope form through $(1, 1)$ with slope $2$:

$$y - 1 = 2(x - 1) \quad \text{or} \quad \boxed{\; y = 2x - 1 \;}$$

> **Figure 3 — The limiting process, illustrated.** Six small graphs showing the parabola $y = x^2$ with the point $P$ fixed and the point $Q$ sliding toward $P$ along the curve. The three panels on the top row show $Q$ approaching $P$ from the right (with the secant line $PQ$ rotating toward the tangent position). The three on the bottom row show $Q$ approaching $P$ from the left. In both cases, the secant line $PQ$ rotates about $P$ and approaches the tangent line $t$ as $Q \to P$.

```plot
{
  "title": "Figure 3 — secants rotating toward the tangent as Q → P",
  "width": 540, "height": 400,
  "xRange": [-0.5, 2.5], "yRange": [-0.5, 5],
  "xStep": 0.5, "yStep": 1,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "x*x", "domain": [-0.5, 2.3], "color": "#1f2430", "width": 2.2}
  ],
  "lines": [
    {"from": [0, -0.5],     "to": [2.5, 3.25], "color": "#b9d2e8", "width": 1.4},
    {"from": [0.21, -0.5],  "to": [2.5, 3.85], "color": "#7caed6", "width": 1.4},
    {"from": [0.286, -0.5], "to": [2.5, 4.15], "color": "#7caed6", "width": 1.4},
    {"from": [0.4, -0.5],   "to": [2.5, 4.75], "color": "#b9d2e8", "width": 1.4},
    {"from": [0.25, -0.5],  "to": [2.5, 4],    "color": "#b04a2f", "width": 2.3}
  ],
  "points": [
    {"x": 0.5, "y": 0.25, "style": "open",  "color": "#2867b2"},
    {"x": 0.9, "y": 0.81, "style": "open",  "color": "#2867b2"},
    {"x": 1.1, "y": 1.21, "style": "open",  "color": "#2867b2"},
    {"x": 1.5, "y": 2.25, "style": "open",  "color": "#2867b2"},
    {"x": 1,   "y": 1,    "style": "filled","color": "#b04a2f", "label": "P(1, 1)", "labelDx": -8, "labelDy": -10, "labelAnchor": "end"}
  ],
  "annotations": [
    {"x": 1.9,  "y": 3.7, "text": "tangent t", "color": "#b04a2f"},
    {"x": 2.25, "y": 2.7, "text": "secants PQ", "color": "#2867b2"}
  ],
  "caption": "Each pale blue line is a secant through P(1, 1) and some Q on the parabola. As Q slides toward P, the secant rotates toward the orange tangent line y = 2x − 1."
}
```

*Margin note: TEC In Visual 2.1 you can see how the process in Figure 3 works for additional functions.*

**What the algebra is doing.** Notice we can simplify $(x^2 - 1)/(x - 1) = (x-1)(x+1)/(x-1) = x + 1$ for $x \neq 1$. Then $\lim_{x \to 1}(x + 1) = 2$ trivially. The limit exists even though the formula $(x^2 - 1)/(x - 1)$ is literally $0/0$ at $x = 1$ — the issue is a *removable singularity*, where the apparent indeterminacy disappears once you factor. **This "$0/0$ indeterminate form" is the single most important phenomenon in Chapter 2.**

---

### Example 2 — Tangent slope from experimental data (capacitor discharge)

Many functions in science aren't given by explicit formulas — they're defined by experimental data. In that case, we estimate the tangent slope numerically from the data.

The flash unit on a camera operates by storing charge on a capacitor and releasing it suddenly when the flash is set off. Data for charge $Q$ (in microcoulombs) vs. time $t$ (in seconds after the flash goes off):

| $t$ | $Q$ |
|:---:|:---:|
| 0.00 | 100.00 |
| 0.02 | 81.87 |
| 0.04 | 67.03 |
| 0.06 | 54.88 |
| 0.08 | 44.93 |
| 0.10 | 36.76 |

Use the data to graph the function and estimate the slope of the tangent line at $t = 0.04$. (The slope represents the electric current flowing from the capacitor to the flash bulb, measured in microamperes.)

***Solution.*** Plot the data. The tangent at $P = (0.04, 67.03)$ cannot be determined exactly, but the slope of any secant line through $P$ and a nearby data point is an approximation.

**Secant slopes using $P = (0.04, 67.03)$:**

| $R$ | $m_{PR}$ |
|:---:|:---:|
| $(0.00, 100.00)$ | $\dfrac{100.00 - 67.03}{0.00 - 0.04} = -824.25$ |
| $(0.02, 81.87)$ | $-742.00$ |
| $(0.06, 54.88)$ | $-607.50$ |
| $(0.08, 44.93)$ | $-552.50$ |
| $(0.10, 36.76)$ | $-504.50$ |

**Average of the two closest secant slopes** (from the points immediately on either side of $P$): $\tfrac{1}{2}(-742 + (-607.5)) = -674.75$.

So the slope of the tangent line at $P$ is approximately $-675$.

**Alternative method — estimate directly from the graph.** Draw an approximate tangent at $P$ and measure the rise over the run. Stewart gets approximately $-80.4/0.12 \approx -670$, which agrees reasonably with the averaged secant-slope estimate.

*Margin note: The physical meaning of the answer in Example 2 is that the electric current flowing from the capacitor to the flash bulb after 0.04 second is about $-670$ microamperes.*

**Why the sign is negative.** Charge is *decreasing* over time (the capacitor is discharging), so $dQ/dt < 0$. The magnitude $|dQ/dt| \approx 670$ μA is the current; the negative sign encodes the direction (charge leaving the capacitor).

---

## The Velocity Problem

If you watch a car's speedometer in city traffic, the needle doesn't stay still for long — the velocity isn't constant. But we take for granted that **the car has a definite velocity at each moment**. What is that "instantaneous" velocity mathematically?

**Same trick as the tangent problem:** compute average velocities over shorter and shorter time intervals, and take the limit.

### Example 3 — Falling ball from the CN Tower

A ball is dropped from the upper observation deck of the CN Tower in Toronto, 450 m above the ground. Find the velocity of the ball after 5 seconds.

*Margin note: The CN Tower in Toronto is currently the tallest freestanding building in the world.*

***Solution.*** Galileo's law for freely falling bodies (ignoring air resistance): distance fallen after $t$ seconds is

$$s(t) = 4.9\,t^2$$

(The constant $4.9 = \tfrac{1}{2} g$ with $g \approx 9.8$ m/s² on Earth.)

**The difficulty:** finding velocity "after 5 seconds" means we have a *single instant* $t = 5$ and no interval — but velocity requires $\Delta s / \Delta t$, which needs two times.

**Workaround:** use short time intervals starting at $t = 5$. Average velocity over $[5, 5 + h]$:

$$\bar{v} = \frac{\text{change in position}}{\text{time elapsed}} = \frac{s(5 + h) - s(5)}{h}$$

**For $h = 0.1$ (interval $[5, 5.1]$):**

$$\bar{v} = \frac{s(5.1) - s(5)}{0.1} = \frac{4.9(5.1)^2 - 4.9(5)^2}{0.1} = \frac{4.9(26.01) - 4.9(25)}{0.1} = \frac{4.9(1.01)}{0.1} = 49.49 \text{ m/s}$$

**Tables over shorter intervals:**

| Time interval | Average velocity (m/s) |
|:---:|:---:|
| $5 \leq t \leq 6$ | 53.9 |
| $5 \leq t \leq 5.1$ | 49.49 |
| $5 \leq t \leq 5.05$ | 49.245 |
| $5 \leq t \leq 5.01$ | 49.049 |
| $5 \leq t \leq 5.001$ | 49.0049 |

The average velocity appears to be approaching **49 m/s** as the interval shrinks.

> **Definition (informal).** The **instantaneous velocity** at $t = 5$ is defined to be the *limiting value* of these average velocities over shorter and shorter time periods starting at $t = 5$.

$$\boxed{\; v(5) = 49 \text{ m/s} \;}$$

---

## The tangent–velocity connection

Compute the average-velocity formula algebraically:

$$\bar{v}_{[a, a+h]} = \frac{s(a + h) - s(a)}{h} = \frac{4.9(a + h)^2 - 4.9\,a^2}{(a + h) - a}$$

Compare to the slope of a secant line between $P(a, 4.9\,a^2)$ and $Q(a + h, 4.9(a+h)^2)$ on the graph of $s$:

$$m_{PQ} = \frac{4.9(a + h)^2 - 4.9\,a^2}{(a + h) - a}$$

**These are the exact same expression.**

**Therefore:** the velocity at time $t = a$ (limit of average velocities as $h \to 0$) is **the slope of the tangent to the $s$-vs-$t$ graph at $P(a, 4.9\,a^2)$** (limit of slopes of secant lines).

> **Figure 5 — The geometric picture.** Two side-by-side graphs of $s = 4.9\,t^2$.
> - **Left:** A secant line through $P(a, \ldots)$ and $Q(a+h, \ldots)$, with slope labeled "slope of secant = average velocity."
> - **Right:** The tangent line at $P$, with slope labeled "slope of tangent = instantaneous velocity."

```plot
{
  "title": "Figure 5 — secant slope (avg velocity) vs. tangent slope (instantaneous velocity)",
  "width": 560, "height": 380,
  "xRange": [0, 7.5], "yRange": [-15, 260],
  "xStep": 1, "yStep": 50,
  "xLabel": "t (seconds)", "yLabel": "s (meters)",
  "curves": [
    {"fn": "4.9 * x * x", "domain": [0, 7.3], "color": "#1f2430", "width": 2.2}
  ],
  "lines": [
    {"from": [2.72, 0], "to": [7.5, 257.75], "color": "#2867b2", "width": 1.8, "dash": "6 4"},
    {"from": [2.5, 0],  "to": [7.5, 245],    "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 5, "y": 122.5, "style": "filled", "color": "#1f2430", "label": "P(5, 122.5)", "labelDx": -8, "labelDy": 14, "labelAnchor": "end"},
    {"x": 6, "y": 176.4, "style": "open",   "color": "#2867b2", "label": "Q(5 + h, s(5 + h))", "labelDx": 10, "labelDy": -6}
  ],
  "annotations": [
    {"x": 6.9, "y": 232, "text": "tangent — instantaneous velocity",            "color": "#b04a2f", "anchor": "end"},
    {"x": 6.9, "y": 205, "text": "secant PQ — average velocity on [5, 5 + h]",   "color": "#2867b2", "anchor": "end"}
  ],
  "caption": "Slope of the secant PQ = average velocity over [5, 5 + h]. As h → 0, Q slides down to P and the secant slope approaches the tangent slope = instantaneous velocity at t = 5."
}
```

### The unifying conceptual move

**The tangent problem and the velocity problem are the same problem.** Both ask: given a function $f$ and a point $a$, what is the *limit* of

$$\frac{f(a + h) - f(a)}{h}$$

as $h \to 0$?

- In the tangent problem, $f$ is the position of a curve (say $y$-coordinate as function of $x$), and the limit is the **tangent slope**.
- In the velocity problem, $f$ is the position of an object as a function of time, and the limit is the **instantaneous velocity**.

**This quantity — the limit of the difference quotient — is the derivative.** Stewart won't name it until Section 2.7, but you can see it sitting under the surface here.

**For your quant track:** in finance, the same quantity appears as:
- **Delta** (∂V/∂S): rate of change of option value with respect to underlying price.
- **Vega** (∂V/∂σ): rate of change with respect to volatility.
- **Theta** (∂V/∂t): rate of change with respect to time.
- **Duration** and **convexity** of bonds: first and second derivatives of price with respect to yield.
- **Marginal cost/revenue** in microeconomics.

All of these are "the limit of the average rate of change as the interval shrinks" — the same machinery you're building here. The rest of Chapter 2 is about making this limit idea rigorous and computable.

---

## Exercises

*Legend same as before: `[HINT]` = cyan-boxed number; `[GRAPH]` = graphing tool recommended.*

---

**1.** A tank holds 1000 gallons of water, which drains from the bottom of the tank in half an hour. The values in the table show the volume $V$ of water remaining in the tank (in gallons) after $t$ minutes.

| $t$ (min) | 5 | 10 | 15 | 20 | 25 | 30 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $V$ (gal) | 694 | 444 | 250 | 111 | 28 | 0 |

- (a) If $P$ is the point $(15, 250)$ on the graph of $V$, find the slopes of the secant lines $PQ$ when $Q$ is the point on the graph with $t = 5, 10, 20, 25,$ and $30$.
- (b) Estimate the slope of the tangent line at $P$ by averaging the slopes of two secant lines.
- (c) Use a graph of the function to estimate the slope of the tangent line at $P$. (This slope represents the rate at which the water is flowing from the tank after 15 minutes.)

---

**2.** A cardiac monitor is used to measure the heart rate of a patient after surgery. It compiles the number of heartbeats after $t$ minutes. When the data in the table are graphed, the slope of the tangent line represents the heart rate in beats per minute.

| $t$ (min) | 36 | 38 | 40 | 42 | 44 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Heartbeats | 2530 | 2661 | 2806 | 2948 | 3080 |

The monitor estimates this value by calculating the slope of a secant line. Use the data to estimate the patient's heart rate after 42 minutes using the secant line between the points with the given values of $t$.

- (a) $t = 36$ and $t = 42$
- (b) $t = 38$ and $t = 42$
- (c) $t = 40$ and $t = 42$
- (d) $t = 42$ and $t = 44$

What are your conclusions?

---

**3.** `[HINT]` The point $P\!\left(1, \tfrac{1}{2}\right)$ lies on the curve $y = x/(1 + x)$.
- (a) If $Q$ is the point $(x, x/(1 + x))$, use your calculator to find the slope of the secant line $PQ$ (correct to six decimal places) for the following values of $x$:
  - (i) 0.5  (ii) 0.9  (iii) 0.99  (iv) 0.999
  - (v) 1.5  (vi) 1.1  (vii) 1.01  (viii) 1.001
- (b) Using the results of part (a), guess the value of the slope of the tangent line to the curve at $P\!\left(1, \tfrac{1}{2}\right)$.
- (c) Using the slope from part (b), find an equation of the tangent line to the curve at $P\!\left(1, \tfrac{1}{2}\right)$.

---

**4.** The point $P(3, 1)$ lies on the curve $y = \sqrt{x - 2}$.
- (a) If $Q$ is the point $(x, \sqrt{x - 2})$, use your calculator to find the slope of the secant line $PQ$ (correct to six decimal places) for the following values of $x$:
  - (i) 2.5  (ii) 2.9  (iii) 2.99  (iv) 2.999
  - (v) 3.5  (vi) 3.1  (vii) 3.01  (viii) 3.001
- (b) Using the results of part (a), guess the value of the slope of the tangent line to the curve at $P(3, 1)$.
- (c) Using the slope from part (b), find an equation of the tangent line to the curve at $P(3, 1)$.
- (d) Sketch the curve, two of the secant lines, and the tangent line.

---

**5.** `[HINT]` If a ball is thrown into the air with a velocity of 40 ft/s, its height in feet $t$ seconds later is given by $y = 40t - 16t^2$.
- (a) Find the average velocity for the time period beginning when $t = 2$ and lasting
  - (i) 0.5 second
  - (ii) 0.1 second
  - (iii) 0.05 second
  - (iv) 0.01 second
- (b) Estimate the instantaneous velocity when $t = 2$.

---

**6.** If a rock is thrown upward on the planet Mars with a velocity of 10 m/s, its height in meters $t$ seconds later is given by $y = 10t - 1.86\,t^2$.
- (a) Find the average velocity over the given time intervals:
  - (i) $[1, 2]$  (ii) $[1, 1.5]$  (iii) $[1, 1.1]$
  - (iv) $[1, 1.01]$  (v) $[1, 1.001]$
- (b) Estimate the instantaneous velocity when $t = 1$.

---

**7.** The table shows the position of a cyclist.

| $t$ (seconds) | 0 | 1 | 2 | 3 | 4 | 5 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $s$ (meters) | 0 | 1.4 | 5.1 | 10.7 | 17.7 | 25.8 |

- (a) Find the average velocity for each time period:
  - (i) $[1, 3]$  (ii) $[2, 3]$  (iii) $[3, 5]$  (iv) $[3, 4]$
- (b) Use the graph of $s$ as a function of $t$ to estimate the instantaneous velocity when $t = 3$.

---

**8.** The displacement (in centimeters) of a particle moving back and forth along a straight line is given by the equation of motion $s = 2 \sin \pi t + 3 \cos \pi t$, where $t$ is measured in seconds.
- (a) Find the average velocity during each time period:
  - (i) $[1, 2]$  (ii) $[1, 1.1]$
  - (iii) $[1, 1.01]$  (iv) $[1, 1.001]$
- (b) Estimate the instantaneous velocity of the particle when $t = 1$.

---

**9.** `[HINT]` The point $P(1, 0)$ lies on the curve $y = \sin(10\pi/x)$.
- (a) If $Q$ is the point $(x, \sin(10\pi/x))$, find the slope of the secant line $PQ$ (correct to four decimal places) for $x = 2, 1.5, 1.4, 1.3, 1.2, 1.1, 0.5, 0.6, 0.7, 0.8,$ and $0.9$. Do the slopes appear to be approaching a limit?
- (b) `[GRAPH]` Use a graph of the curve to explain why the slopes of the secant lines in part (a) are not close to the slope of the tangent line at $P$.
- (c) By choosing appropriate secant lines, estimate the slope of the tangent line at $P$.

---

*This closes Section 2.1 Exercises.*

## Priority gradient

Section 2.1 is short and qualitative — the whole section is basically an extended "motivate limits" warm-up. The exercises are mostly computational practice with secant slopes and average velocities. Don't over-invest.

**Most valuable exercises:**

- **Exercise 5** (ball thrown up at 40 ft/s, $y = 40t - 16t^2$) — classic kinematics setup. You'll reuse this type of problem many times.
- **Exercise 6** (rock on Mars, $y = 10t - 1.86t^2$) — same pattern as Exercise 5 with Martian gravity. The coefficient $1.86$ is half of Mars's surface gravity $3.71$ m/s². Concrete illustration that the "$4.9$" in Galileo's Earth formula is itself $\tfrac{1}{2} g$.
- **Exercise 9** (anti-example: $y = \sin(10\pi/x)$ near $x = 1$) — *the whole point* is that naïve secant calculations *don't* converge nicely. Near $x = 1$ the function oscillates wildly because $10\pi/x$ changes rapidly. **This foreshadows why the formal ε-δ definition is needed** — intuitive "the secants seem to approach something" is unreliable.

**Skim:**

- **Exercises 1, 2, 7** — tabular-data secant practice; pick one.
- **Exercises 3, 4** — numerical calculator exercises; pick one.
- **Exercise 8** — trig displacement; one more variation.

**Do Exercise 9 especially** — it's the problem Stewart uses to demonstrate that you can't trust pure numerical exploration. The connection to Nyquist/aliasing from Section 1.4 is tight: $\sin(10\pi/x)$ has rapidly varying "frequency" near $x = 0$, and a finite sampling can miss the true behavior.
