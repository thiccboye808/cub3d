function draw()
{
  camera();
  background( bg );
  for( let z = 20; z > 0; z -- )
  {
    for( let y = 0; y < 20; y ++ )
    {
      for( let x = 0; x < 20; x ++ )
      {
        // imma just use a shitty pattern but it looks cool o.O
        if( x == 15 || x == 10 || x == 5 || y == 15 || y == 10 || y == 5 || z == 15 || z == 10 || z == 5 )
        {
          image( cube, 
            camera.x + ( x * CUBE_TILE_XX ) + ( y * CUBE_TILE_YX ), 
            camera.y + ( x * CUBE_TILE_XY ) + ( y * CUBE_TILE_YY ) + ( z * CUBE_TILE_YZ ) );
        }
      }
    }
  }
}