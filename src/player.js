// player.js
//
// special player sprite 
// wrapper class \w
// movement and special
// drawing function

class Player
{
  constructor( sprite, x, y, z )
  {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  check( x, y, z )
  {
    return ( x == this.x && y == this.y && z == this.z );
  }

  movement() // movement frame handling
	{
		if( this.input.keys[ INPUT_KEY_W ] )
			this.y ++;
		if( this.input.keys[ INPUT_KEY_A ] )
      this.x ++;
		if( this.input.keys[ INPUT_KEY_S ] )
			this.y --;
		if( this.input.keys[ INPUT_KEY_D ] )
			this.x --;
			
		this.zoom.factor += this.zoom.step * this.input.mouse.wheel.get();

		this.zoom.factor = Math.min( Math.max( this.zoom.factor, this.zoom.min ), this.zoom.max );
	}
}