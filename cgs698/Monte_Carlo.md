## 📘 MONTE CARLO INTEGRATION — THE COMPLETE GUIDE

---

## 🧠 DEFINITION

> **Monte Carlo Integration** is a numerical method that uses **random sampling** to approximate an **integral**, especially when it cannot be solved analytically.

In Bayesian inference, it's often used to compute **marginal likelihoods**, **expected values**, or **normalizing constants**, like:

$$
\text{Marginal Likelihood (ML)} = \int p(y|\theta) \cdot p(\theta) \, d\theta
$$

We approximate this using:

$$
\hat{ML} \approx \frac{1}{n} \sum_{i=1}^{n} p(y | \tilde\theta_i), \quad \text{where } \tilde\theta_i \sim p(\theta)
$$

---

## 🛠️ METHODOLOGY

### What’s Needed:

* A prior distribution $p(\theta)$
* A likelihood function $p(y|\theta)$
* A way to sample from the prior
* A goal to estimate the marginal likelihood or expected value

---

## 🔄 STEP-BY-STEP WORKFLOW

### Step 1️⃣: **Define the model**

You must know:

* The prior $p(\theta)$
* The likelihood $p(y|\theta)$
* The observed data $y$

---

### Step 2️⃣: **Draw samples**

Generate $n$ samples from the prior $\theta_i \sim p(\theta)$

---

### Step 3️⃣: **Evaluate the likelihood**

For each sample $\theta_i$, compute the likelihood:

$$
p(y|\theta_i)
$$

---

### Step 4️⃣: **Average**

Compute the average:

$$
\hat{ML} = \frac{1}{n} \sum_{i=1}^{n} p(y|\theta_i)
$$

---

### Step 5️⃣ (Optional): **Use weighted sampling**

To approximate the **posterior**, you can use weighted sampling where:

$$
\text{weight}_i = p(y|\theta_i)
$$

This gives more importance to θ values with higher likelihoods.

---

## 🧪 EXAMPLE: Beta-Binomial Model

Let’s say:

* You flip a coin 10 times and get 2 heads
* You assume a uniform prior: $\theta \sim \text{Beta}(1, 1)$
* You want to estimate:

  $$
  \int_0^1 \binom{10}{2} \cdot \theta^2 \cdot (1-\theta)^8 \cdot 1 \, d\theta
  $$

  Which is the marginal likelihood of observing 2 heads

---

## 💻 R CODE with EXPLANATION

```r
# Parameters
k <- 2           # number of heads observed
n <- 10          # number of coin flips
a <- 1; b <- 1   # Beta prior parameters (uniform)

# Storage for 10,000 samples
df <- data.frame(theta = numeric(10000), likelihood = numeric(10000))

# Step 1-3: Monte Carlo loop
for (i in 1:10000) {
  theta_i <- rbeta(1, a, b)                      # Sample θ from prior
  lik_i   <- dbinom(k, size = n, prob = theta_i) # Compute likelihood p(y | θ)
  df[i, ] <- c(theta_i, lik_i)                   # Store sample and likelihood
}

# Step 4: Average of likelihoods = estimated marginal likelihood
ML_estimate <- mean(df$likelihood)
cat("Estimated Marginal Likelihood:", ML_estimate, "\n")
```

---

### 📉 Output:

```
Estimated Marginal Likelihood: 0.0898
```

Which is very close to the true value:

$$
\frac{1}{11} = 0.0909
$$

---

## 📊 VISUALIZATION (Optional)

### Histogram of the θ values from the prior:

```r
hist(df$theta, breaks=20, main="Samples from Prior", xlab="theta")
```

### Histogram of likelihood values:

```r
hist(df$likelihood, breaks=20, main="Likelihoods", xlab="p(y | theta)")
```

### Estimated Posterior (Weighted Sampling)

```r
# Resample theta based on likelihood weights (simulate posterior samples)
posterior_samples <- sample(df$theta, size=4000, prob=df$likelihood, replace=TRUE)

# Plot the estimated posterior
hist(posterior_samples, breaks=20, freq=FALSE,
     main="Posterior Estimate", xlab="theta")
```

---

## ✅ Summary: Key Concepts

| Concept                 | Meaning                                                                    |                                    |
| ----------------------- | -------------------------------------------------------------------------- | ---------------------------------- |
| Prior $p(\theta)$       | Your belief about θ before seeing data                                     |                                    |
| Likelihood ( p(y/theta) )                                                                  | How likely your data is for each θ |
| Marginal Likelihood     | Total chance of seeing data under the model                                |                                    |
| Monte Carlo Estimate    | Use average over random samples from prior to estimate marginal likelihood |                                    |
| Posterior Approximation | Resample θ using likelihood as weights                                     |                                    |

---

## 🧠 TL;DR:

> Monte Carlo Integration is like averaging the results of thousands of **randomly guessed** θ values based on how well they **explain the data**. Simple, powerful, but can be inefficient if the prior and posterior don’t align well.

---

## 📘 1. Rejection Sampling — Full Explanation

---

### 🧠 DEFINITION:

> **Rejection sampling** is a method to generate samples from a complex target distribution (like the posterior) by:

* Proposing random samples from a simpler distribution, and
* **Accepting or rejecting** them based on how well they match the target.

You “guess and check” whether to keep a sample.

---

### 🛠️ METHODOLOGY (Step-by-Step)

We want to sample from a hard distribution like $p(\theta|y)$.
But it’s hard to directly sample from this.

So we:

1. **Choose a proposal distribution** $g(\theta)$, easy to sample from (e.g., uniform or normal)
2. **Find a constant** $M$ such that:

   $$
   p(\theta|y) \leq M \cdot g(\theta) \quad \text{for all } \theta
   $$
3. Repeat:

   * Draw $\theta^* \sim g(\theta)$
   * Draw $u \sim \text{Uniform}(0, 1)$
   * Accept $\theta^*$ **if**:

     $$
     u < \frac{p(y|\theta^*) \cdot p(\theta^*)}{M \cdot g(\theta^*)}
     $$
4. Keep accepted samples; discard the rest

---

### 🧪 EXAMPLE (Beta-Binomial again)

Observed data: 2 heads in 10 flips

Prior: $\theta \sim \text{Beta}(1,1)$
Proposal: $\theta \sim \text{Uniform}(0,1)$
Likelihood: $p(y|\theta) = \text{Binomial}(2; 10, θ)$

---

### 💻 R Code with Comments:

```r
k <- 2
n <- 10
a <- 1
b <- 1

accepted_thetas <- c()
attempts <- 0

while (length(accepted_thetas) < 5000) {
  theta_candidate <- runif(1)  # from proposal g(θ)

  likelihood <- dbinom(k, n, theta_candidate)     # p(y|θ)
  prior <- dbeta(theta_candidate, a, b)           # p(θ) (uniform = 1)
  g_theta <- 1                                     # uniform proposal = 1

  M <- 2.5  # M should be large enough

  # acceptance probability
  accept_prob <- (likelihood * prior) / (M * g_theta)

  u <- runif(1)
  if (u < accept_prob) {
    accepted_thetas <- c(accepted_thetas, theta_candidate)
  }

  attempts <- attempts + 1
}

cat("Accepted", length(accepted_thetas), "samples in", attempts, "attempts\n")

# Plot histogram
hist(accepted_thetas, breaks=20, freq=FALSE, main="Rejection Sampling Posterior", xlab="theta")
```

---

### ✅ Benefits of Rejection Sampling:

| 👍 Benefit                   | Explanation                                        |
| ---------------------------- | -------------------------------------------------- |
| ✔️ Simple                    | Conceptually and computationally easy              |
| ✔️ Independent Samples       | All accepted samples are independent               |
| ✔️ Can Sample from Posterior | If done correctly, produces real posterior samples |

---

### ❌ Drawbacks of Rejection Sampling:

| 👎 Limitation              | Why it matters                                |
| -------------------------- | --------------------------------------------- |
| ❌ Inefficient              | Many samples get rejected                     |
| ❌ Needs good M             | Picking a bad M makes it worse                |
| ❌ Doesn’t scale            | In higher dimensions, rejection rate explodes |
| ❌ Requires normalized form | You must evaluate the unnormalized posterior  |

---

## 📘 2. Monte Carlo Integration — Benefits & Drawbacks

---

### ✅ Benefits of Monte Carlo Integration

| 👍 Benefit                   | Explanation                                    |
| ---------------------------- | ---------------------------------------------- |
| ✔️ Easy to implement         | Just draw samples and average                  |
| ✔️ No derivatives needed     | Unlike HMC or MCMC with gradients              |
| ✔️ Useful for model evidence | Good for marginal likelihood estimation        |
| ✔️ Flexible                  | Can estimate expectations, not just likelihood |

---

### ❌ Drawbacks of Monte Carlo Integration

| 👎 Limitation                      | Why it matters                                |
| ---------------------------------- | --------------------------------------------- |
| ❌ No posterior samples             | Only gives likelihood estimate, not posterior |
| ❌ Inefficient if prior ≠ posterior | Wastes samples in unimportant regions         |
| ❌ Doesn’t adapt                    | No learning or feedback from results          |

---

### 🧠 TL;DR:

| Method                      | What it Does                               | Good For                          | Weakness                        |
| --------------------------- | ------------------------------------------ | --------------------------------- | ------------------------------- |
| **Rejection Sampling**      | Generates posterior samples                | Low-dimensional models            | High rejection rate             |
| **Monte Carlo Integration** | Approximates integrals using prior samples | Marginal likelihood, expectations | Doesn’t give posterior directly |
