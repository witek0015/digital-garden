---
Subject: MolecularDescriptors
Date: 2025-03
Tags: [MolecularDescriptors]
---

## Lecture notes:
- QSAR - quantitative modellling of the relationship between structure and activity (biological)
- Why do we use QSAR?
	- **Reduction of the costs** with market introduction of new products
	- **Reduction of the time** required to conduct experimental studies
	- **Reduction of the necessity to perform experimental studies** using laboratory animals
	- **Reduction of the amount of waste** generated as a result of the studies
- QSAR/QSPR steps:
	model calibration -> model validation -> model application
- The **complexity** of the model should depend on the **specifics of the chosen problem**
- No model calibrated on experimental data, can be of **better quality than the data** itself
>[!warning] Garbage in -> garbage out
- Data for modelling:
	- scientific publications
	- reports
	- databases (*ECHA, ILThermo: Ionic Liquids Database, eNanoMapper, TOXDAT, QSARDB*)
- Descriptors can be divided as:
	- **Experimental descriptors**: experimentally determined physiochemical properties
	- **Theoretical descriptors**: calculated on the basis of the molecular formula, structural formula etc. (*mordred, RDKit*)
- Problem with experimental data is that there is **missing data** for new compounds - so this is lackluster for predicting properties for new compounds, especially for nanocompunds
>[!tip] Zeta potential
>The charge on the surface of the molecule
- Dimensions:
	- 0 - **stoichometry**: mol. weight, number of halogens
	- 1 - **properties**: water solubility, number of hydroxyl groups
	- 2 - **topology**: constallance indexes
	- 3 - **quantum-mechanical**: dipole moment, polarizability, HOMO - LUMO gap
	- 4 - **quantum-mechanical**: same as for 3D, but calculated for *individual conformations*
- 
# Additional Thoughts:
>[!warning] Exam questions
> - Dimensions of descriptors (1-4D)