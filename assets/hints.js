/* ------------------------------------------------------------------ */
/* Calculus Mastery — original study hints                             */
/* ------------------------------------------------------------------ */
/*
 * Keyed by `${file-id}.${exercise-number}`. Hint text may contain
 * inline LaTeX ($...$) and block LaTeX ($$...$$); it's rendered through
 * the same markdown+KaTeX pipeline as the rest of the site.
 *
 * Tone: nudge the student to the first analytical move, never give the
 * full answer. 1–3 sentences each. Written from scratch — not copied
 * from any publisher's hint system.
 */
window.CalcHints = {
  /* ---------------- Section 1.2 — Exercises ---------------- */
  "11_exercises_1.2": {
    "3": "Classify by looking at where the variable sits. If $x$ is in the *exponent* (like $2^x$), it's exponential; if $x$ is in the *base* with a constant power, it's a power function or polynomial. Match each subpart by that one question first, then refine (polynomial degree, rational if there's a nonconstant denominator, etc.).",
    "5": "A **family** of lines is defined by one constraint; the family is a one-parameter sweep over the unconstrained parameter. For (a), slope is fixed at $2$, so the free parameter is the $y$-intercept $b$; for (b), the line must pass through $(2, 1)$, so the free parameter is the slope $m$. The member belonging to both families satisfies both constraints.",
    "15": "Linear model: $C = mT + b$. You're given two data points — $(70, 113)$ and $(80, 173)$. Compute the slope directly ($\\Delta \\text{chirps} / \\Delta \\text{°F}$), then solve for $b$ using either point.",
    "17": "Linear means $P = mh + b$ (pressure vs. depth). The $y$-intercept $b$ is the pressure at the surface ($h = 0$). The slope is the rate of change: pressure increases by $4.34$ lb/in² per $10$ ft, so per foot the slope is $4.34/10$."
  },

  /* ---------------- Section 1.3 — Exercises ---------------- */
  "14_exercises_1.3": {
    "1": "Remember the *outside vs. inside* rule. Changes **outside** $f$ (like $f(x) + c$, $c\\,f(x)$, $-f(x)$) act vertically in the expected direction. Changes **inside** $f$ (like $f(x-c)$, $f(cx)$, $f(-x)$) act horizontally and *opposite* to the sign you'd expect — $f(x-3)$ shifts the graph **right** by 3.",
    "5": "Apply one transformation at a time starting from the given graph. For each subpart, write the equation first, then read off which transformation each piece encodes. $2f(x)$ — vertical stretch. $f(-x)$ — reflect across $y$-axis. $-f(x)$ — reflect across $x$-axis. $f(x-1)+2$ — shift right 1, then up 2.",
    "7": "Decompose the target into a sequence of transformations applied to the parent curve. Start with the reference semicircle, then reflect it, shift it, and rescale so the feet land at $x = -4$ and $x = -1$ and the trough at $(-2.5, -2.5)$. Solve for each transformation's parameter one at a time.",
    "15": "$y = \\sin(x/2)$ is a **horizontal stretch** of $\\sin x$ by factor $2$ — the $x/2$ inside makes the graph complete one cycle over $4\\pi$ instead of $2\\pi$. Same amplitude (1), but period doubled.",
    "27": "Use the function-arithmetic definitions: $(f+g)(x) = f(x)+g(x)$, $(fg)(x) = f(x)\\,g(x)$, $(f/g)(x) = f(x)/g(x)$. The domain of each is the intersection of the original domains, further restricted where the denominator vanishes for the quotient.",
    "29": "Arithmetic combinations of polynomials are polynomials (and the quotient is rational). Compute $f + g$, $f - g$, $fg$ symbolically; the domain is all of $\\mathbb{R}$ since both are polynomials. For $f/g$, also exclude the zeros of $g$.",
    "35": "For domains, the key constraint on $f$ is $x \\neq 0$ (from $1/x$), and on $g$ is $x \\neq -2$. Then for $f/g$ also exclude zeros of $g$: solve $\\dfrac{x+1}{x+2} = 0$, which gives $x = -1$.",
    "46": "Work *inside out*. The innermost transformation is applying $\\tan$ to $t$. Then the combination $\\tan t / (1 + \\tan t)$ is a rational function *of* $\\tan t$ — so overall $u = f \\circ g$ where $g(t) = \\tan t$ and $f(u) = u / (1 + u)$.",
    "53": "The radius of the ripple is $r = 60t$ (speed × time). The area of a circle is $A = \\pi r^2$. Compose: $A(t) = \\pi (60t)^2$. This is $f \\circ g$ with $g(t) = 60t$ (inner, giving radius as a function of time) and $f(r) = \\pi r^2$ (outer, giving area as a function of radius).",
    "65": "Test with the definition: $h(-x) = f(g(-x)) = f(g(x))$ (using $g$ even) $= h(x)$. So yes — $h$ is always even, regardless of whether $f$ itself is even, odd, or neither.",
    "27": "(a) $y = f(|x|)$: for $x \\geq 0$, it equals $f(x)$ (unchanged); for $x < 0$, it equals $f(-x)$ (mirror of the right half). So the full graph is the **right half** of $f$ reflected into the left half. (b/c) Apply this recipe to $\\sin$ and $\\sqrt{}$: take the right half, mirror it across the $y$-axis."
  },

  /* ---------------- Section 1.5 — Exercises ---------------- */
  "18_exercises_1.5": {
    "5": "All four pass through $(0, 1)$. Ordering at $x > 0$: bigger base ⇒ faster growth. So $10^x$ sits above $3^x$, and $(1/10)^x$ dives to zero fastest on the right. Use the reflection identity $(1/a)^x = a^{-x}$: the decay curves are mirror images of the growth curves across the $y$-axis.",
    "11": "Transform step by step starting from $y = e^x$. Reflect across the $y$-axis to get $e^{-x}$. Multiply by $\\frac{1}{2}$ to vertically compress. Negate and shift up 1 to get $1 - \\frac{1}{2}e^{-x}$. The asymptote you end up with is $y = 1$.",
    "13": "Translate each verbal transformation into a formula. \"Reflected about the $x$-axis\" ⇒ prepend a minus sign outside $f$. \"Shifted 3 units down\" ⇒ subtract 3 outside. \"Reflected about the $y$-axis\" ⇒ replace $x$ with $-x$ inside. Apply them in the stated order.",
    "17": "Domain of $e^x$ is all of $\\mathbb{R}$ and range is $(0, \\infty)$. For transformed exponentials, range is just the $y$-range of the base curve, shifted/scaled as specified. For domain, watch only for expressions where the exponent itself could be undefined (e.g., $\\ln$ or $\\sqrt{}$ inside).",
    "23": "Plot both $x^{10}$ and $e^x$ and look for where the curves cross on the right side. Near $x = 0$ the polynomial dominates (since $e^x \\approx 1$); very far out the exponential must win (by the general dominance theorem). The crossover is around $x \\approx 35.8$ — you'll need a wide $x$-window and a huge $y$-window (values near $e^{36} \\approx 4.3 \\times 10^{15}$).",
    "17": "$f(x) = C a^x$ has two unknowns ($C$ and $a$), and you're given two points. Plug in both to get two equations; divide one by the other to eliminate $C$ and solve for $a$. Then back-substitute to find $C$. Using $(1, 6)$ and $(3, 24)$: $\\dfrac{24}{6} = a^{3-1} = a^2 = 4$, so $a = 2$, and $C a = 6 \\Rightarrow C = 3$."
  },

  /* ---------------- Section 1.4 — Graphing Technology exercises ---------------- */
  "15_section_1.4_graphing_technology": {
    "8": "The function $\\dfrac{x}{x^2 + 100}$ is bounded — its maximum is small. Try to estimate the max analytically: the numerator grows linearly, the denominator quadratically, so far out it decays like $1/x$. The peak is at $x = \\sqrt{100} = 10$, where $f(10) = 10/200 = 0.05$. So a sensible $y$-range is roughly $[-0.05, 0.05]$.",
    "9": "$\\sin^2(1000x)$ has period $\\pi/1000 \\approx 0.003$ — *extremely* short. A window wider than about 0.001 will alias the signal (Nyquist). Zoom into a tiny $x$-window like $[0, 0.02]$ to see the actual oscillation; any wider and you'll see spurious low-frequency \"ghost\" patterns instead of the true signal.",
    "23": "Exponentiated or polynomial-against-polynomial comparisons are easiest to settle analytically. Take the ratio: $\\dfrac{g(x)}{f(x)} = \\dfrac{x^3/10}{10 x^2} = \\dfrac{x}{100}$. As $x \\to \\infty$, this ratio grows without bound, so $g$ eventually dominates. Cross-over: set $x/100 = 1 \\Rightarrow x = 100$.",
    "27": "All four root functions pass through $(0, 0)$ and $(1, 1)$. Between 0 and 1, **higher $n$ means the curve bulges upward more** (since $x^{1/n}$ is closer to 1 for small $x$ as $n$ grows). For $x > 1$, higher $n$ means the curve rises **more slowly**. Part (d): the family is a \"fan\" pinned at $(0, 0)$ and $(1, 1)$, with slopes at those points depending on $n$.",
    "29": "Sweep $c$ from negative to positive. For $c$ very negative: $f$ is dominated by $x^4 + cx^2$ which factors as $x^2(x^2 + c)$ — two extra real zeros appear as $c$ drops below $0$, producing a \"W\" shape. For $c = 0$: just $x^4 + x$, one inflection-ish pattern. For $c$ positive: the $cx^2$ term pulls the middle up, hiding any wiggles. The transition near $c = 0$ is a bifurcation.",
    "33": "Rewrite as $y = \\pm x\\sqrt{cx + 1}$ (factoring $x^2$ out of the RHS). For $c > 0$: the curve exists for $x \\geq -1/c$ and looks like two branches meeting at a loop near the origin. For $c < 0$: only $x \\leq -1/c$ (which is positive), giving a finite loop between $x = 0$ and $x = -1/c$. For $c = 0$: degenerates to $y = \\pm x$ — two straight lines."
  },

  /* ---------------- Section 1.6 — Exercises ---------------- */
  "22_exercises_1.6": {
    "3": "Apply the one-to-one test to the table: are any two outputs equal? Look down the $f(x)$ row for repeats. If you find a pair $f(a) = f(b)$ with $a \\neq b$, the function is not one-to-one.",
    "8": "A function is one-to-one iff it's strictly monotonic (never flat, never back-tracks). A curve with a slight concavity change can still be strictly increasing — concavity is about the *second* derivative, not the first. Horizontal Line Test passes whenever the curve keeps going up.",
    "13": "A kicked football goes up, reaches a peak, comes back down. Heights before and after the peak repeat — same altitude on the way up as on the way down. So horizontal lines cross twice: NOT one-to-one.",
    "17": "$g^{-1}(4)$ is the $x$-value that makes $g(x) = 4$. So solve $3 + x + e^x = 4$, i.e. $x + e^x = 1$. Try a few small values: $x = 0$ gives $0 + 1 = 1$. So $g^{-1}(4) = 0$.",
    "19": "The inverse of a linear function is linear too. Swap $C$ and $F$: $F = \\frac{5}{9}(C - 32)$? No — that's the original formula re-used incorrectly. Do it properly: from $C = \\frac{5}{9}(F - 32)$, solve for $F$ to get $F = \\frac{9}{5}C + 32$. The inverse takes a Celsius input and produces a Fahrenheit output.",
    "22": "To invert $y = \\frac{4x - 1}{2x + 3}$, swap $x$ and $y$, then solve for $y$. You'll get $x(2y + 3) = 4y - 1$, i.e. $2xy + 3x = 4y - 1$. Collect $y$-terms on one side, then factor.",
    "23": "$e^{x^3}$ is strictly increasing (composition of an increasing outer function with an increasing inner — both are one-to-one on their whole domain). To invert: set $y = e^{x^3}$, apply $\\ln$ to get $\\ln y = x^3$, then take cube root.",
    "25": "Swap $x$ and $y$: $x = \\ln(y + 3)$. Exponentiate both sides to remove the $\\ln$: $e^x = y + 3$. Then $y = e^x - 3$.",
    "43": "Under the scale \"1 inch = 1 unit,\" 3 ft = 36 in = 36 units on the graph. So you need $x$ such that $\\log_2 x = 36$, i.e. $x = 2^{36} \\approx 6.87 \\times 10^{10}$ inches. Convert inches to miles: there are $12 \\times 5280 = 63{,}360$ inches per mile.",
    "45": "Use the log laws to combine the pieces before evaluating. Law 1 (product ↔ sum), Law 2 (quotient ↔ difference), Law 3 (exponent ↔ multiplier). Your goal is a single $\\log$, then simplify inside.",
    "49": "The expression is $e$ raised to a log, or a log of a power — both collapse via the cancellation identities $e^{\\ln x} = x$ and $\\ln(e^x) = x$. Apply them symbolically; no numerical evaluation needed.",
    "67": "Draw a right triangle. Let $\\theta = \\tan^{-1} x$, so $\\tan \\theta = x = x/1$. Legs: opposite $= x$, adjacent $= 1$; hypotenuse by Pythagoras is $\\sqrt{1 + x^2}$. Then read off $\\sin \\theta = \\text{opposite}/\\text{hypotenuse}$.",
    "45": "Each is a transformation of a standard log graph. For (a), $\\log_{10}(x + 5)$ is $\\log_{10} x$ shifted **left** by 5 — vertical asymptote moves from $x = 0$ to $x = -5$. For (b), $-\\ln x$ is $\\ln x$ reflected across the $x$-axis — still defined only for $x > 0$, but now decreasing and heading to $+\\infty$ as $x \\to 0^+$.",
    "49": "Both use the $\\ln$-or-$\\log$ cancellation trick. (a) Take $\\log_2$ of both sides to pull the exponent down: $x - 5 = \\log_2 3$, then $x = 5 + \\log_2 3$. (b) Combine the two logs using the product law — $\\ln x + \\ln(x-1) = \\ln[x(x-1)] = 1$ — then exponentiate: $x(x-1) = e$. Solve the quadratic; reject the root with $x < 1$ (would make $\\ln(x-1)$ undefined)."
  },

  /* ---------------- Chapter 1 Review ---------------- */
  "23_chapter_1_review": {
    /* Review exercises don't use specific hint numbering as consistently
       — we'll fill these in as learners request specific ones. */
  },

  /* ---------------- Principles + Problems Plus ---------------- */
  "24_principles_and_problems_plus": {
    /* Problems Plus is meant to be hard on purpose — Stewart's principle
       is "struggle productively." Hints here should be minimal. */
  },

  /* ================= Chapter 2 ================= */

  /* ---------------- Section 2.3 — Exercises ---------------- */
  "07_exercises_2.3": {
    "8": "The radicand $u^4 + 3u + 6$ is a polynomial — continuous everywhere — and the square root is continuous on its domain. So long as the value under the root is positive, you can use the Direct Substitution Property: plug $u = -2$ straight into the expression. Compute $(-2)^4 + 3(-2) + 6 = 16 - 6 + 6 = 16$, so the limit is $\\sqrt{16} = 4$.",
    "15": "Direct substitution gives $0/0$ — classic factor-and-cancel setup. Numerator: $t^2 - 9 = (t-3)(t+3)$. Denominator: $2t^2 + 7t + 3 = (2t + 1)(t + 3)$. Cancel the common $(t + 3)$ factor, then substitute $t = -3$ into what remains.",
    "19": "Direct substitution → $0/0$. Factor the denominator as a sum of cubes: $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$. Cancel $(x + 2)$ and substitute $x = -2$ into the simplified expression.",
    "20": "Expand $(2 + h)^3$ using the binomial theorem: $8 + 12h + 6h^2 + h^3$. Subtract 8, divide by $h$, and cancel. The limit as $h \\to 0$ is the leading term. This is exactly the difference-quotient setup — the limit will be the derivative of $x^3$ at $x = 2$.",
    "35": "Use the Squeeze Theorem. Compute both bounding functions at $x = 4$: $4(4) - 9 = 7$ and $4^2 - 4(4) + 7 = 7$. The two bounds agree, so the squeeze forces the limit to the common value.",
    "39": "Absolute values require one-sided analysis at the breakpoint $x = 3$. For $x > 3$: $|x-3| = x-3$, so the expression equals $2x + (x-3) = 3x - 3$, giving 6. For $x < 3$: $|x-3| = -(x-3)$, so the expression equals $2x - (x-3) = x + 3$, giving 6. Both sides agree → limit is 6.",
    "49": "The greatest integer function $\\llbracket x \\rrbracket$ is a step function — constant on each interval $[n, n+1)$ for integer $n$, jumping by 1 at each integer. At an integer $n$, the left-limit is $n - 1$ (value just below) and the right-limit is $n$ (value at and just above). So the two-sided limit exists **iff $a$ is not an integer**.",
    "58": "You need two pathological functions whose pointwise sum behaves nicely even though neither alone has a limit. Try $f(x) = \\text{sgn}(x)$ (or $\\llbracket x \\rrbracket$-type jumps) and $g(x) = -f(x)$ — their sum is identically zero. Both $f$ and $g$ fail to have limits at jumps, but $f + g = 0$ has the limit 0 everywhere.",
    "61": "For the limit to exist as $x \\to -2$, the denominator's zero must be matched by a zero in the numerator (otherwise you'd blow up). The denominator $x^2 + x - 2 = (x+2)(x-1)$ has a root at $x = -2$. Require the numerator to vanish there too: $3(4) + a(-2) + a + 3 = 0 \\Rightarrow 12 - 2a + a + 3 = 15 - a = 0 \\Rightarrow a = 15$. Now factor out $(x+2)$ from both and take the limit of what remains."
  },

  /* ---------------- Section 2.2 — Exercises ---------------- */
  "04_exercises_2.2": {
    "4": "For each limit, read the graph from the stated side. The **two-sided** limit exists iff the two one-sided limits agree — if the graph has a jump, the two-sided limit at that point does **not exist**, even if the function is defined there. Also: $\\lim_{x \\to 3} f(x)$ has nothing to do with the *value* $f(3)$; they are independent pieces of information.",
    "15": "Sketch conditions one at a time. A jump at $x=3$: plot an open circle at $(3, 2)$ (left limit) and an open circle at $(3, 4)$ (right limit), with a solid dot at $(3, 3)$ for the actual value. Near $x=-2$: the limit is 2 but $f(-2) = 1$, so an open circle at $(-2, 2)$ and a solid dot at $(-2, 1)$ — a **removable** discontinuity.",
    "27": "As $x \\to 1$, the denominator $(x-1)^2 \\to 0^+$ (squared ⇒ always positive near 1) and the numerator $2 - x \\to 1 > 0$. Positive / tiny-positive = $+\\infty$. Note $(x-1)^2$ doesn't change sign the way $(x-1)$ would, so no one-sided analysis is needed — the limit is $+\\infty$ from both sides."
  },

  /* ---------------- Section 2.1 — Tangent & Velocity ---------------- */
  "01_section_2.1_tangent_velocity": {
    "3": "The secant slope from $P(1, \\frac{1}{2})$ to $Q(x, x/(1+x))$ is $m_{PQ} = \\dfrac{x/(1+x) - 1/2}{x - 1}$. Simplify symbolically: the numerator becomes $\\dfrac{2x - (1+x)}{2(1+x)} = \\dfrac{x-1}{2(1+x)}$, so $m_{PQ} = \\dfrac{1}{2(1+x)}$. As $x \\to 1$, this approaches $\\frac{1}{4}$ — that's your tangent slope.",
    "5": "Average velocity over $[t_1, t_2]$ is $\\dfrac{y(t_2) - y(t_1)}{t_2 - t_1}$. With $y(t) = 40t - 16t^2$ and $t_1 = 2$, compute $y(2) = 80 - 64 = 16$, then plug in each end-time. The values should close in on a single number as the interval shrinks — the instantaneous velocity at $t=2$ is $-24$ ft/s (negative = falling).",
    "9": "The function $\\sin(10\\pi/x)$ oscillates **wildly** as $x \\to 1$ — sine of a large argument flips sign whenever the argument crosses a multiple of $\\pi$, which happens very often near $x=1$. Your secant slopes sample the curve at irregular points and miss the true tangent behavior. To estimate the real tangent, pick $x$-values *much* closer to 1 (like $1.001, 1.0001$) to sample the curve densely."
  }
};
