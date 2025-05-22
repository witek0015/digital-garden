---
Subject: MolecularDescriptors
Date: 2025-04
Tags: [MolecularDescriptors]
---

# Summary:

## Lab notes:

## Lecture notes:
- Start with screening of the data to see if there are 
- Standard operation procedure - we need to always use the same unit for data and measured in the same standard.
- Split of coumpounds for modelling
	- Calibrations set - for model construction for model construction and internal validation 70-75% of the data
	- Test set - external validation - 25-30% of the data
- Split methods:
	- *simple random*- we take several random datapoints and make test set with them
	- *z to 1* - we choose every n-th compound to the test set
	- Kennard-Stone 
	- Duplex
- **Fingerprint descriptors**
	- they utilize binary digits to encode a molecule structure, indiating the presence or absence of specific substructures of the molecule
	- **Advantages**:
		- rapid calculation
		- no need for pre treaatement and molecule optimization
		- provided binary data for ml
	- **Limitations**:
		- lack of interpretation
- Software to calculate molecular descriptors:
	- PaDEL
	- DRAGON
	- alvaDesc
- **Selecting variables to model:**
	- **Mechanistic approach** - we know the mechanism, and we know whcih structural featiures influesnce affected quality, and we choose descriptors arbitralily
	- **Statistical approach** - we don't know mechanism, we do not know which structural features affect the modelled quantitiy, and we use algorithms that allow us to select the most optimal combination of descriptors based on a statistical measure of the quality of the obtained models.
- **Modelling data methods**:
	- **Quantitative methods**:
		- *linear regression* (LR) 
		- *multiple linear regression* (MLR) 
		- *principal components regression* (PCR) 
		- *partial least squares* (PLS)
	- **Qualitative data methods**:
		- Artifical intelligence.
- **Another way to divide desriptors:**
	- **bulkiness-related**:
		- Mol. weight,
		- van der Waals volume, 
		- Surface area
	- **geometry-related:**
		- length-to-breadth ratio
		- max projection radius
- 