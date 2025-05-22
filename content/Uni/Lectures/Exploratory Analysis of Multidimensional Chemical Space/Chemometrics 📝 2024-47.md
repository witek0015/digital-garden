---
Subject: Chemometrics
Date: 2024-47
Tags: [Chemometrics]
---
# Summary:

## Lab notes:
 - nothing noteworthy happening this week, i just finished programming my hca algorithm, and it works flawlessly, so i will probably have to try to do ward's linkage next week
 - as it turned out, my algorithm was not as flawless as i thought
## Lecture notes:
>[!info]- Definition
>PCA stands for **Principal Component Analysis**, a dimensionality reduction technique in which high dimensional data is reduced to lower dimensional data
- Why are we using PCA?
	 - To uncover relationships between *observations* and *variables*
	 - To reduce the dimensions of the data while losing **as little data as possible**
	 - To solve the noise filtering problem
	 - To eliminate **multicollinearity** (strong correlation between two or more variables)
- Purpose: 
	- Dimensionality reduction
	- Data exploration and evaluation
	- Linear transformation
	- Feature selection
	- Data compression
	- Clustering and classification
- **Principal components** are linear combinations of variables chosen in such way that:
	- PC1 is determined in direction that maximizes the amount of variation in data explained
	- PC2 must be perpendicular to PC1 and show as much variation as possible
	- Next principal components are perpendicular to previous ones
	- Maximum number of PCs is equal to number of initial features
- **Important**
	- PCs are mutually orthogonal
	- Each PC is capturing unique informations
	- PCs are formed as linear combinations of the original variables in order of amount of variability explained
	- Most significant part of the total variance in original data can be compressed to few PCs
- Steps to perform PCA:
	- Standardize the data
	- Covariance matrix - shows how variables are related to each other
	- Calculating **eigenvalues** and **eigenvectors**
		- Eigenvalues represent the amount of variance in each eigenvector - it shows how much variance each PC explains
		- Number of eigenvalues is equal to number of variables
		- Eigenvectors represent the directions of PCs and are **coefficients of linear combination of variables**
	- Choose number of PCs
		- Assume how much variance we want to have explained:
		- **Kaiser Criterion** - choose PCs with eigenvalues exceeding 1
		- **Scree plot** - pace of decrease of eigenvalues - we choose PCs until the plot of PCs(eigenvalue) starts getting flat
	- Calculating **loadings**
		- Loadings reflect influence of a given feature on PC
		- Loadings = sqrt(eigenvalue) * eigenvector for given variable
		- Malinowski's rule - we should take under consideration only variables with normalized loadings which absolute value exceeds 0.7
	- **Scores** - projecting standardized matrix on eighenspace
	- Plot **maplines** - scores by PCs and loadings by PCs 

# Additional Thoughts:
