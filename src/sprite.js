const SPRITE_WIDTH_DEFAULT = 30,
      SPRITE_HEIGHT_DEFAULT = 33;

// values based on 30 x 33 sprites
const SPRITE_TILE_XX_DEFAULT = 14,
			SPRITE_TILE_XY_DEFAULT = 7,
			SPRITE_TILE_YX_DEFAULT = -14,
			SPRITE_TILE_YY_DEFAULT = 7,
			SPRITE_TILE_YZ_DEFAULT = 18;

sprite =
{
  filename: {}, // sprite filename
	sprites: {}, // loaded sprites
	tile: // sprite projection tiling values
	{
		width: SPRITE_WIDTH_DEFAULT,
		height: SPRITE_HEIGHT_DEFAULT, 
		xx: SPRITE_TILE_XX_DEFAULT,
		xy: SPRITE_TILE_XY_DEFAULT,
		yx: SPRITE_TILE_YX_DEFAULT,
		yy: SPRITE_TILE_YY_DEFAULT,
		yz: SPRITE_TILE_YZ_DEFAULT
	},
  preload: ( spritejson ) =>
  {
		fetch( spritejson )
			.then( response => response.text() )
			.then( ( data ) => {
			sprite.filename = JSON.parse( data );
			sprite.sprites = Object.assign( {}, sprite.filename );
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