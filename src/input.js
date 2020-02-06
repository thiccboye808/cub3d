const KEYCODE_W = 87;
const KEYCODE_A = 65;
const KEYCODE_S = 83;
const KEYCODE_D = 68;

let input =
{
  keys: new Array(255)
}

function keyPressed() 
{
  input.keys[ keyCode ] = true;
}

function keyReleased() 
{
  input.keys[ keyCode ] = false;
}