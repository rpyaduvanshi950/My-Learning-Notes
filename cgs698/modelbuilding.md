### 🔷 Step-by-step:

1. **Assume a Generative Process**

   * You assume your data was generated from a certain distribution, like:
     y_i ~ normal(mu, sigma)

2. **Specify Priors**

   * You express what you believe about the unknown parameters (e.g., $\mu$) before seeing the data:

     mu ~ Normal(350, 50)
     and you fix sigma = 10
         

3. **Collect Observations**

   * You collect a dataset $y = [y_1, y_2, ..., y_{50}]$, e.g., reading times.

4. **Define the Likelihood**

   * This is the probability of observing your data for different values of $\mu$:

     $$
     L(\mu | y) = \prod_{i=1}^{n} \mathcal{N}(y_i | \mu, \sigma)
     $$

5. **Prior Predictive Checking (Model Checking)**

   * You check whether your assumptions (priors + model) **make sense** by:

     * Sampling many values of $\mu$ from the **prior**
     * For each $\mu$, generate fake datasets $y^{\text{sim}}$
     * Compare the **fake datasets** to your real dataset:

       * Visually (histograms)
       * Using statistics (e.g., sample means)

✅ If real data looks like what your model expects → your assumptions are reasonable
❌ If not → revise your priors or model

---

## 🌰 **Simple Example**

### Suppose:

* You're measuring how long kids take to read a passage.
* You don’t know the average reading time (µ), but you **believe** it's around 350 ms ± 50 ms.

So you say:

$$
\mu \sim \text{Normal}(350, 50) \quad \text{and} \quad \sigma = 10
$$

Now, you collect a dataset:

```r
y <- rnorm(50, 300, 10)
```

This dataset has mean around 300.

Now you ask:

> "If I draw many µ values from my prior belief (Normal(350, 50)) and generate reading times using those, do the fake datasets look anything like my real dataset (mean = 300)?"

If most fake datasets have mean around **350**, and your real data is **300**, your prior is likely **too far off**, and you may want to revise it.

---

## 🎯 Final One-Line Summary

> We assume a data-generating process, encode our beliefs as priors, define a likelihood, and then check whether the data we expect from the model (prior predictive simulations) looks like the data we actually observed — if not, we rethink our assumptions.

---

## ✅ **Section 6: Model Checking** — *Summary*

### 🎯 **Goal**:

To check if your **model assumptions (prior + likelihood)** are **realistic** *before* doing inference.

You ask:

> “If my model and prior were true, what kind of data would I expect to see — and does it look like my actual observed data?”

---

## 🔧 **Steps Involved**:

### 🔹 1. **Write Down the Model**

You assume:

* Data comes from a normal distribution:

  $$
  y_i \sim \text{Normal}(\mu, \sigma)
  $$
* Prior on mean:

  $$
  \mu \sim \text{Normal}(300, 50)
  $$
* Known standard deviation:

  $$
  \sigma = 10
  $$

---

### 🔹 2. **Simulate from the Prior Predictive Distribution**

#### a. **Sample many values of $\mu$** from the prior:

$$
\mu^{(1)}, \mu^{(2)}, ..., \mu^{(2000)} \sim \text{Normal}(300, 50)
$$

#### b. **For each sampled $\mu$**, simulate data:

$$
y^{(j)} \sim \text{Normal}(\mu^{(j)}, 10)
$$

You either:

* Simulate **one data point per $\mu$** (quick check)
* Simulate **entire datasets** (same size as your real data, e.g., 50 values) — this is the **full prior predictive check**

---

### 🔹 3. **Compare Simulated Data with Real Data**

* Plot histograms or means of the simulated datasets
* Overlay the real data’s summary (e.g., its mean) in red
* Ask: **Does the model generate data that looks like mine?**

---

## 🧪 **If Yes**:

→ Your prior and model are **reasonable**. Proceed with inference.

## ⚠️ **If No**:

→ Your assumptions (especially prior) may be **unrealistic**. You should revise them *before* moving forward.

---

## 🧠 Why Is This Important?

Because Bayesian inference combines your **prior** with the data.
If your prior is unrealistic, your results may be misleading.

---

### ✅ One-Sentence Summary:

> In Step 6, you simulate data using only your **prior beliefs and model** to check whether they produce realistic outcomes — if the fake data looks very different from the real data, you may need to revise your assumptions.

---

## ✅ **Step 7: Parameter Estimation – Summary**

### 🎯 **Goal**:

To find the **posterior distribution** of the unknown parameter $\mu$ after observing data $y$, using Bayes’ theorem.

---

### 📌 **What you do**:

1. **Start with a prior**
   You assume $\mu \sim \text{Normal}(\mu_0 = 350, \sigma_0 = 50)$

2. **Define a likelihood**
   You assume the data $y_1, ..., y_n$ is from $\text{Normal}(\mu, \sigma = 10)$

3. **Apply Bayes’ Rule**
   You combine prior and likelihood:

   $$
   p(\mu | y) \propto p(y | \mu) \cdot p(\mu)
   $$

   This gives you the **unnormalized posterior**.

4. **(If possible) Derive the exact posterior**
   Because both the prior and likelihood are normal, the **posterior is also normal**:

   $$
   \mu | y \sim \text{Normal}(\mu', \sigma')
   $$

   where:

   $$
   \mu' = \frac{ \mu_0/\sigma_0^2 + \sum y_i/\sigma^2 }{1/\sigma_0^2 + n/\sigma^2}, \quad
   \sigma' = \frac{1}{\sqrt{1/\sigma_0^2 + n/\sigma^2}}
   $$

5. **Draw samples from the posterior**
   These samples represent your **updated belief** about $\mu$ after seeing data.

---

### 📊 **What this gives you**:

* A full **distribution of plausible values** of $\mu$
* Allows you to compute:

  * **Posterior mean** (best estimate)
  * **Credible intervals** (uncertainty)
  * **Posterior predictions** (next step)

---

### 🔁 **Key Idea**:

> You are not just finding the "best" µ — you are finding a **posterior distribution** that tells you how **confident or uncertain** you are about different possible values of µ after seeing the data.


---

## ✅ **Step 8: Posterior Predictions of the Model**

---

### 🎯 **Goal**:

After you’ve found the **posterior distribution of the parameter (like µ)**, now you want to ask:

> “If I believe these values of $\mu$ are most likely, what kind of **new data** should I expect to see?”

This is called **posterior predictive checking** — you're making predictions using the **updated belief** after seeing data.

---

## 🧠 **Why do we do this?**

* To **generate new data** based on what the model has learned.
* To **see if the model can replicate the patterns** in the real data.
* To **check the fit** of the model to observed data.

---

## 📦 **What You Need**:

From earlier steps, you already have:

* The **posterior distribution** of $\mu$:

  $$
  \mu | y \sim \text{Normal}(\mu', \sigma')
  $$
* A fixed $\sigma = 10$

---

## 🔧 **Steps to Make Posterior Predictions**

### 🔹 1. Draw samples of $\mu$ from the posterior

You already computed:

```r
mu_post <- ...
sigma_post <- ...
```

Now:

```r
mu_samples <- rnorm(2000, mu_post, sigma_post)
```

This gives you 2000 plausible values of µ.

---

### 🔹 2. For each sampled $\mu$, generate fake data

```r
sigma <- rep(10, 2000)  # fixed sigma

N <- 50  # number of datapoints per dataset (same as real data)

df.pred <- data.frame(
  sample = rep(1:2000, each = N),
  mu = rep(mu_samples, each = N),
  sigma = rep(sigma, each = N),
  observation = rep(1:N, 2000)
)

df.pred$ypred <- NA
for (i in 1:length(mu_samples)) {
  df.pred[df.pred$sample == i, ]$ypred <- rnorm(N, mean = mu_samples[i], sd = sigma[i])
}
```

Now you have:

* 2000 new datasets (each with 50 points)
* Each dataset is based on a different posterior sample of $\mu$

---

### 🔹 3. Plot the Posterior Predictive Distributions

```r
ggplot(df.pred, aes(x = ypred, group = sample)) +
  geom_density(alpha = 0.0001, color = "gray")
```

This shows the **distribution of new data** that your model expects, based on the posterior.

You can also overlay the real data's distribution:

```r
obs <- subset(df.pred, sample == 1)
obs$ypred <- y  # your real data

ggplot(df.pred, aes(x = ypred, group = sample)) +
  geom_density(alpha = 0.0001, color = "gray") +
  geom_density(data = obs, aes(x = ypred), color = "red", size = 1)
```

* The **gray curves** are fake datasets (predictions)
* The **red curve** is your real dataset

If the red curve lies well within the cloud of gray curves: ✅ your model fits well.
If the red is an outlier: ❌ your model may not explain the data properly.

---

## 📊 What this shows:

> Given what we now believe about µ (after observing data), this is what we expect future reading times to look like.

---

## 📌 Summary of Posterior Prediction (Step 8):

| Step                      | Description                            |
| ------------------------- | -------------------------------------- |
| 🎯 Goal                   | Predict new data using posterior       |
| 1️⃣ Draw µ from posterior | Reflects your updated belief           |
| 2️⃣ Simulate data         | For each sampled µ                     |
| 3️⃣ Compare               | With actual data                       |
| ✅ If match                | Model fits well                        |
| ❌ If mismatch             | Model may be too simple / wrong priors |

---

### ✅ One-Sentence Summary:

> In Step 8, you use the **posterior distribution** to simulate **new fake datasets** and compare them to your real data — this helps you assess how well your model explains what actually happened.

---

**Section 9 (Bayesian Workflow using `brms`)**

---

## 🟡 Background: What does `brms` do?

* `brms` is an R package that makes it easy to **build Bayesian models** using **natural math-like formulas**.
* Internally, it uses **Stan**, which does the real work of sampling from the posterior.
* Think of `brm()` as a function that takes:

  * The formula (like $y \sim 1$)
  * The data
  * The priors
  * And returns a trained Bayesian model.

---

# 🧩 Full Breakdown of Code from Section 9

---

## 📦 Step 1: Create Your Data

```r
dat <- data.frame(trial = 1:length(y), y = y)
```

### 🔍 What this does:

* `y` is your real dataset (50 reading times, already defined).
* `1:length(y)` creates the numbers 1 through 50.
* `data.frame(...)` makes a table (like a pandas DataFrame in Python) with two columns:

  * `trial`: 1 to 50
  * `y`: your data values

✅ This prepares the data to be fed into the model.

---

## 🧠 Step 2: Fit the Bayesian Model

```r
m1 <- brm(
  y ~ 1,                     # the model formula
  data = dat,                # your dataset
  family = gaussian(),       # assume normal distribution (i.e., y ~ Normal(mu, sigma))
  prior = c(
    prior(normal(350, 50), class = Intercept),  # prior on mu
    prior(constant(10), class = sigma)          # fix sigma = 10
  )
)
```

### 🔍 What this does:

* `brm(...)` is the function that builds and fits your model.
* `y ~ 1` says “model the variable `y` using just an intercept (i.e., a constant mean $\mu$).”
* `data = dat` tells the function where to find your variables.
* `family = gaussian()` says your data follows a **normal distribution**.
* `prior(...)` sets your priors:

  * Intercept $\mu \sim \text{Normal}(350, 50)$
  * $\sigma = 10$ (fixed constant, not learned)

✅ This step **runs Stan** and **fits the Bayesian model** using posterior sampling.

---

## 📈 Step 3: Visualize Posterior Samples

```r
plot(m1, pars = "b_Intercept")
```

### 🔍 What this does:

* `plot(m1, ...)` shows the **posterior distribution** of the intercept (i.e., $\mu$).
* You’ll see:

  * A density plot (how often each µ value appears)
  * Trace plots from the 4 MCMC chains (to check if they converged properly)

✅ Helps you **diagnose convergence** and **visualize the result**.

---

## 📥 Step 4: Extract Samples

```r
post.samples <- posterior_samples(m1)
```

### 🔍 What this does:

* It pulls out the **raw samples** from the posterior.
* `post.samples` is now a table with thousands of rows — each row is one sampled value of:

  * `b_Intercept`: a µ value (posterior sample)
  * `sigma`: (always 10 here, since it's fixed)
  * Other columns like log-likelihood values (you can ignore them now)

✅ These samples can be used to compute:

* Posterior mean
* Credible intervals
* Simulate new data

---

## 🔮 Step 5: Posterior Predictive Check

```r
pp_check(m1, ndraws = 100)
```

### 🔍 What this does:

* Simulates **100 fake datasets** from the posterior.
* Plots them as histograms or density curves, **overlayed** on your real data.
* You can visually inspect if the model captures the **shape and location** of the real data.

✅ Helps you test whether the **model learned a reasonable distribution**.

---

## ✅ Summary of Each Code Block:

| Code Block            | Purpose                                      |
| --------------------- | -------------------------------------------- |
| `data.frame(...)`     | Create dataset with real data                |
| `brm(...)`            | Fit Bayesian model using prior + likelihood  |
| `plot(m1, ...)`       | Visualize posterior µ                        |
| `posterior_samples()` | Extract posterior draws for further analysis |
| `pp_check()`          | Simulate & compare predicted vs real data    |

---
