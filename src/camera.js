// camera.js
//
// camera object with movement functions
// (movement functions to be moved in the future)

'use strict';

const CAMERA_VELOCITY_DEFAULT = { x: 0, y: 0 },
			CAMERA_POSITION_DEFAULT = { x: 0, y: 0 },
			CAMERA_ZOOM_FACTOR_DEFAULT = 1,
			CAMERA_ZOOM_DRAG_DEFAULT = .0001,
			CAMERA_ZOOM_STEP_DEFAULT = .05,
			CAMERA_ZOOM_MIN_DEFAULT = 1,
			CAMERA_ZOOM_MAX_DEFAULT = 100,
	  	CAMERA_SPEED_DEFAULT = 1,
			CAMERA_DRAG_DEFAULT = .1;

class Camera
{ 
	constructor( input, 
		v = CAMERA_VELOCITY_DEFAULT, 
		p = CAMERA_POSITION_DEFAULT,
		zf = CAMERA_ZOOM_FACTOR_DEFAULT,
	 	zd = CAMERA_ZOOM_DRAG_DEFAULT,
	 	zs = CAMERA_ZOOM_STEP_DEFAULT,
		zmin = CAMERA_ZOOM_MIN_DEFAULT,
		zmax = CAMERA_ZOOM_MAX_DEFAULT,
		s = CAMERA_SPEED_DEFAULT,
		d = CAMERA_DRAG_DEFAULT  )
	{
		this.v = { x: 0, y: 0 }; // velocity in x and y
		this.p = { x: 0, y: 0 }; // position in x and y

		this.zoom = // zoom struct
		{ 
			factor: zf, // factor value of camera zoom
			drag: zd, // zoom velocity drag
			step: zs, // zoom step size
			min: zmin, // zoom min
			max: zmax // zoom max
		}
		this.speed = s; // camera speed
		this.drag = d; // camera drag
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

let camera = null; // null until Camera constructor is to be invoked in setup() 
