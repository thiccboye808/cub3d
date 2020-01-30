const BG_INIT = '#bebeff';

let bg = BG_INIT;

function draw()
{
  camera.movement();
  background( bg );
  for( let z = 5; z > 0; z -- )
  {
    for( let y = 0; y < 5; y ++ )
    {
      for( let x = 0; x < 5; x ++ )
      {
        if( map.check( { x: x, y: y, z: z } ) )
				{
          image( cubespr, 
            camera.x + ( x * CUBE_TILE_XX ) + ( y * CUBE_TILE_YX ), 
            camera.y + ( x * CUBE_TILE_XY ) + ( y * CUBE_TILE_YY ) + ( z * CUBE_TILE_YZ ) );
        }
      }
    }
  }
}