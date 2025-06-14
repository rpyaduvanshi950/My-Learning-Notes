Great! Below is a detailed **explanation** of each question to help you build a strong conceptual understanding of Bayesian model building from your document and walkthrough.

---

### 📌 **GENERAL CONCEPTUAL QUESTIONS**

---

#### 1. **What is Bayes' Theorem? How is it used in statistical inference?**

**Bayes' Theorem** provides a mathematical rule for updating probabilities based on new evidence. In statistical inference, it allows us to revise our belief about a parameter after observing data.

$$
\text{Posterior} = \frac{\text{Likelihood} \times \text{Prior}}{\text{Evidence}}
$$

In simpler terms, it tells us:

> Given what we believed before (prior), and what we observed (likelihood), how should we update our belief (posterior)?

---

#### 2. **Explain the terms: prior, likelihood, and posterior.**

* **Prior (p(μ))**: What you believe about μ before seeing any data.
* **Likelihood (p(y | μ))**: The probability of seeing the observed data y given a specific μ.
* **Posterior (p(μ | y))**: What you believe about μ *after* seeing the data y.

---

#### 3. **What is a prior distribution? Why is it important in Bayesian analysis?**

A **prior distribution** reflects our initial beliefs about the parameter(s) before observing any data. It's crucial in Bayesian analysis because:

* It allows incorporation of domain knowledge or past data.
* It influences the posterior, especially when data is limited.

---

#### 4. **What role does the likelihood function play?**

The **likelihood** measures how well the parameter explains the observed data. It peaks at the value of the parameter that makes the data most probable. It’s central to both Bayesian and frequentist inference.

---

#### 5. **What is the posterior distribution? How is it derived?**

The **posterior distribution** combines the prior and the likelihood:

$$
p(μ | y) ∝ p(y | μ) \cdot p(μ)
$$

It tells us how likely different values of μ are, given the observed data y.

---

#### 6. **Why use unnormalized posterior?**

Computing the denominator (evidence) in Bayes’ theorem can be hard. Since we often care only about relative probabilities, we use the **unnormalized posterior** which is proportional to the true posterior:

$$
p'(μ | y) = p(y | μ) \cdot p(μ)
$$

---

#### 7. **What are the assumptions behind the generative process?**

You assume the data comes from a known distribution (e.g., Normal). For example:

* Data $y_i \sim \mathcal{N}(\mu, \sigma)$
* $\mu \sim \mathcal{N}(350, 50)$
* $\sigma = 10$ (fixed)

This defines a **generative model**: how data is believed to be generated.

---

### 📌 **MODEL EVALUATION AND CHECKS**

---

#### 8. **What are prior predictive checks?**

Before fitting the model, you simulate data using the priors to see if they generate **realistic** outcomes. If the simulated data looks absurd, your prior is likely inappropriate.

---

#### 9. **What are posterior predictive checks?**

After fitting the model, you simulate data using the **posterior** parameters. If these match well with observed data, your model is likely a good fit. Otherwise, you may need a better model.

---

#### 10. **Why is posterior normal when prior and likelihood are normal?**

This is a property of the **conjugate prior**. When:

* The likelihood is Normal
* The prior is Normal
  Then, the posterior is also Normal. This allows analytical solutions.

---

### 📌 **MODELING WITH `brms` AND STAN**

---

#### 11. **What are the steps in Bayesian modeling workflow?**

1. Define the model (likelihood + priors)
2. Simulate prior predictive checks
3. Collect and prepare data
4. Fit the model using MCMC (e.g., with `brms`)
5. Summarize and visualize the posterior
6. Simulate posterior predictive checks

---

#### 12. **How does `brms` simplify modeling?**

`brms` lets you write models in R's formula syntax (like `lm`) and uses **Stan** for inference behind the scenes. It handles sampling, diagnostics, and plots for you.

---

#### 13. **What do the posterior mean and credible interval represent?**

* **Posterior mean**: Expected value of the parameter given data.
* **95% credible interval**: The interval in which the parameter lies with 95% probability, *given the data and prior* (unlike frequentist confidence intervals).

---

#### 14. **Why use a constant prior for sigma?**

Setting `sigma = 10` simplifies the model to focus on estimating only μ. A constant prior fixes the value rather than estimating it from data.

---

#### 15. **What does `y ~ 1` mean in the model?**

It’s shorthand for a **model with an intercept only**—i.e., you’re modeling the mean of y without any predictors.

---

Would you like these turned into a printable study sheet or want follow-up questions with explanations?
