// setup.js
//
// p5 setup function

'use strict';

function setup()
{
  event = new EventHandler();
  input = new InputHandler();
  camera = new Camera( input );
  sprite = new Spriteset();
  map = new Map();
  save = new MapSaver( map );
  edit = new MapEditor( map );
  sprite.load( "./data/sprites.json" );
  map.load( "./data/map.json" );
}