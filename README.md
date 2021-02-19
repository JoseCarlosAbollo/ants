This code is inspired by a lecture made by Hanno Hildmann in the University of Cadiz.
It shows some resources spread in a terrain (as quantity of resources rises, the spot gets brighter).
Ants are shown as red tiny squares that moves around the terrain.
Their work is to pile those resources, so where there is less quantity, they pick up a resource unit, and they drop it where there is more of it.

In this version:

	- Initial ants placement is set as a random spot in the terrain.
	- Movement is set as a random direction.
	- Probability of picking up or dropping resource units is based on the resource quantity in 
	the ant's current location.
  
Possible improvements:

	- The main goal is to set a heuristic based on real ant's movement pattern.
	- Ants live in colonies, there should be some representation of that in the initial placement and the resources storage
	- Ants should have a life cycle (at least two modes: eat and work).

Author: Abollo Palacios, José Carlos

Date: 30/04/19
