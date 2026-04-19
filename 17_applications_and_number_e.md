# Section 1.5 — Applications and the Number $e$

*Covers pp. 55 middle – 57 of the book (PDF pp. 83 middle – 85). Two short sub-sections plus two examples: applications of exponentials to population modeling, then the rigorous definition of Euler's number $e$ via the "tangent line has slope 1" characterization.*

---

## Applications of Exponential Functions

The exponential function occurs very frequently in mathematical models of nature and society. Here we sketch briefly how it arises in population growth; Chapter 3 develops these applications in much more detail.

### Bacterial population (doubling)

Consider a population of bacteria in a homogeneous nutrient medium. Suppose the population doubles every hour. Let $p(t)$ be the bacteria count at time $t$ (hours), with initial population $p(0) = 1000$.

Applying the doubling rule:

$$p(1) = 2\,p(0) = 2 \times 1000$$
$$p(2) = 2\,p(1) = 2^2 \times 1000$$
$$p(3) = 2\,p(2) = 2^3 \times 1000$$

Pattern:

$$p(t) = 2^t \times 1000 = 1000 \cdot 2^t$$

This is the exponential function $y = 2^t$ times a scaling constant — so it inherits the rapid-growth behavior from Figures 2 and 7. **Under ideal conditions (unlimited nutrients, unlimited space, no disease, no competition), this is what actually happens in nature.**

### Human population (continuous growth)

Table 1 shows the world population from 1900 to 2000 (same table we saw in Section 1.1 and 1.2). Figure 8 shows the scatter plot.

**Table 1 — World population in millions.**

| Year | Population (millions) | Year | Population (millions) |
|:---:|:---:|:---:|:---:|
| 1900 | 1650 | 1960 | 3040 |
| 1910 | 1750 | 1970 | 3710 |
| 1920 | 1860 | 1980 | 4450 |
| 1930 | 2070 | 1990 | 5280 |
| 1940 | 2300 | 2000 | 6080 |
| 1950 | 2560 | | |

> **Figure 8 — Scatter plot for world population growth.** Axes: year $t$ from 1900 to 2000; population $P$ rising from about $1.6 \times 10^9$ to $6 \times 10^9$. The pattern is clearly concave-up — growing faster than linearly — suggestive of exponential.

**Fit an exponential model by least-squares.** Using a graphing calculator with exponential regression capability:

$$P = (0.008079266) \cdot (1.013731)^t$$

This is an exponential function with base $a = 1.013731$ — an annual growth rate of about 1.37%.

> **Figure 9 — Exponential model for population growth.** Same scatter from Figure 8, now with the smooth fitted curve $(0.008079266)(1.013731)^t$ drawn through it. Excellent fit, though slightly under-fitting the 1940s–50s (the period of slow growth during WWII and its recovery).

**Stewart's observation:** the period of relatively slow population growth is explained by the two world wars and the Great Depression of the 1930s — external shocks that temporarily suppressed the baseline exponential trajectory.

**A framing for your quant work.** The exponential model here is doing what every factor model does: capture the baseline trend, then treat deviations from the trend as the interesting signal. Residuals from a linear or exponential trend are where alpha lives. The shape of the residuals in Figure 9 — slow during crises, fast during recoveries — is literally the first-ever example of "mean-reverting deviations from a growth trend" that you'll encounter systematically in business-cycle econometrics.

---

## The Number $e$

Of all possible bases for an exponential function, there is one that is most convenient for the purposes of calculus. How do we pick it?

### The tangent-slope criterion

Look at the graphs of $y = 2^x$ and $y = 3^x$ at the point $(0, 1)$. (Both pass through $(0, 1)$ because $a^0 = 1$.)

**Tangent lines at $(0, 1)$ will be defined precisely in Section 2.7. For now, think of the tangent line to an exponential graph at a point as the line that touches the graph only at that point.**

Measuring the tangent slopes experimentally:
- $y = 2^x$ at $(0, 1)$ has tangent slope $m \approx 0.7$.
- $y = 3^x$ at $(0, 1)$ has tangent slope $m \approx 1.1$.

> **Figure 10 — $y = 2^x$ with its tangent line at $(0, 1)$.** A growing exponential with a straight tangent line passing through $(0, 1)$, the tangent line visibly having slope less than 1 (marked $m \approx 0.7$).

> **Figure 11 — $y = 3^x$ with its tangent line at $(0, 1)$.** Same setup but steeper — the tangent line has slope slightly more than 1 (marked $m \approx 1.1$).

**The slope of the tangent at $(0,1)$ varies continuously with the base.** At base 2, slope is 0.7. At base 3, slope is 1.1. **By the intermediate value theorem, there must be some base between 2 and 3 where the tangent slope at $(0,1)$ is exactly 1.** That base is the natural base $e$.

> **Definition (informal).** $e$ is the unique base such that the graph of $y = e^x$ has tangent slope exactly $1$ at the point $(0, 1)$.

### Why this matters for calculus

As we'll see in Chapter 3, picking $e$ as the base makes the derivative formula as clean as possible:

$$\frac{d}{dx}\,e^x = e^x$$

For any other base, you pick up a clutter factor:

$$\frac{d}{dx}\,a^x = (\ln a) \cdot a^x$$

$e$ is precisely the base that kills the clutter factor ($\ln e = 1$). Every other exponential base eventually gets converted to base $e$ in calculus — which is why $e$ deserves its special name.

### Historical naming

The notation $e$ was chosen by the Swiss mathematician **Leonhard Euler** in 1727 — probably because it's the first letter of "exponential."

To five decimal places:

$$e \approx 2.71828$$

> **Figure 12 — $y = e^x$ with tangent line of slope 1.** Growing exponential through $(0, 1)$ with the tangent line at that point having the symmetric slope of exactly 1 — you can see it visually bisecting the angle between horizontal and the tangent to $y = 3^x$.

> **Figure 13 — $y = 2^x, y = e^x, y = 3^x$ on the same axes.** Three exponentials all passing through $(0, 1)$. Ordering of growth rates: $2^x < e^x < 3^x$ for $x > 0$, and the ordering reverses for $x < 0$. $e^x$ sits between them — "the Goldilocks exponential."

*Margin note: TEC Module 1.5 enables you to graph exponential functions with various bases and their tangent lines in order to estimate more closely the value of $a$ for which the tangent has slope 1.*

### Further characterizations of $e$ (beyond Stewart)

The tangent-slope criterion is one way to single out $e$. Other equivalent definitions you'll meet later, worth having in one place:

| Characterization | Form |
|---|---|
| Tangent-slope-at-origin (Stewart's here) | $\left.\dfrac{d}{dx}a^x\right|_{x=0} = 1 \iff a = e$ |
| Compound-interest limit | $e = \lim_{n \to \infty} \left(1 + \dfrac{1}{n}\right)^n$ |
| Continuous-compounding limit | $e^x = \lim_{n \to \infty} \left(1 + \dfrac{x}{n}\right)^n$ |
| Series definition | $e = \sum_{n=0}^\infty \dfrac{1}{n!} = 1 + 1 + \dfrac{1}{2} + \dfrac{1}{6} + \cdots$ |
| Derivative-equation | $e^x$ is the unique function with $f'(x) = f(x)$ and $f(0) = 1$ |

**All five characterizations give the same number.** Each is natural in a different context: calculus (tangent slope / derivative), compound interest (the limit definition), Taylor series (the series), differential equations (the derivative characterization). You'll see all of these in the course.

**The compound-interest characterization** is particularly close to your quant work. If \$1 is invested at 100% annual interest compounded $n$ times per year, you end the year with $\left(1 + \tfrac{1}{n}\right)^n$. As compounding gets continuous ($n \to \infty$), the limit is exactly $e$. Continuous compounding is the idealization that drops the discrete-time artifact and gives clean analytical formulas — which is why quantitative finance uses $e^{rt}$ everywhere for discounting.

---

## Example 3 — Graph $y = \tfrac{1}{2}\,e^{-x} - 1$

Graph the function $y = \tfrac{1}{2}\,e^{-x} - 1$ and state the domain and range.

***Solution.*** Four transformation steps starting from $y = e^x$:

1. Start with $y = e^x$ (Figure 14(a)).
2. Reflect about the $y$-axis to get $y = e^{-x}$ (Figure 14(b)). *Note: this new graph crosses the $y$-axis with a slope of $-1$* (mirror of the $+1$ slope of the original).
3. Compress vertically by a factor of 2: $y = \tfrac{1}{2}\,e^{-x}$ (Figure 14(c)).
4. Shift down 1 unit: $y = \tfrac{1}{2}\,e^{-x} - 1$ (Figure 14(d)).

**Domain:** $\mathbb{R}$.

**Range:** Since $e^{-x} > 0$, we have $\tfrac{1}{2}\,e^{-x} > 0$, so $\tfrac{1}{2}\,e^{-x} - 1 > -1$. And as $x \to \infty$, $\tfrac{1}{2}\,e^{-x} \to 0$, so the shifted curve approaches $-1$ from above (horizontal asymptote at $y = -1$).

$$\text{range} = (-1, \infty)$$

> **Figure 14 — Four panels showing the step-by-step transformation.**
> - **(a) $y = e^x$:** growing exponential through $(0, 1)$.
> - **(b) $y = e^{-x}$:** mirror image across the $y$-axis. Decaying exponential through $(0, 1)$. Approaches $x$-axis as $x \to \infty$.
> - **(c) $y = \tfrac{1}{2}\,e^{-x}$:** panel (b) with heights halved. Passes through $(0, 0.5)$.
> - **(d) $y = \tfrac{1}{2}\,e^{-x} - 1$:** panel (c) shifted down 1. Passes through $(0, -0.5)$. Horizontal asymptote at $y = -1$ shown as dashed line.

---

## Example 4 — How large does $x$ have to be for $e^x$ to exceed a million?

Use a graphing device to find the values of $x$ for which $e^x > 1{,}000{,}000$.

***Solution.*** Graph $y = e^x$ and the horizontal line $y = 10^6$ on the same axes. They intersect at $x \approx 13.8$.

$$e^x > 10^6 \quad \text{when} \quad x > 13.8$$

> **Figure 15 — Finding where $e^x$ exceeds one million.** Axes show $x$ from $0$ to $15$ and $y$ from $0$ to $1.5 \times 10^6$. The curve $y = e^x$ starts near the $x$-axis and stays flat until about $x = 13$, then rockets up through the horizontal line $y = 10^6$ at roughly $x = 13.8$. The upper portion of the viewing window shows the dramatic steepening.

**Scale intuition — why this should surprise you.** $e^{13} \approx 442{,}413$ and $e^{14} \approx 1{,}202{,}604$. The million-mark is reached somewhere in between. What makes this startling is how *short* the $x$-interval is: going from "near zero" at $x = 0$ to "over a million" at $x \approx 14$ takes only 14 units. **This is the lived reality of exponential growth** — absolutely nothing for a long stretch, then everything all at once.

**Log-scale is the natural scale.** Plotting $y = e^x$ on a log scale turns the curve into a straight line of slope 1. Any time you're looking at data that "looks exponential" on a linear plot, re-plot with a log $y$-axis — if it straightens out, you have confirmation of exponential behavior, and the slope reads off the growth rate. This is a 30-second diagnostic you should apply to any time series in your quant work before assuming a linear model.

---

*End of Unit 2. Section 1.5's exposition is complete. Unit 3 is Exercises 1–30.*
