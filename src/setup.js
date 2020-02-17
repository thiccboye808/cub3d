// setup.js
//
// p5 setup function

'use strict';

function setup()
{
  event = new EventHandler();
  input = new Input();
  camera = new Camera( input );
  sprite = new Spriteset();
  map = new Map();
  sprite.load( "./data/sprites.json" );
  map.load( "./data/newmap.json" );
}