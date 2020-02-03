const CUBE_W = 30;
const CUBE_H = 33;

const CUBE_TILE_XX = 16;
const CUBE_TILE_XY = 8;
const CUBE_TILE_YX = -16;
const CUBE_TILE_YY = 8;
const CUBE_TILE_YZ = 19;

const EMPTYSPR = 0;
const CUBESPR_PATH = './img/cube.png';
const GRASSSPR_PATH = './img/grass.png';

sprite =
{
  types: 0, // 
  preload: ( spritefile ) =>
  {
    let json = require( spritefile );
    console.log( json );
  }
}