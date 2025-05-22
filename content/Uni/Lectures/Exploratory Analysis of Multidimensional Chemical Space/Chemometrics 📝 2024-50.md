---
Subject: Chemometrics
Date: 2024-50
Tags: [Chemometrics]
---

# Summary:

## Lab notes:
- PCA requires some matrices operations

## Lecture notes:
- **k** is chosen externally by us prior to analysis. It requires some sort of knowledge of the dataset.
- **Algorithm of k-means clustering**:
	1. Decide on the value of k
	2. Initialize cluster centroid (randomly pick a point for each cluster(**manually**))
	3. Calculate the **euclidean** distance from each point to the initial clusters
	4. Find a new centroid:
		- make a hypothetical centroid by averaging the values of parameters in each cluster
		- choose the closest point to the centroid
	5. Repeat points **2. - 4.** until the centroids do not change anymore
- What is k-means? 
	- Clustering method based on euclidean distance, grouping data into number of predefined clusters. Inside clusters objects are as similar as possible, while outside of clusters objects are as dissimilar as possible
- How to choose the value of k?
	- elbow method (scree plot)
	- silhouette method

# Additional Thoughts:
