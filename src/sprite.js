const CUBE_W = 30;
const CUBE_H = 33;

const CUBE_TILE_XX = 16;
const CUBE_TILE_XY = 8;
const CUBE_TILE_YX = -16;
const CUBE_TILE_YY = 8;
const CUBE_TILE_YZ = 19;

sprite =
{
  loaded: false, // if sprites are loaded
  files: {}, // sprite filenames
  sprites: {}, // loaded sprites
  preload: ( spritejson ) =>
  {
	//let json = require( spritejson );

	fetch( spritejson )
	  .then( response => response.text() )
	  .then( ( data ) => {
		sprite.files = JSON.parse( data );
		sprite.sprites = Object.assign( {}, sprite.files );
		for( let spr in sprite.sprites )
		  if( sprite.sprites.hasOwnProperty( spr ) && spr !== "" )
			sprite.sprites[ spr ] = loadImage( sprite.sprites[ spr ] );
		sprite.loaded = true;
	  } );
  }
}