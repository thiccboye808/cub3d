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

let cube;
let camera = { x: 0, y: 0 };
let bg = BG_INIT;