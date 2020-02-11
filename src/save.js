// save.js
//
// debug console functions
// for exporting

let save =
{
  download: ( filename, data ) =>
  {
    var e = document.createElement( 'a' );
    e.setAttribute( 'href', 'data:text/json;charset=utf-8,' + encodeURIComponent( data ) );
    e.setAttribute( 'download', filename );

    e.style.display = 'none';
    document.body.appendChild( e );

    e.click();

    document.body.removeChild( e );
  },
  decycle: ( obj, stack = [] ) =>
  {
    if( !obj || typeof obj !== 'object' )
      return obj;
    if( stack.includes( obj ) )
      return null;
    let s = stack.concat( [ obj ] );

    return Array.isArray( obj ) ? obj.map( x => save.decycle( x, s ) )
      : Object.fromEntries( Object.entries( obj ).map( ( [ k, v ] ) => [ k, save.decycle( v, s ) ] ) );
  },
  map: ( filename ) =>
  {
    /*
    let exportmap = {};
    exportmap.array = new Array();

    for( let x = 0; x < map.max.x; x ++ )
    {
      exportmap.array[ x ] = new Array();
      for( let y = 0; y < map.max.y; y ++ )
      {
        exportmap.array[ x ][ y ] = new Array();
        for( let z = 0; z < map.max.z; z ++ )
          if( map.array[ x ][ y ][ z ] != sprite.sprites.empty )
            exportmap.array[ x ][ y ][ z ] = map.array[ x ][ y ][ z ].name;
          else
            exportmap.array[ x ][ y ][ z ] = "empty";
      }
    } */
    save.download( filename, JSON.stringify( save.decycle( map ), 
      ( key, val ) =>
      {
        if( key == "array" )
          for( let x = 0; x < map.max.x; x ++ )
            for( let y = 0; y < map.max.x; y ++ )
              for( let z = 0; z < map.max.x; z ++ )
                val[ x ][ y ][ z ] = ( val[ x ][ y ][ z ] != null ) ? val[ x ][ y ][ z ].name : null;
        return val;
      } ) );
  }
}