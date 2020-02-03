// edit.js
//
// debug console functions
// for editing the cube map

let edit =
{
  cube: ( x, y, z, c ) => // adds cube, returns cube
  {
    x = Math.round( x );
    y = Math.round( y );
    z = Math.round( z );
    map.cubes[ x ][ y ][ z ] = c;
    console.log( `edited cube at (${x}, ${y}, ${z}) to ${c}` );
    return c;
  },
  line: ( x1, y1, z1, x2, y2, z2, c ) => // adds a line cubes from 2 points, returns cube 
  {
    if( x1 != x2 )
      for( let x = Math.min( x1, x2 ); x <= Math.max( x1, x2 ); x++ ) 
      {
        let y = ( ( y2 - y1 ) / ( x2 - x1 ) * ( x - x1 ) ) + y1;
        let z = ( ( z2 - z1 ) / ( x2 - x1 ) * ( x - x1 ) ) + z1;
        edit.cube( x, y, z, c );
      }
    else if( y1 != y2 )
      for( let y = Math.min( y1, y2 ); y <= Math.max( y1, y2 ); y++ ) 
      {
        let x = ( ( x2 - x1 ) / ( y2 - y1 ) * ( y - y1 ) ) + x1;
        let z = ( ( z2 - z1 ) / ( y2 - y1 ) * ( y - y1 ) ) + z1;
        edit.cube( x, y, z, c );
      }
    else if( z1 != z2 )
      for( let z = Math.min( z1, z2 ); z <= Math.max( z1, z2 ); z++ ) 
      {
        let x = ( ( x2 - x1 ) / ( z2 - z1 ) * ( z - z1 ) ) + x1;
        let y = ( ( y2 - y1 ) / ( z2 - z1 ) * ( z - z1 ) ) + y1;
        edit.cube( x, y, z, c );
      }
    return c;
  },
  fill: ( x, y, z, xl, yl, zl, c ) =>
  {
    for( let zc = z; zc <= z + zl; zc ++ )
      for( let xc = x; xc <= x + xl; xc ++ )
        for( let yc = y; yc <= y + yl; yc++ )
            edit.cube( xc, yc, zc, c );
    return c;
  }
}