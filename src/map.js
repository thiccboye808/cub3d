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
    let newmax = // new max bounds for map
    { 
      x: mx, 
      y: my, 
      z: mz 
    };
    var newlength = newmax.x * newmax.y * newmax.z;
    this.data.array.length += newlength - this.data.array.length;
    this.data.max = newmax;
  }
}

let map = null; // null until Map constructor is invoked in setup() 