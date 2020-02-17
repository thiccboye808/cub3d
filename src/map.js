// map.js
//
// class for a 3 dimentional map of 
// sprites
// includes .json loading protocol

'use strict';

const MAP_EMPTY_DATA = // empty map data object
{
  max:
  {
    x: 0,
    y: 0,
    z: 0
  },
  bg: "#000000",
  array: [[[]]],
}

class Map // map class
{
  constructor()
  {
    this.data = MAP_EMPTY_DATA;
  }

  reimage( data )
  {
    for( let z = data.max.z - 1; z >= 0; z -- )
      for( let y = 0; y < data.max.y; y ++ )
        for( let x = 0; x < data.max.x; x ++ )
          data.array[ x ][ y ][ z ] = sprite.sprites[ data.array[ x ][ y ][ z ] ];
    return data;
  }

  load( mapjson )
  {
		fetch( mapjson )
			.then( response => response.text() )
      .then( ( data ) => 
      { 
        this.data = this.reimage( JSON.parse( data ) );
      } );
  }

  resize( mx, my, mz )
  {
    this.data.max = // set max bounds for map
    { 
      x: mx, 
      y: my, 
      z: mz 
    };
    this.data.array = new Array();
    for( let x = 0; x < this.max.x; x ++ )
    {
      this.data.array[ x ] = new Array();
      for( let y = 0; y < this.max.y; y ++ )
      {
        this.data.array[ x ][ y ] = new Array();
        for( let z = 0; z < this.max.z; z ++ )
          this.data.array[ x ][ y ][ z ] = ( this.data.array[ x ][ y ][ z ] != undefined ) ? this.data.array[ x ][ y ][ z ] : null;
      }
    }
  }
}

let map = null; // null until Map constructor is to be invoked in setup() 

// TO BE REPLACED/MOVED SOMEDAY:
function equal( a, b ) 
{
  let ap = Object.getOwnPropertyNames( a );
  let bp = Object.getOwnPropertyNames( b );
  for( let i = 0; i < ap.length; i ++ ) 
	{
    let n = ap[ i ];
    if( a[ n ] !== b[ n ] ) 
      return false;
  }
  return true;
}