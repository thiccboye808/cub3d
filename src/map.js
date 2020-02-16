// map.js
//
// 3d map of sprites

class Map
{
  constructor( mx = 0, my = 0, mz = 0, namearray = [[[]]] )
  {
    this.max = // max bounds for map
    { 
      x: mx, 
      y: my, 
      z: mz 
    }
    this.array = new Array();
    for( let x = 0; x < this.max.x; x ++ )
    {
      this.array[ x ] = new Array();
      for( let y = 0; y < this.max.y; y ++ )
      {
        this.array[ x ][ y ] = new Array();
        for( let z = 0; z < this.max.z; z ++ )
          this.array[ x ][ y ][ z ] = sprite.sprites[ namearray[ x ][ y ][ z ] ];
      }
    }
  }

  resize( mx, my, mz )
  {
    this.max = // set max bounds for map
    { 
      x: mx, 
      y: my, 
      z: mz 
    }
    this.array = new Array();
    for( let x = 0; x < this.max.x; x ++ )
    {
      this.array[ x ] = new Array();
      for( let y = 0; y < this.max.y; y ++ )
      {
        this.array[ x ][ y ] = new Array();
        for( let z = 0; z < this.max.z; z ++ )
          this.array[ x ][ y ][ z ] = sprite.sprites[ namearray[ x ][ y ][ z ] ];
      }
    }
  }
}

let map = new Map();

// TO BE REPLACED/MOVED SOMEDAY:
function equal( a, b ) 
{
  let ap = Object.getOwnPropertyNames( a );
  let bp = Object.getOwnPropertyNames( b );
  for( let i = 0; i < ap.length; i ++ ) 
	{
    let n = ap[ i ];
    if( a[ n ] !== b[ n ] ) 
      return false;
  }
  return true;
}