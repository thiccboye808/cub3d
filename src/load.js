// load.js
//
// debug console functions
// for importing

let load =
{
  load: ( filename, callback ) =>
  {
    fetch( filename )
	  .then( response => response.text() )
	  .then( ( data ) => {
	    callback( JSON.parse( data ) );
	  } );
  },
  map: ( filename ) =>
  {
    load.load( filename, load.setmap );
  },
  setmap: ( mapdata ) =>
  {
    for( let z = map.max.z - 1; z >= 0; z -- )
      for( let y = 0; y < map.max.y; y ++ )
        for( let x = 0; x < map.max.x; x ++ )
          map.array[ x ][ y ][ z ] = sprite.sprites[ mapdata[ x ][ y ][ z ] ];
  }
}