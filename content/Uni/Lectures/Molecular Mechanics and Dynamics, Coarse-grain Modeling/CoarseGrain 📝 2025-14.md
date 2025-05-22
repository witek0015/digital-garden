---
Subject: CoarseGrain
Date: 2025-04
Tags: [CoarseGrain]
---

# Summary:

## Lab notes:

## Lecture notes:
### Energy minima
- All molecules want to lose their potential energy
$$
f(x)=c-bx+\frac{1}{2}Ax^2 
$$
$$
\frac{df}{dx}=-b+Ax
$$
- for multiple dimensions:
$$
\nabla f = -b+Ax
$$
where A is a Hessian matrix
- gets different for non square funcions
	- Taylor expansion - function must be derivable and derivable to degree of approximation
		- ex f(x) = |x|
- Gradient based methods
$$
\begin{aligned}
X_{i+1}=X_{i}+\lambda_{i}S_{i}\\
where:\\
\lambda - step\ size\\
S_{i} - direction\ search
\end{aligned}
$$

- Deepest descent tries to make deepest descent into given direction, to show the route that has the highest ratio of x/x0
	- Real case
		- Over 1000 centres of interaction
		- No analytical expression for Hessian
		- Computing hessian takes n^2 operations
- Conjugated gradient - Si depends on the current and previous gradient
	- Start as in steepest descent
- BFGS (Broydan, Fletcher, Goldfarb, Shanoo) - quasiNewtonian methods - they try to take out info from hessian without actually ocmputing it
	- trying to take a step, but update it iteratively, not at every step, and using inverse of it
- WHAT THE FUCK IS HESSIAN
	- second derivative 
	- gives information of how the function is curved (changes in gradient) - more curved function means arms closer
- cheating hessian
	- getting gradient at current and previous step
$$
B_{i+1}(x_{i+1}-x_{i})=\nabla f(x_{i+1})-\nabla f(x_{i})
$$
-
	- we can work in invert space so, H = B^(-1)
	- H(i+1) must be close to H(i)
	- H is symmetric
- 
$$
 s_{i}=H_{i+1}y_{y}
$$
-
	- each method starts the same - with the steepest descent equation
- L-BFGS - if the memory is too consuming (since the Hessian is 3N x 3N), keep only s(i) and y(i) in particular last n-steps
- Hybrid eigenvector following- potential energy vs discrete path sampling