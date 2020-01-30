function keys()
{
  if( keyIsPressed )
    switch( key )
    {
      case 'w':
        camera.y--;
        break;
      case 'a': 
        camera.x--;
        break;
      case 's':
        camera.y++;
        break;
      case 'd':
        camera.x++;
        break;
    }
}