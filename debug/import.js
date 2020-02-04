// import.js
//
// debug console functions
// for importing

let im = // cant use import so shortened to im
{
  load: ( filename, callback ) =>
  {
    fetch( filename )
	  .then( response => response.text() )
	  .then( ( data ) => {
	    im.mapcallback( JSON.parse( data ) );
	  } );
  },
  map: ( filename ) =>
  {
    im.load( filename, im.mapcallback );
  },
  mapcallback: ( mapdata ) =>
  {
    for( let z = map.max.z - 1; z >= 0; z -- )
      for( let y = 0; y < map.max.y; y ++ )
        for( let x = 0; x < map.max.x; x ++ )
          map.array[ x ][ y ][ z ] = sprite.sprites[ mapdata[ x ][ y ][ z ] ]
  }
}