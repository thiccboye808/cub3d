// camera.js
//
// camera object with 

const CAMERA_ZOOM_DEFAULT = 1;
			CAMERA_SPEED_DEFAULT = 1,
      CAMERA_DRAG_DEFAULT = .1;

let camera = 
{ 
  v: { x: 0, y: 0 }, // velocity in x and y
  p: { x: 0, y: 0 }, // position in x and y
	zoom: CAMERA_ZOOM_DEFAULT, // camera zoom
	speed: CAMERA_SPEED_DEFAULT, // camera speed
	drag: CAMERA_DRAG_DEFAULT, // camera drag
  movement: () => // movement frame handling
  {
  	if( input.keys[ KEYCODE_W ] )
   	  camera.v.y += camera.speed;
		if( input.keys[ KEYCODE_A ] )
			camera.v.x += camera.speed;
		if( input.keys[ KEYCODE_S ] )
			camera.v.y -= camera.speed;
		if( input.keys[ KEYCODE_D ] )
			camera.v.x -= camera.speed;
			
		camera.v.x *= ( 1 - camera.drag );
		camera.v.y *= ( 1 - camera.drag );
		camera.p.x += camera.v.x;
    camera.p.y += camera.v.y;
  }
}