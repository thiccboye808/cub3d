const BG_INIT = '#bebeff';

let bg = BG_INIT;

function draw()
{
	camera.movement();
	noSmooth();
	scale( camera.zoom );
  background( bg );
  if( sprite.loaded )
	  for( let z = map.max.z - 1; z >= 0; z -- )
		for( let y = 0; y < map.max.y; y ++ )
		  for( let x = 0; x < map.max.x; x ++ )
			if( map.array[ x ][ y ][ z ] != undefined && map.array[ x ][ y ][ z ] != sprite.sprites.empty )
			{
			  image( map.array[ x ][ y ][ z ], 
				( camera.p.x + ( x * sprite.tile.xx ) + ( y * sprite.tile.yx ) ), 
				( camera.p.y + ( x * sprite.tile.xy ) + ( y * sprite.tile.yy ) + ( z * sprite.tile.yz ) ),
				sprite.tile.width,
				sprite.tile.height );
			}
}