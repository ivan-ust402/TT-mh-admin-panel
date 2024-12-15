export const checkMenuKey = (menuKey: string) => {
  switch (menuKey) {
    case 'profile':
    case 'posts':
    case 'authors':
    case 'tags':    
      return true;
    default:
      return false;
  }
}