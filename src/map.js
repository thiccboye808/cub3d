const MAP_MAX_X_DEFAULT = 25,
      MAP_MAX_Y_DEFAULT = 25,
      MAP_MAX_Z_DEFAULT = 25;

let map =
{
  max: // max bounds for map
  { 
    x: MAP_MAX_X_DEFAULT, 
    y: MAP_MAX_Y_DEFAULT, 
    z: MAP_MAX_Z_DEFAULT 
  }, 
	array: 0, // 3d array of sprites in map (initialized by an init function)
	check: ( cube ) => // checks if cube exists in map
	{
    return map.array[ cube.x ][ cube.y ][ cube.z ];
  },
  empty: () => // initializes map.array to an empty array
  {
    map.array = new Array();
    for( let x = 0; x < map.max.x; x ++ )
    {
      map.array[ x ] = new Array();
      for( let y = 0; y < map.max.y; y ++ )
      {
        map.array[ x ][ y ] = new Array();
        for( let z = 0; z < map.max.z; z ++ )
          map.array[ x ][ y ][ z ] = sprite.sprites.empty;
      }
    }
  }
}

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