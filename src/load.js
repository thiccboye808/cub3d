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
  reimage: ( mapdata ) =>
  {
    for( let z = mapdata.max.z - 1; z >= 0; z -- )
      for( let y = 0; y < mapdata.max.y; y ++ )
        for( let x = 0; x < mapdata.max.x; x ++ )
          mapdata.array[ x ][ y ][ z ] = sprite.sprites[ mapdata.array[ x ][ y ][ z ] ];
    return mapdata;
  },
  setmap: ( mapdata ) =>
  {
    map = load.reimage( mapdata );
  }
}