// mapsaver.js
//
// debug console functions
// for exporting map data
// into a json string and
// downloading it

'use strict';

class MapSaver
{
  constructor( rmap )
  {
    this.rmap = rmap;
  }

  download( filename, data )
  {
    var e = document.createElement( 'a' );
    e.setAttribute( 'href', 'data:text/json;charset=utf-8,' + encodeURIComponent( data ) );
    e.setAttribute( 'download', filename );

    e.style.display = 'none';
    document.body.appendChild( e );

    e.click();

    document.body.removeChild( e );
  }

  decycle( obj, stack = [] )
  {
    if( !obj || typeof obj !== 'object' )
      return obj;
    if( stack.includes( obj ) )
      return null;
    let s = stack.concat( [ obj ] );

    return Array.isArray( obj ) ? obj.map( x => this.decycle( x, s ) )
      : Object.fromEntries( Object.entries( obj ).map( ( [ k, v ] ) => [ k, save.decycle( v, s ) ] ) );
  }

  map( filename )
  {
    this.download( filename, JSON.stringify( save.decycle( this.rmap.data ), 
      ( key, val ) =>
      {
        if( key == "array" )
          for( let x = 0; x < this.rmap.data.max.x; x ++ )
            for( let y = 0; y < this.rmap.data.max.x; y ++ )
              for( let z = 0; z < this.rmap.data.max.x; z ++ )
                val[ x ][ y ][ z ] = ( val[ x ][ y ][ z ] != null ) ? val[ x ][ y ][ z ].name : null;
        return val;
      } ) );
  }
}

