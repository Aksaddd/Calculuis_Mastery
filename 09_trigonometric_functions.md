# Section 1.2 — Trigonometric Functions

*Covers pp. 32 middle – 33 middle of the book (PDF pp. 60 middle – 61 middle). First transcendental family in Stewart's catalog. Sine, cosine, tangent — their graphs, domains, ranges, zeros, periods, and one modeling example (daylight hours).*

---

## Trigonometric Functions

*Margin note: The Reference Pages are located at the front and back of the book. Trigonometry and the trigonometric functions are reviewed on Reference Page 2 and also in Appendix D.*

### The radian convention

**In calculus, the convention is that radian measure is always used** (except when otherwise indicated). So when we write $f(x) = \sin x$, it is understood that $\sin x$ means the sine of the angle whose **radian** measure is $x$ — not degrees.

**Why radians and not degrees?** Because radians are the unit in which the arc length on a unit circle equals the angle — $\theta$ radians cut off arc length $\theta$ on the unit circle. This makes derivative identities clean: $\frac{d}{dx}\sin x = \cos x$ *exactly* in radians, but comes out scaled by $\pi/180$ in degrees. You'll see this in Chapter 3; for now, just internalize that $x$ inside $\sin x$ means radians.

### Sine and cosine

> **Figure 18 — Graphs of $\sin x$ and $\cos x$.**
> - **(a) $f(x) = \sin x$.** Wave oscillating between $-1$ and $+1$. Zero crossings at $x = -\pi, 0, \pi, 2\pi, 3\pi, \ldots$ (every integer multiple of $\pi$). Peaks at $x = \pi/2, 5\pi/2, \ldots$ (value $+1$). Troughs at $x = -\pi/2, 3\pi/2, \ldots$ (value $-1$).
> - **(b) $g(x) = \cos x$.** Same shape as sine, shifted left by $\pi/2$. Zero crossings at $x = \pm\pi/2, \pm 3\pi/2, \ldots$. Peaks at $x = 0, 2\pi, \ldots$ (value $+1$). Troughs at $x = \pm\pi, 3\pi, \ldots$ (value $-1$).

**Domain and range.** For both sine and cosine:

$$\text{domain} = (-\infty, \infty), \qquad \text{range} = [-1, 1]$$

Equivalently, for all real $x$:

$$-1 \leq \sin x \leq 1, \qquad -1 \leq \cos x \leq 1$$

Or, using absolute values:

$$|\sin x| \leq 1, \qquad |\cos x| \leq 1$$

**Zeros of sine.** The zero set of $\sin$ is exactly the integer multiples of $\pi$:

$$\sin x = 0 \quad \Longleftrightarrow \quad x = n\pi, \ n \in \mathbb{Z}$$

**Zeros of cosine.** Shifted by $\pi/2$:

$$\cos x = 0 \quad \Longleftrightarrow \quad x = \tfrac{\pi}{2} + n\pi, \ n \in \mathbb{Z}$$

### Periodicity

Both sine and cosine are **periodic with period $2\pi$** — the graph repeats every $2\pi$:

$$\sin(x + 2\pi) = \sin x, \qquad \cos(x + 2\pi) = \cos x \qquad \text{for all } x$$

This periodicity makes trig functions the natural modeling tool for **repetitive phenomena**: tides, vibrating springs, sound waves, seasonal oscillations — anything that cycles.

---

### Modeling example — Hours of daylight

In Example 4 of Section 1.3, Stewart will present the following model for the number of hours of daylight in Philadelphia $t$ days after January 1:

$$L(t) = 12 + 2.8 \sin\!\left[\frac{2\pi}{365}(t - 80)\right]$$

**Anatomy of a sinusoidal model** — read the constants:

- **$12$** (vertical shift): the average daylight length — Philadelphia averages ~12 hours, which makes sense (every latitude on Earth averages ~12 hours over a full year).
- **$2.8$** (amplitude): how much daylight deviates from the average. At the extremes, Philadelphia gets $12 + 2.8 = 14.8$ hrs of daylight (summer solstice) and $12 - 2.8 = 9.2$ hrs (winter solstice).
- **$\dfrac{2\pi}{365}$** (angular frequency): makes the period come out to $\dfrac{2\pi}{2\pi/365} = 365$ days — exactly one year.
- **$80$** (horizontal shift / phase): $t = 80$ corresponds to March 21 (the spring equinox, roughly), which is when daylight crosses the annual mean going up. Subtracting 80 inside the sine aligns the zero of the sinusoid with the equinox.

**General sinusoidal template.** Any function of the form

$$f(t) = A + B \sin\!\left[\frac{2\pi}{T}(t - \varphi)\right]$$

has mean $A$, amplitude $|B|$, period $T$, and phase shift $\varphi$. This parameterization is used for every periodic model you'll build — physical oscillators, AC circuits, seasonal-adjustment factors in econometrics, and (relevant to your quant track) the calendar-day effect in option pricing and the weekly seasonality in intraday return data. Recognize the four constants and you can read the physics off the formula.

---

### Tangent

The tangent function is the ratio of sine to cosine:

$$\tan x = \frac{\sin x}{\cos x}$$

- **Domain:** all real $x$ **except** where $\cos x = 0$ — i.e., excluding $x = \pm \pi/2, \pm 3\pi/2, \ldots$.
- **Range:** $(-\infty, \infty)$ — tangent takes every real value.
- **Period:** $\pi$, not $2\pi$:

$$\tan(x + \pi) = \tan x \qquad \text{for all } x \text{ in the domain}$$

(This is because $\sin$ and $\cos$ both flip sign under $x \mapsto x + \pi$, and the signs cancel in the ratio.)

> **Figure 19 — $y = \tan x$.** Infinitely many vertical asymptotes, one at each zero of cosine. Between consecutive asymptotes (e.g., between $-\pi/2$ and $\pi/2$), the graph rises monotonically from $-\infty$ (as $x \to -\pi/2^+$) through the origin (where $\tan 0 = 0$) up to $+\infty$ (as $x \to \pi/2^-$). The pattern repeats in every interval of length $\pi$ — hence the period $\pi$.

### The other three trig functions

Cosecant, secant, and cotangent are the reciprocals of sine, cosine, and tangent respectively:

$$\csc x = \frac{1}{\sin x}, \qquad \sec x = \frac{1}{\cos x}, \qquad \cot x = \frac{1}{\tan x} = \frac{\cos x}{\sin x}$$

Their graphs are in Appendix D. Summary of what to know about each:

| Function | Domain excludes | Range | Period |
|----------|-----------------|-------|--------|
| $\csc x$ | zeros of $\sin$: $x = n\pi$ | $(-\infty, -1] \cup [1, \infty)$ | $2\pi$ |
| $\sec x$ | zeros of $\cos$: $x = \frac{\pi}{2} + n\pi$ | $(-\infty, -1] \cup [1, \infty)$ | $2\pi$ |
| $\cot x$ | zeros of $\sin$: $x = n\pi$ | $(-\infty, \infty)$ | $\pi$ |

---

## Why trig functions are transcendental

None of $\sin, \cos, \tan$ can be written as a finite algebraic combination of polynomials and roots. (Proof is non-trivial and belongs to analysis / transcendence theory — Lindemann's theorem is the canonical reference.)

Operationally: you **cannot** reduce $\sin x$ to anything finite in $x$ using $+, -, \times, \div, \sqrt[n]{\phantom{x}}$. You can only express it as an **infinite** series — and in Chapter 11 you'll derive the Taylor series

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$$

The need for an *infinite* expansion is precisely what makes it transcendental, and it's why trig, exponential, and logarithmic functions had to wait for calculus (with its apparatus of limits and infinite series) to be placed on rigorous footing.

---

*End of Unit 4. Next unit picks up the remaining transcendentals: exponentials, logarithms, and Stewart's "transcendental functions" wrap-up.*
