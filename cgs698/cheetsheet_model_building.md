# 🧭 **Flowchart: Full Bayesian Modeling Workflow**

```
       START
         ↓
🧠 Define the Problem
     - What data do I have?
     - What parameter(s) am I trying to estimate?
         ↓
📈 Assume Generative Model
     - e.g., y_i ~ Normal(µ, σ)
         ↓
🎯 Specify Priors
     - µ ~ Normal(µ₀, σ₀)
     - Choose based on knowledge or assumptions
         ↓
📊 Collect Data
     - e.g., y = [y₁, y₂, ..., yₙ]
         ↓
🧪 Model Checking (Step 6)
     - Simulate fake data from priors (prior predictive check)
     - Compare to real data
     → If unrealistic → revise priors
         ↓
🧮 Posterior Estimation (Step 7)
     - Apply Bayes’ Rule:
       Posterior ∝ Likelihood × Prior
     - Result: p(µ | y)
     - Either compute analytically or via sampling
         ↓
🔁 Posterior Predictive Check (Step 8)
     - Draw µ from posterior
     - Simulate new y from Normal(µ, σ)
     - Compare fake y’s to real y
         ↓
🧰 Fit Using brms (Step 9)
     - Use R code to fit model, extract samples, run checks
         ↓
✅ Validate or Refine Model
     - If predictions are good: Model is useful!
     - If not: Adjust model, priors, or assumptions
         ↓
       END
```

---

# 📄 **Cheat Sheet: Bayesian Modeling Concepts**

| Concept                        | Meaning                                   | Example                                        |                    |                 |
| ------------------------------ | ----------------------------------------- | ---------------------------------------------- | ------------------ | --------------- |
| **Prior**                      | Belief about parameters before data       | µ \~ Normal(350, 50)                           |                    |                 |
| **Likelihood**                 | Probability of data given parameters      | p(y                                            | µ) = ∏ Normal(y\_i | µ, σ)           |
| **Posterior**                  | Updated belief after seeing data          | p(µ                                            | y) ∝ p(y           | µ) × p(µ)       |
| **Bayes’ Theorem**             | Posterior = Likelihood × Prior / Evidence | p(µ                                            | y) = \[p(y         | µ)×p(µ)] / p(y) |
| **Model Checking**             | Simulate data from prior to check realism | Generate yᵢ \~ Normal(µ, σ) using µ from prior |                    |                 |
| **Posterior Predictive Check** | Simulate yᵢ from µ sampled from posterior | Compare to real y                              |                    |                 |
| **Credible Interval**          | 95% range for parameter from posterior    | e.g., µ ∈ \[295, 305]                          |                    |                 |
| **MAP Estimate**               | Most probable value in posterior          | Peak of posterior curve                        |                    |                 |
| **brm()**                      | Fit Bayesian model in R using Stan        | `brm(y ~ 1, data = dat, ...)`                  |                    |                 |
| **pp\_check()**                | Compare predicted vs. real data           | Visual diagnostic                              |                    |                 |

---

### 🔁 Posterior Sampling Summary:

Given:

* $\mu \sim \text{Normal}(350, 50)$
* $y \sim \text{Normal}(\mu, 10)$

After seeing 50 observations:

* Compute posterior:

  $$
  \mu | y \sim \text{Normal}(\mu', \sigma')
  $$

  where:

  $$
  \mu' = \frac{\mu_0/\sigma_0^2 + \sum y_i/\sigma^2}{1/\sigma_0^2 + n/\sigma^2}, \quad
  \sigma' = \frac{1}{\sqrt{1/\sigma_0^2 + n/\sigma^2}}
  $$

---
