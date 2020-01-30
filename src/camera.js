const CAMERA_SPEED = 1;
const CAMERA_DRAG = .1;

let camera = 
{ 
	v: { x: 0, y: 0 }, 
	x: 0, 
	y: 0,
  movement: () =>
	{
		if( keys[ KEYCODE_W ] )
		{
			camera.v.y += CAMERA_SPEED;
		}
		if( keys[ KEYCODE_A ] )
		{
			camera.v.x += CAMERA_SPEED;
		}
		if( keys[ KEYCODE_S ] )
		{
			camera.v.y -= CAMERA_SPEED;
		}
		if( keys[ KEYCODE_D ] )
		{
			camera.v.x -= CAMERA_SPEED;
		}
		
		camera.v.x *= ( 1 - CAMERA_DRAG );
		camera.v.y *= ( 1 - CAMERA_DRAG );
		camera.x += camera.v.x;
		camera.y += camera.v.y;
	}
}