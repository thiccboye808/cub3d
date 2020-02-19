// spriteset.js
//
// a set of p5 sprites generated 
// from a fetched json file and 
// a folder of images to become
// sprites

'use strict';

// values based on 30 x 33 sprites:
const SPRITE_WIDTH_DEFAULT = 30,
      SPRITE_HEIGHT_DEFAULT = 33,
		  SPRITE_TILE_XX_DEFAULT = 14,
			SPRITE_TILE_XY_DEFAULT = 7,
			SPRITE_TILE_YX_DEFAULT = -14,
			SPRITE_TILE_YY_DEFAULT = 7,
			SPRITE_TILE_YZ_DEFAULT = 18;

class Spriteset
{
	constructor()
	{
		this.filename = {} // sprite filename
		this.sprites = {}; // loaded sprites
		this.tile = // sprite projection tiling values
		{
			width: SPRITE_WIDTH_DEFAULT,
			height: SPRITE_HEIGHT_DEFAULT, 
			xx: SPRITE_TILE_XX_DEFAULT,
			xy: SPRITE_TILE_XY_DEFAULT,
			yx: SPRITE_TILE_YX_DEFAULT,
			yy: SPRITE_TILE_YY_DEFAULT,
			yz: SPRITE_TILE_YZ_DEFAULT
		}
	}

  load( spritejson )
  {
		fetch( spritejson )
			.then( response => response.text() )
			.then( ( data ) => 
			{
				this.loaded( data );
	  	} );
	}
	
	loaded( data )
	{
		this.filename = JSON.parse( data );
		this.sprites = Object.assign( {}, sprite.filename );
		for( let spr in this.sprites )
		{
			if( this.sprites.hasOwnProperty( spr ) && sprite.sprites[ spr ] != "" )
			this.sprites[ spr ] = loadImage( sprite.sprites[ spr ] );
			loadPixels();
			this.sprites[ spr ] = Object.assign( this.sprites[ spr ], { name: spr } );
		}
		this.loaded = true;
	}
}
