function equal( a, b ) 
{
  let ap = Object.getOwnPropertyNames( a );
  let bp = Object.getOwnPropertyNames( b );
  for( let i = 0; i < ap.length; i ++ ) 
	{
    let n = ap[ i ];
    if( a[ n ] !== b[ n ] ) 
	  {
      return false;
    }
  }
  return true;
}


let map =
{
	cubes:
	[
		{ x: 3, y: 4, z: 3 },
		{ x: 3, y: 3, z: 3 },
		{ x: 3, y: 2, z: 3 },
		{ x: 3, y: 1, z: 3 }
	],
	check: ( cube ) =>
	{
    let _cube = Object.getOwnPropertyNames( cube );

		for( let i = 0; i < map.cubes.length; i ++ )
		{
			if( equal( cube, map.cubes[ i ] ) )
				return true;
		}
    return false;
	}
}