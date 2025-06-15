## 📊 Table: Comparison of Bayesian Sampling Algorithms

| **Algorithm**                  | **Description**                                                                                                                      | **Pros ✅**                                                        | **Cons ❌**                                                                      | **Key Steps**                                                       |                                                                                        |                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Monte Carlo Integration**    | Approximates integrals (e.g., marginal likelihood) by averaging likelihoods over samples drawn from the **prior**.                   | Simple to implement, useful for evidence estimation               | Doesn’t generate posterior samples, inefficient if prior ≠ posterior            | 1. Sample θ from prior<br>2. Compute likelihood p(y                 | θ)<br>3. Take average of all p(y                                                       | θ)                                                  |
| **Rejection Sampling**         | Samples from the **posterior** by accepting/rejecting samples from a proposal distribution based on how well they fit the posterior. | Easy conceptually, gives independent samples                      | High rejection rate, inefficient in high dimensions                             | 1. Sample θ from proposal g(θ)<br>2. Compute acceptance score = p(y | θ)p(θ)/\[M·g(θ)]<br>3. Accept θ if u < score                                           |                                                     |
| **Metropolis–Hastings (MCMC)** | Samples from posterior using a **Markov chain**. Proposes new θ, accepts it probabilistically based on posterior ratio.              | Works for complex posteriors, no need for normalized densities    | Requires tuning proposal, correlated samples, slow convergence in some cases    | 1. Initialize θ₀<br>2. Propose θ\* from q(θ\*                       | θᵢ)<br>3. Compute acceptance ratio H<br>4. Accept θ\* with prob min(1, H)<br>5. Repeat |                                                     |
| **Gibbs Sampling (MCMC)**      | Special case of MCMC where **each parameter** is sampled from its **full conditional distribution**, holding others fixed.           | No rejections, easy for high dimensions if conditionals are known | Requires closed-form full conditionals, slow mixing if variables are correlated | 1. Initialize all θs<br>2. Loop: Sample θ₁                          | θ₂, ..., θₙ; then θ₂                                                                   | θ₁, θ₃, ..., θₙ; etc.<br>3. Repeat for N iterations |

---

## 🔁 Summary of Use-Cases

| **If you want to...**                                        | **Use this algorithm**     |
| ------------------------------------------------------------ | -------------------------- |
| Estimate marginal likelihood or expectation                  | Monte Carlo Integration    |
| Get independent posterior samples (low dim)                  | Rejection Sampling         |
| Sample from complex posterior (general-purpose)              | Metropolis–Hastings (MCMC) |
| Sample from posterior with easy conditionals (multi-variate) | Gibbs Sampling             |

---
