// eventhandler.js
//
// generalized event handler
// uses p5 event functions
// for handling

'use strict';

class EventHandler
{
  constructor()
  {
    createCanvas();
    windowResized();
  }
};

// p5 event handler functions:

function windowResized() // p5 window resized event function
{
  resizeCanvas( windowWidth, windowHeight );
}