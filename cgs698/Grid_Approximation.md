
### 📘 Topic 4: **Grid Approximation**

---

### 🧠 What’s the idea?

Let’s say you're playing **"Guess the number"**, and you know it’s between 1 and 10.

One way to solve it is to just **try every number**:

* Try 1. Too low?
* Try 2. Still low?
* ...
* Try 7. Just right!

🎯 That’s the idea of **Grid Approximation**.
You divide the range of possible θ values into **equally spaced points** (called a **grid**), then:

1. Compute how **likely** each point is, using your data and prior.
2. Use this info to **approximate** the posterior.

---

### 🪜 Step-by-step Method

Let’s say θ can be from 0 to 1. You:

1. Create a grid like:
   `θ = [0.0, 0.1, 0.2, ..., 1.0]`
2. For each θ:

   * Compute **likelihood** = how likely this θ explains the data
   * Compute **prior** = how much you believed in this θ before
3. Multiply them together:
   `posterior_θ = likelihood × prior`
4. Normalize (make it sum to 1) → This gives you an **approximate posterior**!

---

## 🧪 Example: **Normal Model with Unknown Mean (µ), Known Variance (σ² = 4)**

---

### 👶 Imagine This Setup:

* You **measured something 10 times** (like how long people take to read a sentence).
* You **believe** these reading times come from a **normal distribution** with:

  * Unknown mean = μ (what you're trying to find!)
  * Known variance = σ² = 4 → so standard deviation σ = 2
* You also **believe before starting** (prior) that the mean μ is probably near 0, but could vary a lot:

  * So you say μ \~ Normal(0, 9) (σ\_prior² = 9 → standard deviation = 3)

---

### 📊 Step 1: **Observed Data**

The data (10 reading times) is generated like this in R:

```r
y <- rnorm(10, mean=1, sd=2)
```

This simulates 10 values from Normal(1, 2), for example:

```
[1] 2.57 3.06 1.86 3.59 -0.25 1.48 -0.15 1.64 0.70 2.44
```

These are your 10 measurements (`y`).

---

### 🧮 Step 2: **Analytical Posterior (Ground Truth)**

If you use the conjugate math shortcut, you could compute the exact posterior of μ as another normal distribution.

This part is calculated as:

```r
mean_post <- ((σ² × μ₀) + (σ₀² × sum(y))) / (σ² + n × σ₀²)
sd_post² <- 1 / ((1/σ₀²) + (n/σ²))
```

You draw samples from this normal distribution and get a **histogram** showing where the true mean likely lies.

📊 This gives a nice **reference solution** to compare against grid approximation.

---

### 🧮 Step 3: **Grid Approximation**

Now we simulate the same thing **without the math shortcut**:

#### ✅ 1. Make a grid of µ values:

```r
mu_grid <- seq(-10, 10, length=1000)
```

That’s 1000 evenly spaced guesses between -10 and 10.

#### ✅ 2. For each guess:

We calculate:

* **Likelihood**: how likely is the data if this guess were true?

  ```r
  likelihood <- prod(dnorm(y, mu_grid[i], 2))
  ```

  That’s the product of 10 probabilities — one for each data point.

* **Prior**: how believable is this guess before seeing data?

  ```r
  prior <- dnorm(mu_grid[i], 0, 3)
  ```

* **Posterior (unnormalized)**:

  ```r
  posterior = likelihood × prior
  ```

We store all these values in a table (`df.posterior`).

#### ✅ 3. Normalize the posterior:

We divide each posterior value by the total sum of all posterior values across the grid:

```r
posterior[i] = (likelihood × prior) / sum(likelihood × prior for all grid points)
```

Now all the posterior values **add up to 1** — a proper probability distribution!

---

### 🖼️ Step 4: **Plot the posterior**

We now plot `posterior vs mu`.

```r
plot(df.posterior$mu, df.posterior$posterior)
```

This gives a **curve** that looks like a mountain—centered around the most likely value of µ.

✅ The peak of this curve should be very close to the mean you got using the exact formula (from the analytical method earlier).

---

### 🧸 Final Analogy:

> Imagine you’re guessing a person’s height based on noisy measurements.
> You try every possible height between 4ft and 8ft (grid).
> For each guess, you check:
>
> * How well it fits your data (likelihood)?
> * How much you trusted that height before (prior)?
>   You combine the two to figure out how much to believe in each guess now (posterior).

---

**TL;DR of the Example:**

> You guessed many possible values of µ, checked how well each explains the data and fits your prior belief, and used those to draw a “mountain-shaped” posterior curve showing where µ probably lies.

---

### 🧸 Analogy:

Think of it like a **heat map** in a video game:

* You scan the whole field, square by square.
* Areas with lots of treasure (good θ values) glow **hot**.
* The brighter it glows, the more you believe that’s where the treasure (true θ) is!

---

### ⚠️ Drawbacks (What can go wrong):

* 🔺 **Too many parameters?** Trouble!

  * If θ has many parts (like 5 or 10 parameters), the number of grid points explodes:

    * For 4 parameters with 1000 points each: $1000^4 = 1,000,000,000,000$ grid points 🤯
* 🔻 **Reduce points?** You lose accuracy.

This is called the **“curse of dimensionality.”**

---

**TL;DR in Kidspeak:**

> Grid approximation means guessing values on a grid, checking how good each is, and combining that to see where the best guesses are. But it works best when there’s only 1 or 2 things to guess.

---

### **R code** for **Grid Approximation**

```r
# -------------------------------
# Grid Approximation in R
# -------------------------------

# STEP 1: Simulate observed data (10 samples from Normal with mean = 1, sd = 2)
set.seed(42)  # for reproducibility
y <- rnorm(10, mean = 1, sd = 2)  # observed data
n <- length(y)  # number of observations

# STEP 2: Set prior belief for the mean (mu)
mu_prior_mean <- 0      # prior mean
mu_prior_sd <- 3        # prior standard deviation

# STEP 3: Create a grid of mu values to evaluate
mu_grid <- seq(-10, 10, length.out = 1000)  # 1000 equally spaced values from -10 to 10

# STEP 4: Initialize a data frame to store results
df.posterior <- data.frame(mu = mu_grid,
                           likelihood = NA,
                           prior = NA,
                           posterior = NA)

# STEP 5: Loop through each grid point and compute likelihood and prior
for(i in seq_along(mu_grid)) {
  mu_i <- mu_grid[i]

  # Likelihood: product of normal PDFs for each observed y given current mu and known sd = 2
  likelihood <- prod(dnorm(y, mean = mu_i, sd = 2))

  # Prior: normal PDF of current mu_i given prior mean and SD
  prior <- dnorm(mu_i, mean = mu_prior_mean, sd = mu_prior_sd)

  # Save values
  df.posterior$likelihood[i] <- likelihood
  df.posterior$prior[i] <- prior
}

# STEP 6: Compute unnormalized posterior (likelihood × prior)
df.posterior$unnorm_posterior <- df.posterior$likelihood * df.posterior$prior

# STEP 7: Normalize to get proper posterior probabilities (so they sum to 1)
marginal_likelihood <- sum(df.posterior$unnorm_posterior)
df.posterior$posterior <- df.posterior$unnorm_posterior / marginal_likelihood

# STEP 8: Plot the approximate posterior distribution
plot(df.posterior$mu, df.posterior$posterior, type = "l", col = "blue", lwd = 2,
     main = "Grid Approximation of Posterior",
     xlab = "mu", ylab = "Posterior Probability Density")

# Optional: Add vertical line at true mean used to simulate data
abline(v = 1, col = "red", lty = 2)
```

---
