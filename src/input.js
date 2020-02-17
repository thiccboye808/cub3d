// input.js
// 
// input handler function
// \w helper objects

'use strict';

const INPUT_KEY_W = 87,
      INPUT_KEY_A = 65,
      INPUT_KEY_S = 83,
      INPUT_KEY_D = 68,
      INPUT_MOUSEWHEEL_SMOOTHING = 3;

class Mousewheel
{
  constructor()
  {
    this.delta = null;
    this.isnewdelta = false;
  }

  get()
  {
    if( this.isnewdelta )
    {
      this.isnewdelta = false;
      return this.delta;
    }
    else
      return 0;
  }
}

class Mouse
{
  constructor()
  {
    this.x = null;
    this.y = null;
    this.wheel = new Mousewheel();
  }
}

class Input
{
  constructor()
  {
    this.keys = new Array( 255 );
    this.mouse = new Mouse();
  };
};

let input = null; // null until Input constructor is to be invoked in setup() 

// p5.js input events:

function keyPressed() 
{
  input.keys[ keyCode ] = true;
}

function keyReleased() 
{
  input.keys[ keyCode ] = false;
}

function mouseWheel( event ) 
{
  input.mouse.wheel.delta = -event.delta / INPUT_MOUSEWHEEL_SMOOTHING;
  input.mouse.wheel.isnewdelta = true;
}