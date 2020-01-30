function draw()
{
  keys();
  background( bg );
  for( let z = 20; z > 0; z -- )
  {
    for( let y = 0; y < 20; y ++ )
    {
      for( let x = 0; x < 20; x ++ )
      {
        if (x == 0 || y == 0 || z == 20 )
        image( cube, 
          ( x * CUBE_TILE_XX ) + ( y * CUBE_TILE_YX ) - camera.x, 
          ( x * CUBE_TILE_XY ) + ( y * CUBE_TILE_YY ) + ( z * CUBE_TILE_YZ ) - camera.y );
      }
    }
    }
}