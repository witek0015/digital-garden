---
Subject: Chemometrics
Date: "2024-45"
tags:
  - Chemometrics
---

# Summary:
## Lab notes:
- HCA: make an matrix in numpy with side len(x) 
- euclidina, city block and chabyshev distances
- on a distance matrix, find lowest values (in python use triangle function)
- we need to store clusters as data
- single linkage and complete linkage, wart method minimalisation of vairance inside the cluster
- make a smaller array with new cluster and decide on the shorter distance
- try to drop column with lower index
- before dropping create two new vectors - new cluster which is a list NC = smaller distance x-xy, smaller dist y-xy, smaller dist xy-z
## Lecture notes
- HCA is **Hierarchical Cluster Analysis** where we group data into clusters. It is an **unsupervised machine learning** algorithm
- HCA is used to find similarities in objects by comparing the values of parameters of these objects as a distance between them and grouping them into clusters.
- Distance metrics used to calculate distance:
	- *Euclidean* - **Shortest path** between two points, calculated with *Pythagorean theorem*
	- *Manhattan (or City Block)* - **Sum of all components** of the path
	- *Chebyshev* - Length of the **longest component** of the path 
- **Dendrogram** - visual representation of distances between points. Synonym: *tree diagram*
- **Snett's criterion** - number of clusters is equal roughly to the number of lines intersected by the line at the height of 2/3 of max distance
- **Linkage methods**:
	- Closest neighbour (single linkage) - used to show similarities
	- Furthest neighbour (complete linkage) - used to show disimilarities
	- Central (average) linkage
	- Ward's linkage - minimizes variance
- **Choosing a representative for each cluster**:
	- single element clusters - the only element
	- larger-than-two-elements clusters - calculate the sum of distances from all elements for each element. The representative has the smallest total distance
	- two-element clusters - sum of distances to each other representative from other clusters. The object with largest total distance is selected. We do the representatives of two element clusters at the very end (need for other representatives)
# Additional Thoughts:
- seems easy, just a few logical tips