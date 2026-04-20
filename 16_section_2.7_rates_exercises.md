# Section 2.7 — Derivatives and Rates of Change (Part B): Rates of Change + Applications + Exercises

*Covers pp. 147–153 of the book (PDF pp. 175–181). The second interpretation of the derivative — as an instantaneous rate of change — plus three worked applications (manufacturing cost, national debt, and a general rates-of-change catalog), and all 52 exercises.*

---

## Rates of Change

Suppose $y$ is a quantity that depends on another quantity $x$. Thus $y$ is a function of $x$ and we write $y = f(x)$.

### Average rate of change

If $x$ changes from $x_1$ to $x_2$:
- **Change in $x$** (also called the **increment** of $x$): $\Delta x = x_2 - x_1$
- **Corresponding change in $y$**: $\Delta y = f(x_2) - f(x_1)$

The difference quotient

$$\frac{\Delta y}{\Delta x} = \frac{f(x_2) - f(x_1)}{x_2 - x_1}$$

is called the **average rate of change of $y$ with respect to $x$** over the interval $[x_1, x_2]$.

**Geometrically:** this is the slope of the secant line $PQ$ connecting $P(x_1, f(x_1))$ and $Q(x_2, f(x_2))$ on the graph of $f$ (Figure 8).

### Instantaneous rate of change

By analogy with velocity, we consider the average rate of change over smaller and smaller intervals by letting $x_2$ approach $x_1$ and therefore letting $\Delta x$ approach 0. The limit is called the **instantaneous rate of change of $y$ with respect to $x$** at $x = x_1$:

$$\tag{6} \text{instantaneous rate of change} = \lim_{\Delta x \to 0}\frac{\Delta y}{\Delta x} = \lim_{x_2 \to x_1}\frac{f(x_2) - f(x_1)}{x_2 - x_1}$$

**We recognize this limit as being the derivative $f'(x_1)$.** Therefore we have another interpretation of the derivative:

> **The derivative $f'(a)$ is the instantaneous rate of change of $y = f(x)$ with respect to $x$ when $x = a$.**

### The two interpretations unified

We now have two interpretations of $f'(a)$ that are geometrically the same:

1. **Slope of the tangent line** to $y = f(x)$ at $x = a$.
2. **Instantaneous rate of change** of $y = f(x)$ with respect to $x$ at $x = a$.

> **Figure 9 — Comparison of rapid vs. slow change.** At a point $P$ where the derivative is *large*, the curve is *steep* (the tangent has high slope) — so the $y$-values change rapidly as $x$ changes. At a point $Q$ where the derivative is *small*, the curve is *relatively flat* — $y$-values change slowly. **Conceptually: steep ⟷ large derivative ⟷ rapid change; flat ⟷ small derivative ⟷ slow change.**

### Velocity as a rate of change

In particular, if $s = f(t)$ is the position function of a particle that moves along a straight line, then $f'(a)$ is the **rate of change of the displacement $s$** with respect to the time $t$. In other words, $f'(a)$ is the **velocity** of the particle at time $t = a$. The **speed** of the particle is the absolute value of the velocity: $|f'(a)|$.

---

### Example 6 — Marginal cost (interpretation of a derivative)

A manufacturer produces bolts of a fabric with a fixed width. The cost of producing $x$ yards of this fabric is $C = f(x)$ dollars.
- (a) What is the meaning of the derivative $f'(x)$? What are its units?
- (b) In practical terms, what does it mean to say that $f'(1000) = 9$?
- (c) Which do you think is greater, $f'(50)$ or $f'(500)$? What about $f'(5000)$?

***Solution.***

**(a) Meaning and units.** The derivative $f'(x)$ is the instantaneous rate of change of $C$ with respect to $x$; that is, $f'(x)$ means the rate of change of the production cost with respect to the number of yards produced. **Economists call this rate of change the *marginal cost*.** (Idea discussed in detail in Sections 3.7 and 4.7.)

Because

$$f'(x) = \lim_{\Delta x \to 0}\frac{\Delta C}{\Delta x}$$

the units for $f'(x)$ are the same as the units for the difference quotient $\Delta C/\Delta x$. Since $\Delta C$ is measured in dollars and $\Delta x$ in yards, the units for $f'(x)$ are **dollars per yard**.

**(b) Interpretation of $f'(1000) = 9$.** After 1000 yards of fabric have been manufactured, the rate at which the production cost is increasing is \$9/yard.

Since $\Delta x = 1$ is small compared with $x = 1000$, we could use the approximation

$$f'(1000) \approx \frac{\Delta C}{\Delta x} = \frac{\Delta C}{1} = \Delta C$$

and say that the cost of manufacturing the 1000th yard (or the 1001st) is about \$9.

*Margin note: Here we are assuming that the cost function is well behaved; in other words, $C(x)$ doesn't oscillate rapidly near $x = 1000$.*

**(c) Comparing $f'(50)$ vs $f'(500)$ vs $f'(5000)$.** The rate at which the production cost is increasing (per yard) is probably **lower** when $x = 500$ than when $x = 50$ — the cost of making the 500th yard is less than the cost of making the 50th yard — because of **economies of scale** (the manufacturer makes more efficient use of the fixed costs of production). So:

$$f'(50) > f'(500)$$

But, as production expands further, the resulting large-scale operation might become inefficient and there might be overtime costs. Thus it's possible that the rate of increase of costs will eventually start to rise. So it may happen that:

$$f'(5000) > f'(500)$$

**The marginal-cost U-shape.** Marginal cost often decreases initially (economies of scale), hits a minimum, and rises at very high volumes (diseconomies of scale). **This U-shape is a classical microeconomics result** and is what Example 6(c) is hinting at.

---

### Example 7 — Rate of change estimated from a table of values

Let $D(t)$ be the US national debt at time $t$. The table gives approximate values of this function by providing end-of-year estimates, in billions of dollars, from 1980 to 2000. Interpret and estimate the value of $D'(1990)$.

| $t$ (year) | $D(t)$ (\$ billions) |
|:---:|:---:|
| 1980 | 930.2 |
| 1985 | 1945.9 |
| 1990 | 3233.3 |
| 1995 | 4974.0 |
| 2000 | 5674.2 |

***Solution.*** The derivative $D'(1990)$ means the **rate of change** of $D$ with respect to $t$ when $t = 1990$ — that is, the rate of increase of the national debt in 1990.

According to Equation 5 (the $x \to a$ form):

$$D'(1990) = \lim_{t \to 1990}\frac{D(t) - D(1990)}{t - 1990}$$

**We can't take the limit exactly with discrete data** — we only have values every 5 years. But we can compute the difference quotients (the average rates of change) at each available $t$ and see what they suggest:

| $t$ | $\frac{D(t) - D(1990)}{t - 1990}$ |
|:---:|:---:|
| 1980 | $\frac{930.2 - 3233.3}{1980 - 1990} = 230.31$ |
| 1985 | $\frac{1945.9 - 3233.3}{1985 - 1990} = 257.48$ |
| 1995 | $\frac{4974.0 - 3233.3}{1995 - 1990} = 348.14$ |
| 2000 | $\frac{5674.2 - 3233.3}{2000 - 1990} = 244.09$ |

*Margin note on units: The units for the average rate of change $\Delta D / \Delta t$ are the units for $\Delta D$ divided by the units for $\Delta t$ — namely, billions of dollars per year. The instantaneous rate of change is the limit of the average rates of change, so it is measured in the same units.*

From this table we see that $D'(1990)$ lies somewhere between 257.48 and 348.14 billion dollars per year. (Here we are making the reasonable assumption that the debt didn't fluctuate wildly between 1980 and 2000.) **We estimate** that the rate of increase of the national debt of the United States in 1990 was the average of these two numbers, namely

$$D'(1990) \approx 303 \text{ billion dollars per year}$$

**Another method** would be to plot the debt function and estimate the slope of the tangent line when $t = 1990$.

**The "average-of-neighbors" technique.** When estimating a derivative from discrete data, averaging the two nearest difference quotients (one from each side of the target point) gives a **centered difference** estimate, which has better accuracy than a one-sided estimate. **This is exactly the central-difference approximation $f'(t_i) \approx (f(t_{i+1}) - f(t_{i-1}))/(t_{i+1} - t_{i-1})$** used in numerical differentiation and in computing Greeks from market prices.

---

## The Universal Interpretation

In Examples 3, 6, and 7 we saw three specific examples of rates of change:
- The **velocity** of an object is the rate of change of displacement with respect to time.
- **Marginal cost** is the rate of change of production cost with respect to the number of items produced.
- The rate of change of the **debt** with respect to time is of interest in economics.

A small sample of other rates of change:

| Context | Quantity | Rate of change |
|:---|:---|:---|
| Physics | Work | **Power** (work with respect to time) |
| Chemistry | Reactant concentration | **Rate of reaction** |
| Biology | Population of a bacterial colony | **Rate of population growth** |
| Demography | Human population | **Birth rate / death rate** |
| Meteorology | Atmospheric pressure | **Rate of pressure change** (gradient) |
| Electricity | Current | **Rate of flow of charge** |
| Statistics | Distribution function $F$ | **Probability density $f = F'$** |

**In fact, the computation of rates of change is important in all of the natural sciences, in engineering, and even in the social sciences.** Further examples will be given in Section 3.7.

**All these rates of change are derivatives and can therefore be interpreted as slopes of tangents.** This gives added significance to the solution of the tangent problem. Whenever we solve a problem involving tangent lines, we are not just solving a problem in geometry; we are also **implicitly solving a great variety of problems involving rates of change** in science and engineering.

---

## Exercises

*Legend: `[HINT]` = cyan-boxed; `[GRAPH]` = graphing tool.*

---

### Conceptual warm-up (Exercises 1–2)

**1.** A curve has equation $y = f(x)$.
- (a) Write an expression for the slope of the secant line through the points $P(3, f(3))$ and $Q(x, f(x))$.
- (b) Write an expression for the slope of the tangent line at $P$.

**2.** `[GRAPH]` Graph the curve $y = e^x$ in the viewing rectangles $[-1, 1]$ by $[0, 2]$, $[-0.5, 0.5]$ by $[0.5, 1.5]$, and $[-0.1, 0.1]$ by $[0.9, 1.1]$. What do you notice about the curve as you zoom in toward the point $(0, 1)$?

---

### Tangent slopes (Exercises 3–4)

**3.**
- (a) Find the slope of the tangent line to the parabola $y = 4x - x^2$ at the point $(1, 3)$
  - (i) using Definition 1
  - (ii) using Equation 2
- (b) Find an equation of the tangent line in part (a).
- (c) `[GRAPH]` Graph the parabola and the tangent line. As a check on your work, zoom in toward the point $(1, 3)$ until the parabola and the tangent line are indistinguishable.

**4.**
- (a) Find the slope of the tangent line to the curve $y = x - x^3$ at the point $(1, 0)$
  - (i) using Definition 1
  - (ii) using Equation 2
- (b) Find an equation of the tangent line in part (a).
- (c) `[GRAPH]` Graph the curve and the tangent line in successively smaller viewing rectangles centered at $(1, 0)$ until the curve and the line appear to coincide.

---

### Find tangent-line equations (Exercises 5–8)

**5–8.** Find an equation of the tangent line to the curve at the given point.

**5.** `[HINT]` $y = \dfrac{x - 1}{x - 2}$, $\ (3, 2)$

**6.** $y = 2x^3 - 5x$, $\ (-1, 3)$

**7.** `[HINT]` $y = \sqrt{x}$, $\ (1, 1)$

**8.** $y = \dfrac{2x}{(x + 1)^2}$, $\ (0, 0)$

---

### Tangent slopes at multiple points (Exercises 9–10)

**9.** `[HINT]`
- (a) Find the slope of the tangent to the curve $y = 3 + 4x^2 - 2x^3$ at the point where $x = a$.
- (b) Find equations of the tangent lines at the points $(1, 5)$ and $(2, 3)$.
- (c) `[GRAPH]` Graph the curve and both tangents on a common screen.

**10.**
- (a) Find the slope of the tangent to the curve $y = 1/\sqrt{x}$ at the point where $x = a$.
- (b) Find equations of the tangent lines at the points $(1, 1)$ and $(4, \tfrac{1}{2})$.
- (c) `[GRAPH]` Graph the curve and both tangents on a common screen.

---

### Particle motion / race (Exercises 11–12)

**11.**
- (a) A particle starts by moving to the right along a horizontal line; the graph of its position function is shown. When is the particle moving to the right? Moving to the left? Standing still?
- (b) Draw a graph of the velocity function.

> **Graph provided.** A position function $s(t)$ over $t \in [0, 8]$ seconds with specific inflection points showing direction changes.

**12.** Shown are graphs of the position functions of two runners, A and B, who run a 100-m race and finish in a tie.
- (a) Describe and compare how the runners run the race.
- (b) At what time is the distance between the runners the greatest?
- (c) At what time do they have the same velocity?

> **Graph provided.** Two monotonically increasing curves (A and B) meeting at $s = 100$ m at the finish. A is initially faster, then slower; B is initially slower, then faster.

---

### Velocity of a thrown object (Exercises 13–14)

**13.** `[HINT]` If a ball is thrown into the air with a velocity of 40 ft/s, its height in feet after $t$ seconds is given by $y = 40t - 16t^2$. Find the velocity when $t = 2$.

**14.** If a rock is thrown upward on the planet Mars with a velocity of 10 m/s, its height (in meters) after $t$ seconds is given by $H = 10t - 1.86t^2$.
- (a) Find the velocity of the rock after one second.
- (b) Find the velocity of the rock when $t = a$.
- (c) When will the rock hit the surface?
- (d) With what velocity will the rock hit the surface?

---

### Particle on a line (Exercises 15–16)

**15.** The displacement (in meters) of a particle moving in a straight line is given by the equation of motion $s = 1/t^2$, where $t$ is measured in seconds. Find the velocity of the particle at times $t = a$, $t = 1$, $t = 2$, and $t = 3$.

**16.** The displacement (in meters) of a particle moving in a straight line is given by $s = t^2 - 8t + 18$, where $t$ is measured in seconds.
- (a) Find the average velocity over each time interval:
  - (i) $[3, 4]$
  - (ii) $[3.5, 4]$
  - (iii) $[4, 5]$
  - (iv) $[4, 4.5]$
- (b) Find the instantaneous velocity when $t = 4$.
- (c) Draw the graph of $s$ as a function of $t$ and draw the secant lines whose slopes are the average velocities in part (a) and the tangent line whose slope is the instantaneous velocity in part (b).

---

### Order-derivatives-at-points (Exercises 17–18)

**17.** `[HINT]` For the function $g$ whose graph is given, arrange the following numbers in increasing order and explain your reasoning:
$$0 \qquad g'(-2) \qquad g'(0) \qquad g'(2) \qquad g'(4)$$

> **Graph provided.** A curve resembling a sinusoid on $[-1, 5]$ with visible peaks, valleys, and slope changes.

**18.** `[HINT]`
- (a) Find an equation of the tangent line to the graph of $y = g(x)$ at $x = 5$ if $g(5) = -3$ and $g'(5) = 4$.
- (b) If the tangent line to $y = f(x)$ at $(4, 3)$ passes through the point $(0, 2)$, find $f(4)$ and $f'(4)$.

---

### Sketch with constraints (Exercises 19–20)

**19.** `[HINT]` Sketch the graph of a function $f$ for which $f(0) = 0$, $f'(0) = 3$, $f'(1) = 0$, and $f'(2) = -1$.

**20.** Sketch the graph of a function $g$ for which $g(0) = g'(0) = 0$, $g'(-1) = -1$, $g'(1) = 3$, and $g'(2) = 1$.

---

### Derivative + tangent via formula (Exercises 21–24)

**21.** If $f(x) = 3x^2 - 5x$, find $f'(2)$ and use it to find an equation of the tangent line to the parabola $y = 3x^2 - 5x$ at the point $(2, 2)$.

**22.** If $g(x) = 1 - x^3$, find $g'(0)$ and use it to find an equation of the tangent line to the curve $y = 1 - x^3$ at the point $(0, 1)$.

**23.** `[HINT]`
- (a) If $F(x) = 5x/(1 + x^2)$, find $F'(2)$ and use it to find an equation of the tangent line to the curve $y = 5x/(1 + x^2)$ at the point $(2, 2)$.
- (b) `[GRAPH]` Illustrate part (a) by graphing the curve and the tangent line on the same screen.

**24.**
- (a) If $G(x) = 4x^2 - x^3$, find $G'(a)$ and use it to find equations of the tangent lines to the curve $y = 4x^2 - x^3$ at the points $(2, 8)$ and $(3, 9)$.
- (b) `[GRAPH]` Illustrate part (a) by graphing the curve and the tangent lines on the same screen.

---

### Find $f'(a)$ (Exercises 25–30)

**25–30.** Find $f'(a)$.

**25.** $f(x) = 3 - 2x + 4x^2$

**26.** $f(t) = t^4 - 5t$

**27.** `[HINT]` $f(t) = \dfrac{2t + 1}{t + 3}$

**28.** $f(x) = \dfrac{x^2 + 1}{x - 2}$

**29.** $f(x) = \dfrac{1}{\sqrt{x + 2}}$

**30.** $f(x) = \sqrt{3x + 1}$

---

### Limits as derivatives in disguise (Exercises 31–36)

**31–36.** Each limit represents the derivative of some function $f$ at some number $a$. State such an $f$ and $a$ in each case.

**31.** $\displaystyle \lim_{h \to 0}\frac{(1 + h)^{10} - 1}{h}$

**32.** $\displaystyle \lim_{h \to 0}\frac{\sqrt[4]{16 + h} - 2}{h}$

**33.** $\displaystyle \lim_{x \to 5}\frac{2^x - 32}{x - 5}$

**34.** $\displaystyle \lim_{x \to \pi/4}\frac{\tan x - 1}{x - \pi/4}$

**35.** `[HINT]` $\displaystyle \lim_{h \to 0}\frac{\cos(\pi + h) + 1}{h}$

**36.** $\displaystyle \lim_{t \to 1}\frac{t^4 + t - 2}{t - 1}$

---

### Velocity and speed (Exercises 37–38)

**37–38.** A particle moves along a straight line with equation of motion $s = f(t)$, where $s$ is measured in meters and $t$ in seconds. Find the velocity and the speed when $t = 5$.

**37.** $f(t) = 100 + 50t - 4.9t^2$

**38.** $f(t) = t^{-1} - t$

---

### Applied rate-of-change interpretations (Exercises 39–50)

**39.** `[HINT]` A warm can of soda is placed in a cold refrigerator. Sketch the graph of the temperature of the soda as a function of time. Is the initial rate of change of temperature greater or less than the rate of change after an hour?

**40.** A roast turkey is taken from an oven when its temperature has reached 185°F and is placed on a table in a room where the temperature is 75°F. The graph shows how the temperature of the turkey decreases and eventually approaches room temperature. By measuring the slope of the tangent, estimate the rate of change of the temperature after an hour.

> **Graph provided.** Cooling curve approaching 75°F asymptotically; $T$ vs. $t$ in minutes.

**41.** The table shows the estimated percentage $P$ of the population of Europe that use cell phones. (Midyear estimates are given.)

| Year | 1998 | 1999 | 2000 | 2001 | 2002 | 2003 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $P$ | 28 | 39 | 55 | 68 | 77 | 83 |

- (a) Find the average rate of cell phone growth
  - (i) from 2000 to 2002
  - (ii) from 2000 to 2001
  - (iii) from 1999 to 2000

  In each case, include the units.
- (b) Estimate the instantaneous rate of growth in 2000 by taking the average of two average rates of change. What are its units?
- (c) Estimate the instantaneous rate of growth in 2000 by measuring the slope of a tangent.

**42.** The number $N$ of locations of a popular coffeehouse chain is given in the table.

| Year | 1998 | 1999 | 2000 | 2001 | 2002 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $N$ | 1886 | 2135 | 3501 | 4709 | 5886 |

- (a) Find the average rate of growth
  - (i) from 2000 to 2002
  - (ii) from 2000 to 2001
  - (iii) from 1999 to 2000

  In each case, include the units.
- (b) Estimate the instantaneous rate of growth in 2000 by taking the average of two average rates of change. What are its units?
- (c) Estimate the instantaneous rate of growth in 2000 by measuring the slope of a tangent.

**43.** `[HINT]` The cost (in dollars) of producing $x$ units of a certain commodity is $C(x) = 5000 + 10x + 0.05x^2$.
- (a) Find the average rate of change of $C$ with respect to $x$ when the production level is changed
  - (i) from $x = 100$ to $x = 105$
  - (ii) from $x = 100$ to $x = 101$
- (b) Find the instantaneous rate of change of $C$ with respect to $x$ when $x = 100$. (This is called the *marginal cost.* Its significance will be explained in Section 3.7.)

**44.** If a cylindrical tank holds 100,000 gallons of water, which can be drained from the bottom of the tank in an hour, then Torricelli's Law gives the volume $V$ of water remaining in the tank after $t$ minutes as
$$V(t) = 100{,}000\!\left(1 - \frac{t}{60}\right)^{\!2} \qquad 0 \leq t \leq 60$$
Find the rate at which the water is flowing out of the tank (the instantaneous rate of change of $V$ with respect to $t$) as a function of $t$. What are its units? For times $t = 0, 10, 20, 30, 40, 50$, and 60 min, find the flow rate and the amount of water remaining in the tank. Summarize your findings in a sentence or two. At what time is the flow rate the greatest? The least?

**45.** `[HINT]` The cost of producing $x$ ounces of gold from a new gold mine is $C = f(x)$ dollars.
- (a) What is the meaning of the derivative $f'(x)$? What are its units?
- (b) What does the statement $f'(800) = 17$ mean?
- (c) Do you think the values of $f'(x)$ will increase or decrease in the short term? What about the long term? Explain.

**46.** The number of bacteria after $t$ hours in a controlled laboratory experiment is $n = f(t)$.
- (a) What is the meaning of the derivative $f'(5)$? What are its units?
- (b) Suppose there is an unlimited amount of space and nutrients for the bacteria. Which do you think is larger, $f'(5)$ or $f'(10)$? If the supply of nutrients is limited, would that affect your conclusion? Explain.

**47.** `[HINT]` Let $T(t)$ be the temperature (in °F) in Dallas $t$ hours after midnight on June 2, 2001. The table shows values of this function recorded every two hours. What is the meaning of $T'(10)$? Estimate its value.

| $t$ | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $T$ | 73 | 73 | 70 | 69 | 72 | 81 | 88 | 91 |

**48.** The quantity (in pounds) of a gourmet ground coffee that is sold by a coffee company at a price of $p$ dollars per pound is $Q = f(p)$.
- (a) What is the meaning of the derivative $f'(8)$? What are its units?
- (b) Is $f'(8)$ positive or negative? Explain.

**49.** The quantity of oxygen that can dissolve in water depends on the temperature of the water. (So thermal pollution influences the oxygen content of water.) The graph shows how oxygen solubility $S$ varies as a function of the water temperature $T$.
- (a) What is the meaning of the derivative $S'(T)$? What are its units?
- (b) Estimate the value of $S'(16)$ and interpret it.

> **Graph provided.** Solubility $S$ (mg/L) decreasing from 16 at low temperature toward 6 at high temperature over $T \in [0, 40]$°C.

**50.** The graph shows the influence of the temperature $T$ on the maximum sustainable swimming speed $S$ of Coho salmon.
- (a) What is the meaning of the derivative $S'(T)$? What are its units?
- (b) Estimate the values of $S'(15)$ and $S'(25)$ and interpret them.

> **Graph provided.** Bell-shaped curve for $S$ (cm/s) vs $T$ (°C) with peak around 15°C, range 0-30°C.

---

### Differentiability — does $f'(0)$ exist? (Exercises 51–52)

**51–52.** Determine whether $f'(0)$ exists.

**51.** `[HINT]` $f(x) = \begin{cases} x \sin(1/x) & \text{if } x \neq 0 \\ 0 & \text{if } x = 0 \end{cases}$

**52.** $f(x) = \begin{cases} x^2 \sin(1/x) & \text{if } x \neq 0 \\ 0 & \text{if } x = 0 \end{cases}$

---

## Writing Project — Early Methods for Finding Tangents

*The first person to formulate explicitly the ideas of limits and derivatives was Sir Isaac Newton in the 1660s. But Newton acknowledged that "If I have seen further than other men, it is because I have stood on the shoulders of giants." Two of those giants were Pierre Fermat (1601–1665) and Newton's teacher at Cambridge, Isaac Barrow (1630–1677). Newton was familiar with the methods that these men used to find tangent lines, and their methods played a role in Newton's eventual formulation of calculus.*

*The following references contain explanations of these methods. Read one or more of the references and write a report comparing the methods of either Fermat or Barrow to modern methods. In particular, use the method of Section 2.7 to find an equation of the tangent line to the curve $y = x^3 + 2x$ at the point $(1, 3)$ and show how either Fermat or Barrow would have solved the same problem. Although you used derivatives and they did not, point out similarities between the methods.*

**References:**
1. Carl Boyer and Uta Merzbach, *A History of Mathematics* (New York: Wiley, 1989), pp. 389, 432.
2. C. H. Edwards, *The Historical Development of the Calculus* (New York: Springer-Verlag, 1979), pp. 124, 132.
3. Howard Eves, *An Introduction to the History of Mathematics*, 6th ed. (New York: Saunders, 1990), pp. 391, 395.
4. Morris Kline, *Mathematical Thought from Ancient to Modern Times* (New York: Oxford University Press, 1972), pp. 344, 346.

---

*This closes Section 2.7 Exercises.*

## Priority gradient

Section 2.7 exercises test three core skills: **computing $f'(a)$ from the limit definition**, **interpreting $f'$ contextually** (with units), and **recognizing "difference-quotient" limits in disguise**.

**Highest value — the must-do cluster:**

- **Exercises 25–30** — compute $f'(a)$ from Definition 4 for six specific functions. **Pick 3–4.** This is the calculation you'll do over and over in Chapter 3 for individual functions before the rules take over. The polynomial (25, 26) and reciprocal-type (27, 28) cases are essential; the radical cases (29, 30) are slightly trickier.
- **Exercises 31–36** — **reverse-engineering** limits into derivatives.
  - **31** is $f'(1)$ for $f(x) = x^{10}$ (answer = 10).
  - **32** is $f'(16)$ for $f(x) = \sqrt[4]{x}$ (answer = 1/32).
  - **33** is $f'(5)$ for $f(x) = 2^x$ (answer = $32 \ln 2$).
  - **34** is $f'(\pi/4)$ for $f(x) = \tan x$ (answer = 2).
  - **35** is $f'(\pi)$ for $f(x) = \cos x$ (answer = 0 — with sign convention!).
  - **36** is $f'(1)$ for $f(x) = x^4 + x - 2$ but the "2" in the numerator means $f$ has value 2 at 1: really $f(x) = x^4 + x$, $f(1) = 2$, $f'(1) = 5$.

  **These problems are critical.** Every time you see a limit structure $\lim_{h\to 0}(\text{stuff with }h)/h$ or $\lim_{x\to a}(\text{stuff involving }x - a)/(x - a)$ — you should immediately recognize it as a derivative in disguise. This is the "it's a derivative" reading skill that L'Hôpital's rule will rely on in Chapter 4.

- **Exercise 18** — if tangent at $(4, 3)$ passes through $(0, 2)$, find $f(4)$ and $f'(4)$. **Answer:** $f(4) = 3$ (trivially) and $f'(4) = (3 - 2)/(4 - 0) = 1/4$. **The "tangent-passes-through-given-point" trick is how you extract $f'$ from geometric info.**

- **Exercise 45** — gold mining / derivative interpretation. Pure practice in **"what does $f'$ mean and what are its units?"** — the fundamental reading skill in every applied context. Do it.

**High value — applications:**

- **Exercise 43** — marginal cost computation for a concrete quadratic cost function. $f'(100) = 20$ dollars/unit. Connects Example 6's abstract discussion to actual arithmetic.
- **Exercise 44** — Torricelli's Law (water draining from a tank). Differentiate $V(t) = 100{,}000(1 - t/60)^2$ to get flow rate $V'(t) = -(100{,}000/30)(1 - t/60)$. **Flow rate is linearly decreasing** — fastest initially, zero when tank empty. **This is a canonical physics derivation** you'll see again and again.
- **Exercises 49–50** — biological rate-of-change interpretations. 49 (oxygen solubility vs temperature) — $S'(T) < 0$ (solubility decreases with temperature). 50 (salmon swimming speed vs temperature) — bell-shaped, so $S'$ flips sign.
- **Exercise 47** — Dallas temperature. $T'(10)$ is the rate of warming at 10 AM. Estimate via central difference: $(81 - 72)/4 \approx 2.25$°F/hr. **Directly the centered-difference technique** from Example 7.

**Medium value:**

- **Exercises 1, 2** — concept Qs; pick one.
- **Exercises 3, 4** — find tangent by both Definition 1 and Equation 2. Pick one and do both versions — you'll see they give the same answer.
- **Exercises 5–8** — tangent at a point. Pick 2.
- **Exercises 9–10** — tangent at a general point, apply at specific points. Pick one.
- **Exercises 11, 12** — position-function graph reading. Pick one.
- **Exercises 13, 14** — kinematics, thrown object. Pick one.
- **Exercise 17** — order derivatives at points from graph. Good graphical practice.
- **Exercise 19 or 20** — sketch with constraints. Pick one.
- **Exercise 41 or 42** — tabular rate of change (cell phones or coffee). Same methodology as Example 7. Pick one.

**Skim or skip:**

- **Exercises 15, 16** — position functions; simpler than 13–14.
- **Exercises 21–24** — specific tangent-line calculations; similar to earlier examples.
- **Exercises 37, 38** — velocity and speed specific values.
- **Exercise 39, 40** — cooling graph reasoning; more qualitative.
- **Exercise 46** — bacteria rate of change; similar to 45.
- **Exercise 48** — coffee quantity vs price; $f'(8) < 0$ (demand decreases with price).

---

### Exercises 51 and 52 — differentiability at a point

**These two deserve special callout because they introduce the differentiability question** that becomes central in Section 2.8.

**Exercise 51** — Does $f'(0)$ exist for $f(x) = x\sin(1/x)$ (and $f(0) = 0$)? Use Equation 2:
$$f'(0) = \lim_{h \to 0}\frac{h\sin(1/h) - 0}{h} = \lim_{h \to 0}\sin(1/h)$$
**This limit doesn't exist** — oscillation from Section 2.2 Example 4. **So $f'(0)$ doesn't exist** — $f$ is not differentiable at 0.

**Exercise 52** — Same question for $f(x) = x^2\sin(1/x)$. Now:
$$f'(0) = \lim_{h \to 0}\frac{h^2\sin(1/h)}{h} = \lim_{h \to 0}h\sin(1/h) = 0$$
by the Squeeze Theorem from Section 2.3 Example 11 ($-|h| \leq h\sin(1/h) \leq |h|$). **So $f'(0) = 0$ — $f$ is differentiable at 0.**

**The contrast between Exercises 51 and 52** is a classic calculus teaching moment. Both functions oscillate infinitely near 0, but $x^2\sin(1/x)$ oscillates with shrinking amplitude fast enough to be differentiable at 0, while $x\sin(1/x)$ doesn't. **Differentiability is more restrictive than continuity** (both functions above are continuous at 0), and failure of differentiability at oscillation points is common. **Do both.**

---

**The "must-do" shortlist for this section:**

- **25, 26** (one polynomial, one rational $f'(a)$)
- **31, 32, 33** (at least three limit-as-derivative translations)
- **18** (tangent through point → extract $f$ and $f'$)
- **43** (concrete marginal cost)
- **45** (derivative interpretation + units)
- **47** (centered-difference from data table)
- **51 and 52** (differentiability failure/success via oscillation)

---

## Section 2.7 complete. Two files delivered:

- `15_section_2.7_derivative_definition.md`
- `16_section_2.7_rates_exercises.md` (this file)

**Next up: Section 2.8 — The Derivative as a Function.** The shift in perspective: in 2.7, we computed $f'(a)$ at individual points. Now we view $f'$ as a *function in its own right* — mapping each $x$ to the tangent slope there. This unlocks the notation $f'(x)$, $dy/dx$, and the concept of **higher derivatives** ($f''$, $f'''$, $\ldots$). Also introduces **differentiability** formally and distinguishes it from continuity.

**Section 2.8 plan** (2 units):
1. Definition of $f'$ as a function + graphical / tabular differentiation + notation
2. Differentiability + higher derivatives + exercises
