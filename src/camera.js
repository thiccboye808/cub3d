// camera.js
//
// camera object with 

const CAMERA_ZOOM_DEFAULT = 1,
	  	CAMERA_SPEED_DEFAULT = 1,
			CAMERA_DRAG_DEFAULT = .1;

class Camera
{ 
	constructor( input )
	{
		this.v = { x: 0, y: 0 }; // velocity in x and y
		this.p = { x: 0, y: 0 }; // position in x and y
		this.zoom = CAMERA_ZOOM_DEFAULT; // camera zoom
		this.speed = CAMERA_SPEED_DEFAULT; // camera speed
		this.drag = CAMERA_DRAG_DEFAULT; // camera drag
		this.input = input; // input handler object
	}

	movement() // movement frame handling
	{
		if( this.input.keys[ INPUT_KEY_W ] )
			this.v.y += this.speed;
		if( this.input.keys[ INPUT_KEY_A ] )
			this.v.x += this.speed;
		if( this.input.keys[ INPUT_KEY_S ] )
			this.v.y -= this.speed;
		if( this.input.keys[ INPUT_KEY_D ] )
			this.v.x -= this.speed;
				
		this.v.x *= ( 1 - this.drag );
		this.v.y *= ( 1 - this.drag );
		this.p.x += this.v.x;
		this.p.y += this.v.y;
			
		this.zoom += this.input.mouse.wheel.get();
	}
};

let camera = new Camera( input );
