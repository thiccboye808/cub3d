// edit.js
//
// debug console functions
// for editing the cube map

let edit =
{
  add: ( x, y, z, s ) => // adds sprite, returns sprite
  {
    if( typeof s === "string" )
      s = sprite.sprites[ s.valueOf() ];
    x = Math.round( x );
    y = Math.round( y );
    z = Math.round( z );
    map.data.array[ x ][ y ][ z ] = s;
    console.log( `edited cube at (${x}, ${y}, ${z}) to ${s}` );
    return s;
  },
  line: ( x1, y1, z1, x2, y2, z2, s ) => // adds a line of sprites from 2 points, returns sprite 
  {
    if( x1 != x2 )
      for( let x = Math.min( x1, x2 ); x <= Math.max( x1, x2 ); x ++ ) 
      {
        let y = ( ( y2 - y1 ) / ( x2 - x1 ) * ( x - x1 ) ) + y1;
        let z = ( ( z2 - z1 ) / ( x2 - x1 ) * ( x - x1 ) ) + z1;
        edit.add( x, y, z, s );
      }
    else if( y1 != y2 )
      for( let y = Math.min( y1, y2 ); y <= Math.max( y1, y2 ); y ++ ) 
      {
        let x = ( ( x2 - x1 ) / ( y2 - y1 ) * ( y - y1 ) ) + x1;
        let z = ( ( z2 - z1 ) / ( y2 - y1 ) * ( y - y1 ) ) + z1;
        edit.add( x, y, z, s );
      }
    else if( z1 != z2 )
      for( let z = Math.min( z1, z2 ); z <= Math.max( z1, z2 ); z ++ ) 
      {
        let x = ( ( x2 - x1 ) / ( z2 - z1 ) * ( z - z1 ) ) + x1;
        let y = ( ( y2 - y1 ) / ( z2 - z1 ) * ( z - z1 ) ) + y1;
        edit.add( x, y, z, s );
      }
    return s;
  },
  fill: ( x, y, z, xl, yl, zl, s ) =>
  {
    for( let zs = z; zs <= z + zl; zs ++ )
      for( let xs = x; xs <= x + xl; xs ++ )
        for( let ys = y; ys <= y + yl; ys ++ )
          edit.add( xs, ys, zs, s );
    return s;
  }
}