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
  map: ( filename ) =>
  {
    /*
    let exportmap = new Array();

    for( let x = 0; x < map.max.x; x ++ )
    {
      exportmap[ x ] = new Array();
      for( let y = 0; y < map.max.y; y ++ )
      {
        exportmap[ x ][ y ] = new Array();
        for( let z = 0; z < map.max.z; z ++ )
          if( map.array[ x ][ y ][ z ] != sprite.sprites.empty )
            exportmap[ x ][ y ][ z ] = map.array[ x ][ y ][ z ].name;
          else
            exportmap[ x ][ y ][ z ] = "empty";
      }
    }
    */
    save.download( filename, JSON.stringify( map ) );
  }
}