/************************************************************************************************
This code shows some resources spread in a terrain (whiter the spot, more quantity of resources).
Ants are shown as red tiny squares that moves around the terrain.
Their work is to pile those resources, so where there is less quantity, they pick up a resource
unit, and they drop it where there is more of it.

Author: Abollo Palacios, José Carlos
*************************************************************************************************/

var antsze = 5;			// Ant sze
var sze = 10*antsze;	// Resource sze

var w = 10*sze;			// Terrain width
var h = w;				// Terrain height

var nants = 1000;		// Number of ants
var ants = [];			// Array of ants
var resources = [];		// Array of resources in terrain

function setup()
{
	createCanvas(w,h);

	// PLACING ANTS
	for(var i=0; i<nants; ++i){ants[i] = new Ant();}

	// PLACING RESOURCES
	for(var i=0; i<(h/sze)*(w/sze); ++i){resources[i] = floor(random(0, 100));}
}

function draw()
{
	background(0);

	// DRAWING RESOURCES
	for(var i=0; i<h/sze; ++i)
	{
		for(var j=0; j<w/sze; ++j)
		{
			ellipseMode(CORNER);
			strokeWeight(0);
			var m = resources[i*w/sze+j];
			fill(m);
			ellipse(j*sze,i*sze,sze);
		}
	}
	
	// DRAWING ANTS
	for(var i=0; i<nants; ++i)
	{
		fill(200, 10, 10);
		rect(ants[i].antx,ants[i].anty,antsze,antsze);
		ants[i].update();
	}
}