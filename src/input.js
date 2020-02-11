const KEYCODE_W = 87;
const KEYCODE_A = 65;
const KEYCODE_S = 83;
const KEYCODE_D = 68;

let Input = function()
{
  this.keys = new Array( 255 );
}

Input.prototypemouse = function()
{
  this.x = 0;
  this.y = 0;
}

Input.mouse.prototype.wheel = function()
  { 
    this.delta = 0; 
    this.isnew = 0;
    this.get = function()
    { 
      this.isnew = false;
      return this.isnew ? this.delta : 0; 
    }
  }

let input = new Input();

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
  input.wheeldelta = event.delta;
  input.isnewdelta = true;
}