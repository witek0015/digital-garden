---
Subject: Chemometrics
Date: 2024-44
Tags: [Chemometrics]
---



# Summary:

## Lab notes:

## Lecture notes:
- **Finding outliers** - in order to do this with a smaller data set, we can do a *box plot* or *statistical test*
- **Box plot**. How to make a box plot:
	- Sort data from lowest to highest
	- Identify:
		- First quartile (Q1) is **greater than 25% of the data and less than the other 75%**
		- Median - value corresponding to the middle of the dataset.
		- Third quartile (Q3)  is **larger than 75% of the data, and smaller than the remaining 25%**
	- Calculate **inter quartile range** (IRQ): *IRQ = Q3 - Q1* IQR is a measure of the spread of the data
	- Calculate **upper** and **lower fence**:
		- Upper fence = Q3 + (1,5 * IQR)
		- Lower fence = Q1 - (1,5 * IQR)
	- Outliers will be outside of the fences
- **Statistical tests** - they always need a hypothesis (We have/don't have outliers)
	- Q-Dixon
	- t-student
	- 3 sigmas
	- Grubbs
- **Dealing with missing values:**
	- Acceptance
	- Deletion:
		- **Listwise** - Deleting *all cases with missing values*
		- **Pointwise** - Deleting *only missing data points*
	- Imputation (the process of replacing missing data with substituted values)
# Additional Thoughts:
