const CAMERA_SPEED = 1;
const CAMERA_DRAG = .1;

let camera = 
{ 
  v: { x: 0, y: 0 }, // velocity in x and y
  p: { x: 0, y: 0 }, // position in x and y
  movement: () => // movement frame handling
  {
  	if( input.keys[ KEYCODE_W ] )
   	  camera.v.y += CAMERA_SPEED;
	if( input.keys[ KEYCODE_A ] )
	  camera.v.x += CAMERA_SPEED;
	if( input.keys[ KEYCODE_S ] )
	  camera.v.y -= CAMERA_SPEED;
	if( input.keys[ KEYCODE_D ] )
	  camera.v.x -= CAMERA_SPEED;
		
	  camera.v.x *= ( 1 - CAMERA_DRAG );
	  camera.v.y *= ( 1 - CAMERA_DRAG );
	  camera.p.x += camera.v.x;
  	  camera.p.y += camera.v.y;
  }
}