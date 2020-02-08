// canvas.js
//
// canvas/window and p5 event handler

function windowResized() 
{
  resizeCanvas( windowWidth, windowHeight );
}

let canvas =
{
  setup: () =>
  {
    createCanvas();
    windowResized();
  }
}