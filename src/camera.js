// camera.js
//
// camera object with 

const CAMERA_ZOOM_DEFAULT = 1;
			CAMERA_SPEED_DEFAULT = 1,
      CAMERA_DRAG_DEFAULT = .1;

function Camera()
{ 
  this.v = { x: 0, y: 0 }; // velocity in x and y
  this.p = { x: 0, y: 0 }; // position in x and y
	this.zoom = CAMERA_ZOOM_DEFAULT, // camera zoom
	this.speed = CAMERA_SPEED_DEFAULT, // camera speed
	this.drag = CAMERA_DRAG_DEFAULT, // camera drag
  this.movement = () => // movement frame handling
  {
  	if( input.keys[ KEYCODE_W ] )
   	  this.v.y += this.speed;
		if( input.keys[ KEYCODE_A ] )
			this.v.x += this.speed;
		if( input.keys[ KEYCODE_S ] )
			this.v.y -= this.speed;
		if( input.keys[ KEYCODE_D ] )
			this.v.x -= this.speed;
			
		this.v.x *= ( 1 - this.drag );
		this.v.y *= ( 1 - this.drag );
		this.p.x += this.v.x;
		this.p.y += this.v.y;
		
		this.zoom += input.mouse.wheel.get();
  }
};

let camera = new Camera();
