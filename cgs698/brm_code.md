## 📘 **Bayesian Inference Using `brms` in R – Fully Commented Code**

```r
# Load required libraries
library(brms)        # For Bayesian modeling
library(tidyverse)   # For data manipulation and visualization (like ggplot2)
```

---

### 🧮 STEP 1: Prepare the dataset

```r
# Let's say you already have a vector of 50 observed reading times called 'y'
# Create a data frame for modeling
dat <- data.frame(
  trial = 1:length(y),  # Trial number: 1 to 50
  y = y                 # The observed data
)
```

---

### 📐 STEP 2: Define and fit the Bayesian model

```r
# Fit a Bayesian model using brms
m1 <- brm(
  y ~ 1,                  # Model formula: y is modeled as a constant mean (intercept only)
  data = dat,             # The dataset you created above
  family = gaussian(),    # Assuming normal distribution for y
  prior = c(              # Specify the priors
    prior(normal(350, 50), class = Intercept),  # Prior: µ ~ Normal(350, 50)
    prior(constant(10), class = sigma)          # Fix sigma = 10 (not estimated)
  )
)
```

---

### 📉 STEP 3: Plot posterior estimates and convergence

```r
# Plot the posterior distribution and traceplots for the intercept (µ)
plot(m1, pars = "b_Intercept")  # Visualize posterior distribution and sampling chains
```

---

### 📥 STEP 4: Extract posterior samples

```r
# Extract raw posterior samples (useful for analysis or manual predictions)
post.samples <- posterior_samples(m1)

# Look at the first few rows of the samples
head(post.samples)
# Columns include:
# - b_Intercept: samples of µ
# - sigma: fixed value of 10
# - lprior: log prior
# - lp__: log posterior (can be ignored for now)
```

---

### 🔍 STEP 5: Posterior Predictive Check

```r
# Visually compare real data to predicted data
# This will simulate 100 datasets using µ ~ posterior and y ~ Normal(µ, 10)
pp_check(m1, ndraws = 100)
# If the gray simulated distributions align well with your real data: model is good
```

---

### 📊 Optional: Plot posterior histogram manually

```r
# Plot the histogram of posterior samples of µ (just like posterior distribution)
hist(post.samples$b_Intercept,
     main = "Posterior of µ", xlab = "µ", col = "skyblue", border = "white")
```

---

### 🔢 Optional: Compute summary statistics

```r
mean(post.samples$b_Intercept)              # Posterior mean of µ
quantile(post.samples$b_Intercept, c(0.025, 0.975))  # 95% credible interval
```

---

## ✅ Output:

* A trained Bayesian model
* Posterior estimates of µ (with uncertainty)
* Posterior predictive simulations
* Plots to check if the model explains the real data

---
