## ✅ Contents:

1. **What is Gibbs Sampling (Quick Recap)**
2. **Logic Behind It**
3. **Pseudo-code**
4. **Dry Run (step-by-step with simple numbers)**
5. **General Steps Summary**

---

## 1. 📘 What is Gibbs Sampling (Recap)

> Gibbs Sampling is a method to sample from a **multidimensional posterior** distribution by **sampling one parameter at a time**, using its **full conditional distribution** while keeping others fixed.

It’s like updating a group project one person at a time—each takes a turn while the others freeze.

---

## 2. 🧠 Logic Behind It

Let’s say you have 2 parameters:
$\theta_1$ and $\theta_2$

Your goal is to sample from the **joint posterior**:

$$
p(\theta_1, \theta_2 | \text{data})
$$

But you **can’t sample from the joint directly**, so instead:

* You **fix $\theta_2$** and sample $\theta_1 \sim p(\theta_1 | \theta_2, \text{data})$
* Then fix the new $\theta_1$ and sample $\theta_2 \sim p(\theta_2 | \theta_1, \text{data})$
* Repeat!

Over time, the chain of $(\theta_1, \theta_2)$ converges to samples from the **true joint posterior**.

---

## 3. ✏️ Pseudo-Code for Gibbs Sampling

```text
Input:
- Full conditionals:
    p(θ₁ | θ₂, y)
    p(θ₂ | θ₁, y)
- Initial values: θ₁⁰, θ₂⁰
- Number of samples N

Output:
- Posterior samples: [(θ₁¹, θ₂¹), (θ₁², θ₂²), ..., (θ₁ⁿ, θ₂ⁿ)]

Algorithm:
1. Initialize θ₁⁰ and θ₂⁰
2. For i = 1 to N:
    a. Sample θ₁ⁱ ~ p(θ₁ | θ₂ⁱ⁻¹, y)
    b. Sample θ₂ⁱ ~ p(θ₂ | θ₁ⁱ, y)
3. Return the sequence of (θ₁, θ₂)
```

---

## 4. 🧪 DRY RUN: With Made-up Numbers

Let’s make a **simple model** where:

$$
\theta_1 | \theta_2 \sim \text{Normal}(3 + 0.5 \cdot \theta_2,\; 1)  
$$

$$
\theta_2 | \theta_1 \sim \text{Normal}(1 + 0.2 \cdot \theta_1,\; 1)
$$

We’ll generate **3 iterations** of Gibbs Sampling.

### Step 0: Initialize

```
θ₁⁰ = 0
θ₂⁰ = 0
```

---

### Step 1:

**Sample θ₁¹ | θ₂⁰ = 0**

$$
\theta_1 \sim \mathcal{N}(3 + 0.5×0, 1) = \mathcal{N}(3, 1)
$$

→ Let’s say we draw θ₁¹ = **2.8**

---

**Sample θ₂¹ | θ₁¹ = 2.8**

$$
\theta_2 \sim \mathcal{N}(1 + 0.2×2.8, 1) = \mathcal{N}(1.56, 1)
$$

→ Let’s say we draw θ₂¹ = **1.3**

---

### Step 2:

**Sample θ₁² | θ₂¹ = 1.3**

$$
\theta_1 \sim \mathcal{N}(3 + 0.5×1.3, 1) = \mathcal{N}(3.65, 1)
$$

→ Sampled value: θ₁² = **3.8**

---

**Sample θ₂² | θ₁² = 3.8**

$$
\theta_2 \sim \mathcal{N}(1 + 0.2×3.8, 1) = \mathcal{N}(1.76, 1)
$$

→ Sampled value: θ₂² = **1.4**

---

### Step 3:

**Sample θ₁³ | θ₂² = 1.4**

$$
\theta_1 \sim \mathcal{N}(3 + 0.5×1.4, 1) = \mathcal{N}(3.7, 1)
$$

→ θ₁³ = **3.9**

---

**Sample θ₂³ | θ₁³ = 3.9**

$$
\theta_2 \sim \mathcal{N}(1 + 0.2×3.9, 1) = \mathcal{N}(1.78, 1)
$$

→ θ₂³ = **1.8**

---

### ⛓️ Chain of Samples

| Iteration | θ₁  | θ₂  |
| --------- | --- | --- |
| 0         | 0.0 | 0.0 |
| 1         | 2.8 | 1.3 |
| 2         | 3.8 | 1.4 |
| 3         | 3.9 | 1.8 |

---

### 🧠 What You See

* Values move toward high-probability areas
* Each new sample uses the **most recent value** of the other parameter
* This sequence will **converge** to samples from the joint posterior

---

## 5. 🔁 Gibbs Sampling: General Steps Summary

| Step                    | Action                                 |
| ----------------------- | -------------------------------------- |
| Initialize              | Set starting values for all parameters |
| Update 1 variable       | Sample from its full conditional       |
| Cycle through variables | Repeat until all are updated           |
| Repeat for N iterations | Build a Markov Chain of samples        |
| Discard burn-in         | Keep only stable samples               |

---
Perfect! Let's now do **both**:

1. ✅ **Gibbs Sampling R code** for a simple synthetic example (bivariate normal)
2. ✅ **Gibbs Sampling for a Beta-Binomial Bayesian model**
   (e.g., sampling from posterior when both prior and data are involved)

---

## ✅ 1. GIBBS SAMPLING: R Code for Bivariate Normal Model

This is the one we used in the dry run:

* Assume:

  $$
  \theta_1 | \theta_2 \sim \mathcal{N}(3 + 0.5 \cdot \theta_2, 1) \\
  \theta_2 | \theta_1 \sim \mathcal{N}(1 + 0.2 \cdot \theta_1, 1)
  $$

### 🧑‍💻 R Code

```r
# Parameters
N <- 10000              # total samples
burn_in <- 2000         # burn-in period

theta1 <- numeric(N)
theta2 <- numeric(N)

# Initial values
theta1[1] <- 0
theta2[1] <- 0

# Gibbs sampler loop
for (i in 2:N) {
  # Sample theta1 given theta2
  mu1 <- 3 + 0.5 * theta2[i - 1]
  theta1[i] <- rnorm(1, mean = mu1, sd = 1)

  # Sample theta2 given theta1
  mu2 <- 1 + 0.2 * theta1[i]
  theta2[i] <- rnorm(1, mean = mu2, sd = 1)
}

# Remove burn-in
theta1_post <- theta1[(burn_in + 1):N]
theta2_post <- theta2[(burn_in + 1):N]

# Plot joint distribution
plot(theta1_post, theta2_post, pch = 20, col = rgb(0, 0, 1, 0.3),
     xlab = "theta1", ylab = "theta2", main = "Gibbs Samples")
```

---

## ✅ 2. GIBBS SAMPLING: Beta-Binomial Example

Suppose we don’t just want the posterior of θ but also **other hidden parameters** — we’ll construct a hierarchical example:

Let’s say:

* You observe number of heads $x$ in $n$ flips
* You model:

  * $\theta \sim \text{Beta}(a, b)$
  * $x \sim \text{Binomial}(n, \theta)$

We **usually don't need Gibbs** if only θ is unknown (posterior is Beta).
BUT if $a, b$ are also **unknown and sampled**, then **Gibbs** makes sense.

---

### 🔧 Let’s do this:

Model:

* $\theta \sim \text{Beta}(a, b)$
* $x_i \sim \text{Binomial}(n, \theta)$
* Prior for a and b: $a, b \sim \text{Gamma}(1, 0.1)$

We’ll alternate between:

* Sampling $\theta | x, a, b$
* Sampling $a, b | \theta$ using Metropolis (Gibbs hybrid)

This is semi-Gibbs but real-world style.

---

### 🧑‍💻 R Code for Hierarchical Gibbs Sampler

```r
set.seed(42)

# Observed data
x <- c(7, 6, 6, 5, 9, 7)
n <- 10
N <- 5000  # samples

# Storage
theta <- numeric(N)
a <- numeric(N)
b <- numeric(N)

# Initialize
theta[1] <- 0.5
a[1] <- 2
b[1] <- 2

# Gibbs sampler
for (i in 2:N) {
  # Update theta | a, b, x
  alpha_post <- a[i-1] + sum(x)
  beta_post <- b[i-1] + length(x)*n - sum(x)
  theta[i] <- rbeta(1, alpha_post, beta_post)

  # Update a | theta — use MH within Gibbs
  a_star <- abs(rnorm(1, a[i-1], 0.5))
  log_accept_ratio_a <- dgamma(a_star, 1, 0.1, log=TRUE) +
    dbeta(theta[i], a_star, b[i-1], log=TRUE) -
    dgamma(a[i-1], 1, 0.1, log=TRUE) -
    dbeta(theta[i], a[i-1], b[i-1], log=TRUE)
  
  if (log(runif(1)) < log_accept_ratio_a) {
    a[i] <- a_star
  } else {
    a[i] <- a[i-1]
  }

  # Update b | theta — use MH within Gibbs
  b_star <- abs(rnorm(1, b[i-1], 0.5))
  log_accept_ratio_b <- dgamma(b_star, 1, 0.1, log=TRUE) +
    dbeta(theta[i], a[i], b_star, log=TRUE) -
    dgamma(b[i-1], 1, 0.1, log=TRUE) -
    dbeta(theta[i], a[i], b[i-1], log=TRUE)
  
  if (log(runif(1)) < log_accept_ratio_b) {
    b[i] <- b_star
  } else {
    b[i] <- b[i-1]
  }
}

# Plot posterior of theta
hist(theta[1001:N], breaks=30, freq=FALSE,
     main="Posterior of θ via Gibbs", xlab="theta")
```

---

## 🧠 What This Code Does

| Part               | Meaning                                            |
| ------------------ | -------------------------------------------------- |
| `rbeta`            | Sampling θ given data — Beta posterior             |
| `dgamma` + `dbeta` | MH step to update `a`, `b` using log probabilities |
| `abs(rnorm(...))`  | Propose new `a`, `b` values                        |
| Histogram          | Shows samples of θ from posterior                  |

