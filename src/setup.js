// setup.js
//
// p5 setup function

'use strict';

let event;
let input;
let camera;
let sprite;
let map;
let player;
let save;
let edit;

function setup()
{
  event = new EventHandler();
  input = new InputHandler();
  camera = new Camera( input );
  sprite = new Spriteset();
  map = new Map();
  player = new Player( "player", 3, 8, 6 );
  save = new MapSaver( map );
  edit = new MapEditor( map );
  sprite.load( "./data/sprites.json" );
  map.load( "./data/map.json" );
}