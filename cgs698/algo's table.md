## 🧠 Summary of Bayesian Sampling Algorithms

| **Algorithm**              | **Description**                                             | **Key Steps**                                                                                                                                               | **Pros**                                                  | **Cons**                                                                 |
|----------------------------|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|-------------------------------------------------------------------------|
| **Grid Approximation**     | Discretize parameter space and compute exact posterior      | 1. Define a grid of θ values  <br> 2. Compute likelihood × prior at each grid point  <br> 3. Normalize to get posterior                                      | ✅ Simple to implement  <br> ✅ Exact for 1D problems       | ❌ Slow in high dimensions  <br> ❌ Grid resolution affects accuracy     |
| **Monte Carlo Integration**| Estimate integrals (e.g., marginal likelihood) by averaging | 1. Draw θᵢ from prior  <br> 2. Compute p(y|θᵢ)  <br> 3. Average those likelihoods to approximate the integral                                                | ✅ Easy to code  <br> ✅ No rejection step                  | ❌ Doesn’t give posterior samples  <br> ❌ Inefficient if prior ≠ posterior |
| **Rejection Sampling**     | Accept/reject samples from proposal based on posterior shape| 1. Propose θ* from g(θ)  <br> 2. Compute score = [p(y|θ*)p(θ*)] / [M g(θ*)]  <br> 3. Accept if u < score (u ~ Uniform[0,1])                                   | ✅ Independent posterior samples  <br> ✅ Conceptually clear | ❌ Many samples may be rejected  <br> ❌ Need to tune M                   |
| **Metropolis–Hastings**    | MCMC using random-walk proposals and acceptance ratio       | 1. Start at θ₀  <br> 2. Propose θ* ~ q(·|θᵢ)  <br> 3. Compute H = ratio of posteriors  <br> 4. Accept θ* with probability min(1, H)                          | ✅ Works for complex posteriors  <br> ✅ No need for normalizing constant | ❌ Samples are correlated  <br> ❌ Requires tuning of proposal scale     |
| **Gibbs Sampling**         | MCMC by cycling through conditional distributions           | 1. Initialize all parameters  <br> 2. Sample each θⱼ from p(θⱼ | rest) one at a time  <br> 3. Repeat N times                                                  | ✅ No rejection step  <br> ✅ Often fast when conditionals are known     | ❌ Needs full conditional distributions  <br> ❌ Can be slow to mix       |
                   |                                                             |

---

## 🔁 Summary of Use-Cases

| **If you want to...**                                        | **Use this algorithm**     |
| ------------------------------------------------------------ | -------------------------- |
| Estimate marginal likelihood or expectation                  | Monte Carlo Integration    |
| Get independent posterior samples (low dim)                  | Rejection Sampling         |
| Sample from complex posterior (general-purpose)              | Metropolis–Hastings (MCMC) |
| Sample from posterior with easy conditionals (multi-variate) | Gibbs Sampling             |

---
