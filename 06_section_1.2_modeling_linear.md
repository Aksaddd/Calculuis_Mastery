# Section 1.2 — Mathematical Models and Linear Models

*Section 1.2 opener: pp. 24–27 (top) of the book (PDF pp. 52–56 top). Covers the modeling framework, then linear functions as the first and simplest model type. Stops where the POLYNOMIALS sub-heading begins on page 56.*

---

## Section 1.2 — Mathematical Models: A Catalog of Essential Functions

A **mathematical model** is a mathematical description (often by means of a function or an equation) of a real-world phenomenon such as the size of a population, the demand for a product, the speed of a falling object, the concentration of a product in a chemical reaction, the life expectancy of a person at birth, or the cost of emission reductions. **The purpose of the model is to understand the phenomenon and perhaps to make predictions about future behavior.**

### The modeling process

Given a real-world problem, the workflow is:

1. **Formulate** — Identify and name the independent and dependent variables. Make simplifying assumptions. Use physical laws and/or examine collected data in tabular/graphical form to discern patterns and obtain equations relating the variables.
2. **Solve** — Apply mathematics (including calculus) to the model to derive mathematical conclusions.
3. **Interpret** — Translate those conclusions back into real-world explanations or predictions.
4. **Test** — Check predictions against new real data. If the fit is poor, refine or replace the model and iterate.

> **Figure 1 — The modeling process.** A horizontal flow diagram with four boxes and three forward arrows: **Real-world problem** → *Formulate* → **Mathematical model** → *Solve* → **Mathematical conclusions** → *Interpret* → **Real-world predictions**. A feedback arrow labeled *Test* runs from the final box back to the first, closing the loop.

A mathematical model is never a perfectly accurate representation — it's an **idealization**. A good model simplifies enough to be tractable but stays accurate enough to be useful. *"In the end, Mother Nature has the final say."*

There are many function families used for modeling; the rest of this section catalogs them with behavior, graphs, and example use-cases.

---

## Linear Models

*Margin note: The coordinate geometry of lines is reviewed in Appendix B.*

When $y$ is a **linear function** of $x$, the graph is a line, so we can use slope-intercept form:

$$y = f(x) = mx + b$$

where $m$ is the slope and $b$ is the $y$-intercept.

**Defining feature of linear functions: they grow at a constant rate.** For instance, Figure 2 shows $f(x) = 3x - 2$. Whenever $x$ increases by $0.1$, $f(x)$ increases by $0.3$. So $f(x)$ grows three times as fast as $x$. The slope — namely $3$ — is the **rate of change of $y$ with respect to $x$**.

> **Figure 2 — $y = 3x - 2$.** A line of slope $3$ and $y$-intercept $-2$, passing through the origin region with steep positive slope.

```plot
{
  "title": "Figure 2 — y = 3x − 2",
  "width": 460, "height": 320,
  "xRange": [-2, 3], "yRange": [-8, 8],
  "xStep": 1, "yStep": 2,
  "xLabel": "x", "yLabel": "y",
  "curves": [
    {"fn": "3*x - 2", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 0, "y": -2, "style": "filled", "color": "#1f2430", "label": "(0, −2)", "labelDx": 8, "labelDy": 14},
    {"x": 1, "y": 1,  "style": "filled", "color": "#1f2430", "label": "(1, 1)",  "labelDx": 8, "labelDy": -8}
  ]
}
```

| $x$ | $f(x) = 3x - 2$ |
|:---:|:---:|
| 1.0 | 1.0 |
| 1.1 | 1.3 |
| 1.2 | 1.6 |
| 1.3 | 1.9 |
| 1.4 | 2.2 |
| 1.5 | 2.5 |

---

### Example 1 — Linear model from physical reasoning

(a) As dry air moves upward, it expands and cools. If the ground temperature is $20°\text{C}$ and the temperature at a height of $1$ km is $10°\text{C}$, express the temperature $T$ (in °C) as a function of the height $h$ (in kilometers), assuming that a linear model is appropriate.

(b) Draw the graph of the function in part (a). What does the slope represent?

(c) What is the temperature at a height of $2.5$ km?

***Solution.***

**(a)** Linear in $h$ means $T = mh + b$. Use the two given conditions:

At $h = 0$: $T = 20$, so $20 = m(0) + b = b$. Thus $b = 20$.

At $h = 1$: $T = 10$, so $10 = m(1) + 20$, which gives $m = 10 - 20 = -10$.

Therefore

$$\boxed{\; T = -10h + 20 \;}$$

**(b)** The slope is $m = -10 \;°\text{C/km}$ — this is the **rate of change of temperature with respect to height**. It says temperature drops by $10°\text{C}$ for every kilometer of altitude gained.

> **Figure 3.** Plot of $T = -10h + 20$ on axes with $h$ horizontal and $T$ vertical. The line passes through $(0, 20)$ and $(2, 0)$ with slope $-10$; labeled points marked at $h = 1$ (where $T = 10$) and $h = 3$ (where $T = -10$).

```plot
{
  "title": "Figure 3 — T = −10h + 20",
  "width": 480, "height": 320,
  "xRange": [-0.5, 4], "yRange": [-20, 25],
  "xStep": 0.5, "yStep": 5,
  "xLabel": "h (km)", "yLabel": "T (°C)",
  "curves": [
    {"fn": "-10*x + 20", "color": "#b04a2f", "width": 2.2}
  ],
  "points": [
    {"x": 0, "y":  20, "style": "filled", "color": "#1f2430", "label": "(0, 20)",  "labelDx": 8, "labelDy": -8},
    {"x": 1, "y":  10, "style": "filled", "color": "#1f2430", "label": "(1, 10)",  "labelDx": 8, "labelDy": -8},
    {"x": 2, "y":   0, "style": "filled", "color": "#1f2430", "label": "(2, 0)",   "labelDx": 8, "labelDy": -8},
    {"x": 3, "y": -10, "style": "filled", "color": "#1f2430", "label": "(3, −10)", "labelDx": 8, "labelDy": -8}
  ],
  "caption": "Slope = −10 °C/km: every additional kilometer of altitude drops T by 10°C."
}
```

**(c)** At $h = 2.5$:

$$T = -10(2.5) + 20 = -5°\text{C}$$

---

If there is no physical law or principle to guide the model, we construct an **empirical model** — one based entirely on data. We seek a curve that "fits" the data in the sense that it captures the basic trend.

---

### Example 2 — Empirical linear model from data (CO₂ at Mauna Loa)

Table 1 lists the average carbon dioxide level in the atmosphere, measured in parts per million at Mauna Loa Observatory from 1980 to 2002. Find a model for the CO₂ level.

**Table 1.**

| Year | CO₂ level (ppm) | Year | CO₂ level (ppm) |
|:---:|:---:|:---:|:---:|
| 1980 | 338.7 | 1992 | 356.4 |
| 1982 | 341.1 | 1994 | 358.9 |
| 1984 | 344.4 | 1996 | 362.6 |
| 1986 | 347.2 | 1998 | 366.6 |
| 1988 | 351.5 | 2000 | 369.4 |
| 1990 | 354.2 | 2002 | 372.9 |

***Solution.*** Let $t$ = year, $C$ = CO₂ level (ppm). Plot the points.

> **Figure 4 — Scatter plot of average CO₂ level.** Axes: $t$ from 1980 to 2002 (with gridlines every 5 years), $C$ from 340 to 370+. Twelve data points, one every 2 years, trending up from about $(1980, 338.7)$ to $(2002, 372.9)$ along what looks like a straight line.

```plot
{
  "title": "Figure 4 — Mauna Loa CO₂ scatter (1980–2002)",
  "width": 520, "height": 320,
  "xRange": [1978, 2004], "yRange": [335, 376],
  "xStep": 5, "yStep": 5,
  "xLabel": "t (year)", "yLabel": "C (ppm)",
  "curves": [
    {
      "data": [
        [1980, 338.7], [1982, 341.1], [1984, 344.4], [1986, 347.2],
        [1988, 351.5], [1990, 354.2], [1992, 356.4], [1994, 358.9],
        [1996, 362.6], [1998, 366.6], [2000, 369.4], [2002, 372.9]
      ],
      "mode": "scatter",
      "color": "#b04a2f",
      "r": 4
    }
  ]
}
```

The points lie close to a straight line, so a linear model is natural. But **many** lines would approximate the data; which one?

**First attempt — line through first and last data points.**

$$\text{slope} = \frac{372.9 - 338.7}{2002 - 1980} = \frac{34.2}{22} \approx 1.5545$$

Using point-slope form through $(1980, 338.7)$:

$$C - 338.7 = 1.5545(t - 1980)$$

Rearranging:

$$\tag{1} C = 1.5545\,t - 2739.21$$

> **Figure 5 — First linear model.** Same scatter points as Figure 4, with a straight line drawn through the first $(1980, 338.7)$ and last $(2002, 372.9)$ data points. The line sits *above* most of the interior data points — it fits reasonably but overestimates.

```plot
{
  "title": "Figure 5 — Endpoint line: C = 1.5545·t − 2739.21",
  "width": 520, "height": 320,
  "xRange": [1978, 2004], "yRange": [335, 376],
  "xStep": 5, "yStep": 5,
  "xLabel": "t (year)", "yLabel": "C (ppm)",
  "curves": [
    {"fn": "1.5545*x - 2739.21", "color": "#2867b2", "width": 2},
    {
      "data": [
        [1980, 338.7], [1982, 341.1], [1984, 344.4], [1986, 347.2],
        [1988, 351.5], [1990, 354.2], [1992, 356.4], [1994, 358.9],
        [1996, 362.6], [1998, 366.6], [2000, 369.4], [2002, 372.9]
      ],
      "mode": "scatter",
      "color": "#b04a2f",
      "r": 4
    }
  ]
}
```

**Better approach — least-squares regression.**

*Margin note: A computer or graphing calculator finds the regression line by the method of **least squares**, which is to minimize the sum of the squares of the vertical distances between the data points and the line. The details are explained in Section 14.7.*

Entering the data into a graphing calculator or CAS (Maple's `fit[leastsquare]` in the stats package; Mathematica's `Fit`) gives the regression line:

$$m = 1.55192 \qquad b = -2734.55$$

So the least-squares model is:

$$\tag{2} C = 1.55192\,t - 2734.55$$

> **Figure 6 — The regression line.** Same scatter points, now with the least-squares line drawn. The line passes cleanly through the middle of the data rather than above it — a better fit than Figure 5.

```plot
{
  "title": "Figure 6 — Least-squares fit: C = 1.55192·t − 2734.55",
  "width": 520, "height": 320,
  "xRange": [1978, 2004], "yRange": [335, 376],
  "xStep": 5, "yStep": 5,
  "xLabel": "t (year)", "yLabel": "C (ppm)",
  "curves": [
    {"fn": "1.55192*x - 2734.55", "color": "#2867b2", "width": 2},
    {
      "data": [
        [1980, 338.7], [1982, 341.1], [1984, 344.4], [1986, 347.2],
        [1988, 351.5], [1990, 354.2], [1992, 356.4], [1994, 358.9],
        [1996, 362.6], [1998, 366.6], [2000, 369.4], [2002, 372.9]
      ],
      "mode": "scatter",
      "color": "#b04a2f",
      "r": 4
    }
  ]
}
```

**Why least squares matters for your quant track specifically.** This is OLS linear regression in its simplest form — one predictor, one response, Gaussian error assumed implicitly. In finance, everything from CAPM beta estimation to the linear factor in Fama-French to residual analysis in pairs trading is built on exactly this objective: minimize $\sum (y_i - \hat{y}_i)^2$. The "pick a line that passes through endpoints" first attempt vs. "minimize total squared residual" second attempt is the core idea of estimation theory — endpoint-based estimators are statistically inefficient because they throw away all interior data; OLS uses every observation.

---

### Example 3 — Interpolation vs. extrapolation

Use the linear model in Equation 2 to estimate the average CO₂ level for 1987 and to predict the level for the year 2010. According to this model, when will the CO₂ level exceed 400 ppm?

***Solution.***

**Interpolation (1987).**

$$C(1987) = (1.55192)(1987) - 2734.55 \approx 349.12 \text{ ppm}$$

This is **interpolation** because we're estimating a value *between* observed data points. Actual Mauna Loa reading for 1987 was 348.93 ppm — our estimate is quite accurate.

**Extrapolation (2010).**

$$C(2010) = (1.55192)(2010) - 2734.55 \approx 384.81 \text{ ppm}$$

We predict about 384.8 ppm in 2010. This is **extrapolation** because 2010 is *outside* the 1980–2002 data range. **We are far less certain about this prediction** — the further outside the observed range, the less justified the assumption that the linear relationship continues to hold.

**When does $C$ exceed 400 ppm?** Solve:

$$1.55192\,t - 2734.55 > 400 \implies t > \frac{3134.55}{1.55192} \approx 2019.79$$

So the model predicts CO₂ will exceed 400 ppm by **2019**. *This prediction is somewhat risky because it involves a time quite remote from the observations.*

**Interpolation vs. extrapolation — the central distinction.** A model's accuracy is generally highest inside the support of the data that fit it, and degrades the further you go outside. This is not a Stewart-specific point; it's a fundamental caveat for every predictive model. In finance specifically: a factor model estimated on 2010–2020 data may be nearly useless for 2008-style crisis regimes because those regimes were effectively absent from the training sample. The math is the same as Stewart's CO₂ example — you're just extrapolating in factor-space instead of in time.

**Historical note.** Actual CO₂ crossed 400 ppm at Mauna Loa in **May 2013** — six years earlier than Stewart's 2007-era linear extrapolation predicted. The linear model was too conservative because CO₂ growth has been slightly *accelerating*, not linear. This is a real-world illustration of the model-testing loop in Figure 1: the prediction failed against new data, and modelers have since moved to quadratic or exponential formulations.

---

*End of Unit 1. The next unit (POLYNOMIALS starts mid-page 56) is Unit 2.*
