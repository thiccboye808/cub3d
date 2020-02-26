// draw.js
//
// p5 draw function with
// isometric 3d projection
// to 2d coords

'use strict';

function draw()
{
  camera.movement();
  noSmooth();
	scale( camera.zoom.factor * camera.zoom.factor );
  background( map.data.bg );
  if( sprite.loaded )
	  for( let z = map.data.max.z - 1; z >= 0; z -- )
			for( let y = 0; y < map.data.max.y; y ++ )
				for( let x = 0; x < map.data.max.x; x ++ )
				{
					// standard map draw
					if( map.data.array[ x ][ y ][ z ] != undefined && map.data.array[ x ][ y ][ z ] != sprite.sprites.empty )
					{
						image( map.data.array[ x ][ y ][ z ], 
						( camera.p.x + ( x * sprite.tile.xx ) + ( y * sprite.tile.yx ) ), 
						( camera.p.y + ( x * sprite.tile.xy ) + ( y * sprite.tile.yy ) + ( z * sprite.tile.yz ) ),
						sprite.tile.width,
						sprite.tile.height );
					}
					// player sprite draw
					if( player.check( x, y, z ) )
					{
						image( sprite.sprites[ player.sprite ],
							( camera.p.x + ( x * sprite.tile.xx ) + ( y * sprite.tile.yx ) ), 
							( camera.p.y + ( x * sprite.tile.xy ) + ( y * sprite.tile.yy ) + ( z * sprite.tile.yz ) ),
							sprite.tile.width,
							sprite.tile.height );
					}
				}
}