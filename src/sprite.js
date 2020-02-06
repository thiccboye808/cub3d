const CUBE_W = 30;
const CUBE_H = 33;

const CUBE_TILE_XX = 15;
const CUBE_TILE_XY = 7;
const CUBE_TILE_YX = -14;
const CUBE_TILE_YY = 7;
const CUBE_TILE_YZ = 17;

sprite =
{
  loaded: false, // if sprites are loaded
  files: {}, // sprite name
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
		{
		  if( sprite.sprites.hasOwnProperty( spr ) && sprite.sprites[ spr ] != "" )
			sprite.sprites[ spr ] = loadImage( sprite.sprites[ spr ] );
		  sprite.sprites[ spr ].name = spr;
		}
		sprite.loaded = true;
	  } );
  }
}