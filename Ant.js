/************************************************************************************************
This code defines the ants data and behaviour.

In this version:
	- Initial ants placement is set as a random spot in the terrain.
	- Movement is set as a random direction.
	- Probability of picking up or dropping resource units is based on the resource quantity in 
	the ant's current location.

Possible improvements:
	- Ants live in colonies, there should be some representation of that in the initial placement
	- ...or in the movement.
	- Ants should have a life cycle (at least two modes: eat and work).

Author: Abollo Palacios, José Carlos
*************************************************************************************************/

function Ant()
{
	// INITIAL PLACEMENT
	this.antx = floor(random(0,w));
	this.anty = floor(random(0,h));

	// TERRAIN PLACEMENT (CELLS MODE)
	this.anti = floor(this.anty/sze);
	this.antj = floor(this.antx/sze);
	this.pos = this.anti * (w/sze) + this.antj;
	this.prevpos = this.pos; 

	// CARRY STATE 
	this.carry = false;

	// MOVEMENT
	this.move = function()
	{
		var r = random(0,1);
		if(r<0.25){if(this.antx<w-1)this.antx++;}
		else
		{
			if(r<0.5){if(this.antx>0)this.antx--;}
			else
			{
				if(r<0.75){if(this.anty<h-1)this.anty++;}
				else{if(this.anty>0)this.anty--;}
			}
		}
		this.anti = floor(this.anty/sze);
		this.antj = floor(this.antx/sze);
		this.pos = this.anti * (w/sze) + this.antj;
	}

	// PICK UP RESOURCE UNIT
	this.pick = function(prob)
	{
		var r = floor(random(0,100));

		if(r > prob)
		{
			resources[this.pos]--;
			this.carry = true;
		}
	}

	// DROP RESOURCE UNIT
	this.drop = function(prob)
	{
		var r = floor(random(0,100));
		
		if(r < prob)
		{
			resources[this.pos]++;
			this.carry = false;
		}
	}

	// BEHAVIOUR
	this.update = function()
	{
		this.move();

		var res = resources[this.pos];
		var prob = map(res,0,255,0,100);

		if(this.pos != this.prevpos)
		{
			if(this.carry)
			{
				if(res < 255){this.drop(prob);}
			}
			else
			{
				if(res > 0){this.pick(prob);}
			}
		}

		this.prevpos = this.pos;
	}
}