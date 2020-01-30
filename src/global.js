const WIDTH = 400;
const HEIGHT = 400;
const BG_INIT = '#bebeff';

const CUBE_W = 30;
const CUBE_H = 33;
const CUBE_TILE_XX = 16;
const CUBE_TILE_XY = 8;
const CUBE_TILE_YX = -16;
const CUBE_TILE_YY = 8;
const CUBE_TILE_YZ = 19;
const CAMERA_SPEED = 1;
const CAMERA_DRAG = .1;

let camera = { v: { x: 0, y: 0 }, x: 0, y: 0 };
let keys = new Array( 255 );
let bg = BG_INIT;
let cube;