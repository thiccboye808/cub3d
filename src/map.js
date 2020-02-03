let map =
{
	max: { x: 25, y: 25, z: 25 }, // max bounds for map
	cubes: 0, // 3d array of cubes in map (initialized by an init function)
	check: ( cube ) => // checks if cube exists in map
	{
    return map.cubes[ cube.x ][ cube.y ][ cube.z ];
  },
  empty: () => // initializes map.cubes to an empty array
  {
    map.cubes = new Array();
    for( let x = 0; x < map.max.x; x++ )
    {
      map.cubes[ x ] = new Array();
      for( let y = 0; y < map.max.y; y++ )
      {
        map.cubes[ x ][ y ] = new Array();
        for( let z = 0; z < map.max.z; z++ )
        {
          map.cubes[ x ][ y ][ z ] = "";
        }
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