// player.js
//
// special player sprite 
// wrapper class \w
// movement and coord
// check functions

class Player
{
  constructor( sprite, x, y, z )
  {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  check( tile, x, y, z )
  {
    if( this.x >= x && this.x < x + tile.width && 
        this.y >= y && this.y < y + tile.height && 
        this.z >= z && this.z < z + tile.height )
    return true;
  }
}
