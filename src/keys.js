const KEYCODE_W = 87;
const KEYCODE_A = 65;
const KEYCODE_S = 83;
const KEYCODE_D = 68;

let keys = new Array( 255 );

function keyPressed() 
{
  keys[ keyCode ] = true;
}

function keyReleased() 
{
  keys[ keyCode ] = false;
}