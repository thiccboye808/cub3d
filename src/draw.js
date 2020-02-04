const BG_INIT = '#bebeff';

let bg = BG_INIT;

function draw()
{
  camera.movement();
  background( bg );
  if( sprite.loaded )
	  for( let z = map.max.z - 1; z >= 0; z -- )
		for( let y = 0; y < map.max.y; y ++ )
		  for( let x = 0; x < map.max.x; x ++ )
			if( map.array[ x ][ y ][ z ] != "" )
			{
			  image( map.array[ x ][ y ][ z ], 
				camera.x + ( x * CUBE_TILE_XX ) + ( y * CUBE_TILE_YX ), 
				camera.y + ( x * CUBE_TILE_XY ) + ( y * CUBE_TILE_YY ) + ( z * CUBE_TILE_YZ ) );
			}
}