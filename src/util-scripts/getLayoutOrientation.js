export default {
  getLayoutOrientation: getLayoutOrientation
};

function getLayoutOrientation(route) {
  var orientation;

  switch (route.name) {
    case 'home':
      orientation = 'h';
      break;
    case 'blog':
      orientation = 'v';
      break;
    case 'd3':
      orientation = 'h';
      break;
    case 'donut':
      orientation = 'h';
      break;
    case 'lineChart':
      orientation = 'h';
      break;
    case 'about':
      orientation = 'v';
      break;
    case 'contact':
      orientation = 'h';
      break;
    default:
      orientation = 'h';
  }

  return orientation;
}
