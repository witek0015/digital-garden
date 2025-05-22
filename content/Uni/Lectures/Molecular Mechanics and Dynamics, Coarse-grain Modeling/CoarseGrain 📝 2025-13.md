---
Subject: CoarseGrain
Date: 2025-03
Tags: [CoarseGrain]
---
# Summary:

## Lab notes:

## Lecture notes:
- Methods of coarse-graining:
	- all-atom
	- Rosetta CEN
	- CABS
	- UNRES
	- SICHO
	- Levitt-Warshel - C-alpha atom and sidechain
	- **Martini Forcefield** - used to simulating lipids; mapping four heavy atoms to one interaction site
- **Martini 2** - only 20 type of beads - easy to transfer, very easy to calculate, not very accurate
- They made an upgrade - **Martini 3**, which has 800 types of beads
- Dielectric constant of water is 80
- **Martini 3** is very good for DNA modelling 
- CABS Model
	- only alpha and beta carbons (apart from Gly and Ala) - *no side chains*
	- if two species interact, the probablility of reaction is high up close, but gets smaller with distance
	- if two molecules get further apart, but are close enough for water to not fit in, cavity is made and the molecules are pushed back together
	- CABS success lies in mapping movement of molecules on a grid:
		- move of a single atom allows rotation of other atoms - deletes the calculations for total energy
		- allowing large portion of chain to wobble affects not the thole chain but an angle of opposite side of the loop
	- fluctuations
- Unicorn model - UNRES, NARES-2P, SUGRES
- Gay Berne potential - energy of interaction vs distance for different relative rotations of two molecules - interaction more likely to happen when molecules are 'face to face', rather than 'side to  side'.
# Additional Thoughts:
