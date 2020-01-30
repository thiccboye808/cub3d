function camera()
{
  if( keyIsPressed )
  {
	if( key == 'w' )
	{
	  camera.v.y += CAMERA_SPEED;
	}
	if( key == 'a' )
	{
	  camera.v.x += CAMERA_SPEED;
	}
	if( key == 's' )
	{
	  camera.v.y -= CAMERA_SPEED;
	}
	if( key == 'd' )
	{
	  camera.v.x -= CAMERA_SPEED;
	}
  }

  camera.v.x *= ( 1 - CAMERA_DRAG );
  camera.v.y *= ( 1 - CAMERA_DRAG );
  camera.x += camera.v.x;
  camera.y += camera.v.y;
}