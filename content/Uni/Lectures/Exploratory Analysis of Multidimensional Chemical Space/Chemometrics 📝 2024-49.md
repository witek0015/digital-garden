---
Subject: Chemometrics
Date: 2024-49
Tags: [Chemometrics]
---
# Summary:

## Lab notes:

## Lecture notes:
- we can decompose correlation matrix instead of the covariance matrix, because:
	- $$ r(x_{{k}}, x_{{1}}) = \frac{cov(x_{{k}}, x_{{1}})}{\sqrt{ var(x_{{k}})}.\sqrt{ var(x_{{1}})}} $$
	when data is autoscaled, variances equal to one, and thus: 
	- $$  r(x_{{k}}, x_{{1}}) = cov(x_{{k}}, x_{{1}}) $$
- **k-means clustering** is dividing set of datainto groups of similar points and features (like in HCA)
	 - Elements in one cluster are similar
	 - Elements in different clusters are dissimilar
- **The difference** between HCA and k-means is taht with k-means we pick arbitrary value of k, which will be the final number of clusters. We still use euclidean distance and other tricks from HCA
- **Clustering vs. Classification**:
	- Clustering is unsupervised - we group what we see (creature with tail)
	- Classification is supervised - we use knowledge we have to divide items into classes (this is a cat)
# Additional Thoughts:
