// camera.js
//
// camera object with 

const CAMERA_ZOOM_FACTOR_DEFAULT = 1,
			CAMERA_ZOOM_DRAG_DEFAULT = .0001,
			CAMERA_ZOOM_STEP_DEFAULT = .05,
			CAMERA_ZOOM_MAX_DEFAULT = 100,
			CAMERA_ZOOM_MIN_DEFAULT = 1,
	  	CAMERA_SPEED_DEFAULT = 1,
			CAMERA_DRAG_DEFAULT = .1;

class Camera
{ 
	constructor( input )
	{
		this.v = { x: 0, y: 0 }; // velocity in x and y
		this.p = { x: 0, y: 0 }; // position in x and y

		this.zoom = // zoom struct
		{ 
			factor: CAMERA_ZOOM_FACTOR_DEFAULT, // factor value of camera zoom
			drag: CAMERA_ZOOM_DRAG_DEFAULT, // zoom velocity drag
			step: CAMERA_ZOOM_STEP_DEFAULT, // zoom step size
			max: CAMERA_ZOOM_MAX_DEFAULT, // zoom max
			min: CAMERA_ZOOM_MIN_DEFAULT, // zoom min
			ease: ( t ) => { return t < .5 ? 2 * t * t : -1 + ( 4 - 2 * t ) * t; } // zoom ease function
		}
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
			
		this.zoom.factor += this.zoom.step * this.input.mouse.wheel.get();

		this.zoom.factor = Math.min( Math.max( this.zoom.factor, this.zoom.min ), this.zoom.max );
	}
};

let camera = new Camera( input );
