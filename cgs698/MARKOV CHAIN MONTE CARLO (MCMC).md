## 📘 MARKOV CHAIN MONTE CARLO (MCMC)

---

### 🧠 DEFINITION

> **MCMC** is a family of algorithms to draw samples from a complicated distribution (like the posterior) by constructing a **Markov chain** whose equilibrium distribution is the target. Over many steps, the chain “forgets” its start and produces samples from the desired distribution.

---

### 🛠️ METHODOLOGY (High-Level)

1. **Initialize** the chain at some starting value θ₀.
2. **Propose** a new value θ\* based on the current θᵢ, using a **proposal distribution** q(θ\* | θᵢ).
3. **Compute** the **acceptance ratio**

   $$
     H = \frac{p(y|\theta^*)\,p(\theta^*)\,q(\theta_i|\theta^*)}{p(y|\theta_i)\,p(\theta_i)\,q(\theta^*|\theta_i)}
   $$
4. **Accept** θ\* with probability α = min(1, H).
   Otherwise **keep** θᵢ.
5. **Iterate** steps 2–4 to build a long chain θ₁, θ₂, …, θ\_N.
6. After “burn-in” (initial steps), the samples approximate the target posterior.

---

### 🧸 Child-Friendly Analogy

> Imagine a puppy sniffing for buried treats in a yard.
>
> * It starts at one spot.
> * At each step, it **sniffs around** nearby (proposal).
> * If the smell is stronger (higher posterior density), it **moves** there.
> * If weaker, it sometimes still moves, but often stays.
>   Over time, the puppy spends more time in the tastiest spots—just like MCMC spends more samples in high-probability regions.

---

## 🔄 STEP-BY-STEP ALGORITHM (Metropolis–Hastings)

1. **Choose**:

   * A starting value θ₀.
   * A proposal distribution q(·|·), e.g., Normal centered at current θ.
   * Number of samples N and burn-in B.
2. **For** i = 0 to N–1:

   1. **Sample** θ\* ∼ q(· | θᵢ).
   2. **Compute**

      $$
      H = \frac{p(y|\theta^*)\,p(\theta^*)\,q(\theta_i|\theta^*)}{p(y|\theta_i)\,p(\theta_i)\,q(\theta^*|\theta_i)}.
      $$
   3. **Set**

      $$
        θ_{i+1} = 
        \begin{cases}
          θ^*, & \text{with probability } \min(1, H),\\
          θ_i, & \text{otherwise.}
        \end{cases}
      $$
3. **Discard** the first B samples, and use the rest for inference.

---

## 🧪 EXAMPLE: Beta-Binomial via MCMC

* Data: k = 2 heads in n = 10 flips
* Prior: θ ∼ Beta(1,1)
* Likelihood: Binomial(n=10, θ)

---

### 💻 R CODE WITH EXPLANATIONS

```r
# 1. Set up
k <- 2
n <- 10
a <- 1; b <- 1         # Beta(1,1) prior

N <- 20000             # total MCMC iterations
burn_in <- 5000        # burn-in
theta_chain <- numeric(N)
theta_chain[1] <- 0.5  # starting value

proposal_sd <- 0.1     # step-size for Normal proposal

# 2. MCMC loop
for (i in 1:(N-1)) {
  current <- theta_chain[i]
  
  # 2.1 Propose a new value
  theta_star <- rnorm(1, mean=current, sd=proposal_sd)
  
  # 2.2 If outside [0,1], reject immediately
  if (theta_star <= 0 || theta_star >= 1) {
    theta_chain[i+1] <- current
    next
  }
  
  # 2.3 Compute log posterior (for stability)
  log_post <- function(theta) {
    dbeta(theta, a, b, log=TRUE) + 
      dbinom(k, n, theta, log=TRUE)
  }
  
  log_H <- log_post(theta_star) - log_post(current)
  
  # 2.4 Accept/reject
  if (log(runif(1)) < log_H) {
    theta_chain[i+1] <- theta_star
  } else {
    theta_chain[i+1] <- current
  }
}

# 3. Discard burn-in and inspect
posterior_samples <- theta_chain[(burn_in+1):N]

# 4. Plot estimated posterior
hist(posterior_samples, freq=FALSE, breaks=30,
     main="MCMC Posterior", xlab="theta")
```

---

### 🧠 Explanation of Key Steps

* **Proposal**: `rnorm(current, sd=proposal_sd)`
  → small random “jumps” around the current θ.
* **Log posterior**: we combine prior and likelihood in log-space to avoid underflow.
* **Acceptance**:
  $\log U < \log p^* - \log p$ is equivalent to $U < H$.

---

## 🎯 Choosing Parameters

* **proposal\_sd**:

  * Too small → chain moves slowly (high autocorrelation).
  * Too large → most proposals are rejected.
  * Aim for \~25–50% acceptance rate.
* **burn\_in**:

  * Discard initial “warm-up” period before the chain reaches equilibrium.

---

## ✅ Benefits & Drawbacks

| Benefit                                       | Drawback                                       |
| --------------------------------------------- | ---------------------------------------------- |
| Samples directly from the posterior           | Requires tuning (step-size, burn-in)           |
| Works for high dimensions if tuned well       | Samples are correlated; need enough iterations |
| No need for normalizing constant of posterior | Diagnostics (trace plots, autocorrelation)     |

---

### 🧸 Puppy Analogy Revisited

> The puppy’s **step size** is `proposal_sd`. If too small, it wanders slowly; if too big, it often jumps out of the yard and has to go back (rejected).

---

**TL;DR:**

> MCMC builds a “random walk” that spends more time in high-probability regions. Over many steps, the samples approximate the true posterior.

---

Perfect! Let's now write a **clear pseudo-code** for the **Metropolis–Hastings (MCMC)** algorithm, followed by a **dry run** with simple made-up numbers to show how each step works.

---

## 📘 Metropolis–Hastings: Pseudo-Code

---

```text
Input:
- p(y | θ): Likelihood function
- p(θ): Prior distribution
- q(θ* | θ): Proposal distribution (symmetric, e.g., Normal)
- θ₀: Initial value
- N: Total number of samples
- σ: Proposal standard deviation

Output:
- θ₁, θ₂, ..., θ_N: Samples from the posterior

Algorithm:
1. Initialize θ₀
2. For i = 1 to N:
   a. Propose θ* ~ q(θ* | θ_{i-1})  ← sample from proposal
   b. Compute acceptance ratio H:
        H = [p(y | θ*) * p(θ*)] / [p(y | θ_{i-1}) * p(θ_{i-1})]
   c. Draw u ~ Uniform(0,1)
   d. If u < H:
        θᵢ ← θ*
      Else:
        θᵢ ← θ_{i-1}
3. Return θ₁ to θ_N
```

If the proposal distribution is **symmetric** (e.g., Normal), the q terms cancel out.

---

## 🧪 DRY RUN: With Simple Numbers

Let’s make it super easy and use tiny integers instead of actual binomial/Beta math.

---

### 🎯 Setup:

We pretend:

* θ ∈ \[0, 1], but use discrete values {0.1, 0.2, ..., 0.9}
* Likelihood (made up):
  $p(y|\theta) = \theta^2$
* Prior (uniform): $p(\theta) = 1$
* Proposal: Gaussian jump of ±0.1
* Start at θ₀ = 0.4
* Do 5 steps

---

### 🧾 Simulated Values

We'll use simple values for calculations.

\| θ   | Likelihood $p(y|\theta)$ | Prior | Posterior Score $\propto \text{likelihood × prior}$ |
\|------|-------------------------------|--------|---------------------------------------------------------|
\| 0.1  | 0.01                          | 1      | 0.01                                                    |
\| 0.2  | 0.04                          | 1      | 0.04                                                    |
\| 0.3  | 0.09                          | 1      | 0.09                                                    |
\| 0.4  | 0.16                          | 1      | 0.16                                                    |
\| 0.5  | 0.25                          | 1      | 0.25                                                    |
\| 0.6  | 0.36                          | 1      | 0.36                                                    |
\| 0.7  | 0.49                          | 1      | 0.49                                                    |
\| 0.8  | 0.64                          | 1      | 0.64                                                    |
\| 0.9  | 0.81                          | 1      | 0.81                                                    |

---

### 🔁 Step-by-Step Simulation

#### Step 0:

* Start at θ₀ = 0.4
* Score = 0.16

---

#### Step 1:

* Propose θ\* = 0.5
* Score = 0.25
* Acceptance Ratio:

  $$
  H = \frac{0.25}{0.16} = 1.5625 > 1 ⇒ \text{accept}
  $$
* Move to θ₁ = 0.5

---

#### Step 2:

* Propose θ\* = 0.6
* Score = 0.36
* H = 0.36 / 0.25 = 1.44 → Accept
* θ₂ = 0.6

---

#### Step 3:

* Propose θ\* = 0.5 (backward move)
* Score = 0.25
* H = 0.25 / 0.36 = 0.694
* Draw u = 0.4 → u < H → Accept
* θ₃ = 0.5

---

#### Step 4:

* Propose θ\* = 0.4
* Score = 0.16
* H = 0.16 / 0.25 = 0.64
* Draw u = 0.75 → u > H → Reject
* θ₄ = θ₃ = 0.5

---

#### Step 5:

* Propose θ\* = 0.6
* Score = 0.36
* H = 0.36 / 0.25 = 1.44 → Accept
* θ₅ = 0.6

---

### 🧾 Final Chain:

```
θ₀ = 0.4
θ₁ = 0.5
θ₂ = 0.6
θ₃ = 0.5
θ₄ = 0.5 (rejected move)
θ₅ = 0.6
```

✅ The chain **moves more often toward higher posterior** values
✅ Sometimes accepts lower ones (adds randomness)

---

### 📊 After Many Steps...

If we repeat this process thousands of times, the **histogram of θ values** will match the shape of the true posterior.
